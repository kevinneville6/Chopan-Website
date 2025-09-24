"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Star, CheckCircle, Mail, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [donationAmount, setDonationAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({ fullName: "", email: "" });
  const [feedback, setFeedback] = useState({
    experience: "",
    suggestions: "",
    futureSupport: "",
    testimonial: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Get donation info from localStorage
    const amount = localStorage.getItem('donationAmount');
    const info = localStorage.getItem('donorInfo');
    
    if (amount) {
      setDonationAmount(amount);
    }
    
    if (info) {
      try {
        const parsedInfo = JSON.parse(info);
        setDonorInfo(parsedInfo);
      } catch (e) {
        console.log("Could not parse donor info");
      }
    }
  }, []);

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const feedbackData = {
      donationAmount,
      donorInfo,
      rating,
      feedback,
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('/api/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Clear localStorage after successful submission
        localStorage.removeItem('donationAmount');
        localStorage.removeItem('donorInfo');
      } else {
        alert('There was an error submitting your feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('There was an error submitting your feedback. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-800">Thank You!</CardTitle>
              <CardDescription>
                Your feedback has been submitted successfully. We truly appreciate your support and input.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">What Happens Next?</h3>
                <ul className="text-sm text-blue-700 space-y-2 text-left">
                  <li>• Your donation will directly support families in need</li>
                  <li>• We'll send you impact updates via email (if provided)</li>
                  <li>• Your feedback helps us improve our programs</li>
                  <li>• You'll receive a thank you message from our team</li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <Link href="/impact">
                  <Button variant="outline">
                    View Our Impact
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You for Your Donation!
          </h1>
          <p className="text-lg text-gray-600">
            Your generosity makes a real difference. Please share your experience with us.
          </p>
          {donationAmount && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium">
                Donation Amount: <span className="text-2xl font-bold">${donationAmount}</span>
              </p>
              <p className="text-green-600 text-sm">
                This donation will directly support families in Faisalabad, Pakistan
              </p>
            </div>
          )}
        </div>

        {/* Feedback Form */}
        <Card>
          <CardHeader>
            <CardTitle>Share Your Experience</CardTitle>
            <CardDescription>
              Your feedback helps us improve our services and better serve those in need.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating */}
              <div>
                <Label className="text-base font-semibold mb-3 block">
                  How was your donation experience?
                </Label>
                <div className="flex items-center space-x-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleStarClick(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          star <= (hoveredRating || rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  {rating === 0 && "Click to rate your experience"}
                  {rating === 1 && "Poor - We'd love to know how to improve"}
                  {rating === 2 && "Fair - Please tell us what went wrong"}
                  {rating === 3 && "Good - Thank you for your feedback"}
                  {rating === 4 && "Very Good - We're glad you had a positive experience"}
                  {rating === 5 && "Excellent - Thank you for your wonderful support!"}
                </p>
              </div>

              {/* Experience Feedback */}
              <div>
                <Label htmlFor="experience">Tell us about your donation experience</Label>
                <Textarea
                  id="experience"
                  placeholder="How was the donation process? Was it easy to navigate? Any issues you encountered?"
                  value={feedback.experience}
                  onChange={(e) => setFeedback({...feedback, experience: e.target.value})}
                  rows={3}
                />
              </div>

              {/* Suggestions */}
              <div>
                <Label htmlFor="suggestions">Suggestions for improvement</Label>
                <Textarea
                  id="suggestions"
                  placeholder="How can we make the donation process better? Any features you'd like to see?"
                  value={feedback.suggestions}
                  onChange={(e) => setFeedback({...feedback, suggestions: e.target.value})}
                  rows={3}
                />
              </div>

              {/* Future Support */}
              <div>
                <Label htmlFor="futureSupport">Would you consider supporting us again?</Label>
                <Textarea
                  id="futureSupport"
                  placeholder="What would encourage you to donate again? Any specific programs you'd like to support?"
                  value={feedback.futureSupport}
                  onChange={(e) => setFeedback({...feedback, futureSupport: e.target.value})}
                  rows={2}
                />
              </div>

              {/* Testimonial */}
              <div>
                <Label htmlFor="testimonial">Share a testimonial (Optional)</Label>
                <Textarea
                  id="testimonial"
                  placeholder="Would you like to share why you chose to support Chopan Foundation? Your words inspire others to help."
                  value={feedback.testimonial}
                  onChange={(e) => setFeedback({...feedback, testimonial: e.target.value})}
                  rows={3}
                />
                <p className="text-xs text-gray-500 mt-1">
                  With your permission, we may use your testimonial on our website to inspire others.
                </p>
              </div>

              {/* Contact Info Update */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="feedbackName">Your Name (Optional)</Label>
                  <Input
                    id="feedbackName"
                    placeholder="Your full name"
                    value={donorInfo.fullName}
                    onChange={(e) => setDonorInfo({...donorInfo, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="feedbackEmail">Email for Updates (Optional)</Label>
                  <Input
                    id="feedbackEmail"
                    type="email"
                    placeholder="your.email@example.com"
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 flex-1">
                  Submit Feedback
                  <Heart className="ml-2 w-4 h-4" />
                </Button>
                <Link href="/" className="flex-1">
                  <Button type="button" variant="outline" className="w-full">
                    Skip for Now
                    <ArrowLeft className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg">Stay Connected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Get Impact Updates</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Receive regular updates about how your donation is making a difference 
                  in the lives of families in Faisalabad.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  chopanfoundation@gmail.com
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Questions or Concerns?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Have questions about your donation or our programs? 
                  We're here to help and provide transparency.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  +92-0306-7008096
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
