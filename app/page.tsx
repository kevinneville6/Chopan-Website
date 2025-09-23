import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, GraduationCap, Home, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Serving Needy Children, Widows & Families with{" "}
                <span className="text-yellow-300">Love</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Bringing Hope, Faith & Care to the Needy in Faisalabad, Pakistan. 
                Every act of support creates ripples of hope and lasting change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/donate">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold">
                    Donate Now
                    <Heart className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d2cc08e2c358d98ea3678e/attachments/6981c194-f071-43cf-8232-14f6f45396bd-Chopan%20Foundation%20Details-page-2.png"
                alt="Chopan Foundation helping families"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact Since 2021
            </h2>
            <p className="text-xl text-gray-600">
              Every number represents a life touched, a family supported, a future brightened
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-blue-600">22+</CardTitle>
                <CardDescription className="text-lg">Families Supported</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monthly food rations ensuring no family goes hungry
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-green-600">75+</CardTitle>
                <CardDescription className="text-lg">Children in School</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  School supplies and support for education continuity
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-purple-600">50+</CardTitle>
                <CardDescription className="text-lg">Widows Supported</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Community care and encouragement for vulnerable women
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2021 by Amriaza Anil, Chopan Foundation is dedicated to serving 
                needy children, widows, and families in Faisalabad, Pakistan with dignity, 
                love, and unwavering support.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We believe every person deserves hope, care, and the opportunity to thrive. 
                Through our three core programs, we address immediate needs while building 
                foundations for long-term success.
              </p>
              <Link href="/about">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Read Our Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div>
              <Image
                src="https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d2cc08e2c358d98ea3678e/attachments/a599724d-abaf-4e4f-95fa-628b4b66582d-Chopan%20Foundation%20Details-page-1.png"
                alt="Chopan Foundation mission"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600">
              Three focused initiatives addressing the most critical needs in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="w-10 h-10 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Monthly Ration Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Essential food supplies delivered monthly to families in need, 
                  ensuring consistent nutrition and food security.
                </p>
                <Link href="/projects" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="w-10 h-10 text-green-600 mb-4" />
                <CardTitle className="text-xl">Back-to-School Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  School supplies, uniforms, and educational materials to ensure 
                  children can continue their education without barriers.
                </p>
                <Link href="/projects" className="text-green-600 hover:text-green-800 font-medium">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-10 h-10 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Community Care & Encouragement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Emotional support, community building, and encouragement for 
                  widows and vulnerable families in our community.
                </p>
                <Link href="/projects" className="text-purple-600 hover:text-purple-800 font-medium">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Your support transforms lives. Every donation, no matter the size, 
            creates lasting impact in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold">
                Donate Today
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
