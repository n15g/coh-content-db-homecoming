import { BadgeData } from 'coh-content-db'

export const WellDrinker: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'well-drinker',
  setTitle: { id: 1964 },
  name: 'Well Drinker',
  alignment: ['H', 'V', 'P'],
  badgeText: `You've crafted your first Rare Incarnate Ability earning yourself this badge.`,
  acquisition: 'Craft a rare incarnate ability.',
  links: [
    { title: 'Well Drinker Badge', href: 'https://homecoming.wiki/wiki/Well_Drinker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/well-drinker.png',
}
