import React from "react";

export function LineReveal({
  as: Component = "h2",
  lines,
  className = "h2",
  delayStep = 0.08,
}: {
  as?: React.ElementType;
  lines: string[];
  className?: string;
  delayStep?: number;
}) {
  return (
    <Component className={`${className} lines`} data-r="l" suppressHydrationWarning>
      {lines.map((line, i) => (
        <span className="ln" key={i}>
          <span style={{ "--d": `${(i * delayStep).toFixed(2)}s` } as React.CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </Component>
  );
}

export default LineReveal;
