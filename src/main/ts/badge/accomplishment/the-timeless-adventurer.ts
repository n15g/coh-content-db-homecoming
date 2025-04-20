import { BadgeData } from 'coh-content-db'
import { WhatWasBuiltUponthePast } from '../../mission/what-was-built-upon-the-past'

export const TheTimelessAdventurer: BadgeData = {
  type: 'accomplishment',
  key: 'the-timeless-adventurer',
  setTitleId: [2192],
  name: 'The Timeless Adventurer',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You travelled back to Cimerora and saved their civilization from certain destruction by the Talons of Vengeance, though you wonder if you only prolonged the inevitable, given that Cimerora is a lost civilization.',
  links: [
    { title: 'The Timeless Adventurer Badge', href: 'https://homecoming.wiki/wiki/The_Timeless_Adventurer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png',
  requirements: [
    { key: WhatWasBuiltUponthePast.key, type: 'mission', missionKey: WhatWasBuiltUponthePast.key },
  ],
}
