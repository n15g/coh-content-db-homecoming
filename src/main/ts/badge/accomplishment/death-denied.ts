import { BadgeData } from 'coh-content-db'
import { DilemmaDiaboliqueTrial } from '../../mission/dilemma-diabolique-trial'

export const DeathDenied: BadgeData = {
  type: 'accomplishment',
  key: 'death-denied',
  setTitleId: [2163],
  name: 'Death Denied',
  morality: 'all',
  badgeText: 'You have completed the Incarnate Trial: Dilemma Diabolique.',
  links: [
    { title: 'Death Denied Badge', href: 'https://homecoming.wiki/wiki/Death_Denied_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/death-denied.png',
  requirements: [
    { key: DilemmaDiaboliqueTrial.key, type: 'mission', missionKey: DilemmaDiaboliqueTrial.key },
  ],
}
