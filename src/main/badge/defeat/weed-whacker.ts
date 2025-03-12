import { BadgeData } from 'coh-content-db'

export const WeedWhacker: BadgeData = {
  type: 'DEFEAT',
  key: 'weed-whacker',
  setTitle: { id: 308 },
  name: [
    { value: 'Weed Whacker' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve cut down more than your fair share of the Thorns.' },
  ],
  acquisition: 'Defeat 50 Circle of Thorns Succubi or Hellfrosts',
  links: [
    { title: 'Weed Whacker Badge', href: 'https://homecoming.wiki/wiki/Weed_Whacker_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/circle.png' },
  ],
}
