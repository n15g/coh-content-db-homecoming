import { BadgeData } from 'coh-content-db'

export const JudgeJury: BadgeData = {
  type: 'DEFEAT',
  key: 'judge-jury',
  setTitle: { id: 1466 },
  name: [
    { alignment: 'H', value: 'Judge & Jury' },
    { alignment: 'V', value: 'Merciless' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You defeated one of the signature "Rogues Gallery" characters in an Alignment or Morality '
        + 'mission earning yourself this badge.',
    },
  ],
  acquisition: 'Defeat a Rogue\'s Gallery character in an Alignment Mission or a Morality Mission',
  links: [
    { title: 'Judge & Jury Badge', href: 'https://homecoming.wiki/wiki/Judge_%26_Jury_Badge' },
    { title: 'Merciless Badge', href: 'https://homecoming.wiki/wiki/Merciless_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/judge-jury.png' },
  ],
}
