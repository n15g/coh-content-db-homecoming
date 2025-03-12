import { BadgeData } from 'coh-content-db'
import { AbandonedSewerNetwork } from '../../map/abandoned-sewer-network'

export const LivingDark: BadgeData = {
  type: 'EXPLORATION',
  key: 'living-dark',
  setTitle: { id: 1827 },
  name: [{ value: 'Living Dark' }],
  alignment: ['H'],
  mapKey: AbandonedSewerNetwork.key,
  loc: [-896, -890.3, -1018],
  badgeText: [{
    value: `Far away from the light of civilization and the life of normal people, darkness can take on a life of its own.
It flows into every corner, irresistible and tireless, as silent as death. It is the natural state of things down here where your presence is a violation.
The darkness can flow into you if you let it, and standing here in the heart of it, you can feel it pressing in against your consciousness, daring you to open yourself
to it as so many others down here have.`,
  }],
  notes: `Located in [map:abandoned-sewer-network]

The Living Dark badge is in Dr. Vahilok's lab in the Underworld area. It is toward the back of the room, on a raised area of metal grating.`,
  links: [
    { title: 'Living Dark Badge', href: 'https://homecoming.wiki/wiki/Living_Dark_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '7',
}
