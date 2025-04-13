import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { Max } from '../../contact/max'
import { BurdenOfThePast } from '../../mission/burden-of-the-past'
import { AnActOfMercy } from '../../mission/an-act-of-mercy'
import { TheEndOfVengeance } from '../../mission/the-end-of-vengeance'
import { ToWhatEndForPower } from '../../mission/to-what-end-for-power'
import { TheChoiceOfHopeSecondHalf } from '../../mission/the-choice-of-hope-second-half'
import { DarkAstoria } from '../../zone/dark-astoria'

export const Determined: BadgeData = {
  type: 'accolade',
  key: 'determined',
  setTitleId: [2343],
  name: 'Determined',
  morality: 'all',
  badgeText: `You've obtained this accolade by completing every story arc within Dark Astoria.`,
  acquisition: `Complete every story arc within ${zoneLink(DarkAstoria)}.`,
  notes: `You must not skip missions in dialogue with ${contactLink(Max)} (if you have done so, you can repeat them via Ouroboros),
 and you must have done whichever of 'Captain Nolan' or 'Threatening Arachnos Message' is appropriate for your alignment.`,
  links: [
    { title: 'Determined Badge', href: 'https://homecoming.wiki/wiki/Determined_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png' },
  ],
  requirements: [
    { key: BurdenOfThePast.key, type: 'mission', missionKey: BurdenOfThePast.key },
    { key: AnActOfMercy.key, type: 'mission', missionKey: AnActOfMercy.key },
    { key: TheEndOfVengeance.key, type: 'mission', missionKey: TheEndOfVengeance.key },
    { key: ToWhatEndForPower.key, type: 'mission', missionKey: ToWhatEndForPower.key },
    { key: TheChoiceOfHopeSecondHalf.key, type: 'mission', missionKey: TheChoiceOfHopeSecondHalf.key },
  ],
}
