"use client";

import React from "react";
import { useRouter } from "next/navigation";

const QuizFormatPage = () => {
  const router = useRouter();

  const handleFormatSelection = (format: string) => {
    // Redirect to the first question with the selected format
    router.push(`/quiz/question?format=${format}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <h1 className="text-3xl font-bold mb-6">Choose Your Quiz Format</h1>
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => handleFormatSelection("multiple-choice")}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Multiple Choice
        </button>
        <button
          onClick={() => handleFormatSelection("true-false")}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          True/False
        </button>
        <button
          onClick={() => handleFormatSelection("image-based")}
          className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          Image-Based
        </button>
      </div>
    </div>
  );
};

export default QuizFormatPage;
