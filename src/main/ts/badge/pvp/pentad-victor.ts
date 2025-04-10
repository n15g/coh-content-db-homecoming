import { BadgeData } from 'coh-content-db'

export const PentadVictor: BadgeData = {
  type: 'pvp',
  key: 'pentad-victor',
  setTitleId: [1356],
  name: 'Pentad Victor',
  morality: 'all',
  badgeText: `You've won your first Pentad or Septad match, you're considered a Pentad Victor.`,
  acquisition: 'Win a rated or unrated Pentad or Septad match in the Arena.',
  links: [
    { title: 'Pentad Victor Badge', href: 'https://homecoming.wiki/wiki/Pentad_Victor_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pentad-victor-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pentad-victor-v.png' },
  ],
}
