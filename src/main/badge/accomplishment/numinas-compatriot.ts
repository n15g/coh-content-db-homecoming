import { BadgeData } from 'coh-content-db'
import { Numina } from '../../contact/numina'

export const NuminasCompatriot: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'numinas-compatriot',
  setTitle: { id: 66 },
  name: [
    { alignment: 'H', value: `Numina's Compatriot` },
    { alignment: 'V', value: `Numina's Betrayer` },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'Numina and the spirit of the Woodsman were pleased to present you with this medal.' },
    { alignment: 'V', value: 'Numina and the spirit of the Woodsman are disappointed in you, but hope that one day you will return to the side of justice.' },
  ],
  links: [
    { title: `Numina's Compatriot Badge`, href: 'https://homecoming.wiki/wiki/Numina%27s_Compatriot_Badge' },
    { title: `Numina's Betrayer Badge`, href: 'https://homecoming.wiki/wiki/Numina%27s_Betrayer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/numinas-compatriot.png',
  requirements: [
    { key: 'numina-task-force', type: 'TASK_FORCE', missionName: 'Numina Task Force', contactKey: Numina.key },
  ],
}
