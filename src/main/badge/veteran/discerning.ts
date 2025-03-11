import { BadgeData } from 'coh-content-db'

export const Discerning: BadgeData = {
  type: 'VETERAN',
  key: 'discerning',
  setTitle: { id: 1274 },
  name: [
    { value: 'Discerning' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Your experience could outstrip even several seasoned heroes combined. You know what's what; there are no surprises for you anymore. You have attained sixty Veteran levels.` },
    { alignment: 'V', value: `Your experience could outstrip even several seasoned villains combined. You know what's what; there are no surprises for you anymore. You have attained sixty Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 60',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-60.png' }],
}
