import { BadgeData } from 'coh-content-db'

export const FairBalanced: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'fair-balanced',
  setTitle: { id: 2074 },
  name: [
    { value: 'Fair & Balanced' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'The Imperial forces threw some of Mother Mayhems\' mindwashing Telepathists at the populace in '
        + 'an effort to turn them against you, and you stepped up to shut them down. No Telepathist '
        + 'managed to convert four citizens during the raid on TPN Campus.',
    },
  ],
  acquisition: 'Do not allow a single Telepathist to convert 4 or more citizens for the duration of TPN Campus, and then finish the trial',
  links: [
    { title: 'Fair & Balanced Badge', href: 'https://homecoming.wiki/wiki/Fair_%26_Balanced_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-tpn.png' },
  ],
}
