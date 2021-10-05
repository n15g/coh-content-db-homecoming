import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SinisterSummoner: IBadgeData = {
    type: BadgeType.EVENT,
    key: "sinister-summoner",
    setTitleId: 2473,
    names: [
        {value: "Sinister Summoner"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You summoned and defeated the Halloween demon, Black Whip! Needless to say, the beast was stunned. Whip-crack went his whippy tail, and the beast was done.`},
    ],
    acquisition: `Summon and defeat The Black Whip, a demon in the "Dr. Kane's House of Horror" co-op trial.`,
    links: [
        {title: "Sinister Summoner Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Sinister_Summoner_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/sinister-summoner.png"}]
};
