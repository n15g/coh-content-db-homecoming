import { BadgeData } from 'coh-content-db'
import { GerminatorTerminator } from '../accomplishment/germinator-terminator'
import { FullSpectrum } from '../defeat/full-spectrum'
import { Lawbreaker } from '../defeat/lawbreaker'
import { ShowsOver } from '../defeat/shows-over'
import { TheLastWord } from '../history/the-last-word'
import { EyeOfTheVortex } from '../exploration/eye-of-the-vortex'
import { Stargazer } from '../exploration/stargazer'
import { DeadButDreaming } from '../exploration/dead-but-dreaming'
import { Multifaceted } from '../achievement/multifaceted'

export const BetweenRealities: BadgeData = {
  type: 'accolade',
  key: 'between-realities',
  setTitleId: [2539],
  name: 'Between Realities',
  releaseDate: '2024-11-19',
  morality: 'all',
  badgeText: `You've spent a significant amount of time shifting between the spatial overlaps of the First Ward and Night Ward.
With experience, you've learned of a method to manipulate the magics used by the Light & Shadowed Paths to define and utilize spatial jump points of your own.`,
  effect: `Awards the Mark and Recall power.`,
  links: [
    { title: 'Between Realities Badge', href: 'https://homecoming.wiki/wiki/Between_Realities_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/between-realities.png',
  requirements: [
    { key: GerminatorTerminator.key, type: 'badge', badgeKey: GerminatorTerminator.key },
    { key: FullSpectrum.key, type: 'badge', badgeKey: FullSpectrum.key },
    { key: Lawbreaker.key, type: 'badge', badgeKey: Lawbreaker.key },
    { key: ShowsOver.key, type: 'badge', badgeKey: ShowsOver.key },
    { key: TheLastWord.key, type: 'badge', badgeKey: TheLastWord.key },
    { key: EyeOfTheVortex.key, type: 'badge', badgeKey: EyeOfTheVortex.key },
    { key: Stargazer.key, type: 'badge', badgeKey: Stargazer.key },
    { key: DeadButDreaming.key, type: 'badge', badgeKey: DeadButDreaming.key },
    { key: Multifaceted.key, type: 'badge', badgeKey: Multifaceted.key },
  ],
}
