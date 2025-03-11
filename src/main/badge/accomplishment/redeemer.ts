import { BadgeData } from 'coh-content-db'

export const Redeemer: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'redeemer',
  setTitle: { id: 76 },
  name: [
    { alignment: 'H', value: 'Redeemer' },
    { alignment: 'V', value: 'Conqueror' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You negotiated the surrender of Alexander, a Warrior boss.' },
  ],
  acquisition: 'Complete the Speak to Alexander mini-arc from Ashwin Lannister or Laurie Pennington',
  links: [
    { title: 'Redeemer Badge', href: 'https://homecoming.wiki/wiki/Redeemer_Badge' },
    { title: 'Conqueror Badge', href: 'https://homecoming.wiki/wiki/Conqueror_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/redeemer.png' },
  ],
}
