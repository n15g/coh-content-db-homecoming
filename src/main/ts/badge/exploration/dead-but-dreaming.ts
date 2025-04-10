import { BadgeData } from 'coh-content-db'
import { NightWard } from '../../zone/night-ward'

export const DeadButDreaming: BadgeData = {
  type: 'exploration',
  key: 'dead-but-dreaming',
  setTitleId: [2230],
  name: 'Dead but Dreaming',
  morality: 'all',
  badgeText: `The final resting place of the Seed of Hamidon radiates a chill that permeates even Night Ward.
In spite of this you take comfort in knowing that Night Ward is beyond Hamidon's reach.
But to those denizens unfamiliar with the events leading to the fall of First Ward, this skull-shaped husk is an object of superstition and trepidation.
It seems that even in death the Seed continues to spread its influence.`,
  notes: `Located in the The Sleeping Beast neighborhood, 403 yards NNE of the Howling Vale map marker inside the husk of the fallen Seed of Hamidon.`,
  links: [
    { title: 'Dead But Dreaming Badge', href: 'https://homecoming.wiki/wiki/Dead_But_Dreaming_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NightWard.key, coords: [901, 23, 1997], icon: 'badge', iconText: '5' } },
  ],
}
