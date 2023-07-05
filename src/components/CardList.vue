<script lang="ts" setup>
import CardView from "./CardView.vue";
import CardData from "../classes/CardData";

const props = defineProps(["cards"]);
const emit = defineEmits(["cardSelected"]);

function selectCard(card: CardData) {
  emit("cardSelected", card);
}

</script>

<template>
<section>
  <card-view
      v-for="card in cards"
      :key="card.id"
      :card="card"
  />
</section>
</template>

<style scoped lang="scss">
section {
  width: calc(100% - 2rem);
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  gap: 1rem;
}
</style>