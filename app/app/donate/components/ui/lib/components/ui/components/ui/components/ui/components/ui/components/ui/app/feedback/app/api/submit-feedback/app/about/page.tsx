import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Target, Calendar, MapPin, Mail, Phone, Linkedin, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Chopan Foundation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Serving Needy Children, Widows & Families with Love since 2021
            </p>
          </div>
        </div>
      </section>

      {/* Foundation Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2021 in Faisalabad, Pakistan, Chopan Foundation was born from a 
                simple yet powerful vision: to serve needy children, widows, and families 
                with dignity, love, and unwavering support.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our founder, Amriaza Anil, witnessed firsthand the struggles of vulnerable 
                families in our community. Rather than simply observing, she chose to act. 
                What started as individual acts of kindness has grown into a structured 
                foundation that systematically addresses the most pressing needs in our community.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Today, we proudly serve over 22 families with monthly food rations, support 
                75+ children with educational supplies, and provide care and encouragement 
                to 50+ widows in our community.
              </p>
              <Link href="/impact">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  See Our Impact
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d2cc08e2c358d98ea3678e/attachments/a599724d-abaf-4e4f-95fa-628b4b66582d-Chopan%20Foundation%20Details-page-1.png"
                alt="Chopan Foundation community work"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission, Vision & Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To serve needy children, widows, and families in Faisalabad with dignity, 
                  love, and comprehensive support that addresses both immediate needs and 
                  long-term empowerment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A community where every child has access to education, every family has 
                  food security, and every widow receives the care and support she deserves 
                  to live with dignity.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 text-left space-y-2">
                  <li>• <strong>Love:</strong> Serving with genuine care</li>
                  <li>• <strong>Dignity:</strong> Respecting every individual</li>
                  <li>• <strong>Transparency:</strong> Open and honest operations</li>
                  <li>• <strong>Impact:</strong> Creating lasting change</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Founder
              </h2>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">Amriaza Anil</h3>
                <p className="text-lg text-gray-600 mb-4">Founder & Director</p>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Amriaza Anil founded Chopan Foundation with a heart full of compassion and 
                a vision to make a tangible difference in her community. Her leadership has 
                been instrumental in establishing systematic programs that address the root 
                causes of poverty and vulnerability.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Under her guidance, the foundation has grown from helping individual families 
                to implementing comprehensive programs that serve hundreds of beneficiaries 
                across Faisalabad.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.linkedin.com/in/amriaza-anil-99138622a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-blue-100 rounded-lg p-8 text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">AA</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Amriaza Anil</h3>
                <p className="text-gray-600 mb-4">Founder & Director</p>
                <p className="text-sm text-gray-600 italic">
                  "Every act of kindness creates ripples of hope that can transform entire communities."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges We Address */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Challenges We Address
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the problems helps us create better solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Food Insecurity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Many families struggle to afford basic nutrition, leading to malnutrition 
                  and health issues, especially among children.
                </p>
                <p className="text-sm text-blue-600 font-medium">
                  Our Solution: Monthly Ration Distribution
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Educational Barriers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Children from low-income families often lack school supplies, uniforms, 
                  and books, preventing them from attending school regularly.
                </p>
                <p className="text-sm text-blue-600 font-medium">
                  Our Solution: Back-to-School Support
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Social Isolation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Widows and vulnerable families often face social isolation and lack 
                  emotional support systems in their communities.
                </p>
                <p className="text-sm text-blue-600 font-medium">
                  Our Solution: Community Care & Encouragement
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600">
              How we create sustainable impact in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Holistic Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We don't just address one need at a time. Our programs work together to 
                  provide comprehensive support that addresses multiple challenges simultaneously.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Food security through monthly rations</li>
                  <li>• Educational support for children</li>
                  <li>• Emotional and social support for families</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Community-Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We work directly within the community, understanding local needs and 
                  building relationships that ensure our support is culturally appropriate 
                  and sustainable.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Direct community engagement</li>
                  <li>• Local partnerships and networks</li>
                  <li>• Culturally sensitive programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Dignity-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Every interaction is conducted with respect and dignity. We believe that 
                  how we help is just as important as what we provide.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Respectful service delivery</li>
                  <li>• Privacy and confidentiality</li>
                  <li>• Empowerment over dependency</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Transparent Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We maintain complete transparency in our operations, ensuring donors 
                  know exactly how their contributions are being used to create impact.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Regular impact reporting</li>
                  <li>• Open financial practices</li>
                  <li>• Direct beneficiary feedback</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to serve the community
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2021 - Foundation Established</h3>
                <p className="text-gray-600">
                  Chopan Foundation was officially founded by Amriaza Anil with the mission 
                  to serve needy children, widows, and families in Faisalabad, Pakistan.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2021-2022 - First Programs Launch</h3>
                <p className="text-gray-600">
                  Launched our three core programs: Monthly Ration Distribution, 
                  Back-to-School Support, and Community Care & Encouragement.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2023 - Expanding Impact</h3>
                <p className="text-gray-600">
                  Reached significant milestones: 22+ families receiving monthly rations, 
                  75+ children supported with school supplies, 50+ widows receiving care.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2024 - Digital Presence</h3>
                <p className="text-gray-600">
                  Launched our website and digital donation platform to reach more supporters 
                  and increase transparency in our operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              We'd love to hear from you and answer any questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Faisalabad, Pakistan
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Serving the local community with love and dedication
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  chopanfoundation@gmail.com
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  We respond to all inquiries within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  +92-0306-7008096
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Available during business hours (PKT)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Together, we can create lasting change in the lives of those who need it most. 
            Your support makes all the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold">
                Donate Now
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                Volunteer With Us
                <Users className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
