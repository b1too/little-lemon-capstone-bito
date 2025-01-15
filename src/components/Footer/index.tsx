import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { PiGithubLogoFill, PiGithubLogoDuotone } from "react-icons/pi";

const Footer = () => {
  const [isHovering, setIsHovering] = useState(false);
  const gitBiTo = 'https://github.com/b1too';

  return (
    <footer className="w-full bg-zinc-200/50 py-6 text-center">
      <p className="text-lg text-zinc-600 flex items-center justify-center gap-x-2 relative">
        Prototype made with
        <FaHeart className='text-red-600 heart-pulse' />
        by <span className='font-black'>{'{'}</span>
        <span className='font-semibold'>BiTo</span>
        <span className='font-black'>{'}'}</span>
        <a
          href={gitBiTo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className='relative'>
            <PiGithubLogoFill
              className="ml-1 absolute left-0 text-zinc-900 transition-all duration-500 ease-in-out"
              style={{ opacity: isHovering ? 1 : 0, top: "50%", transform: `translateY(-50%) scale(${isHovering ? 1.5 : 1})` }}
            />
            <PiGithubLogoDuotone
              className="ml-1 absolute left-0 text-zinc-800 transition-all duration-500 ease-in-out"
              style={{ opacity: !isHovering ? 1 : 0, top: "50%", transform: `translateY(-50%) scale(${!isHovering ? 1.25 : 1})` }}
            />

          </div>
        </a>
      </p>
    </footer>
  );
};

export default Footer;