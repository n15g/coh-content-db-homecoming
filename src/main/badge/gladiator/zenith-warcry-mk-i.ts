import { BadgeData, badgeLink } from 'coh-content-db'
import { BurkholdersBane } from '../accomplishment/burkholders-bane'

export const ZenithWarcryMkI: BadgeData = {
  type: 'GLADIATOR',
  key: 'zenith-warcry-mk-i',
  setTitle: { id: 497 },
  name: [
    { value: 'Zenith Warcry Mk I' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'Gladiator program initiated.' },
  ],
  acquisition: `Earn the ${badgeLink(BurkholdersBane)} Badge (Council)`,
  links: [
    { title: 'Zenith Warcry Mk I Badge', href: 'https://homecoming.wiki/wiki/Zenith_Warcry_Mk_I_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
