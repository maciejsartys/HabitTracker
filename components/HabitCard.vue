<template>
  <span>
    <li>
      <HabitProgressbar :habit="habit" />
      <span>{{ habit.name }}</span>
      <HabitCheckboxGroup :habit="habit" />
      <el-button @click="remove">
        <i class="el-icon-delete" ></i>
      </el-button>
    </li>
  </span>
</template>

<script>
import HabitCheckboxGroup from './HabitCheckboxGroup'
import HabitProgressbar from './HabitProgressbar'

export default {
  components: {
    HabitCheckboxGroup,
    HabitProgressbar
  },
  props: {
    habit: Object
  },
  methods: {
    remove() {
      this.$emit("RemoveHabit", this.habit.id)
    }
  }
}
</script>

