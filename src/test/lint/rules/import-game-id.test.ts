import { ruleTester } from '../utils/rule-tester'
import { importGameId } from '../../../main/lint/rules/import-game-id'

ruleTester.run('should work for different name types', importGameId, {
  valid: [],
  invalid: [
    {
      name: 'literal',
      code: `
export const Accelerated: BadgeData = {
  key: 'accelerated',
  name: 'Accelerated',
}`,
      errors: [{ messageId: 'importGameId' }],
      output: `
export const Accelerated: BadgeData = {
  key: 'accelerated',
  gameId: 'SlolamSilver',
  name: 'Accelerated',
}`,
    },
    {
      name: `template literal`,
      code: `
export const BrickstownsKeeper: BadgeData = {
  key: 'brickstowns-keeper',
  name: \`Brickstown's Keeper\`,
}`,
      errors: [{ messageId: 'importGameId' }],
      output: `
export const BrickstownsKeeper: BadgeData = {
  key: 'brickstowns-keeper',
  gameId: 'Mission_BT_i24_Arc_Complete_02',
  name: \`Brickstown's Keeper\`,
}`,
    },
    {
      name: 'alternates',
      code: `
export const TempusFugitive: BadgeData = {
  key: 'tempus-fugitive',
  name: [
    { alignment: 'hero', value: 'Tempus Fugitive' },
    { alignment: 'villain', value: 'Destroyer of Worlds' },
  ],
}`,
      errors: [{ messageId: 'importGameId' }],
      output: `
export const TempusFugitive: BadgeData = {
  key: 'tempus-fugitive',
  gameId: 'DestroyerofWorlds',
  name: [
    { alignment: 'hero', value: 'Tempus Fugitive' },
    { alignment: 'villain', value: 'Destroyer of Worlds' },
  ],
}`,
    },
  ],
})

ruleTester.run('should include praetorian ids where appropriate', importGameId, {
  valid: [
    {
      name: 'already set',
      code: `
export const HeroOfTheCity: BadgeData = {
  key: 'hero-of-the-city',
  gameId: ['Level50', 'P_Level_50'],
  name: [
    { alignment: 'hero', value: 'Hero of the City' },
    { alignment: 'villain', value: 'Made' },
    { alignment: 'praetorian', value: 'Praetor' },
  ],
}`,
    },
  ],
  invalid: [
    {
      name: 'literal',
      code: `
export const HeroOfTheCity: BadgeData = {
  key: 'hero-of-the-city',
  gameId: 'Level50',
  name: [
    { alignment: 'hero', value: 'Hero of the City' },
    { alignment: 'villain', value: 'Made' },
    { alignment: 'praetorian', value: 'Praetor' },
  ],
}`,
      errors: [{ messageId: 'importGameId' }],
      output: `
export const HeroOfTheCity: BadgeData = {
  key: 'hero-of-the-city',
  gameId: ['Level50', 'P_Level_50'],
  name: [
    { alignment: 'hero', value: 'Hero of the City' },
    { alignment: 'villain', value: 'Made' },
    { alignment: 'praetorian', value: 'Praetor' },
  ],
}`,
    },
  ],
})
