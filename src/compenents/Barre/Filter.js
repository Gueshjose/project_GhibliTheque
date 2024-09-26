'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} 
from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

const sortOptions = [
    { name: 'A to Z (Alphabetical)', href: '#', current: true, alias:'alpha', id:0 },
    { name: 'Z to A (Reverse Alphabetical)', href: '#', current: false, alias:'noneAlpha', id:1 },
    { name: 'Newest', href: '#', current: false, alias:'New', id:2 },
    { name: 'Oldest', href: '#', current: false, alias:'Old', id:3 },
    { name: 'Shortest Duration', href: '#', current: false, alias:'Short', id:4 },
    { name: 'Longest Duration', href: '#', current: false, alias:'Long', id:5 },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function updateCurrentSort(alias) {
    return sortOptions.map(option => ({
        ...option, 
        current: option.alias === alias
    }));
}

function Filter(props) {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    return(
        <Menu as="div" className="relative inline-block text-left md:col-span-2 md:col-end-12 col-start-6 col-end-9 rounded-md my-2 bg-slate-100 dark:bg-[#201F39] dark:text-slate-50 text-gray-700 hover:text-gray-900">
            <div>
                <MenuButton className="group inline-flex justify-center text-sm font-medium cursor-ghibliC w-full text-[3vw]  md:text-[1.5vw]  rounded-md my-4">
                    Filter
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                </MenuButton>
            </div>

            <MenuItems transition className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-slate-100 dark:bg-[#201F39] dark:text-slate-50 text-gray-700 hover:text-gray-900 shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in" >
                <div className="py-1">
                    {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                            <a href={option.href} className={classNames( option.current ? 'font-medium text-gray-900 dark:text-slate-50 cursor-ghibliC' : 'text-gray-500','block px-4 py-2 text-sm data-[focus]:bg-gray-100 cursor-ghibliC hover:text-gray-900 hover:dark:text-gray-400',)} onClick={()=>{props.filter({ type: 'filter', payload: {id: option.id} });updateCurrentSort(option.alias);}}>
                                {option.name}
                            </a>
                        </MenuItem>
                    ))}
                </div>
            </MenuItems>
        </Menu>
    )
}

export default Filter;