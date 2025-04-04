import { BadgeData } from 'coh-content-db'

export const BruteForced: BadgeData = {
  type: 'defeat',
  key: 'brute-forced',
  setTitleId: [2445],
  name: 'Brute Forced',
  morality: 'all',
  badgeText: `You have brought eternal dishonor to Rularuu's Brutes by besting them in combat and tearing out their gems.`,
  acquisition: 'Defeat 500 points worth of Rularuu Brutes.',
  notes: 'Brute and Noble Brute are worth 1 point, Honored Brute are worth 5 points.',
  links: [
    { title: 'Brute Forced Badge', href: 'https://homecoming.wiki/wiki/Brute_Forced_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/brute-forced.png',
}
