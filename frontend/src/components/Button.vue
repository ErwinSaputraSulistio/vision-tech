<template>
	<button :class="[ type ]" v-bind:style="{ margin, height, width }" v-on:click="func">{{ name }}</button>
</template>

<script>
	export default {
		props: [
			"func", 
			"height",
			"margin",
			"name",	
			"type",
			"width"
		]
	}
</script>

<style lang="scss">
	.primary, .secondary {
		@include flex-centerize(row, center, center);
		font-size: 1vw;
		font-weight: bold;
		transition-duration: 0.25s;
	}
	.primary:hover, .secondary:hover {
		cursor: pointer;
		opacity: 0.77;
		transform: scale(1.1, 1.1);
	}
	.primary, .secondary:hover {
		@include custom-border($base-color, 1px solid $base-color, 0.5vw, white);
	}
	.secondary, .primary:hover {
		@include custom-border(white, 1px solid $base-color, 0.5vw, $base-color);
	}
</style>