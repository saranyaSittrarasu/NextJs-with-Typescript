import { FC } from 'react';
import { NormalButtonModule } from '@/interface'

export const NormalButton: FC<NormalButtonModule> = ({ type = 'button', className = 'btn-primary', label = '', onClick = () => { } }) => {

    return (
        <button type={type} onClick={onClick} className={`btn ${className}`}>{label}</button>
    )
}