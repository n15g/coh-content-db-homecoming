import { BadgeData } from 'coh-content-db'

export const GiftGetter: BadgeData = {
  type: 'event',
  key: 'gift-getter',
  setTitleId: [2089],
  name: 'Gift Getter',
  morality: 'all',
  badgeText: `You've received a copy of the mysterious Duplicating Gift from another! Don't forget to pass it on!`,
  acquisition: `Receive a Duplicating Gift from another player when you don't already have one during the Winter event.`,
  links: [
    { title: 'Gift Getter Badge', href: 'https://homecoming.wiki/wiki/Gift_Getter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/gift-getter.png',
}
