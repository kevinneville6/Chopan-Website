import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, GraduationCap, Heart, Home, Building, Calendar, CheckCircle, ArrowRight, Handshake, Globe } from "lucide-react";

export default function FutureGoalsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Future Goals
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Building on our foundation of love and service to create lasting change and expanded impact
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Vision for 2025-2027
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            To expand our reach and deepen our impact, serving 100+ families, supporting 200+ children's education, 
            and building a sustainable community support system that empowers families to achieve long-term independence.
          </p>
          <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Commitment</h3>
            <p className="text-blue-700 text-lg">
              "We envision a community where every child has access to quality education, every family has food security, 
              and every individual is empowered to build a brighter future with dignity and hope."
            </p>
            <p className="text-blue-600 text-sm mt-4 font-medium">- Amriaza Anil, Founder</p>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Five Strategic Goals
            </h2>
            <p className="text-xl text-gray-600">
              Our roadmap for creating sustainable, long-term impact in our community
            </p>
          </div>

          <div className="space-y-8">
            {/* Goal 1: Expand Food Security Program */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Home className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Goal 1: Expand Food Security Program</CardTitle>
                    <CardDescription className="text-lg">
                      Scale our monthly ration distribution to serve 100+ families by 2026
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      2025-2026
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Current Status</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        22+ families served monthly
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        100% consistency in distribution
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Strong community partnerships
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Expansion Plan</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Increase to 50 families by end of 2025</li>
                      <li>• Reach 75 families by mid-2026</li>
                      <li>• Achieve 100+ families by end of 2026</li>
                      <li>• Establish food distribution centers</li>
                      <li>• Implement nutrition education programs</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Impact Projection</h4>
                  <p className="text-blue-700 text-sm">
                    By 2026, we will provide food security to 400+ individuals, including 200+ children, 
                    ensuring consistent nutrition and enabling families to focus on education and income generation.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Goal 2: Educational Excellence Initiative */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Goal 2: Educational Excellence Initiative</CardTitle>
                    <CardDescription className="text-lg">
                      Support 200+ children's education with comprehensive academic programs
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      2025-2027
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Current Achievements</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        75+ children supported annually
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        95% improved school attendance
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Complete supply kits provided
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Enhancement Strategy</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Launch after-school tutoring programs</li>
                      <li>• Establish computer literacy classes</li>
                      <li>• Create scholarship fund for higher education</li>
                      <li>• Develop vocational training programs</li>
                      <li>• Partner with local schools for curriculum support</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Long-term Vision</h4>
                  <p className="text-green-700 text-sm">
                    Create a comprehensive educational ecosystem that not only provides supplies but also 
                    academic support, digital literacy, and pathways to higher education and skilled employment.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Goal 3: Women Empowerment Center */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Goal 3: Women Empowerment Center</CardTitle>
                    <CardDescription className="text-lg">
                      Establish a dedicated center for skills training and economic empowerment
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      2026-2027
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Foundation Built</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        50+ widows receiving support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Regular community gatherings
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Emotional support network established
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Center Programs</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Sewing and tailoring workshops</li>
                      <li>• Small business development training</li>
                      <li>• Financial literacy programs</li>
                      <li>• Childcare services during training</li>
                      <li>• Microfinance and loan programs</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Empowerment Goal</h4>
                  <p className="text-purple-700 text-sm">
                    Transform vulnerable women from aid recipients to economically independent contributors, 
                    creating a sustainable cycle of empowerment that benefits entire families and communities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Goal 4: Community Health Initiative */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Goal 4: Community Health Initiative</CardTitle>
                    <CardDescription className="text-lg">
                      Launch comprehensive health and wellness programs for families
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      2026-2027
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Health Challenges Identified</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Limited access to healthcare services</li>
                      <li>• Lack of health education and awareness</li>
                      <li>• Preventable diseases due to poor nutrition</li>
                      <li>• Mental health support needs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Proposed Solutions</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Monthly health checkup camps</li>
                      <li>• Nutrition education workshops</li>
                      <li>• Mental health counseling services</li>
                      <li>• Vaccination and preventive care programs</li>
                      <li>• Partnership with local healthcare providers</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Holistic Approach</h4>
                  <p className="text-red-700 text-sm">
                    Address both physical and mental health needs while building community awareness 
                    and preventive care practices that reduce long-term healthcare costs and improve quality of life.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Goal 5: Sustainable Infrastructure */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Goal 5: Sustainable Infrastructure Development</CardTitle>
                    <CardDescription className="text-lg">
                      Build permanent facilities and establish endowment fund for long-term sustainability
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      2027+
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Infrastructure Goals</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Permanent community center building</li>
                      <li>• Food distribution warehouse</li>
                      <li>• Educational resource library</li>
                      <li>• Women's empowerment training facility</li>
                      <li>• Administrative offices</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Sustainability Strategy</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Establish $500,000 endowment fund</li>
                      <li>• Develop recurring donor program</li>
                      <li>• Create social enterprise initiatives</li>
                      <li>• Build corporate partnership network</li>
                      <li>• Implement fee-for-service programs</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Legacy Vision</h4>
                  <p className="text-yellow-700 text-sm">
                    Create a self-sustaining organization that can continue serving the community for generations, 
                    with permanent facilities and diversified funding sources ensuring long-term impact.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Our strategic roadmap for achieving these ambitious goals
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            <div className="space-y-12">
              {/* 2025 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">2025 Milestones</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Expand to 50 families in food program</li>
                        <li>• Launch after-school tutoring</li>
                        <li>• Begin skills training workshops</li>
                        <li>• Establish health checkup camps</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 pl-8">
                  <div className="text-2xl font-bold text-blue-600">2025</div>
                  <div className="text-gray-600">Foundation Expansion</div>
                </div>
              </div>

              {/* 2026 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="text-2xl font-bold text-green-600">2026</div>
                  <div className="text-gray-600">Program Enhancement</div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 pl-8">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">2026 Achievements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Reach 100+ families in food program</li>
                        <li>• Support 150+ children's education</li>
                        <li>• Open Women Empowerment Center</li>
                        <li>• Launch comprehensive health programs</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 2027 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">2027 Goals</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Support 200+ children's education</li>
                        <li>• Graduate 50+ women from skills programs</li>
                        <li>• Begin infrastructure development</li>
                        <li>• Launch endowment fund campaign</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 pl-8">
                  <div className="text-2xl font-bold text-purple-600">2027</div>
                  <div className="text-gray-600">Sustainable Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Strategy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Strategy
            </h2>
            <p className="text-xl text-gray-600">
              Building strategic alliances to amplify our impact and ensure sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Handshake className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Local Government</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Collaborate with local authorities for program recognition, resource sharing, 
                  and policy advocacy to create systemic change.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Corporate Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Engage businesses for CSR partnerships, employee volunteer programs, 
                  and sustainable funding through corporate social responsibility initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Educational Institutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Partner with schools and universities for curriculum development, 
                  student volunteer programs, and research on community development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Healthcare Providers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Collaborate with hospitals and clinics to provide affordable healthcare 
                  services and health education programs for our beneficiaries.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-lg">International NGOs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Connect with global organizations for best practice sharing, 
                  funding opportunities, and capacity building programs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Community Leaders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Work with religious leaders, community elders, and local influencers 
                  to ensure cultural sensitivity and community buy-in for programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Funding Strategy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funding Strategy
            </h2>
            <p className="text-xl text-gray-600">
              Diversified funding approach to ensure sustainable growth and program continuity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Current Funding Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Individual Donations</span>
                    <span className="font-bold text-blue-600">60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Community Fundraising</span>
                    <span className="font-bold text-green-600">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Founder Contributions</span>
                    <span className="font-bold text-purple-600">15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Target Funding Mix (2027)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Individual Donations</span>
                    <span className="font-bold text-blue-600">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Corporate Partnerships</span>
                    <span className="font-bold text-green-600">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Grant Funding</span>
                    <span className="font-bold text-purple-600">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Social Enterprise</span>
                    <span className="font-bold text-yellow-600">10%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Endowment Income</span>
                    <span className="font-bold text-red-600">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
              Funding Milestones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$50K</div>
                <p className="text-blue-700 font-medium">2025 Target</p>
                <p className="text-blue-600 text-sm">Expand to 50 families</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$150K</div>
                <p className="text-green-700 font-medium">2026 Target</p>
                <p className="text-green-600 text-sm">Launch all five programs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">$300K</div>
                <p className="text-purple-700 font-medium">2027 Target</p>
                <p className="text-purple-600 text-sm">Begin infrastructure development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Help Us Achieve These Goals
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Your support today helps us build the foundation for tomorrow's impact. 
            Join us in creating lasting change that will benefit future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold">
                Support Our Vision
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                Partner With Us
                <Handshake className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/impact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                See Current Impact
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
