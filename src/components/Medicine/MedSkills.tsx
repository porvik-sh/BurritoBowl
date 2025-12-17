import React from "react";
import MedSkill from "./MedSkill";
import orcid from "../../assets/Medicine/orcid.png";
import typescript from "../../assets/technology/typescript.png";
import react from "../../assets/technology/react.png";
import node from "../../assets/technology/node.png";
import azureDevops from "../../assets/technology/azuredevops.jpeg";
import CustomText from "../Projects/CustomText";
import styles from "../../styles";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import Link from "Next/link";

function MedSkills() {
  return (
    <section id="MedSkills" className={`${styles.paddings}`}>
      <div className="flex flex-col justify-center items-center">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}>
          <CustomText
            title="MedSkills🩺"
            textStyles="text-center text-3xl font-bold"
          />
        </motion.div>
        <hr className="w-10 h-1 mx-auto my-2 bg-[#839788] border-0 rounded" />
        <motion.div
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-3 p-5 md:grid-cols-3">
            <MedSkill
              title="Research."
              subtitle="Published Citations"
              image={orcid}
            />
            <MedSkill
              title="TheArchiveS."
              subtitle="Research Papers by others , fascinates me"
              image={typescript}
            />
            <MedSkill title="ORCID-ID" subtitle="Open Research Works." image={orcid} />
            <MedSkill
              title="Unpublished Works..."
              subtitle="includes -Ongoing & without-Ethical Approval"
              image={react}
            />
          </div>
          <div className="flex items-center justify-center">
              <Link href="/MedicinePage" target="_blank">
                <button
                  aria-label="Explore..."
                  className="flex justify-center items-center bg-black rounded-[7px] text-white text-xs p-2 px-3 gap-2"
                >
                  <p>Explore...</p>
                </button>
              </Link>
            </div>
        </motion.div>
        </div>
    </section>
  );
}

export default MedSkills;
