import { BadgeData } from 'coh-content-db'
import { UndergroundNova } from '../../map/underground-nova'

export const SecretPrisoner: BadgeData = {
  type: 'EXPLORATION',
  key: 'secret-prisoner',
  setTitle: { id: 1640 },
  name: [{ value: 'Secret Prisoner' }],
  alignment: ['H', 'V', 'P'],
  mapKey: UndergroundNova.key,
  badgeText: [{
    value: 'You have found one of the most forbidden of places in Praetoria: the secret interrogation chamber beneath the PPD Precinct where the officers take the most recalcitrant'
      + ' prisoners for enhanced interrogations.',
  }],
  notes: 'The Secret Prisoner Badge has two locations in [map:underground-nova].\n'
    + '\n'
    + 'Its coordinates are either (-1424, 511, 1957) or (-2192, 511, -2888) (534 yds NE of the Imperial Tunnel access). It is necessary to visit only one location to earn this badge.',
  links: [
    { title: 'Secret Prisoner Badge', href: 'https://homecoming.wiki/wiki/Secret_Prisoner_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '5',
}
