import Vue from 'vue';

import Game from '~/.pages/Game.vue';

new Vue({ render: createElement => createElement(Game) }).$mount('#app');