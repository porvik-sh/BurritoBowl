import Image from "next/image";
import React from "react";
import Neurexa from "../../assets/Neurexa.jpg";
import { AiFillFileText } from "react-icons/ai";
import Link from "next/link";
import CustomText from "../Projects/CustomText";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

function Latestworks() {
  return (
    <section id="about" className="py-20">
      <div className="flex flex-col justify-center items-center p-5 mt-5 pt-28 sm:py-[30px]">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <CustomText
            title="Latest works~"
            textStyles="text-center text-3xl font-bold"
          />
        </motion.div>
        <hr className="w-10 h-1 mx-auto my-2 bg-[#839788] border-0 rounded" />
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="flex-row items-center justify-center md:flex gap-[50px] py-5"
        >
          <div className="flex items-center justify-center py-2">
            <Image
              className="max-w-[220px] max-h-[220px] rounded-[20px]"
              src={Neurexa}
              alt="avatar-about"
              width={120}
              height={220}
              placeholder="blur" 
              loading="lazy"
            />
          </div>
          <div className="flex-col p-2">
            <p className="w-[380px] py-5 text-sm text-center">
              {" "}
              Medico ? Feel free to explore my latest project, MedNeurexa- 
            </p>
            <marquee className="w-[300px] py-1 text-sm text-center"><i>free 20K Token to GPT5 and Google gemma3b</i></marquee>
            <div className="flex items-center justify-center">
              <Link
                href="https://work4xoxo.wixsite.com/medneurexa"
                target="_blank"
                download
              >
                <button
                  aria-label="Enter Domain."
                  className="flex justify-center items-center bg-black rounded-[7px] text-white text-xs p-2 px-3 gap-2"
                >
                  <p>Enter Domain.</p>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Latestworks;
