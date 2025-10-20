import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../assets/bg.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundposition: "center",
};

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={bgStyle}
        className="container py-24 md:py-28 "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col justify-center "
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className=" text-4xl font-bold !leading-snug">
              450K+ Students are learning from us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima
            </p>
            <a
              href=""
              className="inline-flex  items-center gap-2 justify-center bg-primary text-white font-semibold rounded-lg hover:bg-secondary duration-200 shadow-[0px_10px_8px_-7px_#f7ba34] hover:shadow-[0px_10px_8px_-7px_#69a79c] py-2 px-4 !mt-8 mx-auto  group"
            >
              Subscribe Now
              <FaBell className=" group-hover:aniamte-bounce group-hover:text-lg duration-200 ease-in-out" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;

{
  /* <FaBell />; */
}
