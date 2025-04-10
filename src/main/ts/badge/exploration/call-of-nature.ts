import { BadgeData } from 'coh-content-db'
import { Eden } from '../../zone/eden'

export const CallOfNature: BadgeData = {
  type: 'exploration',
  key: 'call-of-nature',
  setTitleId: [1842],
  name: 'Call of Nature',
  morality: 'paragon-city-access',
  badgeText: `In the distance you can hear the ululating cry of the Devouring Earth and something about it speaks to a primal, ancient, part of you.
You can understand how some might be seduced by this call and stray into their embrace to be devoured.
There is something almost hypnotic about it; being summoned by a power greater than you, older than you, and somehow welcoming, as though the Devouring Earth offer a unity unattainable
anywhere else on this world.`,
  notes: `Located 155 yards east of The Pit marker, in a grassy patch covering the road leading to the east.`,
  links: [
    { title: 'Call of Nature Badge', href: 'https://homecoming.wiki/wiki/Call_of_Nature_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Eden.key, coords: [-3026, 3, 3262], icon: 'badge', iconText: '3' } },
  ],
}
