<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, onBeforeMount } from "vue";
import axios from 'axios';
const route = useRoute();
const paramId = ref('')
const product = ref({})
const fetchProduct = async (paramId) => {
    let response = await axios.get(`https://dummyjson.com/products/${paramId}`);
    product.value = response.data
}
onBeforeMount(() => {
    paramId.value = route.params.id;
    fetchProduct(route.params.id);
})
</script>

<template>
    <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="row gx-4 gx-lg-5 align-items-center">
                <div class="col-md-6">
                    <img class="card-img-top mb-5 mb-md-0 border rounded" :src="product.thumbnail" alt="...">
                </div>
                <div class="col-md-6">
                    <div class="small mb-1">SKU: BST-498</div>
                    <h1 class="display-5 fw-bolder">{{ product.title }}</h1>
                    <div class="fs-5 mb-5">
                        <!-- <span class="text-decoration-line-through">$45.00</span> -->
                        <span>${{ product.price }}</span>
                    </div>
                    <p class="lead">{{ product.description }}</p>
                    <div class="d-flex">
                        <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1"
                            style="max-width: 3rem">
                        <button class="btn btn-outline-dark flex-shrink-0" type="button">
                            <i class="bi-cart-fill me-1"></i>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>