"use client";

import Reveal from "../../components/Reveal";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-28 px-6">

      <Reveal>
        <h1 className="text-4xl font-extrabold text-center text-white mb-12">
          Contact Me
        </h1>
      </Reveal>

      <Reveal>
        <form className="
          bg-white/10 backdrop-blur-xl
          border border-white/15 
          p-8 rounded-2xl 
          flex flex-col gap-6 text-white
        ">

          <input
            className="bg-black/20 p-3 rounded-xl border border-white/20"
            placeholder="Your Name"
          />

          <input
            className="bg-black/20 p-3 rounded-xl border border-white/20"
            placeholder="Your Email"
          />

          <textarea
            className="bg-black/20 p-3 rounded-xl border border-white/20"
            placeholder="Message"
            rows={4}
          />

          <button className="
            px-6 py-3 bg-blue-600 
            rounded-xl 
            text-white 
            hover:bg-blue-700 
            shadow-[0_0_20px_rgba(37,99,235,0.5)]
          ">
            Send Message
          </button>
        </form>
      </Reveal>

    </div>
  );
}
