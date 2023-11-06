import { removeSecondaryParam } from './removeSecondaryParam'

export const addMoreOneParamToUrl = (key_param: string, value_param: string): void => {
  removeSecondaryParam(key_param)

  const url = window.location.href
  window.history.replaceState({}, '', `${url}&${key_param}=${value_param}`)
}
