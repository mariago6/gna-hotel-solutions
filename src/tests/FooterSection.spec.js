import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import FooterSection from '../components/FooterSection.vue'

describe('FooterSection', () => {
  it('renders footer logo', () => {
    const wrapper = mount(FooterSection)
    const logo = wrapper.find('.footer-logo-image')

    expect(logo.exists()).toBe(true)
    expect(logo.attributes('alt')).toBe('GNA Hotel Solutions')
  })

  it('renders footer links', () => {
    const wrapper = mount(FooterSection)

    expect(wrapper.text()).toContain('Contacte')
    expect(wrapper.text()).toContain('Newsletter')
    expect(wrapper.text()).toContain('Treballa amb nosaltres')
    expect(wrapper.text()).toContain('Política de cookies')
    expect(wrapper.text()).toContain('Política de privacitat')
    expect(wrapper.text()).toContain('Avís legal')
  })

  it('renders credits', () => {
    const wrapper = mount(FooterSection)

    expect(wrapper.text()).toContain('Desenvolupat per')
    expect(wrapper.text()).toContain('GNA Hotel Solutions')
  })
})