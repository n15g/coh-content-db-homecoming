import { BadgeData } from 'coh-content-db'

export const BestMan: BadgeData = {
  type: 'event',
  key: 'best-man',
  setTitleId: [2547],
  name: [
    { sex: 'M', value: 'Best Man' },
    { sex: 'F', value: 'Maid of Honor' },
  ],
  morality: 'heroic',
  badgeText: `When given the opportunity to travel back in time and experience Manticore & Sister Psyche's wedding,
you stood with the Freedom Phalanx and successfully drive back Lord Recluse and his villains who tried to disrupt the happy occasion.`,
  acquisition: `Stand with the Freedom Phalanx during Manticor and Sister Psyche's wedding.`,
  links: [
    { title: 'Best Man', href: 'https://homecoming.wiki/wiki/Best_Man_Badge' },
    { title: 'Maid of Honor', href: 'https://homecoming.wiki/wiki/Maid_of_Honor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/best-man.png',
}
