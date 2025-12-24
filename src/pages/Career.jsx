import React, { useState } from "react";
import { MapPin, Clock, Briefcase } from "lucide-react";

import head from "/images/career/head.png";
import frame from "/images/career/frame.jpg";

export default function Career() {
  const [activeTab, setActiveTab] = useState("Full Time");

  const jobsData = [
    // 5 Full Time
    ...Array.from({ length: 5 }, (_, i) => ({
      id: `ft-${i}`,
      title: "Full Stack Developer",
      location: "Bhopal, Madhya Pradesh",
      type: "Full Time",
      experience: "2 – 3 year",
    })),

    // 5 Internship
    ...Array.from({ length: 5 }, (_, i) => ({
      id: `in-${i}`,
      title: "Full Stack Developer",
      location: "Bhopal, Madhya Pradesh",
      type: "Internship",
      experience: "2 – 3 year",
    })),
  ];

  return (
    <main className="w-full">

      {/* ================= HERO ================= */}
      <section className="w-full py-6 sm:py-8">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="relative rounded-2xl overflow-hidden">

            <img
              src={head}
              alt="Careers at Swaayatt Robots"
              className="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[480px] xl:h-[560px] object-cover brightness-110 contrast-105"
            />

            <div className="absolute inset-0 bg-[#6b4e2e] opacity-20 mix-blend-overlay" />

            <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-3 sm:py-5 md:py-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 sm:px-10 text-white gap-3 sm:gap-4">

                <div>
                  <p className="font-rethink text-[20px] tracking-[-0.02em] opacity-90 mb-1">
                    Careers @ Swaayatt Robots
                  </p>

                  <p className="
  font-rethink
  text-[32px]
  sm:text-[40px]
  md:text-[50px]
  lg:text-[60px]
  tracking-[-0.02em]
  max-w-[600px]
  opacity-90
">
  Join the Journey
</p>


                  <p className="font-rethink text-[20px] sm:text-[24px] md:text-[30px] lg:text-[38px] tracking-[-0.02em] max-w-[517px] opacity-90">
                    Build Something Great With Us
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-md px-5 py-3 rounded-xl text-sm sm:text-base font-medium border border-white/10 hover:bg-white/30 transition">
                  Machine Learning Engineer
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-10 lg:px-16 pb-12 sm:pb-20">
  <div className="relative rounded-2xl overflow-hidden">

    {/* BACKGROUND IMAGE */}
    <img
      src={frame}
      alt="Innovation That Matters"
      className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover"
    />

    {/* OVERLAYS */}
    <div className="absolute inset-0 bg-[#6b4e2e] opacity-20 mix-blend-overlay" />
    <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/60 to-transparent" />

    {/* CONTENT WRAPPER */}
    <div className="absolute inset-0 flex items-center justify-end">
      <div
        className="
          w-full
          max-w-[520px]
          px-4
          sm:px-8
          lg:px-12
          text-white
          text-right
        "
      >
        {/* TITLE */}
        <h2 className="
          font-rethink
          font-bold
          tracking-[-0.02em]
          mb-4

          text-[22px]
          sm:text-[28px]
          md:text-[32px]
          lg:text-[38px]
        ">
          Innovation That Matters
        </h2>

        {/* TEXT */}
        <p className="
          font-rethink
          tracking-[-0.02em]
          leading-[150%]

          text-[13px]
          sm:text-[16px]
          md:text-[18px]
        ">
          <span className="block mb-3">
            At Swaayatt Robots, we have been at the forefront of developing India's
            first Autonomous Driving technology since 2016.
          </span>

          <span className="block mb-3">
            Join our innovative team and embark on a journey to work on
            cutting-edge research in the field of autonomous driving and
            artificial intelligence.
          </span>

          <span className="block mb-3">
            At Swaayatt, you'll have access to continuous learning opportunities
            and the latest advancements in tools and technologies related to
            autonomous driving and AI.
          </span>

          <span className="block">
            We take pride in being recognized as the first company in the world to
            enable autonomous driving in some of the most challenging and
            stochastic environments, such as India.
          </span>
        </p>
      </div>
    </div>

  </div>
</section>


      {/* ================= WE ARE HIRING ================= */}
      <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-20">

        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-rethink font-bold text-[24px] sm:text-[30px] md:text-[34px] lg:text-[38px] tracking-[-0.02em] text-[#1A212F] mb-4">
            We Are Hiring | Join Us
          </h2>

          <p className="font-rethink text-[16px] sm:text-[18px] md:text-[20px] tracking-[-0.02em] text-[#5D5D5D] max-w-[1081px] mx-auto mb-6">
            Swaayatt Robots is looking for passionate minds ready to shape the future of autonomous driving and AI. Join a team pushing the limits of innovation, where every idea drives progress and every project breaks new ground. If you’re eager to make real impact in cutting-edge technology, this is where your journey begins.
          </p>

          <p className="font-rethink text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] tracking-[-0.02em] text-[#1A212F]">
            Check out current openings and send your resume to{" "}
            <a href="mailto:career@swaayatt.com" className="text-blue-600 underline">
              career@swaayatt.com
            </a>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="flex border rounded-full p-1">
            {["Full Time", "Internship"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-6">
          {jobsData
            .filter((job) => job.type === activeTab)
            .map((job) => (
              <div
                key={job.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-gray-200 rounded-xl px-6 py-5"
              >
                <div>
                  <h3 className="text-lg font-medium text-[#1A212F]">
                    {job.title}
                    <span className="ml-3 text-blue-600 text-sm cursor-pointer inline-flex items-center gap-1">
                      View Job Description <span className="text-xs">↗</span>
                    </span>
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-6 text-sm text-gray-500 mt-2">
                    <span className="flex items-center gap-2">
                      <MapPin size={16} /> {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} /> {job.type}
                    </span>
                    <span className="flex items-center gap-2">
                      <Briefcase size={16} /> {job.experience}
                    </span>
                  </div>
                </div>

                <button className="w-full sm:w-auto bg-blue-50 text-blue-600 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
                  Apply to this role
                </button>
              </div>
            ))}
        </div>

      </section>

    </main>
  );
}
