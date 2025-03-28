import { BadgeData } from 'coh-content-db'
import { TerraVolta } from '../../zone/terra-volta'

export const HighVoltage: BadgeData = {
  type: 'EXPLORATION',
  key: 'high-voltage',
  setTitle: { id: 1841 },
  name: [{ value: 'High Voltage!' }],
  alignment: ['H'],
  zoneKey: TerraVolta.key,
  loc: [290, 188, -3862],
  badgeText: [{
    value: `The air crackles with electricity and the odor of ozone fills your nostrils.
Power fills the air here and it draws the Freakshow like moths to a flame.
Juicers and Tanks bellow and cheer as free electrons dance along their synapses, filling them with a battle lust they long to vent upon you.
They challenge you to join them and dance among the volts that skitter across the ground like faerie fire.`,
  }],
  notes: `230 yards SSW of the Walker Energy marker, in a square-shaped building just northeast of the reactor.`,
  links: [
    { title: 'High Voltage! Badge', href: 'https://homecoming.wiki/wiki/High_Voltage!_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '8',
}
