import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PhotoAlbum, { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/styles.css";
import ScrollToTopButton from "../Shared/scrollToTopButton/scrollToTopButton";
import ScrollBar from "../Shared/ScrollBar/ScrollBar";

const photos = [
  {
    src: "/beneficiary 1.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/beneficiary 2.jpeg",
    width: 800,
    height: 500,
  },
  {
    src: "/beneficiary 3.jpg",
    width: 600,
    height: 600,
  },
];

const rankedContributors = [
  {
    name: "Priyanka",
    image: "/Priyanka.jpg",
    donated: "1,200 meals",
    quote:
      "Every loaf spared from the bin tells a story of hope, every rescued meal is a silent act of kindness, waste is not just loss—it’s neglect, food is too sacred to discard so casually, let’s feed bellies not landfills, the world doesn’t lack food—it lacks distribution, rescuing food is restoring balance.",
    rank: 1,
  },
  {
    name: "Minhaz",
    image: "/Minhaz.jpg",
    donated: "950 meals",
    quote:
      "Behind every leftover is a chance to nourish, saving food is saving dignity, hunger ends when we value what we grow, abundance becomes meaningful when shared, wasting food is wasting love and labor, every bite rescued is a bite respected, food rescue turns excess into empathy",
    rank: 2,
  },
  {
    name: "Pretul",
    image: "/Pretul.jpg",
    donated: "850 meals",
    quote:
      "Food rescue is rebellion against indifference, a meal saved is a soul touched, what we waste can be someone’s lifeline, every rescued apple is a step toward justice, no one should starve while food rots, it’s not charity—it’s humanity, changing the world starts with your plate.",
    rank: 3,
  },
];

const monetaryDonors = [
  { name: "Rakib", image: "/Rakib.jpg", donated: "$500" },
  { name: "Mathuie", image: "/Mathuie.jpg", donated: "$400" },
  { name: "Simanta", image: "/Simanta.jpg", donated: "$350" },
  { name: "Araf", image: "/Araf.jpg", donated: "$300" },
];

const beneficiaryImages = [
  "/beneficiary 1.jpg",
  "/beneficiary 2.jpeg",
  "/beneficiary 3.jpg",
];

const TopContributorPage = () => {
  const [donationCount, setDonationCount] = useState(15000);

  useEffect(() => {
    const interval = setInterval(() => {
      setDonationCount(
        (prevCount) => prevCount + Math.floor(Math.random() * 10)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-gray-50 pb-12">
      <ScrollBar/>
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/topcontributorHero.webp"
          alt="Top Contributors"
          className="w-full h-96 object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl font-bold">Meet Our Top Contributors!</h1>
          <p className="mt-2 text-lg">
            These incredible individuals have made a significant impact in
            reducing food waste and feeding those in need.
          </p>
        </div>
      </div>

      {/* Top Food Donors Section */}
      <h2 className="text-5xl py-12 text-center bg-yellow-500">Top Food Donors</h2>
      <div className="space-y-8 my-8">
        {rankedContributors.map((contributor) => (
          <div className="w-10/12 mx-auto p-6 bg-slate-200 rounded-lg shadow-md">
            <div className="flex items-center space-x-6">
              <img
                src={contributor.image}
                alt={contributor.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <p className="italic text-gray-700">{contributor.quote}</p>
                <p className="mt-4 text-2xl font-semibold text-right text-black">
                  {contributor.name}
                </p>
                <p className="text-sm text-right text-black">{contributor.donated}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Monetary Donors Section */}
      <h2 className="text-5xl py-12 text-center bg-yellow-500">Top Monetary Donors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 my-8">
        {monetaryDonors.map((donor) => (
          <div className="card w-72 bg-base-100 shadow-md mx-auto">
            <figure>
              <img
                className="h-48 w-full object-cover rounded-lg"
                src={donor.image}
                alt={donor.name}
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-xl font-semibold">
                {donor.name}
                <div className="badge badge-secondary">{donor.donated}</div>
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Live Donation Counter */}
      <div className="mt-16 text-center my-8">
        <p className="text-lg text-gray-700">Total Meals Donated:</p>
        <p className="text-3xl font-semibold text-yellow-600">
          {donationCount.toLocaleString()} meals
        </p>
      </div>

      {/* Become a Contributor Section */}
      <div className="bg-green-700 text-white py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Become a Contributor</h2>
        <p className="mb-6 text-lg">
          Join our mission to reduce food waste and feed those in need. Every
          meal donated makes a difference in someone's life. Step up and be a
          hero today!
        </p>
        <Link to="/signup">
          <button className="btn btn-warning text-white py-2 px-6 rounded-lg hover:bg-yellow-600">
            Join Us
          </button>
        </Link>
      </div>

      {/* Beneficiaries Section */}
      <div className="max-w-5xl mx-auto p-6">
        <p className="text-3xl font-bold text-center">Over 50,000 People Helped</p>
        <h2 className="text-3xl font-bold mb-6 text-center">Photo Album</h2>
        <RowsPhotoAlbum
          photos={photos}
          targetRowHeight={150}
          rowConstraints={{ singleRowMaxHeight: 250 }}
        />
      </div>
      {/* Back to Top */}
      <ScrollToTopButton />
    </div>
  );
};

export default TopContributorPage;
