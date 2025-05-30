import { BadgeData } from 'coh-content-db'
import { PositronTaskForcePartTwo } from '../../mission/positron-task-force-part-two'
import { PositronTaskForcePartOne } from '../../mission/positron-task-force-part-one'

export const PositronsAlly: BadgeData = {
  type: 'accomplishment',
  key: 'positrons-ally',
  setTitleId: [61],
  name: [
    { alignment: 'hero', value: `Positron's Ally` },
    { alignment: 'villain', value: `Positron's Betrayer` },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'Positron has awarded you this medal in recognition of services performed for him.' },
    { alignment: 'villain', value: `Positron himself once awarded this medal to you. Nowadays he'd probably arrest you.` },
  ],
  acquisition: 'Complete both parts of the Positron Task Force: The Rule of Three.',
  links: [
    { title: `Positron's Ally Badge`, href: 'https://homecoming.wiki/wiki/Positron%27s_Ally_Badge' },
    { title: `Positron's Betrayer Badge`, href: 'https://homecoming.wiki/wiki/Positron%27s_Betrayer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/positrons-ally.png',
  requirements: [
    { key: PositronTaskForcePartOne.key, type: 'mission', missionKey: PositronTaskForcePartOne.key },
    { key: PositronTaskForcePartTwo.key, type: 'mission', missionKey: PositronTaskForcePartTwo.key },
  ],
}
