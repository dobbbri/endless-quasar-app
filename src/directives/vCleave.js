import Cleave from 'cleave.js'

const vCleave = {
  mounted: (el, binding) => {
    const element = el.tagName === 'INPUT' ? el : el.querySelector('input')
    element.cleave = new Cleave(element, binding.value || {})
  },
  updated: (el) => {
    const element = el.tagName === 'INPUT' ? el : el.querySelector('input')
    const event = new Event('input', { bubbles: true })
    requestAnimationFrame(() => {
      element.value = element.cleave.properties.result
      element.dispatchEvent(event)
    })
  }
}

export default vCleave
