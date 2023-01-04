<template>
	<form class="form" @submit.prevent>
		<h1 class="form__title">Find Any Country</h1>

		<input v-model="search" @input="onInput" type="text" class="form__input">

		<PreLoader v-if="geoStore.isLoading" />
		<List v-else-if="!isEmptyList" />
		<p v-else>The list is empty</p>
	</form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGeoStore } from '../stores/geoStore'
import List from './List.vue'
import PreLoader from '../common/PreLoader.vue'

const search = ref<string>('')
const geoStore = useGeoStore()


//если список мест пустой будет true
const isEmptyList = computed<boolean>(() => {
	return !geoStore.listOfCountries.length
})


const onInput = (): void => {
	geoStore.getCountry(search.value)
}

</script>	

<style lang="scss">
.form {
	font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
	background-color: #ffffff;
	border-radius: 6px;
	padding: 35px 50px;


	.form__title {
		font-size: 24px;
		margin: 0 0 30px 0;
		color: #444444;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 2px;
		word-spacing: 4px;
	}

	.form__input {
		border: 1px solid #f6f7f7;
		border-radius: 6px;
		background-color: #e5e8ed;
		color: #838996;
		height: 50px;
		width: 100%;
		padding: 0 20px;
		font-size: 15px;
		margin: 0 0 20px 0;
	}
}
</style>