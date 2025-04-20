import { BadgeData } from 'coh-content-db'
import { AbandonedSewersTrial } from '../../mission/abandoned-sewers-trial'

export const Charmer: BadgeData = {
  type: 'accomplishment',
  key: 'charmer',
  setTitleId: [69],
  name: 'Charmer',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You have defeated the Hydra, a major threat to the sewer network of Paragon City.',
  links: [
    { title: 'Charmer Badge', href: 'https://homecoming.wiki/wiki/Charmer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/trial-1.png',
  requirements: [
    { key: AbandonedSewersTrial.key, type: 'mission', missionKey: AbandonedSewersTrial.key },
  ],
}
