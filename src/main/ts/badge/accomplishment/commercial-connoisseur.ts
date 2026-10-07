import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { PrimeTimeSublime } from '../../mission/prime-time-sublime'

export const CommercialConnoisseur: BadgeData = {
  type: 'accomplishment',
  key: 'commercial-connoisseur',
  gameId: 'Mission_i28_MrRay',
  setTitleId: [2603],
  name: 'Commercial Connoisseur',
  releaseDate: '2026-10-06',
  morality: 'villainous',
  badgeText: `You've had your fill of old television commercials after working with a robot with a TV for a head, turning it into a psychic killer robot, and unleashing an epidemic of psychotic Clockwork attacks by accident.`,
  acquisition: `Complete the ${missionLink(PrimeTimeSublime)} story arc.`,
  links: [
    { title: 'Commercial Connoisseur Badge', href: 'https://homecoming.wiki/wiki/Commercial_Connoisseur_Badge' },
    { title: PrimeTimeSublime.name, href: missionUri(PrimeTimeSublime) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/commercial-connoisseur.png',
}
