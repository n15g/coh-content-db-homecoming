import { BadgeData } from 'coh-content-db'
import { NightWard } from '../../zone/night-ward'

export const HappyCamper: BadgeData = {
  type: 'exploration',
  key: 'happy-camper',
  setTitleId: [2227],
  name: 'Happy Camper',
  morality: 'all',
  badgeText: `You have landed in the heart of the Black Knight's encampment.
Whether you stormed through with guns blazing or stealthily slinked past its many guards, Night Ward recognizes the bold of spirit and plays her next move accordingly.`,
  notes: `Located in the Howling Vale neighborhood, 514 yards NE of the map marker, near the center of the Black Knight's tent encampment.`,
  links: [
    { title: 'Happy Camper Badge', href: 'https://homecoming.wiki/wiki/Happy_Camper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NightWard.key, coords: [104, 27, 2029] }, vidiotMapKey: '2' },
  ],
}
