// components/TextContainer.tsx
import React from "react";

interface TextContainerProps {
  title: string;
  content: string;
}

const TextContainer: React.FC<TextContainerProps> = ({ title, content }) => {
  return (
    <div className="mt-10rounded-lg container mx-auto bg-white p-6 shadow">
      <h2 className="mb-3 text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default TextContainer;
