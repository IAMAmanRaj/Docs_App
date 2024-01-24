import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        {data.description}
      </p>
      <div className="footer absolute bottom-0 w-full h-15  left-0">
        <div className="flex items-center justify-between px-8 py-3   mb-3">
          <h5>0.4mb</h5>
          <span className="w-8 h-8 bg-zinc-600 rounded-full flex items-center  justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <LuDownload size="1.0em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full h-10 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600 "
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
