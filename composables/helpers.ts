function shuffleArray(arr: Array<unknown>) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}
function takeRandoms(arr: Array<unknown>, n: number) {
  const raws: Array<unknown> = [...arr]
  const result: Array<unknown> = []
  if (n < arr.length)
    return raws
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * raws.length)
    result.push(raws[randomIndex])
    raws.slice(randomIndex, 1)
  }
  return result
}
export {
  shuffleArray,
  takeRandoms,
}
