<template>
  <span>
    <li>
      <el-progress type="circle" text-inside=false width="40" :percentage="habit.track.length / habit.weeklyTarget*100"></el-progress>
      <span>{{ habit.name }}</span>
      <el-checkbox-group v-model="habit.track">
        <el-checkbox v-for="weekday in weekdays" :key="weekday" :label="weekday"/></el-checkbox>
      </el-checkbox-group>
      <el-button @click="remove">
        <i class="el-icon-delete" ></i>
      </el-button>
    </li>
  </span>
</template>

<script>
export default {
  props: {
    habit: Object,
    weekdays: Array
  },
  methods: {
    remove() {
      this.$emit("RemoveHabit", this.habit.id)
    }
  }
}
</script>

