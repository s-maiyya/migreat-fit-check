"use client";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = "", selected, onClick }: CardProps) {
  const base = `bg-white rounded-card shadow-card p-6 sm:p-8 ${selected ? "border-2 border-gold shadow-[0_4px_20px_rgba(245,197,24,0.2)]" : "border border-transparent"} ${onClick ? "cursor-pointer hover:bg-cream transition-colors duration-150" : ""} ${className}`;

  return (
    <div className={base} onClick={onClick}>
      {children}
    </div>
  );
}
