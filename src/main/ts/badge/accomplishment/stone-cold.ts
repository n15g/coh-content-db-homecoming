import { BadgeData } from 'coh-content-db'
import { HurtTheTraitorousVendettiRetainer } from '../../mission/hurt-the-traitorous-vendetti-retainer'

export const StoneCold: BadgeData = {
  type: 'accomplishment',
  key: 'stone-cold',
  setTitleId: [330],
  name: 'Stone Cold',
  morality: 'villainous',
  badgeText: 'You took out a filthy traitor to the Port Oakes Vendetti Family.',
  links: [
    { title: 'Stone Cold Badge', href: 'https://homecoming.wiki/wiki/Stone_Cold_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-1.png',
  requirements: [
    { key: HurtTheTraitorousVendettiRetainer.key, type: 'mission', missionKey: HurtTheTraitorousVendettiRetainer.key },
  ],
}
