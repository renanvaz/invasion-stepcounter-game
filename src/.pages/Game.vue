<template>
    <div>
        <renderer>
            <container :x="400" :y="400">
                <sprite :x="0" :y="0" src="./images/tile.png"/>
            </container>
        </renderer>
    </div>
</template>

<script lang="ts">
    import Vue          from 'vue';

    import Renderer     from '../.components/pixi/Renderer.vue';
    import Container    from '../.components/pixi/Container.vue';
    import Sprite       from '../.components/pixi/Sprite.vue';

    // import MapZigZag    from '../.classes/MapZigZag';

    export default {
        components: {
            Renderer,
            Sprite,
            Container,
        },
        data() {
            return {
                user: { distance: 0 },
                others: [],
            };
        },
    };
</script>

<style lang="less" scoped>

</style>