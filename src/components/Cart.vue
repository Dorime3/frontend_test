<template>
  <div class="cart-list">
    <ul>
      <li v-for="item in reverseCart"
          :key="item.id">
        Товар: {{ item.title }}
        <br/>
        Количество: {{ item.amount }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  computed: {
    reverseCart() {
      return [...this.cart].reverse();
    },
  },
};
</script>

<style scoped>
  .cart-list ul li{
    border: 1px solid #908888;
    border-radius: 5px;
    margin: 5px 10px;
    padding: 5px
  }
</style>
