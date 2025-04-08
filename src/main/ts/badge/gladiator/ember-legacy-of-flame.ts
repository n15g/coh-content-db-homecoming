import { BadgeData } from 'coh-content-db'

export const EmberLegacyOfFlame: BadgeData = {
  type: 'gladiator',
  key: 'ember-legacy-of-flame',
  setTitleId: [464],
  name: 'Ember Legacy of Flame',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: 'The Legacy Chain respects you.' },
    { alignment: 'villain', value: 'These do-gooders are trapped in your power.' },
  ],
  acquisition: 'Defeat 200 Legacy Chain Minions (Legacy Chain)',
  notes: 'The in-game hint text says 100 minions, but 200 are required.',
  links: [
    { title: 'Ember Legacy of Flame Badge', href: 'https://homecoming.wiki/wiki/Ember_Legacy_of_Flame_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
}
