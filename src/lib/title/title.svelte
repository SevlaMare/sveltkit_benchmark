<script>
  import styled from './style.module.css';

  export let content = '';
</script>

<div>
  <h1 class={styled.title}>{content}</h1>
  <hr class={styled.line} />
</div>
