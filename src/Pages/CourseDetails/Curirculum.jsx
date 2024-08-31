import React from "react";
import { FaAward } from "react-icons/fa";

const Curriculum = () => (
  <div className="bg-gray-100 py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        Course Curriculum
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
          <FaAward className="text-green-400 mt-1.5" />
          <div>
            <h3 className="text-xl font-semibold text-green-400">
              Foundations First
            </h3>
            <p className="text-gray-400">
              Learn the basics of football, including rules, positions, and
              field layouts.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
          <FaAward className="text-green-400 mt-1.5" />
          <div>
            <h3 className="text-xl font-semibold text-green-400">
              Skills Development
            </h3>
            <p className="text-gray-400">
              Master key football skills such as dribbling, passing, shooting,
              and defending.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
          <FaAward className="text-green-400 mt-1.5" />
          <div>
            <h3 className="text-xl font-semibold text-green-400">
              Tactical Awareness
            </h3>
            <p className="text-gray-400">
              Understand football tactics, formations, and strategies used by
              top teams.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
          <FaAward className="text-green-400 mt-1.5" />
          <div>
            <h3 className="text-xl font-semibold text-green-400">
              Physical Fitness
            </h3>
            <p className="text-gray-400">
              Improve your fitness with tailored exercises for strength, speed,
              and endurance.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
          <FaAward className="text-green-400 mt-1.5" />
          <div>
            <h3 className="text-xl font-semibold text-green-400">
              Mental Preparation
            </h3>
            <p className="text-gray-400">
              Develop mental resilience, focus, and the psychology of winning on
              the field.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
          <FaAward className="text-green-400 mt-1.5" />
          <div>
            <h3 className="text-xl font-semibold text-green-400">Team Play</h3>
            <p className="text-gray-400">
              Learn the importance of teamwork, communication, and leadership on
              the pitch.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Curriculum;
