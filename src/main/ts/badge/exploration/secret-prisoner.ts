import { BadgeData, zoneLink } from 'coh-content-db'
import { UndergroundNova } from '../../zone/underground-nova'

export const SecretPrisoner: BadgeData = {
  type: 'exploration',
  key: 'secret-prisoner',
  setTitleId: [1640],
  name: 'Secret Prisoner',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have found one of the most forbidden of places in Praetoria: the secret interrogation chamber beneath the PPD Precinct where the officers take the most recalcitrant prisoners for enhanced interrogations.`,
  notes: `The Secret Prisoner Badge has two locations in ${zoneLink(UndergroundNova)}:

* (-1424, 511, 1957)
* (-2192, 511, -2888) (534 yds NE of the Imperial Tunnel access).

It is only necessary to visit **one** location to earn this badge.`,
  links: [
    { title: 'Secret Prisoner Badge', href: 'https://homecoming.wiki/wiki/Secret_Prisoner_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    {
      key: 'loc-0', type: 'location', location: [
        { zoneKey: UndergroundNova.key, coords: [-1424, 511, 1957], icon: 'badge', iconText: '5' },
        { zoneKey: UndergroundNova.key, coords: [-2192, 511, -2888], icon: 'badge', iconText: '5' },
      ],
    },
  ],
}
