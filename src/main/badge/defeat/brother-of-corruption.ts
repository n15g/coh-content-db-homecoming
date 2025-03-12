import { BadgeData } from 'coh-content-db'

export const BrotherOfCorruption: BadgeData = {
  type: 'DEFEAT',
  key: 'brother-of-corruption',
  setTitle: { id: 2495 },
  name: [
    { sex: 'M', value: 'Brother of Corruption' },
    { sex: 'F', value: 'Sister of Corruption' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've shone the light on those who prefer to slither in the dark. The Nictus-worshipping adherents of the Ravenna Conclave have learned to be wary of those from beyond time & space who came to Cimerora's aid.` },
  ],
  acquisition: `Defeat 100 members of the Ravenna Conclave`,
  links: [
    { title: 'Brother of Corruption Badge', href: 'https://homecoming.wiki/wiki/Brother_of_Corruption_Badge' },
    { title: 'Sister of Corruption Badge', href: 'https://homecoming.wiki/wiki/Sister_of_Corruption_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/brother-of-corruption.png' },
  ],
}
