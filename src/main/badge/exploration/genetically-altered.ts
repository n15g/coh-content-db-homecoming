import { BadgeData, mapLink } from 'coh-content-db'
import { PeregrineIsland } from '../../map/peregrine-island'

export const GeneticallyAltered: BadgeData = {
  type: 'EXPLORATION',
  key: 'genetically-altered',
  setTitle: { id: 1574 },
  name: [{ value: 'Genetically Altered' }],
  alignment: ['H'],
  mapKey: PeregrineIsland.key,
  loc: [-1510, 0, -6335],
  badgeText: [{
    value: 'Scientists still aren\'t sure what exactly these massive bones belong to.'
      + ' Crey refuses to comment, claiming that the bones are from ancient dinosaurs, though paleontologists refute the claim, saying it looks like no dinosaur they have on record.'
      + ' Despite a lack of evidence, signs point to some sort of genetic shenanigans on Crey\'s part.',
  }],
  notes: `Located in the Cutlass Isles neighborhood of ${mapLink(PeregrineIsland)}.

          It is under the large skeleton 277 yards southwest of the neighborhood marker.`,
  links: [
    { title: 'Genetically Altered Badge', href: 'https://homecoming.wiki/wiki/Genetically_Altered_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '4',
}
