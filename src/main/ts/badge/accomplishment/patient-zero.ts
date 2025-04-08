import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { DocBuzzsaw } from '../../contact/doc-buzzsaw'

export const PatientZero: BadgeData = {
  type: 'accomplishment',
  key: 'patient-zero',
  setTitleId: [2439],
  name: 'Patient Zero',
  morality: 'villainous',
  badgeText: `Doc Buzzsaw bit off more she could chew when she called out for help against Cortex, leading you into a whole new world of mad science and pushing fringe
 Freakshow members and desperate terminal Eidolons to evolve beyond their humanity as conscripts in a new cybertech army. Piecemeal owes their existence to you.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "The Freakish Lab of Dr. Vahzilok" entry with number 27.02 and 27.03 in the 35-39 level range.`,
  links: [
    { title: 'Patient Zero Badge', href: 'https://homecoming.wiki/wiki/Patient_Zero_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/patient-zero.png',
  requirements: [
    { key: 'tflodv', type: 'ARC', missionName: 'The Freakish Lab of Dr. Vahzilok', contactKey: DocBuzzsaw.key },
  ],
}
