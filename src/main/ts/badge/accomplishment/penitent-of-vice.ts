import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { TheresASuckerBornEveryMinute } from '../../mission/theres-a-sucker-born-every-minute'

export const PenitentOfVice: BadgeData = {
  type: 'accomplishment',
  key: 'penitent-of-vice',
  setTitleId: [334],
  name: [
    { alignment: 'hero', value: 'Penitent of Vice' },
    { alignment: 'villain', value: 'Paragon of Vice' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `Paragon City still remembers the black eye you gave it to impress Arachnos, and won't soon forget.` },
    { alignment: 'villain', value: 'You showed Arachnos how tough you were in Paragon City.' },
  ],
  acquisition: `Complete the "Defeat all Arachnos Personnel" mission in the ${missionLink(TheresASuckerBornEveryMinute)} story arc.`,
  links: [
    { title: 'Penitent of Vice Badge', href: 'https://homecoming.wiki/wiki/Penitent_of_Vice_Badge' },
    { title: 'Paragon of Vice Badge', href: 'https://homecoming.wiki/wiki/Paragon_of_Vice_Badge' },
    { title: TheresASuckerBornEveryMinute.name, href: missionUri(TheresASuckerBornEveryMinute) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-3.png',
}
