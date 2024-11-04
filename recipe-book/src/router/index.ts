import AddRecipeView from '@/views/AddRecipeView.vue';
import EditRecipeView from '@/views/EditRecipeView.vue';
import FavoritesView from '@/views/FavoritesView.vue';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import RecipeView from '@/views/RecipeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
    },
    {
      path: '/add-recipe',
      name: 'add-recipe',
      component: AddRecipeView,
    },
    {
      path: '/recipe/:id/edit',
      name: 'edit-recipe',
      component: EditRecipeView,
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: RecipeView,
      alias: '/meal/:id',
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;