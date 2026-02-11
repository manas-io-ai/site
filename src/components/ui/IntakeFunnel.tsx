'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from '@/components/ui/Button';
import { TextInput } from '@/components/ui/FormInput';
import RadioCardGroup from '@/components/ui/RadioCardGroup';
import { openCalPopup } from '@/components/ui/CalEmbed';
import { segments, CAL_LINK } from '@/data/funnel';
import type { FunnelFormData, FunnelStep } from '@/types/funnel';

interface StepConfig {
  key: FunnelStep;
  title: string;
  subtitle: string;
}

function getStepConfigs(segment: FunnelFormData['segment']): StepConfig[] {
  const q1: StepConfig = {
    key: 'segment',
    title: 'Welcome, how can we help?',
    subtitle: 'Are you contacting on behalf of...',
  };

  if (segment === 'myself') {
    return [
      q1,
      { key: 'details', title: 'Tell us about yourself', subtitle: 'We\'d love to know who we\'re talking to.' },
    ];
  }

  if (segment) {
    const segLabel = segment.charAt(0).toUpperCase() + segment.slice(1);
    return [
      q1,
      { key: 'details', title: `What's the name of your company?`, subtitle: '' },
      { key: 'contact', title: `Who's joining the call?`, subtitle: '' },
      { key: 'needs', title: `What does your ${segLabel.toLowerCase()} need?`, subtitle: '' },
    ];
  }

  return [q1];
}

export default function IntakeFunnel() {
  const [stepIndex, setStepIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    control,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FunnelFormData>({
    defaultValues: {
      segment: '',
      companyName: '',
      name: '',
      email: '',
      profession: '',
      needs: '',
    },
  });

  const segment = watch('segment');
  const stepConfigs = getStepConfigs(segment);
  const current = stepConfigs[stepIndex];
  const isLastStep = stepIndex === stepConfigs.length - 1;

  function fieldsForStep(step: FunnelStep): (keyof FunnelFormData)[] {
    switch (step) {
      case 'segment': return ['segment'];
      case 'details':
        return segment === 'myself'
          ? ['name', 'email', 'profession']
          : ['companyName'];
      case 'contact': return ['name', 'email'];
      case 'needs': return ['needs'];
    }
  }

  const goNext = useCallback(async () => {
    const valid = await trigger(fieldsForStep(current.key));
    if (!valid) return;
    if (!isLastStep) {
      setStepIndex((i) => i + 1);
    }
  }, [current, isLastStep, trigger, segment, stepIndex]);

  function goBack() {
    if (stepIndex > 0) {
      setStepIndex((i) => i - 1);
    }
  }

  // Auto-advance after segment selection
  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  function handleSegmentSelect(value: string, onChange: (v: string) => void) {
    onChange(value);
    clearTimeout(autoAdvanceTimer.current);
    autoAdvanceTimer.current = setTimeout(() => {
      setStepIndex(1);
    }, 400);
  }

  useEffect(() => {
    return () => clearTimeout(autoAdvanceTimer.current);
  }, []);

  async function onSubmit(data: FunnelFormData) {
    setSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          segment: data.segment,
          companyName: data.companyName || undefined,
          name: data.name,
          email: data.email,
          profession: data.profession || undefined,
          needs: data.needs || undefined,
        }),
      });

      if (!res.ok) throw new Error('Submission failed');
    } catch {
      console.error('Intake submission failed');
    }

    setSubmitting(false);

    const notes = [
      `Segment: ${data.segment}`,
      data.companyName && `Company: ${data.companyName}`,
      data.profession && `Profession: ${data.profession}`,
      data.needs && `Needs: ${data.needs}`,
    ]
      .filter(Boolean)
      .join('\n');

    openCalPopup(CAL_LINK, { name: data.name, email: data.email, notes });
  }

  return (
    <div className="w-full min-h-[420px] flex flex-col justify-center items-center">
      {/* Step header — Typeform style */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-accent text-[15px] font-mono">{stepIndex + 1}</span>
          <span className="text-accent text-[15px]">&rarr;</span>
          <h3 className="text-white text-[22px] md:text-[26px] font-sans leading-tight">
            {current.title}
          </h3>
        </div>
        <p className="text-white/40 text-[15px] ml-[42px]">
          {current.subtitle}
        </p>
      </div>

      {/* Step content */}
      <form onSubmit={handleSubmit(onSubmit)} className="pl-[42px]">
        {/* Step: Segment */}
        {current.key === 'segment' && (
          <Controller
            control={control}
            name="segment"
            rules={{ required: 'Please select who you are' }}
            render={({ field }) => (
              <RadioCardGroup
                options={segments}
                value={field.value}
                onChange={(v) => handleSegmentSelect(v, field.onChange)}
              />
            )}
          />
        )}

        {/* Step: Details (myself) */}
        {current.key === 'details' && segment === 'myself' && (
          <div className="flex flex-col gap-4 max-w-[400px]">
            <TextInput
              label="Name"
              placeholder="Your name"
              error={errors.name?.message}
              {...register('name', { required: 'Name is required' })}
            />
            <TextInput
              label="Email"
              type="email"
              placeholder="you@example.com"
              error={errors.email?.message}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email',
                },
              })}
            />
            <TextInput
              label="What do you do?"
              placeholder="e.g. Product Manager, Developer, Founder"
              error={errors.profession?.message}
              {...register('profession', { required: 'Profession is required' })}
            />
          </div>
        )}

        {/* Step: Details (org) — company name */}
        {current.key === 'details' && segment !== 'myself' && (
          <div className="flex flex-col gap-4 max-w-[400px]">
            <TextInput
              label="Company name"
              placeholder="Your company"
              error={errors.companyName?.message}
              {...register('companyName', { required: 'Company name is required' })}
            />
          </div>
        )}

        {/* Step: Contact (org) */}
        {current.key === 'contact' && (
          <div className="flex flex-col gap-4 max-w-[400px]">
            <TextInput
              label="Your name"
              placeholder="Full name"
              error={errors.name?.message}
              {...register('name', { required: 'Name is required' })}
            />
            <TextInput
              label="Email"
              type="email"
              placeholder="you@company.com"
              error={errors.email?.message}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email',
                },
              })}
            />
          </div>
        )}

        {/* Step: Needs (org) — freeform text */}
        {current.key === 'needs' && segment && segment !== 'myself' && (
          <div className="flex flex-col gap-4 max-w-[400px]">
            <TextInput
              as="textarea"
              label="Tell us more"
              placeholder="Describe what you're looking for..."
              error={errors.needs?.message}
              {...register('needs', { required: 'Please tell us what you need' })}
            />
          </div>
        )}

        {/* Navigation */}
        {current.key !== 'segment' && (
          <div className="flex items-center gap-3 mt-8">
            <button
              type="button"
              onClick={goBack}
              className="text-white/40 hover:text-white text-[13px] font-mono-alt uppercase tracking-[0.1em] transition-colors cursor-pointer"
            >
              &larr; Back
            </button>
            {isLastStep ? (
              <Button
                variant="primary"
                type="submit"
                className="!px-8 !py-3 text-[13px]"
              >
                {submitting ? 'Submitting...' : 'Schedule Call'}
              </Button>
            ) : (
              <Button
                variant="primary"
                type="button"
                onClick={goNext}
                className="!px-8 !py-3 text-[13px]"
              >
                OK
              </Button>
            )}
          </div>
        )}

        {submitError && (
          <p className="text-accent text-[13px] mt-4">{submitError}</p>
        )}
      </form>
    </div>
  );
}
