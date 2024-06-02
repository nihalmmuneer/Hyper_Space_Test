import Link from "next/link";
import { FaHome } from "react-icons/fa";
const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center">
      <Link href="/" legacyBehavior>
        <a className="absolute top-4 right-4 text-white text-3xl">
          <FaHome />
        </a>
      </Link>
      <div className="firework"></div>
      <h1 className="text-2xl font-bold mt-4">
        Application For Junior FrontEnd Developer Is Successfully Submitted.
      </h1>
      <style jsx>{`
        .firework {
          width: 100px;
          height: 100px;
          background-color: red;
          animation: explode 1s infinite;
        }
        @keyframes explode {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Success;
