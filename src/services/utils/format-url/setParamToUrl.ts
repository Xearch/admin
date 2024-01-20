type SetParamToUrl = {
  param_name: string
  param_value: string | number
  url?: string
}

export const setParamToUrl = ({ param_name, param_value, url }: SetParamToUrl): string => {
  let urlCurrent = window.location.href
  if (url) {
    urlCurrent = url
  }
  window.history.replaceState({}, '', `${urlCurrent}?${param_name}=${param_value}`)
  return `${urlCurrent}?${param_name}=${param_value}`
}
