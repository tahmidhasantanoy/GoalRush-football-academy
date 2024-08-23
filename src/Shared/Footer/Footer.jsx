import React from "react";

import logo from "../../../public/icons/logo.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content rounded-lg">
      <div>
        <img className="w-32 h-24" src={logo} alt="" />
        <p>
          GoalRush Football Institute.
          <br />
          Book your class now.
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <p className="link link-hover"> Provide Instructor</p>
        <p className="link link-hover">Football Ground</p>
        <p className="link link-hover">Football kit</p>
      </div>

      <div>
        <span className="footer-title">Legal</span>
        <p className="link link-hover">Terms of use</p>
        <p className="link link-hover">Privacy policy</p>
        <p className="link link-hover">Cookie policy</p>
      </div>
      <div>
        <span className="footer-title">Contact</span>
        <p className="">Bangabandhu road,Naogaon-sadar,Naogaon-6500</p>
        <p className="">Phone : +8801799624162</p>
        <p className="">Email : tahmid.hasan.tanoy@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
