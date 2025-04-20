import { BadgeData } from 'coh-content-db'
import { FindOutWhereArachnosIsKeepingAphroditesGirdle } from '../../mission/find-out-where-arachnos-is-keeping-aphrodites-girdle'
import { GetAHeroToTheCauldronAndDestroyIt } from '../../mission/get-a-hero-to-the-cauldron-and-destroy-it'

export const Handsome: BadgeData = {
  type: 'event',
  key: 'handsome',
  setTitleId: [527],
  name: [
    { sex: 'M', value: 'Handsome' },
    { sex: 'F', value: 'Beautiful' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'Eros can bring out the beauty in any being',
  links: [
    { title: 'Handsome Badge', href: 'https://homecoming.wiki/wiki/Handsome_Badge' },
    { title: 'Beautiful Badge', href: 'https://homecoming.wiki/wiki/Beautiful_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/handsome.png',
  requirements: [
    { key: FindOutWhereArachnosIsKeepingAphroditesGirdle.key, type: 'mission', missionKey: FindOutWhereArachnosIsKeepingAphroditesGirdle.key },
    { key: GetAHeroToTheCauldronAndDestroyIt.key, type: 'mission', missionKey: GetAHeroToTheCauldronAndDestroyIt.key },
  ],
}
