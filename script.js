// variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

/* object licteral */
const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    bntClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    
    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

Modal.bntClose.onclick = () => Modal.close()

IMC = (weight, height) => {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}