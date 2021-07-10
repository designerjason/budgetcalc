const App = {
    data() {
      return {
        title: '',
        cost: 0,
        total: 0,
        Items: [],
        showErrors: false
      }
    },
    methods: {
      addItem() {
          this.Items.push(
            { 
              "title" : "",
              "cost" : null
            }        
          )
      },
      
      removeItem(index) {
        this.Items.splice(index, 1);
        this.listEmpty = this.Items.length? false : true;
      },
    },
    
    computed: {
       calcTotal() {
        const decimalPlaces = 2;
        this.total = 0;
        if(!this.listEmpty) {
          this.Items.forEach( e => {
            if(typeof e.cost === 'number') {
              this.total += parseFloat(e.cost)
            }
          });
        }
        return Number(Math.round(parseFloat(this.total + 'e' + decimalPlaces)) + 'e-' + decimalPlaces).toFixed(decimalPlaces);
      }
    }
  }
  
  Vue.createApp(App).mount('#app');