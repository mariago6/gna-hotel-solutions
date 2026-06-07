import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import FilterBar from '../components/FilterBar.vue'
import { filterOptions } from '../data/filterOptions'

describe('FilterBar', () => {
  it('renders the filter label and default option', () => {
    const wrapper = mount(FilterBar)
    const defaultOption = filterOptions[0]

    expect(wrapper.text()).toContain('Filtrar per')
    expect(wrapper.text()).toContain(defaultOption.label)
  })

  it('opens the dropdown when clicking the trigger', async () => {
    const wrapper = mount(FilterBar)

    await wrapper.find('.custom-select-trigger').trigger('click')

    expect(wrapper.find('.custom-select-options').exists()).toBe(true)
    expect(wrapper.find('.custom-select').classes()).toContain('is-open')
  })

  it('renders all filter options', async () => {
    const wrapper = mount(FilterBar)

    await wrapper.find('.custom-select-trigger').trigger('click')

    const optionButtons = wrapper.findAll('.custom-select-option')

    expect(optionButtons).toHaveLength(filterOptions.length)

    filterOptions.forEach((option) => {
      expect(wrapper.text()).toContain(option.label)
    })
  })

  it('emits filter-change when an option is selected', async () => {
    const selectedOption = filterOptions.find((option) => option.value !== 'all')
    const wrapper = mount(FilterBar)

    await wrapper.find('.custom-select-trigger').trigger('click')

    const optionButtons = wrapper.findAll('.custom-select-option')
    const optionButton = optionButtons.find((button) =>
      button.text().includes(selectedOption.label)
    )

    await optionButton.trigger('click')

    expect(wrapper.emitted('filter-change')).toBeTruthy()
    expect(wrapper.emitted('filter-change')[0]).toEqual([selectedOption.value])
  })

  it('closes the dropdown after selecting an option', async () => {
    const wrapper = mount(FilterBar)

    await wrapper.find('.custom-select-trigger').trigger('click')

    const optionButtons = wrapper.findAll('.custom-select-option')
    await optionButtons[1].trigger('click')

    expect(wrapper.find('.custom-select-options').exists()).toBe(false)
    expect(wrapper.find('.custom-select').classes()).not.toContain('is-open')
  })
})