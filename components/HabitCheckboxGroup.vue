<template>
  <el-checkbox-group v-model="habit.track">
    <el-checkbox v-for="weekday in weekdays" :key="weekday" :label="weekday"/></el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  data() {
    return {
      weekdays: ["Mon", "Tue", "Wed", "Thu", "Sat", "Sun"],
    }
  },
  props: {
    habit: Object,
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
