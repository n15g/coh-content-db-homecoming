import { BadgeData } from 'coh-content-db'
import { JustifyingTheMeans } from '../../mission/justifying-the-means'
import { InsertParanoiaHere } from '../../mission/insert-paranoia-here'
import { IDestroyThereforeIAm } from '../../mission/i-destroy-therefore-i-am'
import { DestroyOrNotDestroyThatIsTheQuestion } from '../../mission/destroy-or-not-destroy-that-is-the-question'
import { NoRoomForHumanity } from '../../mission/no-room-for-humanity'
import { PowerOfTheMind } from '../../mission/power-of-the-mind'
import { ThePriceGoodMenMustPay } from '../../mission/the-price-good-men-must-pay'
import { ThoseWhoMakeHistory } from '../../mission/those-who-make-history'
import { BloodOfTyrants } from '../../mission/blood-of-tyrants'
import { HonorTheFallen } from '../../mission/honor-the-fallen'
import { TheSurge } from '../../mission/the-surge'
import { TheTurningPoint } from '../../mission/the-turning-point'
import { CollapsingSupport } from '../../mission/collapsing-support'

export const Obliterator: BadgeData = {
  type: 'accomplishment',
  key: 'obliterator',
  setTitleId: [2347],
  name: 'Obliterator',
  morality: 'all',
  badgeText: `You joined the Praetorian Resistance in their efforts to do whatever it takes to bring down Emperor Cole.`,
  acquisition: 'Complete every story arc in the Praetorian [Crusader Storyline](https://homecoming.wiki/wiki/Crusader_Storyline).',
  links: [
    { title: 'Obliterator Badge', href: 'https://homecoming.wiki/wiki/Obliterator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_resist.png',
  requirements: [
    { key: JustifyingTheMeans.key, type: 'mission', missionKey: JustifyingTheMeans.key },
    { key: InsertParanoiaHere.key, type: 'mission', missionKey: InsertParanoiaHere.key },
    { key: IDestroyThereforeIAm.key, type: 'mission', missionKey: IDestroyThereforeIAm.key },
    { key: DestroyOrNotDestroyThatIsTheQuestion.key, type: 'mission', missionKey: DestroyOrNotDestroyThatIsTheQuestion.key },
    { key: NoRoomForHumanity.key, type: 'mission', missionKey: NoRoomForHumanity.key },
    { key: PowerOfTheMind.key, type: 'mission', missionKey: PowerOfTheMind.key },
    { key: ThePriceGoodMenMustPay.key, type: 'mission', missionKey: ThePriceGoodMenMustPay.key },
    { key: ThoseWhoMakeHistory.key, type: 'mission', missionKey: ThoseWhoMakeHistory.key },
    { key: BloodOfTyrants.key, type: 'mission', missionKey: BloodOfTyrants.key },
    { key: HonorTheFallen.key, type: 'mission', missionKey: HonorTheFallen.key },
    { key: TheSurge.key, type: 'mission', missionKey: TheSurge.key },
    { key: TheTurningPoint.key, type: 'mission', missionKey: TheTurningPoint.key },
    { key: CollapsingSupport.key, type: 'mission', missionKey: CollapsingSupport.key },
  ],
}
