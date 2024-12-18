import React from "react";
import img from "../assets/medical-stethoscope-white.jpg";
import "./homepage.css";

export default function HomePage() {
  return (
    <div
      className="h-screen bg-[#DBDEE3] body"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Header */}
      <div
        className="header flex justify-end gap-16 py-4 bg-transparent"
        style={{ right: "15%", position: "relative" }}
      >
        <a href="/" className="text-xl font-bold">
          Home
        </a>
        <a href="/" className="text-xl font-bold ">
          Login
        </a>
        <a href="/" className="text-xl font-bold">
          AI help
        </a>
      </div>

      {/* Main Content */}
      <div className="mainBody w-full justify-items-end">
        <div className="h-full mx-20 justify-items-center mainBodyIn">
          <div className="h-[50%] flex items-end justify-center mainBodyTextContainer">
            <p className="text-2xl text-right mainBodyText">
              USE AI FOR <br />
              <span className="text-3xl font-bold"> MORE DEATILED </span>
              AND <br /> <span className="text-3xl font-bold">ACCURATE</span>
              <br /> MEDICAL ASSISTANCE
            </p>
          </div>

          <div className="flex items-center justify-center flex-col w-full h-[50%] gap-2">
            <a
              href="/"
              className="text-xl bg-[#1c2932] px-12 py-4 text-white shadow-sm shadow-black font-semibold"
              style={{ borderRadius: 10 }}
            >
              New Patient
            </a>
            <a href="/" className="text-lg">
              Existing Patient?
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-end footer">
        <div className="flex gap-8 footer-btn-holder">
          <p style={{ borderRadius: 8 }} className="footer-btns ml-8">
            How to use?
          </p>
          <p style={{ borderRadius: 8 }} className="footer-btns">
            Learn more
          </p>
        </div>

        <p>
          <div>
            <p className="text-2xl font-semibold footer-text">
              <p
                className="text-5xl font-bold footer-text-main"
                style={{ color: "#1c2932" }}
              >
                MEDEASY
              </p>
              AI HEALTH ASSISTANT
            </p>
          </div>
        </p>
      </div>
    </div>
  );
}
