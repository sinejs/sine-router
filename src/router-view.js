
@sine.decorator.component({
    namespace: 'sine.router',
    selector: 'router-view',
    inject: {
        $animate: '$animate',
        $router: '$router'
    }
})
class RouterViewComponent extends sine.Component {
    constructor() {
        super();
        var self = this;
        this.activeCmp = null;
        this.activeRoute = null;
        this.activeRouteLevel = null;
        this.parentRoute = null;
        this.routes = [];
        this.onRouteChange = function () {
            self.UpdateRoute();
        };
    }

    init() {
        this.parentRoute = this.$$parentComponent && this.$$parentComponent.$route;
        this.activeRouteLevel = this.$$parentComponent && this.$$parentComponent.$routeLevel;

        if (!this.$router) {
            return;
        }

        var self = this;

        // it is root router view
        if (!this.parentRoute) {
            this.activeRouteLevel = 0;
            this.routes = this.$router.routes;
            this.$router.listen();
        }
        else {
            this.routes = this.parentRoute.route.children;
        }

        this.$router.routeChange.on(this.onRouteChange);
        this.UpdateRoute();
    }

    UpdateRoute() {
        if (this.activeRouteLevel >= this.$router.activeRoutes.length) {
            this.activeRoute = null;
            return;
        }

        var activeRoute = this.$router.activeRoutes[this.activeRouteLevel];

        if (this.activeRoute === activeRoute) {
            return;
        }

        var yes = this.routes.some(function (route) {
            return activeRoute.route === route;
        });

        if (yes) {
            this.activeRoute = activeRoute;
        }
        else {
            this.activeRoute = null;
        }

        this.renderView();
    }

    clearView() {
        var self = this;

        if (this.activeCmp != null) {
            this.$animate.leave(this.$$element, function () {
                self.activeCmp.$destroy();
                self.activeCmp = null;
            });
        }
    }

    renderView() {
        var self = this;
        this.clearView();
        this.activeCmp = this.$createChildCmp(this.activeRoute.route.component);
        this.activeCmp.$route = this.activeRoute;
        this.activeCmp.$routeLevel = this.activeRouteLevel + 1;
        this.$$element.htmlElement.style.display = 'none';
        this.activeCmp.$mount(this.$$element.htmlElement);
        this.$animate.enter(this.$$element, function () {
            self.$$element.htmlElement.style.display = 'block';
        });
    }

    afterViewMount() {
        this.init();
    }

    onDestroy() {
        if (this.activeRouteLevel === 0) {
            this.$router.stop();
        }
        else{
            this.$router.routeChange.off(this.onRouteChange);
        }
        this.clearView();
    }
}