import { BadgeData } from 'coh-content-db'
import { TerraVolta } from '../../zone/terra-volta'

export const GuardianOfTheVolts: BadgeData = {
  type: 'exploration',
  key: 'guardian-of-the-volts',
  setTitleId: [1837],
  name: 'Guardian of the Volts',
  morality: 'paragon-city-access',
  badgeText: `You stand along the vital corridor through which flows the power of Terra Volta's reactor.
This place is a frequent target for attacks by those determined to cripple Paragon City and deserves protecting.
If you like your hair dryers, your video games, your mass-spectrometers, or your q-bind amalgimatrix devices to function without pause, you'd better ensure that nothing happens to these power lines.`,
  notes: `Located 210 yards South of the Coroman Manufacturing marker on top of the first right hand Pylon in Gordon Trench.`,
  links: [
    { title: 'Guardian of the Volts Badge', href: 'https://homecoming.wiki/wiki/Guardian_of_the_Volts_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TerraVolta.key, coords: [1313, 40, -6016] }, vidiotMapKey: '4' },
  ],
}
