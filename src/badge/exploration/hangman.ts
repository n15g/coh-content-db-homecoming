import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SirensCall} from "../../map/sirens-call";

export const Hangman: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hangman",
    names: [
        {type: Alternate.M, value: "Hangman"},
        {type: Alternate.M, value: "Hangwoman"}
    ],
    alignment: ALIGNMENT_ANY,
    mapKey: SirensCall.key,
    location: [-1193.0, -165.0, 1133.0],
    badgeText: [{value: "This cargo ship was left hanging on what is left of the war wall when Sunburst died in the huge explosion."}],
    notes: "The Hangman Badge marker is located on a small rock outcropping at the very base of the eastern wall of the zone, just off the northern shore of the villain base in Siren's Call." +
        "\n\nIt is about 190 yards north of the Sharkhead Isle marker.",
    links: [
        {title: "Hangman Badge", href: "https://paragonwiki.com/wiki/Hangman_Badge"},
        {title: "Hangwoman Badge", href: "https://paragonwiki.com/wiki/Hangwoman_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "1"
};
