import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";

export const Vigilant: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "vigilant",
    setTitleId: 2353,
    names: [
        {value: "Vigilant"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You're always there when the people of Paragon City need you.`},
        {type: Alternate.V, value: `Your shadow looms over not only the Rogue Isles and Paragon City, but the entire world.`}
    ],
    acquisition: `Complete every story arc in [map:${RiktiWarZone.key}]`,
    notes: `
This badge rewards 20 reward merits for completing the following story arcs (contact in parentheses):
* Welcome to Vanguard (Levantera)
* The Strange Case of Benjamin A. Decker (Levantera)
* Dreams of Peace and Acts of War (Serpent Drummer)
* The Red and the Black (Gaussian)
* The Horror of War (The Dark Watcher)
`,
    links: [
        {title: "Vigilant Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Vigilant_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png"}
    ]
};
