
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout showAQI={false}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="text-forest-600 text-9xl font-bold mb-4">404</div>
          
          <h1 className="text-3xl font-bold mb-4 text-forest-800">Page Not Found</h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for has been uprooted.
          </p>
          
          <div className="flex justify-center">
            <Link to="/">
              <Button className="bg-forest-600 hover:bg-forest-700">
                Return to Home
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="text-7xl animate-bounce">🌱</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
