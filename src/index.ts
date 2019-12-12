import Vue from 'vue';

import Game from '~/.pages/Game.vue';

import Renderer from '~/.components/pixi/Renderer.vue';
import Container from '~/.components/pixi/Container.vue';
import Sprite from '~/.components/pixi/Sprite.vue';

Vue.component('renderer', Renderer);
Vue.component('sprite', Sprite);
Vue.component('container', Container);

new Vue({ render: createElement => createElement(Game) }).$mount('#app');