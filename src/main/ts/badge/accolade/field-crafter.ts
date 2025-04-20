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
  type: 'accolade',
  key: 'field-crafter',
  setTitleId: [805],
  name: 'Field Crafter',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You are truly a crafting specialist, and can now summon a portable crafting station to your location for five minutes once an hour. All nearby characters can use this station.`,
  effect: `Awards the Portable Workbench power.`,
  links: [
    { title: 'Field Crafter Badge', href: 'https://homecoming.wiki/wiki/Field_Crafter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/field-crafter.png',
  requirements: [
    { key: Inventor.key, type: 'badge', badgeKey: Inventor.key },
    { key: Artisan.key, type: 'badge', badgeKey: Artisan.key },
    { key: MasterArtisan.key, type: 'badge', badgeKey: MasterArtisan.key },
    { key: Craftsman.key, type: 'badge', badgeKey: Craftsman.key },
    { key: MasterCraftsman.key, type: 'badge', badgeKey: MasterCraftsman.key },
    { key: Declining.key, type: 'badge', badgeKey: Declining.key },
    { key: Decaying.key, type: 'badge', badgeKey: Decaying.key },
    { key: Despoiler.key, type: 'badge', badgeKey: Despoiler.key },
    { key: Dismantler.key, type: 'badge', badgeKey: Dismantler.key },
    { key: Medicator.key, type: 'badge', badgeKey: Medicator.key },
    { key: Mender.key, type: 'badge', badgeKey: Mender.key },
    { key: Rebuilder.key, type: 'badge', badgeKey: Rebuilder.key },
    { key: Revivifier.key, type: 'badge', badgeKey: Revivifier.key },
    { key: Armorer.key, type: 'badge', badgeKey: Armorer.key },
    { key: Guardian.key, type: 'badge', badgeKey: Guardian.key },
    { key: Protector.key, type: 'badge', badgeKey: Protector.key },
    { key: Security.key, type: 'badge', badgeKey: Security.key },
    { key: Blinding.key, type: 'badge', badgeKey: Blinding.key },
    { key: Beguiler.key, type: 'badge', badgeKey: Beguiler.key },
    { key: Charming.key, type: 'badge', badgeKey: Charming.key },
    { key: Charismatic.key, type: 'badge', badgeKey: Charismatic.key },
    { key: EnergyConservationist.key, type: 'badge', badgeKey: EnergyConservationist.key },
    { key: BatteryPowered.key, type: 'badge', badgeKey: BatteryPowered.key },
    { key: NuclearPowered.key, type: 'badge', badgeKey: NuclearPowered.key },
    { key: MysticallyPowered.key, type: 'badge', badgeKey: MysticallyPowered.key },
    { key: TriggerMan.key, type: 'badge', badgeKey: TriggerMan.key },
    { key: HiredGun.key, type: 'badge', badgeKey: HiredGun.key },
    { key: HitMan.key, type: 'badge', badgeKey: HitMan.key },
    { key: Sniper.key, type: 'badge', badgeKey: Sniper.key },
    { key: Major.key, type: 'badge', badgeKey: Major.key },
    { key: LtColonel.key, type: 'badge', badgeKey: LtColonel.key },
    { key: Colonel.key, type: 'badge', badgeKey: Colonel.key },
    { key: MajorGeneral.key, type: 'badge', badgeKey: MajorGeneral.key },
    { key: Munitionist.key, type: 'badge', badgeKey: Munitionist.key },
    { key: Weaponeer.key, type: 'badge', badgeKey: Weaponeer.key },
    { key: Warhead.key, type: 'badge', badgeKey: Warhead.key },
    { key: ArmsDealer.key, type: 'badge', badgeKey: ArmsDealer.key },
    { key: Pilgrim.key, type: 'badge', badgeKey: Pilgrim.key },
    { key: Vagabond.key, type: 'badge', badgeKey: Vagabond.key },
    { key: Wanderer.key, type: 'badge', badgeKey: Wanderer.key },
    { key: WalksTheEarth.key, type: 'badge', badgeKey: WalksTheEarth.key },
  ],
}
