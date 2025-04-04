import { BadgeData } from 'coh-content-db'
import { TerraVolta } from '../../zone/terra-volta'

export const HighVoltage: BadgeData = {
  type: 'exploration',
  key: 'high-voltage',
  setTitleId: [1841],
  name: 'High Voltage!',
  morality: 'heroic',
  zoneKey: TerraVolta.key,
  loc: [290, 188, -3862],
  badgeText: `The air crackles with electricity and the odor of ozone fills your nostrils.
Power fills the air here and it draws the Freakshow like moths to a flame.
Juicers and Tanks bellow and cheer as free electrons dance along their synapses, filling them with a battle lust they long to vent upon you.
They challenge you to join them and dance among the volts that skitter across the ground like faerie fire.`,
  notes: `Located 230 yards SSW of the Walker Energy marker, in a square-shaped building just northeast of the reactor.`,
  links: [
    { title: 'High Voltage! Badge', href: 'https://homecoming.wiki/wiki/High_Voltage!_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '8',
}
