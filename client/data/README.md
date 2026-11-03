# Your website content

Everything the website shows comes from this folder. You never need to touch `src/`.

| To change | Edit |
|---|---|
| Name, social links, footer, Google text | `site.ts` |
| First screen of the home page | `hero.ts` |
| Bio, photo, number boxes | `about.ts` |
| Section headings | `sections.ts` |
| Projects | `projects.ts` |
| Research papers | `research.ts` |
| Work experience | `experience.ts` |
| Hackathons | `hackathons.ts` |
| Articles and their links | `articles.ts` |
| Skills | `skills.ts` |
| Education | `education.ts` |
| Hobby builds | `hobbies.ts` |

## Adding a picture

1. Put the file in the matching folder, such as `images/projects/heat-api.png`.
2. Add its path to the entry in the `.ts` file:

   ```ts
   image: 'images/projects/heat-api.png',
   ```

Use `.jpg`, `.png`, `.webp` or `.svg`, and keep pictures under about 500 KB so the site stays
fast. A full web link (`https://...`) also works.

The small browser-tab icon is `images/favicon.svg`.

## Adding a PDF

Put the file in `files/`, then add its path to the paper in `research.ts`:

```ts
pdf: 'files/my-paper.pdf',
```

## Hiding something

Add `draft: true` to an entry to hide it without deleting it. Pages with nothing to show disappear
from the menu by themselves, and come back once they have a visible entry.

## Publishing

1. Run `npm run dev` in the `client` folder and check the result at the address it prints.
2. Run `npm run build`. It reports any mistake in these files.
3. Commit and push to `main`. Vercel publishes the site automatically.
