import { BadgeData, zoneLink } from 'coh-content-db'
import { AbandonedSewerNetwork } from '../../zone/abandoned-sewer-network'
import { SewerNetwork } from '../../zone/sewer-network'

export const FromBeneathYou: BadgeData = {
  type: 'exploration',
  key: 'from-beneath-you',
  setTitleId: [1826],
  name: 'From Beneath You',
  morality: 'paragon-city-access',
  badgeText: `Amidst the hustle and bustle of Atlas Park, with masses of super-powered individuals going to and fro, it is easy to forget the miles of tunnels and chambers that underlie that district.
People go about their daily business unaware of the thriving ecology that takes place beneath their feet. Vahzilok, Hydra, Hellions, and worse skulk in the shadows,
going about their own dark business while the citizens of Atlas Park shrug off the notion that danger lurks a handful of yards away.`,
  notes: `Located 80 feet southwest of the ${zoneLink(SewerNetwork)} transfer point in Atlas Park Sector, right at the exit of the room.`,
  links: [
    { title: 'From Beneath You Badge', href: 'https://homecoming.wiki/wiki/From_Beneath_You_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AbandonedSewerNetwork.key, coords: [-3264, 0, 1408], icon: 'badge', iconText: '6' } },
  ],
}
