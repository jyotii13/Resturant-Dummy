// // WITH A LIBRARY
// // "use client"
// // import React from 'react'
// // import Countdown from 'react-countdown'

// // const endingDate = new Date("2023-07-25")

// // const CountDown = () => {
// //   return (
// //     <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate}/>
// //   )
// // }

// // export default CountDown


// // WITHOUT A LIBRARY
// "use client"
// import React, { useState, useEffect } from "react";

// const CountDown = () => {
  
//   let const1 = +new Date(`10/10/2023`) - +new Date();
//   const [delay, setDelay] = useState(const1);

//   const d = Math.floor(const1 / (1000 * 60 * 60 * 24));
//   const h = Math.floor((const1 / (1000 * 60 * 60)) % 24);
//   const m = Math.floor((const1 / 1000 / 60) % 60);
//   const s = Math.floor((const1 / 1000) % 60);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDelay(delay - 1);
//     }, 1000);

//     if (delay === 0) {
//       clearInterval(timer);
//     }

//     return () => {
//       clearInterval(timer);
//     };
//   });
//   return (
//     <span className="font-bold text-5xl text-yellow-300">
//       {d}:{h}:{m}:{s}
//     </span>
//   );
// };

// export default CountDown;