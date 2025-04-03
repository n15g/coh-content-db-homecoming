import { BadgeData, zoneLink } from 'coh-content-db'
import { Brickstown } from '../../zone/brickstown'

export const ProbationDenied: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'probation-denied',
  setTitle: { id: 2320 },
  name: 'Probation Denied',
  alignment: ['H'],
  badgeText: 'You stopped a number of prisoners from escaping from Ziggursky prison.',
  acquisition: `Complete the Prison Break zone event in ${zoneLink(Brickstown)}.`,
  links: [
    { title: 'Probation Denied Badge', href: 'https://homecoming.wiki/wiki/Probation_Denied_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-arc.png',
}
