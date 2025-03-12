import { BadgeData } from 'coh-content-db'

export const MobSpecialist: BadgeData = {
  type: 'GLADIATOR',
  key: 'mob-specialist',
  setTitle: { id: 510 },
  name: [
    { value: 'Mob Specialist' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'Crey has authorized these men for your Arena teams.' },
  ],
  acquisition: 'Defeat 200 Prisoner Bosses (Prisoners)',
  links: [
    { title: 'Mob Specialist Badge', href: 'https://homecoming.wiki/wiki/Mob_Specialist_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
