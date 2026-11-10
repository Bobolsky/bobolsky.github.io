import { getCollection, getEntry } from 'astro:content';

export async function getPage(id: string) {
  const entry = await getEntry('pages', id);
  if (!entry) throw new Error(`Missing page content: src/content/pages/${id}.md`);
  return entry;
}

export async function getCaseStudies() {
  return (await getCollection('caseStudies', ({ data }) => !data.draft)).sort(
    (a, b) => a.data.order - b.data.order,
  );
}
