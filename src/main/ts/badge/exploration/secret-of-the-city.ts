import { BadgeData, zoneLink } from 'coh-content-db'
import { AbandonedSewerNetwork } from '../../zone/abandoned-sewer-network'
import { SewerNetwork } from '../../zone/sewer-network'

export const SecretOfTheCity: BadgeData = {
  type: 'exploration',
  key: 'secret-of-the-city',
  setTitleId: [1823],
  name: 'Secret of the City',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `The dislocated voices of Steel Canyon's throngs filter down to this place, echoing through the miles of pipes and corridors to reverberate here.
If you listen long enough you can catch snippets of lost conversations.
Street lore says that for those with the ability to filter out the dross, these collected voices tell the secrets of the city.`,
  notes: `Located 66 yards west of the ${zoneLink(SewerNetwork)} transfer point in the Steel Canyon Sector, on the path leading into the sewers.`,
  links: [
    { title: 'Secret of the City Badge', href: 'https://homecoming.wiki/wiki/Secret_of_the_City_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AbandonedSewerNetwork.key, coords: [-1664, 0, -1728], icon: 'badge', iconText: '3' } },
  ],
}
