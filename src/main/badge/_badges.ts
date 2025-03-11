import { BadgeData } from 'coh-content-db'
import { EXPLORATION_BADGES } from './exploration/_exploration-badges'
import { ACCOMPLISHMENT_BADGES } from './accomplishment/_accomplishment-badges'
import { HISTORY_BADGES } from './history/_history-badges'
import { ACHIEVEMENT_BADGES } from './achievement/_achievement-badges'
import { DEFEAT_BADGES } from './defeat/_defeat-badges'
import { ACCOLADE_BADGES } from './accolade/_accolade-badges'
import { GLADIATOR_BADGES } from './gladiator/_gladiator-badges'
import { VETERAN_BADGES } from './veteran/_veteran-badges'
import { PVP_BADGES } from './pvp/_pvp-badges'
import { INVENTION_BADGES } from './invention/_invention-badges'
import { EVENT_BADGES } from './event/_event-badges'
import { OUROBOROS_BADGES } from './ouroboros/_ouroboros-badges'
import { CONSIGNMENT_BADGES } from './consignment/_consignment-badges'
import { DAY_JOB_BADGES } from './day-job/_day-job-badges'
import { AE_BADGES } from './ae/_ae-badges'

export const BADGES: BadgeData[] = [
  ...EXPLORATION_BADGES,
  ...HISTORY_BADGES,
  ...ACCOMPLISHMENT_BADGES,
  ...ACHIEVEMENT_BADGES,
  ...ACCOLADE_BADGES,
  ...GLADIATOR_BADGES,
  ...VETERAN_BADGES,
  ...PVP_BADGES,
  ...INVENTION_BADGES,
  ...DEFEAT_BADGES,
  ...EVENT_BADGES,
  ...OUROBOROS_BADGES,
  ...CONSIGNMENT_BADGES,
  ...DAY_JOB_BADGES,
  ...AE_BADGES,
]
