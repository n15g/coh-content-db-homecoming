import { BadgeData, missionLink } from 'coh-content-db'
import { TippingTheScales } from '../../mission/tipping-the-scales'

export const PendragonsAlly: BadgeData = {
  type: 'accomplishment',
  key: 'pendragons-ally',
  setTitleId: [2264],
  name: `Pendragon's Ally`,
  morality: 'heroic',
  badgeText: 'You were able to keep Pendragon from being defeated while he was fighting Maestro by himself.',
  acquisition: `Complete all objectives in the "Part One: The Maesro's Symphony" mission of the ${missionLink(TippingTheScales)} story arc, before Pendragon is defeated.`,
  links: [
    { title: `Pendragon's Ally Badge`, href: 'https://homecoming.wiki/wiki/Pendragon%27s_Ally_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-challenge.png',
}
