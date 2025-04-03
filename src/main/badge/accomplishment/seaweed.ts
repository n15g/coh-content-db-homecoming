import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { LorenzAnsaldo } from '../../contact/lorenz-ansaldo'

export const Seaweed: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'seaweed',
  setTitle: { id: 335 },
  name: 'Seaweed',
  alignment: ['V'],
  badgeText: `The Sea Witch won't be bothering you anymore.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Carpe Diem" entry with number 6.29 in the 20-24 level range.`,
  links: [
    { title: 'Seaweed Badge', href: 'https://homecoming.wiki/wiki/Seaweed_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-3.png',
  requirements: [
    { key: 'tdsw', type: 'MISSION', missionName: 'Take Down Sea Witch', contactKey: LorenzAnsaldo.key },
  ],
}
