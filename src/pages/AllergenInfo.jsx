import React from "react";

const AllergenInfo = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">Allergen Information</h1>
      <div className="max-w-2xl text-center space-y-4">
        <p>
          We care about your safety and wellbeing. Please speak to a member of staff
          if you have any allergies or dietary requirements.
        </p>
        <ul className="list-disc list-inside space-y-2 text-left mx-auto">
          <li>🌾 Gluten</li>
          <li>🥜 Nuts</li>
          <li>🥛 Dairy</li>
          <li>🐟 Fish & Shellfish</li>
          <li>🍳 Eggs</li>
          <li>🌱 Soy</li>
        </ul>
        <p>
          We do our best to avoid cross-contamination, but all dishes are prepared in
          a kitchen that handles allergens.
        </p>
      </div>
    </div>
  );
};

export default AllergenInfo;
