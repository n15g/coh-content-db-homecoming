import { BadgeData } from 'coh-content-db'

export const MedicalSpecialist: BadgeData = {
  type: 'achievement',
  key: 'medical-specialist',
  setTitleId: [236, 1690],
  name: [
    { value: 'Medical Specialist' },
    { alignment: 'praetorian', value: 'To the Rescue' },
  ],
  morality: 'all',
  badgeText: [
    { value: 'You have helped your fellow heroes by healing them for three million hit points.' },
    { alignment: 'praetorian', value: 'Your allies are renewed in spirit and body whenever you arrive. Always in time, and always To The Rescue.' },
  ],
  acquisition: 'Heal others for 3,000,000 hit points.',
  links: [
    { title: 'Medical Specialist Badge', href: 'https://homecoming.wiki/wiki/Medical_Specialist_Badge' },
    { title: 'To the Rescue Badge', href: 'https://homecoming.wiki/wiki/To_the_Rescue_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png' },
  ],
}
