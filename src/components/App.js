import { Component } from '../core/Component'
import { Form } from './Form'
import { List } from './List'
import { ListItem } from './ListItem'

export class App extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div')
    this.$rootElement.className = 'app'

    // ...
    this.state = {
      total: 0,
      donates: [],
    }
    const spanTotal = document.createElement('span')
    spanTotal.textContent = this.state.total
    this.$total = spanTotal
    const totalAmount = document.createElement('h1')
    totalAmount.className = 'total-amount'
    totalAmount.innerHTML = `Итого : $ `
    totalAmount.appendChild(spanTotal)
    this.$rootElement.appendChild(totalAmount)
    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) })
    this.$rootElement.appendChild(donateForm.$rootElement)
    const donateList = new List({ onSubmit: this.onItemRemove.bind(this) })
    this.$rootElement.appendChild(donateList.$rootElement)
    this.donateList = donateList
  }

  onItemCreate(amount) {
    const item = new ListItem({ amount: amount })
    this.state.donates.push(item)
    this.state.total = +this.$total.textContent + amount
    this.$total.textContent = this.state.total
    this.donateList.addItem(item)


  }
  onItemRemove(id) {
    const donatesId = this.state.donates.findIndex(e => e.state.id === id)
    const amount = this.state.donates.find(e => e.state.id === id)
    this.state.donates.splice(donatesId, 1)
    this.state.total -= amount.state.amount
    this.$total.textContent = this.state.total
  }

}
