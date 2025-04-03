import { BadgeData } from 'coh-content-db'

export const Incarnate: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'incarnate',
  setTitle: { id: 1965 },
  name: 'Incarnate',
  alignment: ['H', 'V', 'P'],
  badgeText: `You've crafted your first Very Rare Incarnate Ability earning yourself this badge.`,
  acquisition: 'Craft a very rare incarnate ability.',
  links: [
    { title: 'Incarnate Badge', href: 'https://homecoming.wiki/wiki/Incarnate_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/incarnate.png',
}
