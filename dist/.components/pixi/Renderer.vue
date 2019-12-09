<template>
    <div>
        <canvas ref="canvas"></canvas>
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    // import MapZigZag from '~/.classes/MapZigZag';

    import * as PIXI from 'pixi.js';

    export default {
        data() {
            return {
                PIXI,
                app: { instance: null },
                event: new Vue(),
            };
        },

        provide() {
            return {
                PIXI: this.PIXI,
                app: this.app,
                event: this.event,
            };
        },

        mounted() {
            const canvas = this.$refs.canvas;

            this.app.instance = new PIXI.Application({
                width: canvas.offsetWidth,
                height: canvas.offsetHeight,
                view: canvas,
                backgroundColor: 0x000000,
            });

            this.event.$emit('app:initialized');
        }
    };
</script>

<style lang="less" scoped>
    canvas {
        width: 100%;
        height: 100%;
    }
</style>