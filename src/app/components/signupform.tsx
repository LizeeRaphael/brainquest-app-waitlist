// "use client";

// import { useForm } from "react-hook-form";

// type FormData = {
//   name: string;
//   email: string;
// };

// export default function SignupForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitSuccessful },
//   } = useForm<FormData>();

//   const onSubmit = (data: FormData) => {
//     console.log("Submitted:", data);
//     // TODO: Hook up Firebase + Email provider
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full mx-auto">
//       {isSubmitSuccessful ? (
//         <p className="text-green-600 font-medium text-center">
//           🎉 Success! You’ve joined the waitlist.
//         </p>
//       ) : (
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <input
//             {...register("name", { required: "Name is required" })}
//             type="text"
//             placeholder="Your Name"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//           />
//           {errors.name && (
//             <span className="text-red-500 text-sm">{errors.name.message}</span>
//           )}

//           <input
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /\S+@\S+\.\S+/,
//                 message: "Enter a valid email",
//               },
//             })}
//             type="email"
//             placeholder="Your Email"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//           />
//           {errors.email && (
//             <span className="text-red-500 text-sm">{errors.email.message}</span>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
//           >
//             Join Waitlist 🚀
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }
