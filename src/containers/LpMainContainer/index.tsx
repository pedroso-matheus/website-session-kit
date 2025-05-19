import React from 'react';

interface Props {
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
  height?: string;
}

/**
 * Main container for landing pages or sections, allowing dynamic background and height.
 */
const LpMainContainer = ({
  children,
  height = 'h-full',
  bgColor = '',
  className = '',
}: Props) => {
  return (
    <div className={`${height} overflow-hidden w-full ${bgColor} ${className}`}>
      {children}
    </div>
  );
};

export default LpMainContainer;
