import { BadgeData } from 'coh-content-db'
import { Inventor } from '../invention/inventor'
import { Artisan } from '../invention/artisan'
import { MasterArtisan } from '../invention/master-artisan'
import { Craftsman } from '../invention/craftsman'
import { MasterCraftsman } from '../invention/master-craftsman'
import { Declining } from '../invention/declining'
import { Decaying } from '../invention/decaying'
import { Despoiler } from '../invention/despoiler'
import { Dismantler } from '../invention/dismantler'
import { Medicator } from '../invention/medicator'
import { Mender } from '../invention/mender'
import { Rebuilder } from '../invention/rebuilder'
import { Revivifier } from '../invention/revivifier'
import { Armorer } from '../invention/armorer'
import { Guardian } from '../invention/guardian'
import { Protector } from '../invention/protector'
import { Security } from '../invention/security'
import { Blinding } from '../invention/blinding'
import { Beguiler } from '../invention/beguiler'
import { Charming } from '../invention/charming'
import { Charismatic } from '../invention/charismatic'
import { EnergyConservationist } from '../invention/energy-conservationist'
import { BatteryPowered } from '../invention/battery-powered'
import { NuclearPowered } from '../invention/nuclear-powered'
import { MysticallyPowered } from '../invention/mystically-powered'
import { TriggerMan } from '../invention/trigger-man'
import { HiredGun } from '../invention/hired-gun'
import { HitMan } from '../invention/hit-man'
import { Sniper } from '../invention/sniper'
import { Major } from '../invention/major'
import { LtColonel } from '../invention/lt-colonel'
import { Colonel } from '../invention/colonel'
import { MajorGeneral } from '../invention/major-general'
import { Munitionist } from '../invention/munitionist'
import { Weaponeer } from '../invention/weaponeer'
import { Warhead } from '../invention/warhead'
import { ArmsDealer } from '../invention/arms-dealer'
import { Pilgrim } from '../invention/pilgrim'
import { Vagabond } from '../invention/vagabond'
import { Wanderer } from '../invention/wanderer'
import { WalksTheEarth } from '../invention/walks-the-earth'

export const FieldCrafter: BadgeData = {
  type: 'ACCOLADE',
  key: 'field-crafter',
  setTitle: { id: 805 },
  name: [
    { value: 'Field Crafter' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You are truly a crafting specialist, and can now summon a portable crafting station to your location for five minutes once an hour. All nearby characters can use this station.` },
  ],
  effect: `Awards the Portable Workbench power.`,
  links: [
    { title: 'Field Crafter Badge', href: 'https://homecoming.wiki/wiki/Field_Crafter_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/field-crafter.png' },
  ],
  requirements: [[
    { key: Inventor.key, type: 'BADGE', badgeKey: Inventor.key },
    { key: Artisan.key, type: 'BADGE', badgeKey: Artisan.key },
    { key: MasterArtisan.key, type: 'BADGE', badgeKey: MasterArtisan.key },
    { key: Craftsman.key, type: 'BADGE', badgeKey: Craftsman.key },
    { key: MasterCraftsman.key, type: 'BADGE', badgeKey: MasterCraftsman.key },
    { key: Declining.key, type: 'BADGE', badgeKey: Declining.key },
    { key: Decaying.key, type: 'BADGE', badgeKey: Decaying.key },
    { key: Despoiler.key, type: 'BADGE', badgeKey: Despoiler.key },
    { key: Dismantler.key, type: 'BADGE', badgeKey: Dismantler.key },
    { key: Medicator.key, type: 'BADGE', badgeKey: Medicator.key },
    { key: Mender.key, type: 'BADGE', badgeKey: Mender.key },
    { key: Rebuilder.key, type: 'BADGE', badgeKey: Rebuilder.key },
    { key: Revivifier.key, type: 'BADGE', badgeKey: Revivifier.key },
    { key: Armorer.key, type: 'BADGE', badgeKey: Armorer.key },
    { key: Guardian.key, type: 'BADGE', badgeKey: Guardian.key },
    { key: Protector.key, type: 'BADGE', badgeKey: Protector.key },
    { key: Security.key, type: 'BADGE', badgeKey: Security.key },
    { key: Blinding.key, type: 'BADGE', badgeKey: Blinding.key },
    { key: Beguiler.key, type: 'BADGE', badgeKey: Beguiler.key },
    { key: Charming.key, type: 'BADGE', badgeKey: Charming.key },
    { key: Charismatic.key, type: 'BADGE', badgeKey: Charismatic.key },
    { key: EnergyConservationist.key, type: 'BADGE', badgeKey: EnergyConservationist.key },
    { key: BatteryPowered.key, type: 'BADGE', badgeKey: BatteryPowered.key },
    { key: NuclearPowered.key, type: 'BADGE', badgeKey: NuclearPowered.key },
    { key: MysticallyPowered.key, type: 'BADGE', badgeKey: MysticallyPowered.key },
    { key: TriggerMan.key, type: 'BADGE', badgeKey: TriggerMan.key },
    { key: HiredGun.key, type: 'BADGE', badgeKey: HiredGun.key },
    { key: HitMan.key, type: 'BADGE', badgeKey: HitMan.key },
    { key: Sniper.key, type: 'BADGE', badgeKey: Sniper.key },
    { key: Major.key, type: 'BADGE', badgeKey: Major.key },
    { key: LtColonel.key, type: 'BADGE', badgeKey: LtColonel.key },
    { key: Colonel.key, type: 'BADGE', badgeKey: Colonel.key },
    { key: MajorGeneral.key, type: 'BADGE', badgeKey: MajorGeneral.key },
    { key: Munitionist.key, type: 'BADGE', badgeKey: Munitionist.key },
    { key: Weaponeer.key, type: 'BADGE', badgeKey: Weaponeer.key },
    { key: Warhead.key, type: 'BADGE', badgeKey: Warhead.key },
    { key: ArmsDealer.key, type: 'BADGE', badgeKey: ArmsDealer.key },
    { key: Pilgrim.key, type: 'BADGE', badgeKey: Pilgrim.key },
    { key: Vagabond.key, type: 'BADGE', badgeKey: Vagabond.key },
    { key: Wanderer.key, type: 'BADGE', badgeKey: Wanderer.key },
    { key: WalksTheEarth.key, type: 'BADGE', badgeKey: WalksTheEarth.key },
  ]],
}
