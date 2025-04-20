import { BadgeData } from 'coh-content-db'
import { TippingTheScales } from '../../mission/tipping-the-scales'

export const TheCentersNemesis: BadgeData = {
  type: 'accomplishment',
  key: 'the-centers-nemesis',
  setTitleId: [2257],
  name: `The Center's Nemesis`,
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You stopped Calvin Scott and the Center's plans for Paragon City. The public of Paragon consider you to be the one hero who can stop the Council.`,
  links: [
    { title: `The Center's Nemesis Badge`, href: 'https://homecoming.wiki/wiki/The_Center%27s_Nemesis_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-arc.png',
  requirements: [
    { key: TippingTheScales.key, type: 'mission', missionKey: TippingTheScales.key },
  ],
}
