import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import IntroSection from '../components/IntroSection.vue'

describe('IntroSection', () => {
  it('renders the intro title', () => {
    const wrapper = mount(IntroSection)

    expect(wrapper.text()).toContain('GNA Hotel Solutions')
    expect(wrapper.text()).toContain("l'èxit online del teu hotel")
  })

  it('renders intro paragraphs', () => {
    const wrapper = mount(IntroSection)

    expect(wrapper.findAll('p').length).toBeGreaterThan(0)
  })
})