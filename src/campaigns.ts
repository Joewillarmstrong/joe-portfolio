export type Video = {
  id: string;
  label: string;
  aria: string;
  short?: boolean;
  poster?: string;
  posterZoom?: boolean;
  tone: "ink" | "green";
};

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
  videos: Video[];
  gallery?: { src: string; alt: string; pos?: string }[];
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
      "Sonder was a global priority for Universal, and I ran Dermot's international campaign with the UK and US teams for two years. It opened in Europe with top 10 radio in Germany and France and his first major French TV slot on Taratata, then took the album to the top 20 in Australia, Germany and France, top 10 in the US, and to number one in the UK.",
      "When a support slot on a Shawn Mendes world tour fell through, we built a global busking tour instead. I ran it as campaign manager: finding and securing locations, announcing each show 24 hours out on Dermot's socials, and live-streaming every set on his channels.",
      "The campaign saw Dermot debut with shows and press in South Korea, Singapore, the Philippines and Malaysia, introducing him to a global audience.",
    ],
    videos: [
      { id: "XLZ22R75CmA", label: "Watch: Taratata, France", aria: "Play Dermot Kennedy on Taratata", tone: "ink", poster: "thumb-taratata.jpg" },
      { id: "o8uYw1IFGJM", label: "Watch: the Cologne busk", aria: "Play Dermot Kennedy in Cologne", tone: "ink", poster: "cologne-busk-crowd.jpg" },
    ],
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
      "“If We Ever Broke Up” was the debut single from 2023 breakout artist Mae Stephens. The track had gone viral through a major TikTok trend and our plan was to build out from this success. We built a huge radio campaign that saw the track secure #1 on the airplay charts in France and Germany. The single then caught a second wave in Asia after it went viral for the second time in Japan. We capitalised quickly, getting Mae to lean into the trend and allocating budget to continue its trajectory.",
      "Mae quickly became the highest streaming UMG artist globally (outperforming Taylor Swift) for two weeks and the single went on to surpass half a billion streams.",
    ],
    videos: [
      { id: "vjEDjNFCSeg", label: "Watch: the Japan dance trend", aria: "Play the Japan dance trend", tone: "green", short: true },
    ],
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
      "I discovered Devon through UMG's own distribution platform Spinnup. We signed him based on my recommendation, I then worked his campaign as one of a team of two.",
      "From there the job was building an artist project from the ground up. Defining his identity, introducing him to tastemakers and honing his live skills. This project saw us secure Devon's first support on Spotify, Apple and Deezer, with key inclusions in The Indie List. We also gained a BBC Radio 1 debut and an interview on Jack Saunders' Indie Show. This support snowballed and before long Devon was making TV appearances, playing headline shows and supporting UK juggernauts McFly.",
    ],
    videos: [
      { id: "BcNrzbS62ts", label: "Watch: Belong 2 U", aria: "Play Devon, Belong 2 U", tone: "ink", poster: "thumb-devon.jpg", posterZoom: true },
    ],
    gallery: [
      { src: "devon-set-1.webp", alt: "Devon on set during a photo shoot, sitting on the studio floor with a mirrored guitar", pos: "center 60%" },
      { src: "devon-set-2.webp", alt: "Behind the scenes of a Devon music video, seen on the camera monitor", pos: "center" },
      { src: "devon-set-3.webp", alt: "Devon standing with a mirrored guitar, seen on a camera monitor on set", pos: "center 55%" },
    ],
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
      { big: "TV Series", label: "Directed by Danny Boyle" },
      { big: "International Promo", label: "With Steve Jones" },
      { big: "20 Track", label: "Original Recordings album" },
    ],
    meta: "Universal Music International, 2022",
    heading: "Album campaign for Sex Pistols",
    paras: [
      "In 2022 I was lucky enough to work with British rock royalty, the Sex Pistols. The campaign was built around the release of the Danny Boyle directed Disney+ series Pistol, based on Steve Jones's memoir. As it was being released on a major streamer, the series would be global from the get go. To run alongside the series we released a 20 track album of original recordings from the show, showcasing the Pistols' iconic catalogue.",
      "I worked very closely with Steve and the band's management to promote both the album and series internationally, securing key promo in Europe and the US with publications like Rolling Stone. It was an incredible campaign and an honour to work with a true music legend.",
    ],
    videos: [
      { id: "-QtyfPxkBqs", label: "Watch: the Pistol trailer", aria: "Play the Pistol trailer", tone: "green", poster: "thumb-pistols.jpg" },
    ],
    roles: [
      "International album campaign",
      "Working closely with Steve Jones",
      "Radio, press and promo",
      "Timed to the Pistol series launch",
    ],
  },
];
