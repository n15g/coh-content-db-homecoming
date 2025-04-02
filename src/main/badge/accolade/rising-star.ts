import { BadgeData } from 'coh-content-db'
import { Seer1381 } from '../../contact/seer-1381'
import { JessicaFlores } from '../../contact/jessica-flores'
import { LukeLarson } from '../../contact/luke-larson'
import { DoctorSteffard } from '../../contact/doctor-steffard'
import { MrG } from '../../contact/mr-g'
import { Transmuter } from '../../contact/transmuter'
import { TamiBaker } from '../../contact/tami-baker'
import { PraetorSinclair } from '../../contact/praetor-sinclair'
import { InterrogatorKang } from '../../contact/interrogator-kang'
import { InvestigatorWhitworth } from '../../contact/investigator-whitworth'
import { ChanceMcKnight } from '../../contact/chance-mcknight'
import { Bobcat } from '../../contact/bobcat'

export const RisingStar: BadgeData = {
  type: 'ACCOLADE',
  key: 'rising-star',
  setTitle: { id: 2342 },
  name: 'Rising Star',
  alignment: ['H', 'V', 'P'],
  badgeText: `You've obtained this accolade by completing every story arc within Imperial City.`,
  effect: `Awards 20 reward merits.`,
  links: [
    { title: 'Rising Star Badge', href: 'https://homecoming.wiki/wiki/Rising_Star_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-v.png' },
  ],
  requirements: [
    { key: 'the-truth-hurts', type: 'ARC', missionName: `(Resistance Warden) The Truth Hurts`, contactKey: JessicaFlores.key },
    { key: 'who-needs-enemies', type: 'ARC', missionName: `(Resistance Warden) Who Needs Enemies?`, contactKey: LukeLarson.key },
    { key: 'self-restraint', type: 'ARC', missionName: `(Resistance Warden) Self Restraint`, contactKey: DoctorSteffard.key },
    { key: 'you-cant-go-home', type: 'ARC', missionName: `(Resistance Warden) You Can't Go Home`, contactKey: Seer1381.key },
    { key: 'mind-freedom', type: 'ARC', missionName: `(Resistance Warden) Mind Freedom`, contactKey: Seer1381.key },
    { key: 'personal-monster', type: 'ARC', missionName: `(Loyalist Power) Personal Monster`, contactKey: MrG.key },
    { key: 'letting-go', type: 'ARC', missionName: `(Loyalist Power) Letting Go`, contactKey: Transmuter.key },
    { key: 'destroying-the-destroyers', type: 'ARC', missionName: `(Loyalist Power) Destroying the Destroyers`, contactKey: TamiBaker.key },
    { key: 'the-power-to-control', type: 'ARC', missionName: `(Loyalist Power) The Power to Control`, contactKey: PraetorSinclair.key },
    { key: 'sacrifices-must-be-made', type: 'ARC', missionName: `(Loyalist Responsibility) Sacrifices Must Be Made`, contactKey: InterrogatorKang.key },
    { key: 'the-trash-collectors', type: 'ARC', missionName: `(Loyalist Responsibility) The Trash Collectors`, contactKey: InvestigatorWhitworth.key },
    { key: 'corp-wars', type: 'ARC', missionName: `(Loyalist Responsibility) Corp Wars`, contactKey: ChanceMcKnight.key },
    { key: 'one-weakness', type: 'ARC', missionName: `(Loyalist Responsibility) One Weakness`, contactKey: ChanceMcKnight.key },
    { key: 'best-friends-forever', type: 'ARC', missionName: `(Loyalist Power) Best Friends Forever`, contactKey: Bobcat.key },
  ],
}
