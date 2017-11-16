<template>
  <el-form @submit.native.prevent="onSubmit">
    <el-form-item>
      <el-input placeholder="Please input" v-model="habitName"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input-number v-model="habitTarget" :min="1" :max="7"></el-input-number>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      habitName: "",
      habitTarget: 1
    }
  },
  methods: {
    onSubmit() {
      this.$emit("submitHabitForm", {
        habitName: this.habitName,
        habitTarget: this.habitTarget
      })
    }
  }
}
</script>
