const valuesBill = document.querySelectorAll('.list-tip li')
//console.log(valuesBill)

valuesBill.forEach(valueBill => {
  console.log(valueBill.textContent)
})

// valuesBill.addEventListener('click', event => {
//   if (event.target.matches('button')) {
//     console.log('Cique')
//   }
// })
