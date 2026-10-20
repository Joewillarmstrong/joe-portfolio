export type Campaign = {
  id: string;
  title: string;
  sub: string;
  img: string;
  alt: string;
  pos: string;
  stats: { big: string; label: string }[];
  meta: string;
  heading: string;
  paras: string[];
  videoId: string;
  videoLabel: string;
  videoAria: string;
  short?: boolean;
  poster?: string;
  posterZoom?: boolean;
  tone: "ink" | "green";
  roles: string[];
};

export const campaigns: Campaign[] = [
  {
    id: "dermot",
    title: "Dermot Kennedy",
    sub: "Album campaign, 2021 to 2023",
    img: "press-dermot.webp",
    alt: "Dermot Kennedy press shot",
    pos: "center 28%",
    stats: [
      { big: "No.1", label: "UK album chart" },
      { big: "24hrs", label: "Notice on every busking show" },
      { big: "$100K", label: "Raised for charity on the tour" },
    ],
    meta: "Universal Music International, 2021 to 2023",
    heading: "Album campaign for Dermot Kennedy",
    paras: [
      "Sonder was a global priority for Universal, and I ran Dermot's international campaign with the UK and US teams for two years. It opened in Europe with top 10 radio in Germany and France and his first major French TV slot on Taratata, then took the album top 10 in Australia, Germany, France and the US, and to number one in the UK.",
      "When a support slot on a Shawn Mendes world tour fell through, we built a global busking tour instead. I ran it as campaign manager: finding and securing locations, announcing each show 24 hours out on Dermot's socials, and live-streaming every set on his channels.",
    ],
    videoId: "o8uYw1IFGJM",
    videoLabel: "Watch: the Cologne busk",
    videoAria: "Play Dermot Kennedy in Cologne",
    poster: "cologne-busk-crowd.jpg",
    tone: "ink",
    roles: [
      "International campaign with UK and US teams",
      "Busking tour: locations, logistics, promo",
      "Live-streaming every show",
      "Market-by-market reporting",
    ],
  },
  {
    id: "mae",
    title: "Mae Stephens",
    sub: "Global breakthrough, 2023",
    img: "press-mae.jpg",
    alt: "Mae Stephens press shot",
    pos: "center 35%",
    stats: [
      { big: "No.1", label: "Radio in Germany and France" },
      { big: "2 weeks", label: "Above a Taylor Swift single on Universal's global chart" },
      { big: "Nominated", label: "TikTok Trend Awards, Music" },
    ],
    meta: "Universal Music International, 2023",
    heading: "Global breakthrough for Mae Stephens",
    paras: [
      "“If We Ever Broke Up” went viral on TikTok in Europe and the US first. Three or four months later, my Friday market-by-market report picked up a second wave building in Asia.",
      "We moved campaign spend into Japan, China and the Philippines. In Japan, influencers had built a dance trend around the song, and we got Mae to join in herself. She went on promo in Japan and across Europe, the song reached number one on radio in Germany and France, and for two weeks it outranked a Taylor Swift single on Universal's internal global chart.",
    ],
    videoId: "vjEDjNFCSeg",
    videoLabel: "Watch: the Japan dance trend",
    videoAria: "Play the Japan dance trend",
    short: true,
    tone: "green",
    roles: [
      "Friday report across every market",
      "Spend shift into Asia",
      "Creator and influencer activity in Japan",
      "Promo trips, Japan and Europe",
    ],
  },
  {
    id: "devon",
    title: "Devon",
    sub: "Artist development, 2018 to 2020",
    img: "press-devon.jpg",
    alt: "Devon press shot",
    pos: "center 30%",
    stats: [
      { big: "Radio 1", label: "First play, then a Jack Saunders interview" },
      { big: "Indie List", label: "Spotify editorial playlist" },
      { big: "McFly", label: "Tour support slot" },
    ],
    meta: "Universal Music On Demand, 2018 to 2020",
    heading: "Artist development for Devon",
    paras: [
      "I found Devon in the streaming data on Spinnup, Universal's distribution platform for independent artists. I brought him to the company, recommended signing him, then worked his campaign as one of a team of two.",
      "From there the job was getting him heard. Playlist pitches put him on Spotify's The Indie List, I worked with a radio plugger on his first BBC Radio 1 play, and he followed it with an on-air interview with Jack Saunders. I was on set for his music videos and worked alongside his PR team. He went on to play festivals and support McFly on tour.",
    ],
    videoId: "BcNrzbS62ts",
    videoLabel: "Watch: Belong 2 U",
    videoAria: "Play Devon, Belong 2 U",
    poster: "thumb-devon.jpg",
    posterZoom: true,
    tone: "ink",
    roles: [
      "Found the artist and recommended the signing",
      "Spotify playlist pitching",
      "Radio plugging, BBC Radio 1",
      "Music video shoots and PR",
    ],
  },
  {
    id: "pistols",
    title: "Sex Pistols",
    sub: "Album campaign, 2022",
    img: "press-pistols.jpg",
    alt: "The Original Recordings album cover",
    pos: "center",
    stats: [
      { big: "20 tracks", label: "The Original Recordings, 2022" },
      { big: "Pistol", label: "Danny Boyle series, May 2022" },
      { big: "Steve Jones", label: "Worked with him on the promo" },
    ],
    meta: "Universal Music International, 2022",
    heading: "Album campaign for Sex Pistols",
    paras: [
      "The Original Recordings is a 20-track Sex Pistols collection, released just ahead of Pistol, Danny Boyle's 2022 series about the band, which is based on guitarist Steve Jones's memoir.",
      "My job was to promote the album internationally ahead of the series. I worked very closely with Steve Jones, securing radio, press and promo.",
    ],
    videoId: "-QtyfPxkBqs",
    videoLabel: "Watch: the Pistol trailer",
    videoAria: "Play the Pistol trailer",
    poster: "thumb-pistols.jpg",
    tone: "green",
    roles: [
      "International album campaign",
      "Working closely with Steve Jones",
      "Radio, press and promo",
      "Timed to the Pistol series launch",
    ],
  },
];
