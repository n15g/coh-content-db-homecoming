import { BadgeData } from 'coh-content-db'

export const ComeFullCircle: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'come-full-circle',
  setTitle: { id: 1464 },
  name: [
    { value: 'Come Full Circle' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: 'You ended up back right where you started, coming full circle from Hero to Villain and back '
        + 'again.',
    },
    {
      alignment: 'V', value: 'You ended up back right where you started, coming full circle from Villain to Hero and back '
        + 'again.',
    },
  ],
  acquisition: 'Return to your original alignment (Hero or Villain)',
  links: [
    { title: 'Come Full Circle Badge', href: 'https://homecoming.wiki/wiki/Come_Full_Circle_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/come-full-circle-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/come-full-circle-v.png' },
  ],
}
