<script lang="ts" setup>
import FileUpload from "./components/FileUpload.vue";
import {ref} from "vue";
import StorageData from "./classes/StorageData";
import WorkSpace from "./components/WorkSpace.vue";

let data: StorageData | null = ref(null);

</script>

<template>
    <FileUpload
        v-if="!data"
        @fileLoaded="data = $event"
    />
    <section v-if="data" class="project">
      <WorkSpace :data="data"/>
    </section>
</template>

<style lang="scss">
section {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
section.project {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: calc(100% + 2rem);
}
</style>
