import { BadgeData } from 'coh-content-db'

export const FaceOfEvil: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'face-of-evil',
  setTitle: { id: 2019 },
  name: [
    { value: 'Face of Evil' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You gained control of the Hearts of Darkness and defeated an ancient evil bent on consuming '
        + 'your soul.',
    },
  ],
  acquisition: 'Complete the Level 15-19 Ongoing Training story arc from Dr. Graves',
  links: [
    { title: 'Face Of Evil Badge', href: 'https://homecoming.wiki/wiki/Face_Of_Evil_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/face-of-evil.png' },
  ],
}
