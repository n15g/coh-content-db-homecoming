import { BadgeData } from 'coh-content-db'
import { MatthewHabashy } from '../../contact/matthew-habashy'
import { OfficerFields } from '../../contact/officer-fields'
import { AaronThiery } from '../../contact/aaron-thiery'
import { SondraCostel } from '../../contact/sondra-costel'
import { Twinshot } from '../../contact/twinshot'

export const AgentOfOrder: BadgeData = {
  type: 'ACCOLADE',
  key: 'agent-of-order',
  setTitle: { id: 2352 },
  name: 'Agent of Order',
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Without heroes like you the world would fall into chaos and despair.` },
    { alignment: 'V', value: `You leave nothing but chaos and destruction in your wake!` },
  ],
  effect: 'Award 20 reward merits.',
  links: [
    { title: 'Agent of Order Badge', href: 'https://homecoming.wiki/wiki/Agent_of_Order_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png',
  requirements: [
    { key: 'what-was-lost', type: 'ARC', missionName: 'What Was Lost', contactKey: MatthewHabashy.key },
    { key: 'no-more-fears', type: 'ARC', missionName: 'No More Fears', contactKey: OfficerFields.key },
    { key: 'reason-to-fight', type: 'ARC', missionName: 'Reason to Fight', contactKey: AaronThiery.key },
    { key: 'lay-down-your-burdens', type: 'ARC', missionName: 'Lay Down Your Burdens', contactKey: SondraCostel.key },
    { key: 'the-shining-stars-a-new-day-dawning', type: 'ARC', missionName: 'The Shining Stars - A New Day Dawning', contactKey: Twinshot.key },
    { key: 'the-shining-stars-big-leagues', type: 'ARC', missionName: 'The Shining Stars - Big Leagues', contactKey: Twinshot.key },
    { key: 'the-shining-stars-with-friends-like-these', type: 'ARC', missionName: 'The Shining Stars - With Friends Like These', contactKey: Twinshot.key },
  ],
}
