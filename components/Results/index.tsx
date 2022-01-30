import React from "react"
import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"
import { IData } from "../../interfaces/IData"
import { IProps } from '../../pages'

export const Results = ({ results }: IProps) => {
    return (
        <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {results.map((data: IData) => <Thumbnail key={data.id} data={data} />)}
        </FlipMove>
    )
}
