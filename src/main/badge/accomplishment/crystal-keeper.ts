import { BadgeData } from 'coh-content-db'

export const CrystalKeeper: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'crystal-keeper',
  setTitle: { id: 515 },
  name: [
    { value: 'Crystal Keeper' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You have destroyed the psychic control network the Circle grew from shards of Serafina\'s '
        + 'crystal, and recovered the crystal itself.',
    },
  ],
  acquisition: 'Complete the Ice Mistral Strike Force: The Crystal of Serafina',
  links: [
    { title: 'Crystal Keeper Badge', href: 'https://homecoming.wiki/wiki/Crystal_Keeper_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/crystal-keeper.png' },
  ],
}
