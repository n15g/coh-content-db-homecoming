import { BadgeData } from 'coh-content-db'

export const EmberLegacyOfFlame: BadgeData = {
  type: 'GLADIATOR',
  key: 'ember-legacy-of-flame',
  setTitle: { id: 464 },
  name: [
    { value: 'Ember Legacy of Flame' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: 'The Legacy Chain respects you.' },
    { alignment: 'V', value: 'These do-gooders are trapped in your power.' },
  ],
  acquisition: 'Defeat 200 Legacy Chain Minions (Legacy Chain)',
  notes: 'The in-game hint text says 100 minions, but 200 are required.',
  links: [
    { title: 'Ember Legacy of Flame Badge', href: 'https://homecoming.wiki/wiki/Ember_Legacy_of_Flame_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
