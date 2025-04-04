import { BadgeData } from 'coh-content-db'
import { Kalinda } from '../../contact/kalinda'
import { MatthewBurke } from '../../contact/matthew-burke'
import { Mongoose } from '../../contact/mongoose'
import { DoctorCreed } from '../../contact/doctor-creed'
import { OperativeKuzmin } from '../../contact/operative-kuzmin'
import { FireWire } from '../../contact/fire-wire'
import { DoctorWeber } from '../../contact/doctor-weber'
import { LtHarris } from '../../contact/lt-harris'
import { DrGraves } from '../../contact/dr-graves'
import { SeerMarino } from '../../contact/seer-marino'

export const AgentOfChaos: BadgeData = {
  type: 'accolade',
  key: 'agent-of-chaos',
  setTitleId: [2344],
  name: 'Agent of Chaos',
  morality: 'all',
  badgeText: `You've obtained this accolade by completing every story arc within Mercy Island.`,
  effect: 'Awards 20 reward merits.',
  links: [
    { title: 'Agent of Chaos Badge', href: 'https://homecoming.wiki/wiki/Agent_of_Chaos_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png',
  requirements: [
    { key: 'earning-arachnos-favor', type: 'ARC', missionName: `Earning Arachnos' Favor`, contactKey: Kalinda.key },
    { key: 'the-origins-of-the-snakes', type: 'ARC', missionName: 'The Origins of the Snakes', contactKey: MatthewBurke.key },
    { key: 'snake-uprising', type: 'ARC', missionName: 'Snake Uprising', contactKey: Mongoose.key },
    { key: 'weird-science', type: 'ARC', missionName: 'Weird Science', contactKey: DoctorCreed.key },
    { key: 'underdogs-never-win', type: 'ARC', missionName: 'Underdogs Never Win', contactKey: OperativeKuzmin.key },
    { key: 'fire-and-heist', type: 'ARC', missionName: 'Fire and Heist', contactKey: FireWire.key },
    { key: 'higher-purpose', type: 'ARC', missionName: 'Higher Purpose', contactKey: DoctorWeber.key },
    { key: 'price-of-friendship', type: 'ARC', missionName: 'Price of Friendship', contactKey: LtHarris.key },
    { key: 'the-hearts-of-darkness-rogues-contest', type: 'ARC', missionName: `The Hearts of Darkness - Rogues' Contest`, contactKey: DrGraves.key },
    { key: 'the-hearts-of-darkness-heroic-measures', type: 'ARC', missionName: 'The Hearts of Darkness - Heroic Measures', contactKey: DrGraves.key },
    { key: 'the-hearts-of-darkness-price-of-victory', type: 'ARC', missionName: 'The Hearts of Darkness - Price of Victory', contactKey: DrGraves.key },
    { key: 'oh-wretched-man', type: 'ARC', missionName: 'Oh, Wretched Man!', contactKey: SeerMarino.key },
  ],
}
