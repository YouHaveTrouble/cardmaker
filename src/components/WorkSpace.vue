<script lang="ts" setup>

import {ref} from "vue";
import CardList from "./CardList.vue";
import CardEdit from "./CardEdit.vue";
import CardData from "../classes/CardData";

const props = defineProps(["data"]);

let currentScreen = ref("cards-list");
let selectedCard = ref(null);

function handleCardEdit(card: CardData) {

  switch (currentScreen.value) {
    case 'create-card':
      props.data.cards.push(card);
      currentScreen.value = 'cards-list';
      break;
    case "edit-card":
      const i = props.data.cards.findIndex(c => c.id === selectedCard.id);
      props.data.cards[i] = card;
      currentScreen.value = 'cards-list';
      return;
  }
}

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
    <main>
      <keep-alive>
        <CardList
            v-if="currentScreen === 'cards-list'"
            :cards="data.cards"
            @editCard="card => {
              selectedCard = card;
              currentScreen = 'edit-card';
            }"
        />
      </keep-alive>
      <CardEdit
          v-if="currentScreen === 'create-card' || currentScreen === 'edit-card'"
          :card="selectedCard"
          @card-edited="handleCardEdit"
      />
    </main>
  </section>
</template>

<style scoped lang="scss">
section.workspace {
  nav {
    width: 100%;
    max-width: 100vw;
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
  main {
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 2rem);
    padding-top: 1rem;
  }
}
</style>