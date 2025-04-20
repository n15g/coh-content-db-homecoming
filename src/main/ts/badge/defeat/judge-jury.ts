import { BadgeData } from 'coh-content-db'

export const JudgeJury: BadgeData = {
  type: 'defeat',
  key: 'judge-jury',
  setTitleId: [1466],
  name: [
    { alignment: 'hero', value: 'Judge & Jury' },
    { alignment: 'villain', value: 'Merciless' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You defeated one of the signature "Rogues Gallery" characters in an Alignment or Morality mission earning yourself this badge.`,
  acquisition: `Defeat a Rogue's Gallery character in an Alignment Mission or a Morality Mission.`,
  links: [
    { title: 'Judge & Jury Badge', href: 'https://homecoming.wiki/wiki/Judge_%26_Jury_Badge' },
    { title: 'Merciless Badge', href: 'https://homecoming.wiki/wiki/Merciless_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/judge-jury.png',
}
