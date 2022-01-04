import React, { memo } from "react";

const ArrowLeftIcon = memo(() => {
  return (
    <div>
      <svg viewBox="0 0 73 18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 9H72M1 9L9.1697 1M1 9L9.1697 17"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
});

ArrowLeftIcon.displayName = "ArrowLeftIcon";

export default ArrowLeftIcon;
