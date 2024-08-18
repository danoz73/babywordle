<script lang="ts">
	import { COLS, ROWS } from "../../utils";

	import { Tile } from "../board";
	export let visible: boolean;
</script>

<h3>how to play</h3>
<div>Guess the name of our baby girl in {ROWS} tries!</div>
<div>Each guess must be a {COLS} letter guess. Hit the enter button to submit.</div>
<div>
	After each guess, the color of the tiles will change to show how close your guess was to the
	word.
</div>
<div class:complete={visible} class="examples">
	<div><strong>Examples</strong></div>
	<div class="row">
		<Tile value="i" state="🟩" />
		<Tile value="l" state="🔳" />
		<Tile value="a" state="🔳" />
		<Tile value="n" state="🔳" />
		<Tile value="a" state="🔳" />
	</div>
	<div>The letter <strong>I</strong> is in the name and in the correct spot.</div>
	<div class="row">
		<Tile value="a" state="🔳" />
		<Tile value="v" state="🟨" />
		<Tile value="i" state="🔳" />
		<Tile value="v" state="🔳" />
		<Tile value="a" state="🔳" />
	</div>
	<div>The letter <strong>V</strong> is in the name but in the wrong spot.</div>
	<div class="row">
		<Tile value="n" state="🔳" />
		<Tile value="a" state="🔳" />
		<Tile value="o" state="🔳" />
		<Tile value="m" state="⬛" />
		<Tile value="i" state="🔳" />
	</div>
	<div>The letter <strong>M</strong> is not in the name in any spot.</div>
</div>
<div style="font-size: 10px;">
	Hacked together from the open source Wordle code written by
	<a href="https://github.com/MikhaD" target="_blank" rel="noreferrer">MikhaD</a>.
</div>

<style lang="scss">
	div {
		margin: 14px 0;
	}
	.examples {
		border-top: 1px solid var(--border-primary);
		border-bottom: 1px solid var(--border-primary);
		:global(.row > *) {
			height: 100%;
			aspect-ratio: 1;
		}
		&:not(.complete) :global(.row .back) {
			transition-delay: 0.3s;
		}
	}
	.row {
		height: 40px;
		display: flex;
		gap: 4px;
	}
</style>
