import { DefineComponent } from "vue";
import type { ButtonProps } from "./index";

declare module "taylux" {
    export const Button: DefineComponent<ButtonProps, {}, {}>;
}
