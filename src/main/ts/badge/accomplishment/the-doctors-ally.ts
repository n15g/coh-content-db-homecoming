import { BadgeData } from 'coh-content-db'
import { InvestigateTheHackerKnownAsTheDoctor } from '../../mission/investigate-the-hacker-known-as-the-doctor'

export const TheDoctorsAlly: BadgeData = {
  type: 'accomplishment',
  key: 'the-doctors-ally',
  setTitleId: [80],
  name: `The Doctor's Ally`,
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You have uncovered the fate of Doctor Friedkin.',
  links: [
    { title: `The Doctor's Ally Badge`, href: 'https://homecoming.wiki/wiki/The_Doctor%27s_Ally_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-doctors-ally.png',
  requirements: [
    { key: InvestigateTheHackerKnownAsTheDoctor.key, type: 'mission', missionKey: InvestigateTheHackerKnownAsTheDoctor.key },
  ],
}
