const valuesTip = document.querySelector('.list-tip')
const inputOutherTip = document.querySelector('#outher-tip-value')
const itemstTip = document.querySelectorAll('.list-tip li button')

function deselectTip() {
  itemstTip.forEach(itemTip => {
    //console.log(itemBill.textContent)
    itemTip.classList.remove('selected')
  })
}

valuesTip.addEventListener('click', e => {
  deselectTip()
  //console.log(e.target)
  if (e.target.matches('button')) {
    console.log(e.target.textContent)
    e.target.classList.add('selected')
  }
})

inputOutherTip.addEventListener('input', e => {
  console.log(inputOutherTip.value)
})
