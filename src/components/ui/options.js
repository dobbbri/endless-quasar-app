const defaults = {
  box: { dense: false, class: 'bg-white q-mt-md overflow-hidden ', style: 'border-radius: 12px' },
  btn: { rounded: true, ripple: true, noCaps: true },
  chip: { dense: true },
  icon: { size: 'md', dense: true },
  input: { class: 'text-weight-medium' }
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
      stackLabel: false,
      hideBottomSpace: false,
      color: 'primary',
      textColor: 'blue-9',
      ...defaults.input
    },
    search: {
      dense: true,
      rounded: true,
      autofocus: true,
      outlined: true,
      class: 'q-my-md',
      clearable: true,
      color: 'secondary',
      textColor: 'blue-9',
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
    page: { class: 'page bg-blue-grey-1 absolute-top fit shadow-4' },
    header: {
      class: 'page-header bg-blue-grey-1 q-header q-layout__section--marginal absolute-top text-dark bottom-border'
    },
    body: { class: 'page-body absolute-top fit' },
    footer: { class: 'fixed-bottom bg-blue-grey-1 ' }
  },

  utils: {
    box: { ...defaults.box },
    chip: { outline: true, color: 'secondary', class: 'text-weight-medium q-ma-none', ...defaults.chip },
    icon: { color: 'primary', ...defaults.icon }
  }
}

export default options
