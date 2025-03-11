import { BadgeData } from 'coh-content-db'

export const BombSpecialist: BadgeData = {
  type: 'DEFEAT',
  key: 'bomb-specialist',
  setTitle: { id: 834 },
  name: [
    { value: 'Bomb Specialist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have disarmed 25 unexploded bombs.' },
  ],
  acquisition: 'Destroy 25 unexploded Bombs (UXBs) during a Rikti World Invasion',
  links: [
    { title: 'Bomb Specialist Badge', href: 'https://homecoming.wiki/wiki/Bomb_Specialist_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/new-rikti.png' },
  ],
}
