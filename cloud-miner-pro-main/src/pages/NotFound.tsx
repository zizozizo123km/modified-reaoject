import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log the error attempt
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Optional: If this were a real Facebook app context, we might trigger platform logging here.
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center p-10 bg-white shadow-lg rounded-xl max-w-sm mx-4">
        
        {/* Icon suggesting an error or missing content (simulating Facebook UI iconography) */}
        <svg className="w-16 h-16 mx-auto text-[#1877f2] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>

        <h1 className="mb-2 text-2xl font-bold text-gray-900">Content Not Found</h1>
        <p className="mb-6 text-base text-gray-600">
          The page you requested might be unavailable, or the link may be incorrect.
        </p>
        
        <a 
          href="/" 
          // Applying Facebook blue (#1877f2) styling to the link/button
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md shadow-sm text-white bg-[#1877f2] hover:bg-[#166fe5] transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1877f2]"
        >
          Return to Feed
        </a>
      </div>
    </div>
  );
};

export default NotFound;