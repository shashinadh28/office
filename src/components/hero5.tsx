"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'], weight: ['700'] });

export default function Hero5() { // Renamed from WorldMapDemo
  return (
    <div className=" py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className={`${lexend.className} font-bold text-xl md:text-4xl`} style={{ color: '#14488D' }}>
          Connecting Global Businesses To India’s Educated & Motivated Talent
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-3xl mx-auto py-4">
          Leverage India's vast pool of skilled professionals to scale your operations, innovate faster, and achieve your business goals with cost-effective, high-quality remote teams.
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <WorldMap
          dots={[
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: 8.5241, lng: 76.9366 },   // Thiruvananthapuram
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 8.5241, lng: 76.9366 },   // Thiruvananthapuram
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 8.5241, lng: 76.9366 },   // Thiruvananthapuram
            },
            {
              start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
              end: { lat: 8.5241, lng: 76.9366 },   // Thiruvananthapuram
            },
            {
              start: { lat: -33.8688, lng: 151.2093 }, // Sydney
              end: { lat: 8.5241, lng: 76.9366 },   // Thiruvananthapuram
            }
          ]}
        />
      </div>
    </div>
  );
}