// "use client";

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// // Mock Image component
// const Image = ({ src, alt, width, height, className, priority, ...props }) => (
//   <img 
//     src={src} 
//     alt={alt} 
//     className={className}
//     {...props}
//   />
// );

// const LuxuryResortSection = () => {
//   return (
//     <div>
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row gap-12 items-center px-4 xs:px-8 py-28">
//         <motion.div className='md:w-2/5 bg-red-600'
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           <p className="text-4xl sm:text-5xl font-bold tracking-wide text-[#2D5A47]">
//             DISCOVER
//             <br /> REFINED LUXURY
//           </p>
//           <p className="my-4 text-lg sm:text-xl text-gray-600 max-w-md leading-relaxed">
//             Where comfort meets sophistication—our winter retreat offers more than a getaway, 
//             blending timeless elegance with modern indulgence.
//           </p>
//         </motion.div>

//         <div className="md:w-3/5 flex gap-3 h-48 bg-red-600">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.6, y: 50 }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="flex-[3]"
//           >
//             <Image
//               src="/assets/home/image3.png"
//               alt="Luxury pool with mountain view"
//               className="rounded-[10px] object-cover w-full h-full"
//               priority
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.6, y: 50 }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//             className="flex-[2]"
//           >
//             <Image
//               src="/assets/home/image4.png"
//               alt="Luxury spa interior"
//               className="rounded-[10px] object-cover w-full h-full"
//               priority
//             />
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="flex flex-col md:flex-row gap-12 items-center px-4 xs:px-8 py-16">
//         <div className="md:w-3/5 flex gap-3 order-2 md:order-1 h-48 bg-red-600">
//           <div className="flex-[3]">
//             <Image
//               src="/assets/home/image2.png"
//               alt="Snowy mountain peaks"
//               className="rounded-[10px] object-cover w-full h-full"
//               priority
//             />
//           </div>
//           <div className="flex-[2]">
//             <Image
//               src="/assets/home/image1.png"
//               alt="Snowboarding"
//               className="rounded-[10px] object-cover w-full h-full"
//               priority
//             />
//           </div>
//         </div>

//         <div className="md:w-2/5 order-1 md:order-2 bg-red-600">
//           <h2 className="text-3xl sm:text-4xl font-bold tracking-wide text-[#2D5A47] mb-4">
//             TRANQUILITY & SERENITY
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-md leading-relaxed">
//             Immerse Yourself In A Sanctuary Of Calm, Where Soothing Spaces, 
//             Rejuvenating Rituals, And The Quiet Beauty Of Nature Come Together To 
//             Restore Balance And Peace Within
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LuxuryResortSection;