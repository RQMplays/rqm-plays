<script>
  import { bounceOut } from 'svelte/easing'
  import { send, receive } from 'crossfade'
</script>

<style>
  img {
    border-radius: 1000px;
  }
</style>

<svelte:head>
  <title>RQM- Playground</title>
</svelte:head>

<main>
  <h1 in:receive={{ key: 'title', in: true }} out:send={{ key: 'title' }}>
    Welcome !
  </h1>

  <img
    in:receive={{ key: 'img', in: true }}
    out:send={{ key: 'img' }}
    src="avatarrqm.jpg"
    alt="rqm" />

  <p in:receive={{ key: 'text', in: true }} out:send={{ key: 'text' }}>
    <strong>Let's play with some JavaScript ;)</strong>
  </p>
</main>
