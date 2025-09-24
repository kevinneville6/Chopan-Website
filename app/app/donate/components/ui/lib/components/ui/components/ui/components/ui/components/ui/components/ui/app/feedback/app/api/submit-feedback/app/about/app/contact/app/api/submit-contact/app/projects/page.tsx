import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, GraduationCap, Heart, Users, Calendar, MapPin, Target, ArrowRight, CheckCircle } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Three focused initiatives addressing the most critical needs in our community
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Community Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs work together to provide holistic support that addresses immediate needs 
              while building foundations for long-term success and empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Monthly Ration Distribution</CardTitle>
                <CardDescription>Essential food security for families</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Consistent nutrition support ensuring no family goes hungry
                </p>
                <div className="text-2xl font-bold text-blue-600 mb-2">22+</div>
                <p className="text-sm text-gray-500">Families Served Monthly</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Back-to-School Support</CardTitle>
                <CardDescription>Educational empowerment for children</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  School supplies and support removing barriers to education
                </p>
                <div className="text-2xl font-bold text-green-600 mb-2">75+</div>
                <p className="text-sm text-gray-500">Children Supported</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Community Care & Encouragement</CardTitle>
                <CardDescription>Emotional and social support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Building community connections and providing hope
                </p>
                <div className="text-2xl font-bold text-purple-600 mb-2">50+</div>
                <p className="text-sm text-gray-500">Widows Supported</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program 1: Monthly Ration Distribution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Monthly Ration Distribution
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Our flagship program ensures that vulnerable families have consistent access to 
                essential food items. Every month, we distribute carefully curated food packages 
                that provide balanced nutrition for entire families.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Comprehensive Food Packages</h4>
                    <p className="text-gray-600">Rice, flour, oil, lentils, sugar, tea, and other essentials</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Regular Distribution Schedule</h4>
                    <p className="text-gray-600">Consistent monthly delivery ensuring food security</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Family-Sized Portions</h4>
                    <p className="text-gray-600">Quantities calculated to support families of 4-6 members</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Quality Assurance</h4>
                    <p className="text-gray-600">Fresh, high-quality items sourced from trusted suppliers</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">Impact Story</h4>
                <p className="text-blue-700 italic">
                  "The monthly rations have been a blessing for our family of 5. My children no longer 
                  go to bed hungry, and I can focus on finding work instead of worrying about our next meal. 
                  This support has given us hope and stability during our most difficult time."
                </p>
                <p className="text-blue-600 text-sm mt-2 font-medium">- Fatima, Beneficiary Mother</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d2cc08e2c358d98ea3678e/attachments/28c42562-10cb-41cd-932a-ada44b88353a-Chopan%20Foundation%20Details-page-3.png"
                alt="Monthly ration distribution program"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program 2: Back-to-School Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d2cc08e2c358d98ea3678e/attachments/d832bd52-a5bd-40f0-b989-bb78b8394997-Chopan%20Foundation%20Details-page-4.png"
                alt="Back-to-school support program"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Back-to-School Support
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Education is the key to breaking the cycle of poverty. Our back-to-school program 
                ensures that financial constraints don't prevent children from accessing quality education 
                and building a brighter future.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Complete School Supply Kits</h4>
                    <p className="text-gray-600">Notebooks, pens, pencils, erasers, rulers, and textbooks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">School Uniforms & Shoes</h4>
                    <p className="text-gray-600">Proper attire ensuring children feel confident and included</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Educational Materials</h4>
                    <p className="text-gray-600">Age-appropriate learning resources and reference materials</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Ongoing Academic Support</h4>
                    <p className="text-gray-600">Follow-up to ensure continued school attendance and progress</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-2">Impact Story</h4>
                <p className="text-green-700 italic">
                  "Thanks to the school supplies and uniform, I can attend classes with confidence. 
                  I no longer feel different from my classmates, and I can focus on my studies. 
                  I dream of becoming a teacher to help other children like me."
                </p>
                <p className="text-green-600 text-sm mt-2 font-medium">- Daniel, 12-year-old Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program 3: Community Care & Encouragement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Community Care & Encouragement
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Beyond material support, we recognize the importance of emotional well-being and 
                community connection. This program focuses on providing hope, encouragement, and 
                social support to vulnerable community members, especially widows.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Regular Home Visits</h4>
                    <p className="text-gray-600">Personal check-ins to provide emotional support and companionship</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Community Gatherings</h4>
                    <p className="text-gray-600">Social events that build connections and reduce isolation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Counseling & Guidance</h4>
                    <p className="text-gray-600">Emotional support and practical life guidance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Skill Development Workshops</h4>
                    <p className="text-gray-600">Training programs to build self-reliance and confidence</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-purple-800 mb-2">Impact Story</h4>
                <p className="text-purple-700 italic">
                  "After my husband passed away, I felt completely alone and hopeless. The regular visits 
                  from Chopan Foundation volunteers brought light back into my life. They didn't just 
                  provide material support - they gave me hope, friendship, and the strength to keep going."
                </p>
                <p className="text-purple-600 text-sm mt-2 font-medium">- Aisha, Widow and Mother of 3</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d2cc08e2c358d98ea3678e/attachments/4c662794-f1e5-49c7-9dcd-91671e5e864f-Chopan%20Foundation%20Details-page-5.png"
                alt="Community care and encouragement program"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Implementation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Programs Work
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach ensuring maximum impact and sustainable support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <CardTitle className="text-lg">Community Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  We identify families most in need through direct community engagement 
                  and local partnerships.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <CardTitle className="text-lg">Needs Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Each family's specific needs are assessed to provide the most 
                  appropriate and effective support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <CardTitle className="text-lg">Program Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Support is delivered with dignity and respect, ensuring beneficiaries 
                  feel valued and empowered.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-yellow-600 font-bold">4</span>
                </div>
                <CardTitle className="text-lg">Impact Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  We track progress and gather feedback to continuously improve 
                  our programs and maximize impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Statistics */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Every statistic represents a life touched and a future brightened
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">22+</div>
              <p className="text-blue-100">Families receiving monthly rations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">75+</div>
              <p className="text-blue-100">Children supported with school supplies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Widows receiving care and support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">3+</div>
              <p className="text-blue-100">Years of consistent service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support Our Programs
            </h2>
            <p className="text-xl text-gray-600">
              Your contribution directly funds these life-changing programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">$20 Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Provides school supplies for 1 child for a month
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/donate">Donate $20</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">$50 Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Feeds a family of 4 for 2 weeks
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/donate">Donate $50</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">$100 Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Supports 2 families with monthly rations
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/donate">Donate $100</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Make a Donation
                  <Heart className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Volunteer With Us
                  <Users className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
