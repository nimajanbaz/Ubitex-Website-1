import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

export default function CopyBtnDemo({ item }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText({ item }).then(
      () => {
        setCopied(true);
        // changing back to default state after 2 seconds.
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (err) => {
        console.log("failed to copy", err.mesage);
      }
    );
  };

  const btnStyle = copied ? "bg-gray-500 text-white" : "";

  return (
    <div className="text-center">
      <button onClick={copyToClipboard} className={btnStyle + " text-xs"}>
        {copied ? "کپی شد" : <FaCopy />}
      </button>
    </div>
  );
}
