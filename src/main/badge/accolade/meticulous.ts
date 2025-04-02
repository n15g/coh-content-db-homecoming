import { BadgeData } from 'coh-content-db'
import { Secured } from '../event/secured'
import { PowerHungry } from '../event/power-hungry'
import { ArtifactDestroyer } from '../event/artifact-destroyer'
import { Veiled } from '../event/veiled'
import { Trusting } from '../event/trusting'

export const Meticulous: BadgeData = {
  type: 'ACCOLADE',
  key: 'meticulous',
  setTitle: { id: 1773 },
  name: [
    { value: 'Meticulous' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You are not tied to any single decision, and must pursue every course of action available to determine the consequences.` },
  ],
  notes: `Available during Halloween events.`,
  links: [
    { title: 'Meticulous Badge', href: 'https://homecoming.wiki/wiki/Meticulous_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/meticulous.png' },
  ],
  requirements: [
    { key: Secured.key, type: 'BADGE', badgeKey: Secured.key },
    { key: PowerHungry.key, type: 'BADGE', badgeKey: PowerHungry.key },
    { key: ArtifactDestroyer.key, type: 'BADGE', badgeKey: ArtifactDestroyer.key },
    { key: Veiled.key, type: 'BADGE', badgeKey: Veiled.key },
    { key: Trusting.key, type: 'BADGE', badgeKey: Trusting.key },
  ],
}
