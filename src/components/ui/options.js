const defaults = {
  box: { textColor: 'blue-gray-8', class: 'bg-white q-mt-md bottom-border' },
  btn: { rounded: true, ripple: true, noCaps: true },
  chip: { dense: true },
  icon: { size: 'md', dense: true },
  input: { color: 'primary', class: 'text-weight-medium' }
}

const options = {
  btns: {
    basic: { color: 'primary', unelevated: true, ...defaults.btn },
    form: { outline: true, class: 'bg-white', textColor: 'primary', ...defaults.btn },
    icon: { flat: true, color: 'primary', size: 'md', dense: true, ...defaults.btn }
  },

  forms: {
    input: {
      dense: false, class: 'q-mb-sm', stackLabel: false, hideBottomSpace: false, textColor: 'blue-9', ...defaults.input
    },
    search: {
      dense: true, outlined: true, class: 'q-my-md', clearable: true, textColor: 'blue-9', ...defaults.input
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
    header: { class: 'page-header q-header q-layout__section--marginal absolute-top bg-white text-dark bottom-border' },
    body: { class: 'page-body absolute-top fit' },
    footer: { class: 'fixed-bottom' }
  },

  utils: {
    box: { ...defaults.box },
    chip: { outline: true, class: 'text-body2', ...defaults.chip },
    icon: { color: 'primary', ...defaults.icon }
  }
}

export default options
