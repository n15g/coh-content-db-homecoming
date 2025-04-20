import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const TempusFugitive: BadgeData = {
  type: 'pvp',
  key: 'tempus-fugitive',
  setTitleId: [372],
  name: [
    { alignment: 'hero', value: 'Tempus Fugitive' },
    { alignment: 'villain', value: 'Destroyer of Worlds' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have battled Arachnos in a possible future and prevented Recluse's Victory.` },
    { alignment: 'villain', value: `You have fought the future and won, making Recluse's Victory that much more likely.` },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/tempus-fugitive.png',
  acquisition: `Win ${zoneLink(ReclusesVictory)} with 1000 temporal points.`,
  links: [
    { title: 'Tempus Fugitive Badge', href: 'https://homecoming.wiki/wiki/Tempus_Fugitive_Badge' },
    { title: 'Destroyer of Worlds Badge', href: 'https://homecoming.wiki/wiki/Destroyer_of_Worlds_Badge' },
  ],
}
