import { BadgeData } from 'coh-content-db'
import { CascadeArchipelago } from '../../zone/cascade-archipelago'

export const NoTurningBackNow: BadgeData = {
  type: 'exploration',
  key: 'no-turning-back-now',
  setTitleId: [1811],
  name: 'No Turning Back Now',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `Gravity operates strangely in the Shadow Shard, but more than just the floating masses of rock, there is a gravity here of a more spiritual kind.
You feel it drawing you inexorably forward towards an unknown destiny.
All thoughts of retreat are discarded as counterproductive, there is no other course of action but to press on. You've been caught in an unseen orbit, around a power you cannot possibly fathom.`,
  notes: `Located 0.53 miles SW of the Tyrant's Rock marker, at the base of the geyser on the floating rock.
  
To reach it, go approximately 367 yards NNE of the Tyrant's Rock marker, and then straight down.`,
  links: [
    { title: 'No Turning Back Now Badge', href: 'https://homecoming.wiki/wiki/No_Turning_Back_Now_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CascadeArchipelago.key, coords: [1010, 2196, -5653], icon: 'badge', iconText: '7' } },
  ],
}
