import React from "react";
import Image from "next/image";
import HomepageSeparator from "../../public/svg/Separators/HomepageSeparator.svg";
import Reviews from "../../components/Homepage/Reviews";
import HeadshotOne from "../../public/Homepage/pexels-gabby-k-5384445.jpg";
import HeadshotTwo from "../../public/Homepage/pexels-olly-3777946.jpg";
import HeadshotThree from "../../public/Homepage/pexels-shvetsa-5325840.jpg";

const ReviewsContainer = () => {
  return (
    <div className="relative">
      <Image
        src={HomepageSeparator}
        alt="HomepageSeperator"
        className="w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center p-5 flex-col">
        <h1 className="text-center tracking-wider text-4xl font-bold p-10 underline underline-offset-8">
          Reviews
        </h1>
        <div className="flex flex-row gap-4 w-full">
          <Reviews
            title='"Effortless Pet Scheduling Made Possible"'
            author="Alex Chiu"
            description="Managing my pet's appointments has never been easier thanks to PetSchedules! As a busy professional, I often struggled to keep track of vet visits, grooming appointments, and playdates for my furry friend. But with this app, everything is seamlessly organized in one place. The interface is intuitive and user-friendly, allowing me to book appointments with just a few clicks. Plus, the reminders ensure I never miss an important date again. PetSchedules has truly simplified my life as a pet owner, and I couldn't be happier with the convenience it offers!"
            authorImage={HeadshotOne}
          />
          <Reviews
            title='"A Game-Changer for Pet Businesses!"'
            author="Sarah Williams"
            description="Running a pet grooming salon can be chaotic, but PetSchedules has made scheduling a breeze! This app has completely transformed how we manage appointments and communicate with our clients. The customizable features allow us to tailor our services to each pet's specific needs, ensuring maximum satisfaction. Our customers love the convenience of booking appointments online, and the seamless integration with our website has boosted our business significantly. Thanks to PetSchedules, we're able to provide top-notch service while saving time and resources. It's a must-have tool for any pet business owner"
            authorImage={HeadshotThree}
          />
          <Reviews
            title='"Simplify Your Pets Schedule with PetSchedules"'
            author="Emily-rose Coleson"
            description="As a pet owner with a hectic lifestyle, PetSchedules has been a game-changer for me! This app has revolutionized how I manage my furry friend's appointments, from vet check-ups to grooming sessions and playdates. The interface is sleek and easy to navigate, making it a breeze to book appointments on the go. I love how I can access my pet's schedule from anywhere, whether I'm at work or out running errands. Plus, the reminders ensure I never forget an important date again. PetSchedules has truly simplified my life as a pet parent, and I highly recommend it to anyone looking for a convenient solution to scheduling for their pets!"
            authorImage={HeadshotThree}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewsContainer;
