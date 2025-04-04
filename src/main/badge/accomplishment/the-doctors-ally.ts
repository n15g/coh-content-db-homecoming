import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { GordonStacy } from '../../contact/gordon-stacy'

export const TheDoctorsAlly: BadgeData = {
  type: 'accomplishment',
  key: 'the-doctors-ally',
  setTitleId: [80],
  name: `The Doctor's Ally`,
  morality: 'heroic',
  badgeText: 'You have uncovered the fate of Doctor Friedkin.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "They Call Me The Doctor" entry with number 0.37 in the 35-39 level range.`,
  links: [
    { title: `The Doctor's Ally Badge`, href: 'https://homecoming.wiki/wiki/The_Doctor%27s_Ally_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-doctors-ally.png',
  requirements: [
    { key: 'itd', type: 'MISSION', missionName: 'Investigate the Hacker Known as The Doctor', contactKey: GordonStacy.key },
  ],
}
