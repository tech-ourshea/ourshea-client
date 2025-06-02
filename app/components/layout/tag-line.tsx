import React from "react";

const TagLine = () => {
  const getTags = () => {
    let tags = [];
    for (let i = 0; i < 100; i++) {
      tags.push(
        <p key={i} className="mx-2 w-[210px] text-white whitespace-nowrap">
          Beyond Profits!!!
        </p>
      );
    }
    return tags;
  };

  return (
    // <div className="bg-gold-900 mt-20 mb-40 px-0 py-4 overflow-hidden font-light text-white italic">
    <div className="bg-primary-900 my-20 px-0 py-4 overflow-hidden font-light text-white italic">
      <div className="flex flex-nowrap gap-20 animate-marquee">
        {getTags()}
        {getTags() /* Duplicate for infinite loop effect */}
      </div>
    </div>
  );
};

export default TagLine;
