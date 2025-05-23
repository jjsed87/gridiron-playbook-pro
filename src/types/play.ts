export interface PlayAssignment {
  position: string;
  assignment: string;
}

export interface DiagramItem {
  title: string;
  imageUrl: string;
}

export interface BasePlayData {
  id: string;
  title: string;
  description: string;
  category: string;
  formation: string;
  imageUrl: string;
  assignments: PlayAssignment[];
  notes: string;
  diagrams?: DiagramItem[];
  keyPoints?: string[];
  scheme?: string;
  personnel?: string;
  videoUrl?: string;
}

export type AdvancedPlayData = BasePlayData;

export const mockPlayData: Record<string, AdvancedPlayData> = {
  "p1": {
    id: "p1",
    title: "Power Right",
    description: "A physical downhill power run play designed to establish dominance at the point of attack with a pulling guard and lead blocker.",
    category: "Run",
    scheme: "Power (Gap Scheme)",
    formation: "I-Formation",
    personnel: "21 Personnel (2 RB, 1 TE)",
    imageUrl: "https://th.bing.com/th/id/OIP.Fvrt-j-BDLKu5_WVEWI6ywHaFL?rs=1&pid=ImgDetMain",
    diagrams: [
      {
        title: "Power Right vs. 4-3 Defense",
        imageUrl: "https://th.bing.com/th/id/OIP.Fvrt-j-BDLKu5_WVEWI6ywHaFL?rs=1&pid=ImgDetMain"
      },
      {
        title: "Power Right vs. 3-4 Defense",
        imageUrl: "https://www.footballxos.com/download/attachment.php?id=5432"
      },
      {
        title: "Power Right Game Film",
        imageUrl: "https://i.ytimg.com/vi/H8fhanOvBGs/maxresdefault.jpg"
      }
    ],
    keyPoints: [
      "Double team at point of attack with tackle and tight end",
      "Backside guard pulls and kicks out the end man on line (EMOL)",
      "Fullback leads through the hole for linebacker",
      "Running back follows FB and takes path of least resistance",
      "Offensive line blocks down, creating wall to the left"
    ],
    assignments: [
      { position: "QB", assignment: "Hand off to RB at 5-yard depth, execute play fake to backside" },
      { position: "RB", assignment: "Align at 7-yard depth, take handoff, follow FB through C-gap, read blocks for cutback" },
      { position: "FB", assignment: "Lead block through C-gap, target playside linebacker (Will)" },
      { position: "LT", assignment: "Base block defensive end, prevent penetration" },
      { position: "LG", assignment: "Down block on defensive tackle to create wall" },
      { position: "C", assignment: "Reach block backside defensive tackle" },
      { position: "RG", assignment: "Pull and kick out EMOL (End Man On Line)" },
      { position: "RT", assignment: "Down block inside, double team with TE on defensive tackle" },
      { position: "TE", assignment: "Double team with RT, then climb to second level (Mike LB)" }
    ],
    notes: "This is our bread and butter power run play. Success depends on the pulling guard's ability to kick out the edge defender and the fullback's block on the linebacker. Watch for stunts and shifts from the defensive line that could disrupt pulling paths."
  },
  "p2": {
    id: "p2",
    title: "LA / RAMS",
    description: "A zone blocking concept that creates horizontal movement and gives the running back multiple cutback options based on defensive flow.",
    category: "Run",
    scheme: "Inside Zone (Zone Scheme)",
    formation: "Shotgun",
    personnel: "11 Personnel (1 RB, 1 TE)",
    imageUrl: "/lovable-uploads/1706b55f-fbfb-4178-a6b2-818b06c89146.jpg",
    videoUrl: "https://www.youtube.com/watch?v=pN4wQx1nr6I",
    diagrams: [
      {
        title: "Inside Zone Left from Shotgun",
        imageUrl: "/lovable-uploads/1706b55f-fbfb-4178-a6b2-818b06c89146.jpg"
      },
      {
        title: "Inside Zone vs. Even Front",
        imageUrl: "https://www.viqtorysports.com/wp-content/uploads/2018/11/Inside-Zone-Read.png"
      },
      {
        title: "Inside Zone Game Film",
        imageUrl: "https://i.ytimg.com/vi/RX9-V1XVGOM/maxresdefault.jpg"
      },
      {
        title: "Inside Zone Blocking Rules",
        imageUrl: "https://www.footballoutsiders.com/images/Walkthrough/Walkthrough-081918-01.jpg"
      }
    ],
    keyPoints: [
      "Offensive line steps playside in unison creating horizontal displacement",
      "Double teams at the point of attack, climbing to second level",
      "Running back aims for outside hip of playside guard",
      "One-cut running style: find the cutback lane if defense overflows",
      "QB mesh with running back crucial for timing"
    ],
    assignments: [
      { position: "QB", assignment: "Execute proper mesh with RB, read backside DE for potential keep (option)" },
      { position: "RB", assignment: "Take path at 45° angle, aim for outside hip of playside guard, make one decisive cut" },
      { position: "WR (X)", assignment: "Block corner or nearest threat, sustain block for 4+ seconds" },
      { position: "WR (Z)", assignment: "Block safety or nearest threat to the playside" },
      { position: "TE", assignment: "Zone block playside, engage defensive end" },
      { position: "LT", assignment: "Zone step left, reach block defensive end" },
      { position: "LG", assignment: "Zone step left, combo block with center when needed" },
      { position: "C", assignment: "Zone block left, assist with down linemen control" },
      { position: "RG", assignment: "Zone step left, block first threat in A-gap" },
      { position: "RT", assignment: "Zone step left or execute cut-off block on backside pursuit" }
    ],
    notes: "The key to successful zone running is patience by the RB and coordinated blocking up front. Offensive line must maintain leverage and work to the second level. Watch for defensive line stunts and delayed linebacker blitzes. Success depends on the RB's vision to find the correct cutback lane."
  },
  "p5": {
    id: "p5",
    title: "ATLANTA / FALCONS",
    description: "Power counter run concept with dual pullers (backside guard and tackle/wing) designed to create deception and outnumber the defense at the point of attack.",
    category: "Run",
    scheme: "Counter (Backside Guard & Tackle/Wing Pull)",
    personnel: "10/11 Personnel (Adjustable)",
    formation: "Various",
    imageUrl: "public/lovable-uploads/c292e911-0413-4f67-8be6-066fa4e41fe4.png",
    diagrams: [
      {
        title: "Diagram A: Counter vs. 4-2-5 Defense (Even Front)",
        imageUrl: "public/lovable-uploads/c292e911-0413-4f67-8be6-066fa4e41fe4.png"
      },
      {
        title: "Diagram B: Counter vs. 4i/Tite Front (Tite 3-4)",
        imageUrl: "public/lovable-uploads/9e11bf2e-157e-467e-9ace-ec17f59a91a6.png"
      },
      {
        title: "Counter Trey Execution",
        imageUrl: "https://i.pinimg.com/originals/08/7f/c9/087fc9df108645cb5b35ee18a91cf5b2.jpg"
      },
      {
        title: "Counter Game Film",
        imageUrl: "https://i.ytimg.com/vi/Dj6n-Uvo93w/maxresdefault.jpg"
      }
    ],
    keyPoints: [
      "IDENTIFY MIKE LINEBACKER: First linebacker at 3-5 yard depth in the box playside",
      "Backside Guard pulls and kicks out the EMOL (end man on line of scrimmage)",
      "Second puller (Tackle or Wing) leads through hole to block Mike linebacker",
      "\"Wall-Street\" call: Wing pulls instead of Tackle, Tackle hinges to protect backside",
      "Center responsible for both backside A-gap and B-gap when no hinge call is made",
      "RB reads the first puller's block to determine path - inside kick-out or bounce outside"
    ],
    assignments: [
      { position: "PST (Play-Side Tackle)", assignment: "Block \"-1\" (backside linebacker) if no B-gap threat; otherwise handle B-gap defender" },
      { position: "PSG (Play-Side Guard)", assignment: "Block down on nearest defensive lineman, create running lane" },
      { position: "Center", assignment: "Responsible for backside A-gap and B-gap when no \"Wall-Street\" call is made" },
      { position: "BSG (Backside Guard)", assignment: "Pull to kick out C-gap/edge defender; LOG (get outside) if defender spills" },
      { position: "BST (Backside Tackle)", assignment: "Pull and lead through hole to block Mike LB unless \"Wall-Street\" is called" },
      { position: "TE/Wing", assignment: "If \"Wall-Street\" is called, pull instead of the Tackle and lead through hole" },
      { position: "RB", assignment: "Follow pullers, read first puller's block: cut inside if kick-out works, bounce if spilled" },
      { position: "QB", assignment: "Execute proper mesh with RB, carry out backside fake if required" }
    ],
    notes: "• Against a Tite or 4i front, defensive ends line up in 4i technique on the inside shoulder.\n• Play-side tackle \"pins\" the 4i defensive end inside to clear the B-gap.\n• The pulling Guard kicks out the edge defender (often an OLB or DB).\n• A pulling TE or H-back (second puller) leads through to block the inside linebacker(Mike).\n• Center and backside guard combine to double the nose, ensuring backside A-gap and B-gap are secured.\n• The RB must be patient and follow the pullers, making a decisive cut based on how the first puller's block develops.\n• Communication is critical - the \"Wall-Street\" call significantly changes blocking assignments on the backside."
  },
  "pr1": {
    id: "pr1",
    title: "Half-Slide Protection",
    description: "A hybrid protection scheme combining man blocking and zone slide principles to handle different rush patterns and provide maximum quarterback protection.",
    category: "Protection",
    scheme: "Half-Slide (Hybrid Protection)",
    formation: "Shotgun",
    personnel: "11 Personnel (1 RB, 1 TE)",
    imageUrl: "https://res.cloudinary.com/hslry6ksp/image/upload/v1610303417/pass-protection/half-slide-protection.jpg",
    diagrams: [
      {
        title: "Half-Slide vs. 4-3 Defense",
        imageUrl: "https://res.cloudinary.com/hslry6ksp/image/upload/v1610303417/pass-protection/half-slide-protection.jpg"
      },
      {
        title: "Half-Slide vs. Blitz",
        imageUrl: "https://i0.wp.com/matchquarters.com/wp-content/uploads/2016/10/slide.jpg"
      },
      {
        title: "Half-Slide Protection Rules",
        imageUrl: "https://i2.wp.com/matchquarters.com/wp-content/uploads/2016/10/LIZ-protections.jpg"
      },
      {
        title: "Half-Slide Game Film",
        imageUrl: "https://i.ytimg.com/vi/M3LIlvNsomg/maxresdefault.jpg"
      }
    ],
    keyPoints: [
      "Man side: OT, OG, and RB responsible for DE, DT, and first linebacker threat",
      "Slide side: Center, OG, and OT zone block to their assigned gap",
      "Protection call dictates the slide direction (Rip = right, Liz = left)",
      "RB checks inside gap first, then releases if no threat appears",
      "QB must know hot routes if protection is overloaded"
    ],
    assignments: [
      { position: "Man side OT", assignment: "Man block defensive end, handle any stunts or twists" },
      { position: "Man side OG", assignment: "Man block defensive tackle, communicate stunts with OT" },
      { position: "Center", assignment: "Start slide protection, responsible for A-gap to slide side" },
      { position: "Slide side OG", assignment: "Responsible for B-gap to slide side" },
      { position: "Slide side OT", assignment: "Responsible for C-gap to slide side" },
      { position: "RB", assignment: "Check man side A/B gap, then edge rusher, release to route if clear" },
      { position: "TE", assignment: "Chip defensive end on slide side before releasing to route if needed" },
      { position: "QB", assignment: "Set depth at 7-8 yards, know hot reads, step up into pocket when edge pressure comes" }
    ],
    notes: "Half-slide is our base pass protection. The most important rule is never let a free rusher come through the A-gap. Adjust depth and timing based on defensive front and tendencies. QB must identify Mike linebacker for proper protection calls. Watch for delayed blitzes and DB pressures that can defeat this protection scheme."
  },
  "pr2": {
    id: "pr2",
    title: "Max Protect",
    description: "Maximum protection scheme keeping 7-8 blockers in to protect the quarterback, designed for deep developing routes and against heavy blitz packages.",
    category: "Protection",
    scheme: "Max Protection",
    formation: "I-Formation",
    personnel: "21 Personnel (2 RB, 1 TE)",
    imageUrl: "https://qb-universe.com/wp-content/uploads/2023/01/maxprotection-768x530.jpg",
    diagrams: [
      {
        title: "Max Protect vs. Zone Blitz",
        imageUrl: "https://qb-universe.com/wp-content/uploads/2023/01/maxprotection-768x530.jpg"
      },
      {
        title: "Max Protect vs. Corner Blitz",
        imageUrl: "https://i.ytimg.com/vi/mYTljPNUxUY/maxresdefault.jpg"
      },
      {
        title: "7-Man Protection Rules",
        imageUrl: "https://i0.wp.com/matchquarters.com/wp-content/uploads/2017/05/BOB-PROTECTION-RULES.jpg"
      },
      {
        title: "Max Protect Game Film",
        imageUrl: "https://i.ytimg.com/vi/hsWVgxDkCJo/maxresdefault.jpg"
      }
    ],
    keyPoints: [
      "7-8 blockers stay in for protection (5 OL, FB, RB, and possibly TE)",
      "Only 2-3 receivers release into routes",
      "Designed for deep developing routes and shot plays",
      "Effective against heavy blitz packages (6+ rushers)",
      "FB and RB check inside first, then outside threats"
    ],
    assignments: [
      { position: "LT", assignment: "Man block defensive end, communicate with LG on stunts" },
      { position: "LG", assignment: "Man block defensive tackle, help Center if uncovered" },
      { position: "C", assignment: "ID Mike linebacker, block nose tackle or first inside threat" },
      { position: "RG", assignment: "Man block defensive tackle, help RT if uncovered" },
      { position: "RT", assignment: "Man block defensive end, communicate with RG on stunts" },
      { position: "TE", assignment: "Check-release: chip defensive end, then release if no edge pressure" },
      { position: "FB", assignment: "Block first threat from inside-out (MLB, then OLB/SS)" },
      { position: "RB", assignment: "Block opposite side of FB, inside-out read (Will LB, then CB/S blitz)" },
      { position: "QB", assignment: "Drop to proper depth (5-7 step), deliver ball with timing, climb pocket if edge pressure" }
    ],
    notes: "Max protection is ideal for deep shot plays and against heavy blitz teams. The downside is having only 2-3 receivers in routes. Communication between the line, backs, and quarterback is crucial. Pre-snap reads and adjustments are essential for this protection to be effective. QB must identify potential free rushers and have an escape plan."
  },
  "sc1": {
    id: "sc1",
    title: "HB Screen",
    description: "A misdirection passing play designed to combat aggressive pass rushes by allowing defenders to penetrate before releasing the ball to the running back with blockers in front.",
    category: "Screen",
    scheme: "Running Back Screen",
    formation: "Shotgun 3WR",
    personnel: "11 Personnel (1 RB, 1 TE)",
    imageUrl: "https://s3media.247sports.com/Uploads/Assets/721/788/10788721.jpg",
    diagrams: [
      {
        title: "HB Screen vs. 4-2-5 Defense",
        imageUrl: "https://s3media.247sports.com/Uploads/Assets/721/788/10788721.jpg"
      },
      {
        title: "Screen Setup and Timing",
        imageUrl: "https://i0.wp.com/matchquarters.com/wp-content/uploads/2018/04/1.jpg"
      },
      {
        title: "Screen Blocking Angles",
        imageUrl: "https://i.pinimg.com/originals/61/1e/75/611e751b8e0bb4f6a74b54c437fe9455.jpg"
      },
      {
        title: "Screen Game Film",
        imageUrl: "https://i.ytimg.com/vi/o5OYx1A0Y-Y/maxresdefault.jpg"
      }
    ],
    keyPoints: [
      "Offensive line invites rush, counts to 2, then releases to second level",
      "RB sells pass protection before slipping out to flat area",
      "QB opens away from screen, turns back to screen to sell misdirection",
      "Center, Guard, and Tackle form triangle of protection downfield",
      "Timing is crucial - throw must be delivered before pressure arrives"
    ],
    assignments: [
      { position: "QB", assignment: "Open away from screen, execute full turn, set feet and deliver accurate pass with touch" },
      { position: "RB", assignment: "Sell pass protection for 1.5 seconds, release to flat, catch pass, follow blockers downfield" },
      { position: "PST (Screen side)", assignment: "Allow defender upfield for 2 count, release to second level, block DB/LB" },
      { position: "PSG (Screen side)", assignment: "Allow rusher upfield, release to second level, block linebacker" },
      { position: "C", assignment: "Block down momentarily, release to lead screen, target middle defender" },
      { position: "BSG (Away from screen)", assignment: "Full protection on defensive lineman to sell pass" },
      { position: "BST (Away from screen)", assignment: "Full protection on defensive end to sell pass" },
      { position: "WRs (Screen side)", assignment: "Stalk block defensive backs, sustain blocks for at least 3 seconds" },
      { position: "TE", assignment: "Block defensive end or chip and release to flat as outlet if screen is disrupted" }
    ],
    notes: "The RB screen is most effective against aggressive pass rushes. Timing is everything - linemen must delay just long enough before releasing. The QB needs to sell the fake to the opposite side before coming back to the screen. Watch for defenders who recognize screen action and stay home. Counter screens work well when defenses start anticipating our base screen."
  },
  "sc2": {
    id: "sc2",
    title: "Bubble Screen",
    description: "A quick perimeter passing play that gets the ball quickly to a receiver on the outside with blockers ahead, designed to take advantage of soft coverage and create yards after catch.",
    category: "Screen",
    scheme: "Wide Receiver Bubble Screen",
    formation: "Trips Left",
    personnel: "10 Personnel (0 RB, 1 TE) or 11 Personnel (1 RB, 1 TE)",
    imageUrl: "https://i0.wp.com/chipwagleyfootball.com/wp-content/uploads/2018/01/Bubble-Screen.jpg",
    diagrams: [
      {
        title: "Bubble Screen from Trips Formation",
        imageUrl: "https://i0.wp.com/chipwagleyfootball.com/wp-content/uploads/2018/01/Bubble-Screen.jpg"
      },
      {
        title: "Bubble Screen vs. Man Coverage",
        imageUrl: "https://i.pinimg.com/originals/cc/fa/77/ccfa77d4b890b8d7349720a94b1277ef.jpg"
      },
      {
        title: "Bubble RPO Concept",
        imageUrl: "https://www.boomersdailypro.com/img/articles/rpo-screen-game-0.jpg"
      },
      {
        title: "Bubble Screen Game Film",
        imageUrl: "https://i.ytimg.com/vi/Z9NX8WRXYs4/maxresdefault.jpg"
      }
    ],
    keyPoints: [
      "Quick catch and throw - ball must come out in under 2 seconds",
      "Outside receivers responsible for stalk blocks on defensive backs",
      "Bubble receiver starts at depth, bubbles out and toward LOS to catch pass",
      "Can be packaged with run plays as RPO (Run-Pass Option)",
      "Effective against off coverage and when defense commits extra defenders to the box"
    ],
    assignments: [
      { position: "QB", assignment: "Quick three-step drop or catch and throw, deliver accurate pass at receiver's numbers" },
      { position: "Bubble WR (#3 receiver)", assignment: "Bubble path starting at 5yd depth, catch pass on the run, follow blocks upfield" },
      { position: "Outside WR (#1)", assignment: "Stalk block cornerback, drive him outside to create cutback lane" },
      { position: "Slot WR (#2)", assignment: "Block nearest defender (usually nickel back or rolled-up safety)" },
      { position: "Backside WRs", assignment: "Run off coverage with vertical stems or block for potential cutback" },
      { position: "OL", assignment: "Standard pass protection - quick set to sell pass" },
      { position: "RB", assignment: "Pass protection check, or attack opposite side if packaged as RPO" }
    ],
    notes: "Bubble screen works best against defenses playing off coverage or committing extra defenders to the box. Timing and blocking angles are critical to success. This can be packaged as an RPO with inside zone or other run plays. QB must read the appropriate defender (usually outside linebacker or nickel) to determine hand-off or bubble throw."
  }
};
