
@sine.decorator.component({
    namespace: 'sine.router',
    selector: 'router-link',
    template: '<span class="link" style="cursor: pointer;" @click="navigate()" *n-embed></span>',
    inject: {
        $router: '$router'
    }
})
class RouterLinkComponent extends sine.Component {
    constructor() {
        super();
        this.to = '';
    }

    navigate() {
        this.$router.navigate(this.to);
    }
}