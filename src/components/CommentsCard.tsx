"use client";

import { FC } from "react";

interface Comment {
  author: string;
  text: string;
  date: string;
}

const comments: Comment[] = [
  {
    author: "Aarav Sharma",
    text: "The explanation for Dynamic Programming was really helpful!",
    date: "2025-07-05",
  },
  {
    author: "Diya Patel",
    text: "Could you share more examples on React patterns next time?",
    date: "2025-07-04",
  },
  {
    author: "Ishaan Singh",
    text: "Loved the interactive session on Cloud Computing!",
    date: "2025-07-03",
  },
  {
    author: "Myra Nair",
    text: "The pace was perfect, thank you!",
    date: "2025-07-02",
  },
  {
    author: "Kabir Rao",
    text: "Can we have a deep dive on Kubernetes in the next lecture?",
    date: "2025-07-01",
  },
];

export const CommentsCard: FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <div className="space-y-3 max-h-[400px] overflow-y-auto">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="border rounded p-3 hover:bg-gray-50 transition"
          >
            <p className="text-gray-800">{comment.text}</p>
            <div className="text-sm text-gray-600 mt-1 flex justify-between">
              <span>By: {comment.author}</span>
              <span>{comment.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
