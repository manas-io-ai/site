'use client';

import { useForm } from 'react-hook-form';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';
import { TextInput, SelectInput } from '@/components/ui/FormInput';
import { openCalPopup } from '@/components/ui/CalEmbed';
import { CAL_LINK, interestOptions } from '@/data/intake';
import type { IntakeFormData } from '@/types';

const expectations = [
  '30-minute video call',
  'Tailored AI recommendations',
  'No commitment required',
];

export default function DiscoveryCall() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IntakeFormData>();

  function onSubmit(data: IntakeFormData) {
    const notes = [
      data.company && `Company: ${data.company}`,
      data.interest && `Interest: ${data.interest}`,
      data.message && data.message,
    ]
      .filter(Boolean)
      .join('\n');

    openCalPopup(CAL_LINK, {
      name: data.name,
      email: data.email,
      notes,
    });
  }

  return (
    <section id="discovery" className="py-20 px-[2.4rem]">
      <ScrollReveal>
        <h2 className="text-[clamp(2rem,4vw,4rem)] font-pixel uppercase leading-[1.05] tracking-[-0.02em] mb-4">
          Schedule a Discovery Call
        </h2>
        <p className="text-white/60 text-[15px] max-w-[520px] mb-10">
          Tell us about your project and book a free 30-minute call with our team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Intake form */}
          <div className="border border-white/[0.06] rounded-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <TextInput
                label="Name"
                placeholder="Your name"
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
              <TextInput
                label="Company"
                placeholder="Your company"
                {...register('company')}
              />
              <SelectInput
                label="What can we help with?"
                options={interestOptions}
                {...register('interest')}
              />
              <TextInput
                label="Tell us more"
                as="textarea"
                placeholder="Brief description of your project or goals (optional)"
                {...register('message')}
              />
              <Button type="submit" variant="primary" className="mt-2 w-full">
                Schedule Call
              </Button>
            </form>
          </div>

          {/* What to expect */}
          <div className="border border-white/[0.06] rounded-xl p-8 flex flex-col justify-center">
            <h3 className="text-[11px] font-mono-alt uppercase tracking-[0.15em] text-white/40 mb-6">
              What to expect
            </h3>
            <ul className="flex flex-col gap-4">
              {expectations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 block h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span className="text-white text-[17px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
