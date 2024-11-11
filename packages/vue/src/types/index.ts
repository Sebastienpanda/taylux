export interface ButtonProps {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "outline";
    disabled?: boolean;
}
export const BUTTON_SIZES = ["small", "medium", "large"] as const;
export const BUTTON_VARIANTS = ["primary", "secondary", "outline"] as const;
