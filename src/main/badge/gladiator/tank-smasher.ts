import { BadgeData } from 'coh-content-db'

export const TankSmasher: BadgeData = {
  type: 'GLADIATOR',
  key: 'tank-smasher',
  setTitle: { id: 490 },
  name: [
    { value: 'Tank Smasher' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'Tank smash!' }],
  acquisition: 'Collect the [badge:tank-buster] Badge.',
  links: [
    { title: 'Tank Smasher Badge', href: 'https://homecoming.wiki/wiki/Tank_Smasher_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' }],
}
