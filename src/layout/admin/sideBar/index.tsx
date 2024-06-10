import { Fragment } from "react"
import { NavLink } from '@/components/common'
import Image from "next/image";
import { MENU } from '@/services/constant'

export const SideBar = () => {
    return (
        <Fragment>

            <div className="d-flex flex-column flex-shrink-0 bg-light" style={{ width: '4.5rem' }}>
                {/* <a href="/" className="d-block p-3 link-dark text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                    <Image
                        src="/img/greenius_logo_sm.svg"
                        width={40}
                        height={32}
                        alt="Brand Logo"

                    />
                    <span className="visually-hidden">Icon-only</span>
                </a> */}
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                    {MENU.map(({ icon = '', text = '', url = '/' }, i) => <li className="nav-item" key={i}>
                        <NavLink href={url} exact={true} className="nav-link py-3 border-bottom rounded-0" title={text}>
                            <i className={icon}></i>
                        </NavLink>
                    </li>)}

                </ul>
                <div className="dropdown border-top">
                    <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle" />
                    </a>
                    <ul className="dropdown-menu text-small shadow">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>

        </Fragment>
    )
}