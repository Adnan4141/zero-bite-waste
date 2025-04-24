import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import review1 from "./../../assets/reviwer/review1.jpg";
import review2 from "./../../assets/reviwer/review2.jpg";
import review3 from "./../../assets/reviwer/review3.jpg";
import review4 from "./../../assets/reviwer/review4.jpg";
import review5 from "./../../assets/reviwer/review5.jpg";
import review6 from "./../../assets/reviwer/review6.jpg";
import review7 from "./../../assets/reviwer/review7.jpg";
import review8 from "./../../assets/reviwer/review8.jpg";
import Testimonial from './volunteerMarquee';
import ScrollToTopButton from '../Shared/scrollToTopButton/scrollToTopButton';
import ScrollBar from '../Shared/ScrollBar/ScrollBar';

const Volunteer = () => {
  const reviewInfo = [
    { _id: 1, img: review1, name: "Lawrence Petrie", date: "10/12/2022", review_mark: "", description: "very effective course" },
    { _id: 2, img: review2, name: "Lucas Aquilani", date: "10/12/2022", review_mark: "", description: "very effective course" },
    { _id: 3, img: review3, name: "Ruth Aquilani", date: "10/12/2022", review_mark: "", description: "very effective course" },
    { _id: 4, img: review4, name: "Jane Ansems", date: "10/12/2022", review_mark: "", description: "very effective course" },
    { _id: 5, img: review5, name: "Jack Peters", date: "10/12/2022", review_mark: "", description: "very effective course" },
    { _id: 6, img: review6, name: "Lora Portilla", date: "10/12/2022", review_mark: "", description: "very effective course" },
    { _id: 7, img: review7, name: "Anna Phillips", date: "10/12/2022", review_mark: "", description: "very effective course" },
    { _id: 8, img: review8, name: "Roland Walker", date: "10/12/2022", review_mark: "*****", description: "very effective course" },
  ];

  return (
    <div className="volunteer-container">
      {/* Scroll Progress Bar with green-yellow gradient */}
      <ScrollBar />
      {/* Hero Section */}
      <section className="w-full bg-slate-50 shadow-lg mb-12">
  <div className="flex flex-col md:flex-row items-center bg-green-800">
    {/* Left Green Box */}
    <div className=" text-white w-full md:w-2/5 py-16 px-8 flex items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Do you want to be a <span className="text-yellow-500">VOLUNTEER</span>?
      </h1>
    </div>
    {/* Right Image */}
    <div className="w-full md:w-3/5">
      <img src="Volunteer 2.jpeg" alt="Volunteer" className="w-full h-full object-cover" />
    </div>
  </div>
</section>


      {/* Join Team Section */}
      <section className="bg-slate-300 py-12 text-center rounded-lg shadow-lg mb-12 px-4">
  <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">Join Our Volunteer Team</h2>
  <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
    Make a difference in your community by volunteering with Zero Bite Waste.
    Help us rescue surplus food and deliver it to those in need.
  </p>
  <div className="flex flex-col md:flex-row justify-center gap-6">
    <Link to="/signup">
      <button className="bg-orange-600 text-white py-3 px-6 rounded-lg hover:opacity-90 transition">Sign up to be a Volunteer</button>
    </Link>
    <Link to="/signin">
      <button className="bg-gray-800 text-white py-3 px-6 rounded-lg hover:opacity-90 transition">Log in</button>
    </Link>
  </div>
</section>


      {/* Volunteer Info Section */}
      <section className="volunteer-info flex justify-between mb-16 px-8">
        <div className="volunteer-info-text w-1/2">
          <p className="text-lg mb-4 ">
            Food Runner volunteers drive, bike, scooter, or walk to a donor's location and pick up surplus food, then deliver it to a local nonprofit where it is distributed to those in need.
          </p>

          <h3 className="text-yellow-500 text-xl font-bold">To be a volunteer:</h3>
          <ul className="list-disc pl-5 ">
            <li>Be 18 years or older (or volunteer with a parent if under 18).</li>
            <li>Have a vehicle in good condition if volunteering by car, or use bike, scooter, or walking.</li>
            <li>Have an up-to-date driver's license and car insurance (if volunteering by car).</li>
            <li>Physically able to lift, load, and unload food donations safely.</li>
            <li>Commit to a minimum of 2 food rescues per month.</li>
          </ul>

          <h3 className="text-yellow-500 text-xl font-bold mt-4">You will receive:</h3>
          <ul className="list-disc pl-5 ">
            <li>Training on how to conduct a food rescue.</li>
            <li>A flexible volunteer opportunity that works around your schedule.</li>
            <li>Satisfaction in knowing you are helping to reduce food waste and end hunger.</li>
          </ul>
        </div>
        <div className="volunteer-info-image w-1/2">
          <img src="Volunteer 3.jpg" alt="Volunteer Info" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Volunteer of the Year Section */}
      <section className="volunteer-of-the-year bg-slate-300 p-12 rounded-lg shadow-lg mb-12">
        <div className="flex justify-center items-center gap-8">
          <div className="volunteer-of-the-year-image w-1/4 h-48 overflow-hidden rounded-full shadow-lg">
            <img src="Wasik.jpg" alt="Wasik Imam" className="w-full h-full object-cover" />
          </div>
          <div className="volunteer-of-the-year-text w-3/4">
            <p className="text-xl italic mb-4 text-black">"After retiring I was looking for something meaningful to do that enabled me to give back to my community. I discovered the ExtraFood program and thought what a brilliant idea that they can rescue thousands of pounds of food to give to the needy and I have been a volunteer ever since. I appreciate what they are doing and am happy to be part of this wonderful organization."</p>
            <p className="text-2xl font-bold italic text-black">~ Wasik Imam, 2024 Volunteer of the Year</p>
          </div>
        </div>
      </section>

      {/* Volunteer Showcase Section */}
      <section className="my-12">
        <h2 className="text-5xl font-bold text-yellow-500 text-center mb-8">Our Volunteers in Action</h2>
        <div className="volunteer-showcase-gallery grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="volunteer-showcase-image">
            <img src="Vol-slide 1.jpg" alt="Volunteer helping with food rescue" className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div className="volunteer-showcase-image">
            <img src="Vol-slide 2.jpeg" alt="Volunteers distributing food" className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div className="volunteer-showcase-image">
            <img src="Vol-slide 3.jpg" alt="Volunteer collecting surplus food" className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div className="volunteer-showcase-image">
            <img src="Vol-slide 4.jpg" alt="Volunteers working together" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <div className="border-l-8 border-l-yellow-500 p-6 m-6 border-white text-white">
          <h1 className="text-5xl lg:text-6xl font-bold italic uppercase">
            <span className="text-2xl font-bold">meet our<br /></span>
            <span className="text-yellow-500">volunteer</span>
          </h1>
          <h5 className="text-lg font-sans">Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in...</h5>
        </div>

        <Marquee speed={50}>
          {reviewInfo.map((review) => (
            <Testimonial key={review._id} review={review} />
          ))}
        </Marquee>
      </section>
      {/* Back to Top */}
      <ScrollToTopButton />
    </div>
  );
};

export default Volunteer;
