import { preferSimpleAlternate } from './rules/prefer-simple-alternate'
import { noEmptyAlternate } from './rules/no-empty-alternate'
import { migrateRequirementPlaqueType } from './rules/migrate-requirement-plaque-type'
import { migrateRequirementLoc } from './rules/migrate-requirement-loc'
import { migrateBadgeLoc } from './rules/migrate-badge-loc'
import { migrateContactLoc } from './rules/migrate-contact-loc'
import { noInvalidKey } from './rules/no-invalid-key'
import { preferEffectPeriod } from './rules/prefer-effect-period'
import { preferAcquisitionPeriod } from './rules/prefer-acquisition-period'

export const rules = {
  'migrate-badge-loc': migrateBadgeLoc,
  'migrate-contact-loc': migrateContactLoc,
  'migrate-requirement-loc': migrateRequirementLoc,
  'migrate-requirement-plaque-type': migrateRequirementPlaqueType,
  'no-empty-alternate': noEmptyAlternate,
  'no-invalid-key': noInvalidKey,
  'prefer-acquisition-period': preferAcquisitionPeriod,
  'prefer-effect-period': preferEffectPeriod,
  'prefer-simple-alternate': preferSimpleAlternate,
}
