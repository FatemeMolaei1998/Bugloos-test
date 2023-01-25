import Register from 'pages/RegisterUser/RegisterUser.vue'
import AllCourses from 'pages/AllCourses/AllCourses.vue'
import UserCourses from "pages/UsersCourses/UserCourses.vue";


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: Register },
      { path: '/register', component: Register },
      {
        path: '/all-courses',
        component: AllCourses,
        meta: { requiresAuth: true },
      },
      {
        path: '/user-courses',
        component: UserCourses,
        meta: { requiresAuth: true },
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
