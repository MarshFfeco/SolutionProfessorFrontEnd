import {createRouter, createWebHistory} from 'vue-router';

const main = async () => import('../views/MainView.vue');

const routes = [
	{
		path: '/',
		name: 'Solution For Professors',
		component: main,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
