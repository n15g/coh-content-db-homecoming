import { BadgeData } from 'coh-content-db'

export const Secured: BadgeData = {
  type: 'event',
  key: 'secured',
  setTitleId: [1767],
  name: 'Secured',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have kept the Malleus Mundi secure the best way you know how, by securing it yourself.',
  acquisition: `Complete the Whispered Rumor tip mission during the Halloween event and choose the option to "'"Keep the Malleus Mundi secure".`,
  links: [
    { title: 'Secured Badge', href: 'https://homecoming.wiki/wiki/Secured_Badge' },
    { title: 'Whispered Rumour', href: 'https://homecoming.wiki/wiki/Mission:Tip_-_Whispered_Rumor' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/secured.png',
}
