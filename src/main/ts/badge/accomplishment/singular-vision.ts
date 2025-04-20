import { BadgeData } from 'coh-content-db'
import { LookingThroughTheGlass } from '../../mission/looking-through-the-glass'

export const SingularVision: BadgeData = {
  type: 'accomplishment',
  key: 'singular-vision',
  setTitleId: [1588],
  name: 'Singular Vision',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You've prevented Protean from carrying out his plot for a Praetorian invasion, but not without a heavy cost - the death of your alternate self.`,
  links: [
    { title: 'Singular Vision Badge', href: 'https://homecoming.wiki/wiki/Singular_Vision_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/singular-vision.png',
  requirements: [
    { key: LookingThroughTheGlass.key, type: 'mission', missionKey: LookingThroughTheGlass.key },
  ],
}
