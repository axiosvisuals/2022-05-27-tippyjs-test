<script>
  import Meta from "./Meta.svelte";
  import Window from "./components/Window.svelte";

  // Handle responsive iframes for Eden embeds
  import pym from "pym.js";

  new pym.Child({
    polling: 500,
  });
</script>

<Window />
<!-- Outer div must have class 'chart-container' don't change -->
<div class="chart-container">
  <Meta />
  <h1 class="headline">Hed</h1>
  <p class="dek">Dek; Units / legend</p>
</div>

<style lang="scss">
  :global {
    @import "scss/style.scss";
  }
</style>
