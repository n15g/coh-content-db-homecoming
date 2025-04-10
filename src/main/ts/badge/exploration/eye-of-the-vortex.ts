import { BadgeData } from 'coh-content-db'
import { FirstWard } from '../../zone/first-ward'

export const EyeOfTheVortex: BadgeData = {
  type: 'exploration',
  key: 'eye-of-the-vortex',
  setTitleId: [2049],
  name: 'Eye of the Vortex',
  morality: 'all',
  badgeText: `Mystical energies seethe and whirl overhead; hypnotizing in its terrible beauty.
Standing this close to it one feels a charge in the air: the skin tingles with barely contained energy, the teeth ache to its harmonic vibration, the mind contemplates alien thoughts.
You may feel as though you could fall upwards into it, be absorbed into it, become one with the vortex`,
  notes: `Located in the Sunken City neighborhood, slightly west of the Westerman Building marker, on the ledge directly behind Diabolique.`,
  links: [
    { title: 'Eye of the Vortex Badge', href: 'https://homecoming.wiki/wiki/Eye_of_the_Vortex_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FirstWard.key, coords: [178, 947, -173], icon: 'badge', iconText: '2' } },
  ],
}
