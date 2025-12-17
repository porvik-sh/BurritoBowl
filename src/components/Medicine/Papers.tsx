import React from "react";
import Paper from "./Paper";
import orcid from "../../assets/Medicine/orcid.png";
import ICMR from "../../assets/Medicine/ICMR.webp";
import typescript from "../../assets/technology/typescript.png";
import react from "../../assets/technology/react.png";
import node from "../../assets/technology/node.png";
import azureDevops from "../../assets/technology/azuredevops.jpeg";
import CustomText from "../Projects/CustomText";
import styles from "../../styles";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import Link from "Next/link";

function Papers() {
  return (
    <section id="Papers" className={`${styles.paddings}`}>
      <div className="flex flex-col justify-center items-center">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}>
          <CustomText
            title="Publications"
            textStyles="text-center text-3xl font-bold"
          />
        </motion.div>
        <motion.div
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-3 p-5 md:grid-cols-3">
            <Paper
              title="ICMR Research."
              subtitle="Published Citations"
              image={ICMR}
              />
            <Paper
              title="TheArchiveS."
              subtitle="Research Papers by others , fascinates me"
              image={typescript}
            />
            <Paper title="ORCID-ID" subtitle="Open Research Works." image={orcid} />
             <div className="flex items-center justify-center">
              <Link
                href="/resume/STS.pdf"
                target="_blank"
                download
              >
                <button
                  aria-label="Certification."
                  className="flex justify-center items-center bg-black rounded-[7px] text-white text-xs p-2 px-3 gap-2"
                >
                  <p>Download.</p>
                </button>
              </Link>
            </div>
             <div className="flex items-center justify-center">
              <Link
                href="/resume/TheArchive.txt"
                target="_blank"
                download
              >
                <button
                  aria-label="Certification."
                  className="flex justify-center items-center bg-black rounded-[7px] text-white text-xs p-2 px-3 gap-2"
                >
                  <p>Download .txt</p>
                </button>
              </Link>
            </div>
             <div className="flex items-center justify-center">
              <Link
                href="/resume/OrcidID.jpeg"
                target="_blank"
                download
              >
                <button
                  aria-label="Certification."
                  className="flex justify-center items-center bg-black rounded-[7px] text-white text-xs p-2 px-3 gap-2"
                >
                  <p>view ID</p>
                </button>
              </Link>
            </div>
            <Paper
              title="Unpublished Works..."
              subtitle="includes -Ongoing & without-Ethical Approval"
              image={react}
            />
            
         
          <div className="flex items-center justify-left">
              <Link href="/MedicinePage" target="_blank">
                <button
                  aria-label="Locked"
                  className="flex justify-center items-center bg-black rounded-[8px] text-white text-xs p-2 px-2 gap-2"
                >
                  <p>🔒</p>
                </button>
              </Link>
            </div>
             </div>
        </motion.div>
        </div>
    </section>
  );
}

export default Papers;
