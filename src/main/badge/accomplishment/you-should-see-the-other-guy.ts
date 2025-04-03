import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { EagleEye } from '../../contact/eagle-eye'

export const YouShouldSeeTheOtherGuy: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'you-should-see-the-other-guy',
  setTitle: { id: 2317 },
  name: 'You should see the other guy.',
  alignment: ['H'],
  badgeText: `You played Deadlock's personal story and learned a little bit about the man who put Back Alley Brawler in the hospital.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Deadlock's Personal Story" entry with number 24.03 in the 15-19 level range.`,
  links: [
    { title: 'You should see the other guy. Badge', href: 'https://homecoming.wiki/wiki/You_should_see_the_other_guy_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-parc.png',
  requirements: [
    { key: 'np', type: 'MISSION', missionName: 'Nothing Personal, Just Business', contactKey: EagleEye.key },
  ],
}
