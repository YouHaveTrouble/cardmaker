<script lang="ts" setup>
import CardView from "./CardView.vue";

const props = defineProps(["cards"]);
const emit = defineEmits(["cardSelected"]);

</script>

<template>
<section>
  <div class="list-element"
       v-for="card in cards"
       :key="card.id">
    <card-view
        :card="card"
    />
    <div class="options">
      <button
          type="button"
      >
        Edit
      </button>
    </div>
  </div>

</section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  .list-element {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    .options {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      button {
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
    }
  }
}
</style>