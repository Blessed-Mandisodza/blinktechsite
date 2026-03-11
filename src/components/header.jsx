// import React from "react";
// import { Link } from "react-router-dom";

// export const Header = (props) => {
//   return (
//     <header id="header">
//       <div className="intro">
//         <div className="overlay">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-8 col-md-offset-2 intro-text">
//                 <h1>
//                   {props.data ? props.data.title : "Loading"}
//                   <span></span>
//                 </h1>
//                 <p>{props.data ? props.data.paragraph : "Loading"}</p>
//                 <Link
//                   to="/services"
//                   className="btn btn-custom btn-lg"
//                 >
//                   Learn More
//                 </Link>{" "}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Header = (props) => {
  // Animation variants
  const titleVariants = {
    hidden: {
      x: -200,
      opacity: 0,
      skewX: -15,
    },
    visible: {
      x: 0,
      opacity: 1,
      skewX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const paragraphVariants = {
    hidden: {
      x: 200,
      opacity: 0,
      skewX: 15,
    },
    visible: {
      x: 0,
      opacity: 1,
      skewX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.2,
        duration: 0.8,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.4,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.1,
      y: -5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      y: 0,
    },
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      backdropFilter: "blur(0px)",
    },
    visible: {
      opacity: 1,
      backdropFilter: "blur(2px)",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header id="header">
      <div className="intro">
        <motion.div
          className="overlay"
          initial="hidden"
          animate="visible"
          variants={overlayVariants}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={titleVariants}
                >
                  {props.data ? props.data.title : "Loading"}
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "50px" }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    style={{
                      display: "inline-block",
                      height: "3px",
                      background: "#4a90e2",
                      marginLeft: "10px",
                      verticalAlign: "middle",
                    }}
                  ></motion.span>
                </motion.h1>

                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={paragraphVariants}
                >
                  {props.data ? props.data.paragraph : "Loading"}
                </motion.p>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{ display: "inline-block" }}
                >
                  <Link to="/services" className="btn btn-custom btn-lg">
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};
