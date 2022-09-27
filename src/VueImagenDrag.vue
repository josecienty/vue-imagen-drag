<template>
  <div>
    <div
      class="drag-area"
      :id="'drag-' + id"
      @click="openFile()"
      :style="{
        height: height,
      }"
      :class="value ? 'no-border' : ''"
    >
      <template v-if="!value">
        <div class="icon">
          <i class="fas fa-images"></i>
        </div>
        <span class="header"> Seleccione una imagen </span>
        <span class="support">Soportado: png, jpeg, jpg</span>
      </template>
      <img :src="value" v-else />
    </div>
    <input
      type="file"
      :id="id"
      hidden
      @change="fileUpload"
      accept=".jpg, .jpeg, .png"
    />
  </div>
</template>
<style scoped>
.drag-area {
  width: 100%;
  min-height: 30px;
  height: auto;
  border: 3px dashed #7e8082;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px auto;
  cursor: pointer;
}
.drag-area .icon {
  font-size: 50px;
  color: gray;
  margin: 0px;
  padding: 0px;
}
.drag-area .header {
  font-size: 15px;
  font-weight: 500;
  color: #2e567e;
}
.drag-area .support {
  font-size: 12px;
  color: gray;
  margin: 0px 0px 10px 0px;
}
.drag-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.drag-area.active {
  border: 2px solid #2e567e;
}
.drag-area.no-border {
  border: none;
}
</style>
<script src="./scripts.js" />
