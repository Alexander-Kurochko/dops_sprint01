// @flow 
import * as React from 'react';

type CrosesPropsType = {
    id: number
    model: string
    size: string
}

type Props = {
    croses: CrosesPropsType[]
    children: React.ReactNode
};
export const Croses = ({croses, children}: Props) => {
    return (
        <div>
            <ol>
                {croses.map(el => {
                    return (
                        <li key = {el.id}>
                            <span>{el.id} </span>
                            <span>{el.model} </span>
                            <span>{el.size}</span>
                        </li>
                    )
                })}
            </ol>
            {children}
            <hr/>
        </div>
    );
};