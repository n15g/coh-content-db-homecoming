import { BadgeData } from 'coh-content-db'

export const VIP: BadgeData = {
  type: 'ACCOLADE',
  key: 'vip',
  setTitle: { id: 183 },
  name: [
    { alignment: 'H', value: 'V.I.P.' },
    { alignment: 'V', value: 'Destined One' },
  ],
  alignment: ['H', 'V'],
  badgeText: [
    { alignment: 'H', value: `Being a V.I.P. in Paragon City has many advantages associated with it.` },
    { alignment: 'V', value: `Being one of Kalinda's Destined Ones brings with it many perks, and just as many enemies.` },
  ],
  acquisition: `Awarded on initial login of a Primal-origin character.`,
  links: [
    { title: 'V.I.P. Badge', href: 'https://homecoming.wiki/wiki/V.I.P._Badge' },
    { title: 'Destined One Badge', href: 'https://homecoming.wiki/wiki/Destined_One_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/char-creation.png' },
  ],
}
