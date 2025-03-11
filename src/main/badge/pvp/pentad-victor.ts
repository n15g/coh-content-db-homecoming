import { BadgeData } from 'coh-content-db'

export const PentadVictor: BadgeData = {
  type: 'PVP',
  key: 'pentad-victor',
  setTitle: { id: 1356 },
  name: [
    { value: 'Pentad Victor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve won your first Pentad or Septad match, you\'re considered a Pentad Victor.' },
  ],
  acquisition: 'Win a rated or unrated Pentad or Septad match in the Arena',
  links: [
    { title: 'Pentad Victor Badge', href: 'https://homecoming.wiki/wiki/Pentad_Victor_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pentad-victor-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pentad-victor-v.png' },
  ],
}
