import { BadgeData } from 'coh-content-db'
import { Ricochet } from '../../contact/ricochet'
import { Splice } from '../../contact/splice'
import { JackHammer } from '../../contact/jack-hammer'
import { DeputyAssistantOfInformation } from '../../contact/deputy-assistant-of-information'
import { Warrant } from '../../contact/warrant'
import { Reese } from '../../contact/reese'
import { RobertFlores } from '../../contact/robert-flores'
import { TunnelRat } from '../../contact/tunnel-rat'
import { DoctorArvin } from '../../contact/doctor-arvin'
import { ChiefInterrogatorWashington } from '../../contact/chief-interrogator-washington'
import { Cleopatra } from '../../contact/cleopatra'

export const AgentOfPraetoria: BadgeData = {
  type: 'ACCOLADE',
  key: 'agent-of-praetoria',
  setTitle: { id: 2350 },
  name: [
    { value: 'Agent of Praetoria' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You stand on the fragile tipping point between Order and Chaos. Which way will you go?` },
  ],
  effect: 'Awards 20 reward merits.',
  links: [
    { title: 'Agent of Praetoria Badge', href: 'https://homecoming.wiki/wiki/Agent_of_Praetoria_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-v.png' },
  ],
  requirements: [
    [
      { key: 'justifying-the-means', type: 'ARC', missionName: '(Resistance Crusader) Justifying the Means', contactKey: Ricochet.key },
      { key: 'insert-paranoia-here', type: 'ARC', missionName: '(Resistance Crusader) Insert Paranoia Here', contactKey: Splice.key },
      { key: 'i-destroy-therefore-i-am', type: 'ARC', missionName: '(Resistance Crusader) I Destroy, Therefore I Am!', contactKey: JackHammer.key },
      { key: 'destroy-or-not-destroy-that-is-the-question', type: 'ARC', missionName: '(Resistance Crusader) "Destroy or Not Destroy, That is the Question"', contactKey: JackHammer.key },
      { key: 'shrewd-lessons', type: 'ARC', missionName: '(Loyalist Power) Shrewd Lessons', contactKey: DeputyAssistantOfInformation.key },
      { key: 'guns-and-money', type: 'ARC', missionName: '(Loyalist Power) Guns and Money', contactKey: Warrant.key },
      { key: 'rise-to-power', type: 'ARC', missionName: '(Loyalist Power) Rise to Power', contactKey: Reese.key },
      { key: 'the-strong-survive', type: 'ARC', missionName: '(Loyalist Power) The Strong Survive', contactKey: Reese.key },
      { key: 'misinformation', type: 'ARC', missionName: '(Resistance Warden) Misinformation', contactKey: RobertFlores.key },
      { key: 'getting-out-alive', type: 'ARC', missionName: '(Resistance Warden) Getting Out Alive', contactKey: TunnelRat.key },
      { key: 'fixing-fixadine', type: 'ARC', missionName: '(Resistance Warden) Fixing Fixadine', contactKey: DoctorArvin.key },
      { key: 'rage-quit', type: 'ARC', missionName: '(Resistance Warden) Rage Quit', contactKey: DoctorArvin.key },
      { key: 'hit-list', type: 'ARC', missionName: '(Loyalist Responsibility) Hit List', contactKey: ChiefInterrogatorWashington.key },
      { key: 'organized-crusaders', type: 'ARC', missionName: '(Loyalist Responsibility) Organized Crusaders', contactKey: Cleopatra.key },
      { key: 'no-mans-lady', type: 'ARC', missionName: `(Loyalist Responsibility) No Man's Lady`, contactKey: Cleopatra.key },
    ],
  ],
}
