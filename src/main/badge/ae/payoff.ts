import { BadgeData } from 'coh-content-db'

export const Payoff: BadgeData = {
  type: 'AE',
  key: 'payoff',
  setTitle: { id: 1234 },
  name: [
    { value: 'Payoff' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'I spent 1000 Mission Architect tickets and all I got was this stupid badge!' }],
  acquisition: 'Purchase from the ticket vendor.',
  links: [
    { title: 'Payoff Badge', href: 'https://homecoming.wiki/wiki/Payoff_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/payoff.png' }],
}
