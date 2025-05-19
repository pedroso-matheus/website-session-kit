import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

interface Props {
  text: string;
  icon?: React.ReactNode;
  iconSize?: string;
  iconColor?: string;
  textSize?: string;
  textColor?: string;
  responsive?: boolean;
  className?: string;
}

const defaultColor = "text-[#e16a3d]";

const IconText = ({
  text,
  icon,
  iconColor = defaultColor,
  iconSize = 'text-2xl',
  textColor = '',
  textSize = 'text-base',
  responsive = false,
  className = '',
}: Props) => {
  return (
    <div
      className={`flex ${
        responsive ? 'flex-col sm:flex-row sm:items-center py-4 sm:p-3 sm:py-3' : 'flex-row items-center px-3 py-2'
      } ${className}`}
    >
      <div
        className={`flex ${
          responsive ? 'justify-center sm:justify-start' : 'justify-start'
        } items-center w-full sm:w-auto`}
      >
        <span className={`flex-shrink-0 mr-3 ${iconColor} ${iconSize}`}>
          {icon || <FaRegCheckCircle />}
        </span>
      </div>
      <span className={`${responsive ? 'text-center sm:text-start' : 'text-start'} break-normal ${textSize} ${textColor}`}>
        {text}
      </span>
    </div>
  );
};

export default IconText;
