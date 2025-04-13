import { BadgeData, zoneLink } from 'coh-content-db'
import { Faultline } from '../../zone/faultline'
import { TheRumblingsOfThePast } from '../../mission/the-rumblings-of-the-past'
import { ILostMyDaddy } from '../../mission/i-lost-my-daddy'
import { TheBuriedPast } from '../../mission/the-buried-past'
import { AFaultlineInTheSandsOfTime } from '../../mission/a-faultline-in-the-sands-of-time'

export const Aftershock: BadgeData = {
  type: 'accolade',
  key: 'aftershock',
  setTitleId: [2373],
  name: 'Aftershock',
  morality: 'all',
  badgeText: `You've obtained this accolade by completing every story arc within Faultline.`,
  acquisition: `Complete every story arc within ${zoneLink(Faultline)}.`,
  links: [
    { title: 'Aftershock Badge', href: 'https://homecoming.wiki/wiki/Aftershock_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png',
  requirements: [
    { key: TheRumblingsOfThePast.key, type: 'mission', missionKey: TheRumblingsOfThePast.key },
    { key: ILostMyDaddy.key, type: 'mission', missionKey: ILostMyDaddy.key },
    { key: TheBuriedPast.key, type: 'mission', missionKey: TheBuriedPast.key },
    { key: AFaultlineInTheSandsOfTime.key, type: 'mission', missionKey: AFaultlineInTheSandsOfTime.key },
  ],
}
