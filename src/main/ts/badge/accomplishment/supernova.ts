import { BadgeData } from 'coh-content-db'
import { TheShiningStarsWithFriendsLikeThese } from '../../mission/the-shining-stars-with-friends-like-these'

export const Supernova: BadgeData = {
  type: 'accomplishment',
  key: 'supernova',
  setTitleId: [2016],
  name: 'Supernova',
  morality: 'heroic',
  badgeText: 'The Shining Stars have stopped a Praetorian plot to destroy Paragon, but at great cost.',
  links: [
    { title: 'Supernova Badge', href: 'https://homecoming.wiki/wiki/Supernova_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/supernova.png',
  requirements: [
    { key: TheShiningStarsWithFriendsLikeThese.key, type: 'mission', missionKey: TheShiningStarsWithFriendsLikeThese.key },
  ],
}
