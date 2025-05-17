
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AQIDisplay from './AQIDisplay';

interface LayoutProps {
  children: ReactNode;
  showAQI?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showAQI = true }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {showAQI && (
        <div className="container mx-auto px-4 py-2 mb-4">
          <AQIDisplay />
        </div>
      )}
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
