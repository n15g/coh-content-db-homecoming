import { BadgeData } from 'coh-content-db'

export const MedicineMan: BadgeData = {
  type: 'achievement',
  key: 'medicine-man',
  setTitleId: [237, 1691],
  name: [
    { sex: 'M', value: 'Medicine Man' },
    { sex: 'F', value: 'Medicine Woman' },
    { alignment: 'praetorian', value: 'Savior' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { value: 'You have helped your fellow heroes by healing them for five million hit points.' },
    { alignment: 'praetorian', value: 'You might demur from the title of "Savior" for your healing prowess, but then again, yes, yes it seems to fit.' },
  ],
  acquisition: 'Heal others for 5,000,000 hit points.',
  links: [
    { title: 'Medicine Man Badge', href: 'https://homecoming.wiki/wiki/Medicine_Man_Badge' },
    { title: 'Medicine Woman Badge', href: 'https://homecoming.wiki/wiki/Medicine_Woman_Badge' },
    { title: 'Savior Badge', href: 'https://homecoming.wiki/wiki/Savior_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png' },
  ],
}
