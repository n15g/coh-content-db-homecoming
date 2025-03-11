import { BadgeData } from 'coh-content-db'

export const TripleThreat: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'triple-threat',
  setTitle: { id: 2221 },
  name: [
    { value: 'Triple Threat' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'While one Praetor is a challenge for the most potent of superpowers, you and your league '
        + 'masterfully tackled a group of three with startling simultaneity!  You are henceforth known as '
        + 'a Triple Threat.',
    },
  ],
  acquisition: 'Defeat all three Archvillains during the Battle Royale stage of the Magisterium Trial within 5 seconds of the first one\'s defeat',
  links: [
    { title: 'Triple Threat Badge', href: 'https://homecoming.wiki/wiki/Triple_Threat_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/triple-threat.png' },
  ],
}
