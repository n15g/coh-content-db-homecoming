import { BadgeData } from 'coh-content-db'

export const ProbationDenied: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'probation-denied',
  setTitle: { id: 2320 },
  name: [
    { value: 'Probation Denied' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You stopped a number of prisoners from escaping from Ziggursky prison.' },
  ],
  acquisition: 'Complete the Prison Break zone event in Brickstown',
  links: [
    { title: 'Probation Denied Badge', href: 'https://homecoming.wiki/wiki/Probation_Denied_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-arc.png' },
  ],
}
