import { BadgeData } from 'coh-content-db'
import { IceMistralStrikeForce } from '../../mission/ice-mistral-strike-force'

export const CrystalKeeper: BadgeData = {
  type: 'accomplishment',
  key: 'crystal-keeper',
  setTitleId: [515],
  name: 'Crystal Keeper',
  morality: 'villainous',
  badgeText: `You have destroyed the psychic control network the Circle grew from shards of Serafina's crystal, and recovered the crystal itself.`,
  links: [
    { title: 'Crystal Keeper Badge', href: 'https://homecoming.wiki/wiki/Crystal_Keeper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/crystal-keeper.png',
  requirements: [
    { key: IceMistralStrikeForce.key, type: 'mission', missionKey: IceMistralStrikeForce.key },
  ],
}
