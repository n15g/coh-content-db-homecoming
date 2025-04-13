import { BadgeData } from 'coh-content-db'
import { EchoDarkAstoria } from '../../zone/echo-dark-astoria'

export const PhantomRadio: BadgeData = {
  type: 'exploration',
  key: 'phantom-radio',
  setTitleId: [1782],
  name: 'Phantom Radio',
  morality: 'paragon-city-access',
  badgeText: `Since the fall of Astoria, shortwave enthusiasts in Paragon City and beyond have occasionally happened upon strange transmissions of ghostly whispers, wailing pleas, bestial shouts of rage, and haunting voices chanting in dead languages.
Those who have heard these grim transmissions nearly always suffer for it; their lives claimed by some unexpected calamity or their minds by a sudden and inexplicable mental illness. M.A.G.I. eventually traced the transmission to this radio tower.`,
  notes: `Located 430 yards SE of the Toffet Terrace marker, at the base of the radio tower on top the building.`,
  links: [
    { title: 'Phantom Radio Badge', href: 'https://homecoming.wiki/wiki/Phantom_Radio_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoDarkAstoria.key, coords: [2985, 204, 3676], icon: 'badge', iconText: '5' } },
  ],
}
