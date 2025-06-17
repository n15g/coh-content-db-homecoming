import { BadgeData } from 'coh-content-db'
import { TheSunlightAndTheSpotlight } from '../../mission/the-sunlight-and-the-spotlight'

export const JustifiedEnds: BadgeData = {
  type: 'accomplishment',
  key: 'justified-ends',
  setTitleId: [2562],
  name: 'Justified Ends',
  releaseDate: '2025-06-17',
  morality: 'heroic',
  badgeText: `Some evils can't be beaten while keeping your hands clean. You've done what was needed when others wouldn't.`,
  acquisition: `Complete Robert Kogan's story arc TheSunlight and the Spotlight.`,
  links: [
    { title: 'Justified Ends Badge', href: 'https://homecoming.wiki/wiki/Justified_Ends_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/justified-ends.png',
  requirements: [
    { key: TheSunlightAndTheSpotlight.key, type: 'mission', missionKey: TheSunlightAndTheSpotlight.key },
  ],
}
