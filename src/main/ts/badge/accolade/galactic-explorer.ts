import { BadgeData } from 'coh-content-db'
import { BirdWatcher } from '../exploration/bird-watcher'
import { BlueShield } from '../exploration/blue-shield'
import { Brawler } from '../exploration/brawler'
import { Tank } from '../exploration/tank'
import { LandLocked } from '../exploration/land-locked'
import { GalacticFan } from '../exploration/galactic-fan'
import { EyeOfTheGemini } from '../exploration/eye-of-the-gemini'
import { OrionsBelt } from '../exploration/orions-belt'

export const GalacticExplorer: BadgeData = {
  type: 'accolade',
  key: 'galactic-explorer',
  setTitleId: [1525],
  name: 'Galactic Explorer',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Galaxy City.`,
  links: [
    { title: 'Galactic Explorer Badge', href: 'https://homecoming.wiki/wiki/Galactic_Explorer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: BirdWatcher.key, type: 'badge', badgeKey: BirdWatcher.key },
    { key: BlueShield.key, type: 'badge', badgeKey: BlueShield.key },
    { key: Brawler.key, type: 'badge', badgeKey: Brawler.key },
    { key: Tank.key, type: 'badge', badgeKey: Tank.key },
    { key: LandLocked.key, type: 'badge', badgeKey: LandLocked.key },
    { key: GalacticFan.key, type: 'badge', badgeKey: GalacticFan.key },
    { key: EyeOfTheGemini.key, type: 'badge', badgeKey: EyeOfTheGemini.key },
    { key: OrionsBelt.key, type: 'badge', badgeKey: OrionsBelt.key },
  ],
}
