<script>
  import { send, receive } from 'crossfade'
</script>

<style>
  img {
    position: absolute;
    left: 500px;
    top: 100px;
    border-radius: 1000px;
  }
</style>

<svelte:head>
  <title>Mapping</title>
</svelte:head>

<main>
  <p in:receive={{ key: 'text', in: true }} out:send={{ key: 'text' }}>
    <strong>Let's play with some JavaScript ;)</strong>
  </p>

  <img
    in:receive={{ key: 'img', in: true }}
    out:send={{ key: 'img' }}
    src="avatarrqm.jpg"
    alt="rqm" />

  <h1 in:receive={{ key: 'title', in: true }} out:send={{ key: 'title' }}>
    Welcome !
  </h1>

</main>
