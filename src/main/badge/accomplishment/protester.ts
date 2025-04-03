import { BadgeData, zoneLink } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'

export const Protester: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'protester',
  setTitle: { id: 1418 },
  name: 'Protester',
  alignment: ['H', 'V', 'P'],
  badgeText: 'Not one to stand idly by, you have made your opinions known. For better or for worse.',
  acquisition: `Complete the The Protest zone event in ${zoneLink(NovaPraetoria)}.`,
  links: [
    { title: 'Protester Badge', href: 'https://homecoming.wiki/wiki/Protester_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/protester.png',
}
