import { BadgeData, zoneLink } from 'coh-content-db'
import { TheSavageMan } from '../../mission/the-savage-man'
import { MyBestFriendRusty } from '../../mission/my-best-friend-rusty'
import { APromiseForANewTomorrow } from '../../mission/a-promise-for-a-new-tomorrow'
import { ToOurHealth } from '../../mission/to-our-health'
import { ForTheTaking } from '../../mission/for-the-taking'
import { AGodAmongstMen } from '../../mission/a-god-amongst-men'
import { PrideInYourWork } from '../../mission/pride-in-your-work'
import { TheOldRobotTheNewBody } from '../../mission/the-old-robot-the-new-body'
import { TheWomanNamedDeVore } from '../../mission/the-woman-named-devore'
import { ViewFromTheOtherSide } from '../../mission/view-from-the-other-side'
import { NoSurvivors } from '../../mission/no-survivors'
import { Neutropolis } from '../../zone/neutropolis'

export const TrueToTheLast: BadgeData = {
  type: 'accolade',
  key: 'true-to-the-last',
  setTitleId: [2351],
  name: 'True to the Last',
  morality: 'all',
  badgeText: `Wherever you must go, whatever you must do, Praetoria will always & forever be your home, and to it you shall be True to the Last.`,
  acquisition: `Complete every story arc within ${zoneLink(Neutropolis)}.`,
  links: [
    { title: 'True to the Last Badge', href: 'https://homecoming.wiki/wiki/True_to_the_Last_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-v.png' },
  ],
  requirements: [
    { key: TheSavageMan.key, type: 'mission', missionKey: TheSavageMan.key },
    { key: MyBestFriendRusty.key, type: 'mission', missionKey: MyBestFriendRusty.key },
    { key: APromiseForANewTomorrow.key, type: 'mission', missionKey: APromiseForANewTomorrow.key },
    { key: ToOurHealth.key, type: 'mission', missionKey: ToOurHealth.key },
    { key: ForTheTaking.key, type: 'mission', missionKey: ForTheTaking.key },
    { key: AGodAmongstMen.key, type: 'mission', missionKey: AGodAmongstMen.key },
    { key: PrideInYourWork.key, type: 'mission', missionKey: PrideInYourWork.key },
    { key: TheOldRobotTheNewBody.key, type: 'mission', missionKey: TheOldRobotTheNewBody.key },
    { key: TheWomanNamedDeVore.key, type: 'mission', missionKey: TheWomanNamedDeVore.key },
    { key: ViewFromTheOtherSide.key, type: 'mission', missionKey: ViewFromTheOtherSide.key },
    { key: NoSurvivors.key, type: 'mission', missionKey: NoSurvivors.key },
  ],
}
