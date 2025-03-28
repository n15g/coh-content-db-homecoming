import { BadgeData, zoneLink } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'

export const CivicMinded: BadgeData = {
  type: 'EXPLORATION',
  key: 'civic-minded',
  setTitle: { id: 1402 },
  name: [{ value: 'Civic Minded' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: NovaPraetoria.key,
  loc: [-4862, 33, -256],
  badgeText: [{
    value: 'This is the heart of Praetoria. Emperor Cole and his Praetors have put great energy into keeping eyes and ears open for the safety of their citizens.',
  }],
  notes: `Located in ${zoneLink(NovaPraetoria)} in the center of the plaza between Praetor Duncan and Praetor White.`,
  links: [
    { title: 'Civic Minded Badge', href: 'https://homecoming.wiki/wiki/Civic_Minded_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '3',
}
