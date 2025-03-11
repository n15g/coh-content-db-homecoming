import { BadgeData } from 'coh-content-db'

export const WarWallDefender: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'war-wall-defender',
  setTitle: { id: 79 },
  name: [
    { alignment: 'H', value: 'War Wall Defender' },
    { alignment: 'V', value: 'Saboteur' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You foiled a plot to undermine the War Walls that protect Paragon City.' },
  ],
  acquisition: 'Complete the Rescue the engineers and prevent the Rikti from bringing down the force fields mission from Phillipa Meraux',
  links: [
    { title: 'War Wall Defender Badge', href: 'https://homecoming.wiki/wiki/War_Wall_Defender_Badge' },
    { title: 'Saboteur Badge', href: 'https://homecoming.wiki/wiki/Saboteur_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/war-wall-defender.png' },
  ],
}
