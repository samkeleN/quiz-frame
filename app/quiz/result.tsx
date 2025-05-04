"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Added a type definition for the results array to ensure the 'correct' property is recognized.
interface Result {
  correct: boolean;
}

const ResultPage = () => {
  const router = useRouter();
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const queryScore = new URLSearchParams(window.location.search).get("score");
    const queryResults = new URLSearchParams(window.location.search).get(
      "results"
    );

    setScore(Number(queryScore));
    setResults(queryResults ? JSON.parse(queryResults) : []);
  }, []);


  if (score >= 10) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
        <h1 className="text-3xl font-bold mb-4">Congratulations!</h1>
        <p className="text-lg mb-6">You scored 10 out of 10!</p>
        <p className="text-4xl mb-6">🎉</p>

        <button
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Home
      </button>
      <button
        onClick={() => router.push("/choose-format")}
        className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
      >
        Choose Your Quiz Format
      </button>
      
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <h1 className="text-3xl font-bold mb-4">Quiz Results</h1>
      <p className="text-lg mb-6">You scored {score} out of 10!</p>
      {score > 5 ? (
        <p className="text-4xl mb-6">😊</p>
      ) : score <= 5 ? (
        <p className="text-4xl mb-6">😢</p>
      ) : null}

      <button
        onClick={() => router.push("/quiz/format")}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Retry Quiz
      </button>
      <button
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Home
      </button>
      <button
        onClick={() => router.push("/choose-format")}
        className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
      >
        Choose Your Quiz Format
      </button>
    </div>
  );
};

export default ResultPage;
