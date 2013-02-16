<script>
  import Card from '$lib/card/card.svelte';
  import Title from '$lib/title/title.svelte';
  import styled from './style.module.css';

  export let data;
</script>

<div class={styled.container}>
  <Title content={'Featured Projects'} />

  <section class={styled.projects}>
    {#each data.projects as item}
      <Card
        title={item.title}
        desc={item.description}
        source={item.source}
        link={item.link}
        slug={`project/${item.id}`}
        img={item.img}
      />
    {/each}
  </section>
</div>
