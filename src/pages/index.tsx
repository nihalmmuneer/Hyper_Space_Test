"use client";
import { FaCode } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import Link from "next/link";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: "url('/home_bg.jpg')" }}
    >
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm z-10"></div>
      )}

      <div
        className={`relative flex items-center justify-center ${isModalOpen ? "blur-sm" : ""} z-20`}
      >
        <button
          onClick={toggleModal}
          className={` text-xs lg:text-sm absolute right-0 bottom-0 bg-slate-500 uppercase flex items-center gap-2 whitespace-nowrap text-white italic p-4 rounded shadow-lg mb-4 transition-transform transform hover:scale-105 hover:bg-blue-700 ${
            isLoaded ? "animate-slide-in-left" : "opacity-0"
          }`}
        >
          Junior FrontEnd Developer
          <FaCode />
        </button>

        <Link href="/css-animation" legacyBehavior>
          <a
            className={`absolute text-xs lg:text-sm top-0 left-0 bg-slate-500 uppercase italic whitespace-nowrap text-white p-4 flex items-center gap-2 rounded shadow-lg mb-4 transition-transform transform hover:scale-105 hover:bg-green-700 ${
              isLoaded ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            Go to CSS Animation
            <MdAnimation />
          </a>
        </Link>
      </div>

      <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Home;
