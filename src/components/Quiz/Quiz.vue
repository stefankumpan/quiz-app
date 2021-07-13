<template>
  <div class="container">
    <div>
      <h2>{{ Quiz.title }}</h2>
    </div>
    <!-- Question and Answers -->
    <div v-show="!endQuiz" class="question-and-answers-container">
      <transition name="fade" mode="out-in">
        <div v-show="showQuiz" class="question">
          <span class="question-text">{{ Quiz.quiz[current].question }}</span>
        </div>
      </transition>

      <!-- answers -->
      <transition name="fade" mode="out-in">
        <ul v-show="showQuiz" class="answer-list">
          <li
            v-for="(answer, idx) in Quiz.quiz[current].answers"
            :key="idx"
            @click="handleSelectAnswer(idx)"
            class="answer-list__item"
            :class="{ selected: selected_answer == idx }"
          >
            <div class="background-color-letter">
              <span class="letter">{{ ConverNumberToLetter(idx) }}</span>
            </div>
            <span class="answer">{{ answer }}</span>
          </li>
        </ul>
      </transition>
      <button @click="NextTest" class="answer-submit">submit</button>

      <Progressbar :max="Quiz.quiz.length" :partialValue="progress_status" />
    </div>
    <transition name="fade" mode="out-in">
      <div v-show="endQuiz" class="question-and-answers-container quiz-end">
        <h3>Congratulations</h3>
        <p>You have answered {{ this.correct_answer_count }} of {{ this.Quiz.quiz.length }} questions correctly</p>
        <div class="quiz-badge-container">
          <img class="quiz-badge" src="/img/badge.png" alt="badge" />
        </div>
        <router-link to="/">Back to Home</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import Progressbar from '../Progressbar/Progressbar.vue';
export default {
  data() {
    return {
      current: 0,
      progress_status: 0,
      submit_answers: ['1', '2', '2'],
      selected_answer: null,
      showQuiz: true,
      endQuiz: false,
      correct_answer_count: 0,
      selected_quiz: 'html',
    };
  },
  computed: {
    Quiz() {
      return this.$store.getters.getQuiz(this.selected_quiz);
    },
  },
  components: {
    Progressbar,
  },
  methods: {
    // conver number to letter
    ConverNumberToLetter(number) {
      let alphabet = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ];
      return alphabet[number];
    },
    // set selected anser
    handleSelectAnswer(answer_index) {
      this.selected_answer = answer_index;
    },

    // submit answer
    NextTest() {
      let Quiz_length = this.Quiz.quiz.length;
      let Current_status = this.current;
      let correct = this.Quiz.quiz[Current_status].correct;
      // block continue if no answer is selected
      if (this.selected_answer === null) {
        return null;
      }
      // check current status is not higher than quiz length
      if (Current_status + 1 < Quiz_length) {
        this.handleCheckAnswer(this.selected_answer, correct);
        this.current += 1;
        this.progress_status = this.current;
      } else {
        console.log('else');
        this.progress_status = Quiz_length;
        this.handleCheckAnswer(this.selected_answer, correct);
        this.progress_status >= Quiz_length ? (this.endQuiz = true) : '';
      }
      // play animation for next question
      this.showQuiz = false;
      setTimeout(() => {
        this.showQuiz = true;
      }, 400);
      this.selected_answer = null;
    },
    handleCheckAnswer(answer, correct_answer) {
      answer === correct_answer ? (this.correct_answer_count += 1) : '';
    },
  },
   created() {
    console.log(this.$route.params.props);

      this.selected_quiz = this.$route.params.quizname;
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  max-width: 800px;
  padding: 0.5rem;
}

.question-and-answers-container {
  //   border: 1px solid #222;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.5);
  background-image: url('/img/hexagon.svg');
  background-size: cover;
  padding: 1rem;
  transition: 1s;
  .question {
    background-image: url('/img/sprinkle.svg');
    background-size: cover;
    background-position: center center;
    margin: 0 0 1rem 0;
    padding: 2rem 1rem;
    font-weight: 700;
    border-radius: 1rem;
    color: #fff;
    text-align: center;
  }
}

.answer-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  display: grid;
  grid-auto-rows: auto;
  gap: 1rem;
  cursor: pointer;
  .answer-list__item {
    display: grid;
    grid-template-columns: 50px calc(100% - 50px);
    border-radius: 2rem;
    overflow: hidden;
    vertical-align: middle;
    align-content: center;
    align-items: center;
    border: 1px solid #222;
    background-color: #33363a;

    color: white;
    gap: 0;

    &:hover {
      background-image: url('/img/sprinkle_hover.svg');
      background-size: cover;
      background-position: center center;
      background-color: #0af895;
      .background-color-letter {
        background-color: #0af895;
      }
    }
    .letter {
      padding: 0.5rem 0;
    }
    .background-color-letter {
      background-color: #00b9f5;
      height: 100%;
      display: grid;
      align-items: center;
      text-align: center;
      color: white;
      font-weight: 700;
    }
    .answer {
      display: block;
      padding: 0.7rem 0.5rem;
      height: 100%;
    }
  }
  .selected {
    .background-color-letter {
      background-color: #0af895;
    }
  }
}

.answer-submit {
  background-image: url('/img/sprinkle.svg');
  background-size: cover;
  background-position: center center;
  padding: 0.7rem 4rem;
  text-align: center;
  display: block;
  font-weight: 700;
  color: #fff;
  font-size: 1.5rem;
  border-radius: 2rem;
  border: none;
  text-transform: uppercase;
  margin: 0 auto 2.5rem;
  display: block;
  &:hover {
    box-shadow: inset 0px 2px 9px 0px rgba(0, 0, 0, 0.9);
    background-image: url('/img/sprinkle_hover.svg');
  }
}

.quiz-end {
  text-align: center;
  background-image: none;
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
  a{
    margin: 1rem;
    display: block;
    color: #00b9f5;
    &:hover{
      color: #0af895;
    }
  }
}
.quiz-badge-container {
  display: grid;
  align-items: center;
  justify-content: center;
  .quiz-badge {
    display: block;
    width: 150px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-200vh);
}
</style>
