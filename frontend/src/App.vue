<template>
  	<div class="container">
    	<router-view/>
  	</div>
</template>

<style lang="scss">
	.container {
		@include flex-centerize(row, center, center);
		font-family: $base-font;
		height: 100vh;
		width: 100vw;
	}
</style>
