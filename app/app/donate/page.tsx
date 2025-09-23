"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CreditCard, Mail, Phone, Heart, Users, GraduationCap, Home, Shield, Globe } from "lucide-react";

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const presetAmounts = [
    { amount: 20, description: "Provides school supplies for 1 child for a month" },
    { amount: 50, description: "Feeds a family of 4 for 2 weeks" },
    { amount: 100, description: "Supports 2 families with monthly rations" },
    { amount: 200, description: "Provides school supplies for 10 children" },
    { amount: 500, description: "Supports 5 families for a full month" }
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(0);
    }
  };

  const getCurrentAmount = () => {
    return customAmount ? parseFloat(customAmount) || 0 : selectedAmount;
  };

  const handlePayPalDonation = () => {
    const amount = getCurrentAmount();
    if (amount <= 0) {
      alert("Please select or enter a valid donation amount.");
      return;
    }

    // Store donation info in localStorage for feedback page
    localStorage.setItem('donationAmount', amount.toString());
    localStorage.setItem('donorInfo', JSON.stringify(donorInfo));

    // Construct PayPal send money URL
    const paypalUrl = `https://www.paypal.com/paypalme/kevinneville6/${amount}`;
    
    // Open PayPal in new tab
    window.open(paypalUrl, '_blank');
    
    // Redirect to feedback page after a short delay
    setTimeout(() => {
      window.location.href = '/feedback';
    }, 2000);
  };

  const handleDirectContact = () => {
    const amount = getCurrentAmount();
    const subject = `Donation Inquiry - $${amount}`;
    const body = `Hello Chopan Foundation,

I would like to make a donation of $${amount} and need information about direct payment methods.

${donorInfo.fullName ? `Name: ${donorInfo.fullName}` : ''}
${donorInfo.message ? `Message: ${donorInfo.message}` : ''}

Please provide details for:
- Bank transfer information
- Mobile money options
- Other available payment methods

Thank you for your important work!`;

    window.location.href = `mailto:chopanfoundation@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Make a Difference Today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your donation directly transforms lives of needy children, widows, and families 
            in Faisalabad, Pakistan. Every contribution creates ripples of hope and lasting change.
          </p>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 font-medium">
              <Shield className="inline w-5 h-5 mr-2" />
              Secure International Donations: PayPal payments are processed through our verified account. 
              All methods are secure and support worldwide donations.
            </p>
          </div>
        </div>

        {/* Donation Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Choose Your Impact</CardTitle>
            <CardDescription className="text-center">
              Select an amount and choose your preferred payment method
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Amount Selection */}
            <div>
              <Label className="text-lg font-semibold mb-4 block">Donation Amount</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {presetAmounts.map((preset) => (
                  <Card 
                    key={preset.amount}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedAmount === preset.amount && !customAmount 
                        ? 'ring-2 ring-blue-500 bg-blue-50' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleAmountSelect(preset.amount)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        ${preset.amount}
                      </div>
                      <p className="text-sm text-gray-600">{preset.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <Label htmlFor="custom-amount" className="text-base font-medium">
                  Or enter a custom amount
                </Label>
                <div className="relative flex-1 max-w-xs">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="0"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="pl-8"
                    min="1"
                  />
                </div>
              </div>
            </div>

            {/* Donor Information */}
            <div>
              <Label className="text-lg font-semibold mb-4 block">Your Information (Optional)</Label>
              <p className="text-gray-600 mb-4">Help us send you impact updates and thank you messages.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Your full name"
                    value={donorInfo.fullName}
                    onChange={(e) => setDonorInfo({...donorInfo, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what motivated you to donate or any specific program you'd like to support..."
                  value={donorInfo.message}
                  onChange={(e) => setDonorInfo({...donorInfo, message: e.target.value})}
                  rows={3}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-8">Choose Your Payment Method</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PayPal Payment */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="bg-blue-600 text-white p-2 rounded mr-3">PP</div>
                  PayPal Payment
                </CardTitle>
                <CardDescription>
                  Send money securely through our verified PayPal account. Works with credit cards, 
                  debit cards, and PayPal accounts worldwide.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="font-medium text-gray-900">kevinneville6@gmail.com</p>
                  <p className="text-sm text-gray-600">Verified PayPal account for Chopan Foundation donations</p>
                </div>
                <Button 
                  onClick={handlePayPalDonation}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  Send ${getCurrentAmount()} via PayPal
                  <CreditCard className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Secure payment processed through PayPal
                </p>
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-8 h-8 text-green-600 mr-3" />
                  Direct Contact
                </CardTitle>
                <CardDescription>
                  Contact us directly for bank transfer details, mobile money options, 
                  or other payment methods.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm">chopanfoundation@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm">+92-0306-7008096</span>
                  </div>
                </div>
                <Button 
                  onClick={handleDirectContact}
                  variant="outline" 
                  className="w-full border-green-600 text-green-600 hover:bg-green-50"
                  size="lg"
                >
                  Email for Payment Details
                  <Mail className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">How Your Donation Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Choose Amount</h3>
                <p className="text-sm text-gray-600">
                  Select a preset amount or enter your custom donation amount above.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Secure Payment</h3>
                <p className="text-sm text-gray-600">
                  PayPal processes your payment securely to our verified account.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Immediate Impact</h3>
                <p className="text-sm text-gray-600">
                  Your donation immediately helps families in need in Faisalabad.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods Accepted */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">Payment Methods Accepted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <CreditCard className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <h4 className="font-medium">Credit Cards</h4>
                <p className="text-xs text-gray-600">Visa, Mastercard, Amex</p>
              </div>
              <div>
                <CreditCard className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <h4 className="font-medium">Debit Cards</h4>
                <p className="text-xs text-gray-600">All major banks</p>
              </div>
              <div>
                <div className="bg-blue-600 text-white p-2 rounded w-8 h-8 mx-auto mb-2 flex items-center justify-center text-xs font-bold">
                  PP
                </div>
                <h4 className="font-medium">PayPal Account</h4>
                <p className="text-xs text-gray-600">Direct PayPal</p>
              </div>
              <div>
                <Globe className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <h4 className="font-medium">International</h4>
                <p className="text-xs text-gray-600">Worldwide support</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Impact in Action</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-semibold text-blue-600 mb-2">Fatima's Family</h4>
                <p className="text-sm text-gray-600 italic mb-2">
                  "The monthly rations have been a blessing for our family of 5. My children 
                  no longer go to bed hungry, and I can focus on finding work instead of 
                  worrying about our next meal."
                </p>
                <span className="text-xs text-blue-600 font-medium">Monthly Ration Program</span>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Daniel's Education</h4>
                <p className="text-sm text-gray-600 italic mb-2">
                  "Thanks to the school supplies, I can attend classes with confidence. 
                  I dream of becoming a teacher to help other children like me."
                </p>
                <span className="text-xs text-green-600 font-medium">Back-to-School Support</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Other Ways to Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">Volunteer</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Share your skills and time to directly impact our programs.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/contact">Apply to Volunteer</a>
                </Button>
              </div>
              
              <div>
                <h4 className="font-semibold mb-1">Spread the Word</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Share our mission with friends and family to expand our reach.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/about">Learn More</a>
                </Button>
              </div>
              
              <div>
                <h4 className="font-semibold mb-1">Partner with Us</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Explore partnership opportunities for sustainable impact.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Notice */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h3 className="font-semibold text-green-800 mb-2">Secure & Verified</h3>
          <p className="text-green-700 text-sm">
            All donations are processed through our verified PayPal account. Your personal 
            information is protected with bank-level security, and you'll receive confirmation 
            of your donation impact.
          </p>
        </div>
      </div>
    </div>
  );
}
