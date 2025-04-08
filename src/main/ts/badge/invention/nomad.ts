import { BadgeData } from 'coh-content-db'

export const Nomad: BadgeData = {
  type: 'invention',
  key: 'nomad',
  setTitleId: [804],
  name: 'Nomad',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 45 and 50: Run Speed, Jump, Fly Speed, and Range.',
  effect: '+1 to Recipe capacity',
  links: [
    { title: 'Nomad Badge', href: 'https://homecoming.wiki/wiki/Nomad_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 45,
      inventionTypes: ['run-speed', 'jump', 'fly-speed', 'range'],
      count: 14,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 50,
      inventionTypes: ['run-speed', 'jump', 'fly-speed', 'range'],
      count: 14,
    },
  ],
}
