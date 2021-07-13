<template>
  <main>
    <div class="quiz-overview">
      <div v-for="(quiz, idx) in Quiz_list" :key="idx" class="quiz-overview-item">
        <h2>{{ quiz.title }}</h2>
        <img :src="'img/' + quiz.cover" :alt="quiz.title" />
        <router-link :to="{ name: 'Quiz', params: { quizname: idx } }">Start Quiz</router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    Quiz_list() {
      return this.$store.getters.getAllQuiz;
    },
  },
};
</script>

<style lang="scss">
.quiz-overview {
  max-width: 800px;
  display: grid;
  gap: 2rem;
  margin: 0 auto;
  justify-content: center;
}
@media(min-width: 600px){
.quiz-overview {
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 1rem));
  gap: 2rem;
  margin: 0 auto;
  justify-content: center;
}
}
.quiz-overview-item {
  max-width: 400px;
  border-radius: 1rem;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.5);
  background-image: url('/img/hexagon.svg');
  background-size: cover;
  padding: 1rem;
  h2 {
    margin: 0;
    text-align: center;
    border-bottom: .3rem solid #00b9f5;
  }
  img {
    display: block;
    width: 200px;
    margin: 0 auto;
  }
  a {
    display: block;
    max-width: 80%;
    text-decoration: none;
    font-size: 1.2rem;
    text-align: center;
    margin: 1rem auto 0;
    align-self: center;
    color: #fff;
    font-weight: 700;
    background-color: #00b9f5;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    &:hover {
      background-color: #0af895;
    }
  }
}
</style>
