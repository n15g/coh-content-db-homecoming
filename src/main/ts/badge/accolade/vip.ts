import { BadgeData } from 'coh-content-db'

export const VIP: BadgeData = {
  type: 'accolade',
  key: 'vip',
  setTitleId: [183],
  name: [
    { alignment: 'hero', value: 'V.I.P.' },
    { alignment: 'villain', value: 'Destined One' },
  ],
  releaseDate: '2012-11-30',
  morality: 'primal',
  badgeText: [
    { alignment: 'hero', value: `Being a V.I.P. in Paragon City has many advantages associated with it.` },
    { alignment: 'villain', value: `Being one of Kalinda's Destined Ones brings with it many perks, and just as many enemies.` },
  ],
  acquisition: `Awarded on initial login of a Primal-origin character.`,
  links: [
    { title: 'V.I.P. Badge', href: 'https://homecoming.wiki/wiki/V.I.P._Badge' },
    { title: 'Destined One Badge', href: 'https://homecoming.wiki/wiki/Destined_One_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/char-creation.png',
}
