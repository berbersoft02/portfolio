"use client"
import React, { useEffect } from 'react';

export default function OrbitingSkills() {
  useEffect(() => {
    console.log("CRITICAL DEBUG: OrbitingSkills is Mounting!");
    // alert("OrbitingSkills is Mounting!"); // Temporarily disabled as it might be annoying
  }, []);

  return (
    <div className="w-[300px] h-[300px] bg-yellow-400 text-black flex items-center justify-center font-bold text-2xl border-8 border-red-500 rounded-2xl shadow-2xl animate-bounce">
      HELLO WORLD <br/> SKILLS HERE
    </div>
  );
}
