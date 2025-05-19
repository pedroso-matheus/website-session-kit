import React from 'react';
import LpContentContainer from '../../containers/LpContentContainer';
import Line from '../../ui/Line';

interface Props {
  logo?: React.ReactNode | string;
  type?: string;
  title: string;
  descriptionBefore?: string;
  descriptionAfter?: string;
  extra?: string;

  bgGradient?: string;
  textColor?: string;
  paddingSmX?: string;
  grafismColor?: string;
  grafismWidth?: number;
  lineColor?: string;
}

const HeaderSection = ({
  logo,
  type,
  title,
  descriptionBefore,
  descriptionAfter,
  extra,
  bgGradient = 'bg-gradient-to-b from-[#00172f] to-black',
  textColor = 'text-white',
  paddingSmX = 'sm:px-[25%]',
  grafismColor = '#e16a3d',
  grafismWidth = 150,
  lineColor = '#e16a3d',
}: Props) => {
  const renderLogo = () => {
    if (!logo) return null;
    return typeof logo === 'string' ? (
      <img src={logo} alt="logo" className="mx-auto mb-4 max-w-[200px]" />
    ) : (
      <div className="mb-4">{logo}</div>
    );
  };

  return (
    <header>
      <LpContentContainer
        className={`text-center ${textColor}`}
        paddingSmX={paddingSmX}
        grafismColor={grafismColor}
        grafismWidth={grafismWidth}
        containerBgColor={bgGradient}
      >
        {renderLogo()}

        <div className="space-y-3">
          {type && <p className="text-sm font-light mt-4 uppercase tracking-wide">{type}</p>}
          {descriptionBefore && <p className="text-md uppercase mt-2">{descriptionBefore}</p>}
          <h1 className="text-4xl uppercase mt-2">{title}</h1>
          {descriptionAfter && <p className="text-md uppercase mt-2">{descriptionAfter}</p>}
        </div>

        <Line color={lineColor} />

        {extra && (
          <div className="space-y-1">
            <p className="text-sm font-light uppercase">{extra}</p>
          </div>
        )}
      </LpContentContainer>
    </header>
  );
};

export default HeaderSection;
