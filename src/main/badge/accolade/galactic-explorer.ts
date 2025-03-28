import { BadgeData, zoneLink } from 'coh-content-db'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'
import { BirdWatcher } from '../exploration/bird-watcher'
import { BlueShield } from '../exploration/blue-shield'
import { Brawler } from '../exploration/brawler'
import { Tank } from '../exploration/tank'
import { LandLocked } from '../exploration/land-locked'
import { GalacticFan } from '../exploration/galactic-fan'
import { EyeOfTheGemini } from '../exploration/eye-of-the-gemini'
import { OrionsBelt } from '../exploration/orions-belt'

export const GalacticExplorer: BadgeData = {
  type: 'ACCOLADE',
  key: 'galactic-explorer',
  setTitle: { id: 1525 },
  name: [
    { value: 'Galactic Explorer' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Galaxy City.` },
  ],
  notes: `Visit all exploration badges in ${zoneLink(EchoGalaxyCity)}`,
  links: [
    { title: 'Galactic Explorer Badge', href: 'https://homecoming.wiki/wiki/Galactic_Explorer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png' },
  ],
  requirements: [[
    { key: BirdWatcher.key, type: 'BADGE', badgeKey: BirdWatcher.key },
    { key: BlueShield.key, type: 'BADGE', badgeKey: BlueShield.key },
    { key: Brawler.key, type: 'BADGE', badgeKey: Brawler.key },
    { key: Tank.key, type: 'BADGE', badgeKey: Tank.key },
    { key: LandLocked.key, type: 'BADGE', badgeKey: LandLocked.key },
    { key: GalacticFan.key, type: 'BADGE', badgeKey: GalacticFan.key },
    { key: EyeOfTheGemini.key, type: 'BADGE', badgeKey: EyeOfTheGemini.key },
    { key: OrionsBelt.key, type: 'BADGE', badgeKey: OrionsBelt.key },
  ]],
}
