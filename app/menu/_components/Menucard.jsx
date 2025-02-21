"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";


export const MenuCard = ({ name, price, description, image, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 p-6 transition-all duration-300 hover:scale-105 hover:bg-white/20">
        <div className="absolute top-2 right-2 bg-space-pink/80 text-white px-3 py-1 rounded-full text-sm">
          {price}
        </div>
        <div className="mb-4 h-48 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <Star className="w-5 h-5 text-yellow-400" />
          </div>
          <p className="text-sm text-gray-700">{description}</p>
          <div className="inline-block bg-space-purple/30 px-3 py-1 rounded-full text-xs text-white">
            {category}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
