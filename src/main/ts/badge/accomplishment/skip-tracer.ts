import { BadgeData } from 'coh-content-db'
import { CatchTheFreakshowDebtorBeforeHeSkipsTown } from '../../mission/catch-the-freakshow-debtor-before-he-skips-town'

export const SkipTracer: BadgeData = {
  type: 'accomplishment',
  key: 'skip-tracer',
  setTitleId: [342],
  name: 'Skip Tracer',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'Nobody skips out on their debts to the Family. Not with you around.',
  links: [
    { title: 'Skip Tracer Badge', href: 'https://homecoming.wiki/wiki/Skip_Tracer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-7.png',
  requirements: [
    { key: CatchTheFreakshowDebtorBeforeHeSkipsTown.key, type: 'mission', missionKey: CatchTheFreakshowDebtorBeforeHeSkipsTown.key },
  ],
}
