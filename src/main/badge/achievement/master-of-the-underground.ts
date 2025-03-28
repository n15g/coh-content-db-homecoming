import { BadgeData } from 'coh-content-db'
import { RegenerateThis } from './regenerate-this'
import { TourGuide } from './tour-guide'
import { PreservationSpecialist } from './preservation-specialist'
import { AvatarAssassin } from './avatar-assassin'

export const MasterOfTheUnderground: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-the-underground',
  setTitle: { id: 2000 },
  name: [
    { value: 'Master of the Underground' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have mastered the Incarnate Trial: Underground.' },
  ],
  links: [
    { title: 'Master of the Underground Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Underground_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-underground.png' },
  ],
  requirements: [[
    { key: RegenerateThis.key, type: 'BADGE', badgeKey: RegenerateThis.key },
    { key: TourGuide.key, type: 'BADGE', badgeKey: TourGuide.key },
    { key: PreservationSpecialist.key, type: 'BADGE', badgeKey: PreservationSpecialist.key },
    { key: AvatarAssassin.key, type: 'BADGE', badgeKey: AvatarAssassin.key },
  ]],
}
