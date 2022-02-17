const red = '빨간색';
const blue = '파란색';
function favoriteColors(texts, ...values) {
   return texts.reduce((result, text, i) => `${result}${text}${values[i] ? `<b>${values[i]}</b>` : ''}`, '');
}
let msg = favoriteColors`제가 좋아하는 색은 ${red}과 ${blue}입니다.`
console.log(msg)
 
