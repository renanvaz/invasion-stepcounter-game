<script>
export default {
    inject: ['PIXI', 'app', 'event'],
    props: ['x', 'y'],

    data() {
        return {
            container: null,
        };
    },

    render: function(h) {
        return h('template', this.$slots.default);
    },

    created() {
        this.event.$once('app:initialized', () => {
            this.container = new this.PIXI.Container();

            this.container.x = this.x || 0;
            this.container.y = this.y || 0;

            this.container.interactive = true;
            this.container.on('pointerdown', () => this.$emit('pointerdown', this.container));

            if (this.$parent.container) {
                this.$parent.container.addChild(this.container);
            } else {
                this.app.instance.stage.addChild(this.container);
            }

        });
    }
}
</script>