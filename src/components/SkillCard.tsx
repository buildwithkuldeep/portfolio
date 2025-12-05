"use client";

import Reveal from "./Reveal";

export default function SkillCard({ skill }: { skill: string }) {
  return (
    <Reveal>
      <div className="
        bg-white/10 backdrop-blur-xl 
        border border-white/10 
        rounded-xl 
        p-4 text-center 
        text-white
        hover:bg-white/15
        transition
      ">
        {skill}
      </div>
    </Reveal>
  );
}
