export const unicode = {
  zeroWithJoiner: /\u200D/,
  regionalIndicators: /\uD83C[\uDDE6-\uDDFF]/,
  emojiWithColorModifiers: /[\u261D-\u26F9\u270A-\u270D]|\uD83C[\uDF85-\uDFFF]|\uD83D[\uDC00-\uDD96\uDE45-\uDE4F\uDEA3-\uDECC]|\uD83E[\uDD0F-\uDDDD]/,
  textModifiers: /[\u0300-\u036F\u1AB0-\u1AFF\u20D0-\u20FF]/,
  colorModifiers: /\uD83C[\uDFFB-\uDFFF]/,
  modifiers: /[\u200D\uFE0F]/
}
