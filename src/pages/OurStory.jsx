import React, { useState } from "react";
import { toast } from "react-toastify";

/**
 * OurStoryCharity.jsx
 * - Tailwind CSS required
 * - Replace image URLs with your assets
 * - Backend endpoint: POST /charityrequest (you can change in handleSubmit)
 */
export default function OurStoryCharity() {
  

  // Replace these image paths with your actual assets
  const heroImage = "/assets/our-story-hero.jpg"; // hero background
  const historyImg = "/assets/kitchen.jpg"; // timeline image / decorative

  return (
    <div className="min-h-screen bg-[#333] text-white">
      {/* HERO */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(20,20,20,0.6), rgba(20,20,20,0.6)), url(${heroImage})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-yellow-400">
              Our Story
            </h1>
            <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
              From humble beginnings to serving the flavors you love — our journey is
              made of family recipes, hard work and the community that raised us.
            </p>
            <div className="mt-8 inline-flex gap-3">
              <a
                href="#charity"
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                Charity Request
              </a>
              <a
                href="#story"
                className="border border-yellow-400 px-6 py-3 rounded-full font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
              >
                Read Our Timeline
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY TIMELINE */}
      <section id="story" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Where we came from</h2>
            <p className="text-gray-200 leading-relaxed mb-6">
              K2 Taj started as a small local kitchen with one mission: to craft honest,
              bold flavours that bring people together. Over the years we grew — new
              recipes were added, the team expanded, and our passion only deepened.
            </p>

            {/* Timeline */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">2005</div>
                <div>
                  <h4 className="font-semibold text-lg">Humble beginnings</h4>
                  <p className="text-gray-300">A tiny shop, a simple menu and the first loyal customers.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">2012</div>
                <div>
                  <h4 className="font-semibold text-lg">Growing family</h4>
                  <p className="text-gray-300">We opened our second venue and started local deliveries.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">2019</div>
                <div>
                  <h4 className="font-semibold text-lg">Menu revamp</h4>
                  <p className="text-gray-300">New handcrafted recipes and a focus on fresh ingredients.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">2024</div>
                <div>
                  <h4 className="font-semibold text-lg">Community focus</h4>
                  <p className="text-gray-300">Supporting local causes and offering charity collaboration.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src={historyImg}
              alt="Our kitchen"
              className="rounded-lg shadow-xl w-full object-cover max-h-[420px]"
            />
          </div>
        </div>
      </section>

    

     
    </div>
  );
}
