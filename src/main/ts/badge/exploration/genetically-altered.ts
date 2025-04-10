import { BadgeData } from 'coh-content-db'
import { PeregrineIsland } from '../../zone/peregrine-island'

export const GeneticallyAltered: BadgeData = {
  type: 'exploration',
  key: 'genetically-altered',
  setTitleId: [1574],
  name: 'Genetically Altered',
  morality: 'paragon-city-access',
  badgeText: `Scientists still aren't sure what exactly these massive bones belong to.
Crey refuses to comment, claiming that the bones are from ancient dinosaurs, though paleontologists refute the claim, saying it looks like no dinosaur they have on record.
Despite a lack of evidence, signs point to some sort of genetic shenanigans on Crey's part.`,
  notes: `Located in the Cutlass Isles neighborhood, under the large skeleton 277 yards southwest of the neighborhood marker.`,
  links: [
    { title: 'Genetically Altered Badge', href: 'https://homecoming.wiki/wiki/Genetically_Altered_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PeregrineIsland.key, coords: [-1510, 0, -6335], icon: 'badge', iconText: '4' } },
  ],
}
