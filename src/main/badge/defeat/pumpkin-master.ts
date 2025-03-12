import { BadgeData } from 'coh-content-db'

export const PumpkinMaster: BadgeData = {
  type: 'DEFEAT',
  key: 'pumpkin-master',
  setTitle: { id: 432 },
  name: [
    { sex: 'M', value: 'Pumpkin Master' },
    { sex: 'F', value: 'Pumpkin Mistress' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'The Fir Bolg have learned to fear your name.' },
  ],
  acquisition: 'Defeat 333 Fir Bolg',
  links: [
    { title: 'Pumpkin Master Badge', href: 'https://homecoming.wiki/wiki/Pumpkin_Master_Badge' },
    { title: 'Pumpkin Mistress Badge', href: 'https://homecoming.wiki/wiki/Pumpkin_Mistress_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/pumpkin-master.png' },
  ],
}
