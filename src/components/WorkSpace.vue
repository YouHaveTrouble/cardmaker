<script lang="ts" setup>

import {ref} from "vue";
import CardList from "./CardList.vue";
import CardEdit from "./CardEdit.vue";
import CardData from "../classes/CardData";

const props = defineProps(["data"]);

let currentScreen = ref("cards-list");
let selectedCard = ref(null);

</script>

<template>
  <section class="workspace">
    <nav>
      <div
          tabindex="1"
          @click="currentScreen = 'cards-list'"
          @keydown.enter.space="currentScreen = 'cards-list'"
          :class="{active: currentScreen === 'cards-list'}"
      >
        Cards list
      </div>
      <div
          tabindex="1"
          @click="() => {
            selectedCard = new CardData({});
            currentScreen = 'create-card';
          }"
          @keydown.enter.space="currentScreen = 'create-card'"
          :class="{active: currentScreen === 'create-card'}"
      >
        Create card
      </div>
    </nav>
    <keep-alive>
      <CardList
          v-if="currentScreen === 'cards-list'"
          :cards="data.cards"
      />
    </keep-alive>
    <CardEdit
        v-if="currentScreen === 'create-card' || currentScreen === 'edit-card'"
        :card="selectedCard"
    />
  </section>
</template>

<style scoped lang="scss">
section.workspace {
  height: calc(100% - 4rem);
  nav {
    width: 100%;
    height: 2rem;
    padding: 0;
    margin: 0;
    background-color: #1f1f1f;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    & > div {
      height: 100%;
      padding-inline: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      &:hover {
        background-color: rgba(255,255,255, 0.1);
      }
      &.active {
        background-color: rgba(255,255,255, 0.2);
        cursor: default;
      }
    }
  }
}
</style>