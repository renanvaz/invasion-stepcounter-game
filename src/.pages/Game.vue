<template>
    <div>
        <renderer>
            <container :x="10" :y="10">
                <sprite :x="129" :y="0" src="./images/tile.png"/>
            </container>
        </renderer>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    // import MapZigZag    from '../.classes/MapZigZag';

    export default {
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