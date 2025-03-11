import { BadgeData } from 'coh-content-db'
import { CascadeArchipelago } from '../../map/cascade-archipelago'

export const LiquidMemory: BadgeData = {
  type: 'EXPLORATION',
  key: 'liquid-memory',
  setTitle: { id: 1809 },
  name: [{ value: 'Liquid Memory' }],
  alignment: ['H'],
  mapKey: CascadeArchipelago.key,
  loc: [-294, 568, 549],
  badgeText: [{
    value: 'You look upon this pool of red fluid and your mind says "blood." But despite this another part of your mind says "drink." And you do.'
      + ' It tastes like the scent of green grass, of the metallic tang of an adrenaline rush, burnt rubber, your mother\'s blueberry pie, and on and on.'
      + ' You realize that it is not flavors the liquid is eliciting, but memories, and with each passing second they come on one after another until you become nauseous with the'
      + ' sensation overload.'
      + ' You spit the liquid from your mouth and vow never to taste it again. But...',
  }],
  notes: 'Located in [map:cascade-archipelago] 492 yards west of the Crimson Falls marker, at the base of the waterfall.',
  links: [
    { title: 'Liquid Memory Badge', href: 'https://homecoming.wiki/wiki/Liquid_Memory_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '5',
}
