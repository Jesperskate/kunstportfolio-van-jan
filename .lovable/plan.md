

# Display Smelik & Stokking Gallery Artworks on JanVoorendt.nl

## What We Found

The Smelik & Stokking gallery page lists **12+ artworks** by Jan Voorendt, including sculptures in bronze, cortenstaal, and RVS. Each artwork has a thumbnail and full-size image available.

Artworks found:
- Boom (Brons, 40x30x30 cm)
- The World is Changing I, II, III (RVS)
- Cubism I, II, IV, V (Cortenstaal)
- Knotwilg, Boom met vogels, Boom met boomklever en specht
- Baobab, Dansende boom, Boompje, Goudvinken, Treurwilg met schaapjes

## Implementation Steps

### 1. Download all artwork images
Run a script to fetch each full-size image from `smelik-stokking.nl` and save them to `public/lovable-uploads/smelik-stokking/`. The URL pattern is:
`https://www.smelik-stokking.nl/static/img/kunstwerken/{ID}/large-foto_1_{ID}.jpg`

We'll also scrape each detail page to capture material, dimensions, and price info.

### 2. Create gallery data file
Add a new data file `src/data/smelikArtworks.ts` containing all scraped artworks with title, image path, material, dimensions, and description sourced from the gallery.

### 3. Create new "Galerie" page
Build `src/pages/GalerieSmelik.tsx` — a new page titled "Te Koop bij Smelik & Stokking" that:
- Uses the existing `Layout` and `ArtworkGrid` components
- Displays all gallery artworks in the familiar grid style
- Includes a link/credit to the Smelik & Stokking website
- Shows price and material info in the artwork modal

### 4. Add route and navigation
- Add route `/galerie-smelik-stokking` in `App.tsx`
- Add a navigation link in `Navbar.tsx`

## Technical Details

- Images are downloaded at build time and stored locally — no runtime dependency on the external site
- Reuses existing `Artwork` interface and `ArtworkGrid` component
- The page will include a prominent link to the Smelik & Stokking website for purchasing

