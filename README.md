# coh-content-db-homecoming

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/n15g/coh-content-db-homecoming/build.yml?branch=master)](https://github.com/n15g/coh-content-db-homecoming/actions)
[![Codecov](https://img.shields.io/codecov/c/github/n15g/coh-content-db-homecoming)](https://app.codecov.io/gh/n15g/coh-content-db-homecoming)
[![GitHub Tag](https://img.shields.io/github/v/tag/n15g/coh-content-db-homecoming)](https://github.com/n15g/coh-content-db-homecoming/tags)
[![NPM Version](https://img.shields.io/npm/v/coh-content-db-homecoming)](https://www.npmjs.com/package/coh-content-db-homecoming)
[![GitHub License](https://img.shields.io/github/license/n15g/coh-content-db-homecoming)](LICENSE)

Homecoming server data for use with [coh-content-db](https://github.com/n15g/coh-content-db).

# Usage

Initialize a database with the homecoming data pack:

```typescript
import { CohContentDatabase } from 'coh-content-db'
import { HOMECOMING } from 'coh-content-db-homecoming'

const database = new CohContentDatabase(HOMECOMING)
```

# Development

## Local Build

```shell
npm run lint
npm run test
npm run build
```

## Publish

Tags matching the pattern `v<X>.<Y>.<Z>` will attempt to publish to npm (this can only be achieved by the package manager (n15g).

```shell
npm version 1.4.x
npm run push
```

## Updating Content

For those familiar with Typescript, check the eslint config and existing files for style guides.

Since `2.0.0` a linter and set of unit tests are run on push to help locate issues early.

For those unfamiliar with Typescript or looking to extract images, a set of instructions graciously provided by [kwsapphire](https://github.com/kwsapphire) are available below.

### Needed Tools:

* GitHub account
    * Badger Database on GitHub: [https://github.com/n15g/coh-content-db-homecoming](https://github.com/n15g/coh-content-db-homecoming)
    * Badger Website Data on Github: [https://github.com/n15g/badger](https://github.com/n15g/badger)
* City of Heroes account (Any server, but these instructions assume [Homecoming](https://forums.homecomingservers.com/).)
* Pigg Viewer to convert PIGGs to Textures (Piglet linked in [this forum post](https://forums.homecomingservers.com/topic/5405-piggviewer/#comment-562266).)
* DeTexturizer to convert Textures to DDS (Philotic Knight’s is on [GitHub](https://github.com/WestBennett/Old-CoH-Code/).)
* DDS Converter to convert DDS to PNG (many available online)
* Text editor ([Notepad++](https://notepad-plus-plus.org/) recommended)
* Image editing software
* Download [badge-grant-all.txt](docs/badge-grant-all.txt)
* Download [SetTitle file](https://n15g.github.io/badger/assets/settitle.txt)

### Working with GitHub:

1. While logged in to GitHub, visit the Database link above (and optionally the Website Data link). Click the “Fork” button at the top of the page, and select “Create New Fork.” Adjust the options if desired, then click Create Fork. This is your version to work with.
2. When you want to make updates, go to your Fork and click the “Master” drop down menu on the top left. Enter the name of a new Branch where you will make changes (e.g. Issue28Page2). Then click the button that says “Create new branch (name) from master.” You will make changes in this branch,
   leaving your master version untouched.
3. Once done with all updates, you’ll submit your changes to be merged into the main Database. This must be approved by Nick/KeyboardKitsune, which he usually does within a couple of days. **Ensure all of your changes are 100% correct before asking to merge, to prevent multiple requests.**
4. Each badge is represented by a .ts file located in the src/badge/(category) directories. Each badge category (Accolade, Exploration, etc.) also has a .ts file (e.g. \_accolade-badges.ts) which determines proper sequential display order and must be updated when new badges are added. Badge icon
   images must be uploaded to the appropriate folder in docs/images/badges.
5. Always coordinate with other people who are updating the database so you don’t overwrite each other's efforts!

### Info Needed to Add or Update Badges

(retain screenshots of everything obtained in-game!)

* Badge Icon Image \[ATC\]
* In-Game Sequential Order \[ATC\]
* Set-Title ID \[ATC\] (from live or open beta only, NOT CLOSED BETA)
* Badge Name (including gender and alignment variants) \[ATC\]
* Badge Text (including gender and alignment variants) \[ATC\]
* Location Coordinates (for Exploration badges and History plaques) \[ATC\]
* ViditotMap Keys (for Exploration badges and History plaques) \[ATC\]
* Badge Category \[ATC\]
* Alignment (based on acquisition, not possession)
* Badge Dependencies (other badges needed for this one, may be in Patch Notes)
* Acquisition Instructions (keep spoilers light & add more detail to notes)
* Notes (from Forums, Wiki, Patch Notes, etc.)
* History Plaque plaqueInscription and type (wall or monument)
* Key Name (hero, male, lowercase, no special characters, replace space with dash (snake-case or kebab-case))
* Export Name (hero, male, CamelCase (ProperCase), no special characters or spaces)

Items marked with \[ATC\] will be performed by AboveTheChemist for other CoH related tools (VidiotMaps, Badge Popmenu, etc.), and so can be provided to whomever is updating the Badger site.
Some of this information can be gleaned from the Patch Notes, but ALWAYS VERIFY in-game. Patch Notes can be (and often have been) wrong. Example: Patch Notes said new badge was “Hidden in Fog” but actual in-game badge name is “Hidden in the Fog.”

### Obtaining Badge Icon Images:

ATC can provide. _Only needed if adding a new badge. Skip this section if you’re merely updating an existing badge._
You can easily obtain the image icons for new badges via the patch notes. Right click each image and save to your hard drive. **This method is least-preferred**, as the resulting images may not be the highest possible quality. **Use below method if possible.**

1. Navigate to your City of Heroes installation directory. If the new badges are still in beta, go to the assets\\beta folder. If the changes are live, you can use the assets\\live folder.
2. Copy all the .pigg files to a new location (your Sandbox) to prevent any possible corruption of your game files.
3. Use a PIGG viewer to convert the needed PIGG files to textures
    1. Open your Sandbox directory with Piglet
    2. In the left panel, navigate to texture\_library > gui > icons > badges
    3. Reference patch notes to determine what new badges are coming, and therefore what texture files you’re looking for. Select the needed textures in the window on the right and export them to a new folder (Repository)

    4. Use a DeTexturizer to convert the texture files to DDS. (This is straight-forward.)
    5. Use a DDS converter to convert the DDS files to PNG files. (Ditto)
    6. Crop images as needed

4. Open each image in an image editing program and look closely for extra “tags” that need to be cropped. Typical round badges are 48x48 pixels and often need to be trimmed. See [example-needs-cropping](docs/example-needs-cropping.png) in the badger docs
   directory for examples.
5. Crop the top/left 48x48 pixels and save the file, ensuring to retain the transparent background and .png extension.
6. Other common badge sizes are 64x64, 128x48, and 128x64. Not all icons will need to be cropped, but it will generally be obvious which ones need cropping as seen in the examples, as they will either have excessive whitespace or extra 'tags'. When cropping, always crop to one of the above
   listed sizes.
7. Naming convention for badge image files (Key Name):
    1. All lower case, replace spaces with dash (snake-case or kebab-case)
    2. Use the Male version of the badge name, if there are gendered versions.  
       (the-once-and-future-king.png)
    3. Use the Hero version of the badge name, even if the badge is earned as a Villain.  
       (grounded.png, NOT pilot.png)
    4. Append with -h and -v if there are different images for the Hero and Villain versions.  
       (tested-the-water-h.png and tested-the-water-v.png)
    5. Remove special characters (the-doctors-ally.png)
    6. Note: Images that are used by multiple badges may have a more generic name. Review existing badges and follow naming conventions as best as possible if you need to add a new image that’s used by multiple new badges. For example, there were four exploration badge imagess: hazard.png,
       hero.png, villain.png, and praetorian.png. Adding the Labyrinth of Fog exploration badge, one might use labyrinth.png.

8. Upload the new badge image files to your working Branch on GitHub.  
   docs/images/badges/(appropriate category directory, e.g. accolade, exploration, etc.)

### Updating Category Files

ATC can provide sequential order. _Only needed if adding a new badge. Skip this section if you’re merely updating an existing badge._

1. Open the file that starts with an underscore that is in the appropriate category directory. For example: if you’re adding a new Accolade, open the src/badge/accolade/\_accolade-badges.ts file. This step is necessary to get the badge to appear on the Badger site.
2. Add an import command for the new badge to the bottom of the first list. This list uses “Export Name” and “Key Name” in the same line. “Export Name” is the Hero Male variant, CamelCase (ProperCase), no spaces or special characters.  
   Example: `import {HistoryInTheMaking} from "./history-in-the-making";`
3. Insert the Export Name into the second list in this file, in the same spot the badge appears in-game. Open the appropriate badge category in the in-game list (NOT “Most Recent” – go to the actual category) and see what other badges the new badge falls between. Add the export name for the new
   badge in the appropriate place in the list.

### Adding New Badge .ts File

_Only add new .ts file if adding a whole new badge. If updating existing badge, find the appropriate .ts file and edit the required fields. For new badges, you can create a new .ts file from scratch, but it’s strongly recommended that you copy one from the most-similar badge instead._
Each code snippet below is an example of what you should include or modify in badge .ts files (each on separate lines). A full example file without notes is included at the end. The individual sections below use different badges as examples so don’t expect consistency until the mock .ts file at the
end.

### Imports

All badge files start with this line:

```typescript
import { BadgeData } from 'coh-content-db'
```

All zone-related badges include one or more map import lines. Accolades awarded for all exploration badges in a zone should import that zone map. History badges should import maps for every zone that has an associated history plaque. Exploration badges should import the map they’re found on. List
all maps in alphabetical order. In theory, this allows users to click on links to open VidiotMaps of each zone. This isn’t actually implemented yet, but we’re keeping up with it anyway.

```typescript
import { ReclusesVictory } from '../../map/recluses-victory'
```

Next, add lines to import each of the badges that are required in order to earn the badge you’re working on (if any). List all badges in alphabetical order.

```typescript
import { AstoriasLastStand } from '../exploration/astorias-last-stand'
```

**Leave an empty line between the above imports section and the below export section.**

### Export

Next, the badge file needs to export a variable representing the badge data. For descriptions of the possible values, see https://github.com/n15g/coh-content-db/blob/v2.0.0-rc.2/src/main/api/badge-data.ts.

```typescript
export const ProtectorOfInnocents: BadgeData = {
    type: 'achievement', //Possible values - https://github.com/n15g/coh-content-db/blob/v2.0.0-rc.2/src/main/api/badge-type.ts
    key: 'my-badge', // Keys can only contain lowercase letters, numbers and hyphens (`-`, kebab-case).
    setTitle: { id: 1234, praetorianId: 4321 }, // The praetorianId is only required for badges with a separate id

    // See https://github.com/n15g/coh-content-db/blob/v2.0.0-rc.2/src/main/api/alternate-data.ts for how alternate values work.
    name: [
        { value: 'My Badge' },
        { sex: 'F', value: 'My Badge for female characters' },
        { alignment: 'P', sex: 'M', value: 'My Badge for male Praetorian characters' },
    ],
    morality: 'all',
    // Alternate values supported here too, but any badge with only a single value should use it directly..
    badgeText: 'You did a thing.',
    //Acquisition text should be very short and to the point. Put the gory details in the notes.
    acquisition: 'Do a thing. You can use *markdown* syntax in here for formatting the text.',
    notes: `
It can also be useful to use backticks instead of commas as the string delimiter.

This will allow you to span multiple lines and not cause issues if quotes (" or ') appear in the text.

Be aware of newlines and whitespace in the string, as unlike HTML, in markdown they have semantic meaning such as marking paragraphs.`,
    // Always try and include a link to the homecoming wiki if possible. Remember to Reference [URL encode](https://www.freecodecamp.org/news/url-encoded-characters-reference/) for special characters.
    links: [
        { title: 'Invictus Badge', href: 'https://homecoming.wiki/wiki/Invictus_Badge' },
    ],
    // Location of the badge icon in the docs folder.
    // Yes, it’s the same file, even though the above URLs don’t contain “docs” in the link. GitHub Magic™!
    icon: [
        { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/protector-of-innocents-h.png' },
        { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/protector-of-innocents-v.png' }
    ],
    // Include the map key for exploration badges,
    zoneKey: AtlasPark.key,
    // /loc Coordinates for exploration badges
    loc: [-411.0, 48.0, -2623.0],
    // Requirements for badges that involve one or more steps to complete, like collecting other badges,
    // clicking on monuments, or creating inventions.
    requirements: [
        { key: AstoriasLastStand.key, type: 'badge', badgeKey: AstoriasLastStand.key },
        {
            key: 'bicn-0',
            type: 'PLAQUE',
            zoneKey: AtlasPark.key,
            plaqueType: 'MONUMENT',
            loc: [330.45, 3.93, 397.33],
            plaqueInscription: ``,
            notes: `This plaque is in ${zoneLink(AtlasPark)}], roughly 258 yards south-southwest of the Atlas Plaza neighborhood marker.`,
            vidiotMapKey: '8'
        },
        {
            key: 'b',
            type: 'invention',
            inventionLevel: 50,
            inventionTypes: ['ENDURANCE_MODIFICATION', 'ENDURANCE_REDUCTION'],
            count: 12,
        },
    ]
}
```

### Merging Updates

Once you’re certain you’ve correctly captured all updates, go to the main page of your edited branch.
There will be a box at the top of the page that says “This branch is X commits ahead of the master”.
This will include a link you can click to create a pull request, taking you to a summary page comparing your changes to the master version.

Take this opportunity to thoroughly review your changes for correctness and completeness.
A GitHub Action should have also been started that will check for issues with your changes and report failures to the pull request.

Fix any issues and when happy, submit the PR; Near the top of that page is a green button titled “Create Pull Request”.
Click that, then you’ll have an opportunity to add notes describing your changes. Then click the green "Submit" button, and a merge request will be sent to N15g to review.

### To Obtain & View Badges In-Game

Create one Primal character with a Male costume in one slot and a Female costume in another slot. Create one Praetorian character who also has one Male and one Female costume. You’ll be able to swap costumes to see if the badge name or text changes by gender. Swap the Primal character’s alignment at
Null the Gull to see if there are variants by alignment. **Take screenshots of everything.**

Award all badges on the Beta server:

1. Save the badge-grant-all.txt file (in the docs directory) to your settings\beta folder in your Homecoming installation directory. You may have to create the beta folder. This file will need to be updated when new badges are added.
2. While logged into a character on the beta server, type /bindloadfile badge-grant-all.txt and hit enter.
3. Wait a few minutes while all the badges finish granting themselves to you.

Grant yourself new badges not yet included in the badge grant file:

1. To determine the internal name of new badges: Open your sandbox directory in Piglet.
2. Click on the bin folder on the left side, then select the badges.bin file.
3. Export this file to your Repository folder and then open it with a text editor.
4. Look up the badge texture filenames from the piggs (located in texture_library/gui/icons/badges) for all new badges
5. Search badges.bin for each texture filename (just the filename, ignore the .texture extension) Example: The texture filename for the labyrinth history badge Greek Philosopher is badge\_i28\_history\_labyrinth. Search for this filename in badges.bin and you’ll find text as below:

   `LabyrinthHistory P2392203697 P344445814 P3379288051 badge\_i28\_history\_labyrinth`
6. Starting at the texture filename, look to the left, ignoring the long numbers preceded by a P (which are called P-strings), to the first text string that is not a P-string. In this case, that text string is `LabyrinthHistory`, which is the internal name of the new history badge. In game, use
   `/badgegrant LabyrinthHistory` to grant yourself this badge.
7. Repeat for any new badges not yet included in the badge granting file.

Now you can swap alignments and genders to check badge name and text.

Run the SetTitle file to log all badges:

1. (Optional, see #5) Ensure logging is enabled under Windows – Chat Log – Enabled. If you had to enable this setting, log your character out and back in before continuing.
2. Save the [SetTitle file](https://n15g.github.io/badger/assets/settitle.txt) to your Homecoming directory.
3. In game, type /bindloadfile "C:\<CoHDirectory>\settitle.txt". Replace <CoHDirectory> with the name of your City of Heroes install directory. Hit enter.
4. Look at the output in the Global tab. Feel free to copy and paste this into a text document for your reference. Badges are output in sequential order according to SetTitleID.  
   Example, this is part of the output for my character:

   > \[14:33\] Zeta Reticulan has been selected as new title.  
   > \[14:33\] Your badge title has been cleared  
   > \[14:33\] Your badge title has been cleared  
   > \[14:33\] Hidden In The Fog has been selected as new title.

   Zeta Reticulan is an existing badge, so I can look up its SetTitle ID: 2527. This is followed by two empty badges (2528 & 2529) before the Hidden in the Fog badge is awarded. This means Hidden in the Fog’s SetTitle ID is 2530.

5. The SetTitle file will produce more output than will fit in the chat window. This isn’t a problem with adding new badges as they’re always at the bottom, but you can check your log files for the full output if needed.
