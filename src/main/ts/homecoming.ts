import { ContentBundle } from 'coh-content-db'
import { ZONES } from './zone/_zones'
import { BADGES } from './badge/_badges'
import { CHANGELOG } from './changelog'
import { CONTACTS } from './contact/_contacts'
import { MISSIONS } from './mission/_missions'

export const HOMECOMING: ContentBundle = {
  name: 'Homecoming',
  description: 'City of Heroes: Homecoming',
  links: [
    { title: 'Forums', href: 'https://forums.homecomingservers.com/' },
  ],
  servers: ['Everlasting', 'Excelsior', 'Indomitable', 'Reunion', 'Torchbearer', 'Victory'],
  repository: 'https://github.com/n15g/coh-content-db-homecoming',
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
  changelog: CHANGELOG,
}
