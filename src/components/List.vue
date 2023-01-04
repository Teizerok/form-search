<template>
	<ul class="list">
		<ElementList v-for="element of geoStore.listOfCountries" :text="element" class="list__element" />
	</ul>
</template>

<script setup lang="ts">
import ElementList from './ElementList.vue'
import { useGeoStore } from '../stores/geoStore'

const geoStore = useGeoStore()
</script>	

<style lang="scss">
.list:last-child {
	margin: 0;
}
</style>