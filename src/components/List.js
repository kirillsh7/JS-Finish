import { Component } from '../core/Component'

export class List extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div')
    this.$rootElement.className = 'donates-container'
    const donateContainer = document.createElement('h2')
    donateContainer.className = 'donates-container__title'
    donateContainer.textContent = 'Список донатов'
    const donatesList = document.createElement('div')
    donatesList.className = 'donates-container__donates'
    this.$rootElement.append(donateContainer, donatesList)
    this.$listContainer = donatesList
    this.$rootElement.addEventListener('click', (e) => {
      const { target } = e
      if (target.dataset.danger === 'remove') {
        const item = target.closest('.donate-item')
        this.$listContainer.removeChild(item)
        const id = +target.dataset.btn
        this.props.onSubmit(id)

      }
    })
  }

  addItem(item) {

    this.$listContainer.appendChild(item.$rootElement)

  }

}