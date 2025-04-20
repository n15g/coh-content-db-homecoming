import { BadgeData } from 'coh-content-db'
import { SeeWhatCrashWants } from '../../mission/see-what-crash-wants'

export const SlagReaper: BadgeData = {
  type: 'accomplishment',
  key: 'slag-reaper',
  setTitleId: [337],
  name: 'Slag Reaper',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'The weird coral of Sharkhead Isle is said to have mystical properties.',
  links: [
    { title: 'Slag Reaper Badge', href: 'https://homecoming.wiki/wiki/Slag_Reaper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-4.png',
  requirements: [
    { key: SeeWhatCrashWants.key, type: 'mission', missionKey: SeeWhatCrashWants.key },
  ],
}
