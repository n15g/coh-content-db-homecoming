import { BadgeData } from 'coh-content-db'

export const Spinebreaker: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'spinebreaker',
  setTitle: { id: 2164 },
  name: [
    { value: 'Spinebreaker' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'In beginning your assault on Mot during Dilemma Diabolique, you and your league did not think '
        + 'it sufficient to merely destroy the Repulsive Spines and bring down the protective barrier '
        + 'around Mot\'s plateau. Instead, you wanted to send a message. You wanted to bring down all the '
        + 'Repulsive Spines at once.... and succeeded.',
    },
  ],
  acquisition: 'Destroy all four Repulsive Spines (maintaining the protective barrier around Mot) within one minute of each other during the Dilemma Diabolique Trial',
  links: [
    { title: 'Spinebreaker Badge', href: 'https://homecoming.wiki/wiki/Spinebreaker_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-dea.png' },
  ],
}
