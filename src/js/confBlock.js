(function() {
    if (window.Vue === undefined) {
        console.error("请引入Vue");
    }
    window.MDMComponents = window.MDMComponents || {};
    var ConfBlock = window.MDMComponents.ConfBlock = {
        name: "MdmConfBlock",
        template: "#ConfBlockTpl",
        data: function() {
            return {
                scrollTop: 0
            }
        },
        props: {
            title: String,
            bodyHeight: String
        },
        methods: {
            handleBodyInnerScroll: function(e) {
                this.scrollTop = e.target.scrollTop || 0;
            }
        }
    };
    Vue.component(ConfBlock.name, ConfBlock);
})();