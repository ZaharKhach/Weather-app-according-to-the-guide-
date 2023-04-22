function deleteCard(selector) {
    const prevCard = document.querySelector(selector);
    if (prevCard) prevCard.remove()
  }
export default deleteCard;