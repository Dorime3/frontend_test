<template>
  <div class="product-list">
<!--  То, что ниже вынес бы в айтем лист  -->
    <div class="card"
        v-for="(product, idx) in productList"
        :key="product.id"
        :style="{width: cardsWidth}">
      <p class="card-title">
        {{ product.title }}
      </p>
      <img class="card-image"
           :src="product.image"
           alt="Фото товара">
      <p class="card-price">
        Цена: {{ product.price }} {{ currency }}
      </p>

      <div>
        <input type="number"
               v-model="amount[idx]">
        <span>кг</span>
      </div>

      <button  @click="addToCart(product, idx)">
        В корзину
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currency: String,
  },
  data() {
    return {
      viewWidth: null,
      interval: null,
      amount: []
    };
  },
  computed: {
    cardsWidth() {
      let count = 1;
      if (this.viewWidth > 840) {
        count = 3;
      } else if ((this.viewWidth > 420 && this.viewWidth < 840)) {
        count = 2;
      }
      return `${100 / count}%`;
    },
    productList() {
      return this.$store.state.productList
    }
  },
  methods: {
    startPricesMonitoring() {
      this.interval = setInterval(this.getList, 2000);
    },
    updateWidth() {
      this.viewWidth = window.innerWidth
    },
    async getList() {
      console.log('render list every 2sec')
      return await this.$store.dispatch('getProductList')
    },
    addToCart(product, idx) {
      // let amount = this.$refs.amount.find((input) => input.id === product.id).value; // ну как бы дич и нет)
      if (this.amount[idx] <= 0) {
        alert('Введите корректное кол-во')
        return
      }
      const data = {
        amount: this.amount[idx],
        price: product.price,
        title: product.title,
      };
      this.$emit('addToCart', data)
    },
  },
  created() {
    this.startPricesMonitoring();
    this.getList();
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWidth);
    clearInterval(this.interval)
  }
};
</script>

<style scoped>
  .product-list {
    padding: 10px;
  }

  .product-list .card {
    display: inline-block;
    width: 100%;
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
  }
  .product-list .card .card-image {
    width: 100%;
  }
  button {
    padding: 5px;
    margin: 5px;
  }

</style>
