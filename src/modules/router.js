export class Router {

	constructor() {
		this.cache = {};
	}

	/**
     * Register new path
     * @param {string} path - путь
     * @param {View} view - Модуль view, который должен быть показан
     */
	register(path, view) {
		this.cache[path] = view;
		return this;
	}

	onRoute(route) {
		let view = this.cache[route];

		if (!view) {
			console.error('Неизвестный маршрут', route);
			return;
		}

		if (this.current) {
			this.current.toggle(false);
		}

		if (!view.isRendered) {
			view.render();
		}

		view.toggle(true);
		this.current = view;
	}

	start() {
		function getRouteFromHash() {
			return location.hash.replace('#', '');
		}

		window.addEventListener('hashchange', () => {
			let route = getRouteFromHash();
			this.onRoute(route);
		});
		this.onRoute(getRouteFromHash());
	}
}