<template>
  <div>
    <p>Your habits</p>
    <HabitCardsList>
      <HabitCard v-for="habit in habits" :key="habit.id" :habit="habit" @RemoveHabit="handleRemoveHabit" />
    </HabitCardsList>
    <SubmitHabitForm @submitHabitForm="handleHabitSubmit"/>
  </div>
</template>

<script>
import HabitCardsList from './HabitCardsList'
import HabitCard from './HabitCard'
import SubmitHabitForm from './SubmitHabitForm'

export default {
  components: {
    HabitCardsList,
    HabitCard,
    SubmitHabitForm
  },
  methods: {
    handleHabitSubmit(form) {
      this.habits.push({
        id: this.habits.length+1,
        name: form.habitName,
        color: "#bada55",
        track: [],
        weeklyTarget: form.habitTarget,
      })
    },
    handleRemoveHabit(habitId) {
      this.habits = this.habits.filter((habit) => habit.id !== habitId)
    }
  },
  data() {
      return {
          habits: [
            {
              id: 1,
              name: "wake up early",
              color: "#bada55",
              track: [],
              weeklyTarget: 5
            },
            {
              id: 2,
              name: "train javascript",
              color: "#bada55",
              track: [],
              weeklyTarget: 7
            },
            {
              id: 3,
              name: "work out",
              color: "#bada55",
              track: [],
              weeklyTarget: 3
            },
            {
              id: 4,
              name: "read books",
              color: "#bada55",
              track: [],
              weeklyTarget: 2
            },
            {
              id: 5,
              name: "drink beer",
              color: "#bada55",
              track: [],
              weeklyTarget: 5
            }
          ],
      }
  },
}
</script>

<style>
  p {
    margin: 20px 0 0 20px;
    font-size: 2em;
  }
  li {
    border: 1px solid grey;
    padding: 5px 0 5px 10px;
    font-size: 1.2em;
    margin: 5px 0px;
    display: block;
    list-style: none;
  }
  .el-checkbox-group {
    margin: 0 0 0 20px;
    display: inline-block;
  }
  .el-button {
    float: right;
    margin-right: 10px;
  }
</style>
