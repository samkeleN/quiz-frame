"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ResultPage = () => {
  const router = useRouter();
  const [score, setScore] = useState(0);

  useEffect(() => {
    const queryScore = new URLSearchParams(window.location.search).get("score");
    setScore(Number(queryScore));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <h1 className="text-3xl font-bold mb-4">Quiz Results</h1>
      <p className="text-lg mb-6">You scored {score} points!</p>
      <button
        onClick={() => router.push("/quiz/format")}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Retry Quiz
      </button>
    </div>
  );
};

export default ResultPage;
