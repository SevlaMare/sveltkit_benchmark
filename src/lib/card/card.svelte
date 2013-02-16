<script>
  import styled from './style.module.css';

  export let title = '';
  export let desc = '';
  export let source = '';
  export let link = '';
  export let img = '';
  export let slug = '';
</script>

<article class={styled.card}>
  <div class={styled.box1}>
    <img
      class={styled.thumb}
      width="100%"
      alt="screenshot"
      title="screenshot"
      src={img}
    />
  </div>

  <div class={styled.box2}>
    <!-- DESCRIPTION -->
    <a href={slug} class={styled.link}>
      <h4 class="f12 mt-15-x">{title}</h4>
    </a>
    <p class="mb-2">
      {desc}
    </p>

    <!-- TAGS -->
    <ul class={styled.tag}>
      <li>CSS</li>
      <li>HTML</li>
      <li>Responsive Design</li>
      <li>Mobile First</li>
      <li>User Experience</li>
      <li>User Interface</li>
    </ul>

    <!-- LINKS -->
    <div class="mt-2">
      <a href={link} target="_blank" class={`${styled.btn} ${styled.btn_live}`}
        >LIVE DEMO</a
      >
      <a
        href={source}
        target="_blank"
        class={`${styled.btn} ${styled.btn_source}`}>SOURCE CODE</a
      >
    </div>
  </div>
</article>
