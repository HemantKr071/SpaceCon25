"use client";

import { Index } from "./Index";

const menuItems = [
    {
      name: "Nebula Burger",
      price: "$12.99",
      description: "Double patty with cosmic sauce, meteor cheese, and stardust lettuce",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500",
      category: "Space Burgers"
    },
    {
      name: "Galaxy Fries",
      price: "$6.99",
      description: "Crispy fries dusted with cosmic spices and aurora sauce",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500",
      category: "Cosmic Sides"
    },
    {
      name: "Asteroid Nuggets",
      price: "$8.99",
      description: "Crispy chicken nuggets with meteor dust seasoning",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=500",
      category: "Space Snacks"
    },
    {
      name: "Milky Way Shake",
      price: "$7.99",
      description: "Creamy vanilla shake with cosmic sparkles and star sprinkles",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=500",
      category: "Galactic Drinks"
    },
    {
      name: "Supernova Pizza",
      price: "$15.99",
      description: "Explosive blend of cosmic pepperoni, star-shaped cheese, and nebula sauce",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500",
      category: "Space Pizzas"
    },
    {
      name: "Constellation Tacos",
      price: "$10.99",
      description: "Three stellar tacos aligned with space-spiced meat and meteor salsa",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=500",
      category: "Space Mexican"
    },
    {
      name: "Black Hole Coffee",
      price: "$4.99",
      description: "Dark roasted coffee so intense light can't escape its flavor",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=500",
      category: "Galactic Drinks"
    },
    {
      name: "Cosmic Wings",
      price: "$11.99",
      description: "Anti-gravity wings with choice of lunar or solar sauce",
      image: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/eb904dea-ec3a-4e9b-ae9f-e0fe73457c11.jpg",
      category: "Space Snacks"
    },
    {
      name: "Mars Melt",
      price: "$13.99",
      description: "Red planet inspired grilled cheese with martian tomato soup",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=500",
      category: "Space Sandwiches"
    },
    {
      name: "Orbital Onion Rings",
      price: "$5.99",
      description: "Saturn-inspired rings with space dust seasoning",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FKUjlqURBS6yqDjjDmbcN5MUBz2V-QAeiw&s",
      category: "Cosmic Sides"
    },
    {
      name: "Jupiter's Giant Hot Dog",
      price: "$9.99",
      description: "Foot-long hot dog with swirling cosmic sauces and meteor crumbs",
      image: "https://media.istockphoto.com/id/484992224/photo/homemade-bacon-wrapped-hot-dogs.jpg?s=1024x1024&w=is&k=20&c=4pb3x-9aACwOn_-3oRqR2NTQrcQfXTUWfH5FVF-Fzs8=",
      category: "Space Dogs"
    },
    {
      name: "Cosmic Ice Cream Bowl",
      price: "$8.99",
      description: "Galaxy swirl ice cream with shooting star sprinkles",
      image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=500",
      category: "Space Desserts"
    }
  ];
const Home = () => {
    return (
        <div>
            <Index/>
        </div>
    );
}
export default Home;