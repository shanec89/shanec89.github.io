import { createRouter, createWebHistory } from 'vue-router';

// Import your Vue components for routing
import HomePage from '@/views/HomePage.vue';
import UpcomingEvents from '@/views/UpcomingEvents.vue';

const routes = [
{
        path: '/',
        component: HomePage,
    },
  {
    path: '/upcoming-events',
    component: UpcomingEvents,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
