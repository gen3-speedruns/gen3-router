import React from "react";
import { useChoice } from "./ChoiceContext";

interface OptionProps {
  value: string;
  label: string;
  children?: React.ReactNode;
}

export const Option: React.FC<OptionProps> = ({ value, label, children }) => {
  const { chosen, onChoose } = useChoice();

  if (!chosen) {
    return (
      <button
        onClick={() => onChoose(value)}
        className="btn btn-sm btn-outline"
      >
        {label}
      </button>
    );
  }

  if (chosen !== value) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">{label}</span>
      </div>
      {children && <div className="space-y-3">{children}</div>}
    </div>
  );
};
