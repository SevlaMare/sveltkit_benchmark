export async function load({ fetch, params }) {
  const res = await fetch(`http://localhost:3000/projects/${params.slug}`);
  const item = await res.json();

  return { item };
}
