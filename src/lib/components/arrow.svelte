<script lang="ts">
  export let animated = false;
  export let size = 200;
  export let top = 0;
  export let left = 0;
  export let rotate = 0;
  export let transform = null;
</script>

<style>
	svg {
		margin: 0 auto;
    position: absolute;
	}

	.draw-arrow {  
		stroke-width: 5;
		stroke: currentColor; 
		fill: none;
		stroke-dasharray: 400;
		stroke-dashoffset: 400; 
	}

	.animated {
		animation-duration: 2.0s;
		animation-fill-mode: forwards;
		animation-name: draw;
	}

	.animated.main {
		/* animation-delay: .5s; */

	}

	.animated.tail-2 {
		animation-delay: .7s;
	}

	.animated.tail-1 {
		animation-delay: .5s;
	}

	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}
</style>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 43.1 85.9" style="enable-background:new 0 0 43.1 85.9;top:{top}px;left:{left}px;transform:{transform}" width={size} height={size} xml:space="preserve">
  <path stroke-linecap="round" stroke-linejoin="round" class="main draw-arrow {animated && 'animated'}" d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1" />
  <path stroke-linecap="round" stroke-linejoin="round" class="draw-arrow tail-1 {animated && 'animated'}" d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58" />
  <path stroke-linecap="round" stroke-linejoin="round" class="draw-arrow tail-2 {animated && 'animated'}" d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9" />
</svg>


<!-- 

<script lang="ts">
	import Arrow from '@lib/components/arrow.svelte'

	let animated = false;
	let count = 0;

	const resetArrows = () => count = 0;
	const handleArrow = () => {
		count += 1;
	}
</script>

	<Slide
		on:in={resetArrows}
    on:out={resetArrows}
		on:click={() => handleArrow()}

	>
	<Stack>
			<div class="flex justify-center w-full">
				<img src="large-pr.png" on:click={handleArrow} />
			</div>
	<Stack>
		<span class="text-red-700">
			<Arrow animated={count === 1} size={200} top={70} left={1060} transform={'scaleX(-1)'} />
		</span>
		<span class="text-indigo-600">
			<Arrow animated={count === 2} size={200} top={60} left={1490} />
		</span>
		<span class="text-indigo-600">
			<Arrow animated={count === 3} size={200} top={250} left={360} transform={'scaleY(-1)'} />
		</span>
	</Stack>
-->