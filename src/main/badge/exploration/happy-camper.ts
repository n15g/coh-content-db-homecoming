import { BadgeData, zoneLink } from 'coh-content-db'
import { NightWard } from '../../zone/night-ward'

export const HappyCamper: BadgeData = {
  type: 'EXPLORATION',
  key: 'happy-camper',
  setTitle: { id: 2227 },
  name: [{ value: 'Happy Camper' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: NightWard.key,
  loc: [104, 27, 2029],
  badgeText: [{
    value: `You have landed in the heart of the Black Knight's encampment.
Whether you stormed through with guns blazing or stealthily slinked past its many guards, Night Ward recognizes the bold of spirit and plays her next move accordingly.`,
  }],
  notes: `Located in ${zoneLink(NightWard)}, in the Howling Vale neighborhood, 514 yards NE of the map marker; near the center of the Black Knight's tent encampment.`,
  links: [
    { title: 'Happy Camper Badge', href: 'https://homecoming.wiki/wiki/Happy_Camper_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '2',
}
