import { BadgeData } from 'coh-content-db'

export const Miraculous: BadgeData = {
  type: 'EVENT',
  key: 'miraculous',
  setTitle: { id: 701 },
  name: [
    { value: 'Miraculous' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'A season of miracles, it has been called.' },
  ],
  acquisition: `Select as a reward for completing Father Time's mission during the Winter Event or purchase from the Candy Keeper during the Winter Event for 25 Candy Canes and 30,000 inf.`,
  links: [
    { title: 'Miraculous Badge', href: 'https://homecoming.wiki/wiki/Miraculous_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/miraculous.png' }],
}
