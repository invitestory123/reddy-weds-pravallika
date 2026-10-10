# Customer Editing Guide — ghibli-portrait

Studio-Ghibli illustrated storybook wedding invitation featuring childhood portraits, illustrated story chapters, ceremony details, families, countdown timer, venue map, and photo gallery.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ `editable/wedding-data.js`

### 1. Couple Names & Tagline
Edit `couple` in `editable/wedding-data.js`:
- `bride`: Full bride name (e.g. `"Amelia Rose Bennett"`)
- `groom`: Full groom name (e.g. `"James Alexander Cole"`)
- `brideShort`: First name for headers/alt tags (e.g. `"Amelia"`)
- `groomShort`: First name for headers/alt tags (e.g. `"James"`)
- `tagline`: Two-line headline string (separated by newline `\n`)

### 2. Date, Time & Countdown
Edit in `editable/wedding-data.js`:
- `weddingDate`: ISO local timestamp string (`YYYY-MM-DDTHH:MM:SS+05:30`), drives live countdown timer & calendar invites
- `displayDate`: Human-readable date string (e.g. `"Saturday, December 12th, 2026"`)
- `details.ceremony`: Ceremony event title, venue name, time slot, and arrival note

### 3. Story Chapters
Edit `story` array in `editable/wedding-data.js`:
- Each item has `title`, `date`, and `text` describing key relationship milestones.

### 4. Venue & Map
Edit `venue` in `editable/wedding-data.js`:
- `name`: Estate or venue name
- `address`: Street address
- `mapQuery`: Search query sent to Google Maps directions

### 5. Families & Wedding Party
Edit `families.bride` and `families.groom` in `editable/wedding-data.js`:
- `label`, `title`, and `photo` path
- `members`: List of family members (`name`, `relation`)

### 6. Images & Gallery
Replace files directly in `editable/assets/` or update paths in `editable/wedding-data.js`:
- Hero childhood portraits: `childhood-bride.png`, `childhood-groom.png`
- Hero illustrated portraits: `portrait-bride.png`, `portrait-groom.png`
- Hero body cutouts: `body-bride.png`, `body-groom.png`
- Family portraits: `family-bride.png`, `family-groom.png`
- Gallery images: `gallery-1.png` through `gallery-6.png`

---

## Rules for Future Agents

1. Make edits in `editable/wedding-data.js` and swap image files in `editable/assets/`.
2. Do not modify production files in `assets/` unless structural changes are requested.
3. Verify syntax with `node --check editable/wedding-data.js`.
