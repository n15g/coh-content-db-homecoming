import { BadgeData, badgeLink } from 'coh-content-db'
import { TankBuster } from '../defeat/tank-buster'

export const TankSmasher: BadgeData = {
  type: 'gladiator',
  key: 'tank-smasher',
  setTitleId: [490],
  name: [
    { value: 'Tank Smasher' },
  ],
  morality: 'all',
  badgeText: [{ value: 'Tank smash!' }],
  acquisition: `Collect the ${badgeLink(TankBuster)} Badge.`,
  links: [
    { title: 'Tank Smasher Badge', href: 'https://homecoming.wiki/wiki/Tank_Smasher_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' }],
}
