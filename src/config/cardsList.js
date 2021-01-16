const cardsListSaved = [
  {
    id: 1,
    source: {
      name: "CNBC"
    },
    author: "Sam Meredith",
    title: "Dr. bitcoin? Goldman says cryptocurrency's meteoric rise is tracking a key proxy for global growth",
    description: "Bitcoin and copper prices have both been on a tear for most of this year, hitting record-highs amid the ongoing coronavirus pandemic.",
    url: "https://www.cnbc.com/2020/12/18/goldman-says-bitcoin-is-tracking-copper-a-key-proxy-for-global-growth.html",
    urlToImage: "https://image.cnbcfm.com/api/v1/image/106813393-1608295146105-gettyimages-1227965355-economou-notitle200808_npkev.jpeg?v=1608295338",
    publishedAt: "2020-01-18T12:43:30Z",
    content: "Analysts at Goldman Sachs have identified a surprisingly similar trend between the world's most valuable virtual currency and a base metal with a reputation as a barometer for the global economy.\r\nBi… [+2783 chars]"
  },
  {
    id: 2,
    source: {
      name: "IT World Canada"
    },
    author: "Alex Coop",
    title: "Hashtag Trending – Anger over big tech’s success during the pandemic; Bitcoin exceeds $23K; Alibaba helped clients identify Uighur people",
    description: "Anger flourishes over big tech profits while workers are laid off, the Bitcoin hype train sends the cryptocurrency’s value to $20K, and a new report suggests that Alibaba sold software to clients that helped identify the face of a Uighur person.\nThe post Hash…",
    url: "https://www.itworldcanada.com/article/hashtag-trending-anger-over-big-techs-success-during-the-pandemic-bitcoin-exceeds-23k-alibaba-helped-clients-identify-uighur-people/439837",
    urlToImage: "https://i.itworldcanada.com/wp-content/uploads/2017/07/ht_3000X1668-e1501855285944.jpg",
    publishedAt: "2020-12-18T12:42:12Z",
    content: "Anger flourishes over the massive profits made by large enterprises while workers are laid off, the Bitcoin hype train sends the cryptocurrencys value to $23,000, and a new report suggests that Chine… [+2961 chars]"
  },
  {
    id: 3,
    source: {
      name: "Investmentwatchblog.com"
    },
    author: "alexmark",
    title: "Fed Will Lose Control of Inflation",
    description: null,
    url: "https://www.investmentwatchblog.com/fed-will-lose-control-of-inflation/",
    urlToImage: null,
    publishedAt: "2020-2-18T12:39:44Z",
    content: "Lyn Alden on Palisades Gold Radio\r\nTom welcomes Lyn Alden, Financial Newsletter Editor &amp; Publisher, back to the program.\r\nLyn discusses this economic downturn. Weve seen a rebound in some asset c… [+2166 chars]"
  },
  {
    id: 4,
    source: {
      name: "Cointelegraph"
    },
    author: "Cointelegraph By Osato Avan-Nomayo",
    title: "Bitcoin adoption in Nigeria soars as central bank blocks remittances in Naira",
    description: "The Central Bank of Nigeria’s “Naira defense” policy is pushing more Nigerians towards Bitcoin and crypto adoption.",
    url: "https://cointelegraph.com/news/bitcoin-adoption-in-nigeria-soars-as-central-bank-blocks-remittances-in-naira",
    urlToImage: "https://s3.cointelegraph.com/uploads/2020-12/1b0406af-01e1-44f2-b36b-d1370a7ea9f6.jpg",
    publishedAt: "2020-08-18T12:31:29Z",
    content: "Peer-to-peer (P2P) Bitcoin (BTC) volume in Nigeria continues to rise as Africas largest economy remains a bastion for crypto adoption. According to Quartz Africa, data from the Bitcoin P2P marketplac… [+2238 chars]"
  },
  {
    id: 5,
    source: {
      name: "newsBTC"
    },
    author: "Yashu Gola",
    title: "Bitcoin Hints Extended Bullish Momentum as Stimulus Talks Drag On",
    description: "Bitcoin hovered between gains and losses as traders waited for further clues from the US Congressional leaders on their next coronavirus aid package. The benchmark cryptocurrency jumped 0.07 percent to $22,843, suggesting it would consolidate sideways after n…",
    url: "https://www.newsbtc.com/news/bitcoin/bitcoin-hints-extended-bullish-momentum-as-stimulus-talks-drag-on/",
    urlToImage: "https://www.newsbtc.com/wp-content/uploads/2020/12/Depositphotos_222364888_s-2019.jpg",
    publishedAt: "2020-12-18T12:30:07Z",
    content: "Bitcoin hovered between gains and losses as traders waited for further clues from the US Congressional leaders on their next coronavirus aid package.\r\nThe benchmark cryptocurrency jumped 0.07 percent… [+2131 chars]"
  },
  {
    id: 6,
    source: {
      name: "Cointelegraph"
    },
    author: "Cointelegraph By William Suberg",
    title: "What Bitcoin all-time high? These 3 charts prove new retail buyers aren't here yet",
    description: "Twitter, Wikipedia and even Google search activity points to a world totally unaware about the best macro asset available to anyone.",
    url: "https://cointelegraph.com/news/what-bitcoin-all-time-high-these-3-charts-prove-new-retail-buyers-aren-t-here-yet",
    urlToImage: "https://s3.cointelegraph.com/uploads/2020-12/4a8c68e6-f3ec-4556-b59b-6417a434e6e5.jpg",
    publishedAt: "2020-12-18T12:30:00Z",
    content: "Bitcoin (BTC) has gained 30% in a week and topped out at $23,777 on Dec. 16 but hardly anyone in the world knows yet, data suggests.\r\nAccording to charts tracking public awareness of what Bitcoin has… [+3036 chars]"
  },
  {
    id: 7,
    source: {
      name: "The Week Magazine"
    },
    author: "Harold Maass",
    title: "The daily business briefing: December 18, 2020",
    description: "1. A Food and Drug Administration advisory panel on Thursday recommended authorizing emergency use of Moderna's coronavirus vaccine. The 20-0 vote, with one abstention, cleared the way for FDA approval, which is expected on Friday. Moderna's late-phase trials…",
    url: "https://theweek.com/business-briefing/955979/daily-business-briefing-december-18-2020",
    urlToImage: "https://images.theweek.com/sites/default/files/styles/tw_image_9_4/public/gettyimages-1229653935_0.jpg?itok=ZMI3uQpA",
    publishedAt: "2020-12-18T12:28:00Z",
    content: "The number of Americans making initial jobless claims rose to 885,000 last week from 862,000 the week before, the Labor Department reported Thursday. The latest figure was the highest weekly total si… [+655 chars]"
  },
  // {
  //   id: 8,
  //   source: {
  //     name: "newsBTC"
  //   },
  //   author: "Guest Author",
  //   title: "How Tosdis.Finance Is Transforming DeFi Into a Scalable Service Solution",
  //   description: "Every few years since the advent of Bitcoin, the cryptocurrency and blockchain industry sees a groundbreaking innovation that creates new subsections that promise to reach the level of impact and penetration as the asset class is having elsewhere in the great…",
  //   url: "https://www.newsbtc.com/news/company/how-tosdis-finance-is-transforming-defi-into-a-scalable-service-solution/",
  //   urlToImage: "https://www.newsbtc.com/wp-content/uploads/2020/12/2020-12-16-15.07.03.jpg",
  //   publishedAt: "2020-12-18T12:12:34Z",
  //   content: "Every few years since the advent of Bitcoin, the cryptocurrency and blockchain industry sees a groundbreaking innovation that creates new subsections that promise to reach the level of impact and pen… [+2958 chars]"
  // },
  // {
  //   id: 9,
  //   source: {
  //     name: "Crossingwallstreet.com"
  //   },
  //   author: "Eddy Elfenbein",
  //   title: "CWS Market Review – December 18, 2020",
  //   description: "“See, the stock market only deals in facts, in reality, in reason, and the stock market is never wrong. Traders are wrong.” – Jesse Livermore […]",
  //   url: "http://www.crossingwallstreet.com/archives/2020/12/cws-market-review-december-18-2020.html",
  //   urlToImage: null,
  //   publishedAt: "2020-12-18T12:08:48Z",
  //   content: "CWS Market Review – December 18, 2020\r\nSee, the stock market only deals in facts, in reality, in reason, and the stock market is never wrong. Traders are wrong. Jesse Livermore\r\nBefore I begin, let m… [+9458 chars]"
  // },
  // {
  //   id: 10,
  //   source: {
  //     name: "Seeking Alpha"
  //   },
  //   author: "Wall Street Breakfast",
  //   title: "Wall Street Breakfast: Tesla Makes Grand Entrance Into S&P 500",
  //   description: "Listen on the go! A daily podcast of Wall Street Breakfast will be available by 8:00 a.m. on Seeking Alpha, iTunes, Stitcher and Spotify.",
  //   url: "https://seekingalpha.com/article/4395322-wall-street-breakfast-tesla-makes-grand-entrance-s-and-p-500",
  //   urlToImage: "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
  //   publishedAt: "2020-12-18T12:08:22Z",
  //   content: "The bulls and the bears\r\nBulls view Tesla (TSLA) CEO Elon Musk as a visionary that can push the company's disruptive technology ahead of its competitors. They also see Tesla posting above-average gai… [+5864 chars]"
  // },
  // {
  //   id: 11,
  //   source: {
  //     name: "CoinDesk"
  //   },
  //   author: "Nangeng Zhang",
  //   title: "Beyond ASICs: 3 Trends Driving Bitcoin Mining Innovation",
  //   description: "The bitcoin mining industry needs more than a market rally to survive – it needs to find answers to its environmental and geographical threats.",
  //   url: "https://www.coindesk.com/3-trends-driving-bitcoin-mining-innovation",
  //   urlToImage: "https://static.coindesk.com/wp-content/uploads/2020/12/nangeng-zhang-1200x628.png",
  //   publishedAt: "2020-12-18T12:06:47Z",
  //   content: "From the Bitcoin halving in May to the ongoing price rally today, bitcoin has certainly seen its fair share of ups and downs in 2020. Even as the price of bitcoin sets new highs above those of 2017, … [+7312 chars]"
  // },
  // {
  //   id: 12,
  //   source: {
  //     name: "City A.M."
  //   },
  //   author: "Bridie Wilson",
  //   title: "London-based cryptocurrency exchange CEX.IO celebrates seven years of innovation and growth",
  //   description: "2013 was the year Bitcoin came of age as an investment vehicle. At the start of 2013 the digital currency\nThe post London-based cryptocurrency exchange CEX.IO celebrates seven years of innovation and growth appeared first on CityAM.",
  //   url: "https://www.cityam.com/london-based-cryptocurrency-exchange-cex-io-celebrates-seven-years-of-innovation-and-growth/",
  //   urlToImage: "https://www.cityam.com/wp-content/uploads/2020/12/image0.png",
  //   publishedAt: "2020-12-18T11:59:41Z",
  //   content: "2013 was the year Bitcoin came of age as an investment vehicle. At the start of 2013 the digital currency was trading at around $13.50 per Bitcoin. By the end of November 2013, Bitcoin was trading at… [+6252 chars]"
  // },
  // {
  //   id: 13,
  //   source: {
  //     name: "Business Standard"
  //   },
  //   author: "BS Web Team",
  //   title: "Market Wrap, Dec 18: Here's all that happened in the markets today",
  //   description: "BSE Sensex hit a record high of 47,026 in the opening deals but erased gains on sell-off in large private banks, metals and realty stocks",
  //   url: "https://www.business-standard.com/podcast/markets/market-wrap-dec-18-here-s-all-that-happened-in-the-markets-today-120121800923_1.html",
  //   urlToImage: "https://bsmedia.business-standard.com/_media/bs/img/misc/2020-12/17/full/markets-stocks-rally-market-rally-stock-rise-1608187822-20692620.jpg",
  //   publishedAt: "2020-12-18T11:45:00Z",
  //   content: "Last hour buying in pharmaceutical, select financials and IT stocks lifted indices to yet another closing peak on Friday, even as weak global sentiment weighed on investors.\r\nThe benchmark S&amp;P BS… [+3717 chars]"
  // },
  // {
  //   id: 14,
  //   source: {
  //     name: "CoinDesk"
  //   },
  //   author: "Ian Allison",
  //   title: "Self-Hosted Bitcoin Wallets Become Front Line in Fight Over Crypto Regulations",
  //   description: "The steady creep of know-your-customer (KYC) requirements over firms that touch digital assets is now at the foot of self-hosted wallets.",
  //   url: "https://www.coindesk.com/index.php?p=556609",
  //   urlToImage: "https://static.coindesk.com/wp-content/uploads/2020/12/praveen-kumar-mathivanan-f-N9JQR9Er4-unsplash-1200x628.jpg",
  //   publishedAt: "2020-12-18T11:34:24Z",
  //   content: "The Takeaway:\r\n<ul><li>Blockchain analytics companies tend to flag funds moving to and from private crypto wallets, with self-custody said to be the next fault line for crypto regulations.</li><li>On… [+10579 chars]"
  // },
];

