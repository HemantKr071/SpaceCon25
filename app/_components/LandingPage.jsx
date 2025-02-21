"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Planet, Coffee, UtensilsCrossed, Globe, FeatherIcon } from "lucide-react";
import { Meteors } from "@/components/magicui/meteors";
import '../index.css'
import { FeaturedDishes } from "./FeaturedDishes";
import PlanetButton from "./PlanetButton";
import { Astronaut } from "./Astronaut";
import Link from "next/link";
const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(null);

  const menuItems = [
    {
      id: "neptune",
      title: "Neptune Nuggets",
      description: "Crispy chicken nuggets glazed with our special blue sauce",
      price: "$12.99",
      icon: Globe
    },
    {
      id: "galaxy",
      title: "Galaxy Burger",
      description: "Black bun burger with aurora sauce and meteor cheese",
      price: "$18.99",
      icon: Coffee
    },
    {
      id: "cosmic",
      title: "Cosmic Pasta",
      description: "Spiral pasta in a nebula cream sauce with star-dust garnish",
      price: "$16.99",
      icon: UtensilsCrossed
    }
  ];

  return (
    <div className="min-h-screen bg-space-dark overflow-hidden">
      
      <div className="parallax-stars" />

     
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
        <span className="text-space-teal text-sm tracking-wider uppercase flex items-center gap-2 mb-4">
          <Sparkles size={16} />
          <Meteors number={100} />
          Welcome to
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 text-white">
          Astro Dine
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-8">
          Experience extraordinary dining among the stars, where each dish is crafted to take you on an interstellar journey.
        </p>
        <Link href = "/menu" >
        <Button
          size="lg"
          className="bg-space-purple hover:bg-space-purple/90 text-white font-medium py-6 px-8 rounded-full transition-all duration-300 hover:scale-105"
        >
          Explore Menu
        </Button>
        </Link>

      </motion.section>
      
      
      <div className="flex justify-between gap-10 items-center">
         <PlanetButton/>
         <Astronaut/>
      </div>

      {/* Menu Preview Section */}
      <section className="py-5 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Featured Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`glass-card hover:sca h-full p-6 transition-all duration-300 transform hover:scale-110 hover:translate-y-[-10px] ${
                    isHovered === item.id ? "border-space-teal" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(item.id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-space-purple/20 flex items-center justify-center mb-4">
                      <item.icon className="w-8 h-8 text-space-teal" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    <span className="text-space-teal font-semibold">{item.price}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;