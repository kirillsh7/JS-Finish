import { Component } from '../core/Component'

export class ListItem extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div')
    this.$rootElement.className = 'donate-item'
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    }
    const button = document.createElement('button')
    button.className = 'delete-button'
    button.textContent = 'Удалить'
    button.dataset.danger = 'remove'
    button.dataset.btn = `${this.state.id}`
    const data = {
      time: this.state.date.toTimeString().slice(0, 9),
      day: this.state.date.getDate(),
      month: this.state.date.getMonth() + 1,
      year: this.state.date.getFullYear()
    }
    this.$rootElement.innerHTML =
      `${data.day}/${data.month}/${data.year}, ${data.time} - <b>${this.state.amount}</b>`

    this.$rootElement.appendChild(button)


  }
}
