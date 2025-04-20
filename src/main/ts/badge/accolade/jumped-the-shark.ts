import { BadgeData } from 'coh-content-db'
import { RazorToothed } from '../exploration/razor-toothed'
import { ForgedByHellfire } from '../exploration/forged-by-hellfire'
import { FreakOfNature } from '../exploration/freak-of-nature'
import { PitViper } from '../exploration/pit-viper'
import { SkyChaser } from '../exploration/sky-chaser'
import { UnwelcomeGuest } from '../exploration/unwelcome-guest'
import { SkyTrader } from '../exploration/sky-trader'
import { CarpingTheDiem } from '../exploration/carping-the-diem'

export const JumpedTheShark: BadgeData = {
  type: 'accolade',
  key: 'jumped-the-shark',
  setTitleId: [1500],
  name: 'Jumped the Shark',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Sharkhead Isle.`,
  links: [
    { title: 'Jumped the Shark Badge', href: 'https://homecoming.wiki/wiki/Jumped_the_Shark_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png',
  requirements: [
    { key: RazorToothed.key, type: 'badge', badgeKey: RazorToothed.key },
    { key: ForgedByHellfire.key, type: 'badge', badgeKey: ForgedByHellfire.key },
    { key: FreakOfNature.key, type: 'badge', badgeKey: FreakOfNature.key },
    { key: PitViper.key, type: 'badge', badgeKey: PitViper.key },
    { key: SkyChaser.key, type: 'badge', badgeKey: SkyChaser.key },
    { key: UnwelcomeGuest.key, type: 'badge', badgeKey: UnwelcomeGuest.key },
    { key: SkyTrader.key, type: 'badge', badgeKey: SkyTrader.key },
    { key: CarpingTheDiem.key, type: 'badge', badgeKey: CarpingTheDiem.key },
  ],
}
