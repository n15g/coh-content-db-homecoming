import { BadgeData } from 'coh-content-db'
import { DeanMacArthur } from '../../contact/dean-macarthur'

export const BaneOfAjax: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'bane-of-ajax',
  setTitle: { id: 1585 },
  name: 'Bane of Ajax',
  alignment: ['V'],
  badgeText: `You've proven to Ajax, and the world, that no one is truly invincible.`,
  links: [
    { title: 'Bane of Ajax Badge', href: 'https://homecoming.wiki/wiki/Bane_of_Ajax_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/bane-of-ajax.png',
  requirements: [
    { key: 'dean-macarthur-story-arc', type: 'ARC', missionName: `Dean Macarthur's Story Arc`, contactKey: DeanMacArthur.key },
  ],
}
