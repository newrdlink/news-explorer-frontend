const REQ_CARDS_BOX = "cards"

export const setCardsToLocSt = (cards) => localStorage.setItem(REQ_CARDS_BOX, JSON.stringify(cards))
export const getCardsFromLocSt = () => localStorage.getItem(REQ_CARDS_BOX)
export const removeCardsOfLocSt = () => localStorage.removeItem(REQ_CARDS_BOX)