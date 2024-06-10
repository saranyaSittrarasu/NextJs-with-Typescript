
import { FC } from 'react';
import { TextAreaInputModule } from '@/interface';
import styles from "./textAreaInput.module.scss";

export const NormalInputArea: FC<TextAreaInputModule> = ({ type = 'text', label = '', name = '', placeholder = '', errorMessage = '', value = '', onChange }) => {

    return (
        <div className={`mb-3 ${styles.appInput}`}>
            <label className="form-label">{label}</label>
            <textarea  className={`form-control ${styles.formControl} `} name={name} placeholder={placeholder} value={value} onChange={onChange}
            />
            <div id="emailHelp" className="form-text text-danger">{errorMessage}</div>
        </div>
    )
}