import { BadgeData, mapLink } from 'coh-content-db'
import { CascadeArchipelago } from '../../map/cascade-archipelago'

export const NoTurningBackNow: BadgeData = {
  type: 'EXPLORATION',
  key: 'no-turning-back-now',
  setTitle: { id: 1811 },
  name: [{ value: 'No Turning Back Now' }],
  alignment: ['H'],
  mapKey: CascadeArchipelago.key,
  loc: [1010, 2196, -5653],
  badgeText: [{
    value: 'Gravity operates strangely in the Shadow Shard, but more than just the floating masses of rock, there is a gravity here of a more spiritual kind.'
      + ' You feel it drawing you inexorably forward towards an unknown destiny.'
      + ' All thoughts of retreat are discarded as counterproductive, there is no other course of action but to press on.'
      + ' You\'ve been caught in an unseen orbit, around a power you cannot possibly fathom.',
  }],
  notes: `Located in ${mapLink(CascadeArchipelago)} 0.53 miles SW of the Tyrant's Rock marker, at the base of the geyser on the floating rock.

          To reach it, go approximately 367 yards NNE of the Tyrant's Rock marker, and then straight down.`,
  links: [
    { title: 'No Turning Back Now Badge', href: 'https://homecoming.wiki/wiki/No_Turning_Back_Now_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '7',
}
