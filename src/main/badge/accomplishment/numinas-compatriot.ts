import { BadgeData } from 'coh-content-db'

export const NuminasCompatriot: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'numinas-compatriot',
  setTitle: { id: 66 },
  name: [
    { alignment: 'H', value: 'Numina\'s Compatriot' },
    { alignment: 'V', value: 'Numina\'s Betrayer' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'Numina and the spirit of the Woodsman were pleased to present you with this medal.' },
    {
      alignment: 'V', value: 'Numina and the spirit of the Woodsman are disappointed in you, but hope that one day you will '
        + 'return to the side of justice.',
    },
  ],
  acquisition: 'Complete the Numina Task Force: Soul of the Woodsman',
  links: [
    { title: 'Numina\'s Compatriot Badge', href: 'https://homecoming.wiki/wiki/Numina%27s_Compatriot_Badge' },
    { title: 'Numina\'s Betrayer Badge', href: 'https://homecoming.wiki/wiki/Numina%27s_Betrayer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/numinas-compatriot.png' },
  ],
}
