import { BadgeData } from 'coh-content-db'

export const ReadyToRumble: BadgeData = {
  type: 'achievement',
  key: 'ready-to-rumble',
  setTitleId: [2222],
  name: 'Ready to Rumble',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Pendragon, Chimera, Shadowhunter, Black Swan, and a legion of IDF fell before you and your league with startling rapidity.
By demonstrating your speed at mowing through Praetoria's last line of defense, you have proven that you are Ready to Rumble!`,
  acquisition: 'Defeat Black Swan sooner than 8 minutes after entering the Magisterium.',
  links: [
    { title: 'Ready to Rumble Badge', href: 'https://homecoming.wiki/wiki/Ready_to_Rumble_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/ready-to-rumble.png',
}
