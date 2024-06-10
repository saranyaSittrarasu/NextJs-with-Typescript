'use client'

import { usePathname } from 'next/navigation'
import { FC } from 'react';
import Link from 'next/link';
import { NavLinkModule } from '@/interface'




export const NavLink: FC<NavLinkModule> = ({ href, exact, children, title, className}) => {
    const pathname  = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        className += ' active';
    }

    return (
        <Link className={className} title={title} href={href}>

            {children}

        </Link>
    );
}