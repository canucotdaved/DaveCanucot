import React from "react";
import { motion } from "framer-motion";
import Social from "./Social";
import Scroller from "./Scroller";

const HeroLogo = () => {
  const animate = {
    hidden: { opacity: 0, y: 30 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
        ease: "easeOut",
        duration: 3,
        type: "spring",
      },
    },
  };

  const h2Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        ease: "easeOut",
        delay: 1,
      },
    },
  };

  const svgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0, fill: "rgba(255, 0, 0, 0)", y: 30 },
    visible: {
      y: 0,
      opacity: 1,
      pathLength: 1,
      fill: "rgba(251, 232, 211,1)",
      transition: {
        duration: 1,
        pathLength: {
          duration: 10,
          repeatType: "reverse",
          color: "#000",
        },
        fill: { duration: 2, repeatType: "reverse", repeat: Infinity },
        opacity: { delay: 0, duration: 1 },
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div initial={"hidden"} animate={"show"}>
      <motion.svg
        width="377"
        height="35"
        viewBox="0 0 377 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
        variants={svgVariants}
      >
        <motion.path
          d="M1.48999 33.5V2.14996H10.648C12.8773 2.14996 14.9483 2.54896 16.861 3.34695C18.7737 4.14496 20.4457 5.25962 21.877 6.69096C23.321 8.12229 24.442 9.79429 25.24 11.707C26.0507 13.607 26.456 15.659 26.456 17.863C26.456 20.067 26.057 22.119 25.259 24.019C24.461 25.919 23.34 27.5783 21.896 28.997C20.4647 30.4156 18.7863 31.524 16.861 32.322C14.9483 33.1073 12.8773 33.5 10.648 33.5H1.48999ZM8.80499 26.945H9.79299C11.0723 26.945 12.244 26.7233 13.308 26.28C14.372 25.824 15.2903 25.1906 16.063 24.38C16.8483 23.5566 17.4563 22.594 17.887 21.492C18.3303 20.3773 18.552 19.155 18.552 17.825C18.552 16.5076 18.3367 15.298 17.906 14.196C17.4753 13.0813 16.8673 12.1123 16.082 11.289C15.2967 10.4656 14.372 9.83229 13.308 9.38896C12.244 8.93296 11.0723 8.70496 9.79299 8.70496H8.80499V26.945ZM31.4827 33.5L44.1747 2.14996H50.9767L63.6497 33.5H55.7647L53.5227 27.382H41.6287L39.3677 33.5H31.4827ZM44.1177 20.96H51.0147L47.5757 12.087L44.1177 20.96ZM76.8185 33.5L63.6705 2.14996H71.9355L79.6875 22.48L87.4395 2.14996H95.7045L82.5565 33.5H76.8185ZM103.214 33.5V2.14996H121.226V8.57196H110.529V14.576H120.77V20.998H110.529V27.078H121.226V33.5H103.214ZM160.726 34.108C158.358 34.108 156.122 33.69 154.019 32.854C151.917 32.0053 150.061 30.84 148.452 29.358C146.844 27.8633 145.583 26.1343 144.671 24.171C143.759 22.2076 143.303 20.105 143.303 17.863C143.303 15.6083 143.759 13.4993 144.671 11.536C145.596 9.55996 146.856 7.83096 148.452 6.34896C150.061 4.85429 151.91 3.68896 154 2.85296C156.103 2.00429 158.332 1.57996 160.688 1.57996C162.601 1.57996 164.431 1.84596 166.179 2.37795C167.927 2.90996 169.409 3.60029 170.625 4.44896L167.509 10.681C166.737 10.0983 165.787 9.63596 164.659 9.29396C163.532 8.95196 162.367 8.78096 161.163 8.78096C159.77 8.78096 158.472 9.00896 157.268 9.46496C156.065 9.92096 155.007 10.5606 154.095 11.384C153.196 12.2073 152.493 13.17 151.986 14.272C151.492 15.3613 151.245 16.552 151.245 17.844C151.245 19.136 151.492 20.333 151.986 21.435C152.493 22.5243 153.196 23.4806 154.095 24.304C155.007 25.1273 156.065 25.767 157.268 26.223C158.472 26.679 159.77 26.907 161.163 26.907C162.367 26.907 163.532 26.736 164.659 26.394C165.787 26.052 166.737 25.5896 167.509 25.007L170.625 31.239C169.46 32.0496 168.01 32.7336 166.274 33.291C164.539 33.8356 162.69 34.108 160.726 34.108ZM174.576 33.5L187.268 2.14996H194.07L206.743 33.5H198.858L196.616 27.382H184.722L182.461 33.5H174.576ZM187.211 20.96H194.108L190.669 12.087L187.211 20.96ZM214.268 33.5V2.14996H221.583L233.895 21.321V2.14996H241.21V33.5H233.895L221.583 14.329V33.5H214.268ZM264.749 34.108C260.695 34.108 257.624 33.1263 255.534 31.163C253.456 29.187 252.418 26.2673 252.418 22.404V2.14996H259.752V20.257C259.752 22.689 260.125 24.4053 260.873 25.406C261.633 26.4066 262.918 26.907 264.73 26.907C266.554 26.907 267.839 26.4066 268.587 25.406C269.347 24.4053 269.727 22.689 269.727 20.257V2.14996H277.061V22.404C277.061 26.2673 276.022 29.187 273.945 31.163C271.867 33.1263 268.802 34.108 264.749 34.108ZM302.506 34.108C300.138 34.108 297.902 33.69 295.799 32.854C293.697 32.0053 291.841 30.84 290.232 29.358C288.624 27.8633 287.363 26.1343 286.451 24.171C285.539 22.2076 285.083 20.105 285.083 17.863C285.083 15.6083 285.539 13.4993 286.451 11.536C287.376 9.55996 288.636 7.83096 290.232 6.34896C291.841 4.85429 293.69 3.68896 295.78 2.85296C297.883 2.00429 300.112 1.57996 302.468 1.57996C304.381 1.57996 306.211 1.84596 307.959 2.37795C309.707 2.90996 311.189 3.60029 312.405 4.44896L309.289 10.681C308.517 10.0983 307.567 9.63596 306.439 9.29396C305.312 8.95196 304.147 8.78096 302.943 8.78096C301.55 8.78096 300.252 9.00896 299.048 9.46496C297.845 9.92096 296.787 10.5606 295.875 11.384C294.976 12.2073 294.273 13.17 293.766 14.272C293.272 15.3613 293.025 16.552 293.025 17.844C293.025 19.136 293.272 20.333 293.766 21.435C294.273 22.5243 294.976 23.4806 295.875 24.304C296.787 25.1273 297.845 25.767 299.048 26.223C300.252 26.679 301.55 26.907 302.943 26.907C304.147 26.907 305.312 26.736 306.439 26.394C307.567 26.052 308.517 25.5896 309.289 25.007L312.405 31.239C311.24 32.0496 309.79 32.7336 308.054 33.291C306.319 33.8356 304.47 34.108 302.506 34.108ZM333.97 34.108C331.778 34.108 329.726 33.69 327.814 32.854C325.901 32.018 324.223 30.859 322.779 29.377C321.335 27.8823 320.201 26.1533 319.378 24.19C318.567 22.214 318.161 20.0986 318.161 17.844C318.161 15.5893 318.567 13.4803 319.378 11.517C320.201 9.54096 321.335 7.81196 322.779 6.32996C324.223 4.83529 325.901 3.66996 327.814 2.83396C329.726 1.99796 331.778 1.57996 333.97 1.57996C336.161 1.57996 338.213 1.99796 340.126 2.83396C342.038 3.66996 343.716 4.83529 345.16 6.32996C346.604 7.81196 347.732 9.54096 348.543 11.517C349.366 13.4803 349.777 15.5893 349.777 17.844C349.777 20.0986 349.366 22.214 348.543 24.19C347.732 26.1533 346.604 27.8823 345.16 29.377C343.716 30.859 342.038 32.018 340.126 32.854C338.213 33.69 336.161 34.108 333.97 34.108ZM333.97 27.04C335.135 27.04 336.199 26.8183 337.161 26.375C338.137 25.9316 338.973 25.3046 339.669 24.494C340.379 23.6706 340.923 22.7016 341.303 21.587C341.696 20.4596 341.893 19.212 341.893 17.844C341.893 16.476 341.696 15.2346 341.303 14.12C340.923 12.9926 340.379 12.0236 339.669 11.213C338.973 10.3896 338.137 9.75629 337.161 9.31296C336.199 8.86962 335.135 8.64796 333.97 8.64796C332.804 8.64796 331.734 8.86962 330.759 9.31296C329.796 9.75629 328.96 10.3896 328.251 11.213C327.554 12.0236 327.009 12.9926 326.617 14.12C326.237 15.2346 326.047 16.476 326.047 17.844C326.047 19.212 326.237 20.4596 326.617 21.587C327.009 22.7016 327.554 23.6706 328.251 24.494C328.96 25.3046 329.796 25.9316 330.759 26.375C331.734 26.8183 332.804 27.04 333.97 27.04ZM361.494 33.5V8.59096H354.141V2.14996H376.181V8.59096H368.828V33.5H361.494Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linejoin="round"
          fill="#FBE8D3"
          variants={pathVariants}
        />
      </motion.svg>

      <motion.h2
        variants={h2Variants}
        className="font-semibold text-2xl text-white py-3 font-Spartan"
      >
        Engineer + Front-end Developer
      </motion.h2>
      <Social />
      <Scroller />
    </motion.div>
  );
};

export default HeroLogo;
