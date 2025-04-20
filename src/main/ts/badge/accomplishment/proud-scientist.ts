import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { UnavoidableFateAntiMatter } from '../../mission/unavoidable-fate-anti-matter'

export const ProudScientist: BadgeData = {
  type: 'accomplishment',
  key: 'proud-scientist',
  setTitleId: [2273],
  name: 'Proud Scientist',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You played Anti-Matter's personal story and witnessed his last moments.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero or villain can select the "Anti-Matter's Personal Story" entry with number 24.16 at level 50.`,
  links: [
    { title: 'Proud Scientist Badge', href: 'https://homecoming.wiki/wiki/Proud_Scientist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/proud-scientist.png',
  requirements: [
    { key: UnavoidableFateAntiMatter.key, type: 'mission', missionKey: UnavoidableFateAntiMatter.key },
  ],
}
