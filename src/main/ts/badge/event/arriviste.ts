import { BadgeData } from 'coh-content-db'

export const Arriviste: BadgeData = {
  type: 'event',
  key: 'arriviste',
  setTitleId: [1771],
  name: 'Arriviste',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: 'Selling the Malleus Mundi to the highest bidder is a choice that may come back to haunt you.' },
    { alignment: 'villain', value: 'You never knew that a simple unreadable book could fetch such a price.' },
  ],
  acquisition: `Complete the Whispered Rumor tip mission during the Halloween event and choose the option to 'Sell the Malleus Mundi to the highest bidder' (Villains).`,
  links: [
    { title: 'Arriviste Badge', href: 'https://homecoming.wiki/wiki/Arriviste_Badge' },
    { title: 'Whispered Rumour', href: 'https://homecoming.wiki/wiki/Mission:Tip_-_Whispered_Rumor' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/arriviste.png',
}
