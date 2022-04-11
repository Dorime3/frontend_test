<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HeaderApp',
  props: {
    cart: {
      type: Array,
      required: true,
      default: () => [],
    },
    currency: String,
  },
  data: () => ({}),
  computed: {
    cartPrice() {
      return this.cart.reduce((acc, product) => {
        return acc + product.price * product.amount
      }, 0)
    }
  }
}
</script>

<style scoped>
.header {
  padding: 10px;
  background: #e5e5e5;
}
</style>

