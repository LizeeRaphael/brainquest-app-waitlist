"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FileText, Puzzle, Users, Star } from "lucide-react";
import { Inter, Pacifico } from "next/font/google";
import FallingDots from "./FallingDots";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"], weight: ["600", "700"] });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

interface WaitlistForm {
  email: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistForm>();
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: WaitlistForm) => {
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Subscription failed");

      setSubmitted(true);
    } catch (error: unknown) {
      if (error instanceof Error) setErrorMessage(error.message);
      else setErrorMessage("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-300 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
      </div>

      {/* Top Green Section */}
      <div className="bg-gradient-to-b from-green-500 via-green-600 to-green-800 pb-16 relative z-10">
        <div className="container mx-auto px-4 pt-16 text-center">
          <span className="inline-flex items-center bg-white/20 backdrop-blur-md text-white rounded-full px-5 py-3 text-sm font-semibold mb-6 shadow-md">
            <span className="h-7 w-7 rounded-full bg-white mr-2"></span>
            BrainQuest Waitlist
          </span>
        </div>
      </div>

      {/* Bottom White Section */}
      <div className="relative bg-white flex-1 -mt-12 rounded-t-3xl shadow-lg z-10 overflow-hidden">
        <FallingDots count={50} color="bg-green-300" />

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Hero */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1
              className={`${inter.className} text-4xl font-extrabold mb-4`}
              style={{ color: "#111753EE" }}
            >
              Ace the Past, Conquer Present.
            </h1>

            <p className="text-lg text-gray-600">
              BrainQuest turns your past questions into interactive quizzes — so
              you can practice, track progress, and crush your exams with
              confidence.
            </p>
          </div>

          {/* Waitlist Form */}
          {!submitted ? (
            <div className="max-w-lg mx-auto bg-gray-50 rounded-xl shadow-md p-8 relative z-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className={`mt-1 block w-full rounded-md border border-gray-300 bg-transparent text-gray-900 px-4 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 transition-transform transform hover:scale-[1.02] hover:shadow-lg ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Invalid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Social Proof */}
                <div className="text-center">
                  <div className="flex justify-center -space-x-2">
                    {[
                      "/student-1.jpeg",
                      "/student-2.jpeg",
                      "/student-3.jpeg",
                      "/student-4.jpg",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Student ${i + 1}`}
                        className="h-10 w-10 rounded-full object-cover border-2 border-white"
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-gray-700 font-medium">
                    Join <span className="text-green-600">2,547</span> others
                    waiting for the launch
                  </p>
                  <div className="flex justify-center mt-2">
                    {[1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                    <Star className="h-5 w-5 text-gray-300" />
                  </div>
                  <p className="text-sm text-gray-500">
                    Rated 4.0/5 by early testers
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 disabled:opacity-50 transition"
                >
                  {isSubmitting ? "Joining…" : "✨ Join Waitlist"}
                </button>

                {errorMessage && (
                  <p className="text-sm text-red-600 text-center">
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>
          ) : (
            <div className="max-w-lg mx-auto bg-gray-50 rounded-xl shadow-md p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                You joined!
              </h2>
              <p className="text-gray-600">Thank you🙏 We’ll keep in touch.</p>
              <div className="mb-12"></div>
            </div>
          )}

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "Upload Past Questions" },
              { icon: Puzzle, title: "Gamified Learning" },
              { icon: Users, title: "Study With Friends" },
            ].map((feat, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 text-center transition transform hover:scale-105 hover:shadow-xl"
              >
                <feat.icon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {feat.title}
                </h3>
              </div>
            ))}
          </div>
          <p>See below...</p>
          {/* ✅ Insert Header Component Right After the Hero */}
          <div className="mb-12">
            <Header />
          </div>

          {/* Pacifico Section with Avatar and Gradient */}
          <div className="mt-20 rounded-2xl bg-gradient-to-r from-green-100 via-white to-green-100 py-12 px-6 text-center shadow-md">
            <div className="flex flex-col items-center justify-center">
              <img
                src="./superhero-.png"
                alt="BrainQuest Mascot"
                className="w-[120px] h-[120px] rounded-full object-cover border-4 border-green-400 shadow-md mb-4"
              />
              <h2
                className={`${pacifico.className} text-3xl text-green-700 mb-3`}
              >
                “Study Smart, Not Just Hard.”
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Thousands of students across Nigeria are preparing smarter with
                BrainQuest — join the movement and level up your study game
                early.
              </p>

              <div className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <div className="flex -space-x-2">
                  {[
                    "/student-9.jpg",
                    "/student-10.jpg",
                    "/student-11.jpg",
                    "/student-12.jpg",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Student ${i + 1}`}
                      className="h-8 w-8 rounded-full object-cover border-2 border-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-gray-500">
            No spam. Just early access, updates, and smarter ways to learn.
          </div>
        </div>
      </div>
    </div>
  );
}
