export const removeFirstParam = (param_name: string): void => {
  const url = window.location.href
  const [urlWithoutParams] = url.split(`?${param_name}=`)
  window.history.pushState({}, '', urlWithoutParams)
}
