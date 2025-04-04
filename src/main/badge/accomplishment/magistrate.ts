import { BadgeData } from 'coh-content-db'
import { PraetorWhite } from '../../contact/praetor-white'
import { ChiefInterrogatorWashington } from '../../contact/chief-interrogator-washington'
import { Cleopatra } from '../../contact/cleopatra'
import { InterrogatorKang } from '../../contact/interrogator-kang'
import { AlecParson } from '../../contact/alec-parson'
import { InvestigatorWhitworth } from '../../contact/investigator-whitworth'
import { ChanceMcKnight } from '../../contact/chance-mcknight'
import { IVy } from '../../contact/ivy'
import { MotherMayhem } from '../../contact/mother-mayhem'
import { AntiMatter } from '../../contact/anti-matter'

export const Magistrate: BadgeData = {
  type: 'accomplishment',
  key: 'magistrate',
  setTitleId: [2345],
  name: 'Magistrate',
  morality: 'all',
  badgeText: `You assisted the Praetorian Loyalists to enforce the law for the peace and safety of everyone in Praetoria.`,
  acquisition: 'Complete every story arc in the Praetorian [Responsibility Storyline](https://homecoming.wiki/wiki/Responsibility_Storyline).',
  links: [
    { title: 'Magistrate Badge', href: 'https://homecoming.wiki/wiki/Magistrate_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_loyal.png',
  requirements: [
    { key: 'joining-the-pack', type: 'ARC', missionName: 'Joining the Pack', contactKey: PraetorWhite.key },
    { key: 'hit-list', type: 'ARC', missionName: 'Hit List', contactKey: ChiefInterrogatorWashington.key },
    { key: 'organized-crusaders', type: 'ARC', missionName: 'Organized Crusaders', contactKey: Cleopatra.key },
    { key: 'no-mans-lady', type: 'ARC', missionName: `No Man's Lady`, contactKey: Cleopatra.key },
    { key: 'sacrifices-must-be-made', type: 'ARC', missionName: 'Sacrifices Must Be Made', contactKey: InterrogatorKang.key },
    { key: 'clock-face', type: 'ARC', missionName: 'Clock Face', contactKey: AlecParson.key },
    { key: 'the-trash-collectors', type: 'ARC', missionName: 'The Trash Collectors', contactKey: InvestigatorWhitworth.key },
    { key: 'corp-wars', type: 'ARC', missionName: 'Corp Wars', contactKey: ChanceMcKnight.key },
    { key: 'one-weakness', type: 'ARC', missionName: 'One Weakness', contactKey: ChanceMcKnight.key },
    { key: 'the-old-robot-the-new-body', type: 'ARC', missionName: 'The Old Robot, the New Body', contactKey: IVy.key },
    { key: 'the-woman-named-devore', type: 'ARC', missionName: 'The Woman Named DeVore', contactKey: MotherMayhem.key },
    { key: 'view-from-the-other-side', type: 'ARC', missionName: 'View from the Other Side', contactKey: AntiMatter.key },
    { key: 'no-survivors', type: 'ARC', missionName: 'No Survivors', contactKey: AntiMatter.key },
  ],
}
