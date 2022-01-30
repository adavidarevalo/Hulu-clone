import React from 'react'
import Image from 'next/image'
import { HeaderItems } from './HeaderItems'
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline'

export const Header = () => (
    <header className="flex flex-col sm:flex-row justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItems Icon={HomeIcon} title="HOME" />
            <HeaderItems Icon={LightningBoltIcon} title="TREDING" />
            <HeaderItems Icon={BadgeCheckIcon} title="VERIFIED" />
            <HeaderItems Icon={CollectionIcon} title="COLLECTIONS" />
            <HeaderItems Icon={SearchIcon} title="SEARCH" />
            <HeaderItems Icon={UserIcon} title="ACCOUNT" />
        </div>
        <Image
            src="https://links.papareact.com/ua6"
            alt="Logo Hulu"
            width={200}
            height={100}
            className='object-contain' />
    </header>
)
