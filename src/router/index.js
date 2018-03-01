import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Message from '@/components/Messages';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
    },
    {
      path: '/message/:message_id',
      name: 'Message',
      component: Message,
    },
  ],
  mode: 'history',
});
