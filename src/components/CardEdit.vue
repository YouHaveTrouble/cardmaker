<script setup>
import CardView from "@/components/CardView.vue";

const props = defineProps(["card"]);

</script>

<template>
  <section>
    <div>
      <div class="form-input">
        <label for="card-name">Card name</label>
        <input
            id="card-name"
            type="text"
            v-model="card.name"
            maxlength="48"
        />
      </div>
      <div class="form-input">
        <label for="card-description">Card description</label>
        <textarea
            id="card-description"
            v-model="card.description"
            maxlength="140"
        />
      </div>
    </div>
    <div>
      <card-view
          :card="card"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding-block: 1rem;
  div {
    width: 50%;
    min-width: 25rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .form-input {
      display: flex;
      flex-direction: column;
      height: auto;
      gap: 0.1rem;
      label {
        font-size: 1.2rem;
        font-weight: bold;
      }
      input {
        font-size: 1rem;
        padding: 0.5rem;
        border-radius: 0.2rem;
        border: 1px solid #000;
        width: 100%;
      }
      textarea {
        padding: 0.5rem;
        resize: none;
        min-height: 6rem;
        border-radius: 0.2rem;
        border: 1px solid #000;
        width: 100%;
      }
    }
  }
}
</style>