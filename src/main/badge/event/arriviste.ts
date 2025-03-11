import { BadgeData } from 'coh-content-db'

export const Arriviste: BadgeData = {
  type: 'EVENT',
  key: 'arriviste',
  setTitle: { id: 1771 },
  name: [
    { value: 'Arriviste' },
  ],
  alignment: ['V'],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/arriviste.png' }],
  badgeText: [
    { alignment: 'H', value: 'Selling the Malleus Mundi to the highest bidder is a choice that may come back to haunt you.' },
    { alignment: 'V', value: 'You never knew that a simple unreadable book could fetch such a price.' },
  ],
  acquisition: 'Complete the Whispered Rumor tip mission during the Halloween event and choose the option to \'Sell the Malleus Mundi to the highest bidder\' (Villains).',
  links: [
    { title: 'Arriviste Badge', href: 'https://homecoming.wiki/wiki/Arriviste_Badge' },
    { title: 'Whispered Rumour', href: 'https://homecoming.wiki/wiki/Mission:Tip_-_Whispered_Rumor' },
  ],
}
