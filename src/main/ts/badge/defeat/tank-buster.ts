import { BadgeData } from 'coh-content-db'

export const TankBuster: BadgeData = {
  type: 'defeat',
  key: 'tank-buster',
  setTitleId: [46],
  name: 'Tank Buster',
  morality: 'all',
  badgeText: 'You have proved your worth on the streets, and the Freakshow have learned to fear your name.',
  acquisition: 'Defeat 100 Freakshow tanks.',
  links: [
    { title: 'Tank Buster Badge', href: 'https://homecoming.wiki/wiki/Tank_Buster_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/tank-buster.png',
}
