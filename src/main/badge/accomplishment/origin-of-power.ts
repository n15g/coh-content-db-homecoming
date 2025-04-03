import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { AshleyMcKnight } from '../../contact/ashley-mcknight'
import { PercyWinkley } from '../../contact/percy-winkley'

export const OriginOfPower: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'origin-of-power',
  setTitle: { id: 989 },
  name: 'Origin of Power',
  alignment: ['H', 'V', 'P'],
  badgeText: 'You gain a deeper understanding of the power and history of origins by talking to a representative of each path.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero or villain can select the "The Origin of Power" entry with number 12.02 at level 50.`,
  links: [
    { title: 'Origin of Power Badge', href: 'https://homecoming.wiki/wiki/Origin_of_Power_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/origin-of-power.png',
  requirements: [
    { key: 'toop', type: 'ARC', missionName: 'The Origin of Power', contactKey: [AshleyMcKnight.key, PercyWinkley.key] },
  ],
}
