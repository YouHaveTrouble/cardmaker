<script lang="ts" setup>
import FileUpload from "./components/FileUpload.vue";
import {ref} from "vue";
import StorageData from "./classes/StorageData";
import WorkSpace from "./components/WorkSpace.vue";

let data: StorageData | null = ref(null);

</script>

<template>
  <main>
    <FileUpload
        v-if="!data"
        @fileLoaded="data = $event"
    />
    <section v-if="data" class="project">
      <WorkSpace :data="data"/>
    </section>
  </main>
</template>

<style lang="scss">
main {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
section.project {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
