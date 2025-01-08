"use client"; // Ensure client-side interactivity in Next.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ContactFooter = () => {
  return (
    <footer className="bg-gray-900 text-white sticky bottom-0 w-full py-4 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <p className="text-sm mb-6">
          Feel free to reach out to me through any of the following platforms:
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <Link href="https://www.facebook.com/doddamane.hudugi.26.10?mibextid=ZbWKwL" target="_blank">
            <div className="flex items-center justify-center bg-[#3b5998] text-white p-3 rounded-full hover:bg-[#2d4373] transition-all">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </div>
          </Link>
          <Link href="https://www.instagram.com/__s.j.shetty__?igsh=anZuNDIwbXY1MXh1" target="_blank">
            <div className="flex items-center justify-center bg-[#C13584] text-white p-3 rounded-full hover:bg-[#9b2d68] transition-all">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/saakshi-j-shetty-71474a1bb" target="_blank">
            <div className="flex items-center justify-center bg-[#0077b5] text-white p-3 rounded-full hover:bg-[#004d80] transition-all">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </div>
          </Link>
          <Link href="https://wa.me/+919606469357" target="_blank">
            <div className="flex items-center justify-center bg-[#25D366] text-white p-3 rounded-full hover:bg-[#128C7E] transition-all">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </div>
          </Link>
          <Link href="https://www.youtube.com/@_doddamane_hudugi_26.10_" target="_blank">
            <div className="flex items-center justify-center bg-[#FF0000] text-white p-3 rounded-full hover:bg-[#cc0000] transition-all">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </div>
          </Link>
          <Link href="https://github.com/SaakshiJShetty2610" target="_blank">
            <div className="flex items-center justify-center bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-all">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </div>
            </Link>
            <Link href="https://github.com/saakshijs" target="_blank">
            <div className="flex items-center justify-center bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-all">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </div>
          </Link>
          <Link href="mailto:saakshishtty@gmail.com">
            <div className="flex items-center justify-center bg-[#0077B5] text-white p-3 rounded-full hover:bg-[#005F8D] transition-all">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
