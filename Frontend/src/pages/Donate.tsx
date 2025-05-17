
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { HandCoins } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Donate = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thank you for your donation!",
        description: `${name}, your donation of $${amount} will help us plant more trees.`,
        duration: 5000,
      });
      setName('');
      setAmount('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <section className="py-10 bg-gradient-to-b from-forest-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-forest-800">
            Support Forestify
          </h1>
          <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Your contributions help us expand our database, improve features, and support real-world afforestation efforts.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Donation Form */}
              <Card className="p-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-forest-700">
                  <HandCoins className="h-6 w-6 mr-2" />
                  Make a Donation
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <Label htmlFor="amount">Donation Amount ($)</Label>
                    <Input
                      id="amount"
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter donation amount"
                      min="1"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share why you're supporting Forestify..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-earth-600 hover:bg-earth-700 text-white"
                  >
                    {isSubmitting ? 'Processing...' : 'Donate Now'}
                  </Button>
                  
                  <p className="text-xs text-center mt-4 text-gray-500">
                    This is a demo form. No actual payment will be processed.
                  </p>
                </form>
              </Card>

              {/* Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-forest-800">
                  <span className="inline-block">🌍</span> Why Donate?
                </h2>
                <p className="text-lg mb-6 text-gray-700">
                  Your donations go toward:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-forest-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">Planting trees in under-covered regions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">Maintaining and expanding our tree and soil datasets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">Enhancing platform features and user experience</span>
                  </li>
                </ul>

                <p className="text-lg mb-6 text-gray-700">
                  <span className="inline-block">💸</span> Even the smallest donation helps us in making the world a little greener.
                </p>
                <p className="text-lg mb-6 text-forest-700 font-medium">
                  <span className="inline-block">🫶</span> Thank you for believing in Forestify. Let's grow together.
                </p>

                <div className="mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Tree planting" 
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
