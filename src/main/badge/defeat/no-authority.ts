import { BadgeData } from 'coh-content-db'

export const NoAuthority: BadgeData = {
  type: 'DEFEAT',
  key: 'no-authority',
  setTitle: { id: 1467 },
  name: [
    { value: 'No Authority' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You\'re a wanted criminal according to the Praetorian Police. You defeated enough Praetorian '
        + 'Police Department members to earn this badge.',
    },
  ],
  acquisition: 'Defeat 100 points worth of Praetorian PD',
  links: [
    { title: 'No Authority Badge', href: 'https://homecoming.wiki/wiki/No_Authority_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/no-authority.png' },
  ],
}
