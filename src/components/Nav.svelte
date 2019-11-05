<script>
  import { crossfade } from 'svelte/transition'

  export let segment

  const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 300),
    fallback(node, params) {
      const style = getComputedStyle(node)
      const transform = style.transform === 'none' ? '' : style.transform

      return {
        duration: 0,
        css: t => `
          transform: ${transform} scale(${t});
          opacity: ${t}
        `
      }
    }
  })
</script>

<style>
  nav {
    z-index: 1000;
    background: linear-gradient(#0b0e27, #1d2563);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  li {
    position: relative;
    list-style-type: none;
    width: 100%;
    max-width: 15rem;
  }

  .underline {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 2px;
    background-color: #abde34;
    display: block;
  }

  a {
    text-align: center;
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a href=".">
        Home
        {#if segment === undefined}
          <div
            class="underline"
            in:receive={{ key: 'underline' }}
            out:send={{ key: 'underline' }} />
        {/if}
      </a>
    </li>
    <li>
      <a href="mapping">
        Mapping
        {#if segment === 'mapping'}
          <div
            class="underline"
            in:receive={{ key: 'underline' }}
            out:send={{ key: 'underline' }} />
        {/if}
      </a>
    </li>
    <li>
      <a href="web">
        Web
        {#if segment === 'web'}
          <div
            class="underline"
            in:receive={{ key: 'underline' }}
            out:send={{ key: 'underline' }} />
        {/if}
      </a>
    </li>
  </ul>
</nav>
