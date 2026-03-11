const libraryData = {
    novels: [
        {
            id: 1,
            title: "三体",
            author: "刘慈欣",
            status: "已完结",
            tags: ["科幻", "硬科幻", "中国"],
            icon: "🌌",
            description: "地球文明与三体文明的生死搏杀"
        },
        {
            id: 2,
            title: "活着",
            author: "余华",
            status: "已完结",
            tags: ["文学", "现实", "中国"],
            icon: "📖",
            description: "一个人一生的故事"
        },
        {
            id: 3,
            title: "百年孤独",
            author: "加西亚·马尔克斯",
            status: "已完结",
            tags: ["文学", "魔幻现实主义", "经典"],
            icon: "📚",
            description: "布恩迪亚家族七代人的传奇"
        }
    ],
    
    comics: [
        {
            id: 1,
            title: "进击的巨人",
            author: "谏山创",
            status: "已完结",
            tags: ["少年", "热血", "悬疑"],
            icon: "⚔️",
            description: "人类与巨人的百年战争"
        },
        {
            id: 2,
            title: "海贼王",
            author: "尾田荣一郎",
            status: "连载中",
            tags: ["少年", "冒险", "热血"],
            icon: "🏴‍☠️",
            description: "寻找 ONE PIECE 的伟大航路"
        },
        {
            id: 3,
            title: "咒术回战",
            author: "芥见下下",
            status: "连载中",
            tags: ["少年", "奇幻", "战斗"],
            icon: "👻",
            description: "咒术师与咒灵的战斗"
        }
    ],
    
    anime: [
        {
            id: 1,
            title: "进击的巨人",
            studio: "WIT Studio / MAPPA",
            year: 2013,
            episodes: 87,
            status: "已完结",
            tags: ["热血", "悬疑", "战争"],
            icon: "⚔️",
            description: "人类最后的自由之战"
        },
        {
            id: 2,
            title: "鬼灭之刃",
            studio: "ufotable",
            year: 2019,
            episodes: 44,
            status: "连载中",
            tags: ["热血", "奇幻", "战斗"],
            icon: "⚔️",
            description: "少年猎鬼人的成长之路"
        },
        {
            id: 3,
            title: "间谍过家家",
            studio: "WIT Studio / CloverWorks",
            year: 2022,
            episodes: 37,
            status: "连载中",
            tags: ["喜剧", "家庭", "日常"],
            icon: "👨‍👩‍👧",
            description: "间谍、杀手、读心者组成的假家庭"
        }
    ]
};

function getStats() {
    return {
        novels: libraryData.novels.length,
        comics: libraryData.comics.length,
        anime: libraryData.anime.length
    };
}