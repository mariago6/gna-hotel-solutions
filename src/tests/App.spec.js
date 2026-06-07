import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'
import { filterOptions } from '../data/filterOptions'
import { articles } from '../data/articles'

describe('App', () => {
  it('renders all articles by default', () => {
    const wrapper = mount(App)

    expect(wrapper.findAll('.article-card')).toHaveLength(articles.length)
  })

  it('filters articles when selecting a filter option', async () => {
    const filterOption = filterOptions.find((option) => option.value !== 'all')
    const expectedArticles = articles.filter((article) =>
      article.tags.includes(filterOption.value)
    )

    const wrapper = mount(App)

    await wrapper.find('.custom-select-trigger').trigger('click')

    const optionButtons = wrapper.findAll('.custom-select-option')
    const optionButton = optionButtons.find((button) =>
      button.text().includes(filterOption.label)
    )

    await optionButton.trigger('click')

    expect(wrapper.findAll('.article-card')).toHaveLength(expectedArticles.length)
  })
})