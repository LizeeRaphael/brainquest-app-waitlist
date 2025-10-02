"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FileText, Puzzle, Users, Star } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

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
      console.log("New waitlist signup:", data.email);
      setSubmitted(true);
    } catch (error: any) {
      console.error("Waitlist submission error:", error);
      setErrorMessage("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* 🎈 Background gradient bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-300 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
      </div>

      {/* ✅ Top Green Section */}
      <div className="bg-gradient-to-b from-green-400 to-green-600 pb-16 relative z-10">
        <div className="container mx-auto px-4 pt-16 text-center">
          {/* Logo Badge with bigger circle */}
          <span className="inline-flex items-center bg-white/20 backdrop-blur-md text-white rounded-full px-5 py-3 text-sm font-semibold mb-6 shadow-md">
            <span className="h-4 w-4 rounded-full bg-white mr-2"></span>
            BrainQuest Waitlist
          </span>
        </div>
      </div>

      {/* ✅ Bottom White Section with falling snow */}
      <div className="relative bg-white flex-1 -mt-12 rounded-t-3xl shadow-lg z-10 overflow-hidden">
        {/* Snow effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full bg-green-300 animate-fall`}
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Hero */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1
              className={`${poppins.className} text-4xl font-extrabold mb-4 text-gray-900`}
            >
              Turn Past Questions Into Your Secret Weapon
            </h1>
            <p className="text-lg text-gray-600">
              BrainQuest turns your past questions into interactive quizzes — so
              you can practice, track progress, and crush your exams with
              confidence.
            </p>
          </div>

          {/* ✅ Form */}
          {!submitted ? (
            <div className="max-w-lg mx-auto bg-gray-50 rounded-xl shadow-md p-8 relative z-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email Input */}
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
                    className={`mt-1 block w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 transition-transform transform hover:scale-[1.02] hover:shadow-lg ${
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

                {/* ✅ Social Proof */}
                <div className="text-center">
                  <div className="flex justify-center -space-x-2">
                    <img
                      src="/avatars/a1.jpg"
                      alt="Student 1"
                      className="h-10 w-10 rounded-full object-cover border-2 border-white"
                    />
                    <img
                      src="/avatars/a2.jpg"
                      alt="Student 2"
                      className="h-10 w-10 rounded-full object-cover border-2 border-white"
                    />
                    <img
                      src="/avatars/a3.jpg"
                      alt="Student 3"
                      className="h-10 w-10 rounded-full object-cover border-2 border-white"
                    />
                    <img
                      src="/avatars/a4.jpg"
                      alt="Student 4"
                      className="h-10 w-10 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <p className="mt-2 text-gray-700 font-medium">
                    Join <span className="text-green-600">2,545</span> others
                    waiting for the launch
                  </p>

                  {/* Rating */}
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

                {/* ✅ Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 disabled:opacity-50 transition"
                  >
                    {isSubmitting ? "Joining…" : <>✨ Join Waitlist</>}
                  </button>
                </div>

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
                Thank you for joining!
              </h2>
              <p className="text-gray-600">
                We’ll send you a confirmation email soon.
              </p>
            </div>
          )}

          {/* ✅ Features */}
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
                <h3 className="text-lg font-semibold">{feat.title}</h3>
              </div>
            ))}
          </div>

          {/* ✅ Footer */}
          <div className="mt-12 text-center text-gray-500">
            No spam. Just early access, updates, and smarter ways to learn.
          </div>
        </div>
      </div>

      {/* 🎨 Snow animation CSS */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}




// "use client";

// import Header from "@/components/Header";
// import SignupForm from "@/components/SignupForm";
// import Footer from "@/components/Footer";

// export default function Page() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col justify-between items-center px-4 py-8">
//       <Header />

//       {/* Placeholder hero image */}
//       <img
//         src="/hero-placeholder.png"
//         alt="BrainQuest Illustration"
//         className="w-80 md:w-[400px] mx-auto mb-8"
//       />

//       <SignupForm />
//       <Footer />
//     </main>
//   );
// }
