import { BadgeData } from 'coh-content-db'

export const AvatarAssassin: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'avatar-assassin',
  setTitle: { id: 1999 },
  name: [
    { value: 'Avatar Assassin' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You took a risk and managed to defeat the Avatar of Hamidon in the Underground at the same '
        + 'time a Detonating Seedling was about to go off.',
    },
  ],
  acquisition: 'Defeat the Avatar of Hamidon at the same time as a Detonating Seedling in The Underground Trial',
  links: [
    { title: 'Avatar Assassin Badge', href: 'https://homecoming.wiki/wiki/Avatar_Assassin_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-ug.png' },
  ],
}
