import draggable from 'vuedraggable'

const App = {
  data() {
    return {
      title: '',
      cost: 0,
      drag: false,
      Items: [],
      showErrors: false,
      saveAlert: false
    }
  },

  mounted() {
    // use local storage if set, empty if not
    this.Items = localStorage.getItem('budgetList') ? JSON.parse(localStorage.getItem('budgetList')) : []
  },

  methods: {
    // add an item to the list
    addItem() {
      this.Items.push({
        title: '',
        cost: null
      })
    },

    // remove an item from the list
    removeItem(item) {
      const index = this.Items.indexOf(item)
      if (index !== -1) {
        this.Items.splice(index, 1)
      }
      this.listEmpty = this.Items.length === 0
    },

    // save the current budget list
    saveBudget() {
      localStorage.setItem('budgetList', JSON.stringify(this.Items))
      this.saveAlert = true

      setTimeout(() => {
        this.saveAlert = false
      }, 1000)
    }
  },

  computed: {
    calcTotal() {
      const decimalPlaces = 2

      let total = 0

      this.Items.forEach(item => {
        if (typeof item.cost === 'number') {
          total += parseFloat(item.cost)
        }
      })

      return total.toFixed(decimalPlaces)
    }
  }
}

const app = Vue.createApp(App)

app.component('draggable', draggable)
app.mount('#app')

