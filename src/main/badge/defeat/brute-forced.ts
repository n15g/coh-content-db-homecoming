import { BadgeData } from 'coh-content-db'

export const BruteForced: BadgeData = {
  type: 'DEFEAT',
  key: 'brute-forced',
  setTitle: { id: 2445 },
  name: [
    { value: 'Brute Forced' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You have brought eternal dishonor to Rularuu's Brutes by besting them in combat and tearing out their gems.` },
  ],
  acquisition: 'Defeat 500 points worth of Rularuu Brutes (Brute and Noble Brute are worth 1 point, Honored Brute are worth 5 points).',
  links: [
    { title: 'Brute Forced Badge', href: 'https://homecoming.wiki/wiki/Brute_Forced_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/brute-forced.png' },
  ],
}
