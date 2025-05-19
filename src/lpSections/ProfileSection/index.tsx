import React from 'react';
import LpContentContainer from '../../containers/LpContentContainer';
import ItemsList from '../../ui/ItemsList';
import Line from '../../ui/Line';

interface Props {
  title: string;
  name: string;
  description?: string;
  items: string[];
  imageUrl: string;

  textColor?: string;
  iconColor?: string;
  lineColor?: string;
  grafismColor?: string;
  bgColor?: string;
  className?: string;

  containerHeight?: string;
  containerClassName?: string;
}

const ProfileSection = ({
  title,
  name,
  description,
  items,
  imageUrl,
  textColor = 'text-black',
  iconColor = 'text-[#e16a3d]',
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
      <div className={`w-full flex flex-col-reverse lg:flex-row items-center gap-6 ${className}`}>
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <h2 className={`text-2xl lg:text-3xl font-semibold uppercase ${textColor}`}>{name}</h2>
          {description && <p className={textColor}>{description}</p>}

          <div className="flex justify-center lg:justify-start items-center">
            <Line margins="m-0" width="w-[10%] lg:w-[5%]" height="h-[1px]" color={lineColor} />
          </div>

          <h2 className={`text-lg lg:text-xl font-semibold uppercase ${textColor}`}>Formação:</h2>

          <ItemsList
            items={items.map((item) => ({ text: item }))}
            iconSize="text-lg"
            iconColor={iconColor}
            textSize="text-lg"
            spaceY="space-y-1"
            responsive={false}
          />
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={imageUrl}
            alt={`Foto de ${name}`}
            className="w-[90%] h-[90%] rounded-full shadow-2xl border-[3px] border-gray-300 object-cover"
          />
        </div>
      </div>
    </LpContentContainer>
  );
};

export default ProfileSection;
