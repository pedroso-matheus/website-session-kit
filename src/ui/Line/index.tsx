import React from 'react';

interface Props {
    color?: string;    
    width?: string;
    height?: string
    margins?: string
}

const defaultColor = "bg-[#e16a3d]";

const Line = ({ margins="mt-3 mb-4", width="w-[45px]", height="h-[2px]", color=defaultColor }: Props) => {

    return (
        <div className={` ${margins} ${width} ${height} ${color}`} />
    );
};

export default Line;