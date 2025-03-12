import { BadgeData } from 'coh-content-db'

export const PPDDeputy: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'ppd-deputy',
  setTitle: { id: 642 },
  name: [
    { alignment: 'H', value: 'PPD Deputy' },
    { alignment: 'V', value: 'Disgraced Deputy' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'Paragon Police officials have deputized you for rescuing several of their officers.' },
    { alignment: 'V', value: 'Though the Paragon Police you saved owe you one, they will still bring you down on sight.' },
  ],
  acquisition: 'Save 20 hostage PPD agents in Safeguard Missions',
  links: [
    { title: 'PPD Deputy Badge', href: 'https://homecoming.wiki/wiki/PPD_Deputy_Badge' },
    { title: 'Disgraced Deputy Badge', href: 'https://homecoming.wiki/wiki/Disgraced_Deputy_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/ppd-deputy.png' },
  ],
}
