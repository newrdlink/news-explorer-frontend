const REQ_CARDS_BOX = "cards"
const COUNT_CARDS = "count"

export const setCardsToLocSt = (cards) => localStorage.setItem(REQ_CARDS_BOX, JSON.stringify(cards))
export const getCardsFromLocSt = () => localStorage.getItem(REQ_CARDS_BOX)
export const removeCardsOfLocSt = () => localStorage.removeItem(REQ_CARDS_BOX)

export const setCountToLocSt = (count) => localStorage.setItem(COUNT_CARDS, count)
export const getCountFromLocSt = () => localStorage.getItem(COUNT_CARDS)
export const removeCountOfLocSt = () => localStorage.removeItem(COUNT_CARDS)