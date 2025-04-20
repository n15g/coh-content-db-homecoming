import { BadgeData } from 'coh-content-db'
import { CascadeArchipelago } from '../../zone/cascade-archipelago'

export const LiquidMemory: BadgeData = {
  type: 'exploration',
  key: 'liquid-memory',
  setTitleId: [1809],
  name: 'Liquid Memory',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `You look upon this pool of red fluid and your mind says "blood." But despite this another part of your mind says "drink." And you do.
It tastes like the scent of green grass, of the metallic tang of an adrenaline rush, burnt rubber, your mother's blueberry pie, and on and on.
You realize that it is not flavors the liquid is eliciting, but memories, and with each passing second they come on one after another until you become nauseous with the sensation overload.
You spit the liquid from your mouth and vow never to taste it again. But...`,
  notes: `Located 492 yards west of the Crimson Falls marker, at the base of the waterfall.`,
  links: [
    { title: 'Liquid Memory Badge', href: 'https://homecoming.wiki/wiki/Liquid_Memory_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CascadeArchipelago.key, coords: [-294, 568, 549], icon: 'badge', iconText: '5' } },
  ],
}
