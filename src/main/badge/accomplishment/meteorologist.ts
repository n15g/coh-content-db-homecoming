import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { MaxwellChristopher } from '../../contact/maxwell-christopher'

export const Meteorologist: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'meteorologist',
  setTitle: { id: 83 },
  name: 'Meteorologist',
  alignment: ['H'],
  badgeText: `You have crushed Nemesis' weather controlling equipment.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Nemesis Weather Control" entry with number 1.06 in the 40-49 level range.`,
  links: [
    { title: 'Meteorologist Badge', href: 'https://homecoming.wiki/wiki/Meteorologist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/meteorologist.png',
  requirements: [
    { key: 'nemesis-weather-control', type: 'MISSION', missionName: 'Nemesis Weather Control', contactKey: MaxwellChristopher.key },
  ],
}
