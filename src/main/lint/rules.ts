import { migrateContactLinkTitle } from './rules/migrate-contact-link-title'
import { migrateContactLoc } from './rules/migrate-contact-loc'
import { migrateRequirementLoc } from './rules/migrate-requirement-loc'
import { migrateRequirementPlaqueType } from './rules/migrate-requirement-plaque-type'
import { noEmptyAlternate } from './rules/no-empty-alternate'
import { noInvalidHrefUrl } from './rules/no-invalid-href-url'
import { noInvalidKey } from './rules/no-invalid-key'
import { preferAcquisitionPeriod } from './rules/prefer-acquisition-period'
import { preferEffectPeriod } from './rules/prefer-effect-period'
import { preferEffectStart } from './rules/prefer-effect-start'
import { preferSimpleAlternate } from './rules/prefer-simple-alternate'
import { noInvalidHrefProtocol } from './rules/no-invalid-href-protocol'

export const rules = {
  'migrate-contact-link-title': migrateContactLinkTitle,
  'migrate-contact-loc': migrateContactLoc,
  'migrate-requirement-loc': migrateRequirementLoc,
  'migrate-requirement-plaque-type': migrateRequirementPlaqueType,
  'no-empty-alternate': noEmptyAlternate,
  'no-invalid-href-protocol': noInvalidHrefProtocol,
  'no-invalid-href-url': noInvalidHrefUrl,
  'no-invalid-key': noInvalidKey,
  'prefer-acquisition-period': preferAcquisitionPeriod,
  'prefer-effect-period': preferEffectPeriod,
  'prefer-effect-start': preferEffectStart,
  'prefer-simple-alternate': preferSimpleAlternate,
}
