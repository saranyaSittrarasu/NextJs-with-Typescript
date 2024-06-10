
import { FC } from 'react';
import { NormalInputModule } from '@/interface';
import styles from "./input.module.scss";

export const NormalInput: FC<NormalInputModule> = ({ type = 'text', label = '', name = '', placeholder = '', errorMessage = '', value = '', onChange }) => {

    return (
        <div className={`mb-3 ${styles.appInput}`}>
            <label className="form-label">{label}</label>
            <input type={type} className={`form-control ${styles.formControl} `} name={name} placeholder={placeholder} value={value} onChange={onChange}
            />
            <div id="emailHelp" className="form-text text-danger">{errorMessage}</div>
        </div>
    )
}