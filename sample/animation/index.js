var app = new Vue({
    el: '#app',
    data: function () {
        return {
            shown: true
        }
    },
    methods: {
        beforeEnter: function (el) {
            
        },
        enter: function (el) {
            
        },
        afterEnter: function (el) {

        },
        beforeLeave: function (el) {

        },
        toggle: function () {
            this.shown = !this.shown;
        }
    }
});