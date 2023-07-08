<script lang="ts" setup>

import {ref} from "vue";
import CardList from "./CardList.vue";
import CardEdit from "./CardEdit.vue";
import CardData from "../classes/CardData";

const props = defineProps(["data"]);

let currentScreen = ref("cards-list");
let selectedCard = ref(null);

function handleCardCreate() {
  selectedCard.value = new CardData({});
  currentScreen.value = 'create-card';
}

function handleCardEdit(card: CardData) {
  switch (currentScreen.value) {
    case 'create-card':
      props.data.cards.push(card);
      currentScreen.value = 'cards-list';
      break;
    case "edit-card":
      const i = props.data.cards.findIndex(c => c.id === selectedCard.value.id);
      props.data.cards[i] = card;
      currentScreen.value = 'cards-list';
      return;
  }
}

function handleCardDelete(card: CardData) {
  if (!confirm("Are you sure you want to delete this card?")) return;
  const i = props.data.cards.findIndex(c => c.id === card.id);
  props.data.cards.splice(i, 1);
}

function saveToFile() {
  const data = JSON.stringify(props.data);
  const blob = new Blob([data], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.cards';
  a.click();
  URL.revokeObjectURL(url);
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
          @click="handleCardCreate"
          @keydown.enter.space="handleCardCreate"
          :class="{active: currentScreen === 'create-card'}"
      >
        Create card
      </div>
      <div
          tabindex="1"
          @click="saveToFile"
          @keydown.enter.space="saveToFile"
      >
        Save to file
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
            @deleteCard="handleCardDelete"
        />
      </keep-alive>
      <CardEdit
          v-if="currentScreen === 'create-card' || currentScreen === 'edit-card'"
          :card="selectedCard"
          @cardEdited="handleCardEdit"
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
    user-select: none;
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