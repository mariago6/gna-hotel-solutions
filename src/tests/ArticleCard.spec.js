import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ArticleCard from '../components/ArticleCard.vue'

const article = {
  title: 'Test article title',
  text: 'Test article description.',
  image: '/test-image.jpg',
  tags: ['category-one'],
  tagLabels: ['Category One'],
  reverse: false
}

describe('ArticleCard', () => {
  it('renders article content correctly', () => {
    const wrapper = mount(ArticleCard, {
      props: {
        article
      }
    })

    expect(wrapper.text()).toContain(article.title)
    expect(wrapper.text()).toContain(article.text)

    article.tagLabels.forEach((tagLabel) => {
      expect(wrapper.text()).toContain(tagLabel)
    })

    expect(wrapper.find('img').attributes('src')).toBe(article.image)
    expect(wrapper.find('img').attributes('alt')).toBe(article.title)
  })

  it('adds reverse class when article.reverse is true', () => {
    const wrapper = mount(ArticleCard, {
      props: {
        article: {
          ...article,
          reverse: true
        }
      }
    })

    expect(wrapper.classes()).toContain('reverse')
  })

  it('renders all article tag labels', () => {
    const tagLabels = ['Category One', 'Category Two']

    const wrapper = mount(ArticleCard, {
      props: {
        article: {
          ...article,
          tags: ['category-one', 'category-two'],
          tagLabels
        }
      }
    })

    tagLabels.forEach((tagLabel) => {
      expect(wrapper.text()).toContain(tagLabel)
    })
  })
})