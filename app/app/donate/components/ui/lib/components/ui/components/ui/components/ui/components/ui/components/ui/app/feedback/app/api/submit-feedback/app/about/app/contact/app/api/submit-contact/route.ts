import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the contact/volunteer data (in a real app, you'd save to database)
    console.log('Contact/Volunteer submission received:', {
      timestamp: new Date().toISOString(),
      type: body.type,
      name: body.name,
      email: body.email,
      phone: body.phone || 'Not provided',
      ...(body.type === 'contact' ? {
        subject: body.subject,
        message: body.message
      } : {
        age: body.age || 'Not provided',
        location: body.location,
        skills: body.skills,
        availability: body.availability,
        experience: body.experience || 'None provided',
        motivation: body.motivation,
        commitment: body.commitment
      })
    });

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification to foundation
    // 3. Send confirmation email to submitter
    // 4. Add to CRM system for follow-up

    return NextResponse.json({ 
      success: true, 
      message: body.type === 'contact' ? 'Message sent successfully' : 'Volunteer application submitted successfully'
    });
  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json(
      { success: false, message: 'Error processing submission' },
      { status: 500 }
    );
  }
}
