<template>
  <div
    class="avatar"
    :style="{
      width: width + 'px',
      height: width + 'px',
      'border-radius': width / 2 + 'px',
    }"
  >
    <img :src="proxy.globalInfo.avatarUrl + userId" @click="goToUcenter" />
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const props = defineProps({
  userId: {
    type: String,
  },
  width: {
    type: Number,
    default: 60,
  },
  addLink: {
    type: Boolean,
    default: true,
  },
});

const goToUcenter = () => {
  if (props.addLink) {
    window.open(proxy.globalInfo.webDomain + "user/" + props.userId, "_blank");
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  background: rgb(238, 238, 238);
  align-items: center;
  overflow: hidden;
  img {
    max-width: 100%;
  }
  .no-login {
    width: 100%;
    text-align: center;
    font-size: 13px;
  }
}
</style>
