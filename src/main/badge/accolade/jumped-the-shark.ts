import { BadgeData, mapLink } from 'coh-content-db'
import { SharkheadIsle } from '../../map/sharkhead-isle'
import { RazorToothed } from '../exploration/razor-toothed'
import { ForgedByHellfire } from '../exploration/forged-by-hellfire'
import { FreakOfNature } from '../exploration/freak-of-nature'
import { PitViper } from '../exploration/pit-viper'
import { SkyChaser } from '../exploration/sky-chaser'
import { UnwelcomeGuest } from '../exploration/unwelcome-guest'
import { SkyTrader } from '../exploration/sky-trader'
import { CarpingTheDiem } from '../exploration/carping-the-diem'

export const JumpedTheShark: BadgeData = {
  type: 'ACCOLADE',
  key: 'jumped-the-shark',
  setTitle: { id: 1500 },
  name: [
    { value: 'Jumped the Shark' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Sharkhead Isle.` },
  ],
  notes: `Visit all exploration badges in ${mapLink(SharkheadIsle)}`,
  links: [
    { title: 'Jumped the Shark Badge', href: 'https://homecoming.wiki/wiki/Jumped_the_Shark_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png' },
  ],
  requirements: [[
    { key: RazorToothed.key, type: 'BADGE', badgeKey: RazorToothed.key },
    { key: ForgedByHellfire.key, type: 'BADGE', badgeKey: ForgedByHellfire.key },
    { key: FreakOfNature.key, type: 'BADGE', badgeKey: FreakOfNature.key },
    { key: PitViper.key, type: 'BADGE', badgeKey: PitViper.key },
    { key: SkyChaser.key, type: 'BADGE', badgeKey: SkyChaser.key },
    { key: UnwelcomeGuest.key, type: 'BADGE', badgeKey: UnwelcomeGuest.key },
    { key: SkyTrader.key, type: 'BADGE', badgeKey: SkyTrader.key },
    { key: CarpingTheDiem.key, type: 'BADGE', badgeKey: CarpingTheDiem.key },
  ]],
}
