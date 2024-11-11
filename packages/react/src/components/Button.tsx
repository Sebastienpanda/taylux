import { ButtonProps } from "@taylux/core";
import "../style/button.css";

export interface ReactButtonProps extends ButtonProps {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

export default function Button({
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    children,
    onClick,
    className = "",
    ...props
}: ReactButtonProps) {
    const baseClass = "taylux-button";
    const classes = [
        baseClass,
        `${baseClass}--${variant}`,
        `${baseClass}--${size}`,
        disabled ? `${baseClass}--disabled` : "",
        loading ? `${baseClass}--loading` : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button className={classes} disabled={disabled || loading} onClick={onClick} {...props}>
            {loading && (
                <svg className="taylux-button__spinner" width="20" height="20" viewBox="0 0 24 24">
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                    />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
            )}
            <span className={loading ? "taylux-button__content--loading" : ""}>{children}</span>
        </button>
    );
}
