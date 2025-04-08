import { BadgeData } from 'coh-content-db'
import { Boomtown } from '../../zone/boomtown'

export const EndOfTheLine: BadgeData = {
  type: 'exploration',
  key: 'end-of-the-line',
  setTitleId: [1779],
  name: 'End of the Line',
  morality: 'paragon-city-access',
  badgeText: `On the day of the Rikti attack that wrought such devastation upon Baumton, this shattered monorail track was a scene of terror; one of many on that dark day.
But as the four-o'clock train dangled precipitously from the rail's shorn edge, the nightly news reported the fate of the imperiled passengers minute by minute.
Ultimately the passengers were saved by Lady Liberty and the Back Alley Brawler in a narrow escape as Rikti soldiers closed in.`,
  notes: 'The End of the Line badge is on the tip of a twisted light rail track 522 yards due east of the The Fuse marker.',
  links: [
    { title: 'End of the Line Badge', href: 'https://homecoming.wiki/wiki/End_of_the_Line_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Boomtown.key, coords: [-2658, 91, 4571] }, vidiotMapKey: '7' },
  ],
}
