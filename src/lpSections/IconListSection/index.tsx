import React from 'react';
import LpContentContainer from '../../containers/LpContentContainer';
import ItemsList from '../../ui/ItemsList';
import Line from '../../ui/Line';

interface Props {
  title: string;
  icon?: React.ReactNode;
  items: string[];
  responsive?: boolean;

  iconColor?: string;
  textColor?: string;
  lineColor?: string;
  grafismColor?: string;
  bgColor?: string;
  className?: string;

  containerHeight?: string;
  containerClassName?: string;
}

const IconListSection = ({
  title,
  icon,
  items,
  responsive = false,
  iconColor = 'text-[#e16a3d]',
  textColor = 'text-black',
  lineColor = '#e16a3d',
  grafismColor = '#e16a3d',
  bgColor = 'bg-white',
  className = '',
  containerHeight,
  containerClassName,
}: Props) => {
  return (
    <LpContentContainer
      title={title}
      grafismColor={grafismColor}
      containerBgColor={bgColor}
      containerHeight={containerHeight}
      containerClassName={containerClassName}
    >
      <Line width="w-[10%]" height="h-[1px]" color={lineColor} />
      <ItemsList
        items={items.map((text) => ({ text }))}
        icon={icon}
        iconColor={iconColor}
        textColor={textColor}
        responsive={responsive}
        className={`w-full text-start px-3 border rounded-lg ${className}`}
      />
    </LpContentContainer>
  );
};

export default IconListSection;
