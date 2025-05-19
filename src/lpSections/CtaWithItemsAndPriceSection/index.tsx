import React from 'react';
import LpContentContainer from '../../containers/LpContentContainer';
import FeaturedButton from '../../ui/FeaturedButton';
import PriceShow from '../../ui/PriceShow';
import ItemsList from '../../ui/ItemsList';
import Line from '../../ui/Line';
import { FaCheck } from 'react-icons/fa';

interface Props {
  highlight: string;
  price: string;
  salesPrice?: string;
  installments?: number;
  buttonLabel: string;
  checkoutLink: string;
  afterButton?: string;
  ctaItems?: string[];
  className?: string;

  grafismColor?: string;
  lineColor?: string;

  lpBgColor?: string;
  lpHeight?: string;
  lpClassName?: string;
}

const CtaWithItemsAndPriceSection = ({
  highlight,
  price,
  salesPrice,
  installments,
  buttonLabel,
  checkoutLink,
  afterButton,
  ctaItems,
  className = '',
  grafismColor = '#e16a3d',
  lineColor = '#e16a3d',
  lpBgColor = 'bg-gradient-to-b from-[#00172f] to-black',
  lpHeight,
  lpClassName,
}: Props) => {
  return (
    <LpContentContainer
      title={highlight}
      grafismColor={grafismColor}
      className={`text-center text-[#daebfd] ${className}`}
      containerBgColor={lpBgColor}
      containerHeight={lpHeight}
      containerClassName={lpClassName}
    >
      <Line width="w-[10%]" height="h-[1px]" color={lineColor} />

      {ctaItems && (
        <div className="p-3 border border-white rounded-lg">
          <ItemsList
            items={ctaItems.map((text) => ({ text }))}
            icon={<FaCheck />}
            iconColor="text-[#e16a3d]"
            responsive={false}
            textSize="text-md"
            iconSize="text-md"
            className="w-full text-start px-3"
          />
        </div>
      )}

      <div className="pt-4">
        <FeaturedButton
          label={buttonLabel}
          href={checkoutLink}
          padding="px-7 py-4"
          className="text-xl"
        />
      </div>

      <PriceShow
        price={price}
        salesPrice={salesPrice}
        installments={installments}
        className="mt-2"
      />

      {afterButton && <p className="text-sm font-light mt-1">({afterButton})</p>}
    </LpContentContainer>
  );
};

export default CtaWithItemsAndPriceSection;
