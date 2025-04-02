import { BadgeData } from 'coh-content-db'
import { NealKendrick } from '../../contact/neal-kendrick'
import { TinaChung } from '../../contact/tina-chung'

export const Corrupter: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'corrupter',
  setTitle: { id: 78 },
  name: 'Corrupter',
  alignment: ['H'],
  badgeText: 'You prevented a non-aggression pact between the Circle of Thorns and Nemesis.',
  links: [
    { title: 'Corrupter Badge', href: 'https://homecoming.wiki/wiki/Corrupter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/corrupter.png',
  requirements: [
    { key: 'rescue-the-ogaffney-law-firm-from-the-circle-of-thorns', type: 'MISSION', missionName: `Rescue the O'Gaffney law firm from the Circle of Thorns`, contactKey: [NealKendrick.key, TinaChung.key] },
  ],
}
