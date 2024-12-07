let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let count = document.querySelector('.count')

let btn = 0




plus.forEach((item, num) => {
    item.addEventListener('click', ()=> {
        count[num].value = parseInt(count[num].value) + 1
    } )
});
minus.forEach((item, num) => {
    item.addEventListener('click', ()=> {
        count[num].value = parseInt(count[num].value) - 1
    } )
});