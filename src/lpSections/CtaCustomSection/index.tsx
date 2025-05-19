import React from 'react';
import LpContentContainer from '../../containers/LpContentContainer';
import Line from '../../ui/Line';
import FeaturedButton from '../../ui/FeaturedButton';

interface Props {
  children: React.ReactNode;
  highlight: string;
  buttonLabel: string;
  checkoutLink: string;
  afterButton?: string;
  className?: string;

  // Customização de botão
  buttonBgColor?: string;
  buttonTextColor?: string;
  buttonBorderColor?: string;

  // Customização visual
  lineColor?: string;
  grafismColor?: string;

  // Props para LpMainContainer via LpContentContainer
  lpBgColor?: string;
  lpHeight?: string;
  lpClassName?: string;
}

const CtaCustomSection = ({
  children,
  highlight,
  buttonLabel,
  checkoutLink,
  afterButton,
  className = '',
  buttonBgColor,
  buttonTextColor,
  buttonBorderColor,
  lineColor = '#e16a3d',
  grafismColor = '#e16a3d',
  lpBgColor = 'bg-gradient-to-b from-[#00172f] to-black',
  lpHeight,
  lpClassName,
}: Props) => {
  return (
    <LpContentContainer
      grafismColor={grafismColor}
      className={`text-center text-[#daebfd] ${className}`}
      containerBgColor={lpBgColor}
      containerHeight={lpHeight}
      containerClassName={lpClassName}
    >
      <Line width="w-[10%]" height="h-[1px]" color={lineColor} />
      <h2 className="font-light text-center text-2xl sm:text-3xl uppercase">{highlight}</h2>

      {children}

      <FeaturedButton
        label={buttonLabel}
        href={checkoutLink}
        className="text-lg"
        padding="px-5 py-3"
        bgColor={buttonBgColor}
        textColor={buttonTextColor}
        borderColor={buttonBorderColor}
      />

      {afterButton && <p className="text-sm font-light">({afterButton})</p>}
    </LpContentContainer>
  );
};

export default CtaCustomSection;
