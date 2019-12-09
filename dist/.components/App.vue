<template>
    <div>
        {{ user.distance }}

        <renderer>
            <container :x="400" :y="400">
                <sprite :x="0" :y="0" src="./images/logo.png"/>
            </container>
        </renderer>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    import Renderer from './pixi/Renderer.vue';
    import Container from './pixi/Container.vue';
    import Sprite from './pixi/Sprite.vue';

    export default {
        components: {
            Renderer,
            Sprite,
            Container,
        },
        data() {
            return {
                user: { distance: 0 },
            };
        },
    };
</script>

<style lang="less" scoped>

</style>