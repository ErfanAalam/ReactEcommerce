// import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

const About = () => {
  return (
    <>
      <div>
        <h3 className="about">
          ClothHub: Your Ultimate Destination for Trendy and Affordable Fashion
        </h3>
        <p className="para">
          Welcome to ClothHub, where style meets affordability! Discover an
          extensive collection of clothing for every occasion—whether you’re
          looking for casual wear, work essentials, or statement pieces for a
          night out, ClothHub has you covered. Our curated selection combines
          quality and the latest trends, making it easy to find styles that fit
          your personality and budget. With user-friendly browsing, detailed
          sizing guides, and a seamless checkout experience, shopping for your
          favorite looks has never been easier. Join ClothHub and elevate your
          wardrobe with pieces that make you look and feel great!
        </p>
      </div>

      <div className="social">
        <a
          href="https://www.instagram.com/clothhub03/"
          className="anchor">
          <h2>Instagram</h2>
          <InstagramIcon fontSize="large" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61568254901212&mibextid=LQQJ4d"
          className="anchor">
          <h2>FaceBook</h2>
          <FacebookIcon fontSize="large" />
        </a>
        <a
          href="mailto:clothinghub67@gmail.com"
          target="_blank"
          className="anchor">
          <h2>Email</h2>
          <EmailIcon fontSize="large" />
        </a>
      </div>
    </>
  );
};
export default About;
