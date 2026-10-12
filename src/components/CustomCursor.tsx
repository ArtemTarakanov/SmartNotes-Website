import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] w-4 h-4 rounded-full
        bg-[#AAD9D1] pointer-events-none shadow-[0_0_20px_#048C80]"
      style={{
        transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
      }}
    />
  );
}
