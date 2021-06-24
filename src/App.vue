<template>
  <div id="app">
    <Question :QuizData="Quiz"></Question>
  </div>
</template>

<script>
import Question from './components/Question.vue';

export default {
  name: 'App',
  components: {
    Question,
  },
  data() {
    return {
      Quiz: [
        {
          question: 'Hier kommt Frage 1, Das hier ist ein langer Text damit man auch längere Fragen Sieht',
          answers: {
            A: 'Antwort 1',
            B: 'Antwort 2',
            C: 'Antwort 3',
            D: 'Antwort 4',
          },
          correct: 'A',
        },
        {
          question: 'Hier kommt Frage 2, Das hier ist ein langer Text damit man auch längere Fragen Sieht',
          answers: {
            A: 'Antwort 1',
            B: 'Antwort 2',
            C: 'Antwort 3',
            D: 'Antwort 4',
          },
          correct: 'A',
        },
        {
          question: 'Hier kommt Frage 3, Das hier ist ein langer Text damit man auch längere Fragen Sieht',
          answers: {
            A: 'Antwort 1',
            B: 'Antwort 2',
            C: 'Antwort 3',
            D: 'Antwort 4',
          },
          correct: 'C',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', Helvetica, sans-serif;
  overflow-x: hidden;
}
#app{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(100vw);
}
</style>
