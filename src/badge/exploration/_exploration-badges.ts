import {IBadgeData} from "coh-content-db";

import {CircleGazer} from "./circle-gazer";
import {DoomSayer} from "./doom-sayer";
import {Egghead} from "./egghead";
import {Ghoulish} from "./ghoulish";
import {Globetrotter} from "./globetrotter";
import {Hungry} from "./hungry";
import {Imploding} from "./imploding";
import {LastStand} from "./last-stand";
import {Lobbyist} from "./lobbyist";
import {MasterOfScience} from "./master-of-science";
import {MediaJunky} from "./media-junky";
import {Ragnarok} from "./ragnarok";
import {Sparky} from "./sparky";
import {Steamed} from "./steamed";
import {SweetTooth} from "./sweet-tooth";
import {TemporalFighter} from "./temporal-fighter";
import {ThrillSeeker} from "./thrill-seeker";
import {Widower} from "./widower";

export const ExplorationBadges: IBadgeData[] = [
    //Bloody Bay
    Lobbyist, Hungry, Imploding, Ghoulish,

    //Cap Au Diable
    Sparky, MediaJunky, Egghead, Steamed, SweetTooth, DoomSayer, MasterOfScience, CircleGazer,

    //Recluse's Victory
    Globetrotter, Ragnarok, TemporalFighter, LastStand,

    //Mercy Island
    Widower,

    //AE Buildings
    ThrillSeeker
];
