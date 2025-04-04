import { BadgeData } from 'coh-content-db'

export const Valet: BadgeData = {
  type: 'achievement',
  key: 'valet',
  setTitleId: [2391],
  name: 'Valet',
  morality: 'heroic',
  badgeText: `You have kept Paragon City's vehicles safe during a Freakshow rampage.`,
  acquisition: `Prevent destruction of vehicles around Wentworth's building during the Market Crash Task Force.`,
  links: [
    { title: 'Valet Badge', href: 'https://homecoming.wiki/wiki/Valet_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/valet.png',
}
