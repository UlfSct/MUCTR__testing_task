import { createRouter, createWebHistory } from 'vue-router'
import TranslatorView from "@/views/TranslatorView";
import TranslationsHistoryView from "@/views/TranslationsHistoryView";
import DetailedHistoryView from "@/views/DetailedInfoView";


const routes = [
  {
    path: '/',
    component: TranslatorView
  },
  {
    path: '/history',
    component: TranslationsHistoryView
  },
  {
    path: '/info',
    component: DetailedHistoryView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
