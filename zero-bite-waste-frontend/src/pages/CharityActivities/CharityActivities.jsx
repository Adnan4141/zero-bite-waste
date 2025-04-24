import React from "react";
import { motion } from "framer-motion";

import charity1 from "./../../assets/charity/charity1.jpg";
import charity2 from "./../../assets/charity/charity2.jpg";
import charity3 from "./../../assets/charity/charity3.jpg";
import charity4 from "./../../assets/charity/charity4.jpg";
import ScrollBar from "../Shared/ScrollBar/ScrollBar";
import ScrollToTopButton from "../Shared/scrollToTopButton/scrollToTopButton";

const CharityActivities = () => {
  const activities = [
    {
      title: "Food Collection Drives",
      description:
        "We organize weekly food drives where volunteers collect surplus food from local markets, restaurants, and households to be redistributed to those in need.",
      image: charity1,
    },
    {
      title: "Community Meal Events",
      description:
        "Every month, we host meal-sharing events in public parks and community centers, bringing together people from all walks of life to enjoy a warm, nutritious meal.",
      image: charity2,
    },
    {
      title: "School Nutrition Programs",
      description:
        "We partner with schools in underserved areas to provide healthy snacks and lunch boxes to ensure no child goes hungry during class.",
      image: charity3,
    },
    {
      title: "Rescue & Redistribution",
      description:
        "Volunteers rescue unsold food nearing expiry from supermarkets and deliver it directly to shelters and food banks.",
      image: charity4,
    },
  ];

  return (
    <>
      <ScrollBar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-primary">
            Spreading Kindness Through Action 🍽️
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Every meal rescued. Every hand that helps. Every smile we spark — it
            all makes a difference. Explore our charity activities and join us
            in turning surplus into support.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="badge badge-success badge-lg mx-2">#ZeroHunger</div>
            <div className="badge badge-warning badge-lg mx-2">#FoodRescue</div>
            <div className="badge badge-accent badge-lg mx-2">
              #CommunityLove
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="card bg-base-100 shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <figure className="overflow-hidden">
                <motion.img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-60 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl text-primary">
                  {activity.title}
                </h2>
                <p className="">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Back to Top */}
      <ScrollToTopButton />
    </>
  );
};

export default CharityActivities;
