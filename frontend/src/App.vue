<template>
  	<div class="container">
    	<router-view/>
  	</div>
</template>

<script>
	document.title = "VisionTech"
</script>

<style lang="scss">
	.container {
		@include flex-centerize(row, center, center);
		font-family: $base-font;
		height: 100vh;
		width: 100vw;
	}
</style>
