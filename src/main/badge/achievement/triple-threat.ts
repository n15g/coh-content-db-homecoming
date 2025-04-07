import { BadgeData } from 'coh-content-db'

export const TripleThreat: BadgeData = {
  type: 'achievement',
  key: 'triple-threat',
  setTitleId: [2221],
  name: 'Triple Threat',
  morality: 'all',
  badgeText: `While one Praetor is a challenge for the most potent of superpowers, you and your league masterfully tackled a group of three with startling simultaneity! You are henceforth known as a Triple Threat.`,
  acquisition: `Defeat all three Archvillains during the Battle Royale stage of the Magisterium Trial within 5 seconds of the first one's defeat.`,
  links: [
    { title: 'Triple Threat Badge', href: 'https://homecoming.wiki/wiki/Triple_Threat_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/triple-threat.png',
}
