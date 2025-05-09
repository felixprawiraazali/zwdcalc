const stars = [
    {
        "key": "ziweiMaj",
        "en": "Zi Wei",
        "zh": "紫微"
    },
    {
        "key": "tianjiMaj",
        "en": "Tian Ji",
        "zh": "天机"
    },
    {
        "key": "taiyangMaj",
        "en": "Tai Yang",
        "zh": "太阳"
    },
    {
        "key": "wuquMaj",
        "en": "Wu Qu",
        "zh": "武曲"
    },
    {
        "key": "tiantongMaj",
        "en": "Tian Tong",
        "zh": "天同"
    },
    {
        "key": "lianzhenMaj",
        "en": "Lian Zhen",
        "zh": "廉贞"
    },
    {
        "key": "tianfuMaj",
        "en": "Tian Fu",
        "zh": "天府"
    },
    {
        "key": "taiyinMaj",
        "en": "Tai Yin",
        "zh": "太阴"
    },
    {
        "key": "tanlangMaj",
        "en": "Tan Lang",
        "zh": "贪狼"
    },
    {
        "key": "jumenMaj",
        "en": "Ju Men",
        "zh": "巨门"
    },
    {
        "key": "tianxiangMaj",
        "en": "Tian Xiang",
        "zh": "天相"
    },
    {
        "key": "tianliangMaj",
        "en": "Tian Liang",
        "zh": "天梁"
    },
    {
        "key": "qishaMaj",
        "en": "Qi Sha",
        "zh": "七杀"
    },
    {
        "key": "pojunMaj",
        "en": "Po Jun",
        "zh": "破军"
    },
    {
        "key": "zuofuMin",
        "en": "Zuo Fu",
        "zh": "左辅"
    },
    {
        "key": "youbiMin",
        "en": "You Bi",
        "zh": "右弼"
    },
    {
        "key": "wenchangMin",
        "en": "Wen Chang",
        "zh": "文昌"
    },
    {
        "key": "wenquMin",
        "en": "Wen Qu",
        "zh": "文曲"
    },
    {
        "key": "lucunMin",
        "en": "Lu Cun",
        "zh": "禄存"
    },
    {
        "key": "tianmaMin",
        "en": "Tian Ma",
        "zh": "天马"
    },
    {
        "key": "qingyangMin",
        "en": "Qing Yang",
        "zh": "擎羊"
    },
    {
        "key": "tuoluoMin",
        "en": "Tuo Luo",
        "zh": "陀罗"
    },
    {
        "key": "huoxingMin",
        "en": "Huo Xing",
        "zh": "火星"
    },
    {
        "key": "lingxingMin",
        "en": "Ling Xing",
        "zh": "铃星"
    },
    {
        "key": "tiankuiMin",
        "en": "Tian Ku",
        "zh": "天魁"
    },
    {
        "key": "tianyueMin",
        "en": "Tian Yue",
        "zh": "天钺"
    },
    {
        "key": "dikongMin",
        "en": "Di Kong",
        "zh": "地空"
    },
    {
        "key": "dijieMin",
        "en": "Di Jie",
        "zh": "地劫"
    },
    {
        "key": "jieshaAdj",
        "en": "Jie Sha",
        "zh": "劫杀"
    },
    {
        "key": "tiankong",
        "en": "Tian Kong",
        "zh": "天空"
    },
    {
        "key": "tianxing",
        "en": "Tian Xing",
        "zh": "天刑"
    },
    {
        "key": "tianyao",
        "en": "Tian Yao",
        "zh": "天姚"
    },
    {
        "key": "jieshen",
        "en": "Jie Shen",
        "zh": "解神"
    },
    {
        "key": "yinsha",
        "en": "Yin Sha",
        "zh": "阴煞"
    },
    {
        "key": "tianxi",
        "en": "Tianxi",
        "zh": "天喜"
    },
    {
        "key": "tianguan",
        "en": "Tianguan",
        "zh": "天官"
    },
    {
        "key": "tianfu",
        "en": "Tianfu",
        "zh": "天福"
    },
    {
        "key": "tianku",
        "en": "Tianku",
        "zh": "天哭"
    },
    {
        "key": "tianxu",
        "en": "Tianxu",
        "zh": "天虚"
    },
    {
        "key": "longchi",
        "en": "Long Chi",
        "zh": "龙池"
    },
    {
        "key": "fengge",
        "en": "Feng Ge",
        "zh": "凤阁"
    },
    {
        "key": "hongluan",
        "en": "Hong Luan",
        "zh": "红鸾"
    },
    {
        "key": "guchen",
        "en": "Gu Chen",
        "zh": "孤辰"
    },
    {
        "key": "guasu",
        "en": "Gua Su",
        "zh": "寡宿"
    },
    {
        "key": "feilian",
        "en": "Fei Lian",
        "zh": "蜚廉"
    },
    {
        "key": "posui",
        "en": "Po Sui",
        "zh": "破碎"
    },
    {
        "key": "taifu",
        "en": "Tai Fu",
        "zh": "台辅"
    },
    {
        "key": "fenggao",
        "en": "Feng Gao",
        "zh": "封诰"
    },
    {
        "key": "tianwu",
        "en": "Tianwu",
        "zh": "天巫"
    },
    {
        "key": "tianyue",
        "en": "Tianyue",
        "zh": "天月"
    },
    {
        "key": "santai",
        "en": "San Tai",
        "zh": "三台"
    },
    {
        "key": "bazuo",
        "en": "Ba Zuo",
        "zh": "八座"
    },
    {
        "key": "engguang",
        "en": "Eng Guang",
        "zh": "恩光"
    },
    {
        "key": "tiangui",
        "en": "Tiangui",
        "zh": "天贵"
    },
    {
        "key": "tiancai",
        "en": "Tiancai",
        "zh": "天才"
    },
    {
        "key": "tianshou",
        "en": "Tianshou",
        "zh": "天寿"
    },
    {
        "key": "jiekong",
        "en": "Jie Kong",
        "zh": "截空"
    },
    {
        "key": "xunzhong",
        "en": "Xun Zhong",
        "zh": "旬中"
    },
    {
        "key": "xunkong",
        "en": "Xun Kong",
        "zh": "旬空"
    },
    {
        "key": "kongwang",
        "en": "Kong Wang",
        "zh": "空亡"
    },
    {
        "key": "jielu",
        "en": "Jie Lu",
        "zh": "截路"
    },
    {
        "key": "yuede",
        "en": "Yue De",
        "zh": "月德"
    },
    {
        "key": "tianshang",
        "en": "Tianshang",
        "zh": "天伤"
    },
    {
        "key": "tianshi",
        "en": "Tianshi",
        "zh": "天使"
    },
    {
        "key": "tianchu",
        "en": "Tianchu",
        "zh": "天厨"
    },
    {
        "key": "changsheng",
        "en": "Chang Sheng",
        "zh": "长生"
    },
    {
        "key": "muyu",
        "en": "Mu Yu",
        "zh": "沐浴"
    },
    {
        "key": "guandai",
        "en": "Guan Dai",
        "zh": "冠带"
    },
    {
        "key": "linguan",
        "en": "Lin Guan",
        "zh": "临官"
    },
    {
        "key": "diwang",
        "en": "Diwang",
        "zh": "帝旺"
    },
    {
        "key": "shuai",
        "en": "Shuai",
        "zh": "衰"
    },
    {
        "key": "bing",
        "en": "Bing",
        "zh": "病"
    },
    {
        "key": "si",
        "en": "Si",
        "zh": "死"
    },
    {
        "key": "mu",
        "en": "Mu",
        "zh": "墓"
    },
    {
        "key": "jue",
        "en": "Jue",
        "zh": "绝"
    },
    {
        "key": "tai",
        "en": "Tai",
        "zh": "胎"
    },
    {
        "key": "yang",
        "en": "Yang",
        "zh": "养"
    },
    {
        "key": "boshi",
        "en": "Bo Shi",
        "zh": "博士"
    },
    {
        "key": "lishi",
        "en": "Li Shi",
        "zh": "力士"
    },
    {
        "key": "qinglong",
        "en": "Qing Long",
        "zh": "青龙"
    },
    {
        "key": "xiaohao",
        "en": "Xiao Hao",
        "zh": "小耗"
    },
    {
        "key": "jiangjun",
        "en": "Jiang Jun",
        "zh": "将军"
    },
    {
        "key": "zhoushu",
        "en": "Zhou Shu",
        "zh": "奏书"
    },
    {
        "key": "faylian",
        "en": "Fay Lian",
        "zh": "飞廉"
    },
    {
        "key": "xishen",
        "en": "Xi Shen",
        "zh": "喜神"
    },
    {
        "key": "bingfu",
        "en": "Bing Fu",
        "zh": "病符"
    },
    {
        "key": "dahao",
        "en": "Da Hao",
        "zh": "大耗"
    },
    {
        "key": "suipo",
        "en": "Sui Po",
        "zh": "岁破"
    },
    {
        "key": "fubing",
        "en": "Fu Bing",
        "zh": "伏兵"
    },
    {
        "key": "guanfu",
        "en": "Guan Fu",
        "zh": "官府"
    },
    {
        "key": "suijian",
        "en": "Sui Jian",
        "zh": "岁建"
    },
    {
        "key": "huiqi",
        "en": "Hui Qi",
        "zh": "晦气"
    },
    {
        "key": "sangmen",
        "en": "Sang Men",
        "zh": "丧门"
    },
    {
        "key": "guansuo",
        "en": "Guan Suo",
        "zh": "贯索"
    },
    {
        "key": "gwanfu",
        "en": "Guan Fu",
        "zh": "官符"
    },
    {
        "key": "longde",
        "en": "Long De",
        "zh": "龙德"
    },
    {
        "key": "baihu",
        "en": "Bai Hu",
        "zh": "白虎"
    },
    {
        "key": "tiande",
        "en": "Tiande",
        "zh": "天德"
    },
    {
        "key": "diaoke",
        "en": "Diao Ke",
        "zh": "吊客"
    },
    {
        "key": "jiangxing",
        "en": "Jiang Xing",
        "zh": "将星"
    },
    {
        "key": "panan",
        "en": "Pan An",
        "zh": "攀鞍"
    },
    {
        "key": "suiyi",
        "en": "Sui Yi",
        "zh": "岁驿"
    },
    {
        "key": "xiishen",
        "en": "XiiShen",
        "zh": "息神"
    },
    {
        "key": "huagai",
        "en": "Hua Gai",
        "zh": "华盖"
    },
    {
        "key": "jiesha",
        "en": "Jie Sha",
        "zh": "劫煞"
    },
    {
        "key": "zhaisha",
        "en": "Zhai Sha",
        "zh": "灾煞"
    },
    {
        "key": "tiansha",
        "en": "Tiansha",
        "zh": "天煞"
    },
    {
        "key": "zhibei",
        "en": "Zhi Bei",
        "zh": "指背"
    },
    {
        "key": "xianchi",
        "en": "Xian Chi",
        "zh": "咸池"
    },
    {
        "key": "yuesha",
        "en": "Yue Sha",
        "zh": "月煞"
    },
    {
        "key": "wangshen",
        "en": "Wang Shen",
        "zh": "亡神"
    },
    {
        "key": "yunkui",
        "en": "Yunkui (D)",
        "zh": "运魁"
    },
    {
        "key": "yunyue",
        "en": "Yunyue (D)",
        "zh": "运钺"
    },
    {
        "key": "yunchang",
        "en": "Yunchang (D)",
        "zh": "运昌"
    },
    {
        "key": "yunqu",
        "en": "Yunqu (D)",
        "zh": "运曲"
    },
    {
        "key": "yunluan",
        "en": "Yunluan (D)",
        "zh": "运鸾"
    },
    {
        "key": "yunxi",
        "en": "Yunxi (D)",
        "zh": "运喜"
    },
    {
        "key": "yunlu",
        "en": "Yunlu(D)",
        "zh": "运禄"
    },
    {
        "key": "yunyang",
        "en": "Yunyang(D)",
        "zh": "运羊"
    },
    {
        "key": "yuntuo",
        "en": "Yuntuo(D)",
        "zh": "运陀"
    },
    {
        "key": "yunma",
        "en": "Yunma(D)",
        "zh": "运马"
    },
    {
        "key": "liukui",
        "en": "Liukui (Y)",
        "zh": "流魁"
    },
    {
        "key": "liuyue",
        "en": "Liuyue (Y)",
        "zh": "流钺"
    },
    {
        "key": "liuchang",
        "en": "Liuchang (Y)",
        "zh": "流昌"
    },
    {
        "key": "liuqu",
        "en": "Liuqu (Y)",
        "zh": "流曲"
    },
    {
        "key": "liuluan",
        "en": "Liulian(Y)",
        "zh": "流鸾"
    },
    {
        "key": "liuxi",
        "en": "Liuxi (Y)",
        "zh": "流喜"
    },
    {
        "key": "liulu",
        "en": "Liulu(Y)",
        "zh": "流禄"
    },
    {
        "key": "liuyang",
        "en": "Liuyang (Y)",
        "zh": "流羊"
    },
    {
        "key": "liutuo",
        "en": "Liutwo (Y)",
        "zh": "流陀"
    },
    {
        "key": "liuma",
        "en": "Liuma (Y)",
        "zh": "流马"
    },
    {
        "key": "nianjie",
        "en": "Nianjie (Y)",
        "zh": "年解"
    },
    {
        "key": "yuekui",
        "en": "Yuekui (M)",
        "zh": "月魁"
    },
    {
        "key": "yueyue",
        "en": "Yueyue (M)",
        "zh": "月钺"
    },
    {
        "key": "yuechang",
        "en": "Yuechang (M)",
        "zh": "月昌"
    },
    {
        "key": "yuequ",
        "en": "Yuequ(M)",
        "zh": "月曲"
    },
    {
        "key": "yueluan",
        "en": "Yueluan (M)",
        "zh": "月鸾"
    },
    {
        "key": "yuexi",
        "en": "Yuexi (M)",
        "zh": "月喜"
    },
    {
        "key": "yuelu",
        "en": "Yuelu (M)",
        "zh": "月禄"
    },
    {
        "key": "yueyang",
        "en": "Yueyang (M)",
        "zh": "月羊"
    },
    {
        "key": "yuetuo",
        "en": "Yuetuo (M)",
        "zh": "月陀"
    },
    {
        "key": "yuema",
        "en": "Yuema (M)",
        "zh": "月马"
    },
    {
        "key": "rikui",
        "en": "Rikui (d)",
        "zh": "日魁"
    },
    {
        "key": "riyue",
        "en": "Riyue (d)",
        "zh": "日钺"
    },
    {
        "key": "richang",
        "en": "Richang (d)",
        "zh": "日昌"
    },
    {
        "key": "riqu",
        "en": "Riqu (d)",
        "zh": "日曲"
    },
    {
        "key": "riluan",
        "en": "Riluan(d)",
        "zh": "日鸾"
    },
    {
        "key": "rixi",
        "en": "Rixi (d)",
        "zh": "日喜"
    },
    {
        "key": "rilu",
        "en": "Rilu (d)",
        "zh": "日禄"
    },
    {
        "key": "riyang",
        "en": "Riyang (d)",
        "zh": "日羊"
    },
    {
        "key": "rituo",
        "en": "Rituo (d)",
        "zh": "日陀"
    },
    {
        "key": "rima",
        "en": "Rima (d)",
        "zh": "日马"
    },
    {
        "key": "shikui",
        "en": "Shikui (H)",
        "zh": "时魁"
    },
    {
        "key": "shiyue",
        "en": "Shiyue (H)",
        "zh": "时钺"
    },
    {
        "key": "shichang",
        "en": "Shichang (H)",
        "zh": "时昌"
    },
    {
        "key": "shiqu",
        "en": "Shiqu (H)",
        "zh": "时曲"
    },
    {
        "key": "shiluan",
        "en": "Shiluan (H)",
        "zh": "时鸾"
    },
    {
        "key": "shixi",
        "en": "Shixi (H)",
        "zh": "时喜"
    },
    {
        "key": "shilu",
        "en": "Shiluan (H)",
        "zh": "时禄"
    },
    {
        "key": "shiyang",
        "en": "Shiyang (H)",
        "zh": "时羊"
    },
    {
        "key": "shituo",
        "en": "Shituo (H)",
        "zh": "时陀"
    },
    {
        "key": "shima",
        "en": "Shima (H)",
        "zh": "时马"
    }
]