<template>
  <transition name="fade" mode="out-in">
    <div v-show="ShowContent" class="game-container">
      <p class="question">{{ QuizPosition + 1 + '/' + QuizData.length }} | {{ QuizData[QuizPosition].question }}</p>
      <!-- Answers -->
      <transition name="fade" mode="out-in">
        <div v-if="ShowAnswers">
          <div class="answers-box">
            <button
              v-for="(x, idx) in QuizData[QuizPosition].answers"
              :key="idx"
              @click="handleSelectAnswer(idx)"
              :class="[{ selected: SelectedAnswer == idx }, { correct_answer: ShowCorrectAnser == idx }, 'answer-btn']"
            >
              <span class="answer-option">{{ idx }} </span>
              <span class="anwser-text">{{ x }}</span>
            </button>
          </div>
          <div>
            <button class="login-answer-btn" @click="handleCheckAnswerAndNext" :disabled="SelectedAnswer === null">Antwort Einlog</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
  
</template>

<script>
export default {
  data() {
    return {
      SelectedAnswer: null,
      QuizPosition: 0,
      CorrectAnswers: [],
      ShowCorrectAnser: 0,
      ShowContent: false,
      ShowAnswers: false,
    };
  },
  props: {
    QuizData: {
      type: Array,
      default() {
        return [
          {
            question: 'Hier kommt die Frage, Das hier ist ein langer Text damit man auch längere Fragen Sieht',
            answers: {
              A: 'Antwort 1',
              B: 'Antwort 2',
              C: 'Antwort 3',
              D: 'Antwort 4',
            },
            correct: 'A',
          },
        ];
      },
    },
  },
  methods: {
    handleSelectAnswer(AnswerOption) {
      console.log(AnswerOption);
      this.SelectedAnswer = AnswerOption;
    },
    handleCheckAnswerAndNext() {
      let QuizSum = this.QuizData.length;
      console.log(QuizSum);
      this.ShowCorrectAnser = this.QuizData[this.QuizPosition].correct;
      if (this.QuizData[this.QuizPosition].correct === this.SelectedAnswer) {
        this.CorrectAnswers.push(this.SelectedAnswer);
        console.log('Richtig');
      } else {
        console.log('Falsch');
      }
      if (this.QuizPosition + 1 < QuizSum) {
        setTimeout(() => {
          this.QuizPosition += 1;
          this.SelectedAnswer = null;
          this.ShowCorrectAnser = null;
          this.handleTransition();
          this.handleTransition();
        }, 3000);
      } else {
        console.log('Quiz END');
      }
    },

    handleTransition() {
      if (this.ShowContent === false) {
        setTimeout(() => {
          this.ShowContent = true;
        }, 500);
        setTimeout(() => {
          this.ShowAnswers = true;
        }, 700);
      } else {
        this.ShowAnswers = false;
        this.ShowContent = false;
      }
    },
 
  },
  mounted() {
    this.handleTransition();
  },
};
</script>

<style lang="scss">
.game-container {
  border: 0.2rem solid #222;
  margin: 1rem 0.6rem;
  max-width: 780px;
  padding: 1.5rem;
  border-radius: 2rem;
}
.question {
  border-bottom: 0.2rem solid #222;
  margin: 0.4rem 0 1rem;
  font-size: 1.2rem;
}

.answers-box {
  display: grid;
  grid-gap: 1rem;
}
.login-answer-btn:disabled {
  background-color: #ccc;
  color: #fff;
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0);
  }
}
.login-answer-btn,
.answer-btn {
  padding: 1rem;
  display: block;
  font-weight: 700;
  background-color: #00ffff;
  border-radius: 2rem;
  border: none;
  color: #222;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0);
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
}
.login-answer-btn {
  padding: 1rem 3rem;
  text-transform: uppercase;
  margin: 1rem auto;
}
.selected {
  background-color: rgb(255, 190, 70);
}
.answer-btn {
  width: 100%;
  text-align: start;
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 1rem;
  align-items: center;
  border: 3px solid transparent;
}
.answer-option {
  display: grid;
  justify-content: center;
  align-content: center;
  border-radius: 50%;
  padding: 0.3rem;
  border: 2px solid #222;
  width: 4ch;
  height: 4ch;
}
@media (min-width: 700px) {
  .game-container {
    border: 0.2rem solid #222;
    margin: 1rem auto;
    max-width: 780px;
    padding: 1.5rem;
    border-radius: 2rem;
  }
  .answers-box{

  grid-template-columns: 1fr 1fr;
  }

}
.correct_answer {
  border: 3px #222 dotted;
  background-color: greenyellow;
  animation: blink 2s;
  animation-iteration-count: 100;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
