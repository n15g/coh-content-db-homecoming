import { BadgeData } from 'coh-content-db'
import { IceMistral } from '../../contact/ice-mistral'

export const CrystalKeeper: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'crystal-keeper',
  setTitle: { id: 515 },
  name: 'Crystal Keeper',
  alignment: ['V'],
  badgeText: `You have destroyed the psychic control network the Circle grew from shards of Serafina's crystal, and recovered the crystal itself.`,
  acquisition: 'Complete the Ice Mistral Strike Force: The Crystal of Serafina',
  links: [
    { title: 'Crystal Keeper Badge', href: 'https://homecoming.wiki/wiki/Crystal_Keeper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/crystal-keeper.png',
  requirements: [
    { key: 'ice-mistral-strike-force', type: 'TASK_FORCE', missionName: 'Ice Mistral Strike Force', contactKey: IceMistral.key },
  ],
}
