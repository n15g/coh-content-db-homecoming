import { BadgeData } from 'coh-content-db'

export const PPDDeputy: BadgeData = {
  type: 'achievement',
  key: 'ppd-deputy',
  setTitleId: [642],
  name: [
    { alignment: 'hero', value: 'PPD Deputy' },
    { alignment: 'villain', value: 'Disgraced Deputy' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'Paragon Police officials have deputized you for rescuing several of their officers.' },
    { alignment: 'villain', value: 'Though the Paragon Police you saved owe you one, they will still bring you down on sight.' },
  ],
  acquisition: 'Save 20 hostage PPD agents in Safeguard Missions.',
  links: [
    { title: 'PPD Deputy Badge', href: 'https://homecoming.wiki/wiki/PPD_Deputy_Badge' },
    { title: 'Disgraced Deputy Badge', href: 'https://homecoming.wiki/wiki/Disgraced_Deputy_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/ppd-deputy.png',
}
