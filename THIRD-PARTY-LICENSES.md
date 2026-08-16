# Third-Party Licenses

The EaseOrigin website is proprietary. See [LICENSE](./LICENSE). This file
covers the open source packages it depends on, which stay under their own
licenses and are not affected by ours.

Counts below were taken from the installed dependency tree by reading the
`license` field of every unique package under `node_modules`. Regenerate them
after any dependency change.

## Summary

625 unique packages.

| License | Packages |
|---|---|
| MIT | 539 |
| ISC | 31 |
| Apache-2.0 | 28 |
| BSD-2-Clause | 8 |
| MPL-2.0 | 4 |
| BSD-3-Clause | 4 |
| Unlicense | 2 |
| MIT-0 | 2 |
| LGPL-3.0-or-later | 1 |
| BlueOak-1.0.0 | 1 |
| Python-2.0 | 1 |
| CC-BY-4.0 | 1 |
| CC0-1.0 | 1 |
| 0BSD | 1 |
| MIT AND ISC | 1 |

**No GPL. No AGPL. No packages with a missing or unreadable license field.**

Roughly 86 percent of the tree is MIT, and 97 percent is MIT, ISC, Apache-2.0,
or BSD. Those are all permissive: they require attribution and nothing else for
a hosted website.

## The two that need a note

**LGPL-3.0-or-later, 1 package.** `@img/sharp-libvips-linux-x64`, pulled in by
`sharp`, which Next.js uses for image optimization. It is dynamically linked and
we do not modify it. LGPL obligations attach on *distribution* of the software.
Serving a website to a browser is not distribution of the linked library, so no
obligation is triggered by running this site. If the project ever ships as a
downloadable or redistributable artifact, revisit this.

**MPL-2.0, 4 packages.** `@vercel/og`, `axe-core`, `lightningcss`, and
`lightningcss-linux-x64-gnu`. MPL-2.0 is file-level copyleft: the obligation is
to publish source for MPL-covered files you *modify*. We use all four unmodified,
so nothing is owed. If a patch is ever applied to one of these, that file's
source has to be made available.

## Fonts

Inter and Montserrat, both SIL Open Font License 1.1. They are self-hosted at
build time by `next/font`, so the site makes no request to Google at runtime.

## Regenerating

```bash
npm ci
node -e "
const fs=require('fs'),path=require('path');
const seen=new Map();
(function walk(dir){
  for (const e of fs.readdirSync(dir,{withFileTypes:true})) {
    if (!e.isDirectory()||e.name.startsWith('.')) continue;
    const p=path.join(dir,e.name), pj=path.join(p,'package.json');
    if (fs.existsSync(pj)) {
      try {
        const d=JSON.parse(fs.readFileSync(pj,'utf8'));
        if (d.name&&d.version) {
          let l=d.license;
          if (l&&typeof l==='object') l=l.type;
          seen.set(d.name+'@'+d.version, l||'UNKNOWN');
        }
      } catch {}
    }
    walk(p);
  }
})('node_modules');
const c={};
for (const l of seen.values()) c[l]=(c[l]||0)+1;
console.log('total', seen.size);
console.table(c);
"
```
