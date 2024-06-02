import Link from "next/link";
import { FaHome } from "react-icons/fa";

const CreativePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="animation-container">
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
      <Link href="/" legacyBehavior>
        <a className="mt-4 bg-sky-800 flex font-semibold items-center shadow-lg cursor-pointer uppercase text-white px-6 py-3 rounded-lg">
          <FaHome className="mr-2" /> Home
        </a>
      </Link>

      <style jsx>{`
        .animation-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80vh;
        }

        .cube {
          position: relative;
          width: 200px;
          height: 200px;
          transform-style: preserve-3d;
          animation: rotate 6s linear infinite;
        }

        .face {
          position: absolute;
          width: 200px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          font-weight: bold;
          background-image: linear-gradient(45deg, #1a081a, #915005, #df7a16);
          border: 1px solid #ccc;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .front {
          transform: translateZ(100px);
        }

        .back {
          transform: translateZ(-100px) rotateY(180deg);
        }

        .left {
          transform: rotateY(-90deg) translateX(-100px);
        }

        .right {
          transform: rotateY(90deg) translateX(100px);
        }

        .top {
          transform: rotateX(90deg) translateY(-100px);
        }

        .bottom {
          transform: rotateX(-90deg) translateY(100px);
        }

        @keyframes rotate {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CreativePage;
