import { Component } from '../core/Component'

export class Form extends Component {
  get isValid() {
    if (this.state.amount > 0 && this.state.amount < 100) {
      return true
    } else {
      return false
    }
  }
  setup(props) {
    this.$rootElement = document.createElement('form')
    this.$rootElement.className = 'donate-form'
    const donateLabel = document.createElement('label')
    donateLabel.className = 'donate-form__input-label'
    donateLabel.textContent = 'Введите сумму в $'
    const donateInput = document.createElement('input')
    donateInput.className = 'donate-form__donate-input'
    donateInput.setAttribute('name', 'amount')
    donateInput.setAttribute('type', 'number')
    donateInput.setAttribute('max', '100')
    donateInput.setAttribute('min', '1')
    donateInput.setAttribute('required', '')
    donateLabel.appendChild(donateInput)
    const donateSubmit = document.createElement('button')
    donateSubmit.className = 'donate-form__submit-button'
    donateSubmit.setAttribute('type', 'submit')

    donateSubmit.textContent = 'Задонатить'
    this.$input = donateInput
    this.$button = donateSubmit
    donateLabel.appendChild(this.$input)
    this.$rootElement.appendChild(donateLabel)
    this.$rootElement.appendChild(this.$button)
    this.$input.addEventListener('input', (e) => {
      this.handleInput(e)

    })
    this.$rootElement.addEventListener('submit', (e) => {
      this.handleSubmit(e)

    })
    // ...
    this.state = {
      amount: '',
    }
  }

  handleInput(event) {
    this.state.amount = event.target.value
    if (!this.isValid) {
      this.$button.setAttribute('disabled', '')
    } else this.$button.removeAttribute('disabled')
  }

  handleSubmit(event) {
    event.preventDefault()
    this.$input.value = ''
    this.props.onSubmit(+this.state.amount)

  }
}
