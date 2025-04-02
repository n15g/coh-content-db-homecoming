import { BadgeData } from 'coh-content-db'
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
  links: [
    { title: 'Zenith Warcry Mk I Badge', href: 'https://homecoming.wiki/wiki/Zenith_Warcry_Mk_I_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: BurkholdersBane.key, type: 'BADGE', badgeKey: BurkholdersBane.key },
  ],
}
