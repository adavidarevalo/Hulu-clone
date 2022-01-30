import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { forwardRef, RefObject } from 'react'
import { IData } from '../../interfaces/IData'

interface IProps {
    data: IData;
}

const Thumbnail = forwardRef(({ data }: IProps, ref: React.Ref<HTMLDivElement>) => {

    const BASE_URL = 'https://image.tmdb.org/t/p/original'

    return (
        <div
            ref={ref}
            className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105  hover:z-50">
            <Image
                layout='responsive'
                height={1080}
                width={1920}
                src={`${BASE_URL}${data.backdrop_path || data.poster_path}`}
                alt={data.title}
            />
            <div className='p-2'>
                <p className='truncate max-w-md'>{data.overview}</p>
                <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{data.title || data.original_name}</h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>{data.release_date} · <ThumbUpIcon className='h-5 mx-2' />{data.vote_count}</p>
            </div>
        </div>
    )
})

export default Thumbnail
