import { removeMainParam } from './removeMainParam'

export const setParamToUrl = (param_name: string, param_value: string): void => {
  removeMainParam(param_name)

  const url = window.location.href
  window.history.replaceState({}, '', `${url}?${param_name}=${param_value}`)
}
