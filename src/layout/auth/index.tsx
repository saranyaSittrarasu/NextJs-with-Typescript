import Image from "next/image";
import styles from "./auth.module.scss";
import { FC } from 'react';
import {AuthLayoutModule} from '@/interface'


export const AuthLayout: FC<AuthLayoutModule> = ({ children }) => {
    // const { children} = props;
    return (
        <div className="row">
            <div
                className={`col-md-6 pe-0 ${styles.authLauout} d-flex align-items-center text-center`}
            >
                <Image
                    src="/img/loginBG.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            <div className="col-md-6 align-self-center">{children}</div>
        </div>
    );
};
