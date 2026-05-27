"use client";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "large";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  href?: string;
  external?: boolean;
  className?: string;
}

const variantClasses = {
  primary: "bg-gold text-navy hover:bg-[#E0B215]",
  secondary: "bg-navy text-white hover:bg-[#263d85]",
  outline: "bg-transparent border border-navy text-navy hover:bg-cream",
};

const sizeClasses = {
  default: "px-8 py-3 text-base",
  large: "px-12 py-4 text-lg",
};

export default function Button({ variant = "primary", size = "default", children, onClick, disabled, type = "button", href, external, className = "" }: ButtonProps) {
  const base = `inline-flex items-center justify-center font-body font-semibold rounded-btn min-h-[48px] transition-all duration-200 hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
