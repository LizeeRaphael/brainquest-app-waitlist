"use client";

import { Pacifico } from "next/font/google";
import { useState } from "react";
import { Star } from "lucide-react";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  // 👈 renamed from Home to Header
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-r from-green-500 via-white to-green-500 rounded-b-[80px] shadow-md overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <h1
          className={`${pacifico.className} text-5xl md:text-6xl font-bold text-gray-900`}
        >
          BrainQuest
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-lg leading-relaxed">
          Practice real Nigerian university past questions — timed, scored, and
          designed to feel just like the real exam.
        </p>

        {/* {/* Waitlist Placeholder */}
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full max-w-md">
          <div className="flex-1 px-4 py-3 rounded-full border border-green-600 text-green-700 bg-transparent font-medium text-center sm:text-left cursor-default select-none backdrop-blur-sm">
            Think BQ — PDF Hassle Stops!
          </div>
          <div className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all cursor-not-allowed">
            Coming Soon...
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-2">
            {/* Stars Row */}
            <div className="flex items-center justify-center md:justify-start space-x-0.5">
              {[1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-3 w-3 text-yellow-400 fill-yellow-400"
                />
              ))}
              <Star className="h-3 w-3 text-gray-300" />
            </div>

            {/* Profile + Text in One Line */}
            <div className="flex items-center justify-center md:justify-start mt-1">
              <div className="flex -space-x-2 mr-2">
                {[
                  "/student-5.jpg",
                  "/student-6.jpg",
                  "/student-7.jpg",
                  "/student-8.jpg",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Student ${i + 1}`}
                    className="h-9 w-9 rounded-full object-cover border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-gray-700 font-medium text-sm">
                Rated{" "}
                <span className="text-green-600 font-semibold">4.0/5.0</span> by
                early testers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Hero Image) */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-1 mt-10 md:mt-0">
        <img
          src="./superhero-.png"
          alt="Illustration"
          className="w-[350px] h-auto rounded-2xl object-cover transition-transform transform hover:scale-105"
        />
      </div>
    </main>
  );
}
