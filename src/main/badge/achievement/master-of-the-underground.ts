import { BadgeData } from 'coh-content-db'
import { RegenerateThis } from './regenerate-this'
import { TourGuide } from './tour-guide'
import { PreservationSpecialist } from './preservation-specialist'
import { AvatarAssassin } from './avatar-assassin'

export const MasterOfTheUnderground: BadgeData = {
  type: 'achievement',
  key: 'master-of-the-underground',
  setTitleId: [2000],
  name: 'Master of the Underground',
  morality: 'all',
  badgeText: 'You have mastered the Incarnate Trial: Underground.',
  links: [
    { title: 'Master of the Underground Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Underground_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-underground.png',
  requirements: [
    { key: RegenerateThis.key, type: 'badge', badgeKey: RegenerateThis.key },
    { key: TourGuide.key, type: 'badge', badgeKey: TourGuide.key },
    { key: PreservationSpecialist.key, type: 'badge', badgeKey: PreservationSpecialist.key },
    { key: AvatarAssassin.key, type: 'badge', badgeKey: AvatarAssassin.key },
  ],
}
