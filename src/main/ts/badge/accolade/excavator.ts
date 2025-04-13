import { BadgeData, zoneLink } from 'coh-content-db'
import { OfficerWincottVsTheTrolls } from '../../mission/officer-wincott-vs-the-trolls'
import { FluxTheOutcast } from '../../mission/flux-the-outcast'
import { JuliusTheKindHeartedTroll } from '../../mission/julius-the-kind-hearted-troll'
import { TheHeartOfTheHollows } from '../../mission/the-heart-of-the-hollows'
import { TheHollows } from '../../zone/the-hollows'

export const Excavator: BadgeData = {
  type: 'accolade',
  key: 'excavator',
  setTitleId: [2372],
  name: 'Excavator',
  morality: 'all',
  badgeText: `You've obtained this accolade by completing every story arc within The Hollows.`,
  acquisition: `Complete every story arc within ${zoneLink(TheHollows)}.`,
  links: [
    { title: 'Excavator Badge', href: 'https://homecoming.wiki/wiki/Excavator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png',
  requirements: [
    { key: OfficerWincottVsTheTrolls.key, type: 'mission', missionKey: OfficerWincottVsTheTrolls.key },
    { key: FluxTheOutcast.key, type: 'mission', missionKey: FluxTheOutcast.key },
    { key: JuliusTheKindHeartedTroll.key, type: 'mission', missionKey: JuliusTheKindHeartedTroll.key },
    { key: TheHeartOfTheHollows.key, type: 'mission', missionKey: TheHeartOfTheHollows.key },
  ],
}
