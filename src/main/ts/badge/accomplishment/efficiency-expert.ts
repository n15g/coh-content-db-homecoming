import { BadgeData, contactLink } from 'coh-content-db'
import { EfficiencyExpertPither } from '../../contact/efficiency-expert-pither'
import { StealFormulaFromCrey } from '../../mission/steal-formula-from-crey'
import { KickLongbowOutOfBase } from '../../mission/kick-longbow-out-of-base'
import { GetInfoAboutMaltaGroup } from '../../mission/get-info-about-malta-group'
import { KidnapDiocletian } from '../../mission/kidnap-diocletian'
import { BeatSomeSenseIntoFortunataIverson } from '../../mission/beat-some-sense-into-fortunata-iverson'

export const EfficiencyExpert: BadgeData = {
  type: 'accomplishment',
  key: 'efficiency-expert',
  setTitleId: [346],
  name: 'Efficiency Expert',
  morality: 'villainous',
  badgeText: `You have proven yourself efficient by succeeding at all of Mr. Pither's timed tasks.`,
  acquisition: `Complete all of ${contactLink(EfficiencyExpertPither)}'s timed missions within the time limit.`,
  notes: '**Note:** This badge is not available as part of the Flashback system; However, you can earn credit towards it by doing missions with another character who has Pither as a contact, so it is not permanently missable.',
  links: [
    { title: 'Efficiency Expert Badge', href: 'https://homecoming.wiki/wiki/Efficiency_Expert_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-9.png',
  requirements: [
    { key: StealFormulaFromCrey.key, type: 'mission', notes: '15 min', missionKey: StealFormulaFromCrey.key },
    { key: KickLongbowOutOfBase.key, type: 'mission', notes: '30 min', missionKey: KickLongbowOutOfBase.key },
    { key: GetInfoAboutMaltaGroup.key, type: 'mission', notes: '30 min', missionKey: GetInfoAboutMaltaGroup.key },
    { key: KidnapDiocletian.key, type: 'mission', notes: '30 min', missionKey: KidnapDiocletian.key },
    { key: BeatSomeSenseIntoFortunataIverson.key, type: 'mission', notes: '30 min', missionKey: BeatSomeSenseIntoFortunataIverson.key },
  ],
}
