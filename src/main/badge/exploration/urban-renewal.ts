import { BadgeData } from 'coh-content-db'
import { Neutropolis } from '../../map/neutropolis'

export const UrbanRenewal: BadgeData = {
  type: 'EXPLORATION',
  key: 'urban-renewal',
  setTitle: { id: 1730 },
  name: [{ value: 'Urban Renewal' }],
  alignment: ['H', 'V', 'P'],
  mapKey: Neutropolis.key,
  loc: [6356, -64, -1206],
  badgeText: [{
    value: 'Older sections of the city like this pre-date much of Emperor Cole\'s reign, and as such have not been renovated to match the rest of the city.'
      + ' Constant distractions and sabotage by the Resistance and others have delayed such work indefinitely.',
  }],
  notes: 'Located in [map:neutropolis] 438 yards NW of the Lambda Sector marker.',
  links: [
    { title: 'Urban Renewal Badge', href: 'https://homecoming.wiki/wiki/Urban_Renewal_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '8',
}
