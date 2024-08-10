"use client"; // This marks the component as a Client Component

import React from 'react';

const ResizableTextArea = () => {
  const resizeTextArea = (e) => {
    e.target.style.height = 'auto'; // Reset the height
    e.target.style.height = `${e.target.scrollHeight}px`; // Set the height based on the scrollHeight
  };

  return (
    <textarea
      className="w-[300px] resize-none overflow-hidden rounded-lg border p-3 text-sm"
      placeholder="テキストを入力してください"
      onChange={resizeTextArea}
    ></textarea>
  );
};

export default ResizableTextArea;
