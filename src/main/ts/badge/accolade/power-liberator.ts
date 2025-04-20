import { BadgeData } from 'coh-content-db'
import { CathedralOfPainTrial } from '../../mission/cathedral-of-pain-trial'

export const PowerLiberator: BadgeData = {
  type: 'accomplishment',
  key: 'power-liberator',
  setTitleId: [375],
  name: [
    { alignment: 'hero', value: 'Power Liberator' },
    { alignment: 'villain', value: 'Master Thief' },
  ],
  releaseDate: '2020-11-26',
  morality: 'all',
  badgeText: [
    {
      alignment: 'hero', value: 'Your success at liberating items from trophy vaults has earned you the title of Power Liberator.',
    },
    { alignment: 'villain', value: `There isn't a trophy vault made you can't steal from!` },
  ],
  notes: 'Complete the Cathedral of Pain Trial and choose the Item of Power reward option.',
  links: [
    { title: 'Power Liberator Badge', href: 'https://homecoming.wiki/wiki/Power_Liberator_Badge' },
    { title: 'Master Thief Badge', href: 'https://homecoming.wiki/wiki/Master_Thief_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/power-liberator.png',
  requirements: [
    { key: CathedralOfPainTrial.key, type: 'mission', missionKey: CathedralOfPainTrial.key },
  ],
}
