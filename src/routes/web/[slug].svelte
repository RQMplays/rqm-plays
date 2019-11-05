<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`web/${params.slug}.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { post: data }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import { onMount } from 'svelte'
  import { fly, fade } from 'svelte/transition'
  import { send, receive } from 'crossfade'

  function typewriter(node, { delay, duration, length }) {
    return {
      delay,
      duration,
      css: t =>
        `width: ${~~(t * 100)}%; border-color: ${
          ~~(t * 15) % 2 === 0 ? 'transparent' : '#abde34'
        };`
    }
  }

  export let post
</script>

<style>
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  .content :global(img) {
    border-radius: 40px;
    width: 100%;
    height: auto;
  }

  .content {
    display: flex;
    flex-direction: row;
  }

  .content :global(.text-area) {
    max-width: 40%;
    margin-right: 2rem;
  }

  .content :global(.text) {
    position: absolute;
    left: 0;
    top: 0;
    float: left;
    overflow: hidden;
    border-right: 0.15em solid transparent;
    white-space: nowrap;
    margin: 0 auto;
    color: white;
  }

  .content :global(.text-placeholder) {
    display: inline-block;
    position: relative;
    white-space: nowrap;
    color: rgba(0, 0, 0, 0);
    padding-right: 4px;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<main>
  <h1 in:receive={{ key: post.title, in: true }} out:send={{ key: post.title }}>
    <a href={post.link} target="blank">{post.title}</a>
  </h1>

  <div class="content">
    <div class="text-area">
      {#each post.phrases as phrase}
        <div class="text-placeholder">
          {phrase.text}
          <p
            class="text"
            in:typewriter={{ delay: 1000 + phrase.delay, duration: phrase.text.length * phrase.speed }}
            out:fade={{ duration: 200 }}>
            {phrase.text}
          </p>
        </div>
      {/each}
    </div>

    {#if post.img}
      <a href={post.link} target="blank">
        <img
          in:fly={{ delay: 400, duration: 1500, y: -40 }}
          out:fade={{ duration: 200 }}
          src={post.img}
          alt={post.alt} />
      </a>
    {/if}
  </div>
</main>
