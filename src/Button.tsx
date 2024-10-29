import React, {ButtonHTMLAttributes} from 'react';

/*type ButtonsPropsType = {
    title: string
    onClick: () => void
}*/

type ButtonsPropsType = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({title, onClick}: ButtonsPropsType) => {
    return (
        <button onClick={onClick}>{title}</button>
    );
};

//export default Buttons;