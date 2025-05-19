import React from 'react';
import LpMainContainer from '../../containers/LpMainContainer';
import Line from '../../ui/Line';

interface Props {
  children: React.ReactNode;
  title?: string;

  // Padding e espaçamento
  paddingY?: string;
  paddingX?: string;
  paddingSmX?: string;
  spacingY?: string;

  // Alinhamento
  alignment?: 'center' | 'left' | 'right';

  className?: string;

  // Props do LpMainContainer
  containerBgColor?: string;
  containerHeight?: string;
  containerClassName?: string;

  // Line (barra sob o título)
  showLine?: boolean;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  lineMargins?: string;

  // Grafismo
  showGrafism?: boolean;
  grafismColor?: string;
  grafismWidth?: number;
  customGrafism?: React.ReactNode | string;
}

const DEFAULT_LINE_COLOR = 'bg-[#e16a3d]';
const DEFAULT_GRAFISM_COLOR = '#222222';

const LpContentContainer = ({
  children,
  title,

  paddingY = 'py-[3em]',
  paddingX = 'px-4',
  paddingSmX = 'md:px-[15%] sm:px-[10%]',
  spacingY = 'space-y-5',

  alignment = 'center',
  className = '',

  containerBgColor = '',
  containerHeight = 'h-full',
  containerClassName = '',

  showLine = true,
  lineColor = DEFAULT_LINE_COLOR,
  lineWidth = 'sm:w-[5%] w-[15%]',
  lineHeight = 'h-[2px]',
  lineMargins = 'mt-3 mb-4',

  showGrafism = true,
  grafismColor = DEFAULT_GRAFISM_COLOR,
  grafismWidth = 150,
  customGrafism,
}: Props) => {
  const alignmentClasses = {
    center: 'items-center justify-center',
    left: 'items-start justify-start',
    right: 'items-end justify-end',
  };

  const renderGrafism = () => {
    if (!showGrafism) return null;
    if (customGrafism) {
      return typeof customGrafism === 'string' ? (
        <img src={customGrafism} alt="grafism" className="mt-3 max-w-full" />
      ) : (
        <div className="mt-3">{customGrafism}</div>
      );
    }
    return (
      <div
        className="mt-3 h-[2px]"
        style={{
          width: grafismWidth,
          backgroundColor: grafismColor,
        }}
      />
    );
  };

  return (
    <LpMainContainer
      bgColor={containerBgColor}
      height={containerHeight}
      className={containerClassName}
    >
      <div className={`w-full flex flex-col items-center justify-center gap-4 ${paddingY} ${paddingX} ${paddingSmX} ${className}`}>
        {title && (
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="text-3xl sm:text-4xl text-center font-thin uppercase mb-0">{title}</h2>
            {showLine && (
              <Line
                color={lineColor}
                width={lineWidth}
                height={lineHeight}
                margins={lineMargins}
              />
            )}
          </div>
        )}

        <div className={`w-full flex flex-col ${alignmentClasses[alignment]} ${spacingY}`}>
          {children}
        </div>

        {renderGrafism()}
      </div>
    </LpMainContainer>
  );
};

export default LpContentContainer;
