<script>
  import Card from '$lib/card/card.svelte';
  import Title from '$lib/title/title.svelte';

  export let data;
</script>

<section>
  <Title content={`Project: ${data.item.title}`} />

  <Card
    title={data.item.title}
    desc={data.item.description}
    source={data.item.source}
    link={data.item.link}
    img={data.item.img}
  />
</section>
