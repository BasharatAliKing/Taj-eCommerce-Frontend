// src/components/Hero.jsx
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className=" py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
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

        <p className="text-gray-600 mb-6">
          A very popular local establishment which has been around for over 20
          years, providing a wide range of quality food in Burnley
        </p>
        <button className="bg-yellow hover:bg-charkol duration-500 cursor-pointer font-medium text-black hover:text-white px-6 py-3 rounded-lg">
          View Menu
        </button>
      </div>
    </section>
  );
}