const cardsListSearch = [
  {
    id: 10,
    source: {
      name: "Seeking Alpha"
    },
    owner: "Greta",
    author: "Wall Street Breakfast",
    title: "Wall Street Breakfast: Tesla Makes Grand Entrance Into S&P 500",
    description: "Listen on the go! A daily podcast of Wall Street Breakfast will be available by 8:00 a.m. on Seeking Alpha, iTunes, Stitcher and Spotify.",
    url: "https://seekingalpha.com/article/4395322-wall-street-breakfast-tesla-makes-grand-entrance-s-and-p-500",
    urlToImage: "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
    publishedAt: "2020-12-18T12:08:22Z",
    content: "The bulls and the bears\r\nBulls view Tesla (TSLA) CEO Elon Musk as a visionary that can push the company's disruptive technology ahead of its competitors. They also see Tesla posting above-average gai… [+5864 chars]"
  },
  {
    id: 11,
    source: {
      name: "CoinDesk"
    },
    author: "Nangeng Zhang",
    title: "Beyond ASICs: 3 Trends Driving Bitcoin Mining Innovation",
    description: "The bitcoin mining industry needs more than a market rally to survive – it needs to find answers to its environmental and geographical threats.",
    url: "https://www.coindesk.com/3-trends-driving-bitcoin-mining-innovation",
    urlToImage: "https://static.coindesk.com/wp-content/uploads/2020/12/nangeng-zhang-1200x628.png",
    publishedAt: "2020-12-18T12:06:47Z",
    content: "From the Bitcoin halving in May to the ongoing price rally today, bitcoin has certainly seen its fair share of ups and downs in 2020. Even as the price of bitcoin sets new highs above those of 2017, … [+7312 chars]"
  },
  {
    id: 12,
    source: {
      name: "City A.M."
    },
    author: "Bridie Wilson",
    title: "London-based cryptocurrency exchange CEX.IO celebrates seven years of innovation and growth",
    description: "2013 was the year Bitcoin came of age as an investment vehicle. At the start of 2013 the digital currency\nThe post London-based cryptocurrency exchange CEX.IO celebrates seven years of innovation and growth appeared first on CityAM.",
    url: "https://www.cityam.com/london-based-cryptocurrency-exchange-cex-io-celebrates-seven-years-of-innovation-and-growth/",
    urlToImage: "https://www.cityam.com/wp-content/uploads/2020/12/image0.png",
    publishedAt: "2020-12-18T11:59:41Z",
    content: "2013 was the year Bitcoin came of age as an investment vehicle. At the start of 2013 the digital currency was trading at around $13.50 per Bitcoin. By the end of November 2013, Bitcoin was trading at… [+6252 chars]"
  },
  {
    id: 13,
    source: {
      name: "Business Standard"
    },
    author: "BS Web Team",
    title: "Market Wrap, Dec 18: Here's all that happened in the markets today",
    description: "BSE Sensex hit a record high of 47,026 in the opening deals but erased gains on sell-off in large private banks, metals and realty stocks",
    url: "https://www.business-standard.com/podcast/markets/market-wrap-dec-18-here-s-all-that-happened-in-the-markets-today-120121800923_1.html",
    urlToImage: "https://bsmedia.business-standard.com/_media/bs/img/misc/2020-12/17/full/markets-stocks-rally-market-rally-stock-rise-1608187822-20692620.jpg",
    publishedAt: "2020-12-18T11:45:00Z",
    content: "Last hour buying in pharmaceutical, select financials and IT stocks lifted indices to yet another closing peak on Friday, even as weak global sentiment weighed on investors.\r\nThe benchmark S&amp;P BS… [+3717 chars]"
  },
  {
    id: 14,
    source: {
      name: "CoinDesk"
    },
    author: "Ian Allison",
    title: "Self-Hosted Bitcoin Wallets Become Front Line in Fight Over Crypto Regulations",
    description: "The steady creep of know-your-customer (KYC) requirements over firms that touch digital assets is now at the foot of self-hosted wallets.",
    url: "https://www.coindesk.com/index.php?p=556609",
    urlToImage: "https://static.coindesk.com/wp-content/uploads/2020/12/praveen-kumar-mathivanan-f-N9JQR9Er4-unsplash-1200x628.jpg",
    publishedAt: "2020-12-18T11:34:24Z",
    content: "The Takeaway:\r\n<ul><li>Blockchain analytics companies tend to flag funds moving to and from private crypto wallets, with self-custody said to be the next fault line for crypto regulations.</li><li>On… [+10579 chars]"
  },
]

export { cardsListSaved, cardsListSearch };
