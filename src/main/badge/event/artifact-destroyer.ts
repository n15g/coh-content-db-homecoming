import { BadgeData } from 'coh-content-db'

export const ArtifactDestroyer: BadgeData = {
  type: 'EVENT',
  key: 'artifact-destroyer',
  setTitle: { id: 1769 },
  name: [
    { value: 'Artifact Destroyer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have gone about the proper ritual to destroy the Malleus Mundi, but you are unsure if it is truly gone.' },
  ],
  acquisition: 'Complete the Whispered Rumor tip mission during the Halloween event and choose the option to \'Attempt to destroy the Malleus Mundi\'.',
  links: [
    { title: 'Artifact Destroyer Badge', href: 'https://homecoming.wiki/wiki/Artifact_Destroyer_Badge' },
    { title: 'Whispered Rumour', href: 'https://homecoming.wiki/wiki/Mission:Tip_-_Whispered_Rumor' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/artifact-destroyer.png' }],
}
