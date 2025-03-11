import { BadgeData } from 'coh-content-db'

export const Doctor: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'doctor',
  setTitle: { id: 4, praetorianId: 1689 },
  name: [
    { alignment: 'H', value: 'Doctor' },
    { alignment: 'V', value: 'Mad Scientist' },
    { alignment: 'P', value: 'Clutch' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You have helped your fellow heroes by healing them for two million hit points.' },
    { alignment: 'V', value: 'You\'ve healed over two million points of damage during your nefarious adventures.' },
    {
      alignment: 'P', value: 'There have been many times where a well-timed heal has snatched victory from the jaws of '
        + 'defeat, and it always seems to be your doing.',
    },
  ],
  acquisition: 'Heal others for 2,000,000 hit points',
  links: [
    { title: 'Doctor Badge', href: 'https://homecoming.wiki/wiki/Doctor_Badge' },
    { title: 'Mad Scientist Badge', href: 'https://homecoming.wiki/wiki/Mad_Scientist_Badge' },
    { title: 'Clutch Badge', href: 'https://homecoming.wiki/wiki/Clutch_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png' },
  ],
}
