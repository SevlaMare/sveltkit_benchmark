<script>
  import Nav from '$lib/nav/nav.svelte';
  import Footer from '$lib/footer/footer.svelte';

  import '../styles/global.css';
</script>

<Nav />
<main>
  <slot />
</main>
<Footer />

<style>
  main {
    min-height: calc(100vh - 90px);
  }
</style>
