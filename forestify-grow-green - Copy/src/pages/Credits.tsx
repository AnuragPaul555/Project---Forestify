
import React from 'react';
import Layout from '../components/Layout';
import { teamData } from '../data/team_data';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Credits = () => {
  return (
    <Layout>
      <section className="py-10 bg-gradient-to-b from-forest-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-forest-800">
            Meet Our Team
          </h1>
          <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            The passionate individuals behind Forestify who are dedicated to making our planet greener.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamData.map((member, index) => (
              <Card key={index} className="overflow-hidden hover-grow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-forest-700">{member.name}</h3>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-forest-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-forest-800">Acknowledgements</h2>
            <p className="text-gray-700 mb-6">
              We would like to thank all the environmental organizations, research institutions, and individual contributors who provided data, insights, and inspiration for Forestify.
            </p>
            
            <Separator className="my-6" />
            
            <h3 className="text-xl font-semibold mb-4 text-forest-700">Data Sources</h3>
            <ul className="text-left space-y-2 text-gray-700">
              <li>• Global Forest Watch - Forest coverage data</li>
              <li>• World Agroforestry Centre - Tree species information</li>
              <li>• NASA Earth Observations - Climate data</li>
              <li>• Local agricultural universities - Soil type mapping</li>
              <li>• Community contributors - Local knowledge and verification</li>
            </ul>
            
            <Separator className="my-6" />
            
            <p className="text-gray-700 italic">
              Forestify is a non-profit initiative dedicated to promoting tree plantation through data-driven approaches.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Credits;
