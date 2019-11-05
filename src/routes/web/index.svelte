<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`web.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts }
      })
  }
</script>

<script>
  import { send, receive } from 'crossfade'

  export let posts
</script>

<style>
  ul {
    margin: 0 auto;
    line-height: 1.5;
    list-style-type: none;
  }

  a {
    font-size: 3rem;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<main>
  <ul>
    {#each posts as post, i}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li
        in:receive={{ key: post.title, in: true }}
        out:send={{ key: post.title }}>
        <a rel="prefetch" href="web/{post.slug}">{post.title}</a>
      </li>
    {/each}
  </ul>
</main>
