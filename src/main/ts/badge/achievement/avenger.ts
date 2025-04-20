import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { ShaunaBraun } from '../../contact/shauna-braun'
import { Ouroboros } from '../../zone/ouroboros'

export const Avenger: BadgeData = {
  type: 'achievement',
  key: 'avenger',
  setTitleId: [2407],
  name: 'Avenger',
  releaseDate: '2019-06-01',
  morality: 'heroic',
  badgeText: 'When the law fails to serve us, we must serve as the law.',
  acquisition: `Kill Rider in the story arc 'Dirty Work' from ${contactLink(ShaunaBraun)}.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a vigilante can select the "Dirty Work" entry with number 26.01 at level 25-29.`,
  links: [
    { title: 'Avenger Badge', href: 'https://homecoming.wiki/wiki/Avenger_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/avenger.png',
}
