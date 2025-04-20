import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { TippingTheScales } from '../../mission/tipping-the-scales'

export const RiptidesComrade: BadgeData = {
  type: 'accomplishment',
  key: 'riptides-comrade',
  setTitleId: [2265],
  name: `Riptide's Comrade`,
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You were able to prevent Riptide from being defeated while he was fighting Nosferatu by himself.',
  acquisition: `Complete all objectives in the "Part Two: Nosferatu's Croatoa" mission of the ${missionLink(TippingTheScales)} story arc before Riptide is defeated.`,
  links: [
    { title: `Riptide's Comrade Badge`, href: 'https://homecoming.wiki/wiki/Riptide%27s_Comrade_Badge' },
    { title: TippingTheScales.name, href: missionUri(TippingTheScales) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-challenge.png',
}
