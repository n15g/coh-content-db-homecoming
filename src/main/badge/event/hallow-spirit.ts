import { BadgeData } from 'coh-content-db'

export const HallowSpirit: BadgeData = {
  type: 'EVENT',
  key: 'hallow-spirit',
  setTitle: { id: 184 },
  name: [
    { value: 'Hallow Spirit' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have helped defeat a manifestation of Eochai, king of the Fir Bolg.' },
  ],
  acquisition: 'Defeat the manifestation of Eochai during the Halloween event.',
  links: [
    { title: 'Hallow Spirit Badge', href: 'https://homecoming.wiki/wiki/Hallow_Spirit_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/hallow-spirit.png' }],
}
