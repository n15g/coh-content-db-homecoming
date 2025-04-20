import { BadgeData } from 'coh-content-db'
import { NuminaTaskForce } from '../../mission/numina-task-force'

export const NuminasCompatriot: BadgeData = {
  type: 'accomplishment',
  key: 'numinas-compatriot',
  setTitleId: [66],
  name: [
    { alignment: 'hero', value: `Numina's Compatriot` },
    { alignment: 'villain', value: `Numina's Betrayer` },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'Numina and the spirit of the Woodsman were pleased to present you with this medal.' },
    { alignment: 'villain', value: 'Numina and the spirit of the Woodsman are disappointed in you, but hope that one day you will return to the side of justice.' },
  ],
  links: [
    { title: `Numina's Compatriot Badge`, href: 'https://homecoming.wiki/wiki/Numina%27s_Compatriot_Badge' },
    { title: `Numina's Betrayer Badge`, href: 'https://homecoming.wiki/wiki/Numina%27s_Betrayer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/numinas-compatriot.png',
  requirements: [
    { key: NuminaTaskForce.key, type: 'mission', missionKey: NuminaTaskForce.key },
  ],
}
