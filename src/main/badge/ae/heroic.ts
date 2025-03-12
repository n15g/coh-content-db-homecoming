import { BadgeData } from 'coh-content-db'

export const Heroic: BadgeData = {
  type: 'AE',
  key: 'heroic',
  setTitle: { id: 1217 },
  name: [
    { value: 'Heroic' },
  ],
  alignment: ['H'],
  badgeText: [{ value: 'You\'ve earned the "Heroic" badge by playing an Architect mission marked as Heroic content.' }],
  acquisition: 'Complete one Mission Architect arc marked as Heroic content.',
  notes: 'This badge is only awarded to characters of the hero or vigilante alignments.'
    + ' Although credit for this badge may be earned by villains or rogues, the badge will not be awarded to a character until they change alignment.',
  links: [
    { title: 'Heroic Badge', href: 'https://homecoming.wiki/wiki/Heroic_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/heroic.png' }],
}
