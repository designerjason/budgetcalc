import draggable from 'vuedraggable'

const App = {
    data() {
      return {
        title: '',
        cost: 0,
        drag: false,
        total: 0,
        Items: [],
        showErrors: false,
        saveAlert: false
      }
    },

    mounted() {
      // use localstorage if set, empty if not
      this.Items = (localStorage.getItem("budgetList")? JSON.parse(localStorage.getItem("budgetList")) : [] )
    },

    methods: {
      // add from the list
      addItem() {
          this.Items.push(
            { 
              "title" : "",
              "cost" : null
            }        
          )
      },
      
      // remove an item from the list
      removeItem(index) {
        this.Items.splice(index, 1);
        this.listEmpty = this.Items.length? false : true;
      },

      // save the current budget list
      saveBudget() {
        localStorage.setItem("budgetList", JSON.stringify(this.Items));
        this.saveAlert = true;

        setTimeout(() => {
          this.saveAlert = false;
        }, 1000);
      }
    },
    
    computed: {
       calcTotal() {
        const decimalPlaces = 2;
        this.total = 0;
        
        this.Items.forEach( e => {
          if(typeof e.cost === 'number') {
            this.total += parseFloat(e.cost)
          }
        });

        return Number(Math.round(parseFloat(this.total + 'e' + decimalPlaces)) + 'e-' + decimalPlaces).toFixed(decimalPlaces);
      }
    }
  }
  
const app = Vue.createApp(App);

  app.component('draggable', draggable);
  app.mount('#app');