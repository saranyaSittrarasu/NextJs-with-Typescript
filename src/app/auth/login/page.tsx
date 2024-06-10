"use client";
import { AuthLayout } from "@/layout";
import SimpleReactValidator from "simple-react-validator";
import { NormalInput, NormalButton } from "@/components/common";
import { useRouter } from "next/navigation";
import styles from "./login.module.scss";
import { useRef, useState } from "react";
export default function LoginPage() {
    const [loginFormObj, setLoginFormObj] = useState({
        email: "",
        password: "",
    });
    const [, forceUpdate] = useState<Number>()
    const router = useRouter();
    const validator = useRef(new SimpleReactValidator());
    // onclick={() => router.push('./home-page')}

    const handleChangeInput = (event: any) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        console.log(name);

        setLoginFormObj({
            ...loginFormObj,
            [name]: value,
        });
    };

    const handleLogin = () => {
        const isValid = validator.current.allValid()

        if (isValid) {
            router.push('/home')
            console.log("loginFormObj------", loginFormObj);
        } else {
            validator.current.showMessages()
            forceUpdate(1)
        }


    };
    return (
        <AuthLayout>
            <div
                className={`row login justify-content-md-center ${styles["login-page"]}`}
            >
                <div className="col-md-9 col-xs-9">
                    <div className="row">
                        <div className="col-12">
                            <h1>Login Page</h1>
                        </div>
                        <div className="col-12">
                            <NormalInput
                                label="Email"
                                value={loginFormObj.email}
                                name="email"
                                onChange={handleChangeInput}
                                placeholder="Enter Email"
                                errorMessage={validator.current.message('Email', loginFormObj.email, 'required|email')}
                            />
                        </div>
                        <div className="col-12">
                            <NormalInput
                                label="Password"
                                value={loginFormObj.password}
                                name="password"
                                onChange={handleChangeInput}
                                errorMessage={validator.current.message('Password', loginFormObj.password, 'required')}
                                type="password"
                                placeholder="Enter Password"
                            />
                        </div>
                        <div className="col-12">
                            <div className="d-grid gap-2">
                                <NormalButton
                                    label="Login"
                                    className="btn-lg btn-primary"
                                    onClick={handleLogin}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
