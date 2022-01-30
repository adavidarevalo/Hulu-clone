import React, { SVGProps } from 'react'
interface IProps {
    Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
    title?: string;
}
export const HeaderItems = ({ Icon, title }: IProps) => {
    return (
        <a className="group flex flex-col items-center cursor-pointer w-12 sm:w-20">
            <Icon className="h-8 w-8 mb-1 group-hover:animate-bounce" />
            <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
        </a>
    )
}
