import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, Heart, Home, TrendingUp, Calendar, MapPin, Star, ArrowRight } from "lucide-react";

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Impact
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Every number tells a story of transformation, hope, and lasting change in our community
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impact by the Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Since 2021, we've been creating measurable change in Faisalabad, Pakistan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-blue-600">22+</CardTitle>
                <CardDescription className="text-lg font-medium">Families Supported</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Families receiving consistent monthly food rations, ensuring food security 
                  for over 100 individuals including children and elderly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-green-600">75+</CardTitle>
                <CardDescription className="text-lg font-medium">Children in School</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Children provided with school supplies, uniforms, and educational materials, 
                  removing barriers to quality education.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-purple-200">
              <CardHeader>
                <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-purple-600">50+</CardTitle>
                <CardDescription className="text-lg font-medium">Widows Supported</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Vulnerable widows receiving emotional support, community care, 
                  and practical assistance to rebuild their lives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-yellow-200">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-yellow-600">3+</CardTitle>
                <CardDescription className="text-lg font-medium">Years of Service</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Years of consistent, reliable service building trust and creating 
                  sustainable impact in our community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stories of Transformation
            </h2>
            <p className="text-xl text-gray-600">
              Behind every statistic is a human story of hope, resilience, and positive change
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Fatima's Family Journey</CardTitle>
                    <CardDescription>Monthly Ration Program Beneficiary</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Before Support</h4>
                    <p className="text-red-700 text-sm">
                      Fatima, a mother of 5, struggled to provide even one meal a day for her children. 
                      Her husband's irregular income couldn't cover basic food needs, and the children 
                      often went to bed hungry.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">After Support</h4>
                    <p className="text-green-700 text-sm">
                      With monthly rations, Fatima's family now has consistent nutrition. The children 
                      are healthier, attending school regularly, and Fatima can focus on finding 
                      additional income opportunities instead of worrying about food.
                    </p>
                  </div>
                  
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                    "The monthly rations have been a blessing for our family. My children no longer 
                    go to bed hungry, and I can focus on building a better future for them."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Daniel's Educational Success</CardTitle>
                    <CardDescription>Back-to-School Program Beneficiary</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Before Support</h4>
                    <p className="text-red-700 text-sm">
                      12-year-old Daniel was missing school frequently because his family couldn't 
                      afford school supplies and uniforms. He felt embarrassed and different from 
                      his classmates, affecting his confidence and academic performance.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">After Support</h4>
                    <p className="text-green-700 text-sm">
                      With complete school supplies and uniforms, Daniel now attends school regularly 
                      with confidence. His grades have improved significantly, and he's actively 
                      participating in class discussions and school activities.
                    </p>
                  </div>
                  
                  <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
                    "Thanks to the school supplies, I can attend classes with confidence. 
                    I dream of becoming a teacher to help other children like me."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Aisha's Renewed Hope</CardTitle>
                    <CardDescription>Community Care Program Beneficiary</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Before Support</h4>
                    <p className="text-red-700 text-sm">
                      After losing her husband, Aisha felt completely isolated and hopeless. 
                      As a widow with 3 children, she struggled with depression and had no 
                      social support system to help her cope with daily challenges.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">After Support</h4>
                    <p className="text-green-700 text-sm">
                      Through regular visits and community gatherings, Aisha has rebuilt her 
                      confidence and social connections. She now participates in skill development 
                      workshops and has started a small home-based business.
                    </p>
                  </div>
                  
                  <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-700">
                    "The regular visits brought light back into my life. They gave me hope, 
                    friendship, and the strength to keep going for my children."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">The Rahman Family's Stability</CardTitle>
                    <CardDescription>Multi-Program Beneficiary</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Before Support</h4>
                    <p className="text-red-700 text-sm">
                      The Rahman family faced multiple challenges: food insecurity, children 
                      dropping out of school, and social isolation after the father's illness 
                      left him unable to work consistently.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">After Support</h4>
                    <p className="text-green-700 text-sm">
                      Through our comprehensive support - monthly rations, school supplies for 
                      the children, and community care - the family has achieved stability. 
                      All children are back in school and the family has hope for the future.
                    </p>
                  </div>
                  
                  <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-700">
                    "Chopan Foundation didn't just help us survive - they helped us rebuild 
                    our lives with dignity and hope for a better tomorrow."
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Impact Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Program Impact Breakdown
            </h2>
            <p className="text-xl text-gray-600">
              Detailed impact across our three core programs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Home className="w-8 h-8 text-blue-600 mr-3" />
                  <CardTitle className="text-xl">Monthly Ration Distribution</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Families Served</span>
                    <span className="font-bold text-blue-600">22+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Individuals Benefited</span>
                    <span className="font-bold text-blue-600">100+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly Food Packages</span>
                    <span className="font-bold text-blue-600">22+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Months of Service</span>
                    <span className="font-bold text-blue-600">36+</span>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg mt-4">
                    <p className="text-blue-800 text-sm font-medium">
                      100% of families report improved food security and child nutrition
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-green-600 mr-3" />
                  <CardTitle className="text-xl">Back-to-School Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Children Supported</span>
                    <span className="font-bold text-green-600">75+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">School Supply Kits</span>
                    <span className="font-bold text-green-600">75+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Uniforms Provided</span>
                    <span className="font-bold text-green-600">75+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Academic Years Supported</span>
                    <span className="font-bold text-green-600">3+</span>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg mt-4">
                    <p className="text-green-800 text-sm font-medium">
                      95% of supported children show improved school attendance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-purple-600 mr-3" />
                  <CardTitle className="text-xl">Community Care & Encouragement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Widows Supported</span>
                    <span className="font-bold text-purple-600">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Home Visits</span>
                    <span className="font-bold text-purple-600">200+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Community Gatherings</span>
                    <span className="font-bold text-purple-600">12+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Counseling Sessions</span>
                    <span className="font-bold text-purple-600">100+</span>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg mt-4">
                    <p className="text-purple-800 text-sm font-medium">
                      90% of participants report improved mental well-being
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Milestones and accomplishments from the past year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-500">2024</span>
                </div>
                <CardTitle className="text-lg">Digital Platform Launch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Launched our website and online donation platform, making it easier for 
                  supporters worldwide to contribute to our mission and track our impact.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-500">2023</span>
                </div>
                <CardTitle className="text-lg">Expanded School Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Increased our back-to-school support from 50 to 75+ children, ensuring 
                  more students have access to quality education and learning materials.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-sm text-gray-500">2023</span>
                </div>
                <CardTitle className="text-lg">Community Care Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Formalized our community care program, providing structured support 
                  to 50+ widows through regular visits and skill development workshops.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="text-sm text-gray-500">2022</span>
                </div>
                <CardTitle className="text-lg">Consistent Monthly Rations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Achieved 100% consistency in monthly ration distribution, ensuring 
                  no family missed their food support throughout the entire year.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-sm text-gray-500">2022</span>
                </div>
                <CardTitle className="text-lg">Partnership Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Established partnerships with local schools and community organizations 
                  to better identify and serve families most in need of support.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-sm text-gray-500">2021</span>
                </div>
                <CardTitle className="text-lg">Foundation Established</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Chopan Foundation was officially established with the mission to serve 
                  needy children, widows, and families with love and dignity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Feedback */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community Feedback
            </h2>
            <p className="text-xl text-gray-600">
              What our beneficiaries and community partners say about our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg">Local School Principal</CardTitle>
                <CardDescription>Faisalabad Government School</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-700 italic">
                  "The impact of Chopan Foundation's back-to-school program is remarkable. 
                  We've seen a significant increase in attendance and academic performance 
                  among supported students. Their holistic approach truly makes a difference."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg">Community Leader</CardTitle>
                <CardDescription>Local Community Representative</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-700 italic">
                  "Chopan Foundation has become a pillar of hope in our community. 
                  Their consistent support and genuine care for families has created 
                  a positive ripple effect throughout our neighborhood."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of Our Impact Story
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Your support creates the stories of transformation you've just read. 
            Join us in continuing to change lives and build hope in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold">
                Make a Donation
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                Volunteer With Us
                <Users className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/future-goals">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                View Our Goals
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
