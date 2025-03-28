import { BadgeData, zoneLink } from 'coh-content-db'
import { FoundersFalls } from '../../zone/founders-falls'

export const Misunderstood: BadgeData = {
  type: 'EXPLORATION',
  key: 'misunderstood',
  setTitle: { id: 1563 },
  name: [{ value: 'Misunderstood' }],
  alignment: ['H'],
  zoneKey: FoundersFalls.key,
  loc: [1126, -16, 2149],
  badgeText: [{
    value: 'Voodoo practitioner Cadao Kestrel fled into these tunnels after being accused of murder.'
      + ' Agent Six tracked him here and beat him within an inch of his life before arresting him.'
      + ' Cadao would later be cleared of all charges, but to this day he has not gone near Agent Six, claiming she is, "out of her mind."',
  }],
  notes: `Located directly in front of Agent Six, the Natural store in ${zoneLink(FoundersFalls)}.`,
  links: [
    { title: 'Misunderstood Badge', href: 'https://homecoming.wiki/wiki/Misunderstood_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '8',
}
