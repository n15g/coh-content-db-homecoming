import { BadgeData } from 'coh-content-db'
import { MeMyselfAndMyOtherSelves } from '../../mission/me-myself-and-my-other-selves'

export const BaneOfAjax: BadgeData = {
  type: 'accomplishment',
  key: 'bane-of-ajax',
  setTitleId: [1585],
  name: 'Bane of Ajax',
  morality: 'villainous',
  badgeText: `You've proven to Ajax, and the world, that no one is truly invincible.`,
  links: [
    { title: 'Bane of Ajax Badge', href: 'https://homecoming.wiki/wiki/Bane_of_Ajax_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/bane-of-ajax.png',
  requirements: [
    { key: MeMyselfAndMyOtherSelves.key, type: 'mission', missionKey: MeMyselfAndMyOtherSelves.key },
  ],
}
