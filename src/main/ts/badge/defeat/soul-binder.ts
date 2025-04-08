import { BadgeData } from 'coh-content-db'

export const SoulBinder: BadgeData = {
  type: 'defeat',
  key: 'soul-binder',
  setTitleId: [40],
  name: 'Soul Binder',
  morality: 'all',
  badgeText: 'You have uncovered the secret of the Circle of Thorn mages, that they are ancient spirits who inhabit the stolen bodies of their victims.',
  acquisition: 'Defeat 100 Circle of Thorns mages.',
  links: [
    { title: 'Soul Binder Badge', href: 'https://homecoming.wiki/wiki/Soul_Binder_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/cot.png',
}
