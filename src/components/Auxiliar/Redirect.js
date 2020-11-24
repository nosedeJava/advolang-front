

export const redirectToSpecificRecom = (language, creator, recomId, history) => {
  localStorage.setItem("recommendation-id", recomId);
  history.push(`/${language}/${creator}/recommendations/${recomId}`)
}

export const redirectToRecomPageRoute = (language, history) => {

  history.push(`/${language}/recommendations`)

}
