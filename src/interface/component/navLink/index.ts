import { ReactNode } from 'react';
export interface NavLinkModule {
    href?: any;
    className?: string;
    exact?: boolean;
    children?: ReactNode;
    title?: string
}
