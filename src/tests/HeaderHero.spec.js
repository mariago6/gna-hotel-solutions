import { afterEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HeaderHero from '../components/HeaderHero.vue'

describe('HeaderHero', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    window.scrollY = 0
  })

  it('renders hero title and navigation links', () => {
    const wrapper = mount(HeaderHero)

    expect(wrapper.text()).toContain('GNA HOTEL SOLUTIONS')
    expect(wrapper.text()).toContain('Hotel')
    expect(wrapper.text()).toContain('Ofertas')
    expect(wrapper.text()).toContain('Reservar')
  })

  it('does not apply scrolled class by default', () => {
    const wrapper = mount(HeaderHero)

    expect(wrapper.find('.header').classes()).not.toContain('header-scrolled')
  })

  it('applies scrolled class when user scrolls down', async () => {
    Object.defineProperty(window, 'scrollY', {
      value: 100,
      writable: true
    })

    const wrapper = mount(HeaderHero)

    window.dispatchEvent(new Event('scroll'))
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.header').classes()).toContain('header-scrolled')
  })

  it('renders a logo image with alt text', () => {
    const wrapper = mount(HeaderHero)
    const logo = wrapper.find('.logo-image')

    expect(logo.exists()).toBe(true)
    expect(logo.attributes('alt')).toBe('GNA Hotel Solutions')
  })
})