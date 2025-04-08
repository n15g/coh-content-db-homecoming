import { BadgeData } from 'coh-content-db'

export const ComeFullCircle: BadgeData = {
  type: 'achievement',
  key: 'come-full-circle',
  setTitleId: [1464],
  name: 'Come Full Circle',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You ended up back right where you started, coming full circle from Hero to Villain and back again.' },
    { alignment: 'villain', value: 'You ended up back right where you started, coming full circle from Villain to Hero and back again.' },
  ],
  acquisition: 'Return to your original alignment (Hero or Villain).',
  links: [
    { title: 'Come Full Circle Badge', href: 'https://homecoming.wiki/wiki/Come_Full_Circle_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/come-full-circle-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/come-full-circle-v.png' },
  ],
}
