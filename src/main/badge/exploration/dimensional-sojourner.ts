import { BadgeData, mapLink } from 'coh-content-db'
import { FirebaseZulu } from '../../map/firebase-zulu'

export const DimensionalSojourner: BadgeData = {
  type: 'EXPLORATION',
  key: 'dimensional-sojourner',
  setTitle: { id: 1798 },
  name: [{ value: 'Dimensional Sojourner' }],
  alignment: ['H'],
  mapKey: FirebaseZulu.key,
  loc: [5981, 1120, 916],
  badgeText: [{
    value: 'You have tread upon the soil of a parallel dimension and now are ready to expand your horizons.'
      + ' From this point, portals link Firebase Zulu to other operational bases scattered throughout the Shadow Shard.'
      + ' Each minute you spend here places you among a tiny fraction of the human race who have not only left the world of their birth, but breathed the air of an alien world.'
      + ' You are a rare breed, a privileged traveler, a Dimensional Sojourner.',
  }],
  notes: `Located in ${mapLink(FirebaseZulu)} 179 yards NE of the Firebase Zulu marker, in the middle of the portals that provide transport to the other Shard zones.`,
  links: [
    { title: 'Dimensional Sojourner Badge', href: 'https://homecoming.wiki/wiki/Dimensional_Sojourner_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '2',
}
