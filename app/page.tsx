import type { Metadata } from "next";
import { getFrameMetadata } from "./utils/framesUtils";
import React from "react";
import Link from "next/link";

const frameMetadata = getFrameMetadata({
  buttons: ["Begin quiz"],
  image: "https://quiz-frame.vercel.app/titleImage.png", // must be absolute path
  post_url: "https://quiz-frame.vercel.app/api/question?n=1",
});

export const metadata: Metadata = {
  title: "quiz frame",
  description: "by larzalot.eth",
  openGraph: {
    title: "quiz frame",
    description: "by larzalot.eth",
    images: ["https://quiz-frame.vercel.app/titleImage.png"],
  },
  other: {
    ...frameMetadata,
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz Game!</h1>
      <p className="text-lg mb-4">Test your knowledge and have fun!</p>
      <Link
        href="/quiz/format"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Start Quiz
      </Link>
    </div>
  );
}
