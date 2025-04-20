import { BadgeData } from 'coh-content-db'

export const Veiled: BadgeData = {
  type: 'event',
  key: 'veiled',
  setTitleId: [1770],
  name: 'Veiled',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have done your best to hide the Malleus Mundi in a place where it can never be found.',
  acquisition: `Complete the Whispered Rumor tip mission during the Halloween event and choose the option to "Hide the Malleus Mundi".`,
  links: [
    { title: 'Veiled Badge', href: 'https://homecoming.wiki/wiki/Veiled_Badge' },
    { title: 'Whispered Rumour', href: 'https://homecoming.wiki/wiki/Mission:Tip_-_Whispered_Rumor' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/veiled.png',
}
