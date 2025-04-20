import { BadgeData } from 'coh-content-db'
import { NothingPersonalJustBusiness } from '../../mission/nothing-personal-just-business'

export const YouShouldSeeTheOtherGuy: BadgeData = {
  type: 'accomplishment',
  key: 'you-should-see-the-other-guy',
  setTitleId: [2317],
  name: 'You should see the other guy.',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You played Deadlock's personal story and learned a little bit about the man who put Back Alley Brawler in the hospital.`,
  links: [
    { title: 'You should see the other guy. Badge', href: 'https://homecoming.wiki/wiki/You_should_see_the_other_guy_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-parc.png',
  requirements: [
    { key: NothingPersonalJustBusiness.key, type: 'mission', missionKey: NothingPersonalJustBusiness.key },
  ],
}
