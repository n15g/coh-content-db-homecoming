import { BadgeData } from 'coh-content-db'

export const TemporalWarrior: BadgeData = {
  type: 'ACCOLADE',
  key: 'temporal-warrior',
  setTitle: { id: 1629 },
  name: 'Temporal Warrior',
  alignment: ['H', 'V', 'P'],
  badgeText: `Your connection to your home timeline has been severed. Your only purpose now is eternal battle for a future you will never reach.`,
  acquisition: `Awarded on initial login of a PvP-only Temporal Warrior character.`,
  links: [
    { title: 'Temporal Warrior Badge', href: 'https://homecoming.wiki/wiki/Temporal_Warrior_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/char-creation.png',
}
