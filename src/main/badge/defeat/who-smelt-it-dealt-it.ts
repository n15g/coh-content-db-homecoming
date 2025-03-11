import { BadgeData } from 'coh-content-db'

export const WhoSmeltItDealtIt: BadgeData = {
  type: 'DEFEAT',
  key: 'who-smelt-it-dealt-it',
  setTitle: { id: 2487 },
  name: [
    { value: 'Who Smelt It, Dealt It' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've endured the heat and walked away with more than a few burns, but have taught the Gold Brickers that their Smelters, even with their new high-tech Smelting Arms, can't make you sweat under pressure.` },
  ],
  acquisition: `Defeat 50 Gold Bricker Smelter bosses.`,
  links: [
    { title: 'Who Smelt It, Dealt It Badge', href: 'https://homecoming.wiki/wiki/Who_Smelt_It,_Dealt_It_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/who-smelt-it-dealt-it.png' },
  ],
}
