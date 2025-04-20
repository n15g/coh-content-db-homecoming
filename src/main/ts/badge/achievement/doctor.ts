import { BadgeData } from 'coh-content-db'

export const Doctor: BadgeData = {
  type: 'achievement',
  key: 'doctor',
  setTitleId: [4, 1689],
  name: [
    { alignment: 'hero', value: 'Doctor' },
    { alignment: 'villain', value: 'Mad Scientist' },
    { alignment: 'praetorian', value: 'Clutch' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You have helped your fellow heroes by healing them for two million hit points.' },
    { alignment: 'villain', value: `You've healed over two million points of damage during your nefarious adventures.` },
    { alignment: 'praetorian', value: 'There have been many times where a well-timed heal has snatched victory from the jaws of defeat, and it always seems to be your doing.' },
  ],
  acquisition: 'Heal others for 2,000,000 hit points.',
  links: [
    { title: 'Doctor Badge', href: 'https://homecoming.wiki/wiki/Doctor_Badge' },
    { title: 'Mad Scientist Badge', href: 'https://homecoming.wiki/wiki/Mad_Scientist_Badge' },
    { title: 'Clutch Badge', href: 'https://homecoming.wiki/wiki/Clutch_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png' },
  ],
}
