import { BadgeData } from 'coh-content-db'
import { TheClockworkKingsPsychicSignal } from '../../mission/the-clockwork-kings-psychic-signal'

export const Emancipator: BadgeData = {
  type: 'accomplishment',
  key: 'emancipator',
  setTitleId: [82],
  name: 'Emancipator',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You have defeated the Clockwork King in an alternate dimension where he realized his true potential.',
  links: [
    { title: 'Emancipator Badge', href: 'https://homecoming.wiki/wiki/Emancipator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/emancipator.png',
  requirements: [
    { key: TheClockworkKingsPsychicSignal.key, type: 'mission', missionKey: TheClockworkKingsPsychicSignal.key },
  ],
}
