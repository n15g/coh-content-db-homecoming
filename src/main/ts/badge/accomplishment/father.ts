import { BadgeData } from 'coh-content-db'
import { UnavoidableFateWuYin } from '../../mission/unavoidable-fate-wu-yin'

export const Father: BadgeData = {
  type: 'accomplishment',
  key: 'father',
  setTitleId: [2272],
  name: 'Father',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You played Wu Yin's personal story and saw the plan that has been set in motion to try and save Penelope Mayhem.`,
  links: [
    { title: 'Father Badge', href: 'https://homecoming.wiki/wiki/Father_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-parc.png',
  requirements: [
    { key: UnavoidableFateWuYin.key, type: 'mission', missionKey: UnavoidableFateWuYin.key },
  ],
}
