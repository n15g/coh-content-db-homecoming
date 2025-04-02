import { BadgeData, contactLink } from 'coh-content-db'
import { EfficiencyExpertPither } from '../../contact/efficiency-expert-pither'

export const EfficiencyExpert: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'efficiency-expert',
  setTitle: { id: 346 },
  name: 'Efficiency Expert',
  alignment: ['V'],
  badgeText: `You have proven yourself efficient by succeeding at all of Mr. Pither's timed tasks.`,
  acquisition: `Complete all of ${contactLink(EfficiencyExpertPither)}'s timed missions successfully.`,
  notes: 'NOTE: This badge is not available as part of the Flashback system; However, you can earn credit towards it by doing missions with another character who has Pither as a contact, so it is not permanently missable.',
  links: [
    { title: 'Efficiency Expert Badge', href: 'https://homecoming.wiki/wiki/Efficiency_Expert_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-9.png',
  requirements: [
    { key: 'steal-formula-from-crey', type: 'MISSION', missionName: '(15 min) Steal Formula From Crey', contactKey: EfficiencyExpertPither.key },
    { key: 'kick-longbow-out-of-base', type: 'MISSION', missionName: '(30 min) Kick Longbow Out of Base', contactKey: EfficiencyExpertPither.key },
    { key: 'get-info-about-malta-group', type: 'MISSION', missionName: '(30 min) Get Info About Malta Group', contactKey: EfficiencyExpertPither.key },
    { key: 'kidnap-diocletian', type: 'MISSION', missionName: '(30 min) Kidnap Diocletian', contactKey: EfficiencyExpertPither.key },
    { key: 'beat-some-sense-into-fortunata-iverson', type: 'MISSION', missionName: '(30 min) Beat Some Sense Into Fortunata Iverson', contactKey: EfficiencyExpertPither.key },
  ],
}
