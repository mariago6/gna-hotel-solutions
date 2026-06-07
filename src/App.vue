<script setup>
import { computed, ref } from 'vue'

import HeaderHero from './components/HeaderHero.vue'
import IntroSection from './components/IntroSection.vue'
import FilterBar from './components/FilterBar.vue'
import ArticleCard from './components/ArticleCard.vue'
import FooterSection from './components/FooterSection.vue'

import { articles } from './data/articles'

const selectedFilter = ref('all')

const filteredArticles = computed(() => {
  if (selectedFilter.value === 'all') {
    return articles
  }

  return articles.filter((article) =>
    article.tags.includes(selectedFilter.value)
  )
})

const handleFilterChange = (option) => {
  selectedFilter.value = option
}
</script>

<template>
  <HeaderHero />
  <IntroSection />
  <FilterBar @filter-change="handleFilterChange" />

  <main class="articles">
    <ArticleCard
      v-for="article in filteredArticles"
      :key="article.id"
      :article="article"
    />
  </main>

  <FooterSection />
</template>