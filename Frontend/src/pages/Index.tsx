
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Calculator, TreeDeciduous, Hand } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <section className="py-12 bg-gradient-to-b from-forest-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-forest-800">
              <span className="inline-block animate-leaf-sway">🌱</span> Welcome to Forestify!
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Forestify is your smart assistant for building a greener planet. We analyze district-level soil and climate data to recommend the most suitable trees for plantation. Whether you're a gardener, a student, or an environmentalist, our platform helps you choose trees based on the space you have and how quickly you want them to grow.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From maximizing oxygen output to learning about high-impact plants, we provide a one-stop solution. Browse our Learn section to explore plant knowledge or go to Calculate to get personalized tree recommendations.
            </p>
            <div className="mt-8">
              <Link to="/calculate">
                <Button className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg transition-transform hover:scale-105">
                  Get Tree Recommendations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-forest-800">How to Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <Card className="hover-grow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-forest-600" />
                </div>
                <CardTitle className="text-forest-700">Step 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Go to the Calculate section</p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="hover-grow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center mb-4">
                  <span className="text-forest-600 font-bold text-xl">📍</span>
                </div>
                <CardTitle className="text-forest-700">Step 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Enter the District name</p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="hover-grow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center mb-4">
                  <span className="text-forest-600 font-bold text-xl">📏</span>
                </div>
                <CardTitle className="text-forest-700">Step 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Enter the Land area and Expected first flowering time</p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="hover-grow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center mb-4">
                  <TreeDeciduous className="h-6 w-6 text-forest-600" />
                </div>
                <CardTitle className="text-forest-700">Step 4</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">View recommended trees for your location and requirements</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-forest-800">
                  <span className="inline-block">💚</span> Support Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Forestify is a free, community-driven platform aiming to make tree plantation data-driven and effective. Your contributions help us expand our database, improve features, and support real-world afforestation efforts.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  <span className="inline-block">🌳</span> Every donation helps us grow—literally and digitally.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  <span className="inline-block">🙏</span> Thank you for supporting our mission to reforest the planet, one tree at a time!
                </p>
                <Link to="/donate">
                  <Button className="bg-earth-600 hover:bg-earth-700 text-white px-6 py-3 rounded-lg shadow-md flex items-center gap-2">
                    <Hand className="h-5 w-5" />
                    Donate Today
                  </Button>
                </Link>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-forest-300 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-4 bg-forest-400 rounded-full opacity-40 animate-pulse delay-300"></div>
                  <div className="absolute inset-8 bg-forest-500 rounded-full opacity-60 animate-pulse delay-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Leaf className="w-24 h-24 text-forest-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
