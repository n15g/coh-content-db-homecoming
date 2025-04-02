import { BadgeData } from 'coh-content-db'
import { AaronWalker } from '../../contact/aaron-walker'
import { PenelopeYinPraetorian } from '../../contact/penelope-yin-praetorian'
import { DarkWatcher } from '../../contact/dark-watcher'
import { DrHetzfeld } from '../../contact/dr-hetzfeld'
import { Neuron } from '../../contact/neuron'
import { IVy } from '../../contact/ivy'
import { MotherMayhem } from '../../contact/mother-mayhem'
import { AntiMatter } from '../../contact/anti-matter'

export const TrueToTheLast: BadgeData = {
  type: 'ACCOLADE',
  key: 'true-to-the-last',
  setTitle: { id: 2351 },
  name: 'True to the Last',
  alignment: ['H', 'V', 'P'],
  badgeText: `Wherever you must go, whatever you must do, Praetoria will always & forever be your home, and to it you shall be True to the Last.`,
  notes: `Awards 20 reward merits.`,
  links: [
    { title: 'True to the Last Badge', href: 'https://homecoming.wiki/wiki/True_to_the_Last_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-v.png' },
  ],
  requirements: [
    { key: 'the-savage-man', type: 'ARC', missionName: '(Resistance Warden) The Savage Man', contactKey: AaronWalker.key },
    { key: 'my-best-friend-rusty', type: 'ARC', missionName: '(Resistance Warden) My Best Friend, Rusty', contactKey: PenelopeYinPraetorian.key },
    { key: 'a-promise-for-a-new-tomorrow', type: 'ARC', missionName: '(Resistance Warden) A Promise for a New Tomorrow', contactKey: DarkWatcher.key },
    { key: 'to-our-health', type: 'ARC', missionName: '(Resistance Warden) To Our Health', contactKey: DarkWatcher.key },
    { key: 'for-the-taking', type: 'ARC', missionName: '(Loyalist Power) For the Taking', contactKey: DrHetzfeld.key },
    { key: 'a-god-amongst-men', type: 'ARC', missionName: '(Loyalist Power) A God Amongst Men', contactKey: Neuron.key },
    { key: 'pride-in-your-work', type: 'ARC', missionName: '(Loyalist Power) Pride in Your Work', contactKey: Neuron.key },
    { key: 'the-old-robot-the-new-body', type: 'ARC', missionName: '(Loyalist Responsibility) The Old Robot, the New Body', contactKey: IVy.key },
    { key: 'the-woman-named-devore', type: 'ARC', missionName: '(Loyalist Responsibility) The Woman Named DeVore', contactKey: MotherMayhem.key },
    { key: 'view-from-the-other-side', type: 'ARC', missionName: '(Loyalist Responsibility) View From the Other Side', contactKey: AntiMatter.key },
    { key: 'no-survivors', type: 'ARC', missionName: '(Loyalist Responsibility) No Survivors', contactKey: AntiMatter.key },
  ],
}
