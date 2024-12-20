import '@queo/core/src/styles/main.scss';
import type { App } from 'vue';
import Avatar from './components/Avatar/Avatar.vue';
import Button from './components/Button/Button.vue';
import Tag from './components/Tag/Tag.vue';

export { Avatar, Button, Tag };

export const plugin = {
	install(app: App) {
		app.component('Button', Button);
		app.component('Tag', Tag);
		app.component('Avatar', Avatar);
	},
};

export default plugin;

declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		Button: typeof Button;
		Tag: typeof Tag;
		Avatar: typeof Avatar;
	}
}
