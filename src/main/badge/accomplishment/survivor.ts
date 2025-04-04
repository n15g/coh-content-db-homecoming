import { BadgeData } from 'coh-content-db'
import { RobertFlores } from '../../contact/robert-flores'
import { TunnelRat } from '../../contact/tunnel-rat'
import { DoctorArvin } from '../../contact/doctor-arvin'
import { JessicaFlores } from '../../contact/jessica-flores'
import { LukeLarson } from '../../contact/luke-larson'
import { DoctorSteffard } from '../../contact/doctor-steffard'
import { Seer1381 } from '../../contact/seer-1381'
import { AaronWalker } from '../../contact/aaron-walker'
import { PenelopeYinPraetorian } from '../../contact/penelope-yin-praetorian'
import { DarkWatcher } from '../../contact/dark-watcher'

export const Survivor: BadgeData = {
  type: 'accomplishment',
  key: 'survivor',
  setTitleId: [2348],
  name: 'Survivor',
  morality: 'all',
  badgeText: `You helped the Praetorian Resistance to reach their goals with as little loss of life as possible.`,
  acquisition: 'Complete every story arc in the Praetorian [Warden Storyline](https://homecoming.wiki/wiki/Warden_Storyline).',
  links: [
    { title: 'Survivor Badge', href: 'https://homecoming.wiki/wiki/Survivor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_resist.png',
  requirements: [
    { key: 'mis', type: 'ARC', missionName: 'Misinformation', contactKey: RobertFlores.key },
    { key: 'goa', type: 'ARC', missionName: 'Getting Out Alive', contactKey: TunnelRat.key },
    { key: 'ff', type: 'ARC', missionName: 'Fixing Fixadine', contactKey: DoctorArvin.key },
    { key: 'rq', type: 'ARC', missionName: 'Rage Quit', contactKey: DoctorArvin.key },
    { key: 'tth', type: 'ARC', missionName: 'The Truth Hurts', contactKey: JessicaFlores.key },
    { key: 'wne', type: 'ARC', missionName: 'Who Needs Enemies?', contactKey: LukeLarson.key },
    { key: 'sr', type: 'ARC', missionName: 'Self Restraint', contactKey: DoctorSteffard.key },
    { key: 'ycgh', type: 'ARC', missionName: `You Can't Go Home`, contactKey: Seer1381.key },
    { key: 'mf', type: 'ARC', missionName: 'Mind Freedom', contactKey: Seer1381.key },
    { key: 'tsm', type: 'ARC', missionName: 'The Savage Man', contactKey: AaronWalker.key },
    { key: 'mbfr', type: 'ARC', missionName: 'My Best Friend, Rusty', contactKey: PenelopeYinPraetorian.key },
    { key: 'apfant', type: 'ARC', missionName: 'A Promise for a New Tomorrow', contactKey: DarkWatcher.key },
    { key: 'toh', type: 'ARC', missionName: 'To Our Health', contactKey: DarkWatcher.key },
  ],
}
