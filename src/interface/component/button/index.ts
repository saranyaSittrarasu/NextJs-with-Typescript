type ButtonType = "button" | "submit" | "reset" | undefined;

export interface NormalButtonModule {
    label?: string;
    type?: ButtonType;
    className?: string;
    onClick?: () => void;
}
