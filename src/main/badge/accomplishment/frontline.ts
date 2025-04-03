import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { CadaoKestrel } from '../../contact/cadao-kestrel'

export const Frontline: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'frontline',
  setTitle: { id: 81 },
  name: 'Frontline',
  alignment: ['H'],
  badgeText: 'You stopped a battle between the Circle of Thorns and the Oranbegans from another dimension.',
  acquisition: 'Complete the Stop the Circle of Thorns from contacting an alternate world mission from Cadao Kestrel',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "The Arrival of the Oranbegans" entry with number 0.39 in the 35-39 level range.`,
  links: [
    { title: 'Frontline Badge', href: 'https://homecoming.wiki/wiki/Frontline_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/frontline.png',
  requirements: [
    { key: 'stop-the-circle-of-thorns-from-contacting-an-alternate-world', type: 'MISSION', missionName: 'Stop the Circle of Thorns From Contacting an Alternate World', contactKey: CadaoKestrel.key },
  ],
}
