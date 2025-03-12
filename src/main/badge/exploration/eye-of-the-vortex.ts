import { BadgeData } from 'coh-content-db'
import { FirstWard } from '../../map/first-ward'

export const EyeOfTheVortex: BadgeData = {
  type: 'EXPLORATION',
  key: 'eye-of-the-vortex',
  setTitle: { id: 2049 },
  name: [{ value: 'Eye of the Vortex' }],
  alignment: ['H', 'V', 'P'],
  mapKey: FirstWard.key,
  loc: [178, 947, -173],
  badgeText: [{
    value: `Mystical energies seethe and whirl overhead; hypnotizing in its terrible beauty.
Standing this close to it one feels a charge in the air: the skin tingles with barely contained energy, the teeth ache to its harmonic vibration, the mind contemplates alien thoughts.
You may feel as though you could fall upwards into it, be absorbed into it, become one with the vortex`,
  }],
  notes: `Located in [map:${FirstWard.key}] in the Sunken City neighborhood, slightly west of the Westerman Building marker,
though at the top of the building; on the ledge directly behind Diabolique.`,
  links: [
    { title: 'Eye of the Vortex Badge', href: 'https://homecoming.wiki/wiki/Eye_of_the_Vortex_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '2',
}
