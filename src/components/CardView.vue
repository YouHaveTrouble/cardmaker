<script lang="ts" setup>

const props = defineProps(["card"]);

</script>

<template>
<article class="card">
  <div class="image">
    <img :src="card.image" alt="Card image" draggable="false">
  </div>
  <div class="name">
    {{ card.name }}
  </div>
  <pre class="description">{{ card.description }}</pre>
</article>
</template>

<style scoped lang="scss">
article.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 18rem;
  height: 25rem;
  gap: 0.8rem;
  background-color: #a99786;
  padding: 0.5rem;
  color: black;
  border-radius: 0.2rem;
  .image {
    width: 100%;
    min-height: 12.5rem;
    max-height: 12.5rem;
    border: 1px solid #000;
    background-color: rgba(0,0,0, 0.2);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    font-size: 1.2rem;
    font-weight: bold;
    padding-inline: 0.25rem;
    text-align: center;
    border: 1px solid #000;
    background-color: rgba(0,0,0, 0.2);
    display: block;
    word-break: break-all;
    font-family: monospace;
  }
  .description {
    margin: 0;
    font-size: 1rem;
    border: 1px solid #000;
    height: 100%;
    max-height: 6.6rem;
    max-width: 100%;
    padding: 0.25rem;
    background-color: rgba(0,0,0, 0.2);
    word-break: break-word;
    white-space: pre-wrap;
    font-family: monospace;
    overflow-y: auto;
  }
}
</style>