import type { ButtonProps } from "./types";

export const getButtonStyles = ({ variant = "primary", size = "md", disabled = false }: ButtonProps): string => {
    const baseStyles =
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
    };

    const sizeStyles = {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-11 px-8 text-lg",
    };

    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

    return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles}`.trim();
};
