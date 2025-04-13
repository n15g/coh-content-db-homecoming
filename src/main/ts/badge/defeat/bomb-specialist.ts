import { BadgeData } from 'coh-content-db'

export const BombSpecialist: BadgeData = {
  type: 'defeat',
  key: 'bomb-specialist',
  setTitleId: [834],
  name: 'Bomb Specialist',
  morality: 'all',
  badgeText: 'You have disarmed 25 unexploded bombs.',
  acquisition: 'Destroy 25 unexploded Bombs (UXBs) during a Rikti World Invasion.',
  links: [
    { title: 'Bomb Specialist Badge', href: 'https://homecoming.wiki/wiki/Bomb_Specialist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/new-rikti.png',
}
