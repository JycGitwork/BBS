<template>
  <el-upload
    name="file"
    :show-file-list="false"
    accept=".png,.PNG,.jpg,.JPG,.jpeg,.JPEG,.gif,.GIF,.bmp,.BMP"
    :multiple="false"
    :http-request="uploadImage"
  >
    <div class="cover-upload-btn">
      <template v-if="localPreview">
        <img :src="localFile" />
      </template>
      <template v-else>
        <img
          :src="
            (imageUrlPrefix ? imageUrlPrefix : proxy.globalInfo.imageUrl) +
            modelValue.imageUrl
          "
          v-if="modelValue && modelValue.imageUrl"
        />
        <span class="iconfont icon-add" v-else></span>
      </template>
    </div>
  </el-upload>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";
const { proxy } = getCurrentInstance();
const props = defineProps({
  imageUrlPrefix: {
    type: String,
  },
  modelValue: {
    type: Object,
    default: null,
  },
});

const localPreview = ref(false);
const localFile = ref();
const emit = defineEmits();
const uploadImage = async (file) => {
  file = file.file;
  let img = new FileReader();
  img.readAsDataURL(file);
  img.onload = ({ target }) => {
    localFile.value = target.result; //将img转化为二进制数据
  };
  localPreview.value = true;
  emit("update:modelValue", file);
};
</script>

<style lang="scss">
.cover-upload-btn {
  background: url(../assets/cover_bg.png);
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  .iconfont {
    font-size: 50px;
    color: rgb(164, 164, 164);
  }
  img {
    width: 100%;
  }
}
</style>