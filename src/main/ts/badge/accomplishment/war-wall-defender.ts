import { BadgeData } from 'coh-content-db'
import { RescueTheEngineersAndPreventTheRiktiFromBringingDownTheForceFields } from '../../mission/rescue-the-engineers-and-prevent-the-rikti-from-bringing-down-the-force-fields'

export const WarWallDefender: BadgeData = {
  type: 'accomplishment',
  key: 'war-wall-defender',
  setTitleId: [79],
  name: [
    { alignment: 'hero', value: 'War Wall Defender' },
    { alignment: 'villain', value: 'Saboteur' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You foiled a plot to undermine the War Walls that protect Paragon City.',
  links: [
    { title: 'War Wall Defender Badge', href: 'https://homecoming.wiki/wiki/War_Wall_Defender_Badge' },
    { title: 'Saboteur Badge', href: 'https://homecoming.wiki/wiki/Saboteur_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/war-wall-defender.png',
  requirements: [
    { key: RescueTheEngineersAndPreventTheRiktiFromBringingDownTheForceFields.key, type: 'mission', missionKey: RescueTheEngineersAndPreventTheRiktiFromBringingDownTheForceFields.key },
  ],
}
