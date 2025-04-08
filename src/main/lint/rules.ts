import { preferSimpleAlternate } from './rules/prefer-simple-alternate'
import { noEmptyAlternate } from './rules/no-empty-alternate'
import { migrateRequirementPlaqueType } from './rules/migrate-requirement-plaque-type'
import { migrateRequirementLoc } from './rules/migrate-requirement-loc'
import { migrateBadgeLoc } from './rules/migrate-badge-loc'

export const rules = {
  'migrate-badge-loc': migrateBadgeLoc,
  'migrate-requirement-loc': migrateRequirementLoc,
  'migrate-requirement-plaque-type': migrateRequirementPlaqueType,
  'no-empty-alternate': noEmptyAlternate,
  'prefer-simple-alternate': preferSimpleAlternate,
}
