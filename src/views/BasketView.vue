<template>
  <div class="w-full text-center">
    <h1 class="w-full mx-auto mb-10 text-xl font-bold">BASKET</h1>
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item) in basket" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.id }}0000</td>
          <!-- Display other item properties as needed -->
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "-Basket-",

  computed: mapState({
    basket: (state) => state.photos.basket
  })
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

th:first-child,
td:first-child {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

th:last-child,
td:last-child {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
</style>