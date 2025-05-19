import React from 'react';
import IconText from '../IconText';

interface Item {
  key?: string | number;
  text: string;
  icon?: React.ReactNode;
}

interface Props {
  items: Item[];
  icon?: React.ReactNode;
  iconSize?: string;
  iconColor?: string;
  textSize?: string;
  textColor?: string;
  direction?: 'column' | 'row';
  spaceY?: string;
  responsive?: boolean;
  className?: string;
}

const ItemsList = ({
  items,
  icon,
  iconSize = 'text-xl',
  iconColor,
  textSize = 'text-base',
  textColor,
  direction = 'column',
  spaceY = 'space-y-2',
  responsive = false,
  className = '',
}: Props) => {
  const layoutClass = direction === 'column' ? `flex-col ${spaceY}` : 'flex-row flex-wrap gap-3';

  return (
    <div className={`flex w-full ${layoutClass} ${className}`}>
      {items.map((item, index) => (
        <IconText
          key={item.key ?? index}
          text={item.text}
          icon={item.icon ?? icon}
          iconSize={iconSize}
          iconColor={iconColor}
          textSize={textSize}
          textColor={textColor}
          responsive={responsive}
        />
      ))}
    </div>
  );
};

export default ItemsList;
