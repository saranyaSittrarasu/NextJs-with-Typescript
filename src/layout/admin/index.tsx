import { Fragment } from "react"
import { AdminLayoutModule } from '@/interface'
import { SideBar } from './sideBar'
import { Header } from './header'
import { FC } from 'react';
import styles from './admin.module.scss'

export const AdminLayout: FC<AdminLayoutModule> = ({children}) => {

    return (
        <Fragment>
            <Header />
            <div className="d-flex">
                <SideBar />
                <div className={styles['page-content-wrapper']}>
                    <div className="container-fluid mt-4">
                        {children}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}