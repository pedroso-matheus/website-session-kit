import React from 'react';

interface Props {
  className?: string;
  label: string;
  icon?: React.ReactNode;
  href: string;
  wfull?: boolean;
  padding?: string;
  hideLabelOnMobile?: boolean;
  bgColor?: string;       // Cor de fundo
  textColor?: string;     // Cor do texto e ícone
  borderColor?: string;   // Cor da borda (opcional)
}

const FeaturedButton = ({
  className = '',
  label,
  icon,
  href,
  wfull = false,
  padding = 'px-4 py-2',
  hideLabelOnMobile = false,
  bgColor = 'bg-[#e16a3d]',
  textColor = 'text-white',
  borderColor = '', // padrão: sem borda
}: Props) => {
  const buttonClasses = [
    'inline-flex items-center justify-center rounded-lg transition-all duration-200',
    padding,
    bgColor,
    textColor,
    borderColor ? `border ${borderColor}` : '',
    wfull ? 'w-full' : '',
    'hover:opacity-80',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a
      href={href}
      className={buttonClasses}
      aria-label={label}
    >
      {icon && <span className={label ? 'mr-2' : ''}>{icon}</span>}
      <span className={hideLabelOnMobile ? 'hidden sm:inline' : ''}>
        {label}
      </span>
    </a>
  );
};

export default FeaturedButton;
