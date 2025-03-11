import { BadgeData } from 'coh-content-db'
import { StrigaIsle } from '../../map/striga-isle'
import { SeaDog } from '../exploration/sea-dog'
import { SuperSpy } from '../exploration/super-spy'
import { TheUnnamed } from '../exploration/the-unnamed'
import { TheWolfsSnarl } from '../exploration/the-wolfs-snarl'
import { TheWolfsMaw } from '../exploration/the-wolfs-maw'
import { VampyriWatcher } from '../exploration/vampyri-watcher'
import { Vulcanologist } from '../exploration/vulcanologist'
import { WordsOfTheWarrior } from '../exploration/words-of-the-warrior'

export const StraightThroughStriga: BadgeData = {
  type: 'ACCOLADE',
  key: 'straight-through-striga',
  setTitle: { id: 1879 },
  name: [
    { value: 'Straight Through Striga' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Striga Isle.` },
  ],
  notes: `Visit all exploration badges in [map:${StrigaIsle.key}]`,
  links: [
    { title: 'Straight Through Striga Badge', href: 'https://homecoming.wiki/wiki/Straight_Through_Striga_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png' },
  ],
  partials: [
    { key: SeaDog.key, type: 'BADGE', badgeKey: SeaDog.key },
    { key: SuperSpy.key, type: 'BADGE', badgeKey: SuperSpy.key },
    { key: TheUnnamed.key, type: 'BADGE', badgeKey: TheUnnamed.key },
    { key: TheWolfsSnarl.key, type: 'BADGE', badgeKey: TheWolfsSnarl.key },
    { key: TheWolfsMaw.key, type: 'BADGE', badgeKey: TheWolfsMaw.key },
    { key: VampyriWatcher.key, type: 'BADGE', badgeKey: VampyriWatcher.key },
    { key: Vulcanologist.key, type: 'BADGE', badgeKey: Vulcanologist.key },
    { key: WordsOfTheWarrior.key, type: 'BADGE', badgeKey: WordsOfTheWarrior.key },
  ],
}
