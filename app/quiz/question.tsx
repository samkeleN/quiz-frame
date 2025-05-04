"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const QuestionPage = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  interface Question {
    title: string;
    options: { buttonText: string; value: string }[];
    correctOption: string;
  }

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const format = new URLSearchParams(window.location.search).get("format");
      const response = await fetch(`/api/question?format=${format}`);
      const data = await response.json();
      setQuestions(data);
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (value: number) => {
    setScore(score + value);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      router.push(`/quiz/result?score=${score + value}`);
    }
  };

  const question = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      {question && (
        <>
          <h1 className="text-2xl font-bold mb-4 text-black">
            {question.title}
          </h1>
          <div className="flex flex-col space-y-2">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(Number(option.value))}
                className="px-4 py-2 rounded-lg border bg-white text-black hover:bg-blue-500 hover:text-white"
              >
                {option.buttonText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionPage;
