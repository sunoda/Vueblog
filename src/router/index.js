import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "@/views/About.vue";
import Article from "@/views/Article.vue";
import Portfolio from "@/views/Portfolio.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Admin from "@/views/Admin.vue";
import AdminHome from "@/views/Admin/AdminHome.vue";
import Add from "@/views/Admin/Add.vue";
import Todolist from "@/views/Todolist.vue"
import NotFound404 from "@/views/NotFound404.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: About
  },
  {
    path: "/article",
    name: "Home",
    component: Home
  },
  {
    path: "/article/:id",
    name: "Article",
    component: Article
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/admin0310",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "/",
        name: "Admin-Home",
        component: AdminHome
      },
      {
        path: "add",
        name: "Admin-Add",
        component: Add
      },
      {
        path: "edit/:id",
        name: "Admin-Edit",
        component: Add
      }
    ]
  },
  {
    path: "/todolist",
    name: Todolist,
    component: Todolist,
    children: [
      {
        path: "all",
        name: "All",
      },
      {
        path: "active",
        name: "Active",
      },
      {
        path: "complete",
        name: "Complete",
      }
    ]
  },
  {
    path: "*",
    name: "NotFound404",
    component: NotFound404
  }
];
 
const router = new VueRouter({
  routes
});

export default router;
