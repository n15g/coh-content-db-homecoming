import { BadgeData } from 'coh-content-db'

export const HellBane: BadgeData = {
  type: 'DEFEAT',
  key: 'hell-bane',
  setTitle: { id: 307 },
  name: [
    { value: 'Hell Bane' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'The demon known as Caleb fell to your powers on Thorn Isle. The creatures of the Abyss have '
        + 'taken to calling you Hell Bane.',
    },
  ],
  acquisition: 'Defeat Caleb, a monster that spawns in Nerva Archipelago',
  links: [
    { title: 'Hell Bane Badge', href: 'https://homecoming.wiki/wiki/HellBane_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/circle.png' },
  ],
}
