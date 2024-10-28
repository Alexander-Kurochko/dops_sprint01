import React, {ButtonHTMLAttributes} from 'react';

/*type ButtonPropsType = {
    title: string
    onClick: () => void
}*/

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({title, onClick}: ButtonPropsType) => {
    return (
        <button onClick={onClick}>{title}</button>
    );
};

//export default Button;