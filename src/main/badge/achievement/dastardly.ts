import { BadgeData } from 'coh-content-db'

export const Dastardly: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'dastardly',
  setTitle: { id: 1453 },
  name: [
    { value: 'Dastardly' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'The mere mention of your name causes those that hear it to shiver in fear. You have completed '
        + 'a Villain Morality Mission earning yourself this badge.',
    },
  ],
  acquisition: 'Complete a Villain Morality mission',
  links: [
    { title: 'Dastardly Badge', href: 'https://homecoming.wiki/wiki/Dastardly_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dastardly.png' },
  ],
}
