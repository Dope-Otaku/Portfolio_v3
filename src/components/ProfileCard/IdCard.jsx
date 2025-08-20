import React, { useState, useEffect } from "react";

function IDCard() {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Current position of the card
  const [isDragging, setIsDragging] = useState(false); // Whether the card is being dragged
  const [originalPosition, setOriginalPosition] = useState({ x: 0, y: 0 }); // Original position of the card

  // Track mouse movement during dragging
  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  // Start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOriginalPosition({
      x: e.target.offsetLeft + e.target.offsetWidth / 2,
      y: e.target.offsetTop + e.target.offsetHeight / 2,
    });
  };

  // Stop dragging and return to original position
  const handleMouseUp = () => {
    setIsDragging(false);
    setPosition(originalPosition); // Smoothly return to original position
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className="relative"
      style={{
        position: "absolute",
        left: position.x - 75, // Center the card at the mouse position
        top: position.y - 50,
        transition: isDragging ? "none" : "transform 0.5s ease", // Smooth return when not dragging
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Connection String */}
      <div
        className="absolute"
        style={{
          width: "2px",
          height: `${Math.sqrt(
            Math.pow(position.x - originalPosition.x, 2) +
              Math.pow(position.y - originalPosition.y, 2)
          )}px`,
          backgroundColor: "green",
          transformOrigin: "top",
          transform: `rotate(${Math.atan2(
            position.y - originalPosition.y,
            position.x - originalPosition.x
          )}rad)`,
          transition: "height 0.2s ease",
        }}
      ></div>

      {/* ID Card Content */}
      <div className="id-card bg-black p-4 rounded-lg shadow-lg flex flex-col items-center border border-green-500">
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/150" // Replace with actual image URL
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-green-500 mb-4"
        />
        {/* Name */}
        <h2 className="text-lg font-bold text-green-500 font-mono">John Doe</h2>
        {/* Details */}
        <p className="text-sm text-green-500 font-mono">Software Engineer</p>
        <p className="text-sm text-green-500 font-mono">ID: 12345</p>
      </div>
    </div>
  );
}

export default IDCard;