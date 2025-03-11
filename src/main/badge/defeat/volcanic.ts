import { BadgeData } from 'coh-content-db'

export const Volcanic: BadgeData = {
  type: 'DEFEAT',
  key: 'volcanic',
  setTitle: { id: 203 },
  name: [
    { value: 'Volcanic' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You have cracked the Igneous bosses, earning you the right to call yourself Volcanic.' },
  ],
  acquisition: 'Defeat 100 Magmite Lords or Pumicite Lords',
  links: [
    { title: 'Volcanic Badge', href: 'https://homecoming.wiki/wiki/Volcanic_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/volcanic.png' },
  ],
}
