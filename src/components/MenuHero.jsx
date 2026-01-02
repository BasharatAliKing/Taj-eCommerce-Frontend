// src/components/Hero.jsx
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="container">
     <div className="py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
       <img
        src="/logo.png"
        alt="Briercliffe Logo"
        className="max-w-md mx-auto"
      />
      <div>
        <h2 className="text-4xl font-bold text-yellow mb-4">
          <Typewriter
            words={[
              "Biryanis",
              "Pizzas",
              "Curries",
              "Sizzlers",
              "MilkShakes",
              "Burgers",
            ]}
            loop={6}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="text-gray-300 font-medium mb-6">
          A very popular local establishment which has been around for over 20
          years, providing a wide range of quality food in Burnley
        </p>
        <a href="#our-menu" className="bg-yellow hover:bg-[#d3ba00] duration-500 cursor-pointer font-bold text-black hover:text-white px-6 py-2 rounded-lg">
          View Menu
        </a>
      </div>
     </div>
    </section>
  );
}
