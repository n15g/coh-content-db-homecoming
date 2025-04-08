import { BadgeData } from 'coh-content-db'
import { SisterSolaris } from '../../contact/sister-solaris'

export const TheTimelessAdventurer: BadgeData = {
  type: 'accomplishment',
  key: 'the-timeless-adventurer',
  setTitleId: [2192],
  name: 'The Timeless Adventurer',
  morality: 'all',
  badgeText: 'You travelled back to Cimerora and saved their civilization from certain destruction by the Talons of Vengeance, though you wonder if you only prolonged the inevitable, given that Cimerora is a lost civilization.',
  links: [
    { title: 'The Timeless Adventurer Badge', href: 'https://homecoming.wiki/wiki/The_Timeless_Adventurer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png',
  requirements: [
    { key: 'wwbutp', type: 'ARC', missionName: 'What Was Built Upon the Past', contactKey: SisterSolaris.key },
  ],
}
