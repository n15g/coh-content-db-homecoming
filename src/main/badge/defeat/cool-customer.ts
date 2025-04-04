import { BadgeData } from 'coh-content-db'

export const CoolCustomer: BadgeData = {
  type: 'defeat',
  key: 'cool-customer',
  setTitleId: [2485],
  name: 'Cool Customer',
  morality: 'all',
  badgeText: `You've broken the ice with Crey's new cutting-edge cryogenic scientists, proving that you're the coolest customer around and that Crey ought to chill out before somebody (probably them) gets hurt.`,
  acquisition: `Defeat 50 of Crey's Cryogenicist bosses.`,
  links: [
    { title: 'Cool Customer Badge', href: 'https://homecoming.wiki/wiki/Cool_Customer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/cool-customer.png',
}
