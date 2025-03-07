import { createSSRApp } from "vue"
import 'virtual:uno.css'
import App from "./App.vue";
import { requestInterceptor, routeInterceptor } from './interceptors'
import store from './store'
export function createApp() {
	const app = createSSRApp(App);
	app.use(store)
	app.use(routeInterceptor)
	app.use(requestInterceptor)
	return {
		app,
	};
}
