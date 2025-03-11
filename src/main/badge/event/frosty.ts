import { BadgeData } from 'coh-content-db'

export const Frosty: BadgeData = {
  type: 'EVENT',
  key: 'frosty',
  setTitle: { id: 703 },
  name: [
    { value: 'Frosty' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'A chill down your spine makes you feel Frosty.' },
  ],
  acquisition: `Select as a reward for completing Father Time's mission during the Winter Event.`,
  links: [
    { title: 'Frosty Badge', href: 'https://homecoming.wiki/wiki/Frosty_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/frosty.png' }],
}
