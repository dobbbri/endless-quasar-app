const defaults = {
  btn: { rounded: true, ripple: true, noCaps: true },
  chip: { dense: true },
  icon: { size: 'md', dense: true },
  input: { color: 'primary' }
}

const options = {
  btns: {
    basic: { color: 'primary', unelevated: true, ...defaults.btn },
    form: { outline: true, class: 'bg-white', textColor: 'primary', ...defaults.btn },
    icon: { flat: true, color: 'primary', size: 'md', dense: true, ...defaults.btn }
  },

  forms: {
    input: {
      dense: false,
      class: 'q-mb-sm',
      stackLabel: true,
      hideBottomSpace: true,
      textColor: 'blue-grey-10',
      ...defaults.input
    },
    search: {
      dense: true,
      rounded: true,
      outlined: true,
      class: 'q-my-sm',
      rounded: true,
      clearable: true,
      textColor: 'blue-grey-10',
      ...defaults.input
    },
    checkbox: { dense: false, class: 'q-my-xs', keepColor: true, hideBottomSpace: true, ...defaults.input },
    toggle: { dense: false, class: 'q-my-xs', keepColor: true, hideBottomSpace: true, ...defaults.input }
  },

  lists: {
    list: { dense: true, class: 'q-my-sm' },
    item: { clickable: true, ripple: true }
  },

  pages: {
    page: { class: 'page absolute-top fit bg-blue-grey-1 shadow-4' },
    header: { class: 'page-header q-header q-layout__section--marginal absolute-top bg-white text-dark' },
    body: { class: 'page-body absolute-top fit' },
    footer: { class: 'fixed-bottom bg-blue-grey-1' }
  },

  utils: {
    chip: { outline: true, class: 'text-body2', ...defaults.chip },
    icon: { color: 'primary', ...defaults.icon }
  }
}

export default options
