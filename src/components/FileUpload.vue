<script lang="ts" setup>

import StorageData from "../classes/StorageData";
import {ref} from "vue";

const emit = defineEmits(["fileLoaded"]);
let loading = ref(false);

async function onFileUploaded(event: any) {
  loading.value = true;
  const file = event?.target?.files[0];
  try {
    const content = await file.text();
    const data = JSON.parse(content);

    const storageData = new StorageData(data);

    emit("fileLoaded", storageData);
  } catch (e) {
    console.error("Invalid file format")
  }
  loading.value = false;
}

function createNewProject() {
  if (loading.value) return;
  emit("fileLoaded", new StorageData({}));
}

function clickOnElement(event: any) {
  event?.target?.click();
}

</script>

<template>
  <section>
    <input
        name="file"
        type="file"
        id="file"
        @input="onFileUploaded($event)"
        accept=".cards"
        :disabled="loading"
    >
    <label
        for="file"
        tabindex="0"
        @keydown.enter.space="clickOnElement($event)"
    > Upload your file</label>
    <button
        class="new-project"
        type="button"
        @click="createNewProject()"
        @keydown.enter.space="clickOnElement($event)"
        :disabled="loading"
    >Create new project</button>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 2rem;
}
input[name="file"] {
  display: none;
}
label[for="file"] {
  display: block;
  padding: 1rem;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.1s;
  font-size: 1.2rem;
  &:hover {
    background-color: rgba(255,255,255, 0.1);
  }
}
.new-project {
  background-color: transparent;
  padding: 1rem;
  border: 1px solid #ccc;
  color: #f5f5f5;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.1s;
  &:hover {
    background-color: rgba(255,255,255, 0.1);
  }
}
</style>