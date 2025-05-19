import React from 'react';
import LpContentContainer from '../../containers/LpContentContainer';
import Line from '../../ui/Line';

interface Props {
  text: string;
  textColor?: string;
  bgColor?: string;
  className?: string;

  lineColor?: string;
  grafismColor?: string;

  lpHeight?: string;
  lpClassName?: string;
}

const TextHighLightSection = ({
  text,
  textColor = 'text-[#daebfd]',
  bgColor = 'bg-gradient-to-r from-[#00172f] to-black',
  className = '',
  lineColor = '#e16a3d',
  grafismColor = '#e16a3d',
  lpHeight,
  lpClassName,
}: Props) => {
  return (
    <LpContentContainer
      grafismColor={grafismColor}
      className={`min-h-[200px] sm:min-h-[300px] ${className}`}
      containerBgColor={bgColor}
      containerHeight={lpHeight}
      containerClassName={lpClassName}
    >
      <Line width="w-[10%]" height="h-[1px]" color={lineColor} />
      <p className={`font-light text-center text-2xl sm:text-3xl uppercase ${textColor}`}>
        {text}
      </p>
    </LpContentContainer>
  );
};

export default TextHighLightSection;
