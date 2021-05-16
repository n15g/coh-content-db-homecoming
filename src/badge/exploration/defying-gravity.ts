import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {FirebaseZulu} from "../../map/firebase-zulu";

export const DefyingGravity: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "defying-gravity",
    setTitleId: 1797,
    names: [{value: "Defying Gravity"}],
    alignment: ALIGNMENT_HERO,
    mapKey: FirebaseZulu.key,
    location: [6879.0, 928.0, 1070.0],
    badgeText: [{
        value: "Visiting alien dimensions, as the briefing told you, can be a disorienting experience." +
            " In the Shadow Shard the rules of physics operate differently, where masses measuring in the megatonnes float unsupported in the open air." +
            " From this vantage you can get a clear picture of the massive size of the island Firebase Zulu sits upon, and see that truly it floats unaided in the alien air." +
            " The mind reels at the reality of it, and as the briefing warned it is best if one not contemplate this fact too deeply."
    }],
    notes: "Located in [map:firebase-zulu] 225 yards WNW of the Firebase Zulu marker, at the top of rock on the western edge of the floating island.",
    links: [
        {title: "Defying Gravity Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Defying_Gravity_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "1"
};
