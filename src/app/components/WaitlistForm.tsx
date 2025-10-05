// "use client";

// import { useForm } from "react-hook-form";
// import { useState } from "react";

// interface FormData {
//   email: string;
// }

// export default function WaitlistForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<FormData>();

//   const [submitted, setSubmitted] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const onSubmit = async (data: FormData) => {
//     try {
//       console.log("User joined waitlist:", data.email);
//       setSubmitted(true);
//     } catch (error) {
//       console.error(error);
//       setErrorMessage("Something went wrong. Please try again.");
//     }
//   };

//   if (submitted)
//     return (
//       <div className="text-center">
//         <h2 className="text-xl font-semibold text-green-700">
//           Thank you for joining!
//         </h2>
//         <p className="text-gray-600">We’ll notify you at launch 🚀</p>
//       </div>
//     );

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//       <div>
//         <label
//           htmlFor="email"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Email
//         </label>
//         <input
//           id="email"
//           type="email"
//           placeholder="Enter your email"
//           className={`mt-1 block w-full rounded-md border border-gray-300 bg-transparent text-gray-900 px-4 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 ${
//             errors.email ? "border-red-500" : ""
//           }`}
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
//               message: "Invalid email",
//             },
//           })}
//         />
//         {errors.email && (
//           <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
//         )}
//       </div>

//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="w-full py-3 px-6 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition disabled:opacity-50"
//       >
//         {isSubmitting ? "Joining..." : "✨ Join Waitlist"}
//       </button>

//       {errorMessage && (
//         <p className="text-sm text-red-600 text-center">{errorMessage}</p>
//       )}
//     </form>
//   );
// }
