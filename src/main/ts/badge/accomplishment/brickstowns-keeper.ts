import { BadgeData } from 'coh-content-db'
import { ANewWar } from '../../mission/a-new-war'

export const BrickstownsKeeper: BadgeData = {
  type: 'accomplishment',
  key: 'brickstowns-keeper',
  setTitleId: [2256],
  name: `Brickstown's Keeper`,
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You worked with the New Praetorians to stop the biggest breakout that Brickstown has ever seen.',
  links: [
    { title: `Brickstown's Keeper Badge`, href: 'https://homecoming.wiki/wiki/Brickstown%27s_Keeper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-arc.png',
  requirements: [
    { key: ANewWar.key, type: 'mission', missionKey: ANewWar.key },
  ],
}
