<!-- svelte-ignore a11y-missing-attribute -->
<script lang="ts">
	import { Code, Stretch } from "@components"

	import { Presentation, Slide, Step } from '@components'
	import { fade } from 'svelte/transition';
	import Stack from '@lib/components/stack.svelte'
	import Notes from '@lib/components/notes.svelte'
	import OdrabiamyIcon from '@lib/components/odrabiamyIcon.svelte'

	let visible = false;
	let videoClassName = null;

	const showImage = () => {
		visible = true;
		videoClassName = 'video';
	}
	
	const hideImage = () => {
		visible = false;
		videoClassName = null;
	}
</script>

<style>
	.introBorder {
		border: 8px solid;
		border-image: linear-gradient(45deg, #d54969, #ddb793) 1;
	}

	.introImage {
		border-radius: 0;
		margin: -8px
	}

	.video {
		animation: blurVideo 4s;
		opacity: 0.4;
	}

	@keyframes blurVideo {
		from {
			opacity: 1;
			filter: none;
		}
    to {
			opacity: 0.4;
    }
	}

	blockquote {
		font-family: 'Bangers', sans-serif
	}

	blockquote.bubble { 
		background-position: center;
		background-repeat: no-repeat !important;
		background-size: 100% 100%;
		margin: 0 auto;
		text-align: center;
		height: 0;
		box-sizing: content-box;
		line-height: 1;
	}

	blockquote.speech {
		background: url('speech-bubble.svg');
		padding-top: 6%;
		padding-bottom: 17%;
		padding-right: 30px;
		padding-left: 30px;
	}

	blockquote.electric {
  background: url('electric.svg');
  padding: 8% 6% 12% 0%;
	}

	blockquote.electric p {
		max-width: 70%;
		margin: 0 auto;
	}

	.thankYou {
		padding: 48px;
		line-height: 1.5;
		background: linear-gradient(#ddb793, #d54969);
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>


<Presentation>
	<Slide background="white">
		<Stretch
      class="mx-auto !rounded-none"
      src="first-slide.jpeg"
      type="img"
    />
	</Slide>
	<Slide animate>
		<div class="mx-auto flex justify-between w-3/4 items-center introBorder">
			<div class="p-16 flex flex-col items-center gap-8">
				<h3 class="font-bold">I'm Paulina 🙋🏼‍♀️</h3>	
			</div>
			<img src="paulina_chojnowska.jpg" width="600" class="introImage" />
		</div>
</Slide>

<Slide animate>
	<div class="mx-auto flex justify-between w-3/4 items-center introBorder">
		<div class="p-16 flex flex-col items-center gap-8">
			<h3 class="font-bold">I'm Paulina 🙋🏼‍♀️</h3>
			<div class="flex gap-4 items-center">
				<p>Team Lead at Odrabiamy.pl</p>
				<OdrabiamyIcon />
			</div>
		</div>
		<img src="paulina_chojnowska.jpg" width="600" class="introImage" />
	</div>
	<Notes>
		Lead a team of full stack devs.
	</Notes>
</Slide>

	<Slide animate>
    <h2 class="font-bold">Ever</h2>
		<h2 class="font-bold">done</h2>
    <h2 class="font-bold">code review?</h2>
  </Slide>

	<Slide animate>
    <h2 class="font-bold">Ever</h2>
		<h2 class="font-bold text-indigo-900">received</h2>
    <h2 class="font-bold">code review?</h2>
  </Slide>

	<Slide animate>
    <h2 class="font-bold">Ever</h2>
		<h2 class="font-bold text-indigo-900">received</h2>
    <h2 class="font-bold">code review?</h2>
		<h2>🤕</h2>
		<Notes>I understand it, I really do. Code review is hard. And if you're like me, probably at some point in your career you wanted to find some tips on how to do it properly.</Notes>
  </Slide>

	<!-- CR RULES -->
	<Slide transition="fade">
		<Stack>
			<Step>
				<img class="shadow-lg relative top-[-300px]" src="cr-rules/5.png" width={800} />
			</Step>
			<Step>
				<img class="shadow-lg relative left-[200px] top-[-150px]" src="cr-rules/9.png" width={800} />
			</Step>
			<Step>
				<img class="shadow-lg relative top-[0px]" src="cr-rules/10.png" width={800} />
			</Step>
			<Step>
				<img class="shadow-lg relative left-[-200px] top-[100px]" src="cr-rules/12.png" width={800} />
			</Step>
			<Step>
				<img class="shadow-lg relative top-[200px]" src="cr-rules/14.png" width={800} />
			</Step>
			<Step>
				<img class="shadow-lg relative left-[300px] top-[200px]" src="cr-rules/18.png" width={800} />
			</Step>
			<Step>
				<img class="shadow-lg relative left-[-100px] top-[400px]" src="cr-rules/30.png" width={800} />
			</Step>
			<Step>
				<img class="shadow-lg relative left-[400px] top-[400px]" src="cr-rules/62.png" width={800} />
			</Step>
		</Stack>
		<Notes>I understand it, I really do. Code review is hard. And if you're like me, probably at some point in your career you wanted to find some tips on how to do it properly.
			<br />
			<br />
			So you googled it and yeap, you found - 5, 10, 30, 62 rules on code review... Basically, any number you could think of.
		</Notes>
	</Slide>

	<Slide transition="fade">
		<img class="shadow-lg mx-auto" src="cr-rules/aah.webp" width={1200} />
		<Notes>And you were done. Not really helpful, it it? Who even has time for that?</Notes>
	</Slide>

	<Slide>
		<Notes>So yes, CR is difficult. And it's even absurd at times. Imagine...</Notes>
	</Slide>

	<Slide transition="fade" on:in={showImage} on:out={hideImage}>
		<Stack>
			<!-- svelte-ignore a11y-media-has-caption -->
			<video data-autoplay class={videoClassName} src="large-pr-scroll.mp4"/>	
			{#if visible}
				<!-- svelte-ignore a11y-missing-attribute -->
				<img in:fade={{ delay: 4000, duration: 300 }} class="shadow-md relative" src="lgtm.png" />
			{/if}
		</Stack>
		<Notes>80 files changed.</Notes>
	</Slide>

	<Slide>
		<img src="short-pr-detailed-no-cr.png" class="w-full" />
		<Notes>Link to React docs. React logo.</Notes>
	</Slide>
	<Slide>
		<section data-auto-animate class="h-full">
			<img class="shadow-lg absolute top-[100px]" src="short-pr-comments-1.png" />
		</section>
	</Slide>
	<Slide>
		<section data-auto-animate class="h-full">
			<img class="shadow-lg opacity-30 top-[100px]" src="short-pr-comments-1.png" />
			<img class="shadow-lg absolute top-[200px] left-60" src="short-pr-comments-2.png" />
		</section>
	</Slide>
	<Slide>
		<section data-auto-animate class="h-full">
			<img class="shadow-lg opacity-20 top-[100px]" src="short-pr-comments-1.png" />
			<img class="shadow-lg absolute opacity-30 top-[200px] left-60" src="short-pr-comments-2.png" />
			<img class="shadow-lg absolute top-[600px] right-40" src="short-pr-comments-3.png" />
			<Notes>Where every detail stands out and suddenly everyone has something to say...
				<br />
				<br />
				So yes, it is difficult. And demanding. And it's probably not the most pleasant thing we can do at work, is it?
				<br />
				<br />
				BUT WHY?
			</Notes>
		</section>
	</Slide>

	<!-- WHY -->
	<Slide>
		<section data-background-gradient="linear-gradient(to bottom, #b4d8aa, #dfe099)">
			<div class="flex justify-center w-full"><img class="shadow-md w-1/2" src="tell-me-why.gif" /></div>
		</section>
	</Slide>

	<Slide>
		<section data-auto-animate data-background-gradient="linear-gradient(to bottom, #b4d8aa, #dfe099)">
			<h1 class="font-bold">Why</h1>
		</section>
	</Slide>
	<Slide>
		<section data-auto-animate data-background-gradient="linear-gradient(to bottom, #b4d8aa, #dfe099)">
			<h1 class="font-bold">Why</h1>
			<h2 class="font-bold">We are developers!</h2>
			<Notes>
				We have become developers to build things. 
				<br />
				We like to write code, create features, ship them to production and see them live.
				<br />
				Not act of creation.
				<br />
				Not that satisfying.
			</Notes>
		</section>
	</Slide>

	<Slide>
		<section data-auto-animate data-background-gradient="linear-gradient(to bottom, #b4d8aa, #dfe099)">
			<h1 class="font-bold">Why</h1>
			<h2 class="font-bold">We are developers!</h2>
			<h2 class="font-bold">Focus</h2>
			<Notes>
				Switch contexts.
				<br />
				<br />

				Undestand what the code does business-wise.
				<br />
				<br />
				Haven't been there from the very beginning of the process, so you don't really know the decisions the author was making and how the code was evolving along the way.
			</Notes>
		</section>
	</Slide>

	<Slide>
		<section data-auto-animate data-background-gradient="linear-gradient(to bottom, #b4d8aa, #dfe099)">
			<h2 class="font-bold">We are developers!</h2>
			<h2 class="font-bold">Focus</h2>
			<h2 class="font-bold">Soft skills</h2>
			<Notes>
				Hard to master.
				<br />
				Not really communication itself.
				<br />
				Giving and receiving feedback.
			</Notes>
		</section>
	</Slide>

	<Slide>
		<section data-auto-animate data-background-gradient="linear-gradient(to bottom, #b4d8aa, #dfe099)">
			<h2 class="font-bold">We are developers!</h2>
			<h2 class="font-bold">Focus</h2>
			<h2 class="font-bold">Soft skills</h2>
			<h2 class="font-bold">Unrewarding?</h2>
			<Notes>
				Depends on manager.
				<br />
				Guy working on important features.
				<br />
				You spot serious bugs and save code.

				<br />
				<br />
				So it is difficult. And we probably don't like it very much.
				<br />
				And yet we do it.
				<br />
			</Notes>
		</section>
	</Slide>


	<!-- MOTIVATION -->
	<Slide>
		<h1>And yet we do it...</h1>
		<Notes>
			WHY?
			<br />
			In order to answer this question, imagine...
		</Notes>
	</Slide>
	<Slide>
		<h2>📝</h2><h2 class="font-caveat w-3/4 mx-auto">Show the banner only if user hasn't seen it yet</h2>
	</Slide>

	<Slide>
		<section data-auto-animate>
			<div>
				<Code lang="js" lines="0|1,12,17|14|7-9" class="border">
					{`
						import { useCookies, CookiesProvider } from "react-cookie";
						import Banner from "./Banner";

						export default function WelcomePage() {
							const [cookies, setCookie] = useCookies(["banner-seen"]);

							const handleBannerClose = () => {
								setCookie("banner-seen", true);
							};

							return (
								<CookiesProvider>
									<main>
										{!cookies["banner-seen"] && <Banner onClose={handleBannerClose} />}
										<div>Welcome to Alicante!</div>
									</main>
								</CookiesProvider>
							);
						}
					`}
				</Code>
			</div>
			<Notes>Cup of coffee.
				<br />
				Hunger games.
			</Notes>
    </section>
  </Slide>

	<!-- COOKIES -->
	<Slide animate>
		<img src="smurfs/handy-smurf.png" class="text-center inline-block" />
		<Notes>
			Hard-working.
		</Notes>
	</Slide>

	<Slide animate>
		<blockquote class="speech bubble inline-block w-[710px] relative top-[-200px] scale-x-[-1]">
			<p class="scale-x-[-1]">It would be better to use storage instead of cookies. You don't need the info on the server.</p>
		</blockquote>
		<img src="smurfs/handy-smurf.png" class="text-center inline-block relative top-[200px] ml-[-200px]" />
	</Slide>

	<Slide animate>
		<img src="smurfs/grouchy-smurf.png" class="text-center inline-block" />
	</Slide>

	<Slide animate>
		<img src="smurfs/grouchy-smurf.png" class="text-center inline-block relative top-[200px] mr-[-100px]" />
		<blockquote class="speech bubble inline-block w-[510px] relative top-[-200px]">
			<p>Use camelCase for the cookie naming, ok?</p>
		</blockquote>
	</Slide>

	<Slide animate>
		<img src="smurfs/snappy-smurfling.webp" class="text-center inline-block relative top-[200px] ml-[-100px] w-[500px]" />
	</Slide>

	<Slide animate>
		<blockquote class="speech electric inline-block w-[610px] h-[500px] relative top-[-100px]" data-id="quote-1">
			<p data-id="quote-1-par">Are you serious with keeping this in the cookies?!</p>
		</blockquote>
		<img src="smurfs/snappy-smurfling.webp" class="text-center inline-block relative top-[200px] ml-[-100px] w-[500px]" />
	</Slide>

	<Slide animate>
		<blockquote class="speech electric inline-block w-[630px] h-[520px] relative top-[-100px]" data-id="quote-1">
			<p data-id="quote-1-par">Do you even imagine the impact the context has on the app? 🤦</p>
		</blockquote>
		<img src="smurfs/snappy-smurfling.webp" class="text-center inline-block relative top-[200px] ml-[-100px] w-[500px]" />
	</Slide>


	<!-- CHANGING TO LOCAL STORAGE -->
	<Slide>
		<section data-auto-animate>
			<div>
				<Code lang="js" lines="0|5-12" class="border">
					{`
						import { useState } from "react";
						import Banner from "./Banner";

						export default function WelcomePage() {
							const [bannerSeen, setBannerSeen] = useState(
								JSON.parse(localStorage.getItem("bannerSeen") ?? "false")
							);

							const handleBannerClose = () => {
								setBannerSeen(true);
								localStorage.setItem("bannerSeen", "true");
							};

							return (
								<main>
									{!bannerSeen && <Banner onClose={handleBannerClose} />}
									<div>Welcome to Alicante!</div>
								</main>
							);
						}
					`}
				</Code>
			</div>
    </section>
  </Slide>

	<Slide animate>
		<img src="smurfs/brainy-smurf.png" class="text-center inline-block h-[600px]" />
	</Slide>

	<Slide animate>
		<blockquote class="speech bubble inline-block w-[910px] left-[-200px] relative top-[-200px] scale-x-[-1]">
			<p class="scale-x-[-1]">You probably don't know about more advanced concepts like the new React hook that you could use - useSyncExternalStore.</p>
		</blockquote>
		<img src="smurfs/brainy-smurf.png" class="text-center inline-block relative top-[200px] ml-[-700px] h-[600px]" />
	</Slide>

	<!-- CHANGING TO useSyncExternalStore -->
	<Slide>
		<section data-auto-animate>
			<div>
				<Code lang="js" lines="0|14-17" class="border">
					{`
						import { useSyncExternalStore } from "react";
						import Banner from "./Banner";

						const subscribeToLocalStorage = (callback: () => void) => {
							window.addEventListener("storage", callback);
							return () => {
								window.removeEventListener("storage", callback);
							};
						};

						const getLocalStorageSnapshot = () => localStorage.getItem("bannerSeen");

						export default function WelcomePage() {
							const bannerSeen = useSyncExternalStore(
								subscribeToLocalStorage,
								getLocalStorageSnapshot
							);

							const handleBannerClose = () => {
								localStorage.setItem("bannerSeen", "true");
							};

							return (
								<main>
									{bannerSeen !== "true" && <Banner onClose={handleBannerClose} />}
									<div>Welcome to Alicante!</div>
								</main>
							);
						}
					`}
				</Code>
			</div>
    </section>
  </Slide>

	<Slide animate>
		<img src="smurfs/papa-smurf.webp" class="text-center inline-block h-[600px]" />
	</Slide>

	<Slide animate>
		<img src="smurfs/papa-smurf.webp" class="text-center inline-block relative top-[200px] mr-[-100px] h-[600px]" />
		<blockquote class="speech bubble inline-block w-[870px] relative top-[-100px]">
			<p>The hook is especially useful when you want to subscribe to some external store changes.</p>
		</blockquote>
	</Slide>

	<Slide animate>
		<img src="smurfs/papa-smurf.webp" class="text-center inline-block relative top-[200px] mr-[-100px] h-[600px]" />
		<blockquote class="speech bubble inline-block w-[1000px] relative top-[-100px]">
			<p>Also, storage event does not fire when changes to the storage are made on the same page, so you would still need state.</p>
		</blockquote>
	</Slide>


	<Slide animate>
		<img src="smurfs/jokey-smurf.webp" class="text-center inline-block h-[600px]" />
	</Slide>

	<Slide animate>
		<img src="smurfs/jokey-smurf.webp" class="text-center inline-block relative top-[200px] mr-[-200px] h-[600px]" />
		<blockquote class="speech bubble inline-block w-[910px] relative top-[-100px]">
			<p>Wow! I thought React 18 was like Nessie - everyone talks about it, but no one has seen it!</p>
		</blockquote>
		<Notes>
			I thought that React 18 was like the Loch Ness Monster or Yeti that everyone talks about but no one has seen yet!
		</Notes>
	</Slide>

	<Slide animate>
		<img src="smurfs/jokey-smurf.webp" class="text-center inline-block relative top-[200px] mr-[-200px] h-[600px]" />
		<blockquote class="speech bubble inline-block w-[510px] relative top-[-200px]">
			<p>Dan would be proud of you!</p>
		</blockquote>
	</Slide>

	<Slide animate>
		<img src="smurfs/jokey-smurf.webp" class="text-center inline-block relative top-[200px] mr-[-200px] h-[600px]" />
		<blockquote class="speech bubble inline-block w-[710px] relative top-[-200px]">
			<p>Just remember to still update state when user closes the banner.</p>
		</blockquote>
	</Slide>


<!-- SUMMARY - MOTIVATION TYPES -->
	<Slide>
		<section data-auto-animate data-background-gradient="linear-gradient(to right, rgb(252, 165, 165), rgb(147, 197, 253), rgb(110, 231, 183))">
			<h2 class="mb-12 font-bold">Motivation</h2>
			<div class="w-full h-full grid grid-cols-3">
				<div>
					<Step><h2>Negative</h2></Step>
				</div>
				<div>
					<Step><h2>Neutral</h2></Step>
				</div>
				<div>
					<Step><h2>Positive</h2></Step>
				</div>
			</div>
		</section>
	</Slide>

	<Slide>
		<section data-auto-animate data-background-gradient="linear-gradient(to right, rgb(252, 165, 165), rgb(147, 197, 253), rgb(110, 231, 183))">
			<div class="w-full h-full grid grid-cols-3">
				<div>
					<h2>Negative</h2>
					<Step fadeRight class="flex gap-12 flex-col mt-12">
						<h4>Code protection</h4>
						<h4>Revenge</h4>
						<h4>Showing off</h4>
					</Step>
				</div>
				<div>
					<h2>Neutral</h2>
					<Step fadeUp class="flex gap-12 flex-col mt-12">
						<h4>Duty</h4>
					</Step>
				</div>
				<div>
					<h2>Positive</h2>
					<Step fadeLeft class="flex gap-12 flex-col mt-12">
						<h4>Knowledge sharing</h4>
						<h4>Personal growth</h4>
						<h4>Empathy</h4>
						<h4>Fun</h4>
					</Step>
				</div>
			</div>
		</section>
	</Slide>

	<Slide animate>
    <h2 class="font-bold">Which team do you choose?</h2>
		<Notes>Been there - driven by revenge.</Notes>
  </Slide>

	<Slide>
		<img src="godzilla.gif" class="text-center inline-block h-[600px]" />
		<Notes>Sometimes - to protect baby code.
			<br />
			Usually - out of duty.
		</Notes>

	</Slide>

	<Slide />

	<Slide>
		<img src="bored-penguin.gif" class="text-center inline-block h-[600px]" />
		<Notes>The best moments are when I do it for fun.
			<br />
			Like each other - spend time together.
			<br />
			Makes the process ligther and easier to handle.
		</Notes>
	</Slide>

	<Slide animate>
		<Step class="italic"><h3>Memes</h3></Step>
		<Step class="italic mb-16"><h3>Jokes</h3></Step>
		
		<Step><h3>Sense of humour</h3></Step>
		<Step><h3 data-id="proper-cr">Proper code review</h3></Step>
		<Notes>
			Like each other - spend time together.
			<br />
			Makes the process ligther and easier to handle.
		</Notes>
  </Slide>

	<Slide animate>
		<h3 data-id="proper-cr" class="!text-9xl text-pink-800 font-bold">Proper code review</h3>
		<Notes>
			All those rules boild down to 2 simple questions.
		</Notes>
  </Slide>


	<!-- BONUS -RULES OF PROPER CR -->
	<Slide>
		<h2>Does it do the work?</h2>
		<Step>
			<h4>Without breaking anything...</h4>
		</Step>
		<Notes>
			Does it do the work business-wise. Does it do what's written in the task, without breaking anything, including performance and security
		</Notes>
	</Slide>

	<Slide>
		<h2>Do you like it?</h2>
		<Notes>
			Do you understand it?
			Is it readable?
			Consistency?
			Styling?
			This code review is not the last time you look at this code. And if that typo makes you angry, it still will next time you see it.
			<br />
			It would be really nice to like what you look at, right?
			<br />
			Spend 8 hours a day with the code.
		</Notes>
	</Slide>

	<Slide>
		<h2 class="font-bungee-spice">It's worth it!</h2>
		<Notes>
			You might be wondering - is it really worth it?
			<br />
			Good code review culture means good and maintainable code.
			<br />
			Code where everyone, including newcomers and juniors, feel safe and comfortable.
			<br />
			And that culture is really worth fighting for and following.
		</Notes>
	</Slide>

	<Slide>
		<h1 class="font-pacifico thankYou">Thank you!</h1>
		<Notes>
			Enjoy your CR.
			<br />
			And your coffee break!
		</Notes>
	</Slide>
</Presentation>
