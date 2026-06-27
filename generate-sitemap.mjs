import { writeFileSync } from "fs";
import { projects } from "./src/data/projects.js"; // sesuaikan path file data kamu

const BASE_URL = "https://www.aryhnr-webdev.my.id";

const urls = [
  `  <url>
    <loc>${BASE_URL}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`,
  ...projects.map(
    (p) => `  <url>
    <loc>${BASE_URL}/project/${p.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`,
  ),
].join("\n\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls}

</urlset>`;

writeFileSync("./public/sitemap.xml", sitemap);
console.log(`Sitemap generated! Total: ${projects.length + 1} URLs`);
