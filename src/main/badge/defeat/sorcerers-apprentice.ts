import { BadgeData } from 'coh-content-db'

export const SorcerersApprentice: BadgeData = {
  type: 'DEFEAT',
  key: 'sorcerers-apprentice',
  setTitle: { id: 2215 },
  name: [
    { value: 'Sorcerer\'s Apprentice' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Your magical aptitude allowed you to tame the wild magics of the Night Ward.  The capricious '
        + 'Animus Arcana have been dispelled at your hand.',
    },
  ],
  acquisition: 'Defeat 100 points worth of Animus Arcana',
  links: [
    { title: 'Sorcerer\'s Apprentice Badge', href: 'https://homecoming.wiki/wiki/Sorcerer%27s_Apprentice_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/sorcerers-apprentice.png' },
  ],
}
