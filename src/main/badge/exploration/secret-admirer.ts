import { BadgeData } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'

export const SecretAdmirer: BadgeData = {
  type: 'exploration',
  key: 'secret-admirer',
  setTitleId: [106],
  name: 'Secret Admirer',
  morality: 'heroic',
  zoneKey: SteelCanyon.key,
  loc: [-3438, 0, 2536],
  badgeText: `Before becoming guardian of Croatoa, War Witch shared an apartment here with her roommate Apex.`,
  notes: '119 yards south of the Wentworth Consignment House.',
  links: [
    { title: 'Secret Admirer Badge', href: 'https://homecoming.wiki/wiki/Secret_Admirer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '1',
}
