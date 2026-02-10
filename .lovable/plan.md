

# Add 8 New Artworks to the Site

## New Artworks Overview

Here are the 8 new artworks, categorized and named:

### Buitenbeelden (Outdoor Sculptures) - 6 new works

| Image | Proposed Name | Material | Description |
|-------|--------------|----------|-------------|
| beeld-rond.jpeg | Sferische Harmonie | RVS | Ronde sculptuur van gebogen RVS-banden die een open bolvorm creeren, spelend met licht en ruimte. |
| Circel3.jpeg | Oneindige Cirkel | RVS op stalen sokkel | Verweven cirkels van geborsteld RVS op een robuuste sokkel, een meditatie over verbondenheid en beweging. |
| TheWorldIsFallingApart2026.jpeg | The World Is Falling Apart | RVS | Een monumentale bolvorm van uiteenvallende RVS-banden, een krachtig statement over fragiliteit en verandering. |
| Cosrenstaal-Boom.jpeg | Cortenstaal Boom II | Cortenstaal | Een gestileerde boom met scherpe, naar de hemel reikende takken, opgebouwd uit cortenstaal balken. |
| geoboom.jpeg | Geometrische Boom | Cortenstaal | Een dynamische boomvorm opgebouwd uit hoekige, geometrische segmenten in cortenstaal. |
| laswerk-boom-2026.jpeg | Gestapelde Boom | Cortenstaal (laswerk) | Een organische boomvorm van gestapelde, gelaste cortenstaal platen die als schijven naar een punt toewerken. |

### Bronzen Beelden (Bronze Sculptures) - 1 new work

| Image | Proposed Name | Material | Description |
|-------|--------------|----------|-------------|
| GoudenLint.jpeg | Gouden Lint | Brons (verguld) | Een sierlijk slingerend lint in verguld brons dat als een danser naar boven reikt, geplaatst op een natuurstenen sokkel. |

### Grouped Photo (not added as separate artwork)

| Image | Treatment |
|-------|-----------|
| Beelden_laswerk_op_tafel.jpeg | Shows multiple welded tree sculptures together on a table. Since individual versions are already covered by "Gestapelde Boom", this photo will be added as a secondary/group shot alongside the outdoor sculptures section. |

## Implementation Steps

### 1. Copy all 8 images to the public folder
Copy each uploaded image to `public/lovable-uploads/` so they can be referenced in the artwork data.

### 2. Update `src/data/artworks.ts`
- Add 6 new entries to the `outdoorSculptures` array
- Add 1 new entry to the `bronzeSculptures` array
- Each entry includes: id, title, category, image path, description, year (2026 for new works), dimensions (estimated), and material
- Mark new artworks with a `isNew: true` flag

### 3. Update `src/components/ArtworkGrid.tsx`
- Add `isNew` as an optional field to the `Artwork` interface
- Display a small "Nieuw" badge on artwork cards that have `isNew: true`

### 4. Update `src/pages/Index.tsx` - New Artworks Section
- Add a new "Nieuw Werk" section on the homepage between the welcome text and the category previews
- Show a curated grid of the new artworks (3-4 highlighted pieces) with "Nieuw" badges
- Link each to its respective category page

### Technical Details

**Artwork interface change:**
```typescript
export interface Artwork {
  // existing fields...
  isNew?: boolean;
}
```

**New homepage section:** A horizontally scrollable or grid section titled "Nieuw Werk" featuring select new pieces, styled consistently with the existing warm bronze/cream aesthetic.

**ID numbering:** New artworks will use IDs starting from 17 (continuing from the last existing ID of 16).

