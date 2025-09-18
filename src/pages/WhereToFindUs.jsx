import React from "react";

const WhereToFindUs = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">Where to Find Us</h1>
      <div className="max-w-2xl text-center space-y-4 mb-8">
        <p>Visit us at our main venue in Blackburn:</p>
        <p>
          <strong>K2 Taj Restaurant</strong>
          <br />
          51-53 Plane Street, Blackburn, BB1 6LR <br />
          📞 07404 888956 | 01254 675899
        </p>
      </div>

      <div className="container flex">
       <iframe className="w-full h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.7746094983604!2d-2.472156624537268!3d53.75789634385217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b9e4ba6ec047d%3A0x7cf34d50a8245c04!2sK2%20Taj%20Chippery%20And%20Curry%20House!5e0!3m2!1sen!2s!4v1757188857647!5m2!1sen!2s"  loading="lazy" ></iframe>
      </div>
    </div>
  );
};

export default WhereToFindUs;
