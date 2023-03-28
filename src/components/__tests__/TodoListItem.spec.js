import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TodoListItem from '../TodoListItem.vue'

describe('TodoListItem', () => {
  it('renders properly', () => {
    const wrapper = mount(TodoListItem, { props: { description: 'Hej', isCompleted: false, id: 3 } })
    expect(wrapper.text()).toContain('Hej')
  })
})
