import { BadgeData, missionLink } from 'coh-content-db'
import { BlackShroudDimension } from '../../zone/black-shroud-dimension'
import { TakeDownNightstar } from '../../mission/take-down-nightstar'
import { BringCitizensToVahzilokSurgeons } from '../../mission/bring-citizens-to-vahzilok-surgeons'

export const Shrouded: BadgeData = {
  type: 'exploration',
  key: 'shrouded',
  setTitleId: [173],
  name: [
    { alignment: 'hero', value: 'Shrouded' },
    { alignment: 'villain', value: 'Shady' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'This otherworld has been overshadowed by corrupting magic.' },
    { alignment: 'villain', value: `A trip back to Paragon City confirmed it: You're the shady type of person other people are right to be afraid of.` },
  ],
  acquisition: `Spend any amount of time on the mission map in either the ${missionLink(TakeDownNightstar)} or ${missionLink(BringCitizensToVahzilokSurgeons)} mission.`,
  notes: `The badge is awarded after a random period of time while on the map, or will be rewarded immediately if you leave the map.`,
  links: [
    { title: 'Shrouded Badge', href: 'https://homecoming.wiki/wiki/Shrouded_Badge' },
    { title: 'Shady Badge', href: 'https://homecoming.wiki/wiki/Shady_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'mission', missionKey: TakeDownNightstar.key, location: { zoneKey: BlackShroudDimension.key } },
    { key: 'loc-1', type: 'mission', missionKey: BringCitizensToVahzilokSurgeons.key, location: { zoneKey: BlackShroudDimension.key } },
  ],
}
