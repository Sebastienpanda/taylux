import type { App } from "vue";
import Button from "./components/ui/Button.vue";
export { Button };

export type { ButtonProps } from "./types/index";

export const plugin = {
    install(app: App) {
        app.component("Button", Button);
    },
};

export default plugin;

declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        Button: typeof Button;
    }
}
