export const guid = () => {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  let str = ''

  for (let i = 0; i < 4; i++) {
    str += s4() + s4() + (i !== 3 ? '-' : '')
  }

  return str
}