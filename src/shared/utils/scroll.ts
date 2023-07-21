export function getIntoViewElement(elementId) {
  const about = document.getElementById(elementId)

  about && about.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
