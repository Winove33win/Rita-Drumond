import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => navigate("/")}
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Ir para Home
          </button>
          <button
            onClick={() => navigate("/templates")}
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Ir para Templates
          </button>
          <button
            onClick={() => navigate("/blog")}
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Ir para Blog
          </button>
          <button
            onClick={() => navigate("/cases")}
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Ir para Cases
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
