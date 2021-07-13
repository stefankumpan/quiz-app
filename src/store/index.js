import { createStore } from 'vuex';

import html from './JsonData/quiz_html.json';
import js from './JsonData/quiz_js.json';
import template from './JsonData/quiz_template.json';

export default createStore({
  state: {
    quiz: {
      html,js,template
    },
  },
  getters: {
    getQuiz: (state) => (select) => {
      return state.quiz[select];
    },
    getAllQuiz: (state)=>{
      return state.quiz;
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
