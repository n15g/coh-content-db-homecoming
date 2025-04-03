import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { SisterValeria } from '../../contact/sister-valeria'

export const TheShadowOutOfTime: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'the-shadow-out-of-time',
  setTitle: { id: 2494 },
  name: 'The Shadow Out Of Time',
  alignment: ['H', 'V', 'P'],
  badgeText: `This small trinket was fashioned for you in gratitude by a Cimeroran blacksmith.
Within it spins a fragment of the First Cyst, purged of its evil by the Midnighters and purified by the waters of Phoebas Point.
It serves as a reminder that Ouroboros are not the only ones who can fix a timeline, and you bet on that knowledge being important someday.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero or villain can select the "Glory and Dark Tidings" entry with number 27.04 at level 50.`,
  links: [
    { title: 'The Shadow Out Of Time Badge', href: 'https://homecoming.wiki/wiki/The_Shadow_Out_Of_Time_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-shadow-out-of-time.png',
  requirements: [
    { key: 'gadt', type: 'ARC', missionName: 'Glory and Dark Tidings', contactKey: SisterValeria.key },
  ],
}
