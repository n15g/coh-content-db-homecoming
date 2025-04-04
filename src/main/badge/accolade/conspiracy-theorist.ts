import { BadgeData } from 'coh-content-db'
import { BirdWatcher } from '../exploration/bird-watcher'
import { CreyFish } from '../exploration/crey-fish'
import { CreyHavoc } from '../exploration/crey-havoc'
import { CreyWatcher } from '../exploration/crey-watcher'
import { Infiltrator } from '../defeat/infiltrator'
import { TheDoctorsAlly } from '../accomplishment/the-doctors-ally'

export const ConspiracyTheorist: BadgeData = {
  type: 'accolade',
  key: 'conspiracy-theorist',
  setTitleId: [168],
  name: 'Conspiracy Theorist',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `You have uncovered Crey's conspiracy, one that has been choking Paragon City for years. As a souvenir you have kept a Crey pistol for your own personal use.` },
    { alignment: 'villain', value: `You uncovered one of Crey's conspiracies, and kept a Cryo Pistol as a souvenir. Unfortunately, feedback from the PTS has made it virtually useless in the Rogue Isles.` },
  ],
  effect: `Awards the Crey CBX-9 Pistol power.`,
  links: [
    { title: 'Conspiracy Theorist Badge', href: 'https://homecoming.wiki/wiki/Conspiracy_Theorist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/conspiracy-theorist.png',
  requirements: [
    { key: BirdWatcher.key, type: 'badge', badgeKey: BirdWatcher.key },
    { key: CreyFish.key, type: 'badge', badgeKey: CreyFish.key },
    { key: CreyHavoc.key, type: 'badge', badgeKey: CreyHavoc.key },
    { key: CreyWatcher.key, type: 'badge', badgeKey: CreyWatcher.key },
    { key: Infiltrator.key, type: 'badge', badgeKey: Infiltrator.key },
    { key: TheDoctorsAlly.key, type: 'badge', badgeKey: TheDoctorsAlly.key },
  ],
}
