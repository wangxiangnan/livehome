export function triggerDownLoad (url: string, name: string): void {
  let a = document.createElement('a')
  a.href = url
  a.download = name
  a.click()
}
