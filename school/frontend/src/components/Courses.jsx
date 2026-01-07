"use client";

import { useState } from "react";

export default function Courses() {
  const courses = [
    { code: "CSC 401", name: "Organization of Programming Languages" },
    { code: "CSC 405", name: "Artificial Intelligence" },
    { code: "CSC 407", name: "Net-Centric Computing" },
    { code: "CSC 409", name: "Data Management II" },
    { code: "CSC 417", name: "Computer Graphics" },
  ];

  const [visibleCount, setVisibleCount] = useState(courses.length);

  return (
    <div className="min-h-screen p-8">
      <div className="w-full">
        <div className="relative mb-8">
          <div className="fixed top-6 left-64 z-50 w-48">
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-white border border-gray-200 rounded-full px-3 py-2 shadow-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          <div className="flex items-center justify-end">
            <div className="ml-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-yellow-300 flex items-center justify-center">
                P
              </div>
              <div className="text-sm font-medium">Name</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-linear-to-r from-[#8A49E6] to-[#B67CF2] text-white px-12 py-6 rounded-xl w-full max-w-full text-center shadow-md">
            <h2 className="font-bold text-xl md:text-3xl tracking-wider">
              YOUR COURSES
            </h2>
          </div>
        </div>

        <div className="mt-4">
          <div>
            {courses.slice(0, visibleCount).map((c, idx) => (
              <div key={c.code} className="py-8 px-6 w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-10 w-full">
                    <div className="w-40 text-base md:text-lg font-bold text-gray-800">
                      {c.code}
                    </div>
                    <div className="flex-1 text-lg md:text-xl text-gray-700">
                      {c.name}
                    </div>
                  </div>
                </div>
                {idx < visibleCount - 1 && (
                  <hr className="mt-6 border-gray-300" />
                )}
              </div>
            ))}

            <div className="py-6 text-center">
              <button
                className="text-purple-600 hover:underline"
                onClick={() => setVisibleCount(courses.length)}
              >
                See all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
