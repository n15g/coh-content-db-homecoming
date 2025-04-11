import { BadgeData } from 'coh-content-db'

export const LucentLegacyOfLight: BadgeData = {
  type: 'gladiator',
  key: 'lucent-legacy-of-light',
  setTitleId: [465],
  name: 'Lucent Legacy of Light',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: 'The Legacy Chain respects you.' },
    { alignment: 'villain', value: 'These fools underestimated your true power!' },
  ],
  acquisition: 'Defeat 200 Legacy Chain Lieutenants.',
  links: [
    { title: 'Lucent Legacy of Light Badge', href: 'https://homecoming.wiki/wiki/Lucent_Legacy_of_Light_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
}
