import { BadgeData } from 'coh-content-db'
import { Leonard } from '../../contact/leonard'

export const ExplosiveFinale: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'explosive-finale',
  setTitle: { id: 1586 },
  name: 'Explosive Finale',
  alignment: ['V'],
  badgeText: 'Protean thought he could put an end to you by blowing you up - you proved him wrong.',
  links: [
    { title: 'Explosive Finale Badge', href: 'https://homecoming.wiki/wiki/Explosive_Finale_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/explosive-finale.png',
  requirements: [
    { key: 'good-villains-never-die', type: 'ARC', missionName: 'Good Villains Never Die', contactKey: Leonard.key },
  ],
}
