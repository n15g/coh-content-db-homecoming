import { BadgeData } from 'coh-content-db'

export const Secured: BadgeData = {
  type: 'EVENT',
  key: 'secured',
  setTitle: { id: 1767 },
  name: [
    { value: 'Secured' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have kept the Malleus Mundi secure the best way you know how, by securing it yourself.' },
  ],
  acquisition: 'Complete the Whispered Rumor tip mission during the Halloween event and choose the option to \'Keep the Malleus Mundi secure\'.',
  links: [
    { title: 'Secured Badge', href: 'https://homecoming.wiki/wiki/Secured_Badge' },
    { title: 'Whispered Rumour', href: 'https://homecoming.wiki/wiki/Mission:Tip_-_Whispered_Rumor' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/secured.png' }],
}
