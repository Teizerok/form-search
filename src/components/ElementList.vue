<template>
	<li class="element">{{ text }}</li>
</template>

<script setup lang="ts">
interface Props {
	text: any
}

const { text } = defineProps<Props>()

</script>	

<style lang="scss">
.element {
	color: #7c7e84;
	font-size: 15px;
	text-align: left;
	margin: 0 0 10px 0;
}
</style>