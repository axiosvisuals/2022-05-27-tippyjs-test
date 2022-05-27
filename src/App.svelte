<script>
  import Meta from "./Meta.svelte";
  import Window from "./components/Window.svelte";
  import tooltip from "./js/tooltip";

  const tooltipContent = `This is a <strong>test</strong> of the tooltip content.`;
</script>

<Window />
<!-- Outer div must have class 'chart-container' don't change -->
<div class="chart-container">
  <Meta />
  <h1 class="headline">Tippy.js test project</h1>
  <p class="dek">Dek; Units / legend</p>
  <div
    id="test"
    use:tooltip={{
      content: tooltipContent,
      followCursor: true,
    }}
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
      quis exercitationem culpa nesciunt nihil aut nostrum explicabo
      reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
      Voluptatum ducimus voluptates voluptas?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
      quis exercitationem culpa nesciunt nihil aut nostrum explicabo
      reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
      Voluptatum ducimus voluptates voluptas?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
      quis exercitationem culpa nesciunt nihil aut nostrum explicabo
      reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
      Voluptatum ducimus voluptates voluptas?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
      quis exercitationem culpa nesciunt nihil aut nostrum explicabo
      reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
      Voluptatum ducimus voluptates voluptas?
    </p>
  </div>
</div>

<style lang="scss">
  :global {
    @import "scss/style.scss";
  }

  #test {
    width: 80%;
    height: 50vh;
    margin: 4rem auto;
    background: #f1f1f1;
  }
</style>
