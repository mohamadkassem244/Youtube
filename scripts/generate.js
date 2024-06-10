const videos = [
  {
    title:
      "Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids",
    channel: "WB Kids",
    views: "485M",
    date: "1 years ago",
    image: "https://i.ytimg.com/vi/t0Q2otsqC4I/maxresdefault.jpg",
    time: "21:38",
    channelImage:
      "https://yt3.ggpht.com/rPoRRDAbbFQpeqCZFdndLgMRCm6KGS90QD0x7PlYaHoSXVG74ASmPwY8n3I1GVqD1lr8cIhKfA=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    title:
      "Focus Music for Work and Studying, Background Music for Concentration, Study Music",
    channel: "Greenred Productions",
    views: "43M",
    date: "3 years ago",
    image:
      "https://th.bing.com/th/id/R.0c3771cf804bea5be6aadc4af92ddcca?rik=vBxH9Q4gPLbV1g&pid=ImgRaw&r=0",
    time: "9:08:53",
    channelImage:
      "https://yt3.ggpht.com/vQFY_kSTGXuwpjejxrjSXIiM3xLVnbxtyY3nZ5gzb059ENNrXF3e8w1315uPgCeEmIFV7gsB=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    title: "I Gave My 100,000,000th Subscriber An Island",
    channel: "MrBeast",
    views: "179M",
    date: "2 years ago",
    image: "https://i.ytimg.com/vi/2isYuQZMbdU/maxresdefault.jpg",
    time: "15:30",
    channelImage:
      "https://yt3.ggpht.com/ytc/APkrFKY455xp16s2AIHalRjK60zas-DitxAHmRjQsXPE2A=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    title: "iPhone 15 Pro Review: The Good, The Bad, & The Ugly!",
    channel: "Marques Brownlee",
    views: "5.79M",
    date: "4 days ago",
    image: "https://i.ytimg.com/vi/cBpGq-vDr2Y/maxresdefault.jpg",
    time: "42:49",
    channelImage:
      "https://yt3.ggpht.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    title: "Aquaman and the Lost Kingdom | Trailer",
    channel: "DC",
    views: "14M",
    date: "2 weeks ago",
    image: "https://i.ytimg.com/vi/FV3bqvOHRQo/maxresdefault.jpg",
    time: "2:46",
    channelImage:
      "https://yt3.ggpht.com/ytc/APkrFKboOY7FNjHAd7XlU5KKDxs9JS9JdeF_XkhCe7xacOU=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    title: "Olivia Rodrigo - get him back! (Official Video)",
    channel: "Olivia Rodrigo",
    views: "11M",
    date: "3 weeks ago",
    image: "https://i.ytimg.com/vi/ZsJ-BHohXRI/mqdefault.jpg",
    time: "3:30",
    channelImage:
      "https://yt3.ggpht.com/BXdOiG16ffzn4VICe5fqzorNN2D9BapjgunaiZwLsZNeb4H9zflSSpvElpP_u6ZJ7jROheRI=s48-c-k-c0x00ffffff-no-nd-rj",
  },
  {
    title: "1470HP Bugatti Veyron | Forza Horizon 5 | Logitech g29 gameplay",
    channel: "SRT Style",
    views: "5M",
    date: "7 months ago",
    image: "https://i.ytimg.com/vi/SPgixVcfiCE/maxresdefault.jpg",
    time: "11:19",
    channelImage:
      "https://yt3.ggpht.com/ytc/APkrFKYEQF6gsVF5E9fbOS_7lPDgooEZ3__D2z9A5RQVVQ=s48-c-k-c0x00ffffff-no-rj",
  },
];

const shorts = [
  {
    image: "https://i.ytimg.com/vi/WzGhEEr8Z9I/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLARG7FcUnNzDhdK4VzLEhls7ZM3Ww",
    title: "This Rubik's cube design is so cool (@caracubo)",
    views: "3.3M",
  },
  {
    image: "https://i.ytimg.com/vi/m0pZQeqDMco/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBFMWoXh3MqvDtJ650uifPdM0XADg",
    title : "Samsung Galaxy A56 - 2024",
    views: "1.6M"
  },
  {
    image: "https://i.ytimg.com/vi/fgWV-EOzLGs/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCs4CBW5zfceIqK-Hk-G8f_pfz9OA",
    title : "Software Engineer Expectation 🧑‍💻 vs Reality 😂",
    views: "4.2M"
  },
  {
    image: "https://i.ytimg.com/vi/W5731a3eq2k/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDLz97H4plm_bejZaYaZUXFE0ysSw",
    title : "When a steroid met a natural 🥶",
    views: "4.4M"
  },
  {
    image: "https://i.ytimg.com/vi/bBgiG-6eX2k/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAqkTQtTvkZ6VIW0pDfqi4I0n84Zg",
    title : "Nokia 7610 5G",
    views: "51M"
  }

];

const videos_container = $(".content__all__videos");
videos_container.empty();
videos.forEach((video) => {
  const item = $("<div>").addClass("content__all__videos__item");
  item.html(`
        <a href="#" class="content__all__videos__item__top">
                        <img src="${video.image}" alt="">
                        <div class="content__all__videos__item__top__time">${video.time}</div>
                    </a>
                    <div class="content__all__videos__item__bottom">
                        <a href="#" class="content__all__videos__item__bottom__channelimage">
                            <img src="${video.channelImage}" alt="">
                        </a>
                        <div class="content__all__videos__item__bottom__info">
                           <a href="#" class="content__all__videos__item__bottom__info__title">${video.title}</a>
                           <a href="#" class="content__all__videos__item__bottom__info__channelname">${video.channel} <i class="fa-solid fa-circle-check"></i></a>
                           <div class="content__all__videos__item__bottom__info__viewsdate">${video.views} views • ${video.date} </div>
                        </div>
                        <div class="content__all__videos__item__bottom__option">
                            <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
                        </div>
                    </div>
    `);
  videos_container.append(item);
});

const shorts_container = $(".content__all__shorts");
shorts_container.empty();
shorts.forEach((short) => {
  const item = $("<div>").addClass("content__all__shorts__item");
  item.html(`
        <div class="content__all__shorts__item__top">
            <img src="${short.image}" alt="">
        </div>
        <div class="content__all__shorts__item__bottom">
            <div class="content__all__shorts__item__bottom__info">
                <a href="#" class="content__all__shorts__item__bottom__info__title">
                ${short.title}
                </a>
                <div class="content__all__shorts__item__bottom__info__views">${short.views} views</div>
            </div>
            <div class="content__all__shorts__item__bottom__option">
                <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
             </div>
        </div>
    `);
  shorts_container.append(item);
});
