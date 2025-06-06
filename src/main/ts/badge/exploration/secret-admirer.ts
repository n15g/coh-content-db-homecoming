import { BadgeData } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'

export const SecretAdmirer: BadgeData = {
  type: 'exploration',
  key: 'secret-admirer',
  setTitleId: [106],
  name: 'Secret Admirer',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `Before becoming guardian of Croatoa, War Witch shared an apartment here with her roommate Apex.`,
  notes: 'Located 119 yards south of the Wentworth Consignment House.',
  links: [
    { title: 'Secret Admirer Badge', href: 'https://homecoming.wiki/wiki/Secret_Admirer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SteelCanyon.key, coords: [-3438, 0, 2536], icon: 'badge', iconText: '1' } },
  ],
}
