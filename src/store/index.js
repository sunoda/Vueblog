import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { db } from "./firebase.js";

Vue.use(Vuex);

const LS = {
  load() {
    return JSON.parse(localStorage.getItem("vue-todo") || "[]");
  },
  save(data) {
    return localStorage.setItem("vue-todo", JSON.stringify(data));
  }
};

const filter = {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter(todo => {
      return !todo.complete;
    });
  },
  complete(todos) {
    return todos.filter(todo => {
      return todo.complete;
    });
  }
};
export default new Vuex.Store({
  strict: true,
  state: {
    articles: [],
    searchKey: "",
    accounts: [],
    focusId: "",
    articleChanged: false,
    todos: [
      { content: "todos-content", complete: false },
      { content: "todos-content", complete: true },
      { content: "todos-content", complete: false },
      { content: "todos-content", complete: false }
    ]
  },
  mutations: {
    fetchArticles: (state, payload) => {
      state.articles = payload;
      // state.articles = ["a", "b", "c"];
    },
    fetchAccounts: (state, payload) => {
      state.accounts = payload;
    },
    changeSearchKey: (state, payload) => {
      state.searchKey = payload;
    },
    changeFocusId: (state, payload) => {
      state.focusId = payload;
    },
    addArticle: (state, payload) => {
      state.articles = [payload, ...state.articles];
      state.articleChanged = !state.articleChanged;
    },
    updateArticle: (state, { id, newArticle }) => {
      const index = state.articles.map((art) => art.id).indexOf(id);
      state.articles[index] = newArticle;
      state.articleChanged = !state.articleChanged;
    },
    deleteArticle: (state, payload) => {
      const index = state.articles.map((art) => art.id).indexOf(payload);
      state.articles.splice(index, 1);
    },
    addAccountForm: (state, payload) => {
      state.accounts = [payload, ...state.accounts];
    },
    SET_TODOS(state, data) {
      state.todoos = data;
      // save LS
      LS.save(state.todos);
    },
    ADD_TODO(state, data) {
      state.todos.push(data);
      LS.save(state.todos);
    },
    UPDATE_TODO(state, { index, data }) {
      state.todos[index] = data;
      LS.save(state.todos);
    },
    DELETE_TODO(state, index) {
      state.todos.splice(index, 1);
      LS.save(state.todos);
    }
  },
  actions: {
    fetchArticles: async ({ commit }) => {
      // const api =
      //   "https://us-central1-expressapi-8c039.cloudfunctions.net/app/article";
      // const result = await axios.get(api);
      // const payload = result.data.data;
      // commit("fetchArticles", payload);
      const Ref = db.collection("Articles");
      const result = await Ref.get();
      let payload = [];
      result.forEach((art) => {
        payload.push({ id: art.id, ...art.data() });
      });
      commit("fetchArticles", payload);
      // console.log(payload);
    },
    fetchAccounts: async ({ commit }) => {
      // const accRef = {account: "Yida", password: "testpassword"};
      const accountRef = db.collection("accounts");
      const accountResult = await accountRef.get();
      let payload = [];
      accountResult.forEach((acc) => {
        payload.push({ id: acc.id, ...acc.data() });
      });

      commit("fetchAccounts", payload);
    },
    changeSearchKey: ({ commit }, payload) => {
      commit("changeSearchKey", payload);
    },
    changeFocusId: ({ commit }, payload) => {
      commit("changeFocusId", payload);
    },
    addArticle: async ({ commit }, payload) => {
      // let _ = require("lodash");
      // const ID = _.random(10000);
      // payload.id = "Art" + ID;
      const Ref = db.collection("Articles");
      const addRef = await Ref.add(payload);
      commit("addArticle", { id: addRef.id, ...payload });
    },
    updateArticle: async ({ commit }, payload) => {
      const docRef = db.collection("Articles").doc(payload.id);
      await docRef.update(payload.newArticle);
      commit("updateArticle", payload);
    },
    deleteArticle: async ({ commit }, payload) => {
      const docRef = db.collection("Articles").doc(payload);
      await docRef.delete();
      commit("deleteArticle", payload);
    },
    INIT_TODOS({ commit }) {
      // load LS
      commit("SET_TODOS", LS.load());
    }
  },
  getters: {
    filterBySearchKey: (state) => {
      if (state.searchKey === "") {
        return state.articles;
      } else {
        return state.articles.filter((art) =>
          art.title.toLowerCase().includes(state.searchKey.toLowerCase())
        );
      }
    },
    filterById: (state) => {
      if (state.articles.length) {
        return state.articles.filter((art) => art.id === state.focusId)[0];
      }
    }
  },
  modules: {}
});
