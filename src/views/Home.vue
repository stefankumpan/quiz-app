<template>
  <div class="home">
    <Quiz />
  </div>
</template>

<script>
// @ is an alias to /src
import Quiz from '@/components/Quiz/Quiz.vue'

export default {
  name: 'Home',
  components: {
    Quiz
  }
}
</script>
