import React from 'react';
import LpContentContainer from '../../containers/LpContentContainer';

interface Props {
  title: string;
  imagesUrl: string[];
  bgColor?: string;
  grafismColor?: string;
  className?: string;

  containerHeight?: string;
  containerClassName?: string;
}

const TestimonialSection = ({
  title,
  imagesUrl,
  bgColor = 'bg-white',
  grafismColor = '#e16a3d',
  className = '',
  containerHeight,
  containerClassName,
}: Props) => {
  const columns: string[][] = [[], [], []];

  imagesUrl.forEach((image, index) => {
    columns[index % 3].push(image);
  });

  return (
    <LpContentContainer
      title={title}
      grafismColor={grafismColor}
      containerBgColor={bgColor}
      containerHeight={containerHeight}
      containerClassName={containerClassName}
    >
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4">
            {column.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Imagem ${index + 1}`}
                className="w-full h-auto border border-gray-300 rounded-lg shadow-md object-cover"
              />
            ))}
          </div>
        ))}
      </div>
    </LpContentContainer>
  );
};

export default TestimonialSection;
