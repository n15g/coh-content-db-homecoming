import { BadgeData } from 'coh-content-db'

export const PumpkinMaster: BadgeData = {
  type: 'defeat',
  key: 'pumpkin-master',
  setTitleId: [432],
  name: [
    { sex: 'M', value: 'Pumpkin Master' },
    { sex: 'F', value: 'Pumpkin Mistress' },
  ],
  morality: 'heroic',
  badgeText: 'The Fir Bolg have learned to fear your name.',
  acquisition: 'Defeat 333 Fir Bolg.',
  links: [
    { title: 'Pumpkin Master Badge', href: 'https://homecoming.wiki/wiki/Pumpkin_Master_Badge' },
    { title: 'Pumpkin Mistress Badge', href: 'https://homecoming.wiki/wiki/Pumpkin_Mistress_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/pumpkin-master.png',
}
