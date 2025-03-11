import { BadgeData } from 'coh-content-db'

export const HonoraryPeacebringer: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'honorary-peacebringer',
  setTitle: { id: 412 },
  name: [
    { alignment: 'H', value: 'Honorary Peacebringer' },
    { alignment: 'V', value: 'Alien Fighter' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You have stopped the Council\'s plan to infect the populace with Nictus aliens.' },
  ],
  acquisition: 'Complete the Moonfire Task Force: The Kheldian War',
  links: [
    { title: 'Honorary Peacebringer Badge', href: 'https://homecoming.wiki/wiki/Honorary_Peacebringer_Badge' },
    { title: 'Alien Fighter Badge', href: 'https://homecoming.wiki/wiki/Alien_Fighter_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/honorary-peacebringer.png' },
  ],
}
