import { BundleData } from 'coh-content-db'
import { ZONES } from './zone/_zones'
import { BADGES } from './badge/_badges'
import { CONTACTS } from './contact/_contacts'
import { MISSIONS } from './mission/_missions'
import { BUNDLE_UPDATE_TIME, BUNDLE_VERSION } from '../lint/utils/rollup-replace'

export const HOMECOMING: BundleData = {
  header: {
    name: 'Homecoming',
    version: BUNDLE_VERSION,
    lastUpdateTime: BUNDLE_UPDATE_TIME,
    description: 'Content data for the CoH: Homecoming server.',
    repositoryUrl: 'https://github.com/n15g/coh-content-db-homecoming',
    changelogUrl: 'https://github.com/n15g/coh-content-db-homecoming/blob/master/CHANGELOG.md',
    links: [
      { title: 'Homecoming Forums', href: 'https://forums.homecomingservers.com/' },
    ],
  },
  servers: ['Everlasting', 'Excelsior', 'Indomitable', 'Reunion', 'Torchbearer', 'Victory'],
  archetypes: [
    { key: 'arachnos-soldier', name: 'Arachnos Soldier' },
    { key: 'arachnos-widow', name: 'Arachnos Widow' },
    { key: 'blaster', name: 'Blaster' },
    { key: 'brute', name: 'Brute' },
    { key: 'controller', name: 'Controller' },
    { key: 'corruptor', name: 'Corruptor' },
    { key: 'defender', name: 'Defender' },
    { key: 'dominator', name: 'Dominator' },
    { key: 'mastermind', name: 'Mastermind' },
    { key: 'peacebringer', name: 'Peacebringer' },
    { key: 'scrapper', name: 'Scrapper' },
    { key: 'sentinel', name: 'Sentinel' },
    { key: 'stalker', name: 'Stalker' },
    { key: 'tanker', name: 'Tanker' },
    { key: 'warshade', name: 'Warshade' },
  ],
  zones: [...ZONES],
  contacts: [...CONTACTS],
  missions: [...MISSIONS],
  badges: [...BADGES],
}
