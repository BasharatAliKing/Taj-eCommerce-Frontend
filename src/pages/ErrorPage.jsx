import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen bg-gray-100 text-center px-6">
      <h1 className="text-6xl font-bold text-red-500 font-sketch">404</h1>
      <h2 className="text-2xl font-sketch font-semibold">Page Not Found</h2>
      <p className="text-gray-600">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
