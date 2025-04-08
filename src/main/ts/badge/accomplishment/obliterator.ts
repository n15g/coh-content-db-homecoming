import { BadgeData } from 'coh-content-db'
import { Ricochet } from '../../contact/ricochet'
import { Splice } from '../../contact/splice'
import { JackHammer } from '../../contact/jack-hammer'
import { Hatchet } from '../../contact/hatchet'
import { Beholder } from '../../contact/beholder'
import { Vagabond } from '../../contact/vagabond'
import { Wardog } from '../../contact/wardog'
import { Crow } from '../../contact/crow'
import { Helix } from '../../contact/helix'
import { CalvinScottPraetorian } from '../../contact/calvin-scott-praetorian'

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
    { key: 'jtm', type: 'ARC', missionName: 'Justifying the Means', contactKey: Ricochet.key },
    { key: 'iph', type: 'ARC', missionName: 'Insert Paranoia Here', contactKey: Splice.key },
    { key: 'idtia', type: 'ARC', missionName: 'I Destroy, Therefore I Am!', contactKey: JackHammer.key },
    { key: 'dond', type: 'ARC', missionName: '"Destroy or Not Destroy, That is the Question"', contactKey: JackHammer.key },
    { key: 'nrfh', type: 'ARC', missionName: 'No Room for Humanity', contactKey: Hatchet.key },
    { key: 'potm', type: 'ARC', missionName: 'Power of the Mind', contactKey: Beholder.key },
    { key: 'tpgmmp', type: 'ARC', missionName: 'The Price Good Men Must Pay', contactKey: Vagabond.key },
    { key: 'twmh', type: 'ARC', missionName: 'Those Who Make History', contactKey: Wardog.key },
    { key: 'bot', type: 'ARC', missionName: 'Blood of Tyrants', contactKey: Wardog.key },
    { key: 'htf', type: 'ARC', missionName: 'Honor The Fallen', contactKey: Crow.key },
    { key: 'ts', type: 'ARC', missionName: 'The Surge', contactKey: Helix.key },
    { key: 'ttp', type: 'ARC', missionName: 'The Turning Point', contactKey: CalvinScottPraetorian.key },
  ],
}
