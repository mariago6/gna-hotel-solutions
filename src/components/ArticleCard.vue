<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="article-card" :class="{ reverse: article.reverse }">
    <img :src="article.image" :alt="article.title" />

    <div class="article-content">
      <div class="tags">
        <span v-for="tag in article.tagLabels" :key="tag">
          {{ tag }}
        </span>
      </div>

      <h3>{{ article.title }}</h3>
      <p>{{ article.text }}</p>

      <a href="#">Més informació</a>
    </div>
  </article>
</template>
