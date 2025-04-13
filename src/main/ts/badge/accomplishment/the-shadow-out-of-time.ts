import { BadgeData } from 'coh-content-db'
import { GloryAndDarkTidings } from '../../mission/glory-and-dark-tidings'

export const TheShadowOutOfTime: BadgeData = {
  type: 'accomplishment',
  key: 'the-shadow-out-of-time',
  setTitleId: [2494],
  name: 'The Shadow Out Of Time',
  morality: 'all',
  badgeText: `This small trinket was fashioned for you in gratitude by a Cimeroran blacksmith.
Within it spins a fragment of the First Cyst, purged of its evil by the Midnighters and purified by the waters of Phoebas Point.
It serves as a reminder that Ouroboros are not the only ones who can fix a timeline, and you bet on that knowledge being important someday.`,
  links: [
    { title: 'The Shadow Out Of Time Badge', href: 'https://homecoming.wiki/wiki/The_Shadow_Out_Of_Time_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-shadow-out-of-time.png',
  requirements: [
    { key: GloryAndDarkTidings.key, type: 'mission', missionKey: GloryAndDarkTidings.key },
  ],
}
