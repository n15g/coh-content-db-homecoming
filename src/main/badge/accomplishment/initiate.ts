import { BadgeData } from 'coh-content-db'

export const Initiate: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'initiate',
  setTitle: { id: 1448 },
  name: 'Initiate',
  alignment: ['H', 'V', 'P'],
  badgeText: `You've crafted your first Common Incarnate Ability earning yourself this badge.`,
  acquisition: 'Craft a common incarnate ability.',
  links: [
    { title: 'Initiate Badge', href: 'https://homecoming.wiki/wiki/Initiate_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/initiate.png',
}
