<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

<style>
  :global(body) {
    height: 100vh;
    background: radial-gradient(#1d2563, #0b0e27);
    color: white;
  }

  :global(a) {
    text-decoration: none;
  }

  #container {
    width: 100vw;
  }
</style>

<Nav {segment} />

<div id="container">
  <slot />
</div>
