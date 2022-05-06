<template>
	<div v-bind:style="{ marginBottom: '2%', width }">{{ name }}</div>
	<input 
		class="authInput"
		:id="[ name ]"
		@input="updateValue"
		:type="[ type ]"
		:value="modelValue"
		v-bind:style="{ margin, padding, width }" 
	>
</template>

<script>
	export default {
		props: [
			"margin",
			"name",
			"padding", 
			"type",
			"update",
			"modelValue",
			"width"
		],
		// methods: {
		// 	updateValue(event) {
		// 		this.$emit('update:modelValue', event.target.value);
		// 	}
		// }
		setup(props, ctx) {
			function updateValue(event) {
            	ctx.emit('update:modelValue', event.target.value);
        	}
			return {
				updateValue,
			}
		}
	}
</script>

<style lang="scss">
	.authInput { 
		border: 1px solid $base-color; 
		border-radius: 0.3vw;
		font-size: 1vw;
		margin-bottom: 1vw;
	}
</style>