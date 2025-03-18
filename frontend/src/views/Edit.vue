<template>
  <div>
    <h1>Edit Product</h1>
    <form @submit.prevent="updateProduct">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" v-model="product.name" />
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea class="textarea" v-model="product.description"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary">Update</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProductEdit",
  data() {
    return {
      product: {
        name: "",
        description: "",
      },
    };
  },
  methods: {
    updateProduct() {
      // Implementation for updating product
    },
  },
};
</script>
