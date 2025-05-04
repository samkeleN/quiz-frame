"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const QuestionPage = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [timer, setTimer] = useState(5);
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

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          handleAnswer(0, "");
          return 5;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [currentQuestionIndex]);

  const handleAnswer = (value: number, optionValue: string) => {
    setScore(score + value);

    if (value === 1) {
      setSelectedOption("correct");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 500);
    } else {
      setSelectedOption(optionValue);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setTimer(5);
      } else {
        router.push(`/quiz/result?score=${score + value}`);
      }
    }, 1000);
  };

  const question = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center py-2">
          Correct Answer!
        </div>
      )}
      {question && (
        <>
          <h1 className="text-2xl font-bold mb-4 text-black">
            {question.title}
          </h1>
          <div className="flex flex-col space-y-2">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(Number(option.value), option.value)}
                className={`px-4 py-2 rounded-lg border bg-white text-black hover:bg-blue-500 hover:text-white ${
                  selectedOption === option.value
                    ? "bg-red-500 text-white"
                    : selectedOption === "correct" &&
                      option.value === question.correctOption
                    ? "bg-green-500 text-white"
                    : ""
                }`}
              >
                {option.buttonText}
              </button>
            ))}
          </div>
          <div className="mt-4 text-lg text-black">
            {/* Updated the countdown timer UI to make it more engaging and intimidating for the user. */}
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold text-2xl animate-pulse">
                {timer}
              </span>
              <span className="text-black">seconds left</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionPage;
