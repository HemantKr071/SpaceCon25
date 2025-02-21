import { Sparkles, Planet, Coffee, UtensilsCrossed, Globe, FeatherIcon } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
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
    },
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

const firstHalf = menuItems.slice(0,menuItems.length/2);
const secondHalf = menuItems.slice(menuItems.length/2);
 const Featuredcard = () => {
    return (
        <div className="w-full">
                <section className="py-24 px-4">
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
                        className={`glass-card h-full p-6 transition-all duration-300 hover:translate-y-[-10px`}
                       
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
    )
}

export const FeaturedDishes = () => {
    return (
     
      <div className=" w-full mt-48 px-28 py-20">
          <MarqueeDemo/>
      </div>
      
    )
  }

export function MarqueeDemo() {
    return (
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstHalf.map((post,index) => (
            <Featuredcard key={index} {...post} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondHalf.map((post,index) => (
            <Featuredcard key={index} {...post} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    );
  }
  

  
  