export const closeEscPopup = (closeFunction) => {
  const close = (evt) => {
    if (evt.key === "Escape") {
      closeFunction()
    }
  }
  window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
}