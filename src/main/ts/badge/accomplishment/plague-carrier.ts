import { BadgeData } from 'coh-content-db'
import { StealOutbreakDrugFromTheLostAndThenTakeItToTheDropOffPoint } from '../../mission/steal-outbreak-drug-from-the-lost-and-then-take-it-to-the-drop-off-point'

export const PlagueCarrier: BadgeData = {
  type: 'accomplishment',
  key: 'plague-carrier',
  setTitleId: [332],
  name: 'Plague Carrier',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'The radio told you to steal the Outbreak virus and bring it back to Port Oakes.',
  links: [
    { title: 'Plague Carrier Badge', href: 'https://homecoming.wiki/wiki/Plague_Carrier_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-2.png',
  requirements: [
    { key: StealOutbreakDrugFromTheLostAndThenTakeItToTheDropOffPoint.key, type: 'mission', missionKey: StealOutbreakDrugFromTheLostAndThenTakeItToTheDropOffPoint.key },
  ],
}
