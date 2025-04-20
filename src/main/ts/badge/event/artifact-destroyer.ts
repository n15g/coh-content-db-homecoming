import { BadgeData } from 'coh-content-db'

export const ArtifactDestroyer: BadgeData = {
  type: 'event',
  key: 'artifact-destroyer',
  setTitleId: [1769],
  name: 'Artifact Destroyer',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have gone about the proper ritual to destroy the Malleus Mundi, but you are unsure if it is truly gone.',
  acquisition: `Complete the Whispered Rumor tip mission during the Halloween event and choose the option to 'Attempt to destroy the Malleus Mundi'.`,
  links: [
    { title: 'Artifact Destroyer Badge', href: 'https://homecoming.wiki/wiki/Artifact_Destroyer_Badge' },
    { title: 'Whispered Rumour', href: 'https://homecoming.wiki/wiki/Mission:Tip_-_Whispered_Rumor' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/artifact-destroyer.png',
}
