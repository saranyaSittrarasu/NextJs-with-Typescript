import Image from 'next/image';
import styles from "./login.module.scss";
export default function LoginPage() {

    return (
        <div className="row">
            <div className={`col-md-6 pe-0 ${styles.authLauout} d-flex align-items-center text-center`}>
                <Image
                    src="/img/loginBG.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            <div className="col-md-6 align-self-center">
                <h1>Login Page</h1>

            </div>

        </div>
    )

}