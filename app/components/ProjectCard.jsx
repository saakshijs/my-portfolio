import React from 'react';
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, githubLink }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      {/* Image section */}
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`, // Set background image
          backgroundSize: 'contain',         // Define size explicitly
          backgroundPosition: 'center',      // Set position explicitly
          backgroundRepeat: 'no-repeat',     // Prevent repeating
        }}
      >
        {/* Overlay with icons */}
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {/* Code Icon (link to GitHub repository) */}
          <Link href={githubLink} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>

      {/* Text section */}
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description || "No description provided."}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
