const app = document.querySelector('#app')

const list = document.createElement('div')
list.classList.add('list-container')

const form =  document.createElement('div')
form.classList.add('form-container')

const input = document.createElement('input')
input.setAttribute('type','text')

const button = document.createElement('button')
button.textContent = 'Add'
button.addEventListener('click', ()=> {
    console.log('clicked', input.value); x2 'clicked' | 'dsdddd' | 'clicked' | 'dsdddd'

})