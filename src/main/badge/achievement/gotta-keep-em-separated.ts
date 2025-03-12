import { BadgeData } from 'coh-content-db'

export const GottaKeepEmSeparated: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'gotta-keep-em-separated',
  setTitle: { id: 1977 },
  name: [
    { value: 'Gotta Keep \'Em Separated' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Siege and Nightstar usually fight as a duo, but you decided to divide and conquer, defeating '
        + 'them in the Behavioral Adjustment Facility where they stood.',
    },
  ],
  acquisition: 'Defeat Siege & Nightstar without moving them from their initial locations during a Behavioral Adjustment Facility Incarnate Trial',
  links: [
    { title: 'Gotta Keep \'Em Separated Badge', href: 'https://homecoming.wiki/wiki/Gotta_Keep_%27Em_Separated_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-baf.png' },
  ],
}
