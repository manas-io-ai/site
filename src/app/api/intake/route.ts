import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import { Resend } from 'resend';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

interface IntakePayload {
  segment: string;
  companyName?: string;
  name: string;
  email: string;
  profession?: string;
  needs?: string;
}

export async function POST(request: Request) {
  let body: IntakePayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { segment, companyName, name, email, profession, needs } = body;

  if (!segment || !name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Insert into Supabase (non-fatal on failure)
  try {
    const { error } = await getSupabase().from('leads').insert({
      segment,
      company_name: companyName || null,
      name,
      email,
      profession: profession || null,
      needs: needs || null,
      source: 'website',
    });

    if (error) {
      console.error('Supabase insert error:', error.message);
    }
  } catch (err) {
    console.error('Supabase insert failed:', err);
  }

  // Send email notification via Resend
  try {
    const lines = [
      `Segment: ${segment}`,
      companyName && `Company: ${companyName}`,
      `Name: ${name}`,
      `Email: ${email}`,
      profession && `Profession: ${profession}`,
      needs && `Needs: ${needs}`,
    ]
      .filter(Boolean)
      .join('\n');

    await getResend().emails.send({
      from: 'Manas AI <intake@manasexp.com>',
      to: 'jos@manasexp.com',
      subject: `New lead: ${name} (${segment})`,
      text: `New intake submission:\n\n${lines}`,
    });
  } catch (err) {
    console.error('Resend email failed:', err);
  }

  return NextResponse.json({ success: true });
}
