import { BadgeData } from 'coh-content-db'

export const MoralHighGround: BadgeData = {
  type: 'accomplishment',
  key: 'moral-high-ground',
  setTitleId: [1423],
  name: 'Moral High Ground',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've decided to ally yourself with either the Praetorian Resistance or the Praetorian Loyalists on five separate occasions. Regardless of where your true morals lie, you've proven willing to defend your positions.`,
  acquisition: `Choose 'Loyalist' or 'Resistance' morality five times.`,
  links: [
    { title: 'Moral High Ground Badge', href: 'https://homecoming.wiki/wiki/Moral_High_Ground_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/moral-high-ground.png',
}
