<template>
  <el-progress type="circle" text-inside=false width="40" :percentage="percentage"></el-progress>
</template>

<script>
export default {
  data() {
    return {
      object_width: 40
    }

  },
  props: {
    habit: Object,
  },
  methods: {
  },
  computed: {
    percentage() {
      return (this.habit.track.length / this.habit.weeklyTarget)*100;
    }
  }
}
</script>

<style scoped>
</style>
