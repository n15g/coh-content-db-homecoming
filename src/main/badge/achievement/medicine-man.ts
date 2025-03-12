import { BadgeData } from 'coh-content-db'

export const MedicineMan: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'medicine-man',
  setTitle: { id: 237, praetorianId: 1691 },
  name: [
    { sex: 'M', value: 'Medicine Man' },
    { sex: 'F', value: 'Medicine Woman' },
    { alignment: 'P', value: 'Savior' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have helped your fellow heroes by healing them for five million hit points.' },
    {
      alignment: 'P', value: 'You might demur from the title of "Savior" for your healing prowess, but then again, yes, yes '
        + 'it seems to fit.',
    },
  ],
  acquisition: 'Heal others for 5,000,000 hit points',
  links: [
    { title: 'Medicine Man Badge', href: 'https://homecoming.wiki/wiki/Medicine_Man_Badge' },
    { title: 'Medicine Woman Badge', href: 'https://homecoming.wiki/wiki/Medicine_Woman_Badge' },
    { title: 'Savior Badge', href: 'https://homecoming.wiki/wiki/Savior_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png' },
  ],
}
