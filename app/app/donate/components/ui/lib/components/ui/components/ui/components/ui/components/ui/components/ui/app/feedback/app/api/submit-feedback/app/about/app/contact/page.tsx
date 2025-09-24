"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Heart, Users, CheckCircle, Copy } from "lucide-react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'contact' | 'volunteer'>('contact');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    location: '',
    skills: '',
    availability: '',
    experience: '',
    motivation: '',
    commitment: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionType, setSubmissionType] = useState<'contact' | 'volunteer'>('contact');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          ...contactForm,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmissionType('contact');
        setIsSubmitted(true);
        setContactForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'volunteer',
          ...volunteerForm,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmissionType('volunteer');
        setIsSubmitted(true);
        setVolunteerForm({
          name: '',
          email: '',
          phone: '',
          age: '',
          location: '',
          skills: '',
          availability: '',
          experience: '',
          motivation: '',
          commitment: ''
        });
      } else {
        alert('There was an error submitting your application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting volunteer form:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
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
              <CardTitle className="text-2xl text-green-800">
                {submissionType === 'contact' ? 'Message Sent!' : 'Application Submitted!'}
              </CardTitle>
              <CardDescription>
                {submissionType === 'contact' 
                  ? 'Thank you for reaching out. We\'ll get back to you within 24 hours.'
                  : 'Thank you for your interest in volunteering. We\'ll review your application and contact you soon.'
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">What Happens Next?</h3>
                <ul className="text-sm text-blue-700 space-y-2 text-left">
                  {submissionType === 'contact' ? (
                    <>
                      <li>• We'll review your message carefully</li>
                      <li>• You'll receive a response within 24 hours</li>
                      <li>• For urgent matters, call +92-0306-7008096</li>
                    </>
                  ) : (
                    <>
                      <li>• We'll review your volunteer application</li>
                      <li>• You'll receive a response within 3-5 business days</li>
                      <li>• We may schedule a brief interview call</li>
                      <li>• Successful applicants will receive orientation details</li>
                    </>
                  )}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Send Another Message
                </Button>
                <Button variant="outline" asChild>
                  <a href="/">Back to Home</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you want to learn more about our work, volunteer with us, or have questions 
            about donations, we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-blue-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="flex-1">
                    <p className="font-medium">Email</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-gray-600">chopanfoundation@gmail.com</p>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard('chopanfoundation@gmail.com')}
                        className="h-6 w-6 p-0"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="flex-1">
                    <p className="font-medium">Phone</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-gray-600">+92-0306-7008096</p>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard('+92-0306-7008096')}
                        className="h-6 w-6 p-0"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">Faisalabad, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="/donate">Make a Donation</a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/about">Learn About Us</a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/impact">View Our Impact</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Forms */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex mb-6 bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                  activeTab === 'contact'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Mail className="w-4 h-4 inline mr-2" />
                General Contact
              </button>
              <button
                onClick={() => setActiveTab('volunteer')}
                className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                  activeTab === 'volunteer'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Users className="w-4 h-4 inline mr-2" />
                Volunteer Application
              </button>
            </div>

            {/* Contact Form */}
            {activeTab === 'contact' && (
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Have questions about our programs, donations, or want to learn more? 
                    We're here to help!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-name">Full Name *</Label>
                        <Input
                          id="contact-name"
                          required
                          placeholder="Your full name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-email">Email Address *</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-phone">Phone Number</Label>
                        <Input
                          id="contact-phone"
                          placeholder="+1 (555) 123-4567"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-subject">Subject *</Label>
                        <Input
                          id="contact-subject"
                          required
                          placeholder="What is this about?"
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="contact-message">Message *</Label>
                      <Textarea
                        id="contact-message"
                        required
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                      <Mail className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Volunteer Form */}
            {activeTab === 'volunteer' && (
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Application</CardTitle>
                  <CardDescription>
                    Join our mission to serve needy children, widows, and families. 
                    Your skills and passion can make a real difference!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="volunteer-name">Full Name *</Label>
                        <Input
                          id="volunteer-name"
                          required
                          placeholder="Your full name"
                          value={volunteerForm.name}
                          onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="volunteer-email">Email Address *</Label>
                        <Input
                          id="volunteer-email"
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          value={volunteerForm.email}
                          onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="volunteer-phone">Phone Number *</Label>
                        <Input
                          id="volunteer-phone"
                          required
                          placeholder="+92-XXX-XXXXXXX"
                          value={volunteerForm.phone}
                          onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="volunteer-age">Age</Label>
                        <Input
                          id="volunteer-age"
                          type="number"
                          placeholder="25"
                          value={volunteerForm.age}
                          onChange={(e) => setVolunteerForm({...volunteerForm, age: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="volunteer-location">Location *</Label>
                        <Input
                          id="volunteer-location"
                          required
                          placeholder="City, Country"
                          value={volunteerForm.location}
                          onChange={(e) => setVolunteerForm({...volunteerForm, location: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="volunteer-skills">Skills & Expertise *</Label>
                      <Textarea
                        id="volunteer-skills"
                        required
                        placeholder="What skills do you bring? (e.g., teaching, healthcare, fundraising, social media, event planning, etc.)"
                        rows={3}
                        value={volunteerForm.skills}
                        onChange={(e) => setVolunteerForm({...volunteerForm, skills: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="volunteer-availability">Availability *</Label>
                      <Textarea
                        id="volunteer-availability"
                        required
                        placeholder="When are you available? How many hours per week can you commit?"
                        rows={2}
                        value={volunteerForm.availability}
                        onChange={(e) => setVolunteerForm({...volunteerForm, availability: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="volunteer-experience">Previous Volunteer Experience</Label>
                      <Textarea
                        id="volunteer-experience"
                        placeholder="Tell us about any previous volunteer work or community service experience..."
                        rows={3}
                        value={volunteerForm.experience}
                        onChange={(e) => setVolunteerForm({...volunteerForm, experience: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="volunteer-motivation">Why do you want to volunteer with us? *</Label>
                      <Textarea
                        id="volunteer-motivation"
                        required
                        placeholder="What motivates you to help needy children, widows, and families? How do you align with our mission?"
                        rows={4}
                        value={volunteerForm.motivation}
                        onChange={(e) => setVolunteerForm({...volunteerForm, motivation: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="volunteer-commitment">Commitment Level *</Label>
                      <Textarea
                        id="volunteer-commitment"
                        required
                        placeholder="How long can you commit to volunteering? What type of involvement interests you most?"
                        rows={2}
                        value={volunteerForm.commitment}
                        onChange={(e) => setVolunteerForm({...volunteerForm, commitment: e.target.value})}
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Volunteer Opportunities</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Program coordination and management</li>
                        <li>• Community outreach and family visits</li>
                        <li>• Educational support and tutoring</li>
                        <li>• Fundraising and donor relations</li>
                        <li>• Social media and communications</li>
                        <li>• Event planning and execution</li>
                        <li>• Administrative and operational support</li>
                      </ul>
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Submit Application
                      <Users className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">How can I donate?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  You can donate through our secure PayPal integration or contact us directly 
                  for bank transfer details and other payment methods.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Can I volunteer remotely?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Yes! We have remote opportunities in social media, fundraising, 
                  administrative support, and program coordination.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">How do you select beneficiaries?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  We work directly in the community to identify families most in need, 
                  prioritizing children's education and food security.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Can I visit your programs?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  We welcome visitors! Contact us to arrange a visit to see our programs 
                  in action and meet the families we serve.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
