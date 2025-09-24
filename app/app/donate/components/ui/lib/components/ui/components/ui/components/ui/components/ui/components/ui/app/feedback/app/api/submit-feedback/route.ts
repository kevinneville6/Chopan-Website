import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the feedback data (in a real app, you'd save to database)
    console.log('Feedback received:', {
      timestamp: new Date().toISOString(),
      donationAmount: body.donationAmount,
      rating: body.rating,
      donorName: body.donorInfo?.fullName || 'Anonymous',
      donorEmail: body.donorInfo?.email || 'Not provided',
      experience: body.feedback?.experience || '',
      suggestions: body.feedback?.suggestions || '',
      futureSupport: body.feedback?.futureSupport || '',
      testimonial: body.feedback?.testimonial || ''
    });

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification to foundation
    // 3. Add to CRM system
    // 4. Send thank you email to donor

    return NextResponse.json({ 
      success: true, 
      message: 'Feedback submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing feedback:', error);
    return NextResponse.json(
      { success: false, message: 'Error submitting feedback' },
      { status: 500 }
    );
  }
}
