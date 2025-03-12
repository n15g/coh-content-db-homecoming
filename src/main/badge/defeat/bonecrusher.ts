import { BadgeData } from 'coh-content-db'

export const Bonecrusher: BadgeData = {
  type: 'DEFEAT',
  key: 'bonecrusher',
  setTitle: { id: 30 },
  name: [
    { value: 'Bonecrusher' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'re all about knocking heads and beating Skulls.' },
  ],
  acquisition: 'Defeat 50 Skulls Bone Daddies, Death Dolls, or Death Walkers',
  links: [
    { title: 'Bonecrusher Badge', href: 'https://homecoming.wiki/wiki/Bonecrusher_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/skulls.png' },
  ],
}
