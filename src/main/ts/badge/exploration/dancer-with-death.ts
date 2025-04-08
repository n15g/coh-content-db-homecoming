import { BadgeData } from 'coh-content-db'
import { FirebaseZulu } from '../../zone/firebase-zulu'

export const DancerWithDeath: BadgeData = {
  type: 'exploration',
  key: 'dancer-with-death',
  setTitleId: [1803],
  name: 'Dancer with Death',
  morality: 'paragon-city-access',
  badgeText: `Point Tango has come under repeated assaults that have wrought more devastation than any of the other military installations in the Shadow Shard.
The damage of these constant attacks is evident in the shattered concrete structures, the warped metal supports, and on the faces of the soldiers manning Point Tango.
Despite the danger of their post, they are unflinching in their defense of the installation.
In the spirit of the name of their base, Point Tango, they've coined the phrase "Dance with Death" for whenever the denizens of the Shadow Shard launch another attack against their position.
They welcome you to dance with them, and survive as they have... if you can.`,
  notes: `Located 83 yards NE of Point Tango, at the base of the lookout tower.`,
  links: [
    { title: 'Dancer with Death Badge', href: 'https://homecoming.wiki/wiki/Dancer_with_Death_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FirebaseZulu.key, coords: [-2856, 1651, -3551] }, vidiotMapKey: '7' },
  ],
}
