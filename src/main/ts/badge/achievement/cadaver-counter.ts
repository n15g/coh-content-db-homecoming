import { BadgeData } from 'coh-content-db'

export const CadaverCounter: BadgeData = {
  type: 'achievement',
  key: 'cadaver-counter',
  setTitleId: [2023],
  name: 'Cadaver Counter',
  morality: 'all',
  badgeText: 'You took out the mad Vahzilok doctor in the sewers beneath Paragon without killing any of the Cadavers it was controlling.',
  acquisition: 'Defeat the Vahzilok leader in the Death from Below Sewer Trial without killing any of the Cadavers.',
  links: [
    { title: 'Cadaver Counter Badge', href: 'https://homecoming.wiki/wiki/Cadaver_Counter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/sewer-trial.png',
}
