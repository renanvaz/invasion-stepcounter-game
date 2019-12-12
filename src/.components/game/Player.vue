<script>
export default {
    inject: ['PIXI', 'app', 'event'],
    props: ['x', 'y', 'src'],

    data() {
        return {
            sprite: null
        }
    },

    render(h) { return h() },

    created() {
        this.event.$once('app:initialized', () => {
            this.sprite = this.PIXI.Sprite.from(this.src);

            this.sprite.x = this.x || 0;
            this.sprite.y = this.y || 0;
            this.sprite.anchor.set(0.5);

            this.sprite.interactive = true;
            this.sprite.on('pointerdown', () => this.$emit('pointerdown', this.sprite));

            if (this.$parent.container) {
                this.$parent.container.addChild(this.sprite);
            } else {
                this.app.instance.stage.addChild(this.sprite);
            }
        });
    }
}
</script>