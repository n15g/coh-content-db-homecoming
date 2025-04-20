import { BadgeData } from 'coh-content-db'
import { TheFreakishLabOfDrVahzilokAct2 } from '../../mission/the-freakish-lab-of-dr-vahzilok-act-2'

export const PatientZero: BadgeData = {
  type: 'accomplishment',
  key: 'patient-zero',
  setTitleId: [2439],
  name: 'Patient Zero',
  releaseDate: '2020-11-26',
  morality: 'villainous',
  badgeText: `Doc Buzzsaw bit off more she could chew when she called out for help against Cortex, leading you into a whole new world of mad science and pushing fringe
 Freakshow members and desperate terminal Eidolons to evolve beyond their humanity as conscripts in a new cybertech army. Piecemeal owes their existence to you.`,
  links: [
    { title: 'Patient Zero Badge', href: 'https://homecoming.wiki/wiki/Patient_Zero_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/patient-zero.png',
  requirements: [
    { key: TheFreakishLabOfDrVahzilokAct2.key, type: 'mission', missionKey: TheFreakishLabOfDrVahzilokAct2.key },
  ],
}
