import { BadgeData } from 'coh-content-db'
import { TheRiktiNegotiator } from '../../mission/the-rikti-negotiator'

export const Bodyguard: BadgeData = {
  type: 'accomplishment',
  key: 'bodyguard',
  setTitleId: [84],
  name: 'Bodyguard',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You stopped the assassination of a Rikti peace negotiator.',
  links: [
    { title: 'Bodyguard Badge', href: 'https://homecoming.wiki/wiki/Bodyguard_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/bodyguard.png',
  requirements: [
    { key: TheRiktiNegotiator.key, type: 'mission', missionKey: TheRiktiNegotiator.key },
  ],
}
