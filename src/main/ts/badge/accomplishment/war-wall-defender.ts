import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { PhillipaMeraux } from '../../contact/phillipa-meraux'

export const WarWallDefender: BadgeData = {
  type: 'accomplishment',
  key: 'war-wall-defender',
  setTitleId: [79],
  name: [
    { alignment: 'hero', value: 'War Wall Defender' },
    { alignment: 'villain', value: 'Saboteur' },
  ],
  morality: 'heroic',
  badgeText: 'You foiled a plot to undermine the War Walls that protect Paragon City.',
  acquisition: 'Complete the Rescue the engineers and prevent the Rikti from bringing down the force fields mission from Phillipa Meraux',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Defend the War Walls" entry with number 0.28 in the 30-34 level range.`,
  links: [
    { title: 'War Wall Defender Badge', href: 'https://homecoming.wiki/wiki/War_Wall_Defender_Badge' },
    { title: 'Saboteur Badge', href: 'https://homecoming.wiki/wiki/Saboteur_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/war-wall-defender.png',
  requirements: [
    { key: 'rte', type: 'MISSION', missionName: 'Rescue the Engineers and Prevent the Rikti from Bringing Down the Force Fields', contactKey: PhillipaMeraux.key },
  ],
}
