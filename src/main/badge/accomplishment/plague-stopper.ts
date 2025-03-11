import { BadgeData } from 'coh-content-db'

export const PlagueStopper: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'plague-stopper',
  setTitle: { id: 73 },
  name: [
    { alignment: 'H', value: 'Plague Stopper' },
    { alignment: 'V', value: 'Deadly Virus' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You were key in stopping a plague from overtaking Paragon City.' },
  ],
  acquisition: 'Complete the Destroy Plague Containers mission from Olivia Chung, Dr. Ann-Marie Engles, Juliana Nehring, or Pavel Garnier',
  links: [
    { title: 'Plague Stopper Badge', href: 'https://homecoming.wiki/wiki/Plague_Stopper_Badge' },
    { title: 'Deadly Virus Badge', href: 'https://homecoming.wiki/wiki/Deadly_Virus_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/plague-stopper.png' },
  ],
}
