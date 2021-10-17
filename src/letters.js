export const makeVoucabularyLetters = () => {
  const voucabularyLetters = []
    for (let index = 65; index < 90; index++) {
      voucabularyLetters.push(String.fromCharCode(index))
    }
    return voucabularyLetters
}