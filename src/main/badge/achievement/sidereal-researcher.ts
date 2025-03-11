import { BadgeData } from 'coh-content-db'

export const SiderealResearcher: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'sidereal-researcher',
  setTitle: { id: 2177 },
  name: [
    { value: 'Sidereal Researcher' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have furthered our understanding of the Shivan by collecting samples from Bloody Bay.' },
  ],
  acquisition: 'Collect 4 meteor samples during a single run of the Drowning in Blood trial',
  links: [
    { title: 'Sidereal Researcher Badge', href: 'https://homecoming.wiki/wiki/Sidereal_Researcher_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/sidereal-researcher.png' },
  ],
}
