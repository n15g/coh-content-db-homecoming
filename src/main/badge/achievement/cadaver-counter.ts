import { BadgeData } from 'coh-content-db'

export const CadaverCounter: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'cadaver-counter',
  setTitle: { id: 2023 },
  name: [
    { value: 'Cadaver Counter' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You took out the mad Vahzilok doctor in the sewers beneath Paragon without killing any of the '
        + 'Cadavers it was controlling.',
    },
  ],
  acquisition: 'Defeat the Vahzilok leader in the Death from Below Sewer Trial without killing any of the Cadavers',
  links: [
    { title: 'Cadaver Counter Badge', href: 'https://homecoming.wiki/wiki/Cadaver_Counter_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/sewer-trial.png' },
  ],
}
