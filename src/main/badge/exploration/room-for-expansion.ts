import { BadgeData } from 'coh-content-db'
import { SkywayCity } from '../../zone/skyway-city'

export const RoomForExpansion: BadgeData = {
  type: 'exploration',
  key: 'room-for-expansion',
  setTitleId: [1536],
  name: 'Room for Expansion',
  morality: 'heroic',
  zoneKey: SkywayCity.key,
  loc: [687, 0, -141],
  badgeText: [{
    value: 'With Faultline gaining traffic, many people are calling for more apartments to be built in this area and for Longbow to move their Bloody Bay heli-pad to another location.'
      + ' Longbow refuses however, stating this is the safest place for them to be, and that they are also keeping the Lost of the area in check.',
  }],
  notes: 'The Room for Expansion Badge is at the entrance of the parking lot between the Faultline and Bloody Bay zone connections in Skyway City.',
  links: [
    { title: 'Room for Expansion Badge', href: 'https://homecoming.wiki/wiki/Room_for_Expansion_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '6',
}
