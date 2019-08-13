function getTitle(vm) {
  const { title } = vm.$options
  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title
  }
}

function getDescription(vm) {
  const { description } = vm.$options
  if (description) {
    return typeof description === 'function'
      ? description.call(vm)
      : description
  }
}

const serverMetaMixin = {
  created() {
    const title = getTitle(this)
    const description = getDescription(this)
    if (title) {
      this.$ssrContext.title = title
    }
    if (description) {
      this.$ssrContext.description = description
    }
  }
}

const clientMetaMixin = {
  mounted() {
    const title = getTitle(this)
    const description = getDescription(this)
    if (title) {
      document.title = title
    }
    if (description) {
      document.description = description
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverMetaMixin
  : clientMetaMixin
