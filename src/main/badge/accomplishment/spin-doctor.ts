import { BadgeData } from 'coh-content-db'

export const SpinDoctor: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'spin-doctor',
  setTitle: { id: 2072 },
  name: [
    { value: 'Spin Doctor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have completed the Incarnate Trial: TPN Campus.' },
  ],
  acquisition: 'Complete the TPN Campus Trial',
  links: [
    { title: 'Spin Doctor Badge', href: 'https://homecoming.wiki/wiki/Spin_Doctor_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/spin-doctor.png' },
  ],
}
