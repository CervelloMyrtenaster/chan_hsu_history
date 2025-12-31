// 展旭記錄資料庫
const records = {
  
  "1": {
    "1": [
      { type: "link", content: "https://photos.app.goo.gl/wAQKtW49pm8zX6zx5", label: "2026年1月1日 \
        2026新年快樂 祝大家 新年快樂 每一年台北幾乎都在風雨中度過跨年 這也跟每一年生活在台北的體驗一樣 幾乎都是在疲累跟風雨中努力著 \
        去年2024/12/31是近幾年唯一無風雨乾淨的跨年夜 幸好當時有跟一起拍攝 不管在何處的台北漂泊 社會的大小角落裡都有人努力的生活 \
        新的一年 這些努力都會有所收穫 除了祝福各位更加順利 也希望社會上更加平安" },
      { type: "link", content: "https://photos.app.goo.gl/HVCihQN1BX8BwVk99", label: "2025年1月1日 \
        新年快樂 今年101的煙火太猛了 今年101的煙火太狠了 天氣到位 煙火時間也到位 很讚XDDD \
        2025新年快樂 回頭看看前幾年的跨年 今天台北的天氣可以給他90分了 第一次沒有大量低雲跟雨霧的台北 實在太棒了 \
        祝福大家新的一年也能繼續加油 繼續成長 新年快樂 粉絲及朋友們都萬事平安順利" },
      { type: "link", content: "https://photos.app.goo.gl/fMg213hTvxGXSNfP7", label: "2025年1月1日 \
        2024年的最後一天 差點因為交管沒有趕上臨時約成的拍點 多虧臨機一動我們轉成Ubike 解鎖了我第一次在台北騎ubike \
        第一次騎著ubike跨越整個信義精華地段 一路上我們跟兩津送貨飆車一樣XD 也很開心一起度過了這個跨年 \
        這個跨年是近年天氣最好的一次 煙火也是最漂亮的一次 最後久違的準備解散1/1準時上班 得來睡了 真的好累啊" },
      { type: "link", content: "https://photos.app.goo.gl/bmK81tHzcfLJ8eYZ7", label: "2025年1月1日 \
        2025台北101跨年煙火 今年的跨年煙火 101實在表現得太好了 沒有下雨跟霧霾的天氣也來神助攻 煙火時間跟豐富度都很足夠 \
        2024是充滿挫折 但完成許多人生重要里程碑的一年 誠心地感謝幫助我的同學跟學長姐 若沒有得到大量的包容跟幫忙 我肯定是一事無成 \
        相信2025年我也會充滿挫折 但一定要繼續堅持住 最後選了一張比較少被PO到的煙火型態 昨晚速修完 把文章先打好了 祝大家新年快樂 事事如意" },
      { type: "link", content: "https://photos.app.goo.gl/hQuvatZSuGZdVV21A", label: "2025年1月1日 越來越進步 反觀我" },
      { type: "link", content: "https://photos.app.goo.gl/R2bnJDxzcunivGv97", label: "2025年1月1日 幫推一下自家的蜂蜜爆米花跟禮盒 我試吃過後就直接訂了 好吃又適合送禮 可以直接私訊他 應該可以比較優惠哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/SP8oTPG5FDu6RctJ8", label: "2025年1月1日 就說不要喝酒" },
      { type: "link", content: "https://photos.app.goo.gl/rKUBBqRzuKZFdWpq5", label: "2025年1月1日 好看" },
      { type: "link", content: "https://photos.app.goo.gl/t3QfkPve33TGYW3T9", label: "2025年1月1日 我以後一定要搭一次回到過去的班機" },
      { type: "link", content: "https://photos.app.goo.gl/vVBk3FRToas5jbv59", label: "2025年1月1日 哈哈哈哈還有我咧" },
      { type: "link", content: "https://photos.app.goo.gl/Fn1SgZzSEwEUUr5U8", label: "2025年1月1日 真好玩" },
      { type: "link", content: "https://photos.app.goo.gl/h4i96YNJghRGa5ZJ8", label: "2025年1月1日 這個比台中更瘋哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/43ssBmS5Wswgr4Mm8", label: "2025年1月1日 好羨慕 他們的煙火比較好玩" },
      { type: "link", content: "https://photos.app.goo.gl/RvARy6CSq4SeJHGu6", label: "2025年1月1日 太厲害了" },
      { type: "link", content: "https://photos.app.goo.gl/twukYFGjE2HVfqX76", label: "2024年1月1日 \
        2024第一小時 就遇到人生第一次爆胎 快十次101跨年煙火 今天是第一次坐捷運回家 \
        非常誇張的是跨年散場 所有周邊捷運站都要排隊進場 進場刷卡後 要排隊上捷運 然後每廂捷運都滿滿人上不了 \
        想要叫車 完全叫不到 路上計程車不是滿座就是空車要去載人 根本也無法叫車 跨年沒有自己的交通工具有夠瞎的" },
      { type: "link", content: "https://photos.app.goo.gl/KfrGYK7S6qgnNGjo9", label: "2024年1月1日 看起來是有點慘XDD 不管了新年快樂" },
      { type: "link", content: "https://photos.app.goo.gl/Xo3aeUbvuKMe2udg9", label: "2024年1月1日 2024第一天從人生第一次爆胎開始" },
      { type: "link", content: "https://photos.app.goo.gl/NPKURnHBG4wWB6VMA", label: "2024年1月1日 影片比我照片成功哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/kjVzwmycGmigzjQn9", label: "2024年1月1日 1/1機車爆胎附近機車行全部沒開到底怎麼辦" },
      { type: "link", content: "https://photos.app.goo.gl/vS8VQv8yV96UDNu18", label: "2024年1月1日 昨天信義區爆胎 沒有經驗 今晚才想到趕快叫道路救援 因為店家都沒開 平日根本沒空處理 因為道路救援費用也很嚇人 一次噴3500塊 希望新年第一天所有雖事就到此 拜託老天讓我幸運一點" },
      { type: "link", content: "https://photos.app.goo.gl/tYoKQMM46vXzAnnj9", label: "2024年1月1日 \
        2024跨年煙火 要的越多 得到的就越少 這是2023年的體驗 \
        坦白說去年狀況並不好 工作跟健康都不是很順利 用盡了力氣去達成平衡 這些挑戰並不會在2024結束 \
        我相信各位也是一樣 多數的生活都是非常不容易 因此不要去過度追求 例如別人的眼光 社會的地位 感情的強求及金錢的渴望等等 \
        珍惜身邊能走在一起的人 別為了別人犧牲自己的夢想才是真理 2023的結束 感謝有陪伴 還有在最後幾小時一起度過的 \
        2024的開始 雖然就碰到爆胎 但相信這是擋了煞 能在今年通過考試 並維持生活的平衡 \
        PS這個點沒有想象中好拍 主要是位於下風處 第一張以後基本上都看不到101本體了" },
      { type: "link", content: "https://photos.app.goo.gl/g1fSd1Aqw532diqS9", label: "2023年1月1日 2023新年快樂 新的一年將以值班開啟 希望2023疫情退散 戰爭退散 熊市退散 也希望自己更堅強 挺過這個階段 找攝影與工作的平衡 盡力了這兩年台北101煙火都是霧QAQ" },
      { type: "link", content: "https://photos.app.goo.gl/Yjnomzgw6bXbemWR6", label: "2023年1月1日 超克難倒數" },
      { type: "link", content: "https://photos.app.goo.gl/BLf8jBQSM4K72MQy9", label: "2023年1月1日 2023新年快樂 第二次在雨中近距離拍101煙火 距離上次拍陶朱隱園煙火已經三年了 明天依然有整天值班等我 先來睡了 大家新年快樂 新的一年 疫情退散 戰爭退散" },
      { type: "link", content: "https://photos.app.goo.gl/rPF1YmQ2LU8tQsKu9", label: "2022年1月1日 今年煙火什麼意思" },
      { type: "link", content: "https://photos.app.goo.gl/kDWR2aqZgtpzSL7u6", label: "2022年1月1日 今年好像在路邊拍的煙火比卡位好太多" },
      { type: "link", content: "https://photos.app.goo.gl/4uN6JcSndVHRV2uMA", label: "2022年1月1日 \
        今年拍到的煙火太慘了 不過還是要祝大家新年快樂 \
        2022新年快樂 生活分享No.8 2022年的第一件事 居然是猶豫很久到底要不要發101煙火 但今年實在太慘不忍睹 請見第二張不忍直視XD \
        只好放上正常版的101 祝福大家新年事事順利 工作跟健康都能步上軌道 股市也能蒸蒸日上 突破兩萬點" },
      { type: "link", content: "https://photos.app.goo.gl/BbVNruPcjThH7F19A", label: "2021年1月1日 新年快樂 2021好運旺旺來" },
      { type: "link", content: "https://photos.app.goo.gl/ar5TPAA3Us6i5btP8", label: "2020年1月1日 新年快樂 標註一下照片拍攝者會比較好xd" },
      { type: "link", content: "https://photos.app.goo.gl/BjfBG3V3EjTvEaR58", label: "2020年1月1日 新年快樂" },
      { type: "link", content: "https://photos.app.goo.gl/a8kR9rBqucQnmdcE8", label: "2019年1月1日 新年快樂 謝謝陪我一起倒數還幫我撐傘 豪港動" },
      { type: "link", content: "https://photos.app.goo.gl/r8etMYTwbArMPWHf7", label: "2019年1月1日 新年快樂ㄛ 今年想用馬桶刷假扮101的朋友要失敗囉" },
      { type: "link", content: "https://photos.app.goo.gl/VWjqeSaP49yVUWTn8", label: "2019年1月1日 今年二創的作品看來不會太成功 不過我得後天才有電腦修 希望有還能看的結果哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/RiQYcWCZKuSSt1RW7", label: "2019年1月1日 新年第一餐 大師兄銷魂麵舖忠孝店 女神最愛的辣味 我快不行了" },
      { type: "link", content: "https://photos.app.goo.gl/LDhToHb7f5jmSCG76", label: "2018年1月1日 \
        不好意思忘記跟你們 說我爸媽禮拜六臨時要來台北 所以我還去取消南下高鐵 造成你們觀感不佳 非常抱歉 \
        我不會也不敢想凹你們 三天連假我值兩天也沒關係 真的不是故意搞你們 \
        不是 我這禮拜是真的原本要回家 不是騙你啊 爸媽說要上來 改行程啊 \
        我今天盡量提早回去 五點半以前應該沒問題 拍謝啦 三天連假我幾乎值兩天 留一天過年應該不過分吧" },
      { type: "link", content: "https://photos.app.goo.gl/8aVmrdCi7jT5LF33A", label: "2018年1月1日 現場拍現場修 果然工作效率一流" },
      { type: "link", content: "https://photos.app.goo.gl/98AazjqSD2nkz7UF7", label: "2018年1月1日 局部美到翻 敬請期待1/1相機出圖" },
      { type: "link", content: "https://photos.app.goo.gl/1qoMgXnrLpK1V1qX6", label: "2018年1月1日 \
        新年快樂 Five fireworks of Taipei 101 煙火五連發gotcha 感謝臨時揪成團的各位 不嫌棄我講話老是亂扯 又有一堆奇怪的攝影想法 \
        一起完成去年就想完成的構圖 意外發現今年多很多拍局部的煙火 明年來完成福田氏煙火如何 有人也想一起喇賽聊天等煙火嗎 \
        網頁銳利方法很猛 各位很明顯發現這次照片特別銳利 想變強的各位可以去報名他的後製課程" },      
      { type: "link", content: "https://photos.app.goo.gl/RTELjgbrZ2q4LUvBA", label: "2017年1月1日 \
        這個跨年自己一個人過掉了 2016的上半年過得很美好 兩次一生難忘的海外旅行 與我最好的朋友和曾經至愛的人 \
        2016的下半年過得行屍走肉 進入臨床實習的轟炸 面對學業與人際溝通的考驗 上天安排了每個月給我跟最辛苦的主治醫生 \
        並且同時經歷了最痛苦的分離 幸好 我遇上了許多好人 無論相處時間的長短 謝謝認識數年的老朋友 也謝謝認識短短幾個月的新朋友 \
        若不是你們 我沒有勇氣經歷許多從前不敢想的事情 歲末年終 我終究知道自己是個差勁的人 不夠成熟 不夠勇敢 不夠有智慧 \
        我會用更謙卑的心態面對接下來的學習 也會用更真誠的心面對相處的每個人 2017年 我會專注的 慢慢的 找回因為犯錯而失去的每個東西 \
        這個新年快樂不起來 我需要時間消化連日累積的衝擊 但是 加油just do it 共勉 祝大家新年快樂 新的一年從值班開始" }
    ],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": [],
    "7": [],
    "8": [],
    "9": [
      { type: "link", content: "https://photos.app.goo.gl/34AV7GNxDgV4ERFTA", label: "2017年1月9日 \
        透早上刀就是劈頭一個振奮人心 學弟 這台你來開 於是乎 雖然只是簡單的清創 但卻是第一台自己上的刀 \
        意義上 很棒的成就感 不選外科的心志被動搖了" }
    ],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [
      { type: "link", content: "https://photos.app.goo.gl/qYVvh7xKbFkcQ1A16", label: "2017年1月16日 缺三小家聚 歡迎我們的新秀卷哥唐化 有啊約吃黑輪超讚der 約吃宵高雄好推ㄘ的" }
    ],
    "17": [],
    "18": [],
    "19": [
      { type: "link", content: "https://photos.app.goo.gl/WA7DPH5sFnbueMZZ7", label: "2017年1月19日 \
        songshanairport 久違的出圖&GS weekly summary 一般外科的生活接近尾聲了 每天每天都讓自己燃燒殆盡 沒有想過多一點的休息跟偷懶 \
        踢群能學就學 上刀能刷就刷 病人能接就接 昨天下班之後整個頭暈大概發燒了 繼np姐姐跟鵝學長 拜託不要換我中標 \
        這個月真的好充實 遇到一起並肩作戰的夥伴同學們 幸好有你們一起分擔 也感謝學長在我犯錯後一直提醒我 教我 \
        沒什麼好抱怨的 好累好盡興 套句有人說的, 當作是在玩或許會開心一點 不過已經夠開心了哈哈 感謝你的出現跟幫忙 要繼續努力下去 讓自己更值得依靠 liverteam" }
      ],
    "20": [
      { type: "link", content: "https://photos.app.goo.gl/zhq5XMWB2NbB6yqy8", label: "2017年1月20日 \
        一個下刀做完查房資料 直接飛奔外科部忘年會 合照紀念一下carry的R跟強大的漂亮np姐姐 \
        上一科在CVS連續兩天上刀換心case 今天上刀換肝case 究竟下一科GU會遇到什麼大刀呢 frustrated burnout 一臉疲憊蠢貌" }
    ],
    "21": [],
    "22": [],
    "23": [],
    "24": [
      { type: "link", content: "https://photos.app.goo.gl/r66SNfdmHjnorKf98", label: "2017年1月24日 當病人體驗醫病關係 銅鋰鋅+10 thanks for professional help Traditional treatment" },
      { type: "link", content: "https://photos.app.goo.gl/QvfLkY8beP3CEoas9", label: "2017年1月24日 滿滿的大漢堡 第一次去吃 頗厲害的" }
    ],
    "25": [
      { type: "link", content: "https://photos.app.goo.gl/6bbaXddLUHpvCjPa8", label: "2017年1月25日 \
        拙劣的日常 連假前夕 悶 popping 這禮拜病人相對較少啦 晚上才有一點點時間 沒學欸當運動 學成這樣就太慘ㄖ" }
    ],
    "26": [],
    "27": [],
    "28": [
      { type: "link", content: "https://photos.app.goo.gl/1MXfrcd9szquo89g8", label: "2017年1月28日 \
        晚點刪文 明天凌晨突然想拍台南北門水晶教堂日出+銀河 天氣無雲的話 有人也想拍嗎 我開車接送 私我即可 \
        因為我看衛星雲圖沒啥雲 請問你有推薦其他拍攝點嗎 哈哈" }
    ],
    "29": [],
    "30": [],
    "31": [
      { type: "link", content: "https://photos.app.goo.gl/yQJG51L9B5njiycm8", label: "2017年1月31日 \
        Happy ending of vacation 北上收假 明天值班 超短假期 一日司機 太保花海" }
    ]
  },

  "2": {
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": [],
    "7": [
      { type: "link", content: "https://photos.app.goo.gl/92b1cTpeCLtbzZ3C9", label: "2017年2月7日 \
        控制裡男角是精神解離患者 但他說的很對 痛苦才會造就進化 才會使人純淨 曾經的單純天真固然可貴 \
        長大後不能祈求別人真心回報 所以承受痛苦 然後走過這些必經之路 不再回頭" }
    ],
    "8": [
      { type: "link", content: "https://photos.app.goo.gl/Hw9Txqg8smsSeBga6", label: "2017年2月8日 外科の日常" }
    ],
    "9": [],
    "10": [],
    "11": [],
    "12": [
      { type: "link", content: "https://photos.app.goo.gl/VuwqUMG4uRyF5hAr7", label: "2017年2月12日 來教會活動 first time" }
    ],
    "13": [
      { type: "link", content: "https://photos.app.goo.gl/JTXasYXMtsg7coo99", label: "2017年2月13日 路上興起說要跳 就直接在路上跳 狂狂 謝謝兩位帥哥大大一起pop 熱血沸騰就不會冷" }
    ],
    "14": [
      { type: "link", content: "https://photos.app.goo.gl/p6YpHJuMD1N1hSrM8", label: "2017年2月14日 情人節一個人走走即可 感恩每一位朋友家人學長學姊 遇見你們我很幸運 願自已變得更好遇上對的妳" }
    ],
    "15": [],
    "16": [],
    "17": [
      { type: "link", content: "https://photos.app.goo.gl/iGg4BgCPgNyrhoXb9", label: "2017年2月17日 \
        醫生是不賺錢的行業 醫生是沒有真正下班的行業 醫生更不是人生勝利組 真的真的不是 \
        醫生只有勤奮 細心 耐心 勤奮的讀書 勤奮的follow data 細心的開order 細心的鑑別診斷 耐心的超時打病歷跟上刀 耐心的看病人安撫病人" },
      { type: "link", content: "https://photos.app.goo.gl/7KHgKDXQG9vxPDaX9", label: "2017年2月17日 刮風的時候 你總要學會一個人顫抖 而不是奢望誰的手 三樣嘢" }
    ],
    "18": [],
    "19": [],
    "20": [
      { type: "link", content: "https://photos.app.goo.gl/ydUeCxvj2Q5DENdu9", label: "2017年2月20日 GU值班 凌晨三點下班 明天六點上班 當醫生前先當鐵人" },
      { type: "link", content: "https://photos.app.goo.gl/hz3MLHRo6H4DnyJT6", label: "2017年2月20日 夜跑with old classmate" },
      { type: "link", content: "https://photos.app.goo.gl/xFv4RcQfY24qLpcJA", label: "2017年2月20日 五km超前 跑起來很舒服" }
    ],
    "21": [
      { type: "link", content: "https://photos.app.goo.gl/iFVjHWgRKWYtwcPF8", label: "2017年2月21日 出刀房後的陽光 是最美的陽光 廢文" }
    ],
    "22": [
      { type: "link", content: "https://photos.app.goo.gl/LLWo5tFpqudbKafVA", label: "2017年2月22日 病人如果不要遲到準時來罐藥 我就不用一飯三吐哺了" }
    ],
    "23": [
      { type: "link", content: "https://photos.app.goo.gl/tQRte6zJpxhHFE4W9", label: "2017年2月23日 保暖" }
    ],
    "24": [
      { type: "link", content: "https://photos.app.goo.gl/MRMrKGZvqJfCeG6p8", label: "2017年2月24日 \
        迎接連假前的最後值班 跟醫師國考泌尿外科用書作者宏睿學長合照 書編的很用心 也在刀房踢群我很多 \
        GU是很棒的一科因為有很棒的學長姐 希望自己能更成長 泌尿外科 充滿GG的一個月" }
    ],
    "25": [
      { type: "link", content: "https://photos.app.goo.gl/bHK4W3A3GAmTRDcP8", label: "2017年2月25日 台中" },
      { type: "link", content: "https://photos.app.goo.gl/cqFDbKkhPCQBLsi5A", label: "2017年2月25日 連假前 三總明天掰" }
    ],
    "26": [
      { type: "link", content: "https://photos.app.goo.gl/hDwDUfMXm4DeBGqv9", label: "2017年2月26日 \
        很喜歡GU 有每天帶我查房找我討論的主治曹伯伯 也有對吃很研究 對教學很樂於分享的蕎青學長 有45護理師們各種分享iv經驗 \
        記得最後一次病房 在實習護生跟clerk目視下成功一針on上老人 大概是上天有保佑吧哈哈 GU其他學長姐也都很樂意教學跟灌溉知識 \
        還有對院長們的風範跟氣度也印象深刻 開始愛上外科應該不意外 自認離開外科還有200%的進步空間 少抱怨多學習 希望漸漸不會再這麼嫩了" }
    ],
    "27": [
      { type: "link", content: "https://photos.app.goo.gl/h5UXxEJ6MBuGAnz8A", label: "2017年2月27日 兔子很調皮" },
      { type: "link", content: "https://photos.app.goo.gl/AWVimXHoVDUYmxJp7", label: "2017年2月27日 開車比Ya" }
    ],
    "28": [
      { type: "link", content: "https://photos.app.goo.gl/XAu8GXgp6yMy11mHA", label: "2017年2月28日 回學校第一件事情 先follow病人狀況" }
    ],
    "29": []
  },

  "3": {
    "1": [],
    "2": [],
    "3": [],
    "4": [
      { type: "link", content: "https://photos.app.goo.gl/TRNxDXrHcrsjVmNY7", label: "2017年3月4日 為我的室友感到幸福 終於可以不要來煩我ㄌ" },
      { type: "link", content: "https://photos.app.goo.gl/c8mb4nuQEgzYWVY88", label: "2017年3月4日 猜猜我要多少錢" }
    ],
    "5": [
      { type: "link", content: "https://photos.app.goo.gl/MNnFH1NdT3cp8C5B8", label: "2017年3月5日 人不能不信邪 吃了鳳梨喝了芒果 還沒值班 睡到一半電話就來 明天0630準時先去抄data 原本0730才上班啊 我的老天鵝" },
      { type: "link", content: "https://photos.app.goo.gl/HsApxmM4dNSQyvvw7", label: "2017年3月5日 明天值班 先喝個芒果汁 吃個鳳梨酥壓壓驚 ㄏㄏ" }
    ],
    "6": [],
    "7": [],
    "8": [],
    "9": [
      { type: "link", content: "https://photos.app.goo.gl/ukNHpGmXEUfdgxzD8", label: "2017年3月9日 昨天搖豆漿是因為他結冰惹 超低能ㄉ" },
      { type: "link", content: "https://photos.app.goo.gl/3HSgReKURXd4du846", label: "2017年3月9日 每次值班至少兩個new pa 一個lumbar puncture 到底誰說小兒爽的 但學到很多特別的case 非常充實" }
    ],
    "10": [],
    "11": [
      { type: "link", content: "https://photos.app.goo.gl/aerwBhi8TfGNK1nr9", label: "2017年3月11日 打飛機 好涼" }
    ],
    "12": [],
    "13": [],
    "14": [],
    "15": [
      { type: "link", content: "https://photos.app.goo.gl/fdwM5y9UqBuokFGS9", label: "2017年3月15日 但 Tra歸tra 苓膏歸苓膏 還是要樂觀" },
      { type: "link", content: "https://photos.app.goo.gl/6HZhvnGiiSQhfR6aA", label: "2017年3月15日 I1的日子即將結束 自知實力還是很爛 最值得紀念的 就是每次都跟到科部老大之一 QAQ" }
    ],
    "16": [
      { type: "link", content: "https://photos.app.goo.gl/8Q2DseQRG91d5miK8", label: "2017年3月16日 聽寶寶心跳" },
    ],
    "17": [],
    "18": [
      { type: "link", content: "https://photos.app.goo.gl/qETQjsESGicA77S19", label: "2017年3月18日 \
        推廣 DNR 全拒 最狂icu護理師 為了減輕癌未重症病患的痛苦 靠攝影作品宣傳理念 免除插管急救 超讚的 也是目前在醫療圈看到最強的攝影師了 雖然她說只玩兩年也太謙虛 "},
      { type: "link", content: "https://photos.app.goo.gl/Pe3GJcKqTcWC7sNEA", label: "2017年3月18日 潤喉" }
    ],
    "19": [],
    "20": [
      { type: "link", content: "https://photos.app.goo.gl/97KYvdHW4QQ1HNdFA", label: "2017年3月20日 早上醫院上班 晚上繼續修圖趕工 錢不好賺" },
      { type: "link", content: "https://photos.app.goo.gl/8n36nd2notxEo9Qd6", label: "2017年3月20日 累癱了 該來的還是要" },
      { type: "link", content: "https://photos.app.goo.gl/GyYgNBb6buFGWyvH6", label: "2017年3月20日 明明run婦產 卻跟GS詹主任的刀一整天 08001800就開一台刀 本日婦產I1都站神" }
    ],
    "21": [],
    "22": [],
    "23": [],
    "24": [
      { type: "link", content: "https://photos.app.goo.gl/4JDbkBNivwdJB8Le6", label: "2017年3月24日 Keep on C/S" },
      { type: "link", content: "https://photos.app.goo.gl/w14ijGFXYLuAXYEo8", label: "2017年3月24日 我家門前有小山 Robot開不完" }
    ],
    "25": [],
    "26": [
      { type: "link", content: "https://photos.app.goo.gl/73BJVZWCf7vNbXFD6", label: "2017年3月26日 \
        總是這樣 忙碌的生活讓短暫假日只能東奔西跑 其實多想靜下來 讓一杯咖啡就度過一下午 讓一場午覺就度過一天 但腦海中有太多的目標與想法 \
        等著完成 所以疲憊還是要卯起來 不得閒 gogogo 假掰" }
    ],
    "27": [
      { type: "link", content: "https://photos.app.goo.gl/48V9iPeaQrJxS2DB8", label: "2017年3月27日 曾經的溫柔 偶然看見 依然信感痛苦 這就是品嚐人生的感覺吧" }
    ],
    "28": [],
    "29": [],
    "30": [
      { type: "link", content: "https://photos.app.goo.gl/ttFD6FomFxrDp79L7", label: "2017年3月30日 好像很久沒走出校園Orz 其實滿安靜滿美der" }
    ],
    "31": []
  },

  "4": {
    "1": [
      { type: "link", content: "https://photos.app.goo.gl/WriikydjtfFJhEFRA", label: "2017年4月1日 街頭自拍" }
    ],
    "2": [
      { type: "link", content: "https://photos.app.goo.gl/wLNe3yur31eYaRjx6", label: "2017年4月2日 屎定啊 突然決定要在0度的夫妻樹拍銀河 沒有最狂只有更狂 跟學長一起suffer" },
      { type: "link", content: "https://photos.app.goo.gl/m6QVLzHykjPfR4JN6", label: "2017年4月2日 獲得一個月的喘息機會這樣 最動人的小角落" }
    ],
    "3": [],
    "4": [],
    "5": [],
    "6": [],
    "7": [],
    "8": [
      { type: "link", content: "https://photos.app.goo.gl/5bLEDeAyF8EV9Kza6", label: "2017年4月8日 一直放重音根本誘惑我跳舞 難受 也太適合popping" },
      { type: "link", content: "https://photos.app.goo.gl/TKd2Eb7oEks3vccn7", label: "2017年4月8日 Wolking Right now" }
    ],
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [
      { type: "link", content: "https://photos.app.goo.gl/oJTHXNy9nWtCX1eL9", label: "2017年4月13日 把興趣當工作不容易 熱情很快會被消耗 下班後的練功房 證件照 收工" }
    ],
    "14": [
      { type: "link", content: "https://photos.app.goo.gl/YN7KCP9K7DsL5Gnt5", label: "2017年4月14日 第一次一個月回台南兩次 期待拍攝計畫" }
    ],
    "15": [
      { type: "link", content: "https://photos.app.goo.gl/tQadKam34nUXvw5P8", label: "2017年4月15日 下午繼續拍攝 很累但盡興" }
    ],
    "16": [
      { type: "link", content: "https://photos.app.goo.gl/hJx49aH5QE983MnCA", label: "2017年4月16日 吹泡泡自拍" }
    ],
    "17": [
      { type: "link", content: "https://photos.app.goo.gl/gbnhvhtg9vdduPoU6", label: "2017年4月17日 國防醫學院 醫學系 攝影街舞是我的生活 做人不要靠嘴 也不要用嘴巴認識人 做自己 活得開心 不斷求進步" },
      { type: "link", content: "https://photos.app.goo.gl/1oBmNre3VExprDdd7", label: "2017年4月17日 愛玩就爛一輩子活該 當然不可接受" },
      { type: "link", content: "https://photos.app.goo.gl/piYWLwCRQufqTx3B8", label: "2016年4月17日 搭公車前往謝師宴" }
    ],
    "18": [],
    "19": [],
    "20": [],
    "21": [],
    "22": [
      { type: "link", content: "https://photos.app.goo.gl/5YhpfwxCmt1UpJRM8", label: "2017年4月22日 \
        螢的生命短暫 人也是一樣 經歷多了會發現自己不過是眾多平凡人的一個 不必覺得自己有什麼特別 縱使努力發光也改變不了什麼 \
        唯有當下的感受與愛 隨著時間烙成忘不了的回憶 螢火蟲 東勢 生日" }
    ],
    "23": [],
    "24": [],
    "25": [],
    "26": [],
    "27": [
      { type: "link", content: "https://photos.app.goo.gl/Unh7iMNnx6DAU5Gz8", label: "2017年4月27日 國防醫學院體育館 popping practice" }
    ],
    "28": [
      { type: "link", content: "https://photos.app.goo.gl/gPtSfoWko1S5LAe37", label: "2017年4月28日 我GS少兩個人力" }
    ],
    "29": [],
    "30": []
  },

  "5": {
    "1": [
      { type: "link", content: "https://photos.app.goo.gl/DxR2eYibrgzQg9UaA", label: "2017年5月1日 \
        從不是很了解病理部 到半個月實習結束真的好喜歡這裡 睡飽來看片然後teaching 接著開槓切肉到下班 非常惬意但又學得非常多 \
        附上很罩的學長 和靄的主任還有台南最強美食專家的美麗學姊 最後感謝總醫師宜恕學長 出給我很多作業 倒數登出I1" }
    ],
    "2": [],
    "3": [
      { type: "link", content: "https://photos.app.goo.gl/c6mSM9WsELZZQg6PA", label: "2017年5月3日 \
        這半月在SICU實習還順便讓柯P上課值了值了 柯p也是SICU出身哈哈 這件白袍我就不洗囉回去掛起來 台北市長 柯文哲 親筆簽名 柯P" }
    ],
    "4": [
      { type: "link", content: "https://photos.app.goo.gl/yndW6SMC1ePJZ23N6", label: "2017年5月4日 我很努力在吃宵夜了 拜託長胖怎麼這麼難" },
      { type: "link", content: "https://photos.app.goo.gl/jGFcVGjP9hY2jhmv8", label: "2017年5月4日 當醫生是一件很孤單很孤單的事情" }
    ],
    "5": [],
    "6": [
      { type: "link", content: "https://photos.app.goo.gl/Y3KexFzoaac41vTR6", label: "2017年5月6日 道貌岸然的保險業務 沒屁本事 搞得自己很端莊很有錢 用交友軟體騙女人 不是第一次看到 呵呵" },
      { type: "link", content: "https://photos.app.goo.gl/XC5wzck1pQhcs5h59", label: "2017年5月6日 為了免費便當直接從睡中彈起來 Get 上課點名都沒這麼快" }
    ],
    "7": [
      { type: "link", content: "https://photos.app.goo.gl/ZJFgsgTJhAVxin31A", label: "2017年5月7日 101借我帶回家一天" }
    ],
    "8": [
      { type: "link", content: "https://photos.app.goo.gl/qfYPJmuyc4Jkv2126", label: "2017年5月8日 真心喜歡SICU 遇到很不同的case 有一點時間能讀書" },
      { type: "link", content: "https://photos.app.goo.gl/f8VvRm7hMh5scuFm9", label: "2017年5月8日 Don't let your past determine your future From Ant-Man 信義區 antman antmanmovie" },
      { type: "link", content: "https://photos.app.goo.gl/pgoFqcqJBoNUbyrk6", label: "2017年5月8日 紀念第一次挖大便成就 滿滿的 滿適合催吐的 都這麼犧牲拜託病人狀況改善阿" }
    ],
    "9": [],
    "10": [
      { type: "link", content: "https://photos.app.goo.gl/q89QMh1Kc7eHqZed7", label: "2017年5月10日 Keep Keep Keep" },
      { type: "link", content: "https://photos.app.goo.gl/RZJytzwS2a1pUK19A", label: "2017年5月10日 \
        富士山 淺間神社 如果日本交換實習順利 希望能在拍攝更多美景回來 因天候取消馬祖藍眼淚 打算從北玩到南順便拍銀河 有人哪天有空的嗎" }
    ],
    "11": [
      { type: "link", content: "https://photos.app.goo.gl/Uq3gXRcvVawv2c278", label: "2017年5月11日 \
        I1結束的前夕 第一次寫到器捐的病歷 面對只剩呼吸心跳沒有體溫肉的肉體 不知道如何寫主訴 一具機器支持維生的屍體 一個有故事卻不能延續的人 不知從何而來的惋惜感要好好消化" },
      { type: "link", content: "https://photos.app.goo.gl/pv6fX8ciW6tMXeAG6", label: "2017年5月11日 怎麼能不愛SICU" }
    ],
    "12": [],
    "13": [],
    "14": [],
    "15": [
      { type: "link", content: "https://photos.app.goo.gl/UBMWL4EV5goRrocx8", label: "2017年5月15日 被時間匆忙催促著變成I2了 康樂山 夜景" }
    ],
    "16": [],
    "17": [
      { type: "link", content: "https://photos.app.goo.gl/RuH644eWcebbtftR7", label: "2017年5月17日 計畫好的藍眼淚泡湯 難得長假只能讀書 悶悶der" }
    ],
    "18": [
      { type: "link", content: "https://photos.app.goo.gl/YoJ7McEabrrwvkrZ9", label: "2017年5月18日 台南下著雨讓人心安" }
    ],
    "19": [
      { type: "link", content: "https://photos.app.goo.gl/dACNmXGhzqnGegnC9", label: "2017年5月19日 今天平日早晨欸 夠扯 都不用上班" },
      { type: "link", content: "https://photos.app.goo.gl/uKwJxkX4bLfPbVtu6", label: "2017年5月19日 從12點拍到六點 我瘋了嗎 晚上接續值急診 會掛 中寮山天希坊" }
    ],
    "20": [],
    "21": [
      { type: "link", content: "https://photos.app.goo.gl/PTiAgXni373kzjbF7", label: "2017年5月21日 今晚兒急診大爆滿 門庭若市ORZ" }
    ],
    "22": [
      { type: "link", content: "https://photos.app.goo.gl/E1Zj5HK9WtwKke3W7", label: "2017年5月22日 \
        第三天守兒科急診 禮拜日果然門庭若市 醫店生意興隆 一直在看診on iv 做資料然後終於撐到天亮 有病人一枚是超活潑小一女 靠明明燒到39 \
        欸醫生現在幾點 欸醫生為什麼要看耳朵 欸醫生你的筆是不是沒水我家很多 欸醫生妳講太快了吧你 直到揮手說掰掰還說要回來看我 \
        可以完整的從叫號問診PE到下處分on iv 感謝學姊在我做完處置之後給予檢查跟修正 或許感覺讀醫會有趣 就是從實作開始吧 臨床真好 \
        之後接續報case交班 然後教學門診到中午 明晚迎接最後一班夜急 嗯intern身體不是鐵打就是打鐵的呢 希望身體撐著點 \
        發生太多事情真的真的太累 我需要talk但我沒朋友 生活像是在吃屎還要假裝過很爽" }
    ],
    "23": [
      { type: "link", content: "https://photos.app.goo.gl/Md34HoQbbu7uWSdZ7", label: "2017年5月23日 Well trained in hospital Well trained in gym" }
    ],
    "24": [
      { type: "link", content: "https://photos.app.goo.gl/b5JD9XhXmRtsXKMZ7", label: "2017年5月24日 最近很煩惱" }
    ],
    "25": [
      { type: "link", content: "https://photos.app.goo.gl/QH4B1symJSYkA9Tb8", label: "2017年5月25日 有點難做" },
      { type: "link", content: "https://photos.app.goo.gl/K6s4VYgcGoLsjsD29", label: "2017年5月25日 我的頭燈試用者" }
    ],
    "26": [],
    "27": [
      { type: "link", content: "https://photos.app.goo.gl/EG7vW89U8EAms6cH9", label: "2017年5月27日 搭高鐵不能補眠背日文 上班休假都累得要死 我到底造什麼虐" }
    ],
    "28": [],
    "29": [],
    "30": [],
    "31": [
      { type: "link", content: "https://photos.app.goo.gl/rpYnzK4ENWD5NKbt6", label: "2017年5月31日 練個 步上自己的軌道 離計畫越來越近" },
      { type: "link", content: "https://photos.app.goo.gl/2YgLZ6qhefJqBiuNA", label: "2017年5月31日 \
        看到蘇花公路坍塌心裡只有一個想法 人總是以為美景能輕易的看到 因此造就許多環境的破壞 公路坍塌不是當然的嗎 \
        他本來就是破壞自然生態而建造的 美景只有經過辛苦才能得到 風景攝影也是忍耐飢餓與犧牲睡眠才能等到 一切都是看老天臉色 \
        對於自然的嚮往 而建造渡假飯店或遊憩園區 去犧牲自然創造的方便不是應該的 南投 sunrise 日月潭 \
        你說是對的 為了生活方便而適當犧牲 不過另一方面建造的遊憩區與飯店讓大眾方便遊樂 造就蜂擁而至結果堵塞回不了家 算是一種破壞自然的自食其果" }
    ]
  },

  "6": {
    "1": [],
    "2": [],
    "3": [],
    "4": [
      { type: "link", content: "https://photos.app.goo.gl/yG7Si7nUHxE8ABuS9", label: "2017年6月4日 收攤前阿姨送奶油紅豆餅 這麼感人 今天助人的好報吧" },
      { type: "link", content: "https://photos.app.goo.gl/ELaG3LsJ5FsesakQ7", label: "2017年6月4日 值班準備月底的攝影課程 2小時的課如何讓人有趣又能吸收呢" }
    ],
    "5": [],
    "6": [],
    "7": [
      { type: "link", content: "https://photos.app.goo.gl/gNcgFS6wTqJDdyWM7", label: "2017年6月7日 晚上都吃油條肉包豆漿一個多月 為什麼還胖不了 到底還要吃多久才行" },
      { type: "link", content: "https://photos.app.goo.gl/uc7rBNvSokn35teG7", label: "2017年6月7日 吸入劑" }
    ],
    "8": [
      { type: "link", content: "https://photos.app.goo.gl/7r89YEoxAot34GbBA", label: "2017年6月8日 拍照去" }
    ],
    "9": [],
    "10": [
      { type: "link", content: "https://photos.app.goo.gl/aDFaQTF5Zz1LFp28A", label: "2017年6月10日 \
        發現黃金鄉 大致上拍風景時我會想以下幾點給各位參考 首先現場觀察地形 如何拍出不同的構圖 正好國外很流行把攝影師自己放進去 小小的 \
        襯托自然壯闊 於是我也來試試啦 台灣太多喜歡爭相模仿構圖的作品 甚至國外也有 即使構圖類似 現場也能思考如何選擇前景等 修飾作品的特別之處 \
        再來拍攝幾張不同曝光 在這之前你要先了解 正常的曝光畫面跟你會合成哪幾部分 注意國外的自然風景  跟我們本土99%不同的是 他們會注意合理的曝光 \
        並藉由曝光凸顯表達的主題 在台灣 例如銀河 我不懂把地景補光或拉得比銀河還亮是什麼意思 重點是表達地景 但也會有全黑沒細節的不說了 \
        總之呢 暗處保留細節 並讓重點處保持正常曝光 剩下的色溫色階跟風格 可以參雜個人特色 最後檢查曝光有無爆掉 斷階 雜訊 拉銳利 \
        實際上中間有很多小細節 包括這種險惡地形要自拍也很危險 要完成一張照片 要將各種構成因素考慮進去 而最後取決於攝影最終重點 表達光線 \
        當天只有我一人 豪可怕" },
      { type: "link", content: "https://photos.app.goo.gl/1EKhKCuUtYJwbRZb8", label: "2017年6月10日 一晚遇到兩個水腫的new pa A-line難打到飛上天 整夜都沒得睡 病人跟我一樣好on就好了" },
      { type: "link", content: "https://photos.app.goo.gl/mfUNgVov5tiS148o6", label: "2017年6月10日 幹半夜4點妞胚 這個班難值" }
    ],
    "11": [
      { type: "link", content: "https://photos.app.goo.gl/CLTRSZrGcnWqShaW8", label: "2017年6月11日 好棒的旅行 好像回到自己家" }
    ],
    "12": [
      { type: "link", content: "https://photos.app.goo.gl/RU8RPvXjB5AYmuaF7", label: "2017年6月12日 手伸口袋太快直接被pt list的釘書針one touch 血糖顯示9487 唉今天各種災難" }
    ],
    "13": [
      { type: "link", content: "https://photos.app.goo.gl/rAaugLAnAYfEgL8c8", label: "2017年6月13日 病歷號2545621 三合一疫苗一針1700自費" }
    ],
    "14": [],
    "15": [],
    "16": [
      { type: "link", content: "https://photos.app.goo.gl/JfBqDjpAgX94XtwB9", label: "2017年6月16日 對不起真的不敢再鐵齒 吃完芒果鳳梨 病人plt掉到2000送micu 現在留著 然後micu不斷轉病人下來 對不起" }
    ],
    "17": [
      { type: "link", content: "https://photos.app.goo.gl/DoPFpL2zsLDKyRYk7", label: "2017年6月17日 \
        恭喜卒業おめでとう 這次的畢業送走的是最熟悉的學長姊與學弟妹 很快的明年迎來我的畢業 快不用再被當留級大學生惹 \
        先補上手機照片其他的相機合照晚點處理 卒業おめでとう graduation 畢業快樂" },
      { type: "link", content: "https://photos.app.goo.gl/KVro1hmWVUfCAjzi9", label: "2017年6月17日 三軍總醫院 實習醫生 追蹤我然後帶你看台灣一堆五四三的秘境美景" }
    ],
    "18": [],
    "19": [
      { type: "link", content: "https://photos.app.goo.gl/9c7VWwo8epg9xmRd7", label: "2017年6月19日 いいですね 謝謝梓翔哥teaching" },
      { type: "link", content: "https://photos.app.goo.gl/9h9kkKvwXXrQ3WU49", label: "2017年6月19日 \
        goodgoodbye 被幾個朋友提起 於是閃過片段的前任分手的記憶 想到時間過了快一年 而現在自己過得幸福美滿也不畏懼再提起 \
        走出傷痛是個過程不會知道有沒有那一條deadline不再想起 只能說隨著時間頻率減少 強度減弱 然後讓新的人新的記憶填滿自己生命 \
        現在我很感謝這個分手 卻無法原諒當初的決定 因為知道事後所為 實在不值祝福 分手後發生的事情徹底讓我改觀與成長 也看清自己某部分的爛與不長進 \
        也常常心裡會想到當初積極一點 就能戳破某個謊言 但慶幸當初沒有 因為現在看來 信任已經打碎無論當時謊言與否 都是回不了頭 \
        感謝當時的分手 更感謝願意花時間相陪的朋友 現在的自己心裡目標明確 瞭解缺少的與不足的 知道自己渺小與底線 知道謙卑與自省 \
        雖然還是常犯錯但感謝天一直遇到好人 短期的目標慢慢實現 我很貪心 希望醫學之外還能體會各種人生 因此把握時間鋪成 檢視自己吧 Monday blue" }
    ],
    "20": [
      { type: "link", content: "https://photos.app.goo.gl/tZXHGc7jhoXPc6jM7", label: "2017年6月20日 單挑成功 今晚三台也" },
      { type: "link", content: "https://photos.app.goo.gl/dQ7wwgywcNjFZMn7A", label: "2017年6月20日 同時care micu+sicu就是chill 看看幾點才能吃晚餐" }
    ],
    "21": [
      { type: "link", content: "https://photos.app.goo.gl/ShnLnxvCrfBhK8AA6", label: "2017年6月21日 \
        動態回顧偶然跳出了這張照片 回首一年前自己的青澀記憶猶新 或許在醫學上馬齒徒長 但至少很確定現在自己為了自己而活 \
        為自己找到生活的動力 只是每天都累得跟狗一樣罷了 sunrise 一個內科值班沒睡清晨走回宿舍巧遇超美日出的早晨" },
    ],
    "22": [
      { type: "link", content: "https://photos.app.goo.gl/AzaYPFbygEZ5mXEp9", label: "2017年6月22日 這次掉下去就不好笑了喔 10樓" },
      { type: "link", content: "https://photos.app.goo.gl/fVpEXb8w5JHCHinU7", label: "2017年6月22日 New tripod for Tokyo tourist" }
    ],
    "23": [],
    "24": [
      { type: "link", content: "https://photos.app.goo.gl/3UU56FriRXLGnXp66", label: "2017年6月24日 爺爺你還好嘛 叫叫CBA ACLS啟動OAO" },
      { type: "link", content: "https://photos.app.goo.gl/bQ8Pk3QrJbPb4ANf7", label: "2017年6月24日 \
        常常不務正業的自己 被叫老師心裏很deny哈哈 幫小朋友留下紀錄也是有技巧的 謝謝各位聽完我兩小時的課 下課 謝謝陳主任邀請 謝謝側拍 微甜時刻 下課 children" }
    ],
    "25": [
      { type: "link", content: "https://photos.app.goo.gl/kahPP9KgGPwDvQ418", label: "2017年6月25日 第一次自己打CVP 搞了很久還是失敗" },
      { type: "link", content: "https://photos.app.goo.gl/rRB78XkCxT4diizR6", label: "2017年6月25日 陳雷搞很久的VP不平衡 廠商來到醫院的路上 我就搞定他惹 輕鬆 陳雷請我喝飲料ㄅ" }
    ],
    "26": [
      { type: "link", content: "https://photos.app.goo.gl/J1fdCv42WkNWVmcm9", label: "2017年6月26日 CCU比MICU還tra 扯淡 24小時都沒休息看日出囉" }
    ],
    "27": [],
    "28": [
      { type: "link", content: "https://photos.app.goo.gl/jhZVpJUGJnmydko36", label: "2017年6月28日 \
        又遇到一個好喜歡的地方 三總RCC 噢不 這個月應該是micu03 是一個小加護病房啊啊啊 被剛剛好多的事情纏住 從早上到下午然後打完所有病歷差不多六點下班 \
        沒有之前同學交班說的輕鬆 卻有很棒的學長跟護理師們 唐V之前osce肺部PE時 主動說follow很久我的照片讓我受寵若驚 F3學長則是對於問題有問必答 有條不紊 \
        還手把手教我看CXR 耐心程度簡直衝破天際 雖然有人丟早餐在桌上還栽贓我 不過看在這麼nice的病房應該是能釋懷的" }
    ],
    "29": [],
    "30": []
  },

  "7": {
    "1": [],
    "2": [
      { type: "link", content: "https://photos.app.goo.gl/szPsUh8Vrs4A6kYWA", label: "2017年7月2日 跟三總ER nurse聚餐" }
    ],
    "3": [],
    "4": [
      { type: "link", content: "https://photos.app.goo.gl/JBD58j311aoEhbBX6", label: "2017年7月4日 時間總是提醒我們忘記多少事情 混同圈子的加油 醫護 紀錄一下年度一聚" }
    ],
    "5": [],
    "6": [],
    "7": [],
    "8": [],
    "9": [],
    "10": [],
    "11": [
      { type: "link", content: "https://photos.app.goo.gl/wufkbxdpFxwTrtHq6", label: "2017年7月11日 有空就補帶好像回到國考的時光 雖然無聊但趁年輕多投資自己 只有投資自己不會吃虧" },
      { type: "link", content: "https://photos.app.goo.gl/sBg55Tkqsi96ikfK6", label: "2017年7月11日 又想徵朋友 好想去海邊拍銀河拍日出 八月初有人想一起去蘭嶼或其他外島的嗎 想旅行看看大自然喇" }
    ],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": [
      { type: "link", content: "https://photos.app.goo.gl/e5M9Hiwoovi3JWKGA", label: "2017年7月17日 對多數人可能無感 對我卻是曾經存在過的回憶 雖然 雖然真的不想再想起 除了手作柴魚 還有章魚燒能做呢" }
    ],
    "18": [
      { type: "link", content: "https://photos.app.goo.gl/dXmCKSxSNEBNPUHf8", label: "2017年7月18日 \
        趁還能說夢話的時候說說夢話 對於自己的人生 打算在能退伍的當天立即退伍 不奢望賺大錢當大官 此生最大的希望 是半流浪的走遍全球 \
        並且走到哪拍攝到哪 逝去之前將用旅行填滿後半生 並都留給風景攝影 看盡世界的美 常常想那些自由業攝影師該怎麼三餐溫飽 或許賣圖庫或本身就很有錢 \
        但礙於自身的責任與能力不足 還是要逼自己努力 把醫學顧好 當不成名醫 也沒有想 也要當盡責的醫生 但未來的那天 希望別忘記這時內心的熱血澎湃 \
        希望別被現實安逸打敗 一定要不畏困難的出發 朝著天涯海角而去" }
    ],
    "19": [
      { type: "link", content: "https://photos.app.goo.gl/nhV2tioDHLYwyQw59", label: "2017年7月19日 值班還過敏 痛苦ing 被我翻到這好東西等下打一支" },
      { type: "link", content: "https://photos.app.goo.gl/E1J4cxU7WXeUL3RR6", label: "2017年7月19日 \
        運輸班長遲到了50分鐘 是中間派遣聯繫出問題 後來趕來一位老阿嬤 當下被年長護理長罵並且當面說要投訴 \
        其實那位來的阿嬤何其無辜也許她平常很努力剛剛也是趕過來的 當然也不能說投訴他們錯 畢竟不知道當時遲到50分鐘的班長是誰 \
        只是學姊的感覺像找人發洩而不是就是論事 這一切都不甘我事 只是覺得人之間就是互相體諒 發洩情緒得到緩解 卻常讓無辜者受害 \
        大概這樣啦 要說為急忙跑來的阿嬤班長打抱不平也是真的ㄏㄏ" }
    ],
    "20": [
      { type: "link", content: "https://photos.app.goo.gl/AxKxoLNA3iANB6YV8", label: "2017年7月20日 不嫌棄我作品的歡迎追蹤我新專頁 專門只po攝影作品而已" },
      { type: "link", content: "https://photos.app.goo.gl/hZhjFrCGxPRUpZTp8", label: "2017年7月20日 \
        外澳晨曦 圖文不符 自己還是剛踏入醫生生涯的毛皮小子 對這些事卻有點體悟 太多太多華而不實的廣告 靠話術吹牛有效療法或創新思維 \
        打著別人都白癡不知道 只有自己最專業最前衛 輔以幾個不曉得真假的個案 就想鼓吹別人相信並花錢 加上病人本身痛苦 \
        又害怕醫療行為的不舒服與之後的副作用 傻傻被騙 再我看來無異鴕鳥心態 怕正規治療以為有捷徑治病 這時想想自己努力找了許多文獻輔佐case report \
        還是在晨會被主治電死在台上 再想想平常自以為對藥物手術有所瞭解異想天開 跟住院醫生討論才發現自己如此膚淺 \
        這時看看那些網路療法跟民間亂七八糟的偏方 完全沒有驗證就當專業醫療 便會覺得自己的努力 有天花在病人身上 是否因病人一時誤信錯誤偏方 而付諸流水 \
        有療效無傷害的醫療行為本身已經不容易 對抗疾病本身 還要對抗社會中錯誤的資訊 才可能好好治療病人呢 講屁話別太認真看" },
      { type: "link", content: "https://photos.app.goo.gl/K7Gmx3KzhVruTNa99", label: "2017年7月20日 \
        試試暴力破解法 用手進去喉嚨拉管子 之前在內科學長這樣放的 其實也不是暴力 確保不會被咬而且病人不會太躁動 \
        就一隻手伸進去放 另一隻手在外面拿ng 困難ng可以這樣 確確實實看過學長示範也自己做過 我上面留言是誇張點 但不是用暴力哈哈 \
        補充 伸進嘴的手用兩指夾住ng 如果已經帶進一定深度 就把手拿出" },
      { type: "link", content: "https://photos.app.goo.gl/UMGAB69dgdBFAq9n7", label: "2017年7月20日 原來外面已經有人做了 三總有沒可能也跟進呢 不只讓一般民眾理解剖腹產的過程 也能順便為媽媽跟寶寶留紀錄" }
    ],
    "21": [],
    "22": [
      { type: "link", content: "https://photos.app.goo.gl/B9e7yFksC4vg4YaZ8", label: "2016年7月22日 \
        我好累 真的好累 可是我整整24小時睡不著了 一闔上眼記憶就撕裂著 痛得醒來 我不知道幾時會病倒 但是快了 甚至工作也無法讓我分心 \
        這個時間點 我的眼睛雪亮了 看得清清楚楚了 但我確不曉得是不是該相信記憶中你說過的話 我相信你不會騙人 我相信你記得初衷 就算我愚蠢著被騙也得相信 \
        過去未來 究竟哪個是真實的你 都是也都不是 不過沒有一個時空存在著永恆的我們 我們就是現在的我們 不要去相信歌詞裡的幻想 真切的力量存在你我彼此歷練之後的陪伴 \
        我請自己 真真切切的思考 我要的是什麼 決定是什麼 這個決定是我的 而決定之後誰也阻止不了我去履行 這是屬於我自己的事情 卻是為了過去而痛著 為著未來而奮力一搏 \
        死都不會如此痛苦 800多天的努力只要一句話就能否定我 獨角戲罷了沒有意義" }
    ],
    "23": [
      { type: "link", content: "https://photos.app.goo.gl/BtoxF7ipB56XFnNBA", label: "2017年7月23日 \
        one night爬合歡北峰 主峰 拖著疲累身軀 回台北途中趁記憶還熱著先把一些騰上 猶記幾個禮拜前拉室友跟他女友 與我一起征服合歡 \
        事前沒有什麼準備 只是租了車 上路之後討論行程結果爬山難度越規劃越高 我開了一百多公里 第一晚直攀合歡北峰 一個小時多的單程落差大 中間認識幾名20多的哥哥一起爬 \
        雖然沒有銀河卻遇見火燒雲 晚上十點下來我開回清淨吃點東西 睡了不到兩小時 繼續找了不得了的人物帶我攀主峰 室友他們深刻體會攝影行程疲累痛苦之後 第二攀就不跟了 \
        Kelvin 2015國家地理青年攝影組世界大賽冠軍 帶我再攀逼近陵線的路線 拍攝隔天的日出 行動力體力跟見解都讓我佩服 非常感謝他的無私相助 也謝謝室友他們想陪 \
        接觸過許多與我年紀差無幾的攝影師 讓我最敬佩的是 他們很清楚自己想表達什麼 想拍什麼 不隨從不慕名 每位都很有自己風格 於是我更確定 必須堅持自己理想 \
        必須讓想法更上層樓 不因別人言語而動搖 謝謝一路以來給予我肯定的朋友 攝影並非本業 但我會如同本業般用心對待 以後會將作品更有系統的整理 還請不吝追蹤支持 謝謝 \
        合歡山 sunrise landscape friends 不要免強身體最重要 不過我們安全下山了 你們很棒啊" },
      { type: "link", content: "https://photos.app.goo.gl/xr3WGedek85w98C27", label: "2016年7月23日 \
        種種的回憶 我以前原來是個廢到底的垃圾 原來你快樂 比世界上任何事重要 我卻像小孩 有時予取予求 有時無理取鬧 忽略了你好多感受 \
        修著以前長途旅行的照片 一點一滴回想著檢討著" }
    ],
    "24": [
      { type: "link", content: "https://photos.app.goo.gl/WxgiMBryb9hT9KuZ7", label: "2017年7月24日 ふじさん お久しぶり にほん ふじさん thk you you can follow my instgram as well" },
      { type: "link", content: "https://photos.app.goo.gl/gDoptLvVqMeEeo6PA", label: "2017年7月24日 \
        Photography Sharing Taiwan Welcome follow me 這裡是我走遍足跡 分享攝影作品的平台 如果你也喜歡攝影或者我的作品 \
        歡迎追蹤並找我交流 婚禮婚紗 晨昏風景 街拍夜景銀河人文 人像創作 表演商攝網拍 都有涉略 有服務需求歡迎訊息詢問唷" }
    ],
    "25": [],
    "26": [
      { type: "link", content: "https://photos.app.goo.gl/FXRzFBwgVTMwZ7Hs8", label: "2017年7月26日 Colorful view outside my window of the school dorm room Love it and the awesome sky relaxed me very much" },
      { type: "link", content: "https://photos.app.goo.gl/d9gyWJJnxEeP7Ntj8", label: "2017年7月26日 付出本來就不一定有收穫 但是會學到經驗 學長加油 繼續拼" },
      { type: "link", content: "https://photos.app.goo.gl/XpJ6R4QR2tKSc96A6", label: "2016年7月26日 \
        我還是原來的那個我嗎 我覺得我真的已經開始不認識自己了 也許這句話是某句臺詞 但現在沒有比這句話更適合描述自己 \
        我會好好思考我為何而活 活著對我的意義又是什麼 在茫然中 前進 思考 徹底反思 人生 意義 思考 反省" }
    ],
    "27": [],
    "28": [],
    "29": [
      { type: "link", content: "https://photos.app.goo.gl/73ov2uQhN1ZDpi71A", label: "2017年7月29日 \
        有幾個朋友問我 最近拍風景的風格怎麼改變了 我的回答是這樣的 當然我後製方面遇到貴人 讓我能夠突破瓶頸 \
        也自己有辦法利用圖層做出類似luminosity masking的方法 第二個是叛逆了點 到了台灣風景人喜愛的芭樂點 我偏不拍大家都拍得地方 \
        之前外澳扇形我不拍扇形 合歡主峰我不拍大家愛去的山頂 粉鳥林我不拍典型的三顆岩石 其實 找到自己喜歡的角度並不容易 但卻格外有收穫 \
        當然 格外感謝開車的蛤哥 還有兩位厲害的攝影朋友陪同 讓等景跟白跑的過程不無聊" }
    ],
    "30": [],
    "31": [
      { type: "link", content: "https://photos.app.goo.gl/VB96DVYSGaitwz47A", label: "2017年7月31日 \
        我是一名軍校 醫學生 這代表相對別人 我選擇了自由被剝奪到少之又少 人生的路程幾乎被註定的路 偏偏經過高中以前考試讀書的青澀學生時代 \
        如今才找到自己有興趣想做的事情 攝影 在我的工作環境 很要求醫生訓練本份 不只盡到責任 更要犧牲奉獻自己 盡可能沒有假日沒有下班 \
        把歲月投注在醫療 把自己燃燒殆盡 常常在醫療學習上找到成就感 當醫生並不壞 幫助別人的過程中讓我感到滿足 可惜生活品質真的糟糕到不能糟糕 \
        在我有體力 有衝勁 有想法的時候 卻猶如困獸 等到老了我又有多少能耐能冒險 這真的是我想要的嗎 真的不只一次問過自己 卻遲遲沒有答案給自己 \
        我志不在賺錢升官 不在大富大貴遠近馳名 只求此生賺剛剛好的錢 夠我好好走遍世界 好好攝影就好 路還很長 我還會繼續思考自己活著為了什麼 \
        我知這想法聽起來很荒謬幼稚 但寧可被嘲笑 也不想老了後悔 人生 是我自己在過的 發牢騷" }
    ]
  },

  "8": {
    "1": [
      { type: "link", content: "https://photos.app.goo.gl/TtiayFjJN1ZSQUPV6", label: "2017年8月1日 就在闔眼的那剎那 小兒闌尾炎便準時敲門了 上刀囉" }
    ],
    "2": [
      { type: "link", content: "https://photos.app.goo.gl/LooHSmeHsYkpkUw2A", label: "2017年8月2日 禮物again 感謝日文老師 可以稍稍撫慰一下小兒外上刀到傍晚的心情哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/JsSfHAdcxeAm76Hk7", label: "2016年8月2日 \
        腸胃內科 實習 第一天 嗯是一切好的開始呢 因為主治出國一個禮拜啦 \
        現在除了晨會等例行公事 實在是沒事啊 但某些原因 其實我並沒有特別開心 但是既然有機會 就把握時間看看書吧 \
        走進好久沒來的圖書館 充滿著大學時的回憶 二樓的討論室 翠華齋 一樓的單人座位 二樓左邊裡面的轉角座位等等 \
        一幕一幕的回憶刷過腦海 雖然現在帶著酸苦的心情想起這些 但我相信會更好的 充實自己 讓自己比過去不一樣 過去應該直接蹓回去打電動了 \
        開工吧 期待回憶裡的場景 未來還能繼續出現在圖書館的某一角 firstchoice 回憶" }
    ],
    "3": [],
    "4": [
      //{ type: "text", content: "測試文字" },
      { type: "link", content: "https://photos.app.goo.gl/nsukrSJaPRh8LTmD8", label: "2016年8月4日 \
        世界上有種男人跟畜生一樣 把剛分手的女生吃死死 利用這點 滿足自己齷齪噁心的性需求 我告訴你 幹你老爸老母操機掰 當初怎不把你射牆上 \
        我幹你全家 去死一死吧 最好不要讓我遇到你 以後你再敢動她 等著上社會新聞頭版 不過你應該也看不到了 操你爸媽是垃圾 沒把你教好 \
        家裡開中藥店 等著被砸店 畜生" },
      { type: "link", content: "https://photos.app.goo.gl/xTMABD1L8PYto82y7", label: "2016年8月4日 \
        希望這個開中藥店的畜生 這禮拜給我把你那隻爛鳥勒緊 我絕對會找到你 幹你娘 幹你十八代祖宗 我會先剁你手 不要懷疑" }
    ],
    "5": [
      { type: "link", content: "https://photos.app.goo.gl/Qh57F5GRnVFLMPFn6", label: "2016年8月5日 \
        過了這一晚 我發現 無論是誰 還是先疼自己最重要 擇我所愛 愛我所擇 一點都不容易 \
        這一關 我過得去嗎 可以 原諒滿腦精蟲的畜生 我做得到嗎 也許無法 如果兩年多前就知道會如此坎坷的話 我會做什麼選擇 \
        不能停下腳步 後悔沒用 先自愛" },
      { type: "link", content: "https://photos.app.goo.gl/pvZKiFYrvdBhbveZ6", label: "2016年8月5日 \
        我只是想認真當個好醫生 用心學習跟照顧病人 可是我真的累了 我好像連自己都照顧不了了 兩個多禮拜 我因為妳每天幾乎戰戰兢兢 撕心裂肺的過 度日如年 生不如死 \
        記得內科第一個月 因為太過忙碌跟直接毫無經驗的進入內科 那時候的確也是每日如戰場 壓力非常大 但那時候我不會有害怕的感覺 \
        只是現在我每天都很害怕 害怕永遠失去妳 害怕妳傻傻被騙 害怕我沒有能力幫助妳 害怕妳不知道我在幫助妳 害怕我只能眼睜睜看著妳離去 說實話 我已經崩潰了 也許我也生病了 \
        我不想跟任何人講太多話 似乎把自己封閉起來 讓自己無止境的流淚跟崩潰才能獲得平靜 妳不知道他對妳你造成多大的傷害 這是我更難過的地方 但是感謝妳願意想 願意告訴我妳錯了 \
        可惜這個錯是我永遠的傷痕 一個超越我底線打破我原則的傷害 同時也是我曾經對妳的忽略與錯誤態度 要付出的龐大代價 但我依然挺住腳步 繼續前進 謝謝妳給我信任 \
        傷痕依舊 但是信任會跟著時間撫平情緒 等我 我被擊垮了很多次但還是爬了起來 如果有什麼能證明真愛 我想那是極端的痛苦 值班 疲憊 支離破碎" }
    ],
    "6": [],
    "7": [],
    "8": [
      { type: "link", content: "https://photos.app.goo.gl/x19fGkCqu1Yt7B4q9", label: "2017年8月8日 \
        Follow us for more amazing works 看著夕陽落下 暈黃的金光閃爍著 此時我們沒有一聲交談 沈浸在時間靜止的這一刻 \
        歡迎攝影的朋友追蹤我的ig啦 這個帳號是私人 以後不會常po圖打擾大家" },
      { type: "link", content: "https://photos.app.goo.gl/fTcSU97ZJp2H8Uyy8", label: "2016年8月8日 \
        好像全世界 只有我一個人還記得妳的真實面貌 還記得妳最真的笑容 好像就是今天這句話 \
        那你有夠大的肩膀與胸懷能讓我不用再心疼她嗎 可以 我決定全盤接受妳的價值觀 我決定即使被欺騙也不後悔 最後的真愛 我想將它燃燒殆盡 \
        妳曾說 希望有一天我不要受不了妳的脾氣 受不了妳的任性跟霸道 既然妳用最狠的心來打擊我了 我決定用夠大的胸懷 全盤包容 把妳找回來 \
        愛 痛苦的值班 痛苦的日子 我還沒放棄" }
    ],
    "9": [
      { type: "link", content: "https://photos.app.goo.gl/vhnL4YD7cZApQuaq8", label: "2017年8月9日 \
        這次半夜急刀會是intern生涯最難忘的 深刻體會醫護人員也是人 疾病面前人人平等 說倒就倒 我沒事 有感而發" }
    ],
    "10": [],
    "11": [
      { type: "link", content: "https://photos.app.goo.gl/wqJbksTETbutRL8BA", label: "2017年8月11日 \
        風景攝影經驗分享會 攝影小撇步 不解釋了 有興趣歡迎來內湖三總參加 詳細地點待公布 若剛好校方有事情需要改期也會通知 報名請直接私我或臉書搜尋la vision team photography 謝謝 龍洞合成銀河" },
      { type: "link", content: "https://photos.app.goo.gl/uWJ4b3NosNxoTzxy6", label: "2025年8月11日 直行車佔用轉彎專用車道" },
      { type: "link", content: "https://photos.app.goo.gl/a1LrepZJREGDXndZ6", label: "2016年8月11日 \
        經過同學的告知 我想告訴所有之前在ig 看過我衝動po文的朋友 不用再私下猜跟謠傳了 我現在就說真相 \
        實際的狀況就是 分手後與前女友的談論過程中 我把自己對前女友的想法加已揣測 加上偏差主觀 並且衝動發文 事後冷靜發現 跟本天差地遠 任何文章所提事情只是當下情緒爆發的猜測 \
        本人已經跟當事人道歉 發文原因是因為從同學傳來 不得不正視 \
        當初的發文是我幼稚的舉動 我的個人行為也與前女友完全無關 如果還有任何問題 我都寫在這裡了 請不要再繼續私下做無謂且傷人的解釋 一人做事一人擔" }
    ],
    "12": [],
    "13": [
      { type: "link", content: "https://photos.app.goo.gl/TcfDzTdFFJ1JAybi7", label: "2017年8月13日 真的好愛小兒外科 能有自己的時間學習充實興趣 任何工作都一樣 好的生活品質才活得像個人 唉" },
      { type: "link", content: "https://photos.app.goo.gl/hfSiosDTYSSwiTw26", label: "2017年8月13日 La vision team團員教學結束 很認真修圖" }
    ],
    "14": [
      { type: "link", content: "https://photos.app.goo.gl/jEEzhYw615Cw3JzU6", label: "2017年8月14日 為了後天上合歡露營 燒錢買裝中QAQ" },
      { type: "link", content: "https://photos.app.goo.gl/x72VLr3nJixQxdMS7", label: "2017年8月14日 給我一片大地還不夠 請再給我一片星空 三軍總醫院內有我的攝影分享會 歡迎在facebook搜尋la vision team粉專填寫報名表單唷" }
    ],
    "15": [
      { type: "link", content: "https://photos.app.goo.gl/cKcCD72FPVYUakZm8", label: "2016年8月15日 \
        每一張大卡小卡的收拾 都是從我身上割下一塊血淋淋的肉 因為有妳無悔的支持 才讓我有如今的成長 但我希望最後的成長 可以用來回饋妳對我的好 可以用來證明我夠資格給妳幸福 \
        只是我不知道 該用什麼方法去完成 該用什麼心態去面對 或者 我該直接撒手不管 放棄這一切嗎 這樣的處境很無力 真的很無力 我到底該怎麼做才好" },
      { type: "link", content: "https://photos.app.goo.gl/5gFB53sSVrwq5tpcA", label: "2016年8月15日 \
        究竟還要多久 才能找到生命中的平靜 跌跌撞撞至今 好不容易才要抓穩了卻突然摔落 當我爬起來的時候 是否能再找回平靜的安心感 是否能再放鬆臉頰再次微笑 \
        sunset sky bluemoon" }
    ],
    "16": [],
    "17": [
      { type: "link", content: "https://photos.app.goo.gl/Ndg2WMMLTJUXjpzZ7", label: "2017年8月17日 準備明天上山囉 為明日合歡銀河日出日落準備 好累" }
    ],
    "18": [
      { type: "link", content: "https://photos.app.goo.gl/JKw2rfs4jbr1TeGZ7", label: "2017年8月18日 地墊沒呼吸心跳 趕快CPR循環" }
    ],
    "19": [
      { type: "link", content: "https://photos.app.goo.gl/UMxiFyVWNVJrCtEH6", label: "2016年8月19日 \
        半夜一點開始 陸陸續續新病人開始入院 奇怪的是這時間我居然完全睡不著 精神奕奕 於是接完之後肚子餓得要命 買了宵夜 隨意的點了YouTube一首歌 默默寫下今天滿溢的情緒 \
        下班的時候跟卓豪學長打招呼 看他用著燦爛的笑容 告訴我不要因為很多毛事失去當醫生的熱情 我很羨慕他 即使在忙碌的住院醫生生活 也有自己的愛人當歸屬 \
        醫院走道上看到一位父親推著輪椅的兒子 兩個人緊靠著窗戶 熱絡的玩著Pokemon抓著怪 這個遊戲還是有帶來好處的 \
        病人讓我早中晚都耗很多時間陪他去做治療 先是早上去RT定位出血點 中午去治療做止血 晚上值班還給我喘起來急推照CXR \
        令我印象深刻的是前天宣佈他胃癌合併肝轉移 是第四期時 離婚沒有家庭的他說了 唉怎麼不讓我這麼死了好了 他的家人大概只剩下兩個女兒 其中一個還是奧運選手不在身邊 不斷胃出血的他 失去求生意志 我也只能袖手旁觀 \
        晚上接到一個修冷氣被電擊的老伯 算是內科收過主訴最特別的 然後收到腎臟科 好吧 也許有機會發生橫紋肌溶解 謝謝妳 我會振作" }
    ],
    "20": [],
    "21": [
      { type: "link", content: "https://photos.app.goo.gl/vCc7GpHwso5W2aHcA", label: "2016年8月21日 \
        未來的每一天 都得自己走下去 只有變得更好 才有機會遇到更好 封閉過去的甜美與善良 拖著長長的血跡前進 希望能隨著時間 一點一點割下內心的軟弱 \
        下個月跟潘副院長 骨科的日子只有苦 苦的日子只有自己知道 也只有穩穩走 不要想太多才能好好學習半夜面對空蕩的醫院走廊 也只有當過實習醫師的人懂 努力與苦撐 永遠是一個人的事情 不要奢求誰能當你的避風港 \
        未來的我是怎麼樣的人 就會值得怎麼樣的妳 這段痛苦不堪 生不如死的日子我這輩子都不會忘記 我是怎麼走過來的 以後也會這樣走下去 midnight alone" }
    ],
    "22": [
      { type: "link", content: "https://photos.app.goo.gl/isto48x1XKz3AZgJA", label: "2016年8月22日 夜騎 台北 騎個夜台北" }
    ],
    "23": [
      { type: "link", content: "https://photos.app.goo.gl/RnybMSPhrLZAm4gLA", label: "2016年8月23日 \
        希望妳還記得我們曾經看過的一句話 我知道人總有取捨 你取了你覺得重要的東西 捨棄了我 這只是你的選擇而已 \
        這只是妳的選擇而已 因此我接受 妳可以任性的 要的時候要 不要的時候不要 時間會告訴妳我 失去了什麼 又得到了什麼 什麼該後悔 什麼該保握 \
        但錯過了 就可能會永遠錯過 只是會有一個人需要帶著傷痛走下去 好久不見 謝謝妳 我會好好的 也不再想為什麼 加油" }
    ],
    "24": [],
    "25": [
      { type: "link", content: "https://photos.app.goo.gl/77c4X5oSsDNjbg869", label: "2017年8月25日 \
        Photo by my Iphone 6s 非醫療圈朋友聊起關於台灣醫療體系是否納入勞基法 由於我的兩個身份 就破例以自己是醫生的角度發言 \
        今天沒有值班 晚上運動完極餓因此直接衝去最近的小吃街 就在抵達的一步之遙 學長傳訊息過來 嗨嗨 有一個 氣胸 在急診 \
        本能一個U字回轉 我衝回急診 不單是為了幫忙救人 更是不願錯過難得的學習機會 到了外科急診室 男性 十多歲青年 左側氣胸面積達42.6% \
        vital sign還穩定 我摳了值班同學來 然後著手準備無菌手套 麻醉 鋪單 手術器械等 便開始短短半小時的tubal thoracostomy胸管插入 \
        幸好手術順利 照完x光跟CT辦理住院 等待明天再做胸腔鏡 我想表達 順便狠狠打臉那些醫界大老講的幹話 勞基法會害醫病雙輸 勞基法無法培養醫師的責任感 \
        這兩句話真的狗屎 還記得麻醉風暴第一季 陳顯榮院長在事故急救現場對葉建德說 葉建德你不是醫生嗎 正因為這句話讓葉建德因為恩怨與無奈放棄的醫療身份 \
        再次醒來加入急救 醫生 是很特殊的行業 踏進來了便終身有使命感 並不因為你下班或轉換跑道而不是醫生 面對著病人 面對著無知的病情有無形的力量推動我們找答案 \
        找療法 我們不會因為勞基法保障而放棄學習與救人的機會 就像我不會因為下班而放棄這個機會 哪怕這個疾病並不常出現 也許這次放過學習機會 下次就是自己上場 \
        問自己 扛得住嗎 勞基法該保障醫療人員的生活品質 也該給予更多酬勞 但我們不會因為勞基法而怠惰 沒有人該為別人白白犧牲奉獻 僅此而已 \
        勞基法 醫病環境 醫病溝通 健保 手術燈不輸人像持久燈 tubalthoracostomy 氣胸 pneumothorax admission" },
      { type: "link", content: "https://photos.app.goo.gl/R41PtUNosSPDycf79", label: "2017年8月25日 可以停止用垃圾污染自然了嗎 人類" },
      { type: "link", content: "https://photos.app.goo.gl/ke5QpEDaejFfe4cZ6", label: "2016年8月25日 \
        小練重訓第30天不間斷 成效不到自己預訂的目標 再接再厲了 記得某天在宿舍樓梯間做伏地 一個男生默默站在我後面看了許久 聊天後原來是三總護理師 \
        之後只要他看到我在做都會駐足然後給我打氣 昨天還受到他的加油鼓勵 這種感覺有點奇怪 不過幸好不是吵到他就好 Keep going on" }
    ],
    "26": [
      { type: "link", content: "https://photos.app.goo.gl/Fw6gweEJi7oeJnAn8", label: "2017年8月26日 拍攝完成 照顧小孩 hen辛苦" },
      { type: "link", content: "https://photos.app.goo.gl/rc8p2EENu1pLbxS46", label: "2017年8月26日 はたらく 今天接案拍小孩" },
      { type: "link", content: "https://photos.app.goo.gl/yyfAeHB5BpyXM8sbA", label: "2016年8月26日 \
        其實所謂在一起 並不是互相依靠 互相依賴 如此久了會喪失照顧好自己的能力 當然也照顧不了別人 \
        慢慢的要走過難熬的傷痛 然後感謝妳這個決定讓我懂 無論任何一種感情存在 要依靠的一直是自己 \
        當我不再是別人壓力的時候 就能成為彼此前進的助力 當我不再是別人負擔的時候 就能為彼此生命共同承擔 \
        感情與工作都是如此 看透了黑暗面 也要收起玻璃心 生命會為自己找到出路 環境再坎坷 也不能失去自己的積極與誠心" }
    ],
    "27": [
      { type: "link", content: "https://photos.app.goo.gl/Dien47o2pDWhSRaf9", label: "2025年8月27日 不緊靠道路右側停車" }
    ],
    "28": [
      { type: "link", content: "https://photos.app.goo.gl/NzQYbKHtUorutaMh9", label: "2017年8月28日 \
        國防醫學院34教室 3樓 陳奕宏 HDR與圖層遮色片基礎應用 吳展旭 風景心路歷程與基礎拍攝分享 林偉峻 專業氣象判讀 \
        詳情請上fb搜尋吳展旭 連結已分享在版上 脫下醫師袍的我們 換了一個角色 繼續在興趣上一邊努力一邊享受" },
      { type: "link", content: "https://photos.app.goo.gl/f1rwDgUAbNhcK2P36", label: "2016年8月28日 今晚喝酒其它都不要想了" }
    ],
    "29": [
      { type: "link", content: "https://photos.app.goo.gl/YpiMSAxbuuSj9NUv9", label: "2017年8月29日 \
        小兒外科full run 滿滿的quality跟教學 這絕對是心目中第一志願的科別了 即使跟復健或整外相比 小兒外科依然吸引人很多 豪想直接fix噢" }
    ],
    "30": [
      { type: "link", content: "https://photos.app.goo.gl/DLKWBRvwkXxcofyY6", label: "2017年8月30日 月末聚餐 代表要離開小兒外科了 我難過QAQQQ" },
      { type: "link", content: "https://photos.app.goo.gl/8rFBUsxYktoPxxY26", label: "2016年8月30日 \
        兩三個禮拜以來漸漸調適情緒 以為即使痛苦也不會再痛哭 可惜晚上收到小生的來信 又點了他專頁的文章 \
        然後影片開頭的20秒我便爆哭了 非常悽慘的爆 倒不是因為劇情 而是想到了自己 第40天 每天我都追得很辛苦 然而今天當面看到她的冰冷 我發現自己無法招架了 每一次釋出善意 都變成身上多了一條傷痕 \
        我好像魯夫 在被敵人摧殘了數次之後 依然頑固的拖著滿身血爬起來 可惜不同的是 我真的輸了 \
        事實上我一直沒有告訴妳 也因為妳的臭臉讓我無法講出來 每一次找你見面 我只是想看到妳的笑容而已 就是這麼單純 所以沒有什麼特別目的 可惜我沒有成功 妳也從來不知道為何我想見面 \
        我不懂明明繼續走下去會越來越好 會越來越扎實 為何妳選擇停下了 但不管如何 我不能因此失去自己 我要用屬於自己的生活方式 慢慢好起來 我可以打敗仗 但不能不繼續打仗 \
        這是我最後一次發感情文了 真的很可悲 因為這些鳥事哭掉20年份累積的眼淚 再見了真的 再見了機巴痛苦的回憶 幹機掰我孬" }
    ],
    "31": [
      { type: "link", content: "https://photos.app.goo.gl/XGBGFMSwfSP46NMd9", label: "2017年8月31日 終於下刀 外科生活暫時結束 可以好好修圖惹" }
    ]
  },

  "9": {
    "1": [],
    "2": [],
    "3": [
      { type: "link", content: "https://photos.app.goo.gl/CsEoQXBreZHa1PWx8", label: "2016年9月3日 九三軍人節 可惜今天是刀一 整天穿著外科手術衣沒有機會穿軍服 所以到底要開刀的日本人什麼時候來啊 為了你我還沒吃晚餐啊啊" }
    ],
    "4": [
      { type: "link", content: "https://photos.app.goo.gl/vcvvKZVSMfKBAngm9", label: "2017年9月4日 這兩顆新電池被我丟進洗衣機洗 來實驗能不能用吧 結果居然可以" },
      { type: "link", content: "https://photos.app.goo.gl/7hbwwHKsc9aYDLrf8", label: "2017年9月4日 Fb搜尋吳展旭 追蹤我 有揪拍照或討論後製都在那裡唷 背景是已經處理好的照片一角" },
      { type: "link", content: "https://photos.app.goo.gl/nsR3xPY87B88cKEX8", label: "2017年9月4日 鎖定桌布跟主畫面都是自己的照片 覺得質感不錯 絕對不是因為沒女友的照片" },
      { type: "link", content: "https://photos.app.goo.gl/pGJBb3UkARgaXhhr7", label: "2016年9月4日 \
        自己的私人時間假的 超過十分鐘的吃飯時間假的 充足的睡覺時間假的 下班的時候有人當靠山假的 只有桌上簡單的便當跟每天超過幾十小時的手術是真的 \
        吃完交班總醫師請的最後的晚餐 就要做好下地獄的決心 OK這樣的生活也不賴 每天聞著血味跟各種挖骨怪機械的聲音" }
    ],
    "5": [
      { type: "link", content: "https://photos.app.goo.gl/HhyGxhELYyVdppMy7", label: "2017年9月5日 相機 幹自己沒帶記憶卡怪我囉" },
      { type: "link", content: "https://photos.app.goo.gl/PMaL5wFEtatqo4Cd8", label: "2017年9月5日 和煦夕陽 最適合吹著涼風 擦著昨天西子灣留下的海水了 一點拍照壓力都沒有 好不愜意呢 幹我還是轉型賣笑好了" },
      { type: "link", content: "https://photos.app.goo.gl/qqz52LyF563uZcFE6", label: "2017年9月5日 答案是來拍照嗎 不是歐 因為記憶卡不想跟我出門 哇哈哈哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/7seUS6sY4uPAsftD8", label: "2017年9月5日 這麼和煦的陽光適合做什麼呢" }
    ],
    "6": [],
    "7": [
      { type: "link", content: "https://photos.app.goo.gl/FfHwA9mis8eXcJm29", label: "2017年9月7日 捷運上意外摸到口袋中的1000 真是又驚又喜 感覺今天是一個美好的開始" },
      { type: "link", content: "https://photos.app.goo.gl/qwWcq21QhZrSbJth8", label: "2017年9月7日 \
        你相信嗎 在小小的台灣裡 依然存在天堂般的角落 整個十月我都在東京 有朋友要去日本嗎 想一起拍或被拍都可以ㄛ 想留下自己婚紗或和服照的都來來來 免費創作包您滿意" }
    ],
    "8": [
      { type: "link", content: "https://photos.app.goo.gl/jL2coUwBwDhsNX4j6", label: "2016年9月8日 \
        每天看不見終點的刀房日子 身心都非常疲倦了 我開始懷疑自己適不適合當醫生 其實我並不是很想 只是選擇了沒有退路 只有讓自己愛自己所擇 要撐住 不能放手努力過的歲月 \
        旅途終究還是一個人上路 想念自己的日子 想念只把風景留給自己的日子 想旅行了" }
    ],
    "9": [],
    "10": [
      { type: "link", content: "https://photos.app.goo.gl/Lotxr9vkZeBd2tDA7", label: "2017年9月10日 唸書修圖修圖修圖吃飯修圖 修圖修圖拍照修圖修圖修圖 實習修圖修圖修圖" },
      { type: "link", content: "https://photos.app.goo.gl/eua94PxQEqnxcTJ98", label: "2017年9月10日 我的新桌面 追蹤我 年底目標 設計明信片 規劃修圖課程 追蹤獲得資訊吧" }
    ],
    "11": [
      { type: "link", content: "https://photos.app.goo.gl/GS4ha6NgSMNT6iru6", label: "2016年9月11日 \
        今天再來隆重介紹一下刀房雞腿便當 沒錯今天刀一 從早上八點到現在總計20幾分鐘的吃飯時間 其他都是上刀上刀上刀刀刀刀 吃完還有三台刀準備戰到晚上十點 \
        老弟 10分鐘吃便當可以嗎 等下沒有人幫我抬腳 我實在很懷疑學長今天有沒有吃飯 今天心情跟外面的天氣一樣鬱卒 幸好還有學長請的草莓歐蕾跟進步的便當菜色 \
        最後我只告訴自己 這就是人生啦 開好開滿 不休息" }
    ],
    "12": [],
    "13": [
      { type: "link", content: "https://photos.app.goo.gl/dYENM1uB2XrjTifu9", label: "2017年9月13日 \
        我珍藏有無數種類的攝影 爬樓 街拍 夜景 空拍 人文 日出日落 銀河 婚紗等等 對我來說 是儲存創意跟攝影眼的好參考 \
        我得厲害的攝影師 不是挑食 不是自以為是不看別人作品 而是能夠廣納別人的思維 轉化成自己的無創 共勉之" }
    ],
    "14": [
      { type: "link", content: "https://photos.app.goo.gl/66i5Li45BjZunvLM6", label: "2017年9月14日 各位觀眾 帶你去更多點拍爽爽" }
    ],
    "15": [
      { type: "link", content: "https://photos.app.goo.gl/PJiEDk9deJY2yMtD8", label: "2017年9月15日 \
        上半月交班離開前不打病歷 留給我下半月打 到底什麼意思 十幾篇喔補起來真的很賭爛 把爛攤丟給下個月的很爽 幹 \
        九月上半的intern沒有在交班前完成病歷 真的太誇張了 故下半月intern吳展旭只好代打" },
      { type: "link", content: "https://photos.app.goo.gl/iEUFqqGntAWaCbeB8", label: "2017年9月15日 為了拍照 把病歷補完先QAQ 好多" }
    ],
    "16": [],
    "17": [],
    "18": [
      { type: "link", content: "https://photos.app.goo.gl/ms25gJqq8SzB6y5j6", label: "2017年9月18日 大半輩子的時間 都得在醫院內看著好天氣乾瞪眼 最近攝影衝的很兇 幫助很多朋友 但仍希望 未來本業可以幫助更多人" }
    ],
    "19": [
      { type: "link", content: "https://photos.app.goo.gl/78GfsgwVfA6aoYfa9", label: "2017年9月19日 看得眼花花 照片少修一點 論文多讀一點 橫批 能森啊" }
    ],
    "20": [
      { type: "link", content: "https://photos.app.goo.gl/7m2mJ4VBY78o5wax5", label: "2017年9月20日 \
        四年前第一次去蘭嶼就跟自己約好 畢業之前會去第二次 而第二次便這麼倉促的出發 老實說若不是已經繳了住宿費 還真的沒啥動力 \
        這是大學第一次獨自的長途旅行 什麼行程都沒準備反正就是丟自己過去 體會一下何謂流浪 大的登山背包帶了電腦 相機 腳架等 每一處都可以是落腳點 \
        天下之大何處不能是家 但也就僅此一次 這是在下個月大旅行之前的小旅行 希望未來長程的旅途 都不再是一個人 反省 這半月復健科很無恥的請兩天年休 \
        剛好一個同學又去中榮 對不起剩下一個同學會很suffer journey 實現約定" },
      { type: "link", content: "https://photos.app.goo.gl/SfojkzAHUcevTpNP9", label: "2016年9月20日 \
        帶著一些讀物跟簡單的晚餐 連假輕易的結束了 鬱悶的是帶許多想解決的疑惑回鄉 直到現在卻仍沒有答案 把內心的結帶來帶去 似乎是壓力的源頭 幸好寶可夢轉移了注意力 幸好同學朋友們依舊開心 回鄉還是最好的療癒 \
        景物依舊 而過幾年以後我又會如何看待 那麼等著時間走過再慢慢體會 大概是最消極也是唯一的辦法了 \
        地獄的骨科還有兩個禮拜 要堅強 要撐住" }
    ],
    "21": [
      { type: "link", content: "https://photos.app.goo.gl/WFTsJ35TY95XPyuj8", label: "2025年9月21日 跟Barry比心電圖目前大輸五分追得上嗎" },
      { type: "link", content: "https://photos.app.goo.gl/zHXyt9AkmptewenHA", label: "2025年9月21日 ECG進階課程真的太精彩實用 專家就是把細節看到骨子裏" },
      { type: "link", content: "https://photos.app.goo.gl/UQQuKCYz8T52F1yAA", label: "2025年9月21日 週末一早被鞭策來上課" },
      { type: "link", content: "https://photos.app.goo.gl/vvYCMRC4UVUGBxXw5", label: "2025年9月21日 他兒子超有天份欸" },
      { type: "link", content: "https://photos.app.goo.gl/qTvvtCzhjgCJ1DmaA", label: "2024年9月21日 芒果軟糖 超級愛吃 希望以後能再回越南" },
      { type: "link", content: "https://photos.app.goo.gl/AG6j6LgVZLYYmAnL7", label: "2023年9月21日 想當年入伍訓是在地上爬旁邊引爆炸彈" },
      { type: "link", content: "https://photos.app.goo.gl/AWqoRNuSJ9M6akqp6", label: "2022年9月21日 I don't like to much ketone in my body" },
      { type: "link", content: "https://photos.app.goo.gl/25KjWZ5rkbgYrLh78", label: "2021年9月21日 大推的腳架清理&修理" },
      { type: "link", content: "https://photos.app.goo.gl/dHMdgjZiP4qwx34n7", label: "2020年9月21日 內心都有天使與惡魔交戰 不爭氣的用自己睡覺時間認命開" }
    ],
    "22": [
      { type: "link", content: "https://photos.app.goo.gl/q2C6sRfdTb9M1dA69", label: "2025年9月22日 雖然發美食的頻率會下降 但有信心推薦的店家是絕對好吃的 也會慢慢轉換到THREAD上經營囉" },
      { type: "link", content: "https://photos.app.goo.gl/Kk8mmQ3yc7vGvRQQ9", label: "2025年9月22日 亞洲社會從小就是學習一個錯誤的工作態度 大家都甘願鞠躬盡瘁 卻從來很少對自己人生的快樂跟健康負責" },
      { type: "link", content: "https://photos.app.goo.gl/L2Ry2nhqmbAcwozJ6", label: "2025年9月22日 去歐美洲千萬不要帶電腦" },
      { type: "link", content: "https://photos.app.goo.gl/tAeiRPdfhosRvSy89", label: "2025年9月22日 從此不再對始祖鳥有信仰了" },
      { type: "link", content: "https://photos.app.goo.gl/CDLez9fYNtVY3g7c9", label: "2025年9月22日 政府會操弄輿論欺騙人民 大力提倡醫護應該要發展自媒體 應該要有自己的音量" },
      { type: "link", content: "https://photos.app.goo.gl/MwjDYDArLtdLU4XW8", label: "2025年9月22日 我也要當小狗" },
      { type: "link", content: "https://photos.app.goo.gl/hbRCsqz66M3nC2ed6", label: "2025年9月22日 以後我都會記得幫你按" },
      { type: "link", content: "https://photos.app.goo.gl/DhDkFTv8pdhVSgXn9", label: "2024年9月22日 對國家沒貢獻的嘴砲對國家有貢獻的人" },
      { type: "link", content: "https://photos.app.goo.gl/pnZ4NQ2HgVSoaTBN6", label: "2024年9月22日 健身完就是直接約永豆" },
      { type: "link", content: "https://photos.app.goo.gl/ERN5qLZmFcvpoTAZA", label: "2023年9月22日 南京復興站真的很愛你 一定要趁被拆下來之前趕快去合照" },
      { type: "link", content: "https://photos.app.goo.gl/TowJEBhtvFCuQqXu9", label: "2023年9月22日 下午小補眠一下還是全身無力 要檢查每週一跑真的很困難" },
      { type: "link", content: "https://photos.app.goo.gl/gwhDj5wU8wXW4eBr9", label: "2022年9月22日 氣切管的氣囊壓力" },
      { type: "link", content: "https://photos.app.goo.gl/bQsAft4LoTbGVF4L7", label: "2019年9月22日 離開營區就像入獄後能短暫假釋 繼續逆著大浪 慢慢成長茁壯" },
      { type: "link", content: "https://photos.app.goo.gl/vz2sR75uTUPLfMt9A", label: "2017年9月22日 這才是生活 但是 它很短暫 很快又要回去面對現實 此生發誓 及早退休 當攝影背包客 遊遍天下" },
      { type: "link", content: "https://photos.app.goo.gl/uDAT7pPpgyNfTvZi9", label: "2016年9月22日 連續完全沒坐下上刀九個小時解鎖 站到自己講話胡言亂語 飯菜都又冷又硬 不過好充實啊 又刷新自己的耐力記錄了 晚點繼續加油 nolimit" }
    ],
    "23": [
      { type: "link", content: "https://photos.app.goo.gl/P4qdMdUaJKsdgAEU7", label: "2025年9月23日 怎麼可能站立死亡" },
      { type: "link", content: "https://photos.app.goo.gl/XpU8waBufmPZZvnU7", label: "2025年9月23日 社會住宅 我覺得要申請試試" },
      { type: "link", content: "https://photos.app.goo.gl/8sNWTUWarnhtyFZM9", label: "2024年9月23日 都2024年了怎麼還可以這麼無知" },
      { type: "link", content: "https://photos.app.goo.gl/SdgMbeLLv4sL7EHN9", label: "2024年9月23日 請問這是蓄意殺人嗎 沒關係你繼續害人" },
      { type: "link", content: "https://photos.app.goo.gl/WUX9cTHLbzr9g7RV7", label: "2023年9月23日 多希望我的工作能給我預一個十天長假 去拍這些世界美景才是人生" },
      { type: "link", content: "https://photos.app.goo.gl/tDxE2Rb3Wj7vE9mm8", label: "2023年9月23日 第一眼以為我是垃圾 每個月都需要啃肉 拼命的把鍋子塞滿好吃的牛肉 死不吃菜" },
      { type: "link", content: "https://photos.app.goo.gl/Wjd3pUYP4dchJpDz9", label: "2023年9月23日 rasitol作用機轉 網路資料有許多複雜但都不甚完美的說明及圖片" },
      { type: "link", content: "https://photos.app.goo.gl/1bVqXQjMEKVpduG59", label: "2021年9月23日 發售2022風景系列桌曆 賣場是在蝦皮一本250元" }
    ],
    "24": [
      { type: "link", content: "https://photos.app.goo.gl/2wrBJeYUoDBizjVP7", label: "2025年9月24日 這種壁虎可以養嗎" },
      { type: "link", content: "https://photos.app.goo.gl/wyQEiPYxXxLs5BBn6", label: "2025年9月24日 買買買 超好買" },
      { type: "link", content: "https://photos.app.goo.gl/9KhR47SkHLr6XQSYA", label: "2025年9月24日 AI太強了" },
      { type: "link", content: "https://photos.app.goo.gl/Lr7UmGhDLsNXqsct9", label: "2025年9月24日 健身工廠 花蓮也要開" },
      { type: "link", content: "https://photos.app.goo.gl/BeQ3XvKNJBnGQ71K6", label: "2025年9月24日 跟沒值班還留在醫院的悲苦人買漢堡王就算了 他還被店員多薛8塊錢" },
      { type: "link", content: "https://photos.app.goo.gl/M38BrwJc1vc6ndC39", label: "2025年9月24日 真的是醫院又窮又小又機掰" },
      { type: "link", content: "https://photos.app.goo.gl/xovbG5E8QyeUzjyu8", label: "2025年9月24日 花蓮有夠可怕" },
      { type: "link", content: "https://photos.app.goo.gl/gLxbhK1eGM7LqSdH6", label: "2025年9月24日 原來如此 太聰明了 哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/4vTmDiq1WsnYsvY66", label: "2025年9月24日 這個才是真的已讀亂回" },
      { type: "link", content: "https://photos.app.goo.gl/9RXZsS2FFYDpe6nD7", label: "2025年9月24日 居然有雨衣欸 這麼可愛 哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/Eq6USqzVn7kZDR9C7", label: "2025年9月24日 這是因為男生希望能跟女生聊久一點故意裝傻的" },
      { type: "link", content: "https://photos.app.goo.gl/ZALSTFK4dQznFZXB9", label: "2025年9月24日 他是不是以為不給他水了 哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/oX2vEu3JizgTn1QV8", label: "2024年9月24日 所以醫師開藥要對你負責 但這份責任要算免費？" },
      { type: "link", content: "https://photos.app.goo.gl/C7PBjc1zj1eeTgrWA", label: "2024年9月24日 我打到戰場傳說還是一堆不會看小地圖來幫忙的白痴隊友 這種只能說好人平安 但輸了應該畢竟隊友還在耍憨清中線吃兵" },
      { type: "link", content: "https://photos.app.goo.gl/WMGwfwckbQoYGhGK6", label: "2024年9月24日 這三句話要好好應用在職場" },
      { type: "link", content: "https://photos.app.goo.gl/jXsJsGCDAwpnjdAb8", label: "2024年9月24日 就診以前一定要先查醫師經歷 沒有專科的多半是受訓階段有問題 沒辦法通過受訓或是不吃苦選擇提早享受 這樣的人是不會認真幫你看病的" },
      { type: "link", content: "https://photos.app.goo.gl/5eLy9RSn1nZ3fYkK8", label: "2023年9月24日 氣切ballon破掉 很簡當的現象其實看過一次就會有印象 會持續放上這類臨床觀察的文章" },
      { type: "link", content: "https://photos.app.goo.gl/dzUWpQzKiihmdWA28", label: "2023年9月24日 破紀錄 第一次有這麼多筆簽章" },
      { type: "link", content: "https://photos.app.goo.gl/1Z8mLNApFWkjQbkJA", label: "2022年9月24日 感覺當時走進現場就會醉了" },
      { type: "link", content: "https://photos.app.goo.gl/EnMsbbBLTumdT7eS6", label: "2021年9月24日 2022風景系列桌曆 一本250元有興趣可以支持支持 小弟我不會收益任何一塊錢 最後收入也會撥一些捐給流浪狗之家" },
      { type: "link", content: "https://photos.app.goo.gl/9NDwjuCPS8j7zYLz7", label: "2018年9月24日 原來現實與制度是把利刃 確實地消磨著我 夢想不過是曾掛在嘴邊的無聊名詞" },
      { type: "link", content: "https://photos.app.goo.gl/zQf97S9D5Jnma3haA", label: "2018年9月24日 在海上努力用四個孤獨晚上 用針線縫出一隻White guy布偶 言出必行的女子不能亂惹" },
      { type: "link", content: "https://photos.app.goo.gl/GXeyStHhb6A53DzE6", label: "2018年9月24日 顛簸的航程 像邊地震邊試著睡著 超級狹窄的小床 有人肚子很痛很緊急趕快來看 恩沒睡" },
      { type: "link", content: "https://photos.app.goo.gl/3M9qjTVgHemp6SmEA", label: "2017年9月24日 我麻吉 跟朋友一起吃飯囉 沒朋友" }
    ],
    "25": [
      { type: "link", content: "https://photos.app.goo.gl/URMWfeRgvjSTJmkQ6", label: "2024年9月25日 這樣有回答到嗎 有啊" },
      { type: "link", content: "https://photos.app.goo.gl/UXftAjtfwhkR6rpz5", label: "2023年9月25日 喬神都會爆了 何況凡人" },
      { type: "link", content: "https://photos.app.goo.gl/6T5uMh5pqsKTmWeR7", label: "2023年9月25日 英雄所見略同 DK大神這次跑的攝影行程 剛好就是我原本心中完美的北越風景行程 好想放下一切去拍照" },
      { type: "link", content: "https://photos.app.goo.gl/uJPF6aHJwya8Uahv7", label: "2022年9月25日 太扯了吧 居然戴迪卡儂手錶" },
      { type: "link", content: "https://photos.app.goo.gl/Lpy2TUjTaVZZN3YK8", label: "2022年9月25日 四獎 中了4000元 95張發票 哇靠" },
      { type: "link", content: "https://photos.app.goo.gl/9WB1qBeRot3FXNvB7", label: "2021年9月25日 追焦功力超強的 台灣風景一哥追蹤起來" },
      { type: "link", content: "https://photos.app.goo.gl/PxvZ8eESp8Li5qsr8", label: "2017年9月25日 開始還病歷債囉" }
    ],
    "26": [
      { type: "link", content: "https://photos.app.goo.gl/JgjjRxf9HV9J5Npk6", label: "2025年9月26日 我沒有躲導管 導管來 我就上 CV一直都要保持這種精神" },
      { type: "link", content: "https://photos.app.goo.gl/7UsieCTF15dKCqXv7", label: "2025年9月26日 看似一般大學 實則綁約高額賠款扣執照的軍校" },
      { type: "link", content: "https://photos.app.goo.gl/nqjQV3DenQs9EjT56", label: "2025年9月26日 認同 黃國昌害的民進黨不能安心官商勾結跟貪污 真的很糟糕" },
      { type: "link", content: "https://photos.app.goo.gl/WLaeTQxGzgaip5eK8", label: "2025年9月26日 不要去住院治療更省錢 怎麼能讓醫生護理師賺錢呢 怎麼能讓醫院賺錢呢 一起發起沒錢就拒絕就醫的活動吧" },
      { type: "link", content: "https://photos.app.goo.gl/nyDkVsN3dhiHzjub6", label: "2025年9月26日 \
        結果在這樓都沒看到專業的解答 腹主動脈不用說絕對馬上死 肝臟跟胰臟都是一樣的道理 都有動脈 而且周邊牽扯到的血管神經等都非常多 \
        傷到只會比腹主動脈晚死一點點 標準答案只可能下腔靜脈 不要小看下腔靜脈 回流血之多 幹斷爆血應該1 2小時內就會休克 \
        甚至造成回心血不足 preload不夠提早hypovolemic shock 依照題幹 只有下腔靜脈受損他才能短暫保有戰鬥能力 其他都免談" },
      { type: "link", content: "https://photos.app.goo.gl/8mQuZizw8MwmeQT47", label: "2025年9月26日 我可以畫的比他更恐怖" },
      { type: "link", content: "https://photos.app.goo.gl/Z7ZwkB1Fok9a3otWA", label: "2025年9月26日 \
        請問有大神知道台灣THREAD公司如何聯絡或是這是什麼原因嗎 一個社群媒體如此胡亂惡搞 是非常有可能發生在其他任何使用者身上的 \
        你們辛苦經營的帳號也可能毫無原因再也回不來 希望能把帳號要回來" },
      { type: "link", content: "https://photos.app.goo.gl/BW48YdMY6u6o1EGm6", label: "2025年9月26日 \
        THREADS公司真的又蝦又扯 一直很正常的使用帳號且完全沒有違反任何一條規則 THREAD卻毫無預警的在9/25鎖住她的帳號 甚至申訴後完全沒有寫上任何具體違反的規則 \
        也不再給第二次申訴機會 社群媒體能夠成功經營是因為使用者能安心的使用 但脆這種無腦的亂鎖帳號行為 真的很要不得" },
      { type: "link", content: "https://photos.app.goo.gl/AejQLdRgsvwsvByM6", label: "2025年9月26日 謝謝 實在太扯太扯要考慮申請藍勾了" },
      { type: "link", content: "https://photos.app.goo.gl/7CKmY2uZoCwYLF3Z7", label: "2025年9月26日 \
        超爛 但應該要跟Meta公司客訴才對 不然以後誰敢經營thread 沒有說明任何理由 請問他有說具體上封鎖原因是什麼嗎 \
        超神奇的 她都沒做什麼事情 早上起來帳號直接消失 似乎2025/6月也有類似的事情一堆人受害" },
      { type: "link", content: "https://photos.app.goo.gl/NMu3sFVzQm4n6XJW8", label: "2025年9月26日 \
        帳號在2025年9月25日早上毫無預警的被官方封鎖 我們發誓在使用帳號從頭到尾 完全沒有違反過任何社群守則 都是非常正常的使用 \
        但threads在完全沒有提出任何具體理由的情況下 就封鎖她的帳號 第一次申訴後一樣未給理由 還不給第二次申訴機會 請問這是脆公司的怠惰 無能 AI判定錯誤 還是系統出錯 \
        為什麼這件事很重要 現代社會的資訊跟聯繫都很依靠社群媒體的傳播跟即時性 當大家信任這個軟體並且用心經營後 卻被官方以不負責任且毫無根據的方式封鎖 會扼殺每一個用心在經營社群的人 \
        退一步來說 我們身為普通使用者也在這個帳號上有非常多回憶跟互動 這樣毫無理由的惡性封鎖真的可惡 \
        這樣的事情可能發生在妳我身上 而且毫無預期 希望能有網友大神 分享處理經驗 或者能怎麼聯繫thread公司 這實在太瞎了 FB Ig X等都沒碰過這麼白痴的事情\
        Thread官方能不能好好檢視使用者再封鎖" },
      { type: "link", content: "https://photos.app.goo.gl/xmQSEsqdK7mcpRUF7", label: "2024年9月26日 \
        台北韓丰117 目前最滿意的韓式料理之一  我們點兩人套餐 肉品是半半炸雞 沒有擾人的筋跟皮 炸的非常酥脆 肉質也鮮美多汁 \
        海鮮煎餅偏向濕軟 這是我唯一比較沒那麼喜歡的地方 我個人喜歡脆脆的外皮 但還是味道又香 口感也算紮實 \
        燒烤牛肉片超級喜歡 份量也剛好超級好吃 最後甜點是脆皮雪糕 感覺很像是韓國的小甜品 很好吃但覺得太少了 \
        整體而言價格不貴 但基本上都很滿意 是一個韓式小品的餐點" },
      { type: "link", content: "https://photos.app.goo.gl/iZxjimGbBMHYMGNX6", label: "2024年9月26日 這不能走路 只能抱著" },
      { type: "link", content: "https://photos.app.goo.gl/P8Wi1zfpk2EwUqnt9", label: "2024年9月26日 夏天當然是養鴨子 冬天鴨子凍死就能吃薑母鴨囉" },
      { type: "link", content: "https://photos.app.goo.gl/fh8XwLy44K6A1SGp7", label: "2024年9月26日 那手臂加強大師是沒被電過吧" },
      { type: "link", content: "https://photos.app.goo.gl/iq4f57MUeA8aTD9u5", label: "2024年9月26日 正確方式是要把媽媽支開來再問" },
      { type: "link", content: "https://photos.app.goo.gl/N6U3cSDP1GLzewPz9", label: "2024年9月26日 \
        粉專成立&內專考試心得 考過內專後才讓粉專實至名歸 但面對內科我仍是無知的 \
        考試前幾個月 apen app上有些匿名故意攻擊我的 這些惡意的謠言我並不急於回覆 但藉此契機分享為何有這個粉專 \
        我在醫學院畢業的成績不好 是後段班 醫師國考雖一次過 但也幾乎憑感覺猜完答案 於選擇了內科 我意識到自己根本沒辦法處理臨床任何問題 就連補鉀降鉀都不會 當時感覺溺斃在內科這片深海裡了 \
        因此成立這個粉專 一方面是幫助自己記憶遇到的case 一方面是希望跟我一樣 資質不好又找不到幫助的人 可以得到救贖 可以在面對困惑時找到答案 更可以想到pgy從0開始努力補救的我都能有機會長大 那你也一定沒問題 千萬不要放棄 \
        希望跟我一樣在內科大海裡迷茫的人 知道我也是其中之一 非常辛苦痛苦但仍努力存活著 一起加油" },
      { type: "link", content: "https://photos.app.goo.gl/uu1VeUtZ3KRa8C1i7", label: "2023年9月26日 \
        原來今天實習醫生座談會這麼精彩 應該也不少人跟我一樣 一直生活在相對權威的環境 \
        從小家庭就是相對權威 很小的時候因為調皮被威脅要送我進軍中 沒想到後來真的進去 幾乎沒有跟同學出遠門旅遊看電影等 也無法自然的跟朋友相處 社交能力非常差 最快樂的時候只有國中瘋練籃球的時光 \
        因為家庭的封閉教育 我不知道如何表達自己的不滿 我不知道如何拒絕別人 我不知道如何與人協商 任何事情我只能被動的接受 如果不喜歡就忍耐 所以看似很乖很愛讀書 實則讓後來的自己吃很多很多虧 \
        高中相對校園更開放 我反倒很不習慣 極度無法適應把自己封閉 堅持著拒絕社交 每天讀書跟補習的生活 很羞愧的是當初覺得同學都不務正業 但畢業後才發現不正常的是自己 \
        當時我很有病的穿南一中的制服上學 因為父母告訴我只能讀一中但我卻差了一分 我國中班排第四 前十名都考上第一志願唯獨沒有我 而這個舉動讓我覺得很優越 跟同學分別 但如今卻覺得可笑 自欺欺人 \
        我現在非常感謝當初是讀南科實中 老師包容我上課不聽課的個性 讓我因為成績好就享受很多資源 例如去參加NASA視訊 模擬聯合國會議 只是我當時不懂這些資源的好 幸好部分高中同學雖然當我異類 卻很願意跟我做朋友 \
        很不幸大學又被家裡叫去讀軍校 因為衝著認為醫科很耀眼的頭銜而去 卻沒有想過軍費背後代表的意義 於是我再次承受高壓的環境 更封閉自己 但也因為同學來自各地 漸漸學會一點正常的社交跟看氣氛 \
        從來沒有任何長官告訴我可以離開 當有不適應時 一定先檢討你一番 最後輔導你 描繪繁華不實的未來藍圖  摸頭留下 過不久你再次因現實而破滅幻想 \
        高中自以為很會讀書 來到大學才知道什麼是真正的聰明跟善用資源 過去封閉的家庭生活 我沒有跟人接觸 永遠只會土法煉鋼 不知舉一反三跟找資料 後來成績都墊底 一路爬到今天 同學都在飛 而我還在爬 \
        這幾年我才意識到自己 認識真正的自己 我也才決定了人生的目標跟生活態度 雖父母口口聲聲說他們比我更了解我 但越聽越覺得錯的離譜 我是極度崇尚自由的 不需有任何人帶壞我 我無法接受必須按照誰的標準或準則生活 若真要說我應該走藝術相關比較適合 \
        一路上不停的忍耐 後來又轉變成不停的碰撞 然後現在變成靜觀其變 只求穩定中求生存的個性 對於權威體制 我依然是非常排斥 但似乎沒有想辦法把自己過好以外 更好的辦法了 \
        一間醫院能有這麼多因為環境壓抑自殺的案例 實在很難想像我能心態越來越堅強 \
        權威是多麼可怕的事情 他能剝奪很多人思考的能力 剝奪他們原本應該有的創意跟發展 小則茶毒小孩跟學生 大則掌權茶毒國家官商勾結 然後壓榨基層甚至剝奪人命 \
        希望我們這一代的 都能好好改變環境 讓環境變得更宜人 不再把不合適的價值觀強加在別人身上了" },
      { type: "link", content: "https://photos.app.goo.gl/HwgjZhVT6DsDsDxV7", label: "2021年9月26日 日歷我是第一個買兩本 支持一下" },
      { type: "link", content: "https://photos.app.goo.gl/mx8wYwSgYKtN49pY7", label: "2020年9月26日 用20分鐘跑五公里是滿有效率的運動 能有20分鐘能忘記世俗煩惱" },
      { type: "link", content: "https://photos.app.goo.gl/qEy1rDhDVJqsEUcE6", label: "2020年9月26日 出售Nikkor 上班忙碌買來沒時間用 公司貨購入後遺失保卡但盒子與其他配件均在 可711先付款後寄送 寄送不負損壞責任但寄出前均會拍完整包裝與鏡頭狀況" },
      { type: "link", content: "https://photos.app.goo.gl/JmNGaybbNnUX1yQv9", label: "2018年9月26日 所謂的伙房就是蟑螂養殖場 還沒看過好幾個蟑螂屋在五個小時內全客滿的 黑壓壓的一片觸鬚" },
      { type: "link", content: "https://photos.app.goo.gl/fLjBjHm1KjkfsQY38", label: "2017年9月26日 早上要報Journal 下午要上課評鑑 Suffer" }
    ],
    "27": [
      { type: "link", content: "https://photos.app.goo.gl/ocpRQvVjtrd2sfp69", label: "2025年9月27日 是元信那隻欸 哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/RgRjV6p1vf4FsHWo8", label: "2025年9月27日 帳號一定可以要回來啦" },
      { type: "link", content: "https://photos.app.goo.gl/FQJqDpvZCFfuUSEz5", label: "2025年9月27日 這個也要給我看ㄚ" },
      { type: "link", content: "https://photos.app.goo.gl/t2movCWnUFWaFQY16", label: "2025年9月27日 怎麼會有軟體的經營方這麼白癡 任由自動判定來鎖帳號 甚至是永久刪除 爛到家了" },
      { type: "link", content: "https://photos.app.goo.gl/efiBTa6GRB4nHzWW6", label: "2025年9月27日 那你怎麼不考進來體驗一下 你思考一下考上這邊的學生外面都有多少好學校可以讀 但招生簡章用資訊不對等的方式騙學生進來當軍人 你就知道這種感受" },
      { type: "link", content: "https://photos.app.goo.gl/7kRvaZMNxSahQN7H7", label: "2025年9月27日 超誇張" },
      { type: "link", content: "https://photos.app.goo.gl/2A8vh68B5EPEmx558", label: "2025年9月27日 但是他說是致命穿刺傷" },
      { type: "link", content: "https://photos.app.goo.gl/Ya7BcbFg5MXR8fCj7", label: "2024年9月27日 可惜被告一次1000萬直接白做工" },
      { type: "link", content: "https://photos.app.goo.gl/zgJ6qtAsZYQszJ888", label: "2024年9月27日 \
        醫師如果當天值班 就可能有非動不可的緊急手術 醫師跟普通職業不同 隨時都要賠上自己的健康跟時間去處理病人 \
        你們以為坐在診間等很累 殊不知醫師說不定從昨晚站到天亮再來看診再中途去站著開刀" },
      { type: "link", content: "https://photos.app.goo.gl/bvNyWAL1aaKAc5Uy6", label: "2024年9月27日 賺錢就當未來學費 賠錢只好五歲去打工" },
      { type: "link", content: "https://photos.app.goo.gl/Qsdti6BfNBastjJq9", label: "2024年9月27日 那+10%服務費給醫師護理師ok嗎 咦怎麼提到收費家屬們也態度變不好了啊" },
      { type: "link", content: "https://photos.app.goo.gl/XwGKWwpMmXndQfdT8", label: "2024年9月27日 已回購 孩子很愛吃" },
      { type: "link", content: "https://photos.app.goo.gl/ANqgVC8tBNtu7xh46", label: "2024年9月27日 這題我看不懂A 但利用考試刪去法選出A" },
      { type: "link", content: "https://photos.app.goo.gl/31ycm3UBeQfASiKn7", label: "2024年9月27日 在台灣很常見吧 但確時是爛文化 該下班就下班 不要自己想累死還要累死別人" },
      { type: "link", content: "https://photos.app.goo.gl/zeynPDZ5SVzMpJyw7", label: "2024年9月27日 怎麼都不寫上一ㄇ~" },
      { type: "link", content: "https://photos.app.goo.gl/2meEMdWCqBu3dn1BA", label: "2024年9月27日 沒有那麼誇張 但女生有肌肉也好看" },
      { type: "link", content: "https://photos.app.goo.gl/zyUDH9Mu4W1HzSNZ7", label: "2023年9月27日 \
        台灣地小人稠 對行人腳踏車機車汽車都很不友善 道路規劃也因為政黨輪替 都不會真正長遠的考慮整體 \
        所以就會出現短視近利的法規 例如增加測速照相 現在則是記點來吊銷駕照 \
        你只要一年半被惡意檢舉三四次 每次都一次給你三四件重複檢舉過 超過12點就直接吊銷了 大家真的要小心 今年6/30開始實施" },
      { type: "link", content: "https://photos.app.goo.gl/ZuDna7o4942bDLK68", label: "2023年9月27日 \
        今早前面這輛車轉彎也壓到雙黃線 這樣是不是要檢舉他 我相信幾乎人人都會有這種根本無傷大雅的違法行為 \
        用智商的1/100就能判斷出 哪些是真的跟檢舉跟懲罰 哪些沒差 畢竟法律不可能因人而異 只能死板的訂在那裡 \
        如果大家都去檢舉這種屁都不是的案件 社會風氣會好？ 對交通改善有幫助？" },
      { type: "link", content: "https://photos.app.goo.gl/NehpQaJ5NWMxu9pE6", label: "2023年9月27日 \
        打給內湖分局 這個檢舉人非常惡劣 每天檢舉不下數件 員警都表示光找他檢舉的案件就花了五分鐘以上 真的太多件 內湖也確實是檢舉高峰的地方 \
        而且同樣壓到雙黃線 即便只是過一個三公尺的路口 他都能重複檢舉 絕大多數都是完全不影響用路人也在檢舉 \
        我們沒辦法改變世界上有太多腦袋破洞的垃圾 但從我的案例 出門一定防衛駕駛 一定要當成檢舉魔人都在四周 \
        他們並不是真的希望台灣交通變好 他們只是想滿足自己貪婪的虛榮心" },
      { type: "link", content: "https://photos.app.goo.gl/qxvBJsiR4m191Snh7", label: "2022年9月27日 \
        三總工作紀錄 出院病歷及急診 \
        一定要一筆一筆作紀錄 國家哪怕一塊錢 一天的退伍時間都要跟我們計較 反過來我們也絕對要跟國家計算到底不能吃虧" },
      { type: "link", content: "https://photos.app.goo.gl/3tRHcGxJ2QNmEWyH9", label: "2021年9月27日 售副廠NIKON電池 台北可面交 可711交貨便自付運費60元 無損傷泡水 只是不能用在Z無反系列 這是以前D750用" },
      { type: "link", content: "https://photos.app.goo.gl/drWVwK7Ywx1i6szT6", label: "2020年9月27日 \
        你們這些民眾只知道開罰 有沒有想過為何台灣的藥剩下這些垃圾 就是因為賤飽制度 \
        省錢省到好的藥不願意進來台灣 省錢省到醫生看病開藥開檢查還要自己貼錢 你們當然只剩下爛藥可以使用 \
        今天罰再多錢都沒有用 因為你們繳的健保費 就是只夠吃夜市牛排 正常的牛排根本吃不到 誰會虧本賣你 所以別再無知了 \
        想解決藥物品質的問題 第一步先讓健保改制或崩毀 才能讓有水準的藥物進來台灣 當然更重要的是 要了解醫療就是那麼貴 本來就該花錢不要貪便宜" },
      { type: "link", content: "https://photos.app.goo.gl/pc6W43dckU8uF4Lx5", label: "2018年9月27日 講這種話的腦袋本來就只有屎 不用吃" },
      { type: "link", content: "https://photos.app.goo.gl/jeFqr19mpTzJUrau8", label: "2017年9月27日 實習好累ㄛ" }
    ],
    "28": [
      { type: "link", content: "https://photos.app.goo.gl/2YLYtiuKsRjDYcDu7", label: "2025年9月28日 身為重度香蕉煎餅愛好者 吃過泰國的香蕉煎餅 同價格 但泰國的比較大 更脆更香" },
      { type: "link", content: "https://photos.app.goo.gl/BjWD9V8tDcPSJeih9", label: "2025年9月28日 謝謝你們 我就是吃完發現身分證四碼全對可以換牛肉的那位 但平日來不及了" },
      { type: "link", content: "https://photos.app.goo.gl/nad4ScfoWhBMDjxQ9", label: "2025年9月28日 \
        醴本韓國正統燒肉 台中目前心中前三名的韓式燒肉 真的太扯太扯 \
        一開始上的小菜相當多樣 海帶芽 泡菜 涼拌豆芽等都能無限續點 開胃又解膩 我超愛醃蘿蔔 應該自己嗑掉三盤了 \
        豬肉部分以煙燻豬五花和伊比利系列為主 油脂香氣濃郁 若有松阪豬應會呈現脆彈口感 \
        和牛則是重頭戲 也是我最愛的部分 油花細緻 入口即化 搭配簡單調味就很出色 整體肉量不算多 但專人代烤與小菜搭配 精緻感十足 \
        最後甜點冰淇淋 已經飽到吃不下 但吃了第一口馬上又有胃口 真的適合回訪 \
        美食分享改用相機拍 主要脆分享 均非業配 自己吃過推薦才寫" },
      { type: "link", content: "https://photos.app.goo.gl/fmJxLydLS2fZ6f7NA", label: "2025年9月28日 一個連假值頭尾兩天班" },
      { type: "link", content: "https://photos.app.goo.gl/TBXS96a4oHjKViTy6", label: "2025年9月28日 近期看過最屌的飯店 一晚十萬 但美到靠北好像到火星住 這輩子一定要去一次" },
      { type: "link", content: "https://photos.app.goo.gl/UW11qbqU5wjtcVvz5", label: "2025年9月28日 真的是騙人要生女兒了 哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/kQzni4uxRkoqhw8i6", label: "2024年9月28日 \
        今天真的可以再誇張一點 白天就三台導管了 到底還會來幾台 \
        下次不會再值班前吃鳳梨酥了 之前吃了都沒事啊 但不知道為啥今天吃之前覺得內心沒有安全感" },
      { type: "link", content: "https://photos.app.goo.gl/Ejwi4jZHHs3QCCZW8", label: "2024年9月28日 其實很好看啊" },
      { type: "link", content: "https://photos.app.goo.gl/QCvtgB2cpWCR3Ja98", label: "2023年9月28日 謝謝分享" },
      { type: "link", content: "https://photos.app.goo.gl/WcZLRzcRqtjJs61D8ctGxjGXWLpoTJnas7", label: "2022年9月28日 \
        各位醫師跟護理師以後要小心 即便醫學上無法證實的 法律還是會因為衛福部有提醒 就直接認定因果關係 完全不科學不合理 \
        既然有前例判決 萬一發生類似事情 難保你不會是下一個恐龍家屬的受害醫護\
        上一篇限時說的就是這案例 有興趣大家點進去看 我真的沒看過給鈣之前還有醫師會問病人是不是48小時內有使用SINTRIX的 \
        然後媒體開始一起無腦開罵 沒知識的民眾也加入一起罵辛苦的醫師跟護理師 想想如果是自己遇到 這口氣實在吞不下 \
        病人醫得好賺到健康 醫不好就告醫院賺錢 真是穩賺不賠的家屬 台灣就因為有少數這種恐龍家屬 醫師護理師才人人自危" },
      { type: "link", content: "https://photos.app.goo.gl/ctGxjGXWLpoTJnas7", label: "2022年9月28日 \
        我常說在台灣當醫生很倒霉 會被亂告 講的就是這個 各位去看判決全文 世界上根本沒有鈣跟三代抗生素混用導致成人休克的案例 \
        只因為嬰兒有發生過 衛福部有提到不建議混用 結果法院直接認定女大生休克就是混用造成的 倒霉的醫師護理師就被告爛 \
        好比殺人判罪要有證據 但這個判決完全沒有直接證明混用鈣跟抗生素導致休克 只因衛福部提醒有可能就直接判醫護未注意 真的很可笑 \
        世上千百種藥物 每種都有些微機率發生交互作用 如果都為了這種沒發生過但有可能的風險 我看大家也不要吃藥 不用來看醫生 因為再怎麼小心都有意外 這就是醫學的極限 \
        醫師不是神 今天只是很倒霉這個醫師遇到所以他被判賠 以後醫療人員都防衛性醫療就好 反正出事就鬧法院 病人好了賺到健康 好不了就跟醫院要錢 怎麼樣都不虧是嗎 真的很心寒的判決 \
        事實上女大生重感冒合併腎盂腎炎 才更有可能導致休克 但法官不提 民眾更不知道 恐龍家屬一哭二鬧 為了錢而去提告 根本不管事實 網路上醫護還被酸民亂罵實在很可憐" },
      { type: "link", content: "https://photos.app.goo.gl/8qQtrk1AFdaBRguN8", label: "2022年9月28日 可以吃到自製早餐是現在唯一的小確幸" },
      { type: "link", content: "https://photos.app.goo.gl/teahnRRdfARZJSMm7", label: "2021年9月28日 \
        知道自己拍照要的是什麼 但發作品一直不知道內容要寫什麼 我觀察了很多攝影帳號 內容大致有以下類型 \
        有些會抄歌詞或詩句 感覺有點太長輩文 有些只有標題或直接空白 感覺有點傲嬌到邊緣 \
        有些幽默好笑又跟拍照相關 這個最高竿但我沒靈感 也不會撩粉絲 有些會寫很廣告的景點介紹文 感覺很雷同旅遊文章而不是活生生的個人 \
        有些會寫整篇英文 但感覺跟粉絲太疏遠 除非粉絲多外國人 有些會加上一堆表情符號或看不懂的外星符號 感覺很中二 \
        因此決定分享跟作品無關的生活或醫學文 當然攝影帳號也一定有關攝影的主題 但我的生活跟醫療綁在一起 能分享的內容 醫療一定比較多 其中沈重的比溫馨快樂的更多 怕大家不買單 \
        發照片要寫什麼依舊很困擾 我決定寫學醫路上的經歷 至少主題比較特別 也不會單單只有攝影 想知道到底大家看照片時 會想看什麼內容呢" },
      { type: "link", content: "https://photos.app.goo.gl/ojXtqzY2aFvMNFAA8", label: "2021年9月28日 阿狗第一時間判斷主人需要氣切" },
      { type: "link", content: "https://photos.app.goo.gl/Rwe3ziRDRs6RY7ah9", label: "2021年9月28日 我覺得很重要 哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/1wdceXPgZ67VqKxY7", label: "2021年9月28日 分享一位老醫師學長的真實故事 有點沈重 尤其是看完魷魚遊戲之後 社會底層的悲歌是個無解的問題 不只是在電影裡" },
      { type: "link", content: "https://photos.app.goo.gl/VG5f8QMWVUpB9ZRi7", label: "2019年9月28日 館長也在戰鬥支援大隊忠誠營區旁捐贈一間重訓室 讓我能夠省錢省時間也能運動" },
      { type: "link", content: "https://photos.app.goo.gl/3M62cWa2YtZRtVPq6", label: "2017年9月28日 Thank for my new profile just check her page and amazing pics" },
      { type: "link", content: "https://photos.app.goo.gl/YEPXAKBEdxB7krvX9", label: "2017年9月28日 餐卷全部半價 剛到的肉燥便當全新30元 熱的" },
      { type: "link", content: "https://photos.app.goo.gl/ff3PwqwbXewHkvT36", label: "2016年9月28日 \
        倒數一天骨科下刀 跟骨科相比內科真的輕鬆很多 但這四個月真的好難熬 不過並不後悔選了骨科 也不後悔跟著潘副院長 完全是體力與腦力的鐵人接力賽 從肩膀手肘髖關節膝關節踝關節到阿基里斯腱 全身上到下一個不漏 \
        我個性向來粗心 而潘副卻是細心到魔鬼的細節裡 這個月是個大洗禮 無論是見識關節鏡的奧義或是副座做人的道理 壓力逼自己一定得長大 \
        也感謝廷逸學長超級的包容力跟火力掩護 才能一路撐到月底 \
        最後兩天颱風假我都安全的躲在醫院 昨天還連躲手術房12小時 果然有沒颱風都干我屁事啊" }
    ],
    "29": [
      { type: "link", content: "https://photos.app.goo.gl/H2677VCbDWBqwrZw6", label: "2025年9月29日 緊急開刀裝了六支支架花了一百萬 你要不要聽聽看你在說什麼" },
      { type: "link", content: "https://photos.app.goo.gl/wEFXzND2ktboYvFD6", label: "2025年9月29日 這個連假值班兩天 沒辦法去花蓮幫忙 但醫院這樣的善舉應該分享 希望花蓮平安 早日恢復" },
      { type: "link", content: "https://photos.app.goo.gl/Z2GckW5TNGSV3BBz7", label: "2025年9月29日 還有關燈跟洗衣服" },
      { type: "link", content: "https://photos.app.goo.gl/VTkFcFHF35Xdaq2E8", label: "2025年9月29日 迪化街貓貓之旅也是一個下午行程 而且每年有貓貓攝影比賽 另外我個人很喜歡合信蔘藥行的水蜜桃乾 蠻好吃的" },
      { type: "link", content: "https://photos.app.goo.gl/NDuxJkN3LnVgLKkx7", label: "2025年9月29日 晚餐罰吃狗糧三大碗" },
      { type: "link", content: "https://photos.app.goo.gl/tMANpZLZkr4ihE7q8", label: "2025年9月29日 羨慕了 好美" },
      { type: "link", content: "https://photos.app.goo.gl/hZALijxnQRPXWeKN6", label: "2025年9月29日 蛤貓超可愛" },
      { type: "link", content: "https://photos.app.goo.gl/8aSRrS8zwCCW553Z7", label: "2024年9月29日 避免自己變成病人 遠比治療好多少病人更重要" },
      { type: "link", content: "https://photos.app.goo.gl/gcFPto5dxMqVaLHK6", label: "2024年9月29日 \
        今天吃晚餐遇到一組葡萄牙人 因為他們不懂中文 我鼓起社牛的勇氣幫忙翻譯 聊天知道他們從澳門 台灣準備玩到菲律賓真的好羨慕 \
        台灣的工作文化真的很爛 放個長假好像會要政府的命一樣 非要維持這種工作文化操死大家才開心 像國外這樣給人民長假放鬆有何不可呢" },
      { type: "link", content: "https://photos.app.goo.gl/AYqDazwnQYJaA6Eh9", label: "2024年9月29日 嘴裡說也想每日關心國防醫 叫我幫她拍一張關心醫院的照片" },
      { type: "link", content: "https://photos.app.goo.gl/osHNLACSfAVp63TY9", label: "2024年9月29日 沒有" },
      { type: "link", content: "https://photos.app.goo.gl/xHbXRt52GTBFwAfT6", label: "2024年9月29日 正常啊 怪你自己血管難打而且查房不會問喔 還是問了也不信任你的醫師" },
      { type: "link", content: "https://photos.app.goo.gl/U1wAJyvGeTKmRdHq6", label: "2024年9月29日 不要在這個怪怪的地方留言" },
      { type: "link", content: "https://photos.app.goo.gl/i66M7umXR8PaBtFQA", label: "2024年9月29日 我也要加強" },
      { type: "link", content: "https://photos.app.goo.gl/bwr6g6FywWNVjS628", label: "2024年9月29日 你以為只有考到醫師執照就會看病喔 真的很單純呢" },
      { type: "link", content: "https://photos.app.goo.gl/m4v6kxrMf5MYT6GS7", label: "2023年9月29日 \
        這個外國人想買我四張照片共2萬台幣當作他們NFT的作品 但需要我先註冊他們平台會員 並且上傳照片然後標價 他們才能直接購買 \
        想昂這詐騙嗎 有人被這個方式買過照片嗎" },
      { type: "link", content: "https://photos.app.goo.gl/gdKuhwfFJxevvovg9", label: "2023年9月29日 好想拍這個唷" },
      { type: "link", content: "https://photos.app.goo.gl/ks3fMBtGR7k6j4nX8", label: "2023年9月29日 有人知道這在河內附近的哪嗎 需要預約才能拍嗎" },
      { type: "link", content: "https://photos.app.goo.gl/HZj57j1oeKoPTgZE8", label: "2023年9月29日 山道猴子の休息站" },
      { type: "link", content: "https://photos.app.goo.gl/T732SkRB4dWRSGjaA", label: "2023年9月29日 健保秀下限的能力 絕對不會讓你我失望的" },
      { type: "link", content: "https://photos.app.goo.gl/TkdmKZFngTTsjW9d6", label: "2022年9月29日 \
        Adobe一直以來是我修圖的主軸工具 從大三開始就自己摸索 也跟學長及許多朋友請益 \
        後製或許看似深奧 其實度過前面的摸索階段 每當內心澎湃的靈感來襲時 便能創作屬於心目中的作品實在成就感十足 \
        這次一起在象鼻岩看著九份的夜景 不禁也想體會身處星空下的浪漫 只能就靠著後製達成心願了 \
        所以工欲善其事 必先利其器 擁有便宜好用的Photoshop 更能增添攝影的樂趣 這次就介紹一個好的合作方案 BTS Back To School \
        置入了ADOBE 但PS確實是所有初學後製都應該玩的好東西 學會圖層 把理想中的畫面創作出來也是非常有趣" },
      { type: "link", content: "https://photos.app.goo.gl/8GUZJPa2ar5gi1n98", label: "2022年9月29日 還以為他們跑到歐洲去了" },
      { type: "link", content: "https://photos.app.goo.gl/B7C99wnSHnkZh8UY6", label: "2022年9月29日 這個取景跟後製 台灣也可以這麼美" },
      { type: "link", content: "https://photos.app.goo.gl/8THsafyeR1uozFfD6", label: "2022年9月29日 好美 真的不想一直困在醫院" },
      { type: "link", content: "https://photos.app.goo.gl/Uc71Tyo2CH3KyPrJ8", label: "2021年9月29日 國慶日一起拍煙火吧" },
      { type: "link", content: "https://photos.app.goo.gl/Pdp3LBicUNq2jFVc9", label: "2021年9月29日 \
        請朋友幫忙後救回來了 原來是昨天下午1600有人刻意刪除全部的檔案 可以查這個人 但是需要上公文給院方資訊組 才能調閱電腦查閱的紀錄 \
        我會去上公文找出這個人 然後再公佈這件事 希望你沒種但還有一點良心 私下跟我道歉了結" },
      { type: "link", content: "https://photos.app.goo.gl/UooAP3bVy4P5BkRx7", label: "2021年9月29日 \
        每天我都會花快一小時 製作PATIENT LIST 昨天下班一如往常的做好了 結果今天早上來看居然全部被刪除 還只刪除我這個月的檔案 \
        我是不知道這位不知名人士針對我 是有什麼居心 但有種讓我知道你是誰 無冤無仇背後搞這種小動作跟人渣一樣 有夠沒種" },
      { type: "link", content: "https://photos.app.goo.gl/79qqSQz66WX8fuye6", label: "2020年9月29日 第一次跑外面馬拉松正式的路線 昨天值班又沒啥睡 今天跑起來全身無力 但意外的河堤邊很涼很暢快 忍不住跑了六公里" },
      { type: "link", content: "https://photos.app.goo.gl/c59EfzpFSQEMMoCK9", label: "2020年9月29日 內科終於過2/3了 雖然對我而言只是這輩子內科永無止境生活的開始而已" },
      { type: "link", content: "https://photos.app.goo.gl/Xp2fnNPoWuUyoWRB7", label: "2018年9月29日 找亮點" },
      { type: "link", content: "https://photos.app.goo.gl/NjmVf9ZXPsKcRYbp7", label: "2018年9月29日 剛剛一直碎念說這邊人太多 結果拍的最高興 其實是記憶卡也在我這裡 我一次拍兩人份的" },
      { type: "link", content: "https://photos.app.goo.gl/xwVFTs4ne54hpgGMA", label: "2017年9月29日 2013年的時候還以為不再回來 2017運氣很好的再來東京醫科齒科大學" },
      { type: "link", content: "https://photos.app.goo.gl/aRohSgt5VJCQ63QeA", label: "2017年9月29日 飄向日本了" },
      { type: "link", content: "https://photos.app.goo.gl/8nofqYzotoaFySKA7", label: "2017年9月29日 我飄向東京 tokyo" }
    ],
    "30": [
      { type: "link", content: "https://photos.app.goo.gl/4xK1WfKj3df5WujS8", label: "2025年9月30日 我需要這個功能 超討厭咬珍珠 牙齒容易沾黏珍珠" },
      { type: "link", content: "https://photos.app.goo.gl/uSpNJhQQyFcWmqh18", label: "2025年9月30日 之前去過 自駕真的還是最好 停車費稍微貴一點而已 但值得" },
      { type: "link", content: "https://photos.app.goo.gl/hSDSpHgTpZV396i89", label: "2025年9月30日 \
        感謝您 民進黨急了 再不把你弄掉 要怎麼繼續官商勾結 民進黨媒體也急了 再不把你弄掉 要怎麼操縱輿論洗風向 順便拿政府的好處 \
        民進黨支持者更急了 再被你揭發下去 要怎麼繼續裝死裝傻 說民進黨最抗中保台最清廉 弄掉柯文哲 下一個弄掉你黃國昌 台灣就再也沒有第二種聲音囉" },
      { type: "link", content: "https://photos.app.goo.gl/f9ptxw1jKW5d6yhB6", label: "2025年9月30日 抱意思 這個很好吃 路過推" },
      { type: "link", content: "https://photos.app.goo.gl/Pvyav5Y4GxWiwmMKA", label: "2025年9月30日 不管是哪個黨當選 國軍永遠都會出動救災 你應該感謝的是這些國軍 不是政府" },
      { type: "link", content: "https://photos.app.goo.gl/jpA1nTgVpwQKufPR7", label: "2025年9月30日 讚啦 感謝年輕人幫老婆婆踢進捷運 不然他行進中這樣站著好危險" },
      { type: "link", content: "https://photos.app.goo.gl/ogaxvgWNfpJGYdHv8", label: "2024年9月30日 \
        外面自費醫美門檻低賺的多 留在醫院做一線科 都是用自己的命在換病人的病 而且還要通過各種高難度的虐人考試 \
        那些考官腦袋都還是僵化 硬要刷掉一堆辛苦訓練的考生 重點是考過了待遇也沒有去外面做自費醫美來的好 還更累 \
        時代在變了 現在人人為己 學弟妹也不是以前那種生下來就是欠醫院的奴隸的態度了 大老腦袋不跟著進步 政府對醫護的待遇繼續這麼爛 就等著繼續流失救人科的醫師們了" },
      { type: "link", content: "https://photos.app.goo.gl/JTPn6K7jHg3ZfFQMA", label: "2024年9月30日 真的 醫生的薪水去看一支幾百塊的原子筆 還是會覺得很貴 偷到賺到" },
      { type: "link", content: "https://photos.app.goo.gl/QKvzruEwjYLaWWn78", label: "2024年9月30日 天轟回來到" },
      { type: "link", content: "https://photos.app.goo.gl/vF1CXnUvCC13RL5P6", label: "2024年9月30日 我差點以為他拿的是模型" },
      { type: "link", content: "https://photos.app.goo.gl/5y9rXvUmAc2Xdvrc7", label: "2024年9月30日 \
        北眼觀景台夕陽 這次受邀體驗了canon 趕在颱風來之前享受夕陽餘暉 \
        剛學攝影時我是使用canon 當時使用五年多心得是對焦跟寬容度真的大輸另外兩家 只有原生的皮膚色澤紅潤 跟夜景的藍色調真的很美很值得而已 \
        後來就跳家到nikon直到現在六年了 這次使用canon無反 感受到寬容度 對焦跟方便性 機身三個轉盤 而且感光元件還有擋塵板等 真的進步很多 不會輸給nikon了 \
        不過目前心得仍是nikon優先但考慮sony 因為nikon的鏡頭組合是三家唯一選擇性最多的 而且很輕便 但sony在拍攝後的銳利度跟日系風格 \
        也是另外兩家無法完全模仿的 canon只能說 已經追上來 但還沒有非常獨特的優勢 但聽說錄影功能就很強大" },
      { type: "link", content: "https://photos.app.goo.gl/edUDFALN7wVqh7je7", label: "2023年9月30日 \
        雖然跟拍照無關但還是跟大眾科普一下 醫師常說的點值是什麼東西 \
        就是如果幫病人治療使用健保藥品開刀等等 一元的東西會先由醫院付款 然後跟健保申請補助 點值0.8就是醫院付1元但健保指揮給0.8元 \
        那要賺什麼 只能靠鴨低醫材跟藥價進貨等成本 還有自費項目及地下街來賺錢打平 而南部今年點值只剩下0.6元 就是要醫院賠錢治療的意思 \
        所以台灣醫療業 長久以來就是被政府掐住脖子 賠錢治療 只是賠多賠少而已 希望大家善待醫師護理師等醫療人員 真的是又血汗又賠錢" },
      { type: "link", content: "https://photos.app.goo.gl/AN8hG5vaWa7NzYmG6", label: "2023年9月30日 今天上班要當咖啡富翁就是了" },
      { type: "link", content: "https://photos.app.goo.gl/TqwiQ9ea2pZQYhb9A", label: "2023年9月30日 我心中的台灣第一後製神人" },
      { type: "link", content: "https://photos.app.goo.gl/fHiG9YKkHpoYCFVR7", label: "2022年9月30日 三和國中捷運站 有優秀學弟展旭的作品 美不勝收 歡迎路過駐足欣賞" },
      { type: "link", content: "https://photos.app.goo.gl/vmbAoCPCnGEBxa2h9", label: "2022年9月30日 內科好苦" },
      { type: "link", content: "https://photos.app.goo.gl/yv2bjnDJDxvsqRbS7", label: "2022年9月30日 病人9/3入院 至審查日9/22仍未見住院診療計畫書 記缺點一次" },
      { type: "link", content: "https://photos.app.goo.gl/83jfpdEwM52i9qpu6", label: "2022年9月30日 很久很久以前在骨科實習 上刀跟重訓一樣 血肉模糊不可怕 可怕的是開不完的刀跟需要無限體力 所以後來選內科 外科真是令人敬佩" },
      { type: "link", content: "https://photos.app.goo.gl/eQJN5mQGaeCgjH2j8", label: "2021年9月30日 \
        我想把台灣拍的像國外 並不是因為國外月亮比較圓 而是希望讓台灣的美 被大家重視 \
        然後一起保護環境 督促政府跟財團不要過度開發 也不要花錢蓋一堆超醜人工建築在大自然" },
      { type: "link", content: "https://photos.app.goo.gl/5XwCWGVqpPrpzTTP6", label: "2020年9月30日 部隊日常業務之一 每日製造數十張簽名單 每日簽數十張簽名單 督導來展示數百張簽名紀錄造冊" },
      { type: "link", content: "https://photos.app.goo.gl/1FayazSCo58TAxkh7", label: "2018年9月30日 \
        永遠沒放到該放的假 永遠都是緊急返港 一次比一次搞人 龐大的壓力不斷突破我的忍耐底線 但因為有妳與妳家人的體諒 才能讓我安心不少 \
        我們都很辛苦 而且也因為我七年前的錯誤決定 跟這七年不夠努力造成的 只能盡責並且好好努力 清楚穩定幸福的日子會來到 \
        八天出航休息不到三天中間還航安督導 接著緊急返港又要出航十天 千言萬語只有一句 就是謝謝比其他人更堅強的妳 謝謝妳無悔的等待跟包容 一起加油" },
      { type: "link", content: "https://photos.app.goo.gl/U3V1scqs3gBodGkv8", label: "2017年9月30日 吃個飯穿西裝在路上 日本黑社會" }
    ]
  },

  "10": {
    "1": [
      { type: "link", content: "https://photos.app.goo.gl/2WP5vuVGRuFpWTER8", label: "2025年10月1日 好幾天都晚睡 也完全沒讀到書 整天在耍廢 跑起來也沒什麼力 要怎麼振作" },
      { type: "link", content: "https://photos.app.goo.gl/e4ckJT6HWz4mL9nv8", label: "2025年10月1日 真可悲 一想到這些國軍戰爭 還得守護你這種人 真不值" },
      { type: "link", content: "https://photos.app.goo.gl/rKumzJRu4kDGg1B2A", label: "2024年10月1日 滿中肯的 只靠當醫生 在台灣確實資產頂多百萬而已" },
      { type: "link", content: "https://photos.app.goo.gl/EGmkTcJbMWj2fk3R8", label: "2024年10月1日 超可愛 真想跟他一樣不用上班" },
      { type: "link", content: "https://photos.app.goo.gl/V8GEnGqoPyGUYdkd6", label: "2024年10月1日 已購買 山托兒很喜歡" },
      { type: "link", content: "https://photos.app.goo.gl/womErxejrJLSBmP79", label: "2024年10月1日 拜託拜託明天不要放颱風假" },
      { type: "link", content: "https://photos.app.goo.gl/bnaQ7tBtbHMJzZVs9", label: "2024年10月1日 我們也買一隻" },
      { type: "link", content: "https://photos.app.goo.gl/9yTnegYzpz4wVAhM6", label: "2024年10月1日 大老婆還是比小老婆重要的" },
      { type: "link", content: "https://photos.app.goo.gl/1xnWKZARdZSAGrDc8", label: "2024年10月1日 他們覺得老人都喜歡這樣玩嗎" },
      { type: "link", content: "https://photos.app.goo.gl/tCgDZkeeTrELqanf8", label: "2024年10月1日 根本神還原 哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/265pDCu8in8Jrm7K6", label: "2024年10月1日 超美 那時候有拍到真幸運" },
      { type: "link", content: "https://photos.app.goo.gl/jwYcG9aEfDFpXQ1X8", label: "2023年10月1日 \
        很久沒吃澄食 回味一下點大人物丼 雖然很愛吃生魚片料理 但越有年紀就越不會一直吃 吃一遍就覺得今年份量夠了 \
        因為越來越會亂想 生魚片有沒有寄生蟲 木製碗底有沒有發霉 等等的 真的很好吃啦 而且澄食算衛生做的很好的 但今年份量已經夠了" },
      { type: "link", content: "https://photos.app.goo.gl/ypn1ffvtgHshRQ2UA", label: "2023年10月1日 太夢幻了 學弟的交易麻吉們 個個都是交易高手 有兩位月入穩定百萬" },
      { type: "link", content: "https://photos.app.goo.gl/6QWFh6Gi4W2KLEAe8", label: "2023年10月1日 認真覺得至少Z6以上才有辦法拍複雜的光線 調控起來順很多 當然閃燈才是主因 感覺可以再升級了" },
      { type: "link", content: "https://photos.app.goo.gl/8waefmnDG3C7ku3n9", label: "2023年10月1日 \
        久違的回ICU 半夜再次經歷一場急救 沒想到護理師表示上一次急救 就是很久之前我那次的大吐血阿北 命啊 \
        已經遇到第三次來的又急又快的SHOCK 三次當然都沒救活 只有上次大吐血知道原因 這次跟第一次遇到的 都是RIA的病人 \
        什麼預兆都沒有 開始血壓血氧掉 半小時人就沒了 這次比較異常就突然發燒跟DDIMER 2.4>9 CPR之前抽的 可惜DATA還沒出來就RIP" },
      { type: "link", content: "https://photos.app.goo.gl/eqyaLEMTYA2uUrGb7", label: "2022年10月1日 在這裏看電影太熱了吧 士林夜市" },
      { type: "link", content: "https://photos.app.goo.gl/i4NknKX4zyzn7b5B8", label: "2022年10月1日 幾乎都待在醫院完全跟不到兄弟特別北上拍照" },
      { type: "link", content: "https://photos.app.goo.gl/LNvEtUHcHVhQrXc87", label: "2022年10月1日 這張照片的作者跟我一樣名字欸好巧 在拍牆上的照片 結果作者不小心擋到 真抱歉 與他的作品與我幫他合照他的作品的作品" },
      { type: "link", content: "https://photos.app.goo.gl/fHwKZgkNDxPTsmik8", label: "2021年10月1日 跟醫生比這叫做天堂般的工時" },
      { type: "link", content: "https://photos.app.goo.gl/VxtHYtJGstHB6gcH9", label: "2021年10月1日 我高中最快3*3*3魔術方塊是25秒解完 但早就忘記公式 哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/28kP1q1paiuUZkUDA", label: "2021年10月1日 \
        徵老師一位 地點台北 有薪 一堂課 對象是大學生 人數不超過20位 上課內容大概簡單介紹手機攝影 可用哪些軟體 帶著學生簡單修圖 基本介紹修圖功能\
        費用不高 所以不用進階或高超技巧 有興趣可私我" },
      { type: "link", content: "https://photos.app.goo.gl/p3kmpMrSSknrKRs16", label: "2021年10月1日 也換新相機的 越來越會拍狗" },
      { type: "link", content: "https://photos.app.goo.gl/CgME8dBQMjfHuZzD9", label: "2020年10月1日 我在跟她說我是甲上級烤肉廚師 她只在乎我有沒有偷喝奶茶" }
    ],
    "2": [
      { type: "link", content: "https://photos.app.goo.gl/YUibMKLkahQdwhAZA", label: "2025年10月2日 不行了笑到破防" },
      { type: "link", content: "https://photos.app.goo.gl/Gihv1uuxaU7PQbLr6", label: "2025年10月2日 這種噁男就是直接忽略他" },
      { type: "link", content: "https://photos.app.goo.gl/oPL6Jk6jEoLdumt68", label: "2025年10月2日 學長現在已經非常可靠了" },
      { type: "link", content: "https://photos.app.goo.gl/3dGfF94hLfjE5ZVv6", label: "2025年10月2日 我要買" },
      { type: "link", content: "https://photos.app.goo.gl/ytG6z3affChJmNYVA", label: "2024年10月2日 \
        可能有些縣市會連放四天 可能有些縣市會連放三天 看到一堆限動都好開心 但每個颱風假 很多醫護人員都沒得放 \
        照常冒著生命危險上班 連自己家人都陪伴不了 很多醫生沒有補休 沒有加班費 颱風天來醫院就是做功德 \
        值班的醫生也瞬間升級成全日值班 人力更不足 \ 颱風天放假沒有下雨很爽 很多人去唱歌 睡到自然醒 \
        但真的不要忘記醫護人員被迫在醫院賣命 請注意自身安全 別來醫院拜託" },
      { type: "link", content: "https://photos.app.goo.gl/SHL9f8ykpbtSLrpA6", label: "2024年10月2日 我明明是說要穿多一點才能拍" },
      { type: "link", content: "https://photos.app.goo.gl/S4Rca5bxjad1HCzY9", label: "2024年10月2日 一起齁齁哈嘿" },
      { type: "link", content: "https://photos.app.goo.gl/R7ABQA9x1XssqN828", label: "2024年10月2日 沒有 只有上班自己的晚餐自己pay" },
      { type: "link", content: "https://photos.app.goo.gl/CCEnrt3reiYRNwEFA", label: "2024年10月2日 哈哈哈哈 我也想要這樣" },
      { type: "link", content: "https://photos.app.goo.gl/39HXJEsqjams4U8MA", label: "2024年10月2日 對啊" },
      { type: "link", content: "https://photos.app.goo.gl/j97KT6h8N4J4UHzS9", label: "2024年10月2日 整骨沒有用 人的骨頭不可能只靠一點點外力就移動位置 古時候民智未開才會信整骨" },
      { type: "link", content: "https://photos.app.goo.gl/SErJV7n23Mnnrr5v7", label: "2023年10月2日 \
        第一次覺得一個月如此飛快 真的太愛這裡 每個主治都很和藹 也願意教學跟聊天 不用有一堆機掰會議跟莫名的雜事 \
        PM就好好P 在這裡選內科都甘願 唉居然要離開了 跟月初一樣 再次確定未來志願區域小醫院或診所 \
        絕對不要去那種凶神惡煞 爭奪官位 汲汲營營於寫PAPER 被要求教學跟面對奇怪長官的奇怪醫院" },
      { type: "link", content: "https://photos.app.goo.gl/LTyu1zK37DfMy2Fa6", label: "2023年10月2日 比什麼NEJM表格還受用 存著提醒自己 別把你的錢留到死" },
      { type: "link", content: "https://photos.app.goo.gl/g7RXd1u6r3qdcsdc8", label: "2022年10月2日 \
        池先生公館店 主餐我們選了咖喱海鮮湯麵跟福建炒麵 料多實在 尤其蝦仁真的好大隻好Q彈 麵量也剛好吃飽 \
        另外我們也點了烤咖椰吐司 椰漿甜度剛剛好 但因為最先上 推薦一定要先吃一片 脆脆甜甜十足的讚 \
        飲料我們點美祿 馬來西亞奶茶 都很好吃 其中奶茶真的很讚 嗜甜螞蟻的福利 消費不算太便宜 但論CP值還是很值得 \
        懶人包 滿分的馬來西亞料理 不過也稍微台灣化 偏甜但很入口 以前吃過馬來西亞在地料理真的辣跟鮮 可是兩者我都喜歡 \
        好好吃喔 不過馬來西亞在地料理不會偏甜 超好吃的馬來料理 建議訂位唷 現場約等10 15分鐘也沒有很久" },
      { type: "link", content: "https://photos.app.goo.gl/C4s9qhGUbtYwTMAB8", label: "2022年10月2日 這個正版的枕頭才275元 我昨天在士林夜市花了400元 打氣球獲得一個應該是盜版的" },
      { type: "link", content: "https://photos.app.goo.gl/6dwKvZsK2D7Mxdqb7", label: "2022年10月2日 好好喔醫院還有特聘超強攝影師" },
      { type: "link", content: "https://photos.app.goo.gl/7EQQCBCyFUswtJzLA", label: "2022年10月2日 她也快成剪片大師了" },
      { type: "link", content: "https://photos.app.goo.gl/P6kvbikbpVU4QkuD7", label: "2021年10月2日 感謝高雄最帥老師" },
      { type: "link", content: "https://photos.app.goo.gl/mDrKRrNXLamph8Ni8", label: "2021年10月2日 \
        哇太感動了 非常感謝你 她用心選圖和排版出來的 很感謝有你的支持 讓我們更有動力繼續以相機探索世界 記錄更多的美景 \
        未來若有機會 不知道多久後 再出桌曆的話 再多多支持囉 或是說若有明信片的話 也會告知大家" },
      { type: "link", content: "https://photos.app.goo.gl/Aot6HDoihpqsnmFWA", label: "2020年10月2日 笑死 原來各國股市會下跌的原因都很不一樣" },
      { type: "link", content: "https://photos.app.goo.gl/JyoyrB65YvV6BchHA", label: "2017年10月2日 こはんを食べました exchangeprogram 午飯 友達" }
    ],
    "3": [
      { type: "link", content: "https://photos.app.goo.gl/fi9xGr5VXAHwaEjY8", label: "2025年10月3日 \
        第五種 病人可接受但家屬抵死不從型 還會威脅有拍照錄音 什麼樣鬼怪的病人或家屬都碰過 放鼻胃管沒幾個錢 有醫師願意幫放真的要珍惜" },
      { type: "link", content: "https://photos.app.goo.gl/Ywdcv8wqhzZhVprh7", label: "2025年10月3日 挑戰空心投進三分球要請20份麥當勞" },
      { type: "link", content: "https://photos.app.goo.gl/9UFP4RgJZNs9o2jbA", label: "2024年10月3日 以前看到一堆說打仗不怕要打來打的 先看看這個影片問自己 有沒有勇氣看著頭頂飛彈飛過來然後無處可躲" },
      { type: "link", content: "https://photos.app.goo.gl/k5TCyKVN4hon1DTX7", label: "2024年10月3日 對啊" },
      { type: "link", content: "https://photos.app.goo.gl/DaicC3ghWGMYSWQeA", label: "2024年10月3日 不用戰吧 你對得起自己良心就好 呵呵" },
      { type: "link", content: "https://photos.app.goo.gl/sCWKMcek97iqhCg89", label: "2024年10月3日 原來筋跟膜鬆掉骨頭會歪噢呵呵 請問你說的筋跟膜具體是哪 鬆掉了是變成章魚哥嗎" },
      { type: "link", content: "https://photos.app.goo.gl/AVPvKBvQN8YF8rHU6", label: "2023年10月3日 \
        第一天上內急真的震撼教育 早上0730倒晚上2000 沒辦法吃任何東西 中間除了喝水尿尿外就是看病人 交班我幾乎一半都沒辦法完整交班 \
        台灣人也真幸福 很多4 5分鐘就能看到醫師 在國外分鐘要換成小時 結帳台幣要換成美金吧" },
      { type: "link", content: "https://photos.app.goo.gl/saLMqnrPFZJJqxft8", label: "2023年10月3日 \
        最久以前我是為了拍婚禮跟奕宏學長學習後製的 然後還去外面當免費助手 學習燈法 \
        雖然已經很久沒碰了 但現在偶爾拍拍婚禮 還是覺得很開心 很喜歡紀錄這種溫馨美好的場景" },
      { type: "link", content: "https://photos.app.goo.gl/NkkUEdg1yxCa2fRe7", label: "2022年10月3日 \
        推薦大家 YT小綠頻道 由新光醫院李醫師利用閒暇時間所做的 講的深入且清晰 內科能有如此耐心教學的學長 才讓年輕醫師願意嘗試跟投入 推" },
      { type: "link", content: "https://photos.app.goo.gl/uRvnrSLbQeFC83gg9", label: "2022年10月3日 \
        毛茸茸喵星人 舊地重遊侯桐貓村 拍了好幾G裡面選了六張 也是我第一次在風景攝影版面放上喵星人 不知道大家會不會不習慣 \
        回家後才發現原來每隻貓都有名字 甚至有許多遊客認出他們 能留言跟我說他們分別叫什麼嗎 \
        在充滿風景的作品中穿插一個貓貓特輯 希望不要因此退我追蹤嗚嗚" },
      { type: "link", content: "https://photos.app.goo.gl/vYpVFpuTF7myhxXZ8", label: "2022年10月3日 \
        Westermark sign 非常感謝前輩分享 圖一到圖三 是病人巨大的pulmonary embolism 在心臟超音波下四個腔室清楚可見 \
        並且在同一位病人的CXR出現Westermark sign 簡單介紹如圖四跟五 圖六為網路另一個例子" },
      { type: "link", content: "https://photos.app.goo.gl/AgzULf9EJTyPs5uTA", label: "2021年10月3日 久違的美味早午餐 終於又發文了 真的好吃" },
      { type: "link", content: "https://photos.app.goo.gl/SLsjkjUbtqZCcy9CA", label: "2021年10月3日 這什麼古老年代的IPHONE阿嬤" },
      { type: "link", content: "https://photos.app.goo.gl/boJdDeyxasaPSyNk8", label: "2021年10月3日 NETFLEX家庭專案 缺一人每個月100元 110/10/6開始 希望是長期使用者 有需要私訊" },
      { type: "link", content: "https://photos.app.goo.gl/RLwjarYxbcAkcLpV7", label: "2020年10月3日 真心覺得晶華酒店不只超高級 停車場各種千萬名車 大部分都是200多萬以上的 而且真的好好吃 好吃好吃" },
      { type: "link", content: "https://photos.app.goo.gl/T6GSoiyfuykigrYC8", label: "2019年10月3日 跟他說這裡是國軍醫院不歡迎共匪" },
      { type: "link", content: "https://photos.app.goo.gl/NWnRf9uhExWTD93v6", label: "2017年10月3日 日本醫生西裝褲好看又好穿 通風透氣正式又不用穿皮帶 可以吃飽飽 台灣沒賣好想多買幾件" },
      { type: "link", content: "https://photos.app.goo.gl/JCisXVfAkp4g3ZDv8", label: "2017年10月3日 拍照好累 讀書比較輕鬆" },
      { type: "link", content: "https://photos.app.goo.gl/U67a7XWFkXLuCVBm6", label: "2017年10月3日 New work would be lanuched" }
    ],
    "4": [
      { type: "link", content: "https://photos.app.goo.gl/Aok9iHcEMLYQ4ocM8", label: "2025年10月4日 華山奶茶脆波波三分糖少冰超好喝 比我過去最愛喝的椰果奶茶更好喝" },
      { type: "link", content: "https://photos.app.goo.gl/nEtzb8wJN6h65G4J8", label: "2025年10月4日 鄭捷接受死刑之後還有再犯嗎 沒有嘛 會覺得死刑沒用的都是白癡" },
      { type: "link", content: "https://photos.app.goo.gl/LGeDw9M2zL1uBtYZA", label: "2025年10月4日 我覺得要做一個" },
      { type: "link", content: "https://photos.app.goo.gl/UnGFTssiyzSM4T416", label: "2025年10月4日 什麼87出題 心臟注射基本上就是從動脈注射進去 現在人體基本上不可能做直接從心臟的注射" },
      { type: "link", content: "https://photos.app.goo.gl/jaMK5Dnf1rspahc16", label: "2024年10月4日 睡覺比較好 睡飽就不餓了" },
      { type: "link", content: "https://photos.app.goo.gl/USdGzKrfikmkGxYZ7", label: "2024年10月4日 與其長時間待在醫院 不如好好鼓勵醫護早早下班離開醫院 好好運動提升自己的體能跟最大攝氧量 也能減少自己成為心血管患者的機會" },
      { type: "link", content: "https://photos.app.goo.gl/H24WJzTh1fz5cMTv7", label: "2024年10月4日 謝謝山陀兒侵台 百忙中加入聯合討論會 幫忙share一次報告" },
      { type: "link", content: "https://photos.app.goo.gl/RLWVHWmibotedPHn8", label: "2024年10月4日 我也要" },
      { type: "link", content: "https://photos.app.goo.gl/B8hiVxorM5t2DbhF9", label: "2023年10月4日 今天只有業務送一瓶超小的奇怪品牌水" },
      { type: "link", content: "https://photos.app.goo.gl/ycKWHj2ftzfFkMK29", label: "2022年10月4日 我沒辦法天天出作品 但可以分享一下特別的台灣攝影作品" },
      { type: "link", content: "https://photos.app.goo.gl/hMmvzXVPZiS5ZH49A", label: "2021年10月4日 提前拿到的五週年禮物之一" },
      { type: "link", content: "https://photos.app.goo.gl/J4H8RXjQKnHPzAM66", label: "2020年10月4日 2020年沒有任何事情不可能發生" },
      { type: "link", content: "https://photos.app.goo.gl/ERmoofKJnrwAiiKNA", label: "2020年10月4日 是誰說5161病房很好睡 病人一直收 Complain一直來 換藥也不少" },
      { type: "link", content: "https://photos.app.goo.gl/nMGa2oydy3AKiis4A", label: "2020年10月4日 \
        醫生雖然相對薪水高 但只要一除工時下去 比711店員還低薪 何況還不計算為了考上醫科 花費多少寶貴的青春歲月\
        某醫學中心目前為止 值班一天也只有60元" },
      { type: "link", content: "https://photos.app.goo.gl/3fKtuXBGMpecko4b7", label: "2017年10月4日 Knowledge缺乏到不行 至少基礎的要補充" },
      { type: "link", content: "https://photos.app.goo.gl/HvP8udSpeupG3UBH7", label: "2017年10月4日 都快忘了popping怎麼跳 原本就不太會 tokyo popping practice 中秋節快樂" },
      { type: "link", content: "https://photos.app.goo.gl/orXuqGymccZpTAbz9", label: "2016年10月4日 \
        終於體會到 真正絕望到全身無力的感覺 手不斷得發抖 是真的身平以來 當下想就這麼趴倒 被一槍打死都沒這麼難受 \
        無論命運再怎麼蹂躏我 讓我辛苦讓我失敗甚至詆毀我 我都不怕 可是絕望會 很深很深的絕望 \
        要讓一個人死不需要複雜的算計 讓他連一點希望都沒有就好" },
      { type: "link", content: "https://photos.app.goo.gl/6ibQwhcHUvWsz36K8", label: "2016年10月4日 \
        血液腫瘤科 小成就 一個月 來這裡一個月 還是想特別記錄一下無聊中的小小喜悅 那就是portA人工血管通路 的實行了 \
        一開始我連備物都不知道 完全不知道以前OSCE是怎麼通過的 然後大概做兩次之後好像不自覺的開始上手 漸漸越來越順 \
        第三禮拜我嘗試用英文給烏克蘭交換生示範portA的施行 發現好像緊張中也能安全完成操作 \
        然後中間也幫同學cover兩床難放的portA 什麼是難放 簡單說就是人工血管的基座埋在皮下太深 或者病人不太瘦皮脂厚 就很難定位 \
        剛好今天交班前又一床難放的 病人表示從前護理師或intern都要放三次以上或用長針 當下聽到心理躍躍欲試想挑戰 冷靜準備之後 沒想到一針短針直接到位 被小小稱讚 \
        不過最重要的是 施行同時顧病人疼痛感受 盡量快狠準的完成 待了一個月了也許自己沒什麼長進 但是on portA的感覺 離開後還是會永遠記得 0敗 繼續維持" }
    ],
    "5": [
      { type: "link", content: "https://photos.app.goo.gl/yow198k1WGnADAAZ7", label: "2025年10月5日 有推薦的防水包包 類似北臉的這種嗎 可以放MAC 一機兩鏡 空拍機 出國可以背 顏色又低調的嗎 黑迷彩或純黑" },
      { type: "link", content: "https://photos.app.goo.gl/oZ8YQLFfLNtoWQRh7", label: "2025年10月5日 1360就讓專業人士判斷你是健康的 好便宜唷" },
      { type: "link", content: "https://photos.app.goo.gl/62hvTL3dCSrLZjMB9", label: "2025年10月5日 \
        有胸痛跟抽菸 第一張EKG沒有j point上升 tni上升診斷NSTEMI 但TIMI score依照文章敘述應該還是0 \
        隔天早上V23 biphasic T wellen type A 瞎猜LAD proximal \
        CXR有點pulmonary congestion的感覺 但還不到pulmonary edema killip 2 做導管時機應該是24小時內" },
      { type: "link", content: "https://photos.app.goo.gl/Y2zhDAd4rnq2QnFU7", label: "2025年10月5日 有些底層就是不配活著" },
      { type: "link", content: "https://photos.app.goo.gl/mR8vJ4WBAZBWe6fj6", label: "2025年10月5日 重點就是不能住在一起 這也是我一向的原則 不是每個男生都做得到的 真的是委屈" },
      { type: "link", content: "https://photos.app.goo.gl/qAvxvrDbKYHLTn4A8", label: "2025年10月5日 走啊練啊" },
      { type: "link", content: "https://photos.app.goo.gl/uduJ8XzfZWpwWg1s7", label: "2024年10月5日 \
        沒想到攝影這個興趣可以超過十年了還在持續 但自己已經停止進步了 只能把心力放在工作 不過一路走來認識許多夥伴 還有現在各家廠牌厲害的攝影老師 \
        一起吃飯聊天 感覺真的很棒 很希望自己能回歸攝影圈 充實攝影的技術 出國拍作品 再次成為講者分享" },
      { type: "link", content: "https://photos.app.goo.gl/tvhsDcYZhszpirC29", label: "2024年10月5日 \
        信義區晚上 男上加男相親相愛的學平衡車 信義區怪人 \
        因為業務壓力太大流浪在台北知名酒吧無法自拔 等等要去發名片了 說好要帶鄉下的孩子來玩玩bar 不過他有點不知所措" },
      { type: "link", content: "https://photos.app.goo.gl/GLLkyvQRhTN7QF9F9", label: "2024年10月5日 逛展巧遇 很紅的" },
      { type: "link", content: "https://photos.app.goo.gl/C5xb4W9xEmv93PWm7", label: "2024年10月5日 哇德寶難波萬啊 還不忘記推銷德寶 太敬業了 來跟江老師學習攝影" },
      { type: "link", content: "https://photos.app.goo.gl/9MTXZkVvvJ8nAbjx5", label: "2024年10月5日 在場內也可以風景攝影火燒雲" },
      { type: "link", content: "https://photos.app.goo.gl/2M46JLq5qBuubuoK6", label: "2024年10月5日 以前陸戰隊的兄弟 現在退伍混的很好都快當店長了吧" },
      { type: "link", content: "https://photos.app.goo.gl/Tz3eA2zxLCFe454E6", label: "2024年10月5日 台南德寶 今年一人就是一個攤位 行動店員" },
      { type: "link", content: "https://photos.app.goo.gl/g3s3hT2EQgAminWW8", label: "2024年10月5日 感謝沒有贊助但讓我們亂入" },
      { type: "link", content: "https://photos.app.goo.gl/WUgBgKDbdJbdWPR49", label: "2024年10月5日 今天可以好好沐浴在攝影的世界了 百聞不如一見 Sony24240靠真的很香 比nikon24200還香 且不到25000元 是不是該跳家 配合1224GM" },
      { type: "link", content: "https://photos.app.goo.gl/6UeqVez73iCTeDra9", label: "2024年10月5日 這是誰ㄚ" },
      { type: "link", content: "https://photos.app.goo.gl/tvxd5hzg4XeS4VU49", label: "2024年10月5日 我們颱風都沒救援到貓貓" },
      { type: "link", content: "https://photos.app.goo.gl/Dvm52XmGK2NSy5PKA", label: "2023年10月5日 之後要出門的夥伴們 感謝支援湊滿大三元 支支畫質都可跟定焦比 70200還兼具重訓負重功能 實際用看看再來分享跟24200的差別" },
      { type: "link", content: "https://photos.app.goo.gl/XgdnakRVq2q8ShEq5", label: "2023年10月5日 感謝最厲害的攝影師吳展旭紀錄每個感動的瞬間" },
      { type: "link", content: "https://photos.app.goo.gl/3XhSvh7CyypPTFacA", label: "2022年10月5日 上次受傷後休息了一個月 R2後壓力越來越大 晚睡早起 身體很明顯虛弱很多 再不久要三十而立了 沒規則運動跑起來身體好重 腳也沒後勁" },
      { type: "link", content: "https://photos.app.goo.gl/CoKCQngdouzVsqKp9", label: "2021年10月5日 徵一人一起家庭方案 每個月100元 從110/10/11開始 一次一年" },
      { type: "link", content: "https://photos.app.goo.gl/hD9ghqfQq14DBeW69", label: "2020年10月5日 \
        case請益 病人是Hap再入院 女性60歲 意識清楚沒有喘 前幾天拿掉ng之後 吃東西後都會吐 但喝一點水沒問題 \
        今天照kub 之前都沒照過 長這樣 感覺腸氣很多 前幾天給瀉藥只有大一點點 我該懷疑ileus或ibd嗎" },
      { type: "link", content: "https://photos.app.goo.gl/mPk3C2LDEcj2E7Mt9", label: "2017年10月5日 \
        被校長看到照片點名 還是第一次 其實心裡非常慚愧 學攝影以來 其實我很自私 在學業與興趣的取捨 常捨學業而取攝影 \
        當然成績上完全沒有問題 該拿的執照資格 實習技能都學會 只是被校長注意 忽然領悟一件事情 以前大人說 能被社會所用 你才是個成功的人 \
        我一直覺得狗屁 社會憑什麼利用我 才能都是我自己努力的為何要分享 現在我大大明白了 當有所成就時 適時反思自己這一路上 \
        受到多少人幫助與重視 如同我沒有優異成績或論文 卻被校長注意 所以取之社會 回饋社會 帶動後輩更多進步的機會 \
        這只是校長輕輕帶過的一句話 但更該努力 讓自己有能力改變他人 國醫有這樣一位親民的大家長 真的很幸運 \
        居然被院長直接點名 不勝惶恐 我希望要求自己 拍照之餘 莫忘初衷 醫學本業未來回饋母校 如同校長重視我們學生一樣 \
        815大停電全台近600萬戶停電 我們的醫學生吳展旭以心靈的鏡頭捕捉了台北的星空 與百年前梵谷畫作中熾熱的內心世界相互輝映" },
      { type: "link", content: "https://photos.app.goo.gl/bByfCzsqeiHzb8bL9", label: "2017年10月5日 咬碎自己臼齒一塊 唉偏偏在東京 不能大吃美食沒關係 這有需要立即處理嗎 大家吃東西千萬小心 不要咬太用力" }
    ],
    "6": [
      { type: "link", content: "https://photos.app.goo.gl/a8NgvsYQktwcKerW6", label: "2025年10月6日 \
        阿蓮米粉湯 又帶我去吃美食啦 在台中火車站旁邊 阿蓮米粉湯裡的炸醬細麵 蛋花湯 油豆腐 豬血湯 \
        都讓剛吃完午餐沒多久的我又餓起來了 我個人最喜歡的就是圖一的炸醬細麵 配上蛋花湯跟燙青菜其實就很滿足的一頓 又便宜又好吃" },
      { type: "link", content: "https://photos.app.goo.gl/ZtCVerNgKKwY9cvC6", label: "2025年10月6日 這會超有天份" },
      { type: "link", content: "https://photos.app.goo.gl/29LSagnevBQW8uoa6", label: "2025年10月6日 好酷喔" },
      { type: "link", content: "https://photos.app.goo.gl/dSXadHfwdEdkHHLz8", label: "2025年10月6日 超可憐" },
      { type: "link", content: "https://photos.app.goo.gl/vBHzqzwXr5R47ikc6", label: "2024年10月6日 好奇有這個地點嗎 101旁邊沒有這個拍點" },
      { type: "link", content: "https://photos.app.goo.gl/98FGTQtJTK6jKsde8", label: "2024年10月6日 連開車的都暈" },
      { type: "link", content: "https://photos.app.goo.gl/Lo4nAreztLCP9R7s5", label: "2024年10月6日 \
        小丑2雖然不對自己胃口 卻勾起一些往事 國中讀美術班 班上有個畫漫畫很強的同學 因為去過他家 尤其是色情漫畫他畫一大堆 我承認以國中水準他漫畫畫功可以算準職業 \
        印象很深刻 但可能因為家庭因素 讓他比同年齡的同學更懂社會 可惜他並不是老成或穩重 反而是帶頭霸凌同學的那個 不過好在美術班第一屆被學校重點栽培 \
        因此他帶頭霸凌也只能在言語上而沒有進展到肢體傷害 當初班上有個女同學 就被他形容的很難聽 細節忘記了 帶頭群起討厭遠離她 雖然大家都不知道為什麼 \
        但因為怕也被霸凌 所以只能附和他 長久以來也自然的會遠離那位女同學 小丑裡的亞瑟也是 明明已經過的比別人悲慘卻遭受嚴重的霸凌 終致別人與自己的不幸 \
        或許隔著螢幕感受不到霸凌帶來的威力 但反思到自己曾經親眼看到的經歷 會覺得很可怕 正因為那位男同學總是用霸凌的方式貼別人標籤 \
        導致多數同學平白無故的去討厭那個女同學 這個影響直到我懂事了 才疑惑我何必跟著起舞 可惜但心智成熟能夠分辨對錯時 很多莫須有的刻板印象跟傷害已經造成 \
        後來那個帶頭霸凌的男同學不知何故刪除我臉書 以前學生時還很驚訝 怕自己也變成他貼標籤的對象 但現在覺得萬幸 這種人 還是永遠別跟我扯上關係最好 \
        長大以後 霸凌對我們的影響變小很多 因為我們知道自己想活成怎麼樣 也沒時間理會那些無聊的碎嘴 但在青澀的學生時期 都是脆弱非常害怕被傷害的年紀 \
        如同小丑 為了保護自己選擇傷害他人來引起注意跟關切 最終才發現被解決的是自己 誰也沒得救 之前偶然在臉書看到被他霸凌的女同學活得很好 \
        更加肯定那是帶頭霸凌的那位同學有問題 也幸好自己一直都不是帶頭霸凌的人 我們可以選擇善良 就應該選擇善良 一時的惡行只會製造悲劇或更大的惡" },
      { type: "link", content: "https://photos.app.goo.gl/44wVgfNT6YQj31Zn8", label: "2024年10月6日 社牛要回家了" },
      { type: "link", content: "https://photos.app.goo.gl/C6NvF5p12QCxRzjy7", label: "2024年10月6日 你要不要腦袋想想你在寫什麼 牙醫師欠你" },
      { type: "link", content: "https://photos.app.goo.gl/3JgPLFAXbkuZ6rD39", label: "2024年10月6日 \
        心臟會需要手術就代表血管或瓣膜很糟 即便手術成功心臟很爛是會活 醫師已經給你親人一個活著的機會了 難道又想坑醫師的錢嗎 台灣以後誰走外科救人 誰就是白癡" },
      { type: "link", content: "https://photos.app.goo.gl/e2oTuqfqAcpifq9LA", label: "2024年10月6日 \
        不專業影評 先說結論 沒有雙重瘋狂 只有雙重失望 在多數觀眾心裡小丑的角色訂位 應該是幹出瘋狂大事的角色 但小丑2卻是充滿內心戲的一部 \
        以下不爆雷 整部電影充滿重複的拍攝手法 抽菸畫面裡有畫面跟幻想交織而成 每每期待會有大場面出現但都終歸於被關回牢房 \
        我大概能理解導演想把小丑本人的矛盾跟情緒給具體化塑造 但我不認為這是觀眾想看的 即便只是從劇情名稱雙重瘋狂來看 \
        觀眾期待的應該是在高譚市裡小丑及小丑女大鬧特鬧一番 但最後只有愛情歌舞劇 如果喜歡看內心戲的應該滿適合的 \
        燈光音效跟造景都很棒 但劇情不對大眾胃口 但想看爽片 想當劇情裡那些期待小丑出場的群眾的話 最終只有自己會變買票入場小丑" },
      { type: "link", content: "https://photos.app.goo.gl/kMLZNHkozvaqyWKX6", label: "2024年10月6日 月薪十萬在雙北市 只有單身才會覺得錢夠用" },
      { type: "link", content: "https://photos.app.goo.gl/x5mGjxiTnhxqA7Bh9", label: "2024年10月6日 今天看完了這部 沒有雙重瘋狂 只有雙重失望" },
      { type: "link", content: "https://photos.app.goo.gl/Mui6TpBd38RHw4Xu8", label: "2024年10月6日 \
        紀錄一下大直美麗華影城的爆米花跟奶茶 真的難吃難喝到爆 下次絕對不能花冤枉錢 奶茶喝起來完全奶精 味道就是廉價飯店附贈的茶包泡出來那種 完全一樣 \
        爆米花甜的 但很不均勻 有些沒味道有些正常甜 剛吃就吃到顆粒 建議大直影城看電影先去其他地方買好吃的喝的" },
      { type: "link", content: "https://photos.app.goo.gl/PqLbxZ5aG4oa1NSBA", label: "2024年10月6日 超美 下一代應該更讚" },
      { type: "link", content: "https://photos.app.goo.gl/QY7ysZucB85D6wNG9", label: "2023年10月6日 看起來真好吃" },
      { type: "link", content: "https://photos.app.goo.gl/T4vFkGnbnQTUnr7K7", label: "2023年10月6日 急診上班 平均每天HYDRATION三杯拿鐵" },
      { type: "link", content: "https://photos.app.goo.gl/RASBErKSchAHvFvY6", label: "2021年10月6日 撿回一隻招財貓" },
      { type: "link", content: "https://photos.app.goo.gl/DbbGz6hvbGc8Xf6EA", label: "2017年10月6日 夜車初體驗 外面很冷 裡面很熱 位置很小但是還算舒適" },
      { type: "link", content: "https://photos.app.goo.gl/sL5hZjC7MvYL9Xhm8", label: "2017年10月6日 騎了22公里的腳踏車 勘完東京鐵塔的拍點 沒有多休息 馬上出發京都拍攝行程了 京都去去就回 體力還撐得住" },
      { type: "link", content: "https://photos.app.goo.gl/cxF1ZvQzYLpPXBfe7", label: "2017年10月6日 還行" },
      { type: "link", content: "https://photos.app.goo.gl/88ngtzjYPG7LUvu66", label: "2017年10月6日 好大一根 塔" }
    ],
    "7": [
      { type: "link", content: "https://photos.app.goo.gl/FDbDuyKkFMZHQJcR7", label: "2025年10月7日 怕是怕那些人連中文都看不懂" },
      { type: "link", content: "https://photos.app.goo.gl/HjEgLSv2X8jiGaCh9", label: "2025年10月7日 長得好像釘鞋喔" },
      { type: "link", content: "https://photos.app.goo.gl/sDXeoxmeYoYrX1h16", label: "2024年10月7日 近期在脆上看到最有用的一篇文 學習到了" },
      { type: "link", content: "https://photos.app.goo.gl/s13Uc49FRYDZyTXM8", label: "2024年10月7日 \
        北眼觀景台夕陽 上週末參加南港的攝影器材展 除了聚餐吃飯還有跟許多厲害的老師及攝影師合照以外 最大的收穫是實體看了sony的相機跟鏡頭 \
        對於一個追求輕便 要同時符合風景及街頭紀錄的功能 原以為nikonz6系列搭配z1424及z24200已經是目前最完美的解法 \
        但接觸到a7r系列搭配1224GM及24240 真的有點回不去了 要不是這個跳家價格動輒20萬以上 還真有點衝動了 \
        在手機拍攝功能及AI後製日趨強大的時代 我想相機結合高畫素 高寬容及更輕巧才是未來的趨勢 也才能暫時不被取代" },
      { type: "link", content: "https://photos.app.goo.gl/2tvucE5hYodgSU1v8", label: "2024年10月7日 \
        次專科最大的差別是 完全沒有任何繁體字編輯且完整的書可以看 內專還可以看中文小麻跟FC 還有一堆網誌 不只難度超高超複雜 找的書籍一定都數千頁以上的原文 \
        這樣要讀到民國幾年呢 太困難了 從小都是接受書好好的放在那裡只需要讀 長大後讀書最難的是連書在哪 哪些要讀 都要想辦法解決" },
      { type: "link", content: "https://photos.app.goo.gl/fneV1QgvNTpf8gZ89", label: "2024年10月7日 是網路酸民閣下嗎" },
      { type: "link", content: "https://photos.app.goo.gl/gKu2TcemvdXgT5QD9", label: "2024年10月7日 \
        可以拍的點非常多 但地形不像象山 空拍焦段最長目前應該是70mm 以70來說很難拍到這種壓縮感 就算離101最近的制高點山上來說 \
        也應該要150200mm以上才有可能 例如在最近的象山 所以我個人推測有可能是前景拍好合成背景的101 假設真有這個拍點 \
        我相信版主為了這張照片的獨特性 一定不好告知大家地點 好東西絕對不會分享的 畢竟能拍到獨特畫面有流量不容易 只能靠大家合力找出拍點" },
      { type: "link", content: "https://photos.app.goo.gl/7veTzq6hTQfXRsdx7", label: "2023年10月7日 這家咖啡好喝 但奶茶爆甜 料也很特別 自認螞蟻的很推" },
      { type: "link", content: "https://photos.app.goo.gl/qQfZdr3gSTujLtsC7", label: "2023年10月7日 不要街景隨便都這麼美啦" },
      { type: "link", content: "https://photos.app.goo.gl/WSigAWJm8TyrHaBr7", label: "2023年10月7日 \
        點了小的海鮮粥 給我來一份台灣特大的份量 確認後真的是小的 認真推一下這家超讚海鮮餐廳 我們點了一盤小的空心菜 原來越南小的份量是台灣大的 兩倍大" },
      { type: "link", content: "https://photos.app.goo.gl/8sw3TjMP87BKer6r9", label: "2023年10月7日 笑死 幾乎每個司機都邊開車邊滑手機 駕照應該有包含這個技術考試" },
      { type: "link", content: "https://photos.app.goo.gl/ApLhQqAFtUQni9Ub6", label: "2023年10月7日 飯店接送車是賓利" },
      { type: "link", content: "https://photos.app.goo.gl/9KGEWqeZCVZ37aAq7", label: "2023年10月7日 一晚才4000塊就能住五星級VIP級別超大套房 在台灣這種一晚要一萬多吧 風景還更美" },
      { type: "link", content: "https://photos.app.goo.gl/KYjmbCHZzVgCd8RC6", label: "2023年10月7日 這裡的街景道路也太像台灣 只是機車汽車亂成一通 五秒就用喇叭溝通一次 切左道右道沒在管後面有沒車" },
      { type: "link", content: "https://photos.app.goo.gl/y4uefkDoYFf7nrrF6", label: "2023年10月7日 神秘農場真好看 但是不是不防偷跟割啊 結果帥包整個黑到看不清楚" },
      { type: "link", content: "https://photos.app.goo.gl/MBJns3KNHRivDhpw5", label: "2023年10月7日 \
        最喜歡的縣市 桃園市 最喜歡的景點 桃園機場 謝謝差點變成桃機五日遊 搞不清楚Surname and Given name的男人 \
        還好彼岸的海關願意接受通融 地勤小哥說很看運氣 有些人就被扣在台灣了 請大家申請簽證的時候務必再三確認跟護照姓名一樣哦 感謝主" },
      { type: "link", content: "https://photos.app.goo.gl/e9LgxehkiPV15am49", label: "2020年10月7日 \
        雨後三總 回來兩個月 雖然很累 但不覺得浪費時間 希望能跟上優秀的同學們 而這個熟悉的景色 已經看了七年 還要再看六年 要放下攝影夢了" },
      { type: "link", content: "https://photos.app.goo.gl/kKeKsrXXGt9EFFG1A", label: "2017年10月7日 在日本90%時間都騎腳踏車 因為開車你要幫它加油 騎腳踏車只要幫自己加油就好" },
      { type: "link", content: "https://photos.app.goo.gl/UjcfVeLsSqnrc54Y8", label: "2016年10月7日 \
        朋友家人都瞭解妳的個性 但只有我夠白目 總是在知道事情以後對妳耳提面命 要妳保護自己 要妳多想想 要妳會看人 換來的是我不包容妳不懂妳 \
        我是很多嘴 妳以為我不理解妳 但妳難道就理解外面的人的想法嗎 有些經驗發生在自己身上就已經太遲了 我已經盡力了 \
        每天為妳提心吊膽而不被領情 真的好累好無力 什麼都做了卻挽回不了 我幫不了妳什麼 這樣下去真的只是彼此的困擾 \
        也罷 這樣的結果我也有責任 是我不夠好 最後給了尊重跟包容 也只能祝福妳 謝謝妳教會了我許多事情 收拾完了 一切都重頭開始吧 無力 放棄 theend" }
    ],
    "8": [
      { type: "link", content: "https://photos.app.goo.gl/wDozrcb44moz7rpt6", label: "2025年10月8日 方便歸方便 但畫質跟景深實在有點無法接受 nikon 24200略勝一點" },
      { type: "link", content: "https://photos.app.goo.gl/ituapKG9NhMPNxYD9", label: "2025年10月8日 全台灣應該剩沒幾家有全家積木可以預購了 今天才想到 直接成功預購兩組 超便宜 一個手機號碼只能買一組" },
      { type: "link", content: "https://photos.app.goo.gl/aJGKDfD81us8kXRCA", label: "2025年10月8日 這個好猛" },
      { type: "link", content: "https://photos.app.goo.gl/ncBiAeG9zjKBvkek6", label: "2025年10月8日 你們超讚" },
      { type: "link", content: "https://photos.app.goo.gl/4yFq5gfECHyocAU46", label: "2023年10月8日 一艘郵輪位於下龍灣 結果幾乎都台灣人" },
      { type: "link", content: "https://photos.app.goo.gl/3BufWyi9THYRxMza9", label: "2023年10月8日 發生了一連串不幸的事 是不是應該拜拜了" },
      { type: "link", content: "https://photos.app.goo.gl/5LKfrLFXxVNHPiYr5", label: "2023年10月8日 \
        認真好奇 下龍灣沿途的海產超多家 但都沒有台灣海線餐廳那種腥臭味 真的一點都沒有 明明一樣都擺水族箱在外面 但為什麼他們可以完全沒海鮮臭味" },
      { type: "link", content: "https://photos.app.goo.gl/kb87HL5AUJZyuUZS7", label: "2023年10月8日 我今天已經搞懂越南交通守則了 只要四周五公尺內有任何物體 就是按喇叭 其他規則就沒有了" },
      { type: "link", content: "https://photos.app.goo.gl/yRjxJdBEFmwxCmk26", label: "2023年10月8日 下龍灣古色古香的咖啡廳 只有一個缺點沒冷氣 但河內比台灣涼爽好多 重發 因為剛剛影片動態跑不出來哈哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/dM6JRhL9mivUrkMp6", label: "2022年10月8日 在捷運站與同學的大作相遇" },
      { type: "link", content: "https://photos.app.goo.gl/ehoc2sHx9UTUGGDx7", label: "2021年10月8日 昨天0730上班開始 到現在1800 已經34小時都在這家醫院沒有離開 一直工作做事但一切還沒有結束" },
      { type: "link", content: "https://photos.app.goo.gl/3kTgipLxZEdyjp3G8", label: "2020年10月8日 \
        無管的協調跟衛教 所有醫師都比你清楚 做的比你好 如果真的有心 不是做這些醫護人員早就在做的事 而是做個為醫護說話跟撐腰的委員 \
        好朋友公開說你是為了錢才幫病人放鼻胃管 這是哪門子好朋友 " },
      { type: "link", content: "https://photos.app.goo.gl/Vt5TWzkp8PL19Vu5A", label: "2020年10月8日 你太不食人間煙火 你嘴巴說的容易 建議來醫院當看護試試" }
    ],
    "9": [
      { type: "link", content: "https://photos.app.goo.gl/6FvVFeCUp2DEiHyt8", label: "2025年10月9日 \
        臨床記錄 縱隔腔變寬 中年男性主訴突發胸痛及幾乎昏厥的感覺來診 EKG看到inferior leads有Jpoint上升 血壓偏低 疑似STEMI啟動緊急導管 \
        但在診斷左側冠狀動脈時找不到left main coronary artery的開口 卻發現double lumen sign 當下的胸前超音波 發現moderate AR及擴大的aorta \
        轉而急做Chest CTA確認type A aortic dissection 這樣的案例雖然少見 但總是第一線醫護人員的惡夢 後續也可以看到CXR與過去相比 \
        有明顯的縱隔腔擴大及aortic knob變大上移遮住了原本左側subclavian下方的空間 都暗示著dissection的可能 \
        過去常背誦縱隔腔變寬的鑑別診斷 但卻很少遇到如此典型的案例 有點分享價值" },
      { type: "link", content: "https://photos.app.goo.gl/SYDSKeeZc2Rob1hb9", label: "2025年10月9日 他有依照正確的方式量血壓欸 真可愛" },
      { type: "link", content: "https://photos.app.goo.gl/ChMUvMp3HiE12LUr5", label: "2025年10月9日 看個人 我就會有這個需求" },
      { type: "link", content: "https://photos.app.goo.gl/UQXNvDj72XQKi2vo9", label: "2025年10月9日 這就是黃仁勳要的世界嗎" },
      { type: "link", content: "https://photos.app.goo.gl/neA9HZZjYxkSJmQo8", label: "2024年10月9日 當兵會要你命是不是 戰爭來你躲好就好 反正要死死別人" },
      { type: "link", content: "https://photos.app.goo.gl/U9CK4df1HqM1ykAj7", label: "2024年10月9日 大推 實力派畫家兼牙醫" },
      { type: "link", content: "https://photos.app.goo.gl/1xbfTQLLTH6KnUGa6", label: "2024年10月9日 他想告訴大家自己爸媽很有錢" },
      { type: "link", content: "https://photos.app.goo.gl/89Q3vWG9bnvyMBNPA", label: "2023年10月9日 \
        明天是國慶日 我沒有拍過帥氣的戰機 但曾經服役於海軍一級艦 還記得那天我比早點名的各位早起 就為了拍當時待的船艦 937淮陽軍艦 感謝海軍艦隊分享 \
        這段船上時光很辛苦 真的很辛苦 國慶日更要記得這些為國付出的軍人 真正的愛台灣是要付出行動跟犧牲的" },
      { type: "link", content: "https://photos.app.goo.gl/jVysNFsuHZpBYwzz8", label: "2023年10月9日 在部隊當醫官的兩年 拍到最喜歡的照片" },
      { type: "link", content: "https://photos.app.goo.gl/TBu4KR17Gcjj7mSu6", label: "2023年10月9日 \
        這次我們來越南找有名的 DCARD+FB社團都推薦的 當地旅社代訂 價格比較貴 雖然安排都有到位 但回覆都很慢 而且有時算錢都會多算 \
        今天也遇到另一組台灣旅客 則是直接跟越南郵輪飯店等做聯繫 價格便宜 訊息也很快 之後來寫心得 推薦給之後想來越南拍照的朋友 \
        這裡他們把我們取消行程後 可以扣款的金額算41美金 但其實可扣56美金 差了15美金" },
      { type: "link", content: "https://photos.app.goo.gl/vo9aRfKG8Qw86hKP7", label: "2023年10月9日 \
        大家都推這家的三明治 但我最愛他們無糖的椰子咖啡 椰子的清香跟咖啡完美融合 毫無違和感 也沒有台灣各種口味拿鐵混在一起的感覺 \
        具體一點就是口感跟星巴克一樣順口 而且椰香跟咖啡完美結合 " },
      { type: "link", content: "https://photos.app.goo.gl/PezUmPNzWSnnojs86", label: "2023年10月9日 臨時取消拍夜景去市區逛逛 再臨時取消坐車改成用走的 然後可以迎面在河內遇到帥" },
      { type: "link", content: "https://photos.app.goo.gl/bhQzViUTtnkFRe1b6", label: "2023年10月9日 \
        這次帶大三元出門 街拍心得是2470才是最好用的 另外就是日落前以70200為主 接近日落後以2470為主 \
        因為70200真的更吃光線明亮 有充足光線下使用細節會更美 也更好找構圖 \
        1424則是沒差 比較看畫面性質 通常數大便是美 例如充滿一堆玩家中間坐個賣家之類 比較適合 出勤機會較少" },
      { type: "link", content: "https://photos.app.goo.gl/Rz7VKeUh7eeSftUs8", label: "2023年10月9日 河內第一餐 先從最道地的河粉開始 超級嫩超級香 不像台灣加一堆奇奇怪怪的調味" },
      { type: "link", content: "https://photos.app.goo.gl/vpSRUVDhuniPGodr5", label: "2023年10月9日 點一杯白咖啡少冰 結果長的一副被偷喝一半的樣子" },
      { type: "link", content: "https://photos.app.goo.gl/gifiNt9sEJZosS95A", label: "2023年10月9日 \
        基本上郵輪會停在HA LONG BAY這裡 郵輪行駛中不要飛空拍 我途中升空後直接飛不回來 迫降在一公里多以外的船上 幸好有撿回來 \
        整個下龍灣都有限飛高度 也就是必須趁行程有去到驚訝洞跟英雄島的時候飛 才能拍到全部都是山的景象 \
        第一天日落跟第二天日出能見度超好 但空拍機獎小裂痕我不敢飛太遠 沒拍到想要的畫面 唉又有遺憾 \
        我真的不知道這些細節的經驗要從哪做準備 拍風景總是必然親自抵達地點 經歷跟普通旅遊不一樣的困難跟障礙 才會知道 \
        也就是一個點至少來兩次以上才可能拍得好 然後假又很少 基本上第一次失敗後不知何年有第二次機會 在追求風景攝影的過程固然快樂 但卻面對許多限制跟障礙" },
      { type: "link", content: "https://photos.app.goo.gl/8mRZc2x8ZQnquupN8", label: "2023年10月9日 下龍灣超美 但我功課沒辦法做足 差點又失去空拍機 還沒拍到理想中的畫面" },
      { type: "link", content: "https://photos.app.goo.gl/tKM25z2F8zTtPFNQ9", label: "2023年10月9日 峇里島風格" },
      { type: "link", content: "https://photos.app.goo.gl/DCX2kKhMZghzTN6s9", label: "2021年10月9日 有需要也可以私訊我唷 上一批賣完了感謝大家" },
      { type: "link", content: "https://photos.app.goo.gl/3KJgDv4zsYPuMuun9", label: "2019年10月9日 來台南避冬 感冒到快瘋了 一整天吸不到空氣" },
      { type: "link", content: "https://photos.app.goo.gl/RYxYkTpf7nQKiBPJA", label: "2018年10月9日 \
        第一次在大崙山拍照 但有沒有出景並沒關係 重要的是再美的事物 都要有對的人分享 因此我會說 我們是去看夕陽的 而不是去拍照的 \
        最近沈澱了很久都沒有發文 心境不斷在艱苦的環境漂泊跟茁壯 雖然發文頻率降低 但爾後希望給粉絲更高層次的作品與文字 謝謝大家一直以來的支持" },
      { type: "link", content: "https://photos.app.goo.gl/pENdRGHHJJxGbAiU9", label: "2018年10月9日 這個月15天在海上呢 究竟面對這樣的壓力我還能撐到什麼時候 謝謝女友 妳勝過一切" }
    ],
    "10": [
      { type: "link", content: "https://photos.app.goo.gl/8iUDWeAFTqqddEqc9", label: "2025年10月10日 \
        再來一張 整個沙灘人滿為患 漂亮的木造尖塔跟小屋都沒了 除了吵還有髒 撇除今天的天空 這裏一無是處 \
        過去這裡的漂亮跟空曠只能留在腦海 政府越發展越倒退 這就是我最討厭景點被政府開發跟宣傳的原因" },
      { type: "link", content: "https://photos.app.goo.gl/7CM5aa2fAK7GewQi9", label: "2025年10月10日 幹他真的拿球棒哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/9aPEPBX5ksVtotqe9", label: "2025年10月10日 \
        Gohome食研室早午餐義大利麵 台中 美食 早午餐 又帶我去吃美食啦 常常在假日爆滿預定的人潮 想睡到自然醒又都找不到有座位的早午餐 \
        食研室就是很好的選擇 我個人最喜歡酥炸魚堡 酥炸牡蠣 超不健康 但攝取非常多的快樂 \
        如果想吃健康一點除了早午餐 還有蛤蜊義大利麵 出餐速度快又好吃 也很推薦 " },
      { type: "link", content: "https://photos.app.goo.gl/3eqZWP4ZUqJ9bLEo6", label: "2025年10月10日 光影就是氛圍的原料~" },
      { type: "link", content: "https://photos.app.goo.gl/gBx5o65wBukPXLa89", label: "2025年10月10日 炒作伙爆香鹹酥雞 願稱這家是台南前三名好吃的鹹酥雞 太好吃了" },
      { type: "link", content: "https://photos.app.goo.gl/n5YoaoH47Q2fGnYe7", label: "2025年10月10日 恭喜恭喜" },
      { type: "link", content: "https://photos.app.goo.gl/ThedfDmsuAmwmJBZ7", label: "2025年10月10日 馬洛能開戰但不能保人 牛能開戰也能保人 被風箏時牛能移動的機會比較多 被控制時牛能走掉的機會比較多" },
      { type: "link", content: "https://photos.app.goo.gl/kMKU15njEt4RRBnT7", label: "2025年10月10日 他這個還有加上後製 第一張構圖蠻厲害的" },
      { type: "link", content: "https://photos.app.goo.gl/zcFcdsws9cbuTPJk8", label: "2025年10月10日 我根本沒這樣" },
      { type: "link", content: "https://photos.app.goo.gl/M1o9ZTfXTwizcZPJ7", label: "2025年10月10日 又又美FotoShop" },
      { type: "link", content: "https://photos.app.goo.gl/3RCC5YpLeSyvGuCJ7", label: "2025年10月10日 變電箱貓貓戰士居然有海綿" },
      { type: "link", content: "https://photos.app.goo.gl/XUXccN3otuQmwMUA8", label: "2025年10月10日 阿財牛肉湯" },
      { type: "link", content: "https://photos.app.goo.gl/UvKUajT5nLLtoPnC7", label: "2024年10月10日 \
        把影片修好 音樂斷點好不容易對到煙火綻放 結果後半段音樂直接不見 影片好難哦放棄了 \
        2024台灣國慶煙火全紀錄 今年的國慶日紀錄101煙火 很開心在這麼厲害的視角拍攝 小可惜煙火的長度真不滿足 \
        如果可以再長一點會更好 中華民國生日快樂 希望國運昌隆 股市大漲 讓我們平民的生活能更安康" },
      { type: "link", content: "https://photos.app.goo.gl/1NVAXRp9AnYZ85jC7", label: "2024年10月10日 雙十國慶愉快 祝中華民國生日快樂 之前解鎖了85大樓最佳視角 今天解鎖了全台北裡101最佳視角" },
      { type: "link", content: "https://photos.app.goo.gl/fjYJjw5zoZ3heYHK7", label: "2024年10月10日 \
        上TABLE時老師跟技術員對話突然冒出手風琴效應 因此稍微查閱一下文獻 \
        Accordion Phenomenon 手風琴效應 Pseudo lesion 內文及圖片摘至Circulation 一位61歲女性做過CABG LIMA連結LAD \
        因再次胸悶痛發現LAD及LIMA連接處堵塞故入院放支架 放完第一支支架後發現proximal LIMA dissection \
        因此醫療團隊放第二支支架撐起dissection處血管 但因為第二支支架拉直了LIMA 導致新的堵塞pseudo lesion出現 即所謂的手風琴效應 \
        根據文章的意思 手風琴效應是當曲折的冠狀動脈被拉直時 因距離相對縮短 原先部分的血管被擠壓變形導致新的stenosis出現 \
        文章中患者在使用NTG後仍無改善 後續移除第二支支架才得到緩解 出現手風琴效應也可能導致complication包含 dissection spasm or thrombus產生 \
        也有文章提到 當血管出現手風琴效應時 使用FFR評估是否為需處理的病灶時會容易低估FFR數值 \
        只能說心臟科真是時刻都充滿危機 任何一點procedure都需面對突然出現的非預期結果 且都可能是致命的 真是辛苦而困難的科別 respect" },
      { type: "link", content: "https://photos.app.goo.gl/DkMESmSndiprF3se6", label: "2024年10月10日 看過很多ECMO患者 常常想如此痛苦的過程究竟是什麼感覺 原來run上ECMO上半身會覺得冷 以後不能忽視患者的感受了" },
      { type: "link", content: "https://photos.app.goo.gl/LtQxbvpg9rHtnC3j7", label: "2024年10月10日 \
        護理師的話來三總 三總護理師待遇超好 三總也是唯一不把醫師當一回事 但特別關愛護理師的醫院 因為醫師幾乎軍費 跟免洗筷一樣操到死都沒差 \
        所以醫院不會管軍費醫師死活 但護理師是民人醫院不敢惹 而且護理師薪水算一算 甚至比某些醫院住院醫師更多錢 院長最有名的一句話就是 \
        醫院可以少一個醫師 但不能沒有護理師 最大的缺點是出國要上公文 這個超白癡" },
      { type: "link", content: "https://photos.app.goo.gl/DxRZzaK6VXqU5EYG6", label: "2024年10月10日 寄生猴" },
      { type: "link", content: "https://photos.app.goo.gl/Rror9YaYa3pLPzVD9", label: "2024年10月10日 看完故事只能說29歲被on ECMO 還能心態健全的紀錄這一切超級不簡單 這真的超級嚴重" },
      { type: "link", content: "https://photos.app.goo.gl/UjiaCE9RAEjGJThU9", label: "2024年10月10日 哈哈哈出門買了一袋貓回來" },
      { type: "link", content: "https://photos.app.goo.gl/WYCo3WYa5atAmfPx6", label: "2023年10月10日 空拍機摔壞了怎麼辦 一樣可以飛高高拍照唷" },
      { type: "link", content: "https://photos.app.goo.gl/RRNZG1ZXXfo4DEFF7", label: "2023年10月10日 笑死 還有小小兵慶祝生日 唱越南生日快樂" },
      { type: "link", content: "https://photos.app.goo.gl/MnxZ4nVfZQ3Sth7t5", label: "2023年10月10日 傻眼 各種生蠔生魚片 螃蟹等等的吃到飽每個人518元 補貨速度超快 唯一缺點是飲料都要加價 其他跟饗食天堂沒差別" },
      { type: "link", content: "https://photos.app.goo.gl/N6RRfv3dqE1CTq9E9", label: "2023年10月10日 解鎖司機新技能 邊開車邊看足球 邊回訊息已經弱了" },
      { type: "link", content: "https://photos.app.goo.gl/PRnVBpxKYm9orCaC8", label: "2023年10月10日 \
        偷偷跟大家分享 這是製作線香的最後步驟 重點只要擺出來曬乾而已 圖中阿嬤們用手摸來摸去 其實是毫無意義的假掰動作 實際上不會這麼做 \
        但拍影片跟照片就超美 實際體驗 真的好好笑" },
      { type: "link", content: "https://photos.app.goo.gl/FuNGVAijzof7J6ak8", label: "2023年10月10日 真的很厲害 不知從哪找到這個專業攝影領隊 安排超讚但很累的行程" },
      { type: "link", content: "https://photos.app.goo.gl/7GoLAdpg53jedsBX9", label: "2023年10月10日 \
        這個北北超可愛 原本想問他是不是剛遇到DK來拍 但嚮導說他會忘記來的名字 我們提早到賺到15分鐘可以盡情拍 後來韓國攝影團來了 \
        各種動現場東西 指導阿嬤 我自己拍攝時都以不動任何當地擺設為前提啊 結束後這個北北跟我們要了台灣的硬幣做紀念 實在太少台灣人來拍了" },
      { type: "link", content: "https://photos.app.goo.gl/MGHpQ9466vPubbzk6", label: "2023年10月10日 親眼看到好感動 只剩他們在做 這個東西怎麼那麼可愛那麼好看" },
      { type: "link", content: "https://photos.app.goo.gl/hzDNkHfxSNcjNU4YA", label: "2023年10月10日 BIG THANKS TO CAPTURE THE BEAUTIFUL CULTURE" },
      { type: "link", content: "https://photos.app.goo.gl/YZUiAnbVg24PmesM6", label: "2023年10月10日 加油 再撐一次啊 回台灣就幫你修理" },
      { type: "link", content: "https://photos.app.goo.gl/VzhyNtVPPE9yYi9f6", label: "2023年10月10日 應該是DK的拍點 但好像還不夠壯闊" },
      { type: "link", content: "https://photos.app.goo.gl/JPrXU6LYGrNYPYVDA", label: "2023年10月10日 拍著照片誤打誤撞進去當地小醫院 即使在越南鄉下牙醫生意也很好" },
      { type: "link", content: "https://photos.app.goo.gl/7EMEEa3u3mo23ffNA", label: "2021年10月10日 \
        幫高市拍煙火 明年一定要跟一起看煙火 不會再來拍第二次了 30分鐘有25分鐘都是煙 還要忍受交通大亂 \
        高雄85大樓 這趟短途旅程一波三折 非常非常之感謝在高雄幫忙的每位朋友ORZ 煙火照晚點處理" },
      { type: "link", content: "https://photos.app.goo.gl/dDvz8Btsn9NKEEBg6", label: "2021年10月10日 是陳其邁本人的賴欸" },
      { type: "link", content: "https://photos.app.goo.gl/sUmaNX4TyuHHpHLm8", label: "2021年10月10日 \
        跟兩位成為心臟內科主治醫師的學長吃飯 我這菜鳥仔是何其幸運啊 很巧的兩位都是建中畢業 只差一屆直接認親了 希望長大以後可以至少有他們兩位一半程度了" },
      { type: "link", content: "https://photos.app.goo.gl/h34LiAbPUkYmWBGS8", label: "2020年10月10日 值班有大任學長跟王者子賢作伴 穩了" },
      { type: "link", content: "https://photos.app.goo.gl/X2riSasKYQE9hYaT6", label: "2020年10月10日 特地買飲料給沈溺內科苦海的我們 果然胸襟跟智商都是頂尖的男人 港動啊" },
      { type: "link", content: "https://photos.app.goo.gl/9Ua1uzHvAxip5o1v6", label: "2020年10月10日 我們的每塊血汗錢 為何要浪費在抽煙的人身上 沒抽煙的人都活該嗎" },
      { type: "link", content: "https://photos.app.goo.gl/6V6PVRbHgQMt8dmBA", label: "2020年10月10日 \
        這種病人真的很可惡 如果法律明定主治醫師可以挑病人 以後當V絕對把他撞出醫院 明明是長年糖尿病患者 不好好就醫追蹤 反而花一堆錢在不明來路的保養食品 \
        最後搞到高血糖併發症一堆才來醫院 怎麼不去求神拜佛喝符水就好 還是最後治不好再來怪西醫都是毒藥 健保真的寵壞某些不知好歹的病人" },
      { type: "link", content: "https://photos.app.goo.gl/EYLRAXfJh1tg81rQ7", label: "2018年10月10日 他睡醒應該會打我" },
      { type: "link", content: "https://photos.app.goo.gl/B5CpRkNYaCUK9V9w8", label: "2018年10月10日 失聯男子終於出現了" },
      { type: "link", content: "https://photos.app.goo.gl/tqSne97kjCmMuj147", label: "2018年10月10日 \
        整體而言比前一張稍微進步了 這是排名第二容易出現的缺點 不合理過曝 曝光斷階 \
        畫面過曝是可以的 凸顯光線的強烈 不可以的地方在從很亮的曝光直接跳到旁邊藍色正常的曝光 中間亮處則死白一片 很不自然而且視覺很衝突 \
        解決辦法當然是多拍幾張 最暗的拍到稍微看得到太陽輪廓即可 然後多張疊圖 \
        以上三個缺點 當然我自己的照片也可能存在一點點缺失 因為我整張後製完沒有保留步驟就轉檔 結果就懶得去改 \
        總之用意在於 在拍攝與後製過程好好注意這三個點 照片質感能提升很多喔" },
      { type: "link", content: "https://photos.app.goo.gl/SYzrSnx9Y9zUYWjw5", label: "2018年10月10日 \
        看到山跟天空之間有超明顯白邊 我敢保證這絕對是很多人後製的最大缺點 可以說第一名的敗筆 造成原因在於曝光反差過大 \
        然後直接用兩層圖層加筆刷處理的人 所以我看到這種圖直接就知道你用筆刷工具 或者用劣質的HDR軟體合成然後不處理 \
        因為用筆刷的關係的 山的邊緣會黑黑的 吃到天空的暗曝光 就跟象山很多人拍完出現黑黑一根101 是疊圖粗糙造成 \
        提供我最老舊的解決方式 拍攝時針對反差大多拍三到四張不同曝光 然後由暗到亮慢慢刷慢慢疊圖 注意是暗到亮去刷 反過來刷會更容易留下後製痕跡 \
        前景曝光較低的樹叢質感非常粗糙 很像過度銳利 這是因為新手後製時會把暗部通通拉亮 而且加強銳利對比 \
        但這是錯誤的 整張亮的亂七八糟的風景照不只質感盡失 且淪為一般網美機照片而已 \
        好的風景作品 要細心觀察光線變化 或自己創作光線變化 白話就是說 該暗的暗因為他不是重點 該亮的亮因為他是你想呈現的主角 \
        記得保留一點點細節即可 千萬別過度使用對比跟銳利 過去我所謂的氛圍其實就是光線變化" },
      { type: "link", content: "https://photos.app.goo.gl/nLb1wSMTcLKhkhjQ9", label: "2018年10月10日 \
        後面兩張是五年前我拍的風景照 就自己拿自己照片出來鞭 做個簡單檢討教學 \
        舉例的缺點都是很廣泛 常在很多風景攝影作品出現 我也會順便說明造成缺點的原因 看完我的分享 可以拿來檢視很多照片 看是不是有這個問題 後製分享" },
      { type: "link", content: "https://photos.app.goo.gl/AJiCsFtQNj3m2sZB9", label: "2017年10月10日 \
        真的好不甘心 常常滑到很多神級作品 像是日出日落銀河 像是光影藝術 像是街拍 像是toproof衝擊性的畫面 \
        別人拍的出來 憑什麼我做不到 真的不甘心 我會用力提升自己 每種主題都要兼具 達到最高水準 \
        沒有我拍不出來的作品 只有想不想要用心 有沒有機會交流學習而已" },
      { type: "link", content: "https://photos.app.goo.gl/QwRjG3xJRLwvZ8iL7", label: "2017年10月10日 真心真心建議n3程度以上再來日本實習 我只學基礎看得好痛苦 英文是無法順利溝通的" },
      { type: "link", content: "https://photos.app.goo.gl/br7BeHnt5A47iLAEA", label: "2017年10月10日 新宿の記憶" },
      { type: "link", content: "https://photos.app.goo.gl/8p7uiVH6LuDRYZCy7", label: "2017年10月10日 Night&Light&me 燒肉與酒的撫慰 新宿" }
    ],
    "11": [
      { type: "link", content: "https://photos.app.goo.gl/XJFGHQhnq1aWnF7f6", label: "2025年10月11日 \
        論攤位的話 高雄愛河旁邊的攤位做的100分 人潮剛好 熱鬧又不擁擠 也沒有亂七八糟吵鬧的唱歌 每個攤位又都很有特色 重要的是還很乾淨 真的很讚" },
      { type: "link", content: "https://photos.app.goo.gl/uLXpPqcVMExzWkJD6", label: "2025年10月11日 什麼是好吃 就是一粒醋飯的米粒碎片都不能留下 他們做出一口下去多層次的口感 實在太讚了" },
      { type: "link", content: "https://photos.app.goo.gl/5yPWoE6uv1LvyPmdA", label: "2025年10月11日 超級好吃的丼飯 可以來分享了" },
      { type: "link", content: "https://photos.app.goo.gl/kcExt3x8uU3yn7mE6", label: "2025年10月11日 一起看夕陽" },
      { type: "link", content: "https://photos.app.goo.gl/UoALaB7Scwq3rGdu5", label: "2025年10月11日 桐封堂" },
      { type: "link", content: "https://photos.app.goo.gl/UkcTHZzZ3aZqdrFX8", label: "2025年10月11日 碗容奶奶家高雄店" },
      { type: "link", content: "https://photos.app.goo.gl/aTeuuwM5dnLJXz7PA", label: "2025年10月11日 平常都沒睡覺的 睡兩小時算很久了" },
      { type: "link", content: "https://photos.app.goo.gl/MbYmThEiqPJ26b7eA", label: "2025年10月11日 假日飛手練習" },
      { type: "link", content: "https://photos.app.goo.gl/kqngxiReA2eW1aPL8", label: "2025年10月11日 今日戰利品 真的不能再買了" },
      { type: "link", content: "https://photos.app.goo.gl/n77motpCQP1gqFYX7", label: "2025年10月11日 幸好我們沒去看哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/hSRL6WeR9EgZ761j7", label: "2025年10月11日 鹿耳門煙火是台灣第一的煙火當之無愧啊" },
      { type: "link", content: "https://photos.app.goo.gl/mPAXrz9qvW4XUfW66", label: "2025年10月11日 他完全不管 就是一直吃" },
      { type: "link", content: "https://photos.app.goo.gl/qeiAQUys8vkrzukRA", label: "2025年10月11日 晚上的鹹酥雞怎麼那麼好吃" },
      { type: "link", content: "https://photos.app.goo.gl/rPyx7Xn6ZE1kBra79", label: "2024年10月11日 \
        這裡是我拍過最美的101夜景 多希望每個日夜都能上來拍攝101晨昏 我絕對能讓世界看見最美的台北 最後感謝101官方協助申請 \
        2024台灣國慶煙火 2021年承接高雄85大樓煙火攝影 2024年承接台北101煙火攝影 算是解鎖了自己心中的成就 很開心101官方願意給我機會嘗試 \
        拍攝完還要去辦公室裡現場快修真的壓力很大 也很謝謝陪伴 陪我在30樓外吃麵包跟等煙火 晚了一天但祝中華民國生日快樂 我們是台灣 是一個與中華人民共和國不同的獨立國家" },
      { type: "link", content: "https://photos.app.goo.gl/48BXc9YRnS91FMpr5", label: "2024年10月11日 60歲女性過去有心律不整病史做過電燒及冷凍消融 後改善並規則服藥 這次自覺心跳快三天左右來診 這是什麼rhythm" },
      { type: "link", content: "https://photos.app.goo.gl/KC6FtEYaa8PyiEzt5", label: "2024年10月11日 死蘇不是迷信 而是一種信念" },
      { type: "link", content: "https://photos.app.goo.gl/iX7k5ZtUgK8JEU338", label: "2024年10月11日 所以我才說不准請教練" },
      { type: "link", content: "https://photos.app.goo.gl/V5DqudjK5Q7HfAio9", label: "2024年10月11日 因為有用不完又便宜的住院醫師可以當助手" },
      { type: "link", content: "https://photos.app.goo.gl/XR7askEDG4LNngxf9", label: "2024年10月11日 三年前在高雄 今年在台北拍101 可惡有休假的話肯定上去台北一起拍" },
      { type: "link", content: "https://photos.app.goo.gl/sNyRD6wYwsz4zJCj6", label: "2024年10月11日 LCX好像有問題 坐等答案學習" },
      { type: "link", content: "https://photos.app.goo.gl/BpPg2cqgvv8pRvuR8", label: "2024年10月11日 很開心今年擔任101煙火攝影師 完全感受到拍完馬上出圖的壓力" },
      { type: "link", content: "https://photos.app.goo.gl/5eaEBdtZoTf1Ah7o8", label: "2023年10月11日 接下來會用三篇貼文 分享越南攝影旅程的心得 準備篇 旅行篇 攝影篇 準備篇已發文囉 給大家參考出國前的準備事宜" },
      { type: "link", content: "https://photos.app.goo.gl/deawswJjsMge16pJ9", label: "2023年10月11日 Vietnam Culture 準備篇 \
        機票 來回都選華航 傳統航空還是比較習慣 兩人來回約33000 簽證 台灣只有電子簽證 沒落地簽證 上官網填寫資料並付費 通常35天內完成 重點是務必列印出來帶著 \
        黑白即可 如果上面資料有誤在台灣機場就會被擋 我們這次姓名填反 機場櫃檯詢問越南說不影響才讓我們上飛機 實際上抵達內排機場海關根本沒看 \
        換匯 多數人都帶台幣去換 匯率抓1:750以上即可 到河內機場可先換一點 我們是帶美金 抓1:23000以上即可 我們因為訂的飯店都不差 匯率也不錯就都在飯店換 \
        記得別去會被收手續費的地方 插座 這次特地買了萬國插座 結果普通插座都可以用 不需特地轉接 如果攝影人要一次充一堆器材 反而帶延長線比較有用 \
        語言 英文部分可通 大推google翻譯app 快很多 網路 今年出國三次都用中華電信57天20G 588元的漫遊方案 不用更換sim卡 客服找得到 又是台灣官方 也比較放心 \
        整體來說信號穩定 而且關機再開機就能用 只是跟esim比偏貴 esim聽說吃到飽 下次會考慮 \
        交通 除了旅社或飯店安排的司機 只推薦Grab app 下載之後我們都付現金 如果自己叫車同一趟會被多收35萬越南盾不等 沒叫過機車接送 \
        租機車 原本打算要租後來放棄了 但實際上體驗過河內交通 如果要積極跑點 租機車是不錯選擇 交通雖然很亂但只要是台灣訓練出來有經驗就沒啥問題 \
        也可亂停機車 另外叫grab也可能突然被取消訂單 自己租車比較即時 \
        旅社 這次下龍灣郵輪請Lily travel安排 Dcard上很多推薦 他們在Fb自助社團也廣告打很兇 整體來說該安排的都有做到 沒有放鳥或行程不符 \
        但回覆訊息的速度其慢 最久等了一個禮拜 而且算錢會多算一點 例如改行程退費會少算 收錢匯率會多算等 很不放心自己安排行程的話就推薦 其實當地代辦選擇也不多" },
      { type: "link", content: "https://photos.app.goo.gl/pURaYjq6QsKxQ7JL7", label: "2023年10月11日 唉旅途結束了 一樣留有不少遺憾 下龍灣的空拍沒拍好 河內的火車街沒拍到 希望每年能出國35次啊" },
      { type: "link", content: "https://photos.app.goo.gl/YQY8pbzFhXYEpurB8", label: "2022年10月11日 沒出過社會才會相信這張表" },
      { type: "link", content: "https://photos.app.goo.gl/TiZTT9HkfymCfjaf9", label: "2021年10月11日 \
        台灣110年國慶煙火 台灣生日快樂 今年參加高雄市政府的拍攝工作 順利上到台灣沒幾個人去過的85大樓頂樓拍攝 百萬高雄夜景震撼視野 \
        這次遇到好幾個瓶頸 甚至攝影快十年第一次遇到對焦無解及無反當機的問題 當下微手忙腳亂 但好險都有解決 之後會研究一下成因 \
        我的理想畫面是百萬夜景與煙火同匡讓大家欣賞 知道原來高雄市長這樣 但在亮度的處理 很容易影響煙火的曝光度 造成煙火不明顯 \
        希望台灣及外國 都能看到這個少見的非空拍視角 另外煙火的移植 也要考量水面的倒影 才符合現實狀況 \
        也很感謝普哥 支援強大火力跟接送 還有幫粗心的我借腳架 真的辛苦了 很感謝出外拍攝 幫忙的每位朋友 \
        最後 希望以後的每場煙火都能一起觀看 這才是比拍照更幸福的事情 此為藍調後製版本 現場其實吃煙滿嚴重的 高雄一百 高雄市政府新聞局" },
      { type: "link", content: "https://photos.app.goo.gl/NdumCX66FdXfY27n9", label: "2020年10月11日 雨天運動好夥伴" },
      { type: "link", content: "https://photos.app.goo.gl/V74mK5VKeHxXsB5L7", label: "2020年10月11日 不管男女都一樣 不是只有女生" },
      { type: "link", content: "https://photos.app.goo.gl/smzQVLofAPJHZ2oSA", label: "2020年10月11日 好日本好喜歡 合點壽司" },
      { type: "link", content: "https://photos.app.goo.gl/ngKDhkSqSVpQzFvw5", label: "2018年10月11日 小火龍使用頭槌攻擊 火龍 換角度攻擊 對不起啦" },
      { type: "link", content: "https://photos.app.goo.gl/iK6MUZzLZThNVRab6", label: "2018年10月11日 比什麼節日都值得慶祝的是 能放假一起度過的每一天" }
    ],
    "12": [
      { type: "link", content: "https://photos.app.goo.gl/eGbFw4eBKdEfPMMW7", label: "2025年10月12日 補班就是落後的國家在做的事情 這世界根本不需要人類上那麼多班 如果有 就只是證明有人想壓榨更多人而已" },
      { type: "link", content: "https://photos.app.goo.gl/QK3L68eA5dnff3Q29", label: "2025年10月12日 如果把balloon打破瞬間產生震波 算不算一種窮人破產版的IVL 誤" },
      { type: "link", content: "https://photos.app.goo.gl/VK5ikozLQnwgMMT89", label: "2025年10月12日 命 健康 本來就是要用錢才能買到 有錢還不一定能買到 但台灣人被政府慣壞 以為不用錢就能買到 可悲啊" },
      { type: "link", content: "https://photos.app.goo.gl/61KoXA2vFgVdWhMj7", label: "2025年10月12日 又一位空拍大師出現了" },
      { type: "link", content: "https://photos.app.goo.gl/DmoUb3Cfh1paXC8k9", label: "2025年10月12日 謝謝" },
      { type: "link", content: "https://photos.app.goo.gl/GMW5pprRTK4TKFDi9", label: "2025年10月12日 我怎麼那麼會拍" },
      { type: "link", content: "https://photos.app.goo.gl/BeJekGtRn1tiu3Yq9", label: "2024年10月12日 貓貓在獵物了哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/ghCBn4Rp9GgDUnZC8", label: "2024年10月12日 希望她這種嫌醫療費貴的 滾離醫院越遠越好 沒有醫護人員缺她這個錢" },
      { type: "link", content: "https://photos.app.goo.gl/JFNkjcRPx7nS6pdY6", label: "2024年10月12日 沒付錢叫什麼叫啊" },
      { type: "link", content: "https://photos.app.goo.gl/J2iZcNKibLpHTSPu5", label: "2024年10月12日 這張照片不可以一直存" },
      { type: "link", content: "https://photos.app.goo.gl/rVEEPHD1vNkh7WY4A", label: "2024年10月12日 \
        2024台北101國慶煙火 很開心今年可以跟101企傳部合作拍攝煙火 也感謝VACS攝視度的協調 這個煙火點位也是我心中台北101視角第一名的位置 \
        如果有機會還是很希望再來拍攝這裡的101晨昏 不過很可惜今年煙火有點小巧 希望明年的煙火秀可以更壯麗 nikonz62 nikonz1424 台灣生日快樂" },
      { type: "link", content: "https://photos.app.goo.gl/uLbAbyU2aSTBKxnx6", label: "2024年10月12日 \
        為什麼不去廟裡拜拜就好 我從小都在廟裡拜拜 不用錢 心誠則病除 屢試不爽 健保卡也被我銷毀了 我跟你說 千萬別去醫院看病 \
        因為醫院都是要賺你的錢 如果你病越重 就越應該拜拜跟喝符水 絕對不要踏進醫院 離醫院越遠病越快好 加油 你的錢不應該被醫院騙走" },
      { type: "link", content: "https://photos.app.goo.gl/bgErgd7tvytr5XiB8", label: "2024年10月12日 新家也太美" },
      { type: "link", content: "https://photos.app.goo.gl/fPzti7rExWpjn97X6", label: "2023年10月12日 昨天在整理紀念品的時候 發現兩個人在不同時間 去同一間店買了數種巧克力中的同樣三種 拿出來的順序完全一樣直接嚇到" },
      { type: "link", content: "https://photos.app.goo.gl/Mb28fjYxaCrvQWWw9", label: "2023年10月12日 \
        突然發現空拍機檔案都大到靠北 我Z62拍了2000多張照片50G 但空拍幾張跟幾個短影片而已也是50G 空拍大神都怎麼儲存空拍機原檔的啊 常拍的話感覺幾TB也會一下子用完" },
      { type: "link", content: "https://photos.app.goo.gl/A8uSJmCN6fiAfGqW8", label: "2023年10月12日 出國扣打用完了 不知道何時可以再去" },
      { type: "link", content: "https://photos.app.goo.gl/hhuWHjB527LkXsDV7", label: "2022年10月12日 選錯職業的下場就是只能乾瞪眼羨慕" },
      { type: "link", content: "https://photos.app.goo.gl/KubVH3Ze9hBMR1fU7", label: "2022年10月12日 為什麼別人的爆ping比較好玩" },
      { type: "link", content: "https://photos.app.goo.gl/kjPCubCJ48iVGvUc8", label: "2022年10月12日 想吃熱蘭遮堡嗎 感覺會很飽唷" },
      { type: "link", content: "https://photos.app.goo.gl/XeBKgVPcv6vUt5wYA", label: "2022年10月12日 天上掉下來的禮物" },
      { type: "link", content: "https://photos.app.goo.gl/NTZNucjE171Nep1J8", label: "2022年10月12日 內科部吃便當" },
      { type: "link", content: "https://photos.app.goo.gl/nk24Yp9Xx8xQNRzJ9", label: "2020年10月12日 \
        待過陸戰隊 我知道這才是愛國 這才是台灣之光 旅美籃球國手最後到大陸賺大錢 不是台灣之光 \
        網紅跟藝人賺飽粉絲的錢 沒事躲在國外爽 有事躲回國 也不是台灣之光 \
        一堆紙上覺青 上街頭刷存在感 當兵只選替代役 加起來也沒有他愛國 \
        用你喜歡的方式來愛國 沒資格談愛國 被迫用不願意的方式犧牲 卻還是付出才是愛國" },
      { type: "link", content: "https://photos.app.goo.gl/YwKiiVxwKcXJTeSq6", label: "2019年10月12日 \
        短暫的雙十連假 開著車南北的跑 但一路大順暢避開車流 看著開心我也跟著開心 簡單就是一種最大的快樂囉 但是妳很快就餓了欸" },
      { type: "link", content: "https://photos.app.goo.gl/CvGjtjXEWk3VJTQZ7", label: "2018年10月12日 \
        這絕對是我看過最屌的經歷 我跪 醫師律師海軍少尉 當海軍醫官真的很苦很勇 請問有什麼人的經歷比這個醫師屌" },
      { type: "link", content: "https://photos.app.goo.gl/rSMATeNpK4xqPuSf6", label: "2018年10月12日 是在搓湯圓" },
      { type: "link", content: "https://photos.app.goo.gl/V3yigGBPWCvEpAPs6", label: "2018年10月12日 幹笑到差點送醫院" },
      { type: "link", content: "https://photos.app.goo.gl/3znMBcr1BtF7cJ6m6", label: "2018年10月12日 大法官 檢察官 考試加油" },
      { type: "link", content: "https://photos.app.goo.gl/SNPrTt55SgMubtNG7", label: "2018年10月12日 日夜顛倒 睡到現在起床吃早午餐 開玩笑" },
      { type: "link", content: "https://photos.app.goo.gl/4ijmELHe7kYjd9Bt7", label: "2017年10月12日 \
        當你深入研究某項技能時 會發現給予你名氣 給予你下定論的那些人 懂得比你還少 好比某些攝影比賽 好比某些粉絲專頁 \
        記得 不需要重視那些技不如你的人給你評價 請重視自己 嚴格要求 精進自己 自己的價值自己徒手創造" }
    ],
    "13": [
      { type: "link", content: "https://photos.app.goo.gl/T9GrQChdK9ZyiwDF8", label: "2025年10月13日 \
        超同意 我挺護理師藥師醫檢師復健師等等加薪 但我對那種那醫師開刀的不以為然 除了智障就是沒良心 才會睜眼說瞎話 把同為受害者的醫生當開刀目標" },
      { type: "link", content: "https://photos.app.goo.gl/j7zVVjpqZJdySS587", label: "2025年10月13日 沒錯 應該要大大改革 可惜政府還在睡" },
      { type: "link", content: "https://photos.app.goo.gl/r9v45YjMWbsR23tc6", label: "2025年10月13日 不能一直滑thread" },
      { type: "link", content: "https://photos.app.goo.gl/wZkSnMhXg36RBwHn7", label: "2025年10月13日 希望政府強力專制海洋業 吃不到魚肉沒關係 但還要必須被保護" },
      { type: "link", content: "https://photos.app.goo.gl/iULR75J63zCC3BFs5", label: "2025年10月13日 有點太扯了" },
      { type: "link", content: "https://photos.app.goo.gl/A7aje32tUYRoogXn8", label: "2025年10月13日 我覺得這個機器是不是過度解讀了 哈哈有啊 超大聲" },
      { type: "link", content: "https://photos.app.goo.gl/d9DLzQyNUpdHg4js5", label: "2025年10月13日 \
        CXR看不太清楚支架放哪個位置 被摩爾紋擋住 Baseline EKG應該是LBBB III AvF Q wave可能猜RCA old MI s/p stent \
        ER EKG Af LBBB V1 aVR ST稍微上升 Echo好像下壁跟側壁hypokinesia EF eye ball 好像30-40% 非專業 猜不到血管嚴重程度 \
        但盲猜可能三條或者RCA+LCX有問題 要看導管才知道ORZ EF不好+LBBB 如果以後符合indication不曉得會不會考慮CRT 好難的case" },
      { type: "link", content: "https://photos.app.goo.gl/t85TSi6FG6vZxtLG7", label: "2025年10月13日 該去挖寶了" },
      { type: "link", content: "https://photos.app.goo.gl/n5YRewBH2kTzfUFt5", label: "2025年10月13日 \
        台南有著獨特的地景風貌 也有永遠挖掘不完的美食系列 這次就來分享部分心得 先說 交通上真的大推租機車 在地遊走沒有機車真如半殘 警察抓開車違規越來越頻繁 \
        牛肉湯系列 億哥蒜香牛肉超頂 牛肉湯香肉嫩 有停車場又不用排隊 阿牛肉燥飯跟牛肉湯超好吃 沒有冷氣 路邊停車 但不用排隊 豪牛牛肉湯清爽 牛肉很嫩 有冷氣 \
        路邊停車位要等 排隊10-15分鐘 阿財一樣是肉燥飯搭配牛肉的組合 也非常好吃 木木海產粥 非常訝異湯頭竟然如此香甜 蛤蜊算大顆 蝦肉也不會老 \
        還有竹筍襯托著先煮過才下湯的飯粒 非常適合五分飽了卻對台南美食念念不忘的你我 感覺寬敞的用餐環境 超便宜的價格 大大推" },
      { type: "link", content: "https://photos.app.goo.gl/fHEW2GtKnwJ8AMYu7", label: "2025年10月13日 感覺很好看ㄟ" },
      { type: "link", content: "https://photos.app.goo.gl/mdW6Arghrw7tBUiC6", label: "2025年10月13日 今天上班看到的天空超藍超乾淨 超適合做成ppt背景 但沒帶相機 如果能有空拍機拍更好 可惜申請流程好麻煩" },
      { type: "link", content: "https://photos.app.goo.gl/TvAoaetMMJp5cqqD7", label: "2025年10月13日 從大阪帶回來給大哥 大哥再指名送給 嗚嗚嗚 感動的我要哭了" },
      { type: "link", content: "https://photos.app.goo.gl/7pWtsBKnMFK7j6UA9", label: "2024年10月13日 \
        CHATGPT真的很恐怖的聰明 他能完美閱讀圖片 範例一 聽老外講課聽不懂 把老外PPT拍起來傳給CHATGPT 他能直接翻譯 整理成繁體中文 \
        範例二 越南伺服器傳說介面完全看不懂 截圖問他內容是說什麼 結果完美翻譯 免費版只有每天34個問題 是否該買月費600" },
      { type: "link", content: "https://photos.app.goo.gl/Umx7d68Hxa5DddtH6", label: "2024年10月13日 Perfect" },
      { type: "link", content: "https://photos.app.goo.gl/xXyidS3d8WF8TFuk8", label: "2024年10月13日 吃Xanax" },
      { type: "link", content: "https://photos.app.goo.gl/RmTLQG8tjTByWL5K8", label: "2024年10月13日 如果有意願想去台北民生社區診所服務的醫師 可以私訊我 需求家醫內專醫美" },
      { type: "link", content: "https://photos.app.goo.gl/8RGkDDHWih4ornqZ8", label: "2023年10月13日 \
        急診除了連假放很爽以外 剩下只有上班肝鐵人 每位急診住院醫師在這12.5小時裡完全沒有一刻停下來 沒有吃飯 沒有滑手機 沒有睡覺 \
        一直接電話 做處置 開會診 接病人 解釋病情 跟神一樣 最難的還不是依照醫療準則做事 處置還要考慮護理人力 健保規定 時間成本 後續動向 \
        找出炸彈 病人是否接受 上班到六小時我已經頭昏眼花 下班連運動的力氣都沒 太難了" },
      { type: "link", content: "https://photos.app.goo.gl/wg3NMsKzdgqXCz9Y7", label: "2021年10月13日 \
        把這張修完 今年終於能好好放下攝影 專心在醫學上 我太不長進了居然一直拍 不過當電腦桌布超好看 高畫質藍調煙火桌布 讚讚 自己的電腦桌布自己拍" },
      { type: "link", content: "https://photos.app.goo.gl/J5JCgQt2cBBpXojh9", label: "2021年10月13日 成功打上第一支CVC 運氣太好靜脈一次就戳到 僅此紀念 學長太CARRY我了" },
      { type: "link", content: "https://photos.app.goo.gl/yMSF8L6tQPKAXCin7", label: "2020年10月13日 \
        冰島的路應該不能類比台灣的山路吧 如果台灣也有超大條超長又沒什麼車的山路 民眾玩滑板摔了也不會被媒體大肆報導 也不會要求國賠 我想就能類比 \
        他法致生往來之危險者 不就是了嗎 那我今天去馬路用屁股走路前進 結果被以公共危險送辦 你是不是也要幫我說話 我難道屁股走路危險了嗎 具體危險產生了嗎 \
        又或者為甚麼我不能從山上用滾的滾下山 難道危險了嗎 我危害到人了嗎 我不能熟捻的滾下山嗎 還不是一樣會被以公共危險送辦 \
        你理解上面這個邏輯嗎 公共危險用在這件事情本身的確是有點道理的 其實我滿欣賞你對機車用路的權益發聲 因為我本身也是機車族 不過你說的這件事本身真的沒有道理 \
        反正我在這裡說這些就是政治不正確 有多少粉絲就會有多少護航說法 你們幫忙護航跟我說沒用 去跟政府說吧 我就不再浪費時間多說了" },
      { type: "link", content: "https://photos.app.goo.gl/WFZa7snhP2s6WuZQ8", label: "2019年10月13日 \
        之前從來沒搞懂腦梗塞 也搞不清楚治療差在哪 就把國考考過 今晚花了一個多小時 終於稍微搞懂大致脈絡 歸納成重點 \
        如果寫錯請大力鞭我 感恩 參考內科住院醫師鐵則 小麻五版 原來腦梗塞有兩種分法 難怪那麼亂" },
      { type: "link", content: "https://photos.app.goo.gl/TmMc9km93F75jZwKA", label: "2019年10月13日 \
        今晚終於看完結婚できない男人第一季了 13年前的連續劇 12集只用了固定幾個場景跟對話來延展劇情 所以常會有讓觀看者不知道該怎麼接下去的尷尬 \
        但演技真的沒話說 也充滿許多小幽默 但整體有時沒吸引人一直看下去的高潮" },
      { type: "link", content: "https://photos.app.goo.gl/LgufUtBtDA4UCXny7", label: "2019年10月13日 台中市MITAKA Cafe 隱身在巷弄的一家日系咖啡宅 好久沒有一起寫網誌了 好可愛的店" },
      { type: "link", content: "https://photos.app.goo.gl/dxLAxBeHp1xKGSWv7", label: "2019年10月13日 其實很準 精神科是第一志願但絕對選不到" },
      { type: "link", content: "https://photos.app.goo.gl/e6Cp5HuwEphs3ueT7", label: "2019年10月13日 蜜蜂叮咬藥物給予 自己整理 有錯拜託告訴我" },
      { type: "link", content: "https://photos.app.goo.gl/gAN4Jdizt4Qs9bmQ6", label: "2019年10月13日 自從創了twitter 就是自己練習亂寫日文的時候了" },
      { type: "link", content: "https://photos.app.goo.gl/4QtAMjevTca47EKX8", label: "2018年10月13日 黃議員好 黃馨慧西屯區議員二姐 凍蒜" },
      { type: "link", content: "https://photos.app.goo.gl/njtdmy6daRLAdhUp9", label: "2018年10月13日 抱起來第一句話 比Yuki重欸 廢話" },
      { type: "link", content: "https://photos.app.goo.gl/tynu4uDNQqUs1kDt7", label: "2018年10月13日 銀河還要重修 給我一點時間深入學習" },
      { type: "link", content: "https://photos.app.goo.gl/C23Wb7kB4mViVUoeA", label: "2018年10月13日 剛剛吳先生一直拿著吸管 我以為要用脆笛酥吸 一直喝不到森氣啦" },
      { type: "link", content: "https://photos.app.goo.gl/NxNQctfCjiJhKmhH7", label: "2018年10月13日 \
        這是全球我最喜歡的燈塔日出 配合前面的黃花當前景 長曝絕對是ig神作 不過親自去拍可能十年以後了 喜歡攝影有閒有錢的朋友 真的可以去創作 該去幫我圓夢了" }
    ],
    "14": [
      { type: "link", content: "https://photos.app.goo.gl/SxsxUwQBqrd5FrPT8", label: "2025年10月14日 他如果一個人看15分鐘 你連掛號都掛不到 標準愛先看又愛嫌的台灣鯛 可悲" },
      { type: "link", content: "https://photos.app.goo.gl/UdvGkz6fSpdxhk8Y8", label: "2025年10月14日 好可憐" },
      { type: "link", content: "https://photos.app.goo.gl/oU6jN8mDR6JfXavM8", label: "2025年10月14日 我也是" },
      { type: "link", content: "https://photos.app.goo.gl/5JpLiC3aDbJYS65V7", label: "2024年10月14日 為什麼在台灣詐騙好賺 因為美女頭貼 偽造高被動收入就能創一個帳號了 門檻很低" },
      { type: "link", content: "https://photos.app.goo.gl/KSF8GFAXoYMAS2wN8", label: "2023年10月14日 感恩惜福同學的愛心 讓我能收藏這些酷東西" },
      { type: "link", content: "https://photos.app.goo.gl/B5jXuVCSTLLs5mDA6", label: "2023年10月14日 累到現在起床才看到" },
      { type: "link", content: "https://photos.app.goo.gl/oGBgtuWFP9V7D6DHA", label: "2022年10月14日 有點慘" },
      { type: "link", content: "https://photos.app.goo.gl/shkNcUeuvM4g8Y8g7", label: "2021年10月14日 \
       台灣110年國慶煙火 高雄85大樓不像台北101 有許多高點或公園可以拍攝 能這樣看著佇立的85百萬夜景實在不多 修完這張之後發現比第一張更好看 \
       超適合當大圖輸出 其實拍煙火我從沒有不疊圖後製的 我很在意作品的呈現是不是一個完美的畫面 但部分兼顧現實感 一個無可挑剔且耐看的作品才是我心中的滿分 \
       完美的構圖 完美的光影 完美的後製細節 才能表達內心描繪的感動" },
      { type: "link", content: "https://photos.app.goo.gl/ZMX24eCLY92BEy927", label: "2021年10月14日 以上是為了放精選動態才放的 設立煙火專區" },
      { type: "link", content: "https://photos.app.goo.gl/J9fF5njj82BhqjgT7", label: "2020年10月14日 我不會在上面發文 不要污衊我" },
      { type: "link", content: "https://photos.app.goo.gl/9t2V5J8KPdfRfUpWA", label: "2020年10月14日 為了簽病人的診斷證明回來上課" },
      { type: "link", content: "https://photos.app.goo.gl/ZbnHhXT7JHqyMLoe7", label: "2020年10月14日 懷念那段連在學校都可以拍學校日出的日子" },
      { type: "link", content: "https://photos.app.goo.gl/5NuuL3drBJZiSpNPA", label: "2019年10月14日 與其把亡國感掛在嘴邊騙選票 藍綠都一樣 跟只在意會不會失言的選票 這樣默默努力才是政治榜樣" },
      { type: "link", content: "https://photos.app.goo.gl/NL4ZmzosJugpVQPi8", label: "2018年10月14日 真的不想回船上 真的不想 我抱就不會 人的問題" }
    ],
    "15": [
      { type: "link", content: "https://photos.app.goo.gl/BivHn9UjQTGZPevW9", label: "2025年10月15日 小時候可愛但長大就是底層 如果可以應該政府派兵 把這些社會癌細胞化療掉" },
      { type: "link", content: "https://photos.app.goo.gl/d8sAN7tMoTshmuVv8", label: "2025年10月15日 這也是社會癌細胞 應該用強力的方式讓他直接消失 同理受害者的心情 才會知道不是所有人都有資格活著去隨機傷害他人" },
      { type: "link", content: "https://photos.app.goo.gl/p2y5JCHhCRbwke7E8", label: "2025年10月15日 這可能要去檢查欸 我先猜免疫系統相關的血管炎之類的造成血管破裂出血 但這需要專家" },
      { type: "link", content: "https://photos.app.goo.gl/cxZbgZaPvj9kqUMa8", label: "2025年10月15日 \
        國防醫學大學 禮拜一上班經過學校大門 發現天空很藍很乾淨 一方面從國防醫學院升級成國防醫學大學 招牌也換了 一方面用來做自己的ppt封面好像不錯 \
        另一方面也快離開台北了就留個紀念 看隔天天氣也差不多就帶了相機 沒想到隔天的學校背景也藍的很純粹 就拍了下來 可惜不知道怎麼申請空拍 \
        用相機拍攝最多只能調整一些垂直比例等等 如果有需要照片原檔我放在下面連結了 可告知後自行使用" },
      { type: "link", content: "https://photos.app.goo.gl/6SQKVvrF8wew2t7p8", label: "2025年10月15日 上次看到上班的藍天超美 就猜隔天應該也差不多天氣 果然第二天上班帶相機 就拍到跟第一天差不多的天空 完全純藍色 用來當封面也不錯" },
      { type: "link", content: "https://photos.app.goo.gl/VvG1rUhv7tySY5Pd7", label: "2025年10月15日 比起榮譽校友 我更以育澤大哥為榮" },
      { type: "link", content: "https://photos.app.goo.gl/PtrLYNr4EBhmBz9M8", label: "2025年10月15日 該去拍貓貓了" },
      { type: "link", content: "https://photos.app.goo.gl/RjDqC8UX9Xdiughs8", label: "2025年10月15日 為啥不tag我看" },
      { type: "link", content: "https://photos.app.goo.gl/wEWau151ct1wfkYz5", label: "2025年10月15日 我們也要弄一件" },
      { type: "link", content: "https://photos.app.goo.gl/pniKbZzCsUXTt6yy9", label: "2025年10月15日 幫我收藏福岡美食" },
      { type: "link", content: "https://photos.app.goo.gl/msarFK2Drfa2C6ED6", label: "2025年10月15日 超美" },
      { type: "link", content: "https://photos.app.goo.gl/Q9YHbyjTsXGWPq3f6", label: "2024年10月15日 怎麼都沒有先跟我分享" },
      { type: "link", content: "https://photos.app.goo.gl/XPGM2NiYqk8beF6y6", label: "2024年10月15日 II III AVF STE aVL Std consider STEMI RCA比較有可能 但LAD LCX不能完全排除沒問題 echo可能看到inferior wall motion差" },
      { type: "link", content: "https://photos.app.goo.gl/7M2ffmFcXWWo3SRYA", label: "2024年10月15日 每天都要帶 上班才有好心情" },
      { type: "link", content: "https://photos.app.goo.gl/9QGRxjgcktyk3yu47", label: "2023年10月15日 生日快熱 他的願望是希望大家都單身 這樣才有人陪他去拍照" },
      { type: "link", content: "https://photos.app.goo.gl/2GnFhE1f13swdQuq6", label: "2022年10月15日 這是一個被腎內報告用到很焦慮的週末 靠薑母鴨小小緩解" },
      { type: "link", content: "https://photos.app.goo.gl/NYC14kgmMzxeJCQr9", label: "2022年10月15日 下雨天自製早午餐超讚 感謝巧手跟烤吐司支援" },
      { type: "link", content: "https://photos.app.goo.gl/6ER63H1z3a9pGHTn7", label: "2020年10月15日 會覺得腎臟屬於生殖器官 真的不是沒讀書的問題 是智商低下" },
      { type: "link", content: "https://photos.app.goo.gl/fhpsZ7APA23LNcyz6", label: "2019年10月15日 \
        請教學長 之後內專考試 使用的書籍主要還是FC內科對嗎 哈囉 像你之後要選內科 請問你明年就會買FC內專的書了嗎" },
      { type: "link", content: "https://photos.app.goo.gl/fGiMs6kuDb7mx7Mw8", label: "2018年10月15日 \
        除了攝影 本業也該分享一下 家中有長輩的麻煩為了健康督促他們 醫學期刊已經證明偏方療法會增加癌症治療死亡率 \
        拜託別用偏方吧 造成醫師麻煩也死的快喔 這幾天會再沈澱潛水 消失一下唷" },
      { type: "link", content: "https://photos.app.goo.gl/uXJQ449HJ2JeghPZ9", label: "2017年10月15日 \
        關於自己 這是圖文無關的背包客早餐 如果你覺得別人的思想很奇怪 做的事情很奇怪 那只是你的世界太狹隘 我說的 \
        假若能有一份月收穩定十萬台幣的攝影工作 那麼我不會當醫生了吧 近日不斷思索活著的意義 原來簡簡單單當個背包客 用相機拼湊世界各處的奇景 便是意義 \
        事實是人死不能帶走任何東西 所以活著便只是創造自身價值而已 對你而言 你的興趣 你此生投入最深的就是你創造的價值 這也是唯一能永遠留下的痕跡 證明你活過 \
        我是極度崇尚自由的個性 在團體生活我知道自己很格格不入 我跟許多個性的人相處過 一起旅行 一起共事 這也是托國醫的福 否則從前我只活在自己世界 \
        但自從開始背包旅行 我才了解價值觀與自我認同 沒有標準答案 因此曾經我以為自己很怪 不受控 老是想做與眾不同的事情 原來這些不是錯的 我不必自責 \
        國小的時候 上課與午休我都在畫畫 升上國一時我畫完自己65集的漫畫集 \
        國中的時候我沒有補習 考入永中美術班 我也從不照著老師要求的作畫 總是我行我素的咨意作畫 拿到縣學生美展水彩第三 設計第二 \
        高中時繪畫能力並沒有被家人肯定 所以我開始埋首讀書 休息時的樂趣是解數學 多的時間研究最喜歡的物理 後來通過奧林匹亞初試 但沒繼續比 \
        唯一正常的是狂練籃球 而醫學系也是當時高二 理當覺得成績追求頂尖本該讀醫 \
        一直到大學接觸攝影 我才發現自己與團體生活如此不相容 也許自己的藝術細胞真的死不了 依然天馬行空的創作自己的思想成果 只是藉由攝影 \
        當然我也一度自卑 為何總不能像正常人般思考 但現在覺得這就是我 不需要妥協 我本來就不喜歡做別人覺得對跟該做的事情 未來我有自己規劃與想法 \
        然而最該感謝的 反而是團體約束強的軍校生活 教會我待人處事 教會我抗壓 教會我察言觀色並且給我資源 薪水 校風 能靠自己玩攝影 \
        人生沒有用不到的經歷 逆來順受 為自己的價值找到出路是很重要的" }
    ],
    "16": [
      { type: "link", content: "https://photos.app.goo.gl/XJn2vYpSD2PrFt357", label: "2025年10月16日 為了打擊揭發綠色弊案的人真是不遺餘力" },
      { type: "link", content: "https://photos.app.goo.gl/6mAx6s41dGbfmahZA", label: "2025年10月16日 你看有真正的貓貓島 相島" },
      { type: "link", content: "https://photos.app.goo.gl/TMvxvR8414YWVWS4A", label: "2025年10月16日 好啊" },
      { type: "link", content: "https://photos.app.goo.gl/gNxAsGF5JU3z5oR68", label: "2024年10月16日 \
        滑了一下北愛爾蘭 我只能用美到傻眼來形容 到底何時可以去拍那邊的風景啊 \
        如果讓我選擇一億元財富但只能一直工作 或過著小康生活但可以環遊世界拍風景 我一定毫不猶豫選後者" },
      { type: "link", content: "https://photos.app.goo.gl/WVpQLGF3VTHzXCVx8", label: "2024年10月16日 這個闖紅燈很絲滑" },
      { type: "link", content: "https://photos.app.goo.gl/A7cLUE8bTi2fkkGL7", label: "2024年10月16日 黑卡現在也滿常見的 但比起遮光他更適合打蚊子 因為黑卡缺點非常多 不建議使用 後製可以輕鬆做到黑卡做不到的完美曝光" },
      { type: "link", content: "https://photos.app.goo.gl/aMAK4fg6YnMVUWye6", label: "2024年10月16日 雖然不想嘴黑卡 但你的觀念滿欠嘴的 後製就是攝影的一部分 不會後製 只是你自己懶不會學習而已 其他都藉口" },
      { type: "link", content: "https://photos.app.goo.gl/mQJHVdBERDjhprt86", label: "2024年10月16日 就因為用黑卡 他中間雲海直接過曝爆了" },
      { type: "link", content: "https://photos.app.goo.gl/hqm3in1d8HCoPuX58", label: "2024年10月16日 凝霜寶珠姐" },
      { type: "link", content: "https://photos.app.goo.gl/xhZaJHrgKSobHXv99", label: "2023年10月16日 然後兩個月居然兩個RIP" },
      { type: "link", content: "https://photos.app.goo.gl/RybY3ftHGxYutCkj6", label: "2023年10月16日 這個月的表現跟CLERK沒兩樣" },
      { type: "link", content: "https://photos.app.goo.gl/3wrSuaJ9SqVeevmy9", label: "2022年10月16日 第一次做筆記我需要自己用中文寫過一次 不然未來絕對看不懂這一大段 RTA有夠難 腎臟內科學問很深" },
      { type: "link", content: "https://photos.app.goo.gl/DDa2r2S4E8tkYf5M7", label: "2022年10月16日 我家有個小神廚 這個月在腎臟內科 博大深厚的知識真的喘不過氣 完全沒碰攝影的東西 希望下個月能出門拍個照 好累的人生" },
      { type: "link", content: "https://photos.app.goo.gl/qHbx8CboBmQL6vtQ8", label: "2021年10月16日 \
        埔里昌豐小籠湯包 小籠湯包再次讓我吃到感動流淚 湯汁真的美味 而且肉質鮮美 湯包皮也非常細緻但不會一夾就破 蒸餃聽說還好而已 免費附贈品醬汁 注意事項適合學生 \
        必須再分享一次 這家埔里湯包超級好吃 不用預約 不用排隊 外面又白線可以停車" },
      { type: "link", content: "https://photos.app.goo.gl/mZMfTkqHSoRwcj347", label: "2021年10月16日 懷舊行程GOGOGO 晚餐埔里鼎泰豐" },
      { type: "link", content: "https://photos.app.goo.gl/GXUhZYgaQ5qcdiYY7", label: "2021年10月16日 明明說要來耍廢 結果流了滿身汗" },
      { type: "link", content: "https://photos.app.goo.gl/LNwAnEBzmroBr9GFA", label: "2021年10月16日 出來打球啊" },
      { type: "link", content: "https://photos.app.goo.gl/4Dg4Wi2ixCCrVybu7", label: "2020年10月16日 \
        以前中風過的70歲男性 這次因為雙腳無力癱坐在浴室 沒有失去意識 確定沒有跌倒 檢查沒有腦出血骨折外傷 發燒被送來急診 \
        檢查有血尿跟pyuria懷疑泌尿道感染 抽血ck爆高到快兩萬 請問該注意什麼" },
      { type: "link", content: "https://photos.app.goo.gl/4UFbSLG177FN3j2u6", label: "2020年10月16日 \
        值班遇到癌症病人 只有持續發燒 用depyretin也繼續燒 排除其他原因只剩tumor fever有可能 大家接下來都怎麼處置 他Anc>500 謝謝鹼性跟聽神經 馬上試試" },
      { type: "link", content: "https://photos.app.goo.gl/3NmqJRrWptgv4EXC8", label: "2020年10月16日 \
        上次血糖不控制吃保養品的病人 大病一場後問我可不可以 喝自己泡的茶代替白開水 被我勸阻後不死心 等主治來再被勸阻一遍 終於願意好好喝水" },
      { type: "link", content: "https://photos.app.goo.gl/2nSinAjYhXSYhNk5A", label: "2019年10月16日 \
        Evernote比前幾天我用的內建記事本好 一切感謝女友推薦 條列清楚而且版面乾淨 缺點就是先丟圖片上去會造成無法依序編號 \
        不過這小問題後丟圖片就好 然後自己把筆記整理好看 比較能激發讀一點書的動機" },
      { type: "link", content: "https://photos.app.goo.gl/hC31nTKFGKnhPdy69", label: "2018年10月16日 人生第一張gopro拍的照片之 我要抽Hero7" }
    ],
    "17": [
      { type: "link", content: "https://photos.app.goo.gl/oNsF2VMn5r8fdPX3A", label: "2025年10月17日 寶寶第一次看到貓貓的反應應該也很可愛" },
      { type: "link", content: "https://photos.app.goo.gl/UgyQwX3j7ncriiBb6", label: "2024年10月17日 \
        黑卡現在的功能打蚊子多過遮光 為什麼 我舉三張照片為例 如果拍攝101夕陽 你搖黑卡保證101變成超黑的火柴棒 看太多了 \
        尤其光線差異越大黑卡留下的不自然痕跡越明顯 再拉回他拍攝的苑里橋 用黑卡之後他的橋一定偏黑 黑卡最大的三個缺點 \
        只能適用在地平線很平的構圖 複雜的地形就算升級用到縫卡一樣有痕跡 完美的光線 例如日出太陽剛升起時只有那12分鐘 一但黑卡搖壞 算錯曝光時間等 就沒了 \
        很多人搖卡的時候都會撞到隔壁的人 現在都用多重曝光的方式來處理反差 很多人詬病HDR是因為不自然色調 我這裡大推LR的HDR功能 他是保留中間曝光的方式 \
        讓後製有更多寬容度 很簡單就能處理高反差 確實不應該嘲笑黑卡 但是應該淘汰黑卡了 我玩攝影12年多 前五年跟很多大哥學習黑卡 但後面學了後製就不再搖黑卡 \
        我甚至可以用黑色錢包直接搖 最後 很多人觀念錯誤 攝影並非直出的藝術 而是後製本身也是攝影的一環 別用直出當懶惰學不會後製的藉口" },
      { type: "link", content: "https://photos.app.goo.gl/KL3icXQrFz4XeByWA", label: "2024年10月17日 \
        舉個最簡單的例子 如果要拍這兩張我使用黑卡來搖 101通常會變成整根黑色的火柴棒 黑卡最適合的例子是水平面超級平的狀況 這樣搖出來或許可以接近完美 \
        所以黑卡最大兩個缺點 無法適應變化多端的地形 會造成不合理陰影 關鍵時刻最好的光線往往只有12分鐘 例如拍日出太陽剛升起那瞬間是最美的 如果搖壞了就是直接錯過了 \
        最後現在後製方式為多重曝光 其實處理手段越來越簡單 hdr可能會不自然 因此唯一推薦LR的HDR 那個是保留中間曝光的HDR 很自然又能留後製需要的寬容度 \
        黑卡是一個工具 不需要訕笑他 但可以淘汰他了 現在的攝影不應該追求直出 而且接受後製就是攝影的一部分" },
      { type: "link", content: "https://photos.app.goo.gl/iXWJziwmNqBjj4nz5", label: "2024年10月17日 \
        學長說的沒錯 很吃地形 地形變化大就不適合用黑卡 而且黃金時刻的光線可能只有一兩分鐘 萬一那時候搖失敗 就錯過了 後製可能無腦打 拍很多張不同曝光 回去再來合" },
      { type: "link", content: "https://photos.app.goo.gl/CaN63LSe9X37Cfoc6", label: "2024年10月17日 確實沒錯" },
      { type: "link", content: "https://photos.app.goo.gl/qXp6Spk7W1mRJR5CA", label: "2023年10月17日 與其說是千萬不要輕易簽下 我更建議是 千萬不要簽下 這種後悔未來真的只剩尋短可以解脫 唉" },
      { type: "link", content: "https://photos.app.goo.gl/jkdc9ZziyBKfkiAT9", label: "2022年10月17日 超實用" },
      { type: "link", content: "https://photos.app.goo.gl/nQH9twKWhHPvRJVn9", label: "2022年10月17日 超噁 超討厭幫病人外大便" },
      { type: "link", content: "https://photos.app.goo.gl/MXYuWBvZTiJ5fXkq5", label: "2021年10月17日 \
        埔里鹹油條 如果你也喜歡傳統早餐 埔里鹹油條真的不能錯過 先說他油條粗粗一根 真的可以七分飽 配上荷包蛋跟小熱狗居然才35元 \
        而且不會整個軟爛 吃起來幾分脆卻又不會乾硬 口感很讚 大推" },
      { type: "link", content: "https://photos.app.goo.gl/uwMsBiHhGcJBBK7y7", label: "2021年10月17日 埔里超好吃鹹油條 有熱狗有蛋 晚點寫食記" },
      { type: "link", content: "https://photos.app.goo.gl/siqb6ZkRGnLH9K4eA", label: "2016年10月17日 xmen fundus Ophthalmoscope 眼科intern最終型態" }
    ],
    "18": [
      { type: "link", content: "https://photos.app.goo.gl/WZ8drB3kc8SnbMzr9", label: "2025年10月18日 民進黨好不容易掌握政權 想要好好官商勾結大賺一筆 你這個委員不識相 當人家財路幹嘛 難怪他們弄完柯文哲下個弄你" },
      { type: "link", content: "https://photos.app.goo.gl/dJzT1yh1BCXgkfsh8", label: "2025年10月18日 這麼險峻你怎麼不趕快從軍保衛國家" },
      { type: "link", content: "https://photos.app.goo.gl/LRScmeVTaMZwmpnt6", label: "2025年10月18日 來看同事的小寶寶 意外發現同事老公居然是大十屆的國防學長欸 世界太小了" },
      { type: "link", content: "https://photos.app.goo.gl/H9FuffARtCcfp7Ry6", label: "2025年10月18日 等下健身" },
      { type: "link", content: "https://photos.app.goo.gl/ASg3wKkGSqNCsmsv7", label: "2025年10月18日 好可愛 騙人要開電扇結果又關起來" },
      { type: "link", content: "https://photos.app.goo.gl/z8fDEbpVdKByQGtv5", label: "2025年10月18日 這個必須去買" },
      { type: "link", content: "https://photos.app.goo.gl/cpwQSrxNXBpoM56o6", label: "2025年10月18日 超想去 因為觀光客人好少" },
      { type: "link", content: "https://photos.app.goo.gl/wRT9oxnMRUwjgeTp9", label: "2025年10月18日 超可愛 不知道在哪" },
      { type: "link", content: "https://photos.app.goo.gl/w2uiBm9zos4Y1C2y8", label: "2025年10月18日 不能一直看這個啦" },
      { type: "link", content: "https://photos.app.goo.gl/EMb2Ff3JwfEJbZRN6", label: "2025年10月18日 醫生真聰明" },
      { type: "link", content: "https://photos.app.goo.gl/25qMv1CyiyQHUbg19", label: "2024年10月18日 \
        現在的Chatgpt真的讓人震驚 尤其直接讀圖的能力實在太強 我把教科書隨意一張圖丟入 chatgpt居然能完整回答 雖然有一兩個地方可能是判讀失誤 \
        但大致上結論沒什麼問題 真的非常可怕 膽小狗英雄裡二樓的超級電腦 應該就是未來的chatgpt 我試過把國外講者的ppt拍照截圖丟入 \
        也試過直接把外國伺服器遊戲畫面隨意截圖丟入 chatgpt都能接近100%正確的回答我問題 這也是免費版ai cluade目前做不到的" },
      { type: "link", content: "https://photos.app.goo.gl/cRT5XyS6hoF9Zxj3A", label: "2024年10月18日 CHATGPT去考心專口試說不定會過吧" },
      { type: "link", content: "https://photos.app.goo.gl/tkydusW7t4pGRSSH9", label: "2024年10月18日 羨慕這些父母出生的小孩 天生就出生在終點線" },
      { type: "link", content: "https://photos.app.goo.gl/X3kVJc5FK3arQibW7", label: "2024年10月18日 如果可以一秒離開我絕對頭也不回的離開" },
      { type: "link", content: "https://photos.app.goo.gl/xTt4AU3msFX9L9978", label: "2024年10月18日 他就是以自私聞名的啊XD" },
      { type: "link", content: "https://photos.app.goo.gl/KZbtF3vuYAxtPis38", label: "2024年10月18日 健保不倒 台灣醫療不會好" },
      { type: "link", content: "https://photos.app.goo.gl/YRYN7x9sDB9LarVQ9", label: "2024年10月18日 醫師要看200號才發瘋吧 學長辛苦了 跑個20圈操場犒賞自己一下XD" },
      { type: "link", content: "https://photos.app.goo.gl/d377DcdSTDmRXMcK9", label: "2024年10月18日 眼神很兇唷" },
      { type: "link", content: "https://photos.app.goo.gl/NpxWMHfvfgANNrNi9", label: "2023年10月18日 \
        住院醫生如同關禁閉的生活 體力下降超級多 考試的壓力也讓我處於緊繃邊緣 真的沒辦法規律運動 這三天趁休假強力要求自己 連續三天都至少慢慢跑三公里 回家後重訓一小時 今日達成" },
      { type: "link", content: "https://photos.app.goo.gl/uq85kqocfkRLURHQ7", label: "2023年10月18日 \
        這些退休校官真是可悲 中共掌握台灣總統跟高階首長行程只要花幾百萬台幣 真的掌握了要刺殺總統還真簡單 後面就是打下台灣了 \
        這些退官也真的很白癡 如此重要的資訊 中共就算花個幾千億購買都還便宜了 畢竟開戰直接影響戰局 居然幾百萬就被收買是有多下賤啊ZZ" },
      { type: "link", content: "https://photos.app.goo.gl/RBSq5AapCMPfPHP5A", label: "2023年10月18日 不愧我認為的台灣最強修圖神" },
      { type: "link", content: "https://photos.app.goo.gl/6NHsrGTdbRGG9YdB8", label: "2023年10月18日 新光醫院聖賢大樓" },
      { type: "link", content: "https://photos.app.goo.gl/E89bQMSpSLj8de2F9", label: "2019年10月18日 大電梯" },
      { type: "link", content: "https://photos.app.goo.gl/7gHNva6EZrRNBySs6", label: "2019年10月18日 又收服一家國軍醫院啦 來上半天課" },
      { type: "link", content: "https://photos.app.goo.gl/Cg7yWxaVtmLdRbZp6", label: "2018年10月18日 請委員為我們被壓榨的軍醫謀求公平合理的退場機制!" },
      { type: "link", content: "https://photos.app.goo.gl/pDbPQ46t9vShfcgx9", label: "2018年10月18日 \
        真心覺得1011月的奥入瀬美到不像話 比較特別的是我拍攝當下居然是飄小雨的 但讓鏡頭避開雨滴 畫面依然美到不行 暖色調的樹林配上冷色調的水流 合適地彼此融入 土曜日の小旅行 然後撞車" },
      { type: "link", content: "https://photos.app.goo.gl/92v7dZUBYG1TnqxC7", label: "2018年10月18日 艦艇單位不用離營宣教啊 因為根本離不了營" },
      { type: "link", content: "https://photos.app.goo.gl/UnkB4eZnJCsYWTrm8", label: "2018年10月18日 出海Day3 又消失了" }
    ],
    "19": [
      { type: "link", content: "https://photos.app.goo.gl/qG83nWT6BMkmUtgP6", label: "2025年10月19日 \
        分享一下上次吃到的高雄美食 這次去高雄 發現愛河現在規劃的超級棒 不只環境乾淨 夜景跟攤販都很漂亮很有情調 真的很讚 反倒是台南漁光島徹底爛掉QQ \
        整理了幾家很不錯的店推薦給大家 樂壽司 樂すし 炙燒三味丼 鮭魚干貝跟牛肉從入口到嚥下都有不同層次的風味 配上有別於普通醋飯的香鬆醋飯 \
        飯粒保有彈性卻把清甜跟鬆香融為一體 如幸福的浪潮拍打在舌尖 茶碗蒸 壽司 炸牡蠣跟味增湯 也具現化了細膩跟功夫 價格稍貴 份量不多而且要等10分鐘 \
        但都不影響我下次再來的決心 鴨肉珍 排隊約15分鐘 切成剛好一口的鴨肉 配上香肥肉燥飯 簡直太好吃 鴨血跟空心菜也超好下飯 這是傳統台灣人的早餐 \
        Shoreline Coffee Roaster 海岸線咖啡燈塔店 很不錯的外帶咖啡跟奶茶 出餐快 旁邊也很好拍旗津市區搭配85大樓 雙妃奶茶 甜度適當 奶味很夠 以下我個人覺得還好 \
        香茗茶行 霜淇淋普通 十秒就開始融化建議用紙杯 伯爵鮮奶茶沒有那麼濃郁 桐封堂Tea House 網路好評的鍋燒意麵跟珍珠奶茶 但牛奶口味鍋燒意麵味道不夠深入 配料也普通 奶茶部分是不錯 " },
      { type: "link", content: "https://photos.app.goo.gl/C2zhk54qoEZL5Mu48", label: "2025年10月19日 好美喔 每張都很漂亮尤其第一張捏" },
      { type: "link", content: "https://photos.app.goo.gl/vBx7SAq96i7Ft87ZA", label: "2025年10月19日 你可以創立在日本的台灣人頻道了 日本的介紹跟景色可以多帶一點 其實我們都超想看 有點太快閃過去" },
      { type: "link", content: "https://photos.app.goo.gl/ufFd44opkJnMrzn79", label: "2025年10月19日 怎麼可能這麼可愛" },
      { type: "link", content: "https://photos.app.goo.gl/AexcrqkLWYTGgBmy9", label: "2025年10月19日 可愛到以為ai哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/JszMCwiwdK6HDgR88", label: "2025年10月19日 真可愛捏" },
      { type: "link", content: "https://photos.app.goo.gl/fdo4tz1t6ErAnV4t9", label: "2024年10月19日 \
        我實在不能理解也無法接受 努力工作直到退休再出去旅遊環遊世界 撇除老了只剩下車尿尿考量以外 這個世界大到用一輩子都看不完 \
        學術地位 政治地位 金錢等這些在闔上眼那刹那完全沒有意義 只有腦海裡留下那些世界各處漂亮的風景才是屬於自己能帶走的 \
        因此哪怕月薪只能養得起自己 都要以自己為主 把錢用在窮旅去看看世界 勝過為了別人埋首於工作 所以 我認為只要有一點錢一點時間 \
        都應該放下一切去看看世界 把上帝留給地球最美的畫面留在自己心裡 用身體去感受風 用眼睛去感受光線 其他 都是假的" },
      { type: "link", content: "https://photos.app.goo.gl/ach1aPjXSD8rrtBW6", label: "2024年10月19日 厲害捏" },
      { type: "link", content: "https://photos.app.goo.gl/8hHZq8FFktUWK8NF7", label: "2024年10月19日 他在幫忙洗地板誒" },
      { type: "link", content: "https://photos.app.goo.gl/Bgm4P1oBHVXPDaAX7", label: "2024年10月19日 我們當年也是 如果有AI就更方便了" },
      { type: "link", content: "https://photos.app.goo.gl/n61exY61cNSoSxot6", label: "2023年10月19日 如果這樣搞我絕對把醫院鬧個天翻地覆 真的滿可惡的 全台灣還有哪間醫院敢這樣把住院醫生趕出宿舍的 唉 辛苦了" },
      { type: "link", content: "https://photos.app.goo.gl/aGfad7iifQzr7kAP9", label: "2023年10月19日 每次好不容易放假 都一大堆外務要各種跑點唉 好想好好看書 煩死" },
      { type: "link", content: "https://photos.app.goo.gl/paU7fhShZUyt9EDFA", label: "2023年10月19日 超好笑 最近有一堆假帳號小粉紅 特別來我拍的101底下找罵討 我是不介意啦 但只有兩三個戰力會不會太弱了 而且這是為什麼啦XDDDD" },
      { type: "link", content: "https://photos.app.goo.gl/zq3pMRekwZfqLtf16", label: "2023年10月19日 \
        幸和殿手作料理 真正隱藏在內湖的日本料理 能夠形容的詞無非就是 道地 從用餐環境擺飾碗盤到食材都讓我彷彿身處日本 明太子雞肉串跟蒜味蛤蜊湯讓我驚艷 \
        卡到好處的口感跟香味俱全 還有外型就非常可口的鮭魚炒飯 一碗就夠我們兩個吃 喜歡暫時體會在日本街頭吃飯的感覺 很推薦這家喔 不過價格也不便宜 \
        加上服務費 我們兩人正常食量就吃了1500元了啊 得了懶惰症 但還是決定繼續紀錄美食" },
      { type: "link", content: "https://photos.app.goo.gl/zdHueKCDdjWt2Zyv7", label: "2023年10月19日 \
        線香是越南傳統手工的一部分 這次報名當地攝影導遊 是一位英國留學後 做完正職卻毅然朝著攝影夢想的小哥帶領 流利的英腔跟中文 還有幫忙協調行程及擺拍 \
        其實最後這畫面只有十分鐘的拍攝時間 過程中多是參觀廠房 了解製作的不容易 消磨竹子的過程非常多粉塵 工人都戴兩層以上的口罩 這做久了一定職業病 \
        畢竟這些小粉塵吸入後會慢慢沈積在肺部 拍攝完我們相機鏡頭也全都粉塵了" },
      { type: "link", content: "https://photos.app.goo.gl/1TPZ8acM4X2eZEhE6", label: "2021年10月19日 一天的力量來源" },
      { type: "link", content: "https://photos.app.goo.gl/Y6WHFbHoL8jNuA8B8", label: "2020年10月19日 規劃財務 克制慾望 不能被錢追著跑" },
      { type: "link", content: "https://photos.app.goo.gl/WEWzzjeXuEzgzJYf6", label: "2018年10月19日 軍費才是最慘的" },
      { type: "link", content: "https://photos.app.goo.gl/n2Cn85anD1HLzjyC7", label: "2018年10月19日 我在天上飛 活像隻被蜘蛛絲纏著的白癡 害我以為我女友被繩子綁住嚇一跳" },
      { type: "link", content: "https://photos.app.goo.gl/zYbQQ3AiaWGHfGU2A", label: "2018年10月19日 政府背信軍公教 政府先對不起軍公教 那軍公教能撈能混只是剛好 少在那邊抹黑軍公教還一付自私嘴臉" },
      { type: "link", content: "https://photos.app.goo.gl/HCuxgQTzKcKRq2v16", label: "2017年10月19日 OMG 東京狂 日本狂 實習狂 大家好我是實習醫師 繁忙之餘拍照舒緩壓力 一個不小心越玩越深 這次到東京實習一個月 在日本的狂照片" },
      { type: "link", content: "https://photos.app.goo.gl/PrMM9xFbrM7GGebS7", label: "2017年10月19日 喝 吃 下班族醫生好瘋 想醉了 超高濃度清酒快醉" },
      { type: "link", content: "https://photos.app.goo.gl/QxxB37bMTXbSBbF37", label: "2017年10月19日 正因為不斷挑戰不可能 每天都過得不輕鬆 修圖完畢 睡覺" }
    ],
    "20": [
      { type: "link", content: "https://photos.app.goo.gl/VvKBV7ZxvTHDjtqF7", label: "2025年10月20日 \
        今天出公差協助OSCE模擬考評分 結果有醫學生請病人用沒有背靠的方式 先做45度仰臥然後開始檢查 \
        就是仰臥起做一半的姿勢 我看了三分鐘病人好像快撐不下去 趕快請他躺下 模擬病人真是太辛苦了" },
      { type: "link", content: "https://photos.app.goo.gl/TmsR88d47rT68mUo8", label: "2025年10月20日 好想再去" },
      { type: "link", content: "https://photos.app.goo.gl/zWbzwhho6VFSwDbk6", label: "2025年10月20日 這個圖真好用" },
      { type: "link", content: "https://photos.app.goo.gl/FbrGsgG8jxSxutQw9", label: "2025年10月20日 我覺得他是感動的哭哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/uJPKEjZYEXHHVV2F7", label: "2025年10月20日 必須要有錢 我也想要" },
      { type: "link", content: "https://photos.app.goo.gl/BfXVYpzBT7x5S6Ts9", label: "2025年10月20日 這樣很棒啊哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/w9cjBSSv62ma9ZR26", label: "2025年10月20日 扯哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/wozvBGWVeeY5HbPu9", label: "2025年10月20日 超級讚" },
      { type: "link", content: "https://photos.app.goo.gl/KKw86XDUizu2JYmT8", label: "2024年10月20日 很嚴格捏 但重點不是外表 而是心態 那種想要爽完就跑不認真的男生 才是不行的真正原因" },
      { type: "link", content: "https://photos.app.goo.gl/gDnwdF18HoB6euk8A", label: "2024年10月20日 好羨慕 想去練" },
      { type: "link", content: "https://photos.app.goo.gl/5aVuNN553XQvgAjf9", label: "2024年10月20日 請問CXR可能猜測的診斷是是ADHF with pulmonary edema predipitated by ACS嗎" },
      { type: "link", content: "https://photos.app.goo.gl/VSGWavHtQycy5qER6", label: "2024年10月20日 貓貓表示要好好看看上班的傻瓜" },
      { type: "link", content: "https://photos.app.goo.gl/MGPticVKj7Eako1aA", label: "2023年10月20日 超愛 這個攝影師拍的河內街景超對味 可惜回國才發現他的作品 可惜了 一定要再回去拍" },
      { type: "link", content: "https://photos.app.goo.gl/fw3FNTEAxkeuUtvG9", label: "2023年10月20日 淋小雨跑步比較舒服 但還是很沒力" },
      { type: "link", content: "https://photos.app.goo.gl/it4voNwFP4fRirfh7", label: "2023年10月20日 \
        這些作品實在有夠震撼 地球實在有夠美 什麼學術地位 金錢權力 酒池肉林我真的一點興趣都沒有 那些都無法撼動內心 去看看這星球多美 去看看星空的絢麗 \
        窮盡己力把他們拍攝下來 最後享受著現場帶來的光線跟和風 這才是人出生的理由 若上帝賦予你生命生於地球 而你卻不知地球之美 只眷戀人類文明所創的虛假制度跟物質 那真的白活了" },
      { type: "link", content: "https://photos.app.goo.gl/zs5MSgGsbjP2EE6f7", label: "2023年10月20日 \
        如果我老了 我會把錢全部用在自己身上 12天紐西蘭拍攝 費用我估計30萬台幣 等我退休以後這輩子一定要帶一起參加一次 加上其他費用大概70萬台幣跑不掉 \
        70萬圓我這輩子的夢想或許是貴了點 但錢留給後代沒什麼意義 自己辛苦的成果 一定要留給自己享受 這也是時代的趨勢 以此為目標 勉勵自己繼續忍耐這高壓的工作" },
      { type: "link", content: "https://photos.app.goo.gl/7B2yiLpY3hKQdn56A", label: "2022年10月20日 腎臟內科報告終於結束 從沒想過我會弄懂RTA 不過也只懂皮毛 林校長一發言COMMENT 還是一堆聽不懂的" },
      { type: "link", content: "https://photos.app.goo.gl/9h31UeM7Bx9fFR3r8", label: "2021年10月20日 好奇為什麼投入股市第一年年底是1.1元 會穩定10%這麼多嗎 正常來說感覺是1.05元+股利" },
      { type: "link", content: "https://photos.app.goo.gl/Moeyg2giuzYv2bDY6", label: "2021年10月20日 \
        新竹太味發南洋小吃店 有別於傳統的餛飩跟蝦餅 走高檔精緻的路線 份量跟口味讓人超滿意 蝦雲吞肉燥的那塊肉燥 除了外型特別 還非常好搭配餛飩跟配菜 \
        豪華叻沙除了有肉質鮮美的大蝦仁 還有肥厚的牡蠣 最後是蝦餅 與美乃滋更是加分再加分 旁邊就是停車場 也沒有太久的候位 吃飯時環境也不會吵雜 我覺得算高檔" },
      { type: "link", content: "https://photos.app.goo.gl/EtKoD7f9Sv6BGi6M7", label: "2020年10月20日 台北ㄉ天氣也可以像春風一樣嗎 通勤族真的很可憐 冷死濕死樣樣來" },
      { type: "link", content: "https://photos.app.goo.gl/a8eBjzJ45mXTiBsY8", label: "2020年10月20日 \
        小弟y2臨床上有個病人滿奇怪的 求眾朋友給點想法QQ 60多歲男 病史是HCVD HTN HCV 並且數十年前因肝硬化接受肝臟移植 最近的病史是去年ich at right basal ganglion \
        與數週前因PSA高而去他院做prostate切片 無法取得結果 原先是走路行動與意識正常的 本次因早上進廁所時雙下肢無力到自己坐在地上 沒有意識喪失 被老婆發現後送急診 \
        也發現其右腳腫的狀況不過後來住院第四天左右自己消了 入院及之後三天大概都有斷續燒到39度上下 抽血比較特別的有ck剛入院18000 腿部超音波 靜脈沒有thrombus CXR沒有特別發現 \
        每天都有尿出快2000 有便秘故開軟便 自從腳無力入院後就沒什麼起來走動 但可正常對答 hcv病毒量尚未有結果 其他病毒或流感均陰性 請問大家有什麼想鑑別診斷的嗎TAT 想了很久實在沒明確頭緒 \
        雙下肢已掃 沒有DVT問題 重點是住院泌尿道感染打抗生素後三天 就好轉了 腹超好建議 謝謝 請問tb spine是因為雙下肢無力 懷疑神經學症狀嗎 \
        鼻孔歌說的有道理 我在追蹤一下 只是那個ck真是莫名奇妙 我很怕是驗錯血 但有兩筆不同編號都驗到18000多 所以應該不可能同時送錯" },
      { type: "link", content: "https://photos.app.goo.gl/MzgWgtQA6Kva16hZA", label: "2018年10月20日 \
        這麼喜歡哀哀叫大學畢業沒工作家裡又沒錢 不會讓小孩讀軍校嗎 軍校那麼好考 考不上沒學歷隨便都能當志願役 \
        來海軍一個月薪水五六萬起跳 怎麼不來 不敢吃苦又想做自己喜歡的工作 是當被強迫去志願役吃苦的人白癡嗎" },
      { type: "link", content: "https://photos.app.goo.gl/4ZYyAtSr5H9ZZ9D7A", label: "2018年10月20日 起碼想走內科的醫師願意吃苦還是能選內科 某醫院軍費生就算吃苦想選內科還不一定選的到 想內科的被丟去外科 想外科的被丟去內科 都是有可能" },
      { type: "link", content: "https://photos.app.goo.gl/zut5y5suFMh2f8jL8", label: "2018年10月20日 少到可憐的假期 但好開心這一天半我得北中南跑的疲憊假期 有你願意陪我 偷偷說這是全場最可愛的女子" },
      { type: "link", content: "https://photos.app.goo.gl/1ktL1WRo83MN9q5K6", label: "2018年10月20日 雖然考到照了但還是忘不掉當intern時被副院長電的情景 小菜鳥跑去跟三總副院長social 被電翻的廢intern" },
      { type: "link", content: "https://photos.app.goo.gl/6RsKfdxusoFYpaUu7", label: "2018年10月20日 台中葳格國際會議中心 大學七年第一次參加學長姊婚禮不是來拍照的 不過 這輩子不會再拍婚禮啦哈哈" }
    ],
    "21": [
      { type: "link", content: "https://photos.app.goo.gl/3JyAvqajY3JSXREn8", label: "2025年10月21日 越南超讚 我猜要去對地方" },
      { type: "link", content: "https://photos.app.goo.gl/f2MLMjwgcCN1fFHQ9", label: "2025年10月21日 請問是空拍機拍攝的嗎" },
      { type: "link", content: "https://photos.app.goo.gl/4CXxtQF8Q5QZdNod6", label: "2025年10月21日 希望他找到家" },
      { type: "link", content: "https://photos.app.goo.gl/SybcRztAZMKc9JjEA", label: "2025年10月21日 幹 這麼明顯這麼鐵錚錚的事實 用媒體的力量造謠說謊用 還能容許NCC的人 跟當初能容忍中天的人有什麼不一樣xdd" },
      { type: "link", content: "https://photos.app.goo.gl/ksZsjXQHPTpC4cAy9", label: "2025年10月21日 外表光鮮亮麗的父權社會的智障Y" },
      { type: "link", content: "https://photos.app.goo.gl/BXuuSJZLg7jKb4er9", label: "2024年10月21日 但只要沒辦法確定 就是不確定 不是100%就不是純了啊 沒有任何檢測方式知道是不是純" },
      { type: "link", content: "https://photos.app.goo.gl/PuS1XAubjH6divMt7", label: "2024年10月21日 異性不可能有純友誼 因為誰也無法猜透對方內心到底在想什麼 這個就是一個例子" },
      { type: "link", content: "https://photos.app.goo.gl/KGdD1SyHTdHggC3j9", label: "2024年10月21日 感恩惜福 希望自己未來也能把東西再傳承下去" },
      { type: "link", content: "https://photos.app.goo.gl/sJ2Uvgek1NnMfKRc9", label: "2024年10月21日 好猛 我從小到大還沒收過這種生日禮物欸 倒是檯燈要繳回家" },
      { type: "link", content: "https://photos.app.goo.gl/iB8e21jr5xJpevfw6", label: "2024年10月21日 蛤貓欸" },
      { type: "link", content: "https://photos.app.goo.gl/DiLz62TEiponbLBa7", label: "2024年10月21日 萬聖節打扮" },
      { type: "link", content: "https://photos.app.goo.gl/8jFcHqaC94qcrNTo8", label: "2024年10月21日 好 走" },
      { type: "link", content: "https://photos.app.goo.gl/UPsg1S9QrQpwBPbW6", label: "2023年10月21日 陳建賓生日快樂" },
      { type: "link", content: "https://photos.app.goo.gl/1sfwYtLhtTAKNsRo6", label: "2022年10月21日 來腎臟科聽到一個有趣的問題 請問正常的UAG是多少 答案在下一頁 可以思考一下再往下翻 \
        如果回答UAG在正常情況下<0 是一個不完全正確的答案 因為如果一個正常的人 去驗UAG 會發現UAG是>0 \
        正確的答案應該是 在酸血症的情況下 UAG應該要<0才是正常 要特別把前提確立清楚 NEP真是充滿學問的一科" },
      { type: "link", content: "https://photos.app.goo.gl/HXApkdWF5nY4xWR56", label: "2022年10月21日 怎麼很像阿幼生病的時候" },
      { type: "link", content: "https://photos.app.goo.gl/ikpoya4qiG8k6hKK8", label: "2021年10月21日 也未免太厲害" },
      { type: "link", content: "https://photos.app.goo.gl/p62MjQDUekvZfcvq6", label: "2021年10月21日 病人從2X個變成剩下14個 好像有輕鬆一點了 就一點 一點 點" },
      { type: "link", content: "https://photos.app.goo.gl/KR1XvWfpWtrtFYKt7", label: "2021年10月21日 家的溫暖" },
      { type: "link", content: "https://photos.app.goo.gl/Dk6qR9zBvcwFG6Si7", label: "2021年10月21日 學長其實我覺得講裝病不太對 這種環境真的會讓人生病 只是大多數人選擇繼續忍耐" },
      { type: "link", content: "https://photos.app.goo.gl/yd5RKd9HM6EJ5sMT9", label: "2020年10月21日 主治要我隨便報就好 但第一次認真花超過6個小時做ppt 晚上完全沒陪到 用了一大堆時間看到眼睛花" },
      { type: "link", content: "https://photos.app.goo.gl/GGpVpmCovVrScat57", label: "2020年10月21日 這些字真的小到靠北 筆記也得寫的小到靠北 現在還看的清楚 但十年後說不定就慢慢看不清楚小字了 希望能在看不清楚之前記進腦袋" },
      { type: "link", content: "https://photos.app.goo.gl/22hd7dg3ZFYLhB6X7", label: "2020年10月21日 腎功能正常的狀況做追蹤 Creatinine&BUN只抽一個的話 大家會抽哪個" }
    ],
    "22": [
      { type: "link", content: "https://photos.app.goo.gl/sPPXWbpuCXnS2a626", label: "2025年10月22日 差多了 我衣服都有攤平 只有襪子懶得反面" },
      { type: "link", content: "https://photos.app.goo.gl/2KewroPG5Ny9rBi2A", label: "2024年10月22日 醫師也一樣吧 留在大醫院的住院醫生血汗到不行 去診所那麼舒服 有機會都馬走醫美跟小科去了" },
      { type: "link", content: "https://photos.app.goo.gl/uGBwiBFEqhDsrzDH9", label: "2024年10月22日 完全正常 台灣醫師護理師這種北七低薪你還期待有多少人力在第一線顧病房 還有機會等 還沒崩盤你就要偷笑了" },
      { type: "link", content: "https://photos.app.goo.gl/CdvchWk2kXDCsZ6n6", label: "2024年10月22日 有這樣的貓貓你會幾點回家" },
      { type: "link", content: "https://photos.app.goo.gl/z1FbrSSMczoAdcZQ6", label: "2024年10月22日 好啊" },
      { type: "link", content: "https://photos.app.goo.gl/Kauczpug94WqUCgP9", label: "2023年10月22日 這個色調太越南了 我都還不會" },
      { type: "link", content: "https://photos.app.goo.gl/41ifjU4Q9oXvXcBv6", label: "2018年10月22日 \
        一天半的超短假期 得從基隆到台中到台南跑個累死 跟女友一起參加學長的婚禮 穿著軍服出場氣勢完全不同 回去看了國中導師 差點嚇到嫑嫑 老師這幾十年長的完全一樣啊 \
        一條皺紋都沒有多 還是跟以前一樣活力啊 然後去看一個巨星的誕生 還以為是ladygaga自己的傳記結果不是 整體而言不錯的劇情安排只是少了些高潮迭起 \
        讓我最想流淚的不是結局而是開始沒有很久 男主角邀女主角一起上台 要他不要害怕出場 小酒吧的一句話 在場每個人都有他自己的天份 但是不表達出來就沒有人知道 必須要用別人能接受的方式表達 \
        我內心很澎湃也很難過 真的好想用力做真正想做的事情 一直以來逃脫不了這個體制 即便一開始就很討厭依然被逼著進來 多想要有自由 自己爭取舞台實現夢想 \
        最後很謝謝很辛苦的陪我南北跑 一起完成很多事情 妳真的好棒 謝謝妳包容我貪心的想在短到靠北的假日做很多事 真的真的沒有任何人能取代妳 考試加油囉 期待不知道哪時能再有的放假" },
      { type: "link", content: "https://photos.app.goo.gl/mQxrCSsnvzLHTkRA6", label: "2018年10月22日 自己加油每公升降0.8又不用排隊 原本打算加20沒想到輕輕壓就40元" },
      { type: "link", content: "https://photos.app.goo.gl/jxJbZQScPiGo5rtt5", label: "2017年10月22日 手打ちうどん天下一" }
    ],
    "23": [
      { type: "link", content: "https://photos.app.goo.gl/zaPqrxrCAA2ApyLQ9", label: "2025年10月23日 \
        我在他這個年紀也是畫青眼白龍 孫悟空 還有自己的連載漫畫 結果上國中被逼著讀書從此跟美術無緣 小弟弟千萬別像我這樣荒廢了 好好保持這個天賦啊" },
      { type: "link", content: "https://photos.app.goo.gl/YJjutXDZdKhUKuXC9", label: "2025年10月23日 多數這種發言的人都知道自己多丟臉用假帳號 但你居然敢申請藍勾勾 讓大家知道你多丟臉 也是不簡單 respect" },
      { type: "link", content: "https://photos.app.goo.gl/2HA2TTbL1GUgYiAo6", label: "2025年10月23日 點開ig 開始編故事 看看多少人受騙 啊等等 粉絲人數怎麼才554" },
      { type: "link", content: "https://photos.app.goo.gl/5UNGsZLZutvjXtsS8", label: "2025年10月23日 根本兒子寶哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/CfM77PMdHrihSrXE6", label: "2025年10月23日 他感覺超爽的哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/f1hpaLNX76EHyQRX7", label: "2025年10月23日 去日本買" },
      { type: "link", content: "https://photos.app.goo.gl/FUkTcpmfWJ9cDwdAA", label: "2025年10月23日 原來如此 謝謝您 想走來這裡拍" },
      { type: "link", content: "https://photos.app.goo.gl/ws7NoLAzeL4EbXUz5", label: "2025年10月23日 請問第三個影片拍攝點是哪呢 謝謝" },
      { type: "link", content: "https://photos.app.goo.gl/axDw6x5qrpb2hSR16", label: "2025年10月23日 八仙瀑布 傾瀉而下的晨光 與晨霧水氣交織 很久沒有再訪這個景點 對於大自然的熱愛與憧憬 還是得先靠著照片慢慢醞釀" },
      { type: "link", content: "https://photos.app.goo.gl/xkzQWqNBBQAGmXAdA", label: "2024年10月23日 你會幫礦開order嗎 會跟礦病解嗎 不會的話怎麼能用當礦來形容 顧RCW也需要一定內科水準 找路邊阿貓阿狗來顧 說不定連病人快死了都不知道" },
      { type: "link", content: "https://photos.app.goo.gl/hAEhdAMpPaR8KodJ6", label: "2024年10月23日 超氣啊 醫師在醫院都做功德 一個月業績數百萬的 薪水只拿到幾十萬 犧牲夢想犧牲家人犧牲健康 結果待遇這樣差超可憐 台灣健保倒一倒 醫師的薪水才會合理" },
      { type: "link", content: "https://photos.app.goo.gl/NQ2PuM9Um5NEg1yZ7", label: "2024年10月23日 有撫慰到上班上到心累的我了嗚嗚嗚嗚" },
      { type: "link", content: "https://photos.app.goo.gl/R5ZPxCqvz5uuML378", label: "2024年10月23日 哇靠好慘" },
      { type: "link", content: "https://photos.app.goo.gl/9c3CWtDCLaH3aCHGA", label: "2024年10月23日 學長你們值得更好的薪水啊啊啊" },
      { type: "link", content: "https://photos.app.goo.gl/73eUjFhzKfS3Q4z6A", label: "2024年10月23日 這真的很過份" },
      { type: "link", content: "https://photos.app.goo.gl/DgwFfCmdDQxBT2Vk7", label: "2024年10月23日 原本快睡著了 現在醒了 這個可以當鬧鐘" },
      { type: "link", content: "https://photos.app.goo.gl/9xbhedKC66AD6xn99", label: "2024年10月23日 不能一直聽" },
      { type: "link", content: "https://photos.app.goo.gl/mR9Zur89swWoBZK8A", label: "2023年10月23日 太越南了 以後一定懷念爆我們走過的街頭" },
      { type: "link", content: "https://photos.app.goo.gl/TNJ3BP9NeaVEURH8A", label: "2023年10月23日 今天副院長一早打來嚇我一大跳 以為自己做錯什麼事 沒想到居然送我一個超棒的相機包 實在太感動了 真的是來自三總的溫暖" },
      { type: "link", content: "https://photos.app.goo.gl/wRzrh1QoxsoCS6PH6", label: "2022年10月23日 \
        這篇文真的凸顯台灣健保養肥民眾的錯誤觀念 多麼慷醫護之慨 繳那個少到跟屁一樣的健保 享受著優於中國美國歐洲的醫療待遇 還敢出來裝受害者 身在福中不知福" },
      { type: "link", content: "https://photos.app.goo.gl/o4Hm2Hj2b6w2rQy36", label: "2022年10月23日 怎麼那麼多寶寶" },
      { type: "link", content: "https://photos.app.goo.gl/vF6KusALxJ2B4fpg6", label: "2022年10月23日 \
        這是什麼心律 一位主訴近一個月偶爾胸悶 合併運動喘的病人 懷疑AV block入院 這是什麼心律 \
        首先並非每個P後面都接QRS 因此不是一度AVB 因為沒有觀察到漸行漸遠 因此二度一也不像 再來則是二度二high degree跟三度 起初我以為是二度二 結果主治醫師來診認為是high degree甚至三度 \
        一問之下才知道細節 我原先以為二度二是當作兩個P之間只有第一個P有傳下去 但仔細觀察會發現 我以為的P後面跟著QRS 他們其實並沒有關係 因為好幾個P跟後面QRS幾乎黏在一起 \
        對於AVB的病人實在不可能 就算一度至少也會隔0.2秒 一大格的距離 因此P緊黏著QRS 代表他們很可能各自跳 只是間隔剛好在旁邊 \
        有陸續幾個junctional的心室跳動 這是P完全沒有下傳 但心臟自救 因此對於這個心律 主要還是心房及心室各自跳動 屬於三度為主 \
        U wave確實在bradycardia會比較清楚的看到 如果單純以心電圖來說我會看lead II 以這張心電圖來說在寬度 震幅跟位置確實有可能U \
        不過病患本身沒有electrolytes問題 沒低體溫 可是我沒親眼看過u的case 若有經驗的前輩歡迎分享 謝謝" },
      { type: "link", content: "https://photos.app.goo.gl/7EYgi9Nuv1gcrSVi9", label: "2022年10月23日 實用" },
      { type: "link", content: "https://photos.app.goo.gl/y7ZWWD788cM7UdJH9", label: "2020年10月23日 請問大家  像這樣的鈣化 會覺得有意義嗎" },
      { type: "link", content: "https://photos.app.goo.gl/eDfJ61GzLLnkW7dc9", label: "2020年10月23日 \
        雖然好像只能當內科醫師 雖然好像也滿有趣的 但想到值班都會像這樣 常常睡沒兩小時就被挖起來一下 還必須一秒打醒自己進入緊急狀態拼命思考如何處理危急病人 \
        就會猶豫是不是要這樣過一輩子 唉如果當初能有更多選擇就好了" },
      { type: "link", content: "https://photos.app.goo.gl/vpDukYDnEHTjeDiP7", label: "2020年10月23日 感謝適時給予諸位內科值班醫師 知識與身心的支持" },
      { type: "link", content: "https://photos.app.goo.gl/mxzkJHaVuuXTnMZi9", label: "2018年10月23日 超美的 駅の前は綺麗です 我就是超級宅 才會一直住在你心裡啦" },
      { type: "link", content: "https://photos.app.goo.gl/dKFnmAuBLzuhXkCE6", label: "2017年10月23日 外面出大景 我在醫院乾瞪眼" },
      { type: "link", content: "https://photos.app.goo.gl/KJLoeVyVbq8MvijEA", label: "2017年10月23日 讀的有點痛苦" },
      { type: "link", content: "https://photos.app.goo.gl/A3GUuisjRxKHugt48", label: "2017年10月23日 在日本第一次被拖吊 罰單5000" },
      { type: "link", content: "https://photos.app.goo.gl/97LJ8k836gg5yiv1A", label: "2017年10月23日 天氣超好 好想拍東京人像 好想拍東京夜景 不想開會不想上班啊啊啊啊" }
    ],
    "24": [
      { type: "link", content: "https://photos.app.goo.gl/xKy8mAKTkxo3uKgm9", label: "2025年10月24日 不是 是被逼迫的你自己當醫生就知道" },
      { type: "link", content: "https://photos.app.goo.gl/crGSBhoHvHRdfpjG6", label: "2025年10月24日 學弟沒事啦 這個學長真的是詐騙帳號 小事情別在意" },
      { type: "link", content: "https://photos.app.goo.gl/JSmQg1eX4RjK6NmT8", label: "2025年10月24日 這麼經典的case 這一年遇到第二次了 發現好多人都答對 太厲害了 感謝主治醫師帶我看到這麼好的case" },
      { type: "link", content: "https://photos.app.goo.gl/DAYyoo1Y2QPHzK9AA", label: "2025年10月24日 \
        章魚壺心肌症 Takotsubo Cardiomyopathy 70歲女性某日與人爭吵後發生胸悶痛來診 心電圖及心臟超音波檢查後 懷疑心血管疾病 \
        但檢查後發現是很經典的章魚壺心肌症 Apical ballooning類型 心尖不動 容易產生血栓 也容易有LVOTO 及MV systolic anterior movement SAM而導致MR \
        心導管測量EF只有36% 後續治療為維持抗血栓及HFrE用藥" },
      { type: "link", content: "https://photos.app.goo.gl/fuJCDVML8doP7cJ66", label: "2025年10月24日 這是真的" },
      { type: "link", content: "https://photos.app.goo.gl/tha6HpDzurGeNeQGA", label: "2025年10月24日 你也是ㄚ" },
      { type: "link", content: "https://photos.app.goo.gl/h7EM39snJ7TWqJYm7", label: "2025年10月24日 我覺得都普通 你比較棒" },
      { type: "link", content: "https://photos.app.goo.gl/2r4eHqWQerN2qKub7", label: "2025年10月24日 我都吃不到" },
      { type: "link", content: "https://photos.app.goo.gl/CA2kg387ZsB58Z4c9", label: "2024年10月24日 跟統神結婚還有小孩應該是003這輩子最錯誤的決定XD" },
      { type: "link", content: "https://photos.app.goo.gl/8Vs33xvZdJJUgokb9", label: "2024年10月24日 除了以外我應該都會 可以 上班不用那麼累的時候提早回家準備就好" },
      { type: "link", content: "https://photos.app.goo.gl/ADRH6dkci511nsWx9", label: "2024年10月24日 貓貓也愛吃鹹酥雞欸" },
      { type: "link", content: "https://photos.app.goo.gl/aThBygMiMGTBDFcK8", label: "2024年10月24日 好好笑 我以為他在吃飯糰" },
      { type: "link", content: "https://photos.app.goo.gl/YWi23oymPQezPrgv9", label: "2024年10月24日 感恩惜福 學長傳承的愛心 會好好珍惜閱讀的XDDDD" },
      { type: "link", content: "https://photos.app.goo.gl/cE8Syw4x4qTCcEhf7", label: "2022年10月24日 \
        拂曉 生活分享 和無力感相伴 是醫學這個職業與眾不同的地方 這樣的無力感 並不是只來自經濟壓力及高工時 更多的是怨嘆自己的渺小 \
        面對家屬時 總需要先鼓起勇氣才能告知病危與面對情緒反應 面對疾病時 總是需要再再抽絲剝繭才能追上進展的腳步 面對自己時 總是需要承認知識的貧乏與醫學的不確定性 \
        拍照對我來說 並不全是舒壓 而是拍照的當下 能把自己當作單純的攝影師 專心在創作畫面 逃避這些沈重的無力感。" },
      { type: "link", content: "https://photos.app.goo.gl/zc5xRkydjUJHhaAQA", label: "2022年10月24日 現在超愛這種銳利又乾淨的後製方式 希望以後有機會學習這種風格" },
      { type: "link", content: "https://photos.app.goo.gl/zBbK3MU2so4Qw8fMA", label: "2022年10月24日 \
        三軍總醫院夕陽 和無力感相伴 是醫學這個職業與眾不同的地方 這樣的無力感 並不是只來自經濟壓力及高工時 更多的是怨嘆自己的渺小 \
        面對家屬時 總需要先鼓起勇氣才能告知病危與面對情緒反應 面對疾病時 總是需要再再抽絲剝繭才能追上進展的腳步 面對自己時 總是需要承認知識的貧乏與醫學的不確定性 \
        拍照對我來說 並不全是舒壓 而是拍照的當下 能把自己當作單純的攝影師 專心在創作畫面 逃避這些沈重的無力感" },
      { type: "link", content: "https://photos.app.goo.gl/tSFYkAW53crFQWpbA", label: "2022年10月24日 \
        內專FC含精神科皮膚科 基本上只有精神科稍微畫記幾頁而已 如圖 還有首頁蓋姓名章 其餘全新無使用過痕跡 台北可面交 若7-11寄送需付運費70元" },
      { type: "link", content: "https://photos.app.goo.gl/szjLiiBBBzefgEa3A", label: "2021年10月24日 今天早上真的慘烈 昨天值班睡不到兩小時" },
      { type: "link", content: "https://photos.app.goo.gl/d5pBQo7QQaqdSmYq9", label: "2020年10月24日 軍費生就是把自己的青春年華僚下去啊 唉" },
      { type: "link", content: "https://photos.app.goo.gl/HEnAFDBwaQK7zmWD8", label: "2017年10月24日 站就要站穩 站高" },
      { type: "link", content: "https://photos.app.goo.gl/RHMH3mpib1qCSy7XA", label: "2017年10月24日 要在醫院做報告做到九點了 拼個" },
      { type: "link", content: "https://photos.app.goo.gl/emsZACd5DYMNXLhK9", label: "2017年10月24日 願你是和煦的晨曦之光 朝朝相見" }
    ],
    "25": [
      { type: "link", content: "https://photos.app.goo.gl/5ZyQo8QTYHnXqHEr5", label: "2025年10月25日 第一次認真的吃和牛 30歲了終於有口福鳴嗚嗚嗚嗚" },
      { type: "link", content: "https://photos.app.goo.gl/sMfZ8FSMotRVkDnH9", label: "2025年10月25日 每一口和牛下肚 胃都在大聲抗議 還不夠 還不夠 還不夠啊啊啊" },
      { type: "link", content: "https://photos.app.goo.gl/Gq68jJkmLAtfbAk58", label: "2025年10月25日 提早慶祝生日" },
      { type: "link", content: "https://photos.app.goo.gl/NRb3AzrRB7hri2cf8", label: "2025年10月25日 大後期電刀可以換晨星嗎 錢很多的話" },
      { type: "link", content: "https://photos.app.goo.gl/r1X442AjquK11LTP6", label: "2025年10月25日 請問有成果解鎖嗎" },
      { type: "link", content: "https://photos.app.goo.gl/yrZwvsqSuyoTQWeD8", label: "2025年10月25日 我也是跟著BK選內科的" },
      { type: "link", content: "https://photos.app.goo.gl/MXHrzytgto5JgBqo9", label: "2025年10月25日 小飯糰卡車" },
      { type: "link", content: "https://photos.app.goo.gl/WpwDdrnJT8uAap9N8", label: "2025年10月25日 下次約" },
      { type: "link", content: "https://photos.app.goo.gl/SqQVtGBgUeef73QK7", label: "2025年10月25日 學長該去該去" },
      { type: "link", content: "https://photos.app.goo.gl/zb5Q9r4VnXKxXa896", label: "2025年10月25日 欠錢不還上什麼新片" },
      { type: "link", content: "https://photos.app.goo.gl/ttkXmbhno9XDk1ni7", label: "2025年10月25日 因為這是急診病人 有時間都會掃echo" },
      { type: "link", content: "https://photos.app.goo.gl/M2nVEeULeFM6Mt4M9", label: "2025年10月25日 看吧 這個學長又再詐騙了 不要相信他" },
      { type: "link", content: "https://photos.app.goo.gl/d9WPfoHoU5CzqVsP9", label: "2024年10月25日 前天跑了3公里暖身 昨天健身房練了一小時大小腿 今天再跑4.7公里 體感很明顯自己變的很重 步伐邁不開而且無法加到三分速 現在真的很容易生病跟受傷" },
      { type: "link", content: "https://photos.app.goo.gl/b87P8sXN1XsZzF787", label: "2024年10月25日 好想出國" },
      { type: "link", content: "https://photos.app.goo.gl/BKRtusBQJE9HHDHb6", label: "2024年10月25日 是一隻跟我們一樣的杜估貓貓" },
      { type: "link", content: "https://photos.app.goo.gl/x8PLis3ft6WZG7Sn7", label: "2024年10月25日 對" },
      { type: "link", content: "https://photos.app.goo.gl/BuRSGRUwGEjXLf9a7", label: "2024年10月25日 也太可愛" },
      { type: "link", content: "https://photos.app.goo.gl/FeG67Fy949REn49R8", label: "2023年10月25日 \
        DJI M3C比較特殊 零件壞了沒辦法換 送修只有整台換新的這選項 這台全新 花了1300元台幣 所以才說CARE要買爆 \
        若能維持目前的產品品質跟售後服務 價格不要太誇張 功能不要綁手腳 絕對全球第一首選" },
      { type: "link", content: "https://photos.app.goo.gl/NvZW9CP8pV1G6Ysx6", label: "2023年10月25日 \
        必須誇獎大陸的公司 售後服務是我目前體驗過第一名 遠勝台灣跟日本很多企業 實話有一說一 24小時淘寶線上客服 不用打電話聽永遠的忙線中 就算半夜三點發訊息 \
        五分鐘內也會有人工親自回覆 他們也真的能查到資料跟幫忙溝通 不是打醬油 送飛丟一次跟修理一次 一個禮拜內處理完 數次要求他們打電話來跟我聯絡 都有做到 \
        送修直接有快遞親自來上班的地方領取 不用跑遠門 DJI必買CARE 一定買好買滿 不論飛丟還是送修 價格真的實惠 給推" },
      { type: "link", content: "https://photos.app.goo.gl/vdbdK4rzK3x11nT78", label: "2023年10月25日 學長生日快樂 一直以來秉持正義跟勇敢 對抗著這國家的惡權及惡霸 辛苦了 祝永遠健康 平安" },
      { type: "link", content: "https://photos.app.goo.gl/G54VbGzMa77G1bbY7", label: "2023年10月25日 已經連續三次在MI2值班都半夜兩點後送走病人" },
      { type: "link", content: "https://photos.app.goo.gl/w6UfPzPu7FhQ8iSH6", label: "2022年10月25日 總覺得每天都被搾到沒私人時間 壓力很大 感謝學長鼓勵" },
      { type: "link", content: "https://photos.app.goo.gl/Uggejk7DXAoQ1H1X9", label: "2020年10月25日 除了緊急預備金 我還想過 台灣開戰的預備金 若真的有萬一 準備幾千塊美元的現金之類的 這樣不管是大陸統治或逃去國外都能通用 也不怕銀行倒了 有人也這樣想嗎 不知道這種擔憂是不是很奇怪XD" },
      { type: "link", content: "https://photos.app.goo.gl/5ts7TmBLfUHnQjgV9", label: "2020年10月25日 \
        滿認同護理師薪水應該增加 加到月薪610萬我覺得都是基本的 但醫師嘴巴噴出的一堆order 是無數超過24小時工時照顧病人 多少次的臨床經驗及花費大把下班時間讀書 \
        才有辦法講出來的 並不是故意為難護理師增加您們的工作量 另一回事是醫師在台灣薪水確實太少 臨床科住院醫師月薪20萬才符合其他同醫療水準國家的標準" },
      { type: "link", content: "https://photos.app.goo.gl/nbfjtGk4TP4YWtMz5", label: "2019年10月25日 心好累 半天從高雄到台北三總 這絕對是最後一次 謝謝女友讓我能中途休息 半年沒回來" },
      { type: "link", content: "https://photos.app.goo.gl/Em1y3gFZ88tT9Mv67", label: "2019年10月25日 出外靠國醫人 感謝學弟 能休息一晚 然後明天再殺回去" },
      { type: "link", content: "https://photos.app.goo.gl/zngY886fR88mSTbr8", label: "2017年10月25日 \
        Top standing 蘭嶼lanyu 有些人詢問攝影後製的家教 目前規劃 一人一小1000 共兩小 兩人一小800人 共兩小 超過一些不多收 有興趣請小盒子私或fb上詢問唷" }
    ],
    "26": [
      { type: "link", content: "https://photos.app.goo.gl/9TysVMczuBA1sAoAA", label: "2025年10月26日 \
        所有內外婦兒急這種第一線值班救人的主治醫師 在台灣這種物價房價之下 少說也要保障40萬月收入以上才合理 \
        憑什麼一堆網紅房東建商富二代每天舒舒服服月入百萬 牙醫工程師也是月入數十萬以上 但救人的醫護 做最重要的事情 薪水卻遠遠比他們低 \
        這不是制度有問題就是政府官員腦子有問題 不然就是都有問題" },
      { type: "link", content: "https://photos.app.goo.gl/RZvGQREsm32XhjAs9", label: "2025年10月26日 比較可怕的是萬一他沒戴安全帽結果又摔車腦出血 那好心的駕駛下場是" },
      { type: "link", content: "https://photos.app.goo.gl/NnV7XcQQCiBTpQuZ9", label: "2025年10月26日 上網查了一下 發現這個點好像2023之後就絕景拍不到了 有朋友知道這個點還有得拍嗎" },
      { type: "link", content: "https://photos.app.goo.gl/MAppKk5Hn28skWP2A", label: "2025年10月26日 這確實" },
      { type: "link", content: "https://photos.app.goo.gl/jwgGtLnjif6sT9XQA", label: "2025年10月26日 統一回覆確實是比台服好多了隨便同樣造型價格 直購或抽獎 都是台服35折起跳 配對時間比台服快超多 尤其半夜 唯一缺點是偶爾會爆pin" },
      { type: "link", content: "https://photos.app.goo.gl/i4qqxbA5JFxnKcy79", label: "2025年10月26日 根本就沒有是在騙" },
      { type: "link", content: "https://photos.app.goo.gl/gKhwnM5cjskn7wAG7", label: "2025年10月26日 希望他有報應" },
      { type: "link", content: "https://photos.app.goo.gl/QcJp5mY97Zb8Jvc19", label: "2025年10月26日 怎麼那麼漂亮 這樣我就不能發了" },
      { type: "link", content: "https://photos.app.goo.gl/FxRSHDDcip3CaAN2A", label: "2024年10月26日 \
        沒錯醫師都是想賺你的錢 來 你現在應該下定決心 此生不再踏入醫院 千萬別讓任何醫師賺到你的錢 回家之後直接把健保卡剪爛 拒繳健保 加油 你是對的 你一定要做到喲 千千萬萬別再看任何醫師囉" },
      { type: "link", content: "https://photos.app.goo.gl/rRGgnrf8BALLLFD99", label: "2024年10月26日 在台灣讀書是犯法 可能會判死刑的 我想您一定是個守法的好公民 絕對從來不會讀書以免犯法 讚" },
      { type: "link", content: "https://photos.app.goo.gl/5vTL8tvXBoApRb9T7", label: "2024年10月26日 不 這則留言的原主完全不懂男人才有這種發言 在我看來 這就是兩個男孩都沈浸在自己的世界 非常快樂 非常和諧 沒有彼此打擾" },
      { type: "link", content: "https://photos.app.goo.gl/gMM5pdwmErBhT1rf8", label: "2024年10月26日 \
        而且他的假設滿可笑的 今天房東不會只給你漲五千 誰說現在2.5萬租金的未來不會變4萬 而且買房後的漲幅再賣掉的獲利他也沒有計算 只能說是非常單純可愛的幻想" },
      { type: "link", content: "https://photos.app.goo.gl/bGabSvdkckbHNxcT6", label: "2024年10月26日 好笑 塞個錢可能連幾千塊都沒有 人家科技業年終都領到手軟了 你以為under table能領多少 天真啊" },
      { type: "link", content: "https://photos.app.goo.gl/QaPx6tnm5ZVcRnNW6", label: "2024年10月26日 不得不佩服 真的很用心練而且成效卓越 還有推薦的健身房資訊 可以追蹤起來 一起來健身" },
      { type: "link", content: "https://photos.app.goo.gl/kf2xUACdTJSPBdiE6", label: "2024年10月26日 幫推一下 品項保養真的好 價格超便宜 有想買相機私訊他" },
      { type: "link", content: "https://photos.app.goo.gl/HTa71RC2AtfhSGS87", label: "2024年10月26日 我要買這個 吃荷包蛋吃到爽" },
      { type: "link", content: "https://photos.app.goo.gl/wW5j3rovAy5UEFML9", label: "2024年10月26日 年輕女性小球貧血 第一個猜缺鐵性 其他不用再亂想了" },
      { type: "link", content: "https://photos.app.goo.gl/mVPCtjv6qe2ZiGQe9", label: "2024年10月26日 哈哈哈真的ㄟ" },
      { type: "link", content: "https://photos.app.goo.gl/epGqHEsixoXYRxBD7", label: "2024年10月26日 除了走路其他都同意" },
      { type: "link", content: "https://photos.app.goo.gl/pBmj69R58GttgdEc6", label: "2023年10月26日 \
        Hanoi Culture 線香的製作是河內很特別的文化之一 河內傳統藝術種類好多 這次特別帶空拍機拍攝 由上往下俯瞰 線香阿嬤的周圍像是綻放出一朵朵紅花 很是震撼 這個畫面沒有當地攝影導遊帶是拍不到的" },
      { type: "link", content: "https://photos.app.goo.gl/pgNDp7oTd1gGr1GK8", label: "2023年10月26日 北越食宿篇 下一篇是攝影篇 會整理相機跟空拍機的心得跟拍攝注意事項" },
      { type: "link", content: "https://photos.app.goo.gl/rntz4CKWzGvuSoio6", label: "2023年10月26日 \
        下龍灣驚訝洞 食宿篇 住宿 下龍灣溫德姆大酒店 五星級的每晚34000塊就可住到台灣近萬等級的舒適 重點是要求高樓層有陽台的房間 面Sun world方向可在房間拍下龍灣日出唷 \
        大推唷 記得住宿時要求面海陽台及高樓層 印象中可以接近20樓 下龍灣Amanda Halong Cruise郵輪 號稱五星級 但多數郵輪都有點年齡了 沒有那種豪華的感覺反而溫馨比較多 \
        路途不會很晃 有拍照需求建議至少兩天一夜 若只是體驗的話就推薦一天比較省時 因為拍照可以享受隔天清晨在船上飛空拍機 差在這裡而已 而第一天都會有夕陽時英雄島沙灘的最後一站 那裡才是飛空拍的重頭戲 \
        上述飯店跟郵輪兩人兩晚 給Lily代訂共180美金 如果能提早規劃 自己上網預訂可以省更多 河內Scent Premium Hotel 位於老城區 我覺得交通跟服務超讚 價格也便宜 \
        兩晚雙人房6105台幣 一大床一小床空間超大 一走出來就能逛街 但隔音超好睡眠品質很讚 早餐不錯 房間也很乾淨 小小缺點就是沒什麼view \
        美食篇 已去名單 大推下龍灣海鮮餐廳 新鮮便宜 裝潢也漂亮 但份量給超多 連鎖店 下龍灣銀河內都有 老軍式風格裝潢 飲料很甜 大推河內海鮮吃到飽 一個人700台幣要先上網預約 \
        很像漢來 生魚片壽司生蠔螃蟹牛肉都超好吃 但飲料需付費 河內路邊隨便找到的 但椰奶咖啡超好喝 堪比星巴克口感 真的好想再喝 河內河粉名店 高朋滿座但不用等很久 河粉超嫩 湯頭很香 大推" },
      { type: "link", content: "https://photos.app.goo.gl/hrd4VepmWWdHfzdD7", label: "2023年10月26日 又是一個差點爬不了樓梯的腿日 復健老人說想入鏡" },
      { type: "link", content: "https://photos.app.goo.gl/Lzs2snp8bPiuS75z6", label: "2023年10月26日 試了很久 發現色調跟光線不好修很容易過頭 而且直幅被裁切很可惜 真的很喜歡越南這系列 但考驗著修圖" },      
      { type: "link", content: "https://photos.app.goo.gl/xdNtgTiJHUy3TEDK7", label: "2022年10月26日 謝謝幫我記錄 在菜寮捷運站1號出口" },
      { type: "link", content: "https://photos.app.goo.gl/A4dFXtw5t2msVYnF8", label: "2021年10月26日 越來越厲害 這就是我最近都不敢出圖的原因 也太美了" },
      { type: "link", content: "https://photos.app.goo.gl/MsYEuyVmHBTa2TSV6", label: "2020年10月26日 \
        內湖三總軍費內科招生 選擇內湖三總內科 成為國家優秀的軍費醫師 開創屬於你的一片天 您知道嗎 重點科別住院醫師津貼補助計畫 自110學年開始中止補助 三總內科薪資大受影響 因為本來就不多 少12萬少更多 \
        沒有贈送新款Apple iPhone 三總好山好水 下班騎個腳踏車就到生態池 離台北聞名的大湖公園不用半小時 內湖也是台灣買房租房最貴的地區之一 三軍總醫院鄰近鄰近南港火車站與松山機場 車程均在15分鐘內 \
        有百貨公司 IMAX電影院 各式餐廳 異國小吃 書店 家樂福 特力屋 還有各種特色文創小店 多元戶外活動 下班生活都沒有力氣再去 \
        特色優點 兩年部隊醫官菁英計畫 國防部高額月薪五萬元聘請畢業醫師 外訓國軍各基層單位 外訓兩年定期每日早點名 晨操 掃地 午查及離營宣教 養成健康生活與紀律 \
        部隊外訓回醫院後內外科名額多 主治醫師晉升管道暢通 但都在偏鄉或澎湖 薪資福利 新進R1年薪沒有200萬 含所有獎勵金 新進R2年薪沒有205萬 含所有獎勵金 \
        新進R3年薪不可能有210萬 含所有獎勵金 每進階一年 依照官階每年月薪多近1000塊 保證聘雇至少14年 中途自願失業者需自備3000萬起 每月保障至少兩次周末有值班 \
        住院醫師沒有專屬辦公室 不提供返鄉津貼 教學訓練 病人身份種類豐富 含他院少見的高階長官進來享受遵從感 設有教學病房 保障學習 平均照顧病人數812床 晚上10點後急診會繼續進新病人 \
        沒有小夜NP也沒有intern協助接新病人 處理三管與瑣碎情況自己來 身為醫師但無勞基法工時 身為軍人但無補休及年休可放 值班隔日PM繼續上班 \
        研究資源 定期召開住院醫師研究會議 由主治醫師指導研究原創文章撰寫 統計分析 國防部及國防醫學院均有相關研究資源可運用 用越多還越多年 鼓勵支持維持軍隊紀律 醫院不可插入usb 亦無民網可使用 \
        在大都會 你有可能只是綠葉 但在國軍 你將是被那些星星創立的軍費制度 玩死的可憐狗 加入國軍軍醫大家庭 贈送六年學雜費210萬餘元 畢業後只要償還3000萬或服役14年起即可 名額有限 \
        歡迎至三總參訪與大家聊聊 採客製化安排 絕對有更黑暗的軍費內幕 軍費補助吃飯與住宿 自費生前三位報名者 還可立即轉職軍費生 更多的細節 你簽下去才會知道 \
        國防部期待你的加入 更多我們的日常 你在網路搜尋不到 只有問問過來人才知道" },
      { type: "link", content: "https://photos.app.goo.gl/dLDQkTRw3LMwhA3a9", label: "2018年10月26日 \
        好的感情應像好酒 經過時間的淬鍊 越沉越香 沒有出景也沒有漲潮 但老話一句這樣就夠了 ig好像沒有這地標 標不出來 搶到彼此心裡的頭香就好 \
        Hmmm真的沒有照片了 一定要夠堅強 我們一定要夠堅強" },
      { type: "link", content: "https://photos.app.goo.gl/Dv3LUkLBfyZBuHUs7", label: "2018年10月26日 醜人多作怪" },
      { type: "link", content: "https://photos.app.goo.gl/XPX4CFZKeDEvunCV8", label: "2018年10月26日 最近遇到一個奇怪問題想請大家解惑 我用iphone6s 手機有該照片修圖的原始檔案 電腦複製入手機 \
        左圖是截圖原檔後上傳FB 右圖是直接上傳原檔 而左邊才是我原檔正確的顏色 請問右圖原檔直接用手機上傳fb顏色會直接跑掉呢 直接從橘紅褪色成黃綠啊" },
      { type: "link", content: "https://photos.app.goo.gl/9zAXPstJWqf2VMkW8", label: "2017年10月26日 \
        這三位是我看過日本最頂尖的攝影師 無論後製構圖, 特別是創意 讓我佩服到底 唯一的遺憾 是即將回國 卻無法跟他們交流 畢竟我什麼咖都不是 \
        如果有人認識他們 希望能藉由推薦而有交流機會 在此致敬這三位日本高手" },
      { type: "link", content: "https://photos.app.goo.gl/t7nrYiSG99RoiPse9", label: "2017年10月26日 用功的男人 賢哥 跟耍廢的男人 我" },
      { type: "link", content: "https://photos.app.goo.gl/Zc3e1wFsEsWUuaH36", label: "2017年10月26日 回國倒數 排班報告規劃行程 弄得身心俱疲 Ps後製家教規劃確定了 |情私訊 歡迎分享追蹤 朝2k邁進 晚安" }
    ],
    "27": [
      { type: "link", content: "https://photos.app.goo.gl/rw1mCGRGX3YaNK857", label: "2025年10月27日 \
        順便也把心碎症候群的讀書筆記整理好啦 Takotsubo Cardiomyopathy Definition 又稱Takotsubo syndrome TTS \
        為一種急性 約90%為女性多為停經後 平均年齡6070歲 Pathophysiology 壓力會造成交感神經過度興奮 導致catecholamines過量釋放 引起短暫性心肌收縮異常 \
        主要症狀 胸痛 呼吸困難 暈厥 ECG類似心肌梗塞ST elevation QT prolongation 心臟酵素上升 影像學可見典型apical ballooning心尖擴張 \
        診斷 InterTAK score可幫助區分與急性冠心症ACS Apical type最常見 Therapy 大多可自行恢復 使用ACEI或β-blocker改善預後 \
        避免QT prolonging drugs 若LVOTO避免使用inotropes 可給予輸液或vasopressors 若EF低或有血栓 AF可考慮短期抗凝" },
      { type: "link", content: "https://photos.app.goo.gl/zjaVHYZvRx7BGMpf8", label: "2025年10月27日 雖然這個月已經吃土 手頭超緊 但還是買了 你這個小笨狗" },
      { type: "link", content: "https://photos.app.goo.gl/fkn29GDxJ7653r1c6", label: "2025年10月27日 其實打病歷本來就是該學的 給clerk寫很正常" },
      { type: "link", content: "https://photos.app.goo.gl/sP8KXD4Azp14eNb36", label: "2025年10月27日 \
        時事 前陣子很難過的新聞 是長榮航空服務員過勞送醫後不治身亡 今天看到yt達特傑生分享 猜測很可能是still's disease 遙遠的考試回憶湧上心頭 \
        但從來沒有好好搞懂這疾病 果然是很罕見 內專近年考過一題 小弟對於風濕免疫科不熟悉 就不做過多評論了" },
      { type: "link", content: "https://photos.app.goo.gl/YYdJQLeGMQKbfxoMA", label: "2025年10月27日 老師我如果考100分的話可以請我吃嗎" },
      { type: "link", content: "https://photos.app.goo.gl/5u8EzWAYRhyj7iBBA", label: "2025年10月27日 777" },
      { type: "link", content: "https://photos.app.goo.gl/x9viPFJuXs3t91UT9", label: "2024年10月27日 兩路進會場" },
      { type: "link", content: "https://photos.app.goo.gl/gJpz6SQ66ZYN4CG29", label: "2024年10月27日 今天吃完飯遇到哥布林本人了 壯爆 今天還是有收穫 兩隻哥布林 遇到英雄一家" },
      { type: "link", content: "https://photos.app.goo.gl/pxaf6qKg2nGb1oYJA", label: "2024年10月27日 超美 希望未來跟學長一樣能環遊世界拍美景" },
      { type: "link", content: "https://photos.app.goo.gl/auKLZMS2Jv3NhvbP8", label: "2024年10月27日 提前慶祝生日的大餐" },
      { type: "link", content: "https://photos.app.goo.gl/9W7BHJuPB7eP1xwV7", label: "2024年10月27日 這可能剛好他上輩子最後一句話 結果沒忘記哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/gEpL777kn5vhEDzg8", label: "2024年10月27日 這個好屌哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/bDhRVCArBoVXCEm5A", label: "2024年10月27日 這樣真的蠻帥XD" },
      { type: "link", content: "https://photos.app.goo.gl/U5ndTnNW2ZS6cqhK6", label: "2023年10月27日 \
        因為是傳給我 就不疑有他點下去 後面才發現這是詐騙 詐騙 詐騙 點進去詐騙個資用的 只能說任何平台優惠都要視為垃圾 不然這年頭詐騙太多了 \
        就算真的是優惠也各種限制 根本不用花時間去弄 平常我根本不信任這些東西 今天因為傳給我我就完全沒防備心 大家千萬別被騙了" },
      { type: "link", content: "https://photos.app.goo.gl/ve2Qx1vMAzFTf5Vn7", label: "2023年10月27日 留有遺憾的下龍灣英雄島 參加郵輪兩天一夜的 當晚之前會在這裡 可以盡情飛空拍的地方" },
      { type: "link", content: "https://photos.app.goo.gl/pGcvoG4EEaa3LcxC7", label: "2022年10月27日 \
        GI Bleeding 這是一張abdominal CT with contrast的A phase 圖一箭頭處為小腸的active bleeding 圖二為緊急去做TAE 很不幸的, 後病人還是在某次半夜大量血便而休克 \
        個人經驗 tarry stool的病人去做CTA常常沒有發現active bleeding 因此把難得遇到有發現的影像記錄下來 extravasation有時很常被忽略 我還需要多看影像來練習" },
      { type: "link", content: "https://photos.app.goo.gl/TwXhKwEamh3FHS5w8", label: "2020年10月27日 \
        經歷三個月內科洗禮 終於剩最後一個禮拜 可以在迎接真正內科戰鬥前稍作休息 今年真的發生了很多事情 很多的措手不及與出乎意料 難關似乎永不間斷 \
        每當壓力很大的時候 都打起精神去跑個步 讓自己暫時忘記煩惱 今天回家看到愛心晚餐 突然有種苦盡甘來的感覺 又可以繼續努力了 謝謝妳" },
      { type: "link", content: "https://photos.app.goo.gl/kTXGL9jNX4nuv2HC9", label: "2020年10月27日 雖然很少發飲料的貼文 但有好喝的都會特地買回來請疲累值班醫師們試喝 拍照跟貼文用詞都很重視質感 超級暖心的小編 一定要追蹤" },
      { type: "link", content: "https://photos.app.goo.gl/QPrtkAMexzF68v3E7", label: "2020年10月27日 現在上班都坐著下班都天黑了 強迫自己運動取代拍照 拖著疲憊慢慢跑也要撐到五公里 但回家還有愛心晚餐 元氣瞬間回復了" },
      { type: "link", content: "https://photos.app.goo.gl/rwUKvBMUsndeVdMQ7", label: "2020年10月27日 下班後硬撐著疲累去跑了五公里 餓都餓扁了 回家看到這個驚為天人" },
      { type: "link", content: "https://photos.app.goo.gl/qasvquAicmZ5wdsp8", label: "2018年10月27日 \
        好神奇 第一次看到N家有小灰系列 順便發個問題區可以問我任何問題 但我不能常上網 會慢慢找時間回覆唷 \
        也太酷 我是n家新手請多指教哈哈 推二手D750或810或850 看你預算 我建議750然後省下的錢買好一點的鏡頭 27比較推 不過無反我沒用過 是看多位朋友使用經驗而推薦 \
        我現在很窮又只能靠自己工作沒假期 不知道甚麼時候 所以等等我拜託 交過三個 你是最後一個 肯定 第一代2.8我用過兩年實在不推 畫質太軟了 用4吧 也比較輕 一代只是拿起來很帥而已 \
        很願意 但我的經紀人是 請讓他決定 doctorkowj凍蒜 J格嘛 我沒有洗過鏡頭蓋喔 不如試試高溫殺菌吧 \
        不是 因為取景構圖與後製唷 可以從芭樂點開始練習 我還在努力 目前在當軍醫根本沒時間出教學 明年再看看 目前台灣銀河最強是 要學銀河不要拜錯師傅唷 \
        幻覺 右上角哈哈哈 總得給個實際金額哈哈 建議二手D750 CP值很夠 D7200也可以考慮 如果你直接傳的話 這塊我就不熟了 沒錯 可以換了 順便跳家 耶 謝謝啦 \
        看你拍什麼主題 如果需要旅行或行動而且不專研修圖就微單 單眼務必考慮重量跟鏡頭花費 不會喔 攝影師是靠本事混的 沒本事還大肆宣揚自己才沒說服力 \
        要輕巧而預算多選S 要包覆性好而鏡頭選擇多選N 兩牌都遠大於C 風景的話 都用長焦了不會討論夠不夠廣 其實有好有壞 好的點在於距離多1.5倍 \
        需要 marumi用在一般 nisi用在凸鏡喔 內心夢想 但本人超窮困 有喔他有很多教學跟作品 但我跟他是不同主題的 他比較屬於文藝類而且題材廣泛 而我是專研風景類別的技巧到走火入魔 " },
      { type: "link", content: "https://photos.app.goo.gl/XeLH3RRJ2tqyBKCb7", label: "2018年10月27日 \
        這顆我沒用過 但要我猜 這種旅遊鏡絕對敗在他的畫質跟光圈 也許剛玩攝影很方便 但真心不推 尤其你開始後製 會發現拍出來的照片品質不佳喔 \
        而且也很容易耀光吧 初學可多用用定焦這是一定要的 大家可以再踴躍發問 幫助我消磨無聊時光 另外前幾天我限時問題請待我整理說明唷 謝謝各位的專業意見" },
      { type: "link", content: "https://photos.app.goo.gl/t1ibWkqcTWoaNfQY7", label: "2018年10月27日 已經玩過多少次了 還要再多少次呢" },
      { type: "link", content: "https://photos.app.goo.gl/fHcUWC9Bk5p5h9CV7", label: "2018年10月27日 應該是小兒神經科吧 就跟川總小兒的陳院長一樣啊XD" },
      { type: "link", content: "https://photos.app.goo.gl/LLEKBYP3iWyiMiG37", label: "2018年10月27日 不過就是無聊而且濫用的爬樓梗而已 去看看台灣跟香港有多少這種抄來抄去的作品就好沒料 這種作品也能展出 這位攝影師恐怕只是被捧紅" },
      { type: "link", content: "https://photos.app.goo.gl/4NeoP7gGdA7n8edX6", label: "2017年10月27日 啟程 他是我的車 也是我今晚的家 為了夢想的畫面 再累都要甘之如飴 只有很努力才能看起來不費吹灰之力 KATSUTA STATION" },
      { type: "link", content: "https://photos.app.goo.gl/RPs91s2L9a1q35sa7", label: "2017年10月27日 這個月過的很快 TMDU謝謝你 收穫很多 日本頂尖醫學中心" },
      { type: "link", content: "https://photos.app.goo.gl/2Lutm1nYBtyN6Zqz5", label: "2017年10月27日 感謝各位老師 最後一天在醫院 報告完成 裝備往東北拍攝楓葉啦" }
    ],
    "28": [
      { type: "link", content: "https://photos.app.goo.gl/CseMkeDxWVLJgWAGA", label: "2025年10月28日 你的大腦無法辨識木板跟電梯的差異嗎 智商還好嗎" },
      { type: "link", content: "https://photos.app.goo.gl/LRebvRFnbswJnMNfA", label: "2025年10月28日 一想到中國即將在這裡蓋一個電梯我就全身作噁 中國這個國家能不能從地球抹滅啊" },
      { type: "link", content: "https://photos.app.goo.gl/zXCrBU25ku1wmPK88", label: "2025年10月28日 你努力考試 只會獲得更多的考試 考一輩子 然後同樣分數你選二類機電 早就存好幾桶金" },
      { type: "link", content: "https://photos.app.goo.gl/GsViwaKs7RhQCvVp7", label: "2025年10月28日 製作投影幕無法接上電腦的排除方法" },
      { type: "link", content: "https://photos.app.goo.gl/j665hBD1q2JbjnHg6", label: "2025年10月28日 這就是黃仁勳要的世界嗎" },
      { type: "link", content: "https://photos.app.goo.gl/Ep62AVNbFXZWCnrh9", label: "2024年10月28日 對啊" },
      { type: "link", content: "https://photos.app.goo.gl/1hqmLFjf46byCiRx5", label: "2024年10月28日 好了啦 是不是很想參政啊 可以直接說啊 不用這樣假惺惺" },
      { type: "link", content: "https://photos.app.goo.gl/imCH2UzqkCVuQvGZA", label: "2024年10月28日 CXR有一點pulmonary edema跟heart boarder變大的感覺 跟喘的症狀比較符合 另外縱隔腔稍微變寬 EKG想猜wellen但前幾天心導管沒問題 這就不明白了 等答案" },
      { type: "link", content: "https://photos.app.goo.gl/s48J3tuyYk4PSbTX8", label: "2024年10月28日 你昨天應該一起來" },
      { type: "link", content: "https://photos.app.goo.gl/m2iXvN32nWas7JVK9", label: "2024年10月28日 這張照片應該當選2024信義變裝秀首獎" },
      { type: "link", content: "https://photos.app.goo.gl/YS1L3yd4EQ3eVoPJA", label: "2022年10月28日 \
        太神奇 我在自己家 用電視公司的無線WIFI 下載這個JAMA的文章 居然裡面會寫上是三總的使用者下載 我既沒登入網站 沒註冊過 也沒有使用TSGG的網路啊 \
        這是怎麼做到的 現在網路下載東西完全都會留痕跡" },
      { type: "link", content: "https://photos.app.goo.gl/aXufNGePR52Uq1ty5", label: "2021年10月28日 我覺得考上醫學系的大多從國高中開始就有這種內心對話XD" },
      { type: "link", content: "https://photos.app.goo.gl/tDk3hK8581WANkzj9", label: "2020年10月28日 請問腎功能抽血數值比正常值低 會考慮什麼呢 例如bun5/creatinine0.4" },
      { type: "link", content: "https://photos.app.goo.gl/6s9VgunGc3hGWDh56", label: "2020年10月28日 慶功宴 壽司郎美麗華店" },
      { type: "link", content: "https://photos.app.goo.gl/5o5Kz6u7kuajDj2s5", label: "2020年10月28日 \
        以內科來說 心臟內科不做導管單看門診 生活品質與收入如何 想聽過來人分享 我預想拿到次專 就走基層診所耶 心內有優勢嗎 請問心臟內科有比感染科賺錢嗎" },
      { type: "link", content: "https://photos.app.goo.gl/z8iSVeNEjQpZTnrx6", label: "2020年10月28日 我是中部的y2 只對心臟內科跟感染科有興趣 其他科完全不考慮 以生活品質為優先 未來醫學中心待完能找到診所兼職就好的話 選擇心內或感染比較好" },
      { type: "link", content: "https://photos.app.goo.gl/BYzJGC16Gve21ZbY6", label: "2020年10月28日 \
        一個住院住快一個月的老杯杯有尿管 突然護理師發現尿布有漏尿 水球重打後也有一些在尿布 如果發生在下班之前 有需要馬上換更大號的嗎 \
        還是明早看看還有漏尿再換也合理 另外疑問的是 之前都不會漏尿 這是因為尿管放久了之後尿道會被越撐越大嗎 謝謝腎結石 我明天好好查一下" },
      { type: "link", content: "https://photos.app.goo.gl/72Gpo6GVV4T3M9NQ9", label: "2020年10月28日 大家插管前會給kentamin嗎" },
      { type: "link", content: "https://photos.app.goo.gl/8bBEGYVUqxxnmQZx6", label: "2018年10月28日 功德院長吸的空氣跟妳吸的空氣是不是不一樣 保重" },
      { type: "link", content: "https://photos.app.goo.gl/bLUH1xNwsVaYdszH6", label: "2018年10月28日 \
        暑假的澎湖之旅現在才有時間整理 攝影美食交通住宿名產都清楚介紹了 最感謝的是安排了四天的景點交通跟美食 超棒的\
        如果對你有幫助 煩請幫我點個愛心唷 在dcard旅遊版 上拉有連結啦 行程有疑問可問我或我女友 就不說他那時候期待去印尼比期待去澎湖還多更多" },
      { type: "link", content: "https://photos.app.goo.gl/YJEHurYj73Q49ZQ87", label: "2017年10月28日 乾只有我一個 極度邊緣 有人在奥入瀬附近想找極便宜住宿嗎 附加24小時烤土司吃到飽 私個QQ" }
    ],
    "29": [
      { type: "link", content: "https://photos.app.goo.gl/oG9aBWSy8H27PUgF7", label: "2025年10月29日 超可怕 我覺得要租車躲在裡面" },
      { type: "link", content: "https://photos.app.goo.gl/fVE26C7uy9d6jB7o9", label: "2024年10月29日 沒那麼笨留在台灣 如果他們要 一屆99%台清交成也可以" },
      { type: "link", content: "https://photos.app.goo.gl/fBLSFkNb4eVfu31GA", label: "2024年10月29日 竹中超強 我有兩個醫學系同學 是他們那屆竹中資優班倒數名次的 聽說那班一半醫學系" },
      { type: "link", content: "https://photos.app.goo.gl/8PtFr9hqcicCGzCg7", label: "2024年10月29日 嗚嗚 他才是主管啦" },
      { type: "link", content: "https://photos.app.goo.gl/CxtbFh5Wgb86K1MPA", label: "2024年10月29日 \
        2024 HFpEF筆記 今年TSOC的HFpEF指引及3rd MRA試驗的發表 所以簡單整理了HFpEF的筆記 圖片為TSOC的診斷流程 但他們還有一個可愛的治療五角星 沒有放上去 因為3rd MRA做出有下降死亡的好處 感覺會變成六芒星了" },
      { type: "link", content: "https://photos.app.goo.gl/NC2D4UrgabuAUzxs7", label: "2022年10月29日 \
        醫生技術再好 再怎麼拼命 替病人省下大量的麻煩 頂多就是換來一句感謝 但對台灣的健保而言 醫生是很賤的 醫生的高技術高知識跟大量時間一毛不值 但必須做到死 醫療業真是台灣最美的風景" },
      { type: "link", content: "https://photos.app.goo.gl/bPvm4qPqPeKdMLpt6", label: "2022年10月29日 \
        救命本來就需要付錢 不是病人付就是國家付 生命的長度跟寬度本來就用錢堆的 國家不願意面對真相 更沒種跟人民宣導正確觀念 \
        變成現在苛扣醫生 扣醫生的給付 還要醫生承擔不必要的法律糾紛 台灣衛福部真的很棒 祝畸形的健保早日垮台" },
      { type: "link", content: "https://photos.app.goo.gl/rjTpHAJAMVvgaFAA7", label: "2021年10月29日 \
        地球的寶藏&生活分享 市區出現領角鴞 吸引一堆攝影人擠成吵雜的菜市場 埔里的夢谷瀑布因為意外 原本自然的樣貌被人為開拓破壞 這樣的事情一再重演 在我看來 就是人類的自私 \
        大自然是地球獨特珍貴的資源 是為了生生不息的循環而呈現的美貌 並非是給人類欣賞休憩用的 沒有任何自然資源 應該對人類的私慾跟意外負責 就像擅自上山失去性命 因此而拓墾道路或封山都是可笑的作法 \
        大自然的美景 更不應該為了親民而過度開發 任何人想欣賞大自然的美 本就應該冒著風險 如果能力無法那也是活該 如果真的很愛大自然跟動物 應該對自己的體力耐力負責 好好運動強身跟做足功課 \
        打著紀錄跟分享的名號 過度開發或打擾動植物 人類其實就是地球的害蟲 大家應該都知道復仇者聯盟 我心裡薩諾斯才是真正的正義英雄 一彈指讓人類消失大半才能迎來地球的永續環境 \
        如果可以選擇讓愚蠢自私的那群人消失就更好了 謝謝來自埔里的小公主解答 是的 很多人本末倒置了 都覺得應該把大自然開發光光讓人們來看" },
      { type: "link", content: "https://photos.app.goo.gl/nofoHbaQhRHQFs5y6", label: "2021年10月29日 為了拍隻領角鴞擠 得跟菜市場一樣 大自然跟動物都沒有義務對人類的拍照私慾負責吧 唉" },
      { type: "link", content: "https://photos.app.goo.gl/jG11q3ktkpLyKnpw7", label: "2021年10月29日 睡前或起床都適合看這個" },
      { type: "link", content: "https://photos.app.goo.gl/jfaen1bEvWU1QrLb9", label: "2020年10月29日 中共彷彿地球的癌細胞" },
      { type: "link", content: "https://photos.app.goo.gl/rkPoGWqimNeBcf2EA", label: "2019年10月29日 一萬公里保養 報價估計9200元 國產車當歐洲車跟我收錢 所以今天都在查車子保養維修的資料 沒想到學問那麼大" },
      { type: "link", content: "https://photos.app.goo.gl/A1kqqkyuBW5yxVpC6", label: "2018年10月29日 男生趕快加入海軍志願役吧 一個月五六萬還不會有什麼開銷 又不用文憑就能簽" },
      { type: "link", content: "https://photos.app.goo.gl/VbejJAJik1Zkc8h26", label: "2018年10月29日 我女友是國立暨南國際大學國企系的企業專題團隊 目前有攝影師媒合平台的構想 不限對象 大家都可以填寫喔 感謝各位的填寫 讓團隊的企業專題更精彩" },
      { type: "link", content: "https://photos.app.goo.gl/zSAs1TMWbcTfBSSZ7", label: "2017年10月29日 我出照片的速度是否太快 各位建議" },
      { type: "link", content: "https://photos.app.goo.gl/KxVy8shQPbcjgRm57", label: "2017年10月29日 拍到楓葉跑進衣服裡面 我穿四件欸 拍照跟打仗一樣zzz" },
      { type: "link", content: "https://photos.app.goo.gl/9K9XbvLznbXAh2Fh6", label: "2017年10月29日 居然走超過十公里" }
    ],
    "30": [
      { type: "link", content: "https://photos.app.goo.gl/CDijHRQEBpSGagL27", label: "2025年10月30日 認同 這個世界上已經人口過剩 多點人相信這種反智言論 剛好可以消耗過多的人口 早點解脫" },
      { type: "link", content: "https://photos.app.goo.gl/WMkYtf8LWqTRcMjU6", label: "2025年10月30日 \
        台服的盤子們有夠傻 越服這些造型都不知道復刻幾遍了 每個禮拜六0100準時換造型 全部都保底1429點卷 換成台幣差不多1200吧甚至不到 奉勸造型控早點轉越服除非錢很多" },
      { type: "link", content: "https://photos.app.goo.gl/9kDoxsvJeEoz6pr9A", label: "2025年10月30日 眼睛粿到屎" },
      { type: "link", content: "https://photos.app.goo.gl/enkbKrHY338P8yyJA", label: "2025年10月30日 有點像是2度2或2度1AVB with apc RBBB biphasic T over V2-4 還是要排除CAD" },
      { type: "link", content: "https://photos.app.goo.gl/EZj5eFVSxnGMPeg99", label: "2024年10月30日 \
        某間四樓值班室裡面 某位同仁居然在中午時間大喇喇躺在床上抽電子菸 整個值班室都是你電子菸的味道 你旁邊都還有人在睡覺 \
        你想得肺癌就自己去外面慢慢抽 在值班室裡面抽電子菸是怎樣 為甚麼中午休息還要忍受你的二手菸 有夠誇張 我有錄影 再一次我就直接公布影片在投訴系統 投訴系統不能公布我就放網路" },
      { type: "link", content: "https://photos.app.goo.gl/r2zR9q8zMHaQ2ZEi7", label: "2024年10月30日 有摔 但不多" },
      { type: "link", content: "https://photos.app.goo.gl/64EkCbC7jBE29smC7", label: "2024年10月30日 就是拿人民納稅錢酬庸而已啊 又不是什麼大事 沒事啦 質疑政府的才是犯罪好嗎" },
      { type: "link", content: "https://photos.app.goo.gl/S9fVPW4eyNmCrCet6", label: "2024年10月30日 今天又被療癒了" },
      { type: "link", content: "https://photos.app.goo.gl/e537yuAyuyjMuADa8", label: "2024年10月30日 是竹實驗沒錯 抱歉我筆誤寫成竹中" },
      { type: "link", content: "https://photos.app.goo.gl/1GZxoWVoHbhSk8kJ8", label: "2024年10月30日 他的毛直接巨大化哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/gXiKRAVEWvsgCrj29", label: "2023年10月30日 \
        直到最後一班 還是沒能把急診病人交班完善 真的是做不到 又要追蹤舊病人 又要消化新病人 又會遇到浪費一堆時間解釋結果AAD的病人 \
        到底怎麼有辦法把所有病人看完然後交班 對我實在太難了 只能感謝急診人的包容" },
      { type: "link", content: "https://photos.app.goo.gl/jZQTyo9MfSEup9Sx5", label: "2022年10月30日 \
        陰雨陣陣的天氣 也阻止不了週年紀念日要去吃高級牛排 雖然以下應該不是重點 但陪我度過這麼黑暗的時期 其實也滿辛苦 而這個辛苦 有部分是我過去的不努力跟錯誤的選擇造成 \
        intern時期 我把自己當order機器人 兩年的訓練除了開藥開檢查速度變快 知識的增長不誇張的是零 我連怎麼補鉀 怎麼判斷病人是敗血症 甚至什麼什麼時候該輸什麼類型的血都完全沒概念 \
        我沒有想到自己居然會走上內科的路 更沒想到次專科是最累最難之一的心臟內科 也是專門給內科佼佼者選擇的科系 於是從PGY開始惡補 告訴自己是內科更生人 必須加倍奉還過去的怠惰 \
        因此深切體悟 錯過了intern兩年的學習 這個落差直到我現在R2仍然沒辦法完全追上同儕 總是覺得比同學都弱一截 不免自卑跟擔心 也不像過去 我一直抱佛腳順利通過所有考試沒被當過 \
        但面對專科考試 難度之深 我或許就是那最後不過的10% 因此內科專科的訓練 對我來說壓力非常沈重 還需要面對內心不願意走在這條路的矛盾 多少次值班的深夜 累到無力卻睡不著 \
        反覆的自問 當初為何選擇沒有選擇的軍費生 多重考幾年醫學系 好好當診所醫生不好嗎 這個過程的痛苦 其實走過的醫生都知道 一個禮拜六天的工作 加上平均一到兩晚的值班 \
        唯一的週休一日將近半天都需要補眠 更甚者 默默轉向隔壁棚的工程師 發現如此勞累換來的薪水相對少的可憐 這種心情我相信圈外人很難懂 所以很謝謝 忍受我不斷冒出的負面情緒 \
        懊悔情緒跟少少的自由時光 每年的週年紀念日 我都很感謝妳 包容著沒有生活品質的我 我會好好努力 除了在工作跟考試 也努力早點回歸正常的生活步驟 謝謝妳 週年快樂 生日快樂" },
      { type: "link", content: "https://photos.app.goo.gl/3JtAarKEK4L63biU6", label: "2022年10月30日 這個視角真特別" },
      { type: "link", content: "https://photos.app.goo.gl/5kwNSTSPNyAUnB496", label: "2022年10月30日 我當天沒拍到" },
      { type: "link", content: "https://photos.app.goo.gl/uWiiVC6t3aXRUsg97", label: "2022年10月30日 教我如何漂亮的拉花 抽象派拉花風格教學" },
      { type: "link", content: "https://photos.app.goo.gl/sdqCDZz3pBiuioZz8", label: "2022年10月30日 他們的香蕉也太好吃 香草冰淇淋也好好吃喔喔喔 地中海牛排餐廳" },
      { type: "link", content: "https://photos.app.goo.gl/RUzHztoPeqyVfeSF7", label: "2022年10月30日 \
        值班 報告 上班不斷循環後 快一個禮拜沒使用IG粉專了 週日要來休息一下 順便請吃週年紀念大餐囉 地中海牛排餐廳 希望我的人生早點脫離醫學中心 \
        我好想去診所當小醫師就好 每年準時出國有多好 不用每個假日跟下班都要掛心醫院的病人 專科考試跟報告" },
      { type: "link", content: "https://photos.app.goo.gl/L9vs8n3nbcdsL1Am6", label: "2022年10月30日 \
        還有第二個大哉問 副甲狀腺會使血鈣上升 血磷下降 並且促進D3製造增加 而D3會讓血磷跟血鈣上升 並負回饋副甲狀腺 \
        問題來了 副甲狀腺讓D3增加的過程 到底血磷變化如何 是先下降再上升 還是一路上升 還是達成平衡不變 抱歉我好混亂腎內好難QQ" },
      { type: "link", content: "https://photos.app.goo.gl/z5dEhGKFmhZQaj428", label: "2022年10月30日 \
        我想問個內科經典的大哉問 目前似乎沒什麼人能正確回答我 FGF23 到底是抑制副甲狀腺的製造多 還是間接促進副甲狀腺產生的多" },
      { type: "link", content: "https://photos.app.goo.gl/xEibcjmUXSjYvxef9", label: "2022年10月30日 小麻的HF章節 寫BB不能用在ADHF 這句話是不是有語病 我看醫院一堆ADHF急性心衰竭的病人上來一樣用爆concor 1.25mg bid啊 \
        真的要說應該是血壓低才不能用吧 ADHF又不一定血壓不穩" },
      { type: "link", content: "https://photos.app.goo.gl/pKKKUsnnfqv6EorQ6", label: "2022年10月30日 \
        臨床紀錄 Cephalization sign Comparison between upper and lower lobe vessels at equal distance from the hilar point \
        心衰竭時肺血管紋會往上浮現 病人需站立PA view較有參考價值" },
      { type: "link", content: "https://photos.app.goo.gl/YJicpL93K49NcxxFA", label: "2021年10月30日 剛下班就趕過來上班 古色古香的地方 但不是來開攝影展 全民打疫苗" },
      { type: "link", content: "https://photos.app.goo.gl/6LBgCGKmzgH8HRpbA", label: "2021年10月30日 2022桌曆還可以下單唷 便宜好看 自用送人兩相宜" },
      { type: "link", content: "https://photos.app.goo.gl/bP755jbTW3JeNyjd9", label: "2020年10月30日 這禮拜吃得太過份了 下個月要好好運動 墨賞新鐵板料理" },
      { type: "link", content: "https://photos.app.goo.gl/CvdXVy23ZJVaWL5e9", label: "2018年10月30日 \
        請各位大德幫填一份攝影平台企劃的問卷 只要一分鐘 填妥後截圖最後一頁給我 可以選下頁兩張當桌布 別嫌棄我 萬分感謝 填問卷截圖後私我要哪張即可 感謝各位幫忙我女友" },
      { type: "link", content: "https://photos.app.goo.gl/PjKquntF3B6Ex91X8", label: "2018年10月30日 超棒的 學長正在做我這輩子最大的夢想 真的不應該只是一層不變的接受生活" },
      { type: "link", content: "https://photos.app.goo.gl/wSgiD3QEUq9UsE296", label: "2018年10月30日 辛苦了" },
      { type: "link", content: "https://photos.app.goo.gl/6AmzHctbbGLNN7hbA", label: "2017年10月30日 \
        趁著記憶猶新 這是一篇這個月日本生活的反省+警惕文 文長 若你對日本自由行有興趣 請參考我的慘痛經驗 \
        日語程度至少N3是很重要的 別想用英文走透日本 學習日語可以節省很多時間 了解文化 了解規定或問路都太常用到 \
        這次弄清楚交通+天氣+租車 包含JR地鐵新幹線搭法, 些票卷如何使用 特別是日文網站時刻表與訂票系統都弄清楚了 天氣與楓葉狀況也是使用日本網站 若有朋友不懂可問我 \
        租車系統也弄熟了 當然路上號誌 是否抓超速 自行加油等都已有概念 \
        本次不小心咬破自己臼齒一小塊 真的不能為了趕上班狼吞虎嚥 光是牙醫診察 掛號費就3000塊 就不說回國處理牙齒 我又要花多少錢跟時間 另外她們有自動繳款很方便 三總最近開始在弄 \
        日本自行車如同台灣機車 即使帥如金城武的鮮肉依然騎著有菜籃的腳踏車 更看不到任何火箭筒或雙載這種中二行為 \
        千萬別亂停腳踏車在路邊 拖吊之後得搭很長一段路取車 保管費5000塊就飛了 另外腳踏車一定要有500元防盜貼紙與夜間照明 新車基本12000以上 二手大概5000-6000 \
        我在日本弄丟腳踏車鑰匙 結果只能牽去最近的鎖店 新鎖2000 打掉舊鎖1000 \
        最慘莫過於今天的車禍 很不巧每個假日我都在大雨中開車 本次前車跟我維持40在大雨下坡山路行駛 前車為了閃大巴急煞 我剛好開在水坑 煞車踩到底居然停不下來就這樣撞上 記得在日本你的頭燈壞掉 開在路上是違法 所以一路被拖回車行 \
        我沒保一天2000的全險 全額免費 拖吊費40000 車禍全額150000加一點點油錢 我當下賠上20萬 完全刷自己戶頭這種事情不知怎麼跟家人說 \
        租車務必務必保一般險 一天1050只要賠五萬 或全險一天2000不用賠 我心很痛更怪自己因小失大 在日本自駕我算很熟也很小心 萬萬沒想到會打滑 如果你不幸遇上了 包含檢查外觀等等事後處理 都可以問我 \
        警察的話當參考 他跟我說當天沒有腳踏車拖吊作業結果有 跟我說汽車道路救援免費結果要四萬 \
        在日本衡量自己伙食費 一餐300500才算便宜 1000上下是它們普通價位 \
        總之送自己一句話 自作自受 很多小心點可以避免的事情卻還是發生 這些都是這輩子忘不了的慘痛經驗 以後會更謹慎面對 寧可小心而錯過 也不要急於一時貪小便宜而慘賠 \
        如果你看完文章 非常感謝你 所有能發生的慘況這個月我都經歷了 別像我一樣 回國後需要時間存錢 升級器材這種事還是吃屎吧 \
        最後的最後 我深深感謝 他為我處理很多事情但我還是雷慘他 萬分抱歉也萬分慚愧啊 \
        當然也感謝子賢跟哥主任幫忙 我實在太不小心 國外拍照衝景這種事 以後還是少做 受罪受夠了 受罪" },
      { type: "link", content: "https://photos.app.goo.gl/9eEgKtsf2Sqh81yv8", label: "2017年10月30日 一個月日本發生許多鳥事 希望這些很慘的事情能讓我學到教訓 這輩子凡事都得小心再小心 不斷警惕自己 三思而行並且穩重 勿因小失大" }
    ],
    "31": [
      { type: "link", content: "https://photos.app.goo.gl/G7XTrkxy4tdFrew46", label: "2025年10月31日 甚至比原唱效果厲害XD" },
      { type: "link", content: "https://photos.app.goo.gl/nAPQPp4BSYMRSZJZ8", label: "2025年10月31日 怎麼那麼可愛" },
      { type: "link", content: "https://photos.app.goo.gl/x9WkRXKwQzvsHDSm6", label: "2024年10月31日 為什麼不是醫生但要穿白袍啊" },
      { type: "link", content: "https://photos.app.goo.gl/nzGzCMJ7aPYMpR6J7", label: "2024年10月31日 用生命吶喊我只服蛙人 親自跟過他們訓練 是真的很猛 對台灣國防有貢獻 至於心靈課程那些 都是低智商然後還去被騙錢浪費時間的白痴" },
      { type: "link", content: "https://photos.app.goo.gl/rnBQUzEjs5AHgRoB8", label: "2024年10月31日 我們也要在颱風天救援貓貓 不然他們ㄊㄞㄎㄜㄌㄅ" },
      { type: "link", content: "https://photos.app.goo.gl/5FpxjfL8xm5TPtRN6", label: "2024年10月31日 這兩人很強 颱風天直接開早午餐店" },
      { type: "link", content: "https://photos.app.goo.gl/fg6ruFujATgU6CCj8", label: "2024年10月31日 上次台北幾乎沒風雨結果放假 今明兩天台北滿目瘡痍結果上班 要也是明天放假吧 神奇的邏輯" },
      { type: "link", content: "https://photos.app.goo.gl/y58B879CRVxbFbAy7", label: "2024年10月31日 颱風 練 風大到不可思議 幸好在租屋旁邊" },
      { type: "link", content: "https://photos.app.goo.gl/fWQ6qdLUHF3ugDkd6", label: "2024年10月31日 應該是要跳舞了" },
      { type: "link", content: "https://photos.app.goo.gl/SEd7AFUu2RAbCdyX8", label: "2024年10月31日 好可憐" },
      { type: "link", content: "https://photos.app.goo.gl/ptSQwr4pUqfLwD2h7", label: "2023年10月31日 每個字都看得懂 組合起來卻無法理解" },
      { type: "link", content: "https://photos.app.goo.gl/njdhQ9JQXvwBoV9N6", label: "2023年10月31日 原來今天有規定全民運動都要裝扮嗎 旁邊還有柔道服跟南瓜人在重訓" },
      { type: "link", content: "https://photos.app.goo.gl/99J7jgG5w8z93Hgd8", label: "2021年10月31日 報了好幾通I/0給我 結果高血鉀沒有報給我" },
      { type: "link", content: "https://photos.app.goo.gl/XnHqg7UPVDSYY8Za6", label: "2020年10月31日 老婆沒工作 爸媽沒祖產 白手起家的心臟內科醫師 幾歲才有財力自己開診所" },
      { type: "link", content: "https://photos.app.goo.gl/sDjj83MKoqokufpEA", label: "2018年10月31日 \
        兩年前的舊照 那時候跟無憂無慮的衝景 更重要的是 發現大學時期熱愛攝影的大有人在 不再是孤獨的衝景 讓別人無法理解為何大半夜出門早上才回來的人 \
        不過工作之後幾乎沒有自己的時間 偶爾翻了過去的作品 才知道自己曾經為自己活著 問卷送桌布 持續發放中 請稍待" },
      { type: "link", content: "https://photos.app.goo.gl/MZUKF6phmJiVvTiL9", label: "2018年10月31日 放假還是讀書讀書 她睡飽之後就有我整理的重點了" },
      { type: "link", content: "https://photos.app.goo.gl/1uKJNQ5ZLcLtESys7", label: "2018年10月31日 這張我最不滿意的是停車場與天空的交界 沒有PS無法處理掉不知道為何出現的白邊" },
      { type: "link", content: "https://photos.app.goo.gl/LBxax87gJkhSRS6o7", label: "2018年10月31日 \
        左邊原檔 右邊LR修圖 以下幾張都只有使用LR 可以看看我把光線的重點放在哪裡 當然因為我很北七的拍成JPG 所以暗部的細節幾乎沒了 這點請忽視 \
        歡迎詢問後製問題 或者說說您的主觀評論" },
      { type: "link", content: "https://photos.app.goo.gl/p7ZBK6tAnRS8Q7q18", label: "2018年10月31日 \
        昨天的問卷真的很謝謝大家幫忙 但自己實驗送的桌布 由訊息下載之後畫質降低不少 但我實在受不了這樣不完美 所以 之前有給你但覺得畫質不好的 \
        或問卷限時幫忙填寫的 填完直接截圖給我 我直接送兩張的drive讓你們下載原檔 畫質跟顏色保證完美清晰" },
      { type: "link", content: "https://photos.app.goo.gl/MX7SJBpWLYTBxhscA", label: "2018年10月31日 很久沒有犯這麼低級的錯誤 滿滿的JPG檔 本來還想說街拍試試單張寬容度我的老天鵝 白拍Orz" },
      { type: "link", content: "https://photos.app.goo.gl/dC5t4Q5LVPXrEe2p7", label: "2017年10月31日 我要去台灣旅行惹 請問台灣朋友 有沒有什麼景點要介紹的" },
      { type: "link", content: "https://photos.app.goo.gl/hANJweCo7pUuQ3P16", label: "2017年10月31日 第一次去台灣玩好興奮 請問台灣有什麼推薦景點嗎 謝謝" },
      { type: "link", content: "https://photos.app.goo.gl/c6zxSzAq3WCrwp3PA", label: "2017年10月31日 請問回台灣後哪裡可以賣腎或賣屁股的 私我一下不然我要跑路ㄌ" },
      { type: "link", content: "https://photos.app.goo.gl/kt4szCjcNLS5SBCk8", label: "2017年10月31日 請問台灣有賣腎或賣屁股的地方嗎 不然我要跑路ㄌ" },
      { type: "link", content: "https://photos.app.goo.gl/EoS3qkSYSF4CRgCX9", label: "2017年10月31日 東京掰" },
      { type: "link", content: "https://photos.app.goo.gl/3NDUudjQUo5zTVRd8", label: "2016年10月31日 高雄榮民總醫院 終於能當身心靈健康快樂der英藤惹" }
    ]
  },

  "11": {
    "1": [
      { type: "link", content: "https://photos.app.goo.gl/wg9jfX5jJsgh6ZDCA", label: "2025年11月1日 我差點以為AI影片XD" },
      { type: "link", content: "https://photos.app.goo.gl/1VrF7kxgV3DRrSHk7", label: "2025年11月1日 這個超屌" },
      { type: "link", content: "https://photos.app.goo.gl/aDgy7mmUc29e2ptp8", label: "2025年11月1日 今天這樣會太冷啦" },
      { type: "link", content: "https://photos.app.goo.gl/jX9zRsghCeBXLTvi9", label: "2025年11月1日 我以為是生魚片丼哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/p5j44MWpUG6UTbTs6", label: "2025年11月1日 聲音也超像哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/jb7Mk6vudXFr6rs26", label: "2024年11月1日 \
        這個人可能沒有醫學相關背景 或沒有任何執照 三總ACLS也不可能讓他擔任專任教師 我們醫院是很嚴謹的 各位民眾要睜大眼睛看清楚 \
        好好諮詢身邊真正的醫護人員 再對比他的發文及用詞 就知道真假" },
      { type: "link", content: "https://photos.app.goo.gl/XEFiD7dBCafssLUd6", label: "2024年11月1日 內湖的風直接開箱路邊的機台" },
      { type: "link", content: "https://photos.app.goo.gl/EJp8MGJtNzvcZ7MP8", label: "2023年11月1日 \
        二類組的職業很多都能兼顧生活 運動睡眠休假平衡 還能時常出國跟斜槓工作以外的興趣 醫學只能做醫學 當醫生當到比病人不健康 睡眠不足 30歲還在讀一堆跟鬼一樣難懂的東西 \
        還有考不完的筆試口試 還不能規律運動 圈子也很小各種不敢讓前輩生氣 朋友約個吃飯常常在值班或下班太累 賺個錢比二類的難 還不一定比二類多 未來還得買保險避免被病人亂提告敲竹槓 \
        每次遇到挫折這種負面 但很現實 的想法就會淹沒我 常覺快淹死 真希望當初高中考大學時 就能想這麼多 做正確的選擇 而不是留到現在才抱怨 講完就算了繼續加油" },
      { type: "link", content: "https://photos.app.goo.gl/Z7TRn6d4H2R6ycCi9", label: "2023年11月1日 \
        第一眼在急診室看到30歲男性四肢紅疹 Tonsil也是一堆紅腫跟pus 頓時內心充滿許多特別的DDx 後來經過主治醫師指導 原來是腸病毒感染 \
        腸病毒感染多數不需住院 且supportive care即可 病人因第一次來診時只有tonsil紅腫 以為是acute tonsilitis 結果帶anti回家兩三天仍高燒不退 \
        慢慢出現疹子 二度來診後才發現腸病毒 一個耳熟能詳的疾病 身為內科仔竟沒實際看過幾次 實在有愧 圖取自病歷及自己拍攝 均經病人同意" },
      { type: "link", content: "https://photos.app.goo.gl/68vgHqZZEGvsDo2z5", label: "2023年11月1日 \
        臨床上還沒有遇過很多真的需renal biopsy的患者 但之前碰到一位biopsy後卻不幸產生hematoma的患者 但後來經照顧治療後也逐漸穩定 腎功能恢復中 \
        分享一下Uptodate及腎臟科小麻對於renal biopsy的indication及contraindication 還有發生左腎hematoma的CT影像做紀錄" },
      { type: "link", content: "https://photos.app.goo.gl/UspmAu7CYPdtc4oU6", label: "2022年11月1日 每天晚上回家都變這樣" },
      { type: "link", content: "https://photos.app.goo.gl/D273uKWGByPcnLgY7", label: "2020年11月1日 \
        如果要撕紙鈔12萬 不如拍一支撕紙鈔youtube 再把碎紙鈔做成拼畫 完成台灣的真鈔拼畫紀錄 反正橫豎要撕又要關 說不定這一舉動還能成名 有新聞賺點閱 \
        從此成為瘋狂ytber 以後還有機會賺好幾十萬的月薪 第一部影片就算合法也沒有錢啊 但至少鋪了往後的知名度 就像某玉XD" },
      { type: "link", content: "https://photos.app.goo.gl/K8BjusxGPNMcrVPq9", label: "2020年11月1日 每次值內科班 都有好多新遇到 不知道如何做下一步的鑑別診斷或檢查 花大量時間查閱跟思考也還是有很多疑慮 這種感覺好無力" },
      { type: "link", content: "https://photos.app.goo.gl/Rz7xzqLdpotkaptJ9", label: "2018年11月1日 能長得這麼有張力不多見 但這絕對是今年修過最難最失敗的一張 台灣若不是深山 很難有足夠茂密足夠高的樹林可以凸顯主題 敗在整體而言非常雜亂" },
      { type: "link", content: "https://photos.app.goo.gl/JQxUPJ77v6p75Rcx8", label: "2018年11月1日 \
        Happy Birthday to me Happy Anniversary Happy Christmas 一次過完開玩笑 這家口味價格很像台中的凱恩斯 肉質是蠻嫩蠻新鮮的 只是紅蘿蔔跟玉米很降價它的價值" },
      { type: "link", content: "https://photos.app.goo.gl/CynkuW1LPMPcY4748", label: "2018年11月1日 最雞掰的還是這個 我女友是你跑腿嘛 是不是沒被扁過" },
      { type: "link", content: "https://photos.app.goo.gl/GpU9TeTZFeadyS6F8", label: "2017年11月1日 \
        風景後製家教預計11月底開始 北部為主 其他縣市可討論 會釋出所有我會的技巧 不保留 看你能學到哪裡 課後及後續也能發問 \
        私人原因沒有女生一對一家教 但會規劃班級課程歡迎所有人 請見諒 我要閉關修練更深層次的後製了" }
    ],
    "2": [
      { type: "link", content: "https://photos.app.goo.gl/VU6CSx6wBh1BRrxH7", label: "2025年11月2日 不小心答的太認真 早知道不要亂取名字" },
      { type: "link", content: "https://photos.app.goo.gl/6SiRCRKpXRJP23u99", label: "2025年11月2日 \
        看著前面兩排的老師們 內心一直很納悶 每個週末好幾場的講座 這些心臟科老師幾乎都是熟面孔 幾乎都會出現 現場也會很熱情的分享知識跟case \
        我相信他們平常絕對是超忙 超多病人的 90%生活應該都在醫院 但怎麼有辦法也把一堆假日都奉獻在心臟科 真的是太厲害了" },
      { type: "link", content: "https://photos.app.goo.gl/ryDtNEJkdD5idGMs5", label: "2025年11月2日 下值班 小睡一下 再吃早午餐 馬上趕來上課 真的好累 整個週末都不是自己的" },
      { type: "link", content: "https://photos.app.goo.gl/ePTbGBhuWFiWn1J98", label: "2025年11月2日 巧手的好吃午餐補充體力" },
      { type: "link", content: "https://photos.app.goo.gl/LXHVTyQNnRvWNxKV7", label: "2025年11月2日 昨天值班 今天下午都在上課 上課前跟下課後都有早午餐跟晚餐 太讚的一天 牛肉湯麵大成功 超級成功好吃" },
      { type: "link", content: "https://photos.app.goo.gl/tBjsSJBWT4jyJRuF7", label: "2025年11月2日 是哪個工讀生裝的" },
      { type: "link", content: "https://photos.app.goo.gl/mTAat8kt9KWy9n4y6", label: "2024年11月2日 我在樓上都有聽到你笑" },
      { type: "link", content: "https://photos.app.goo.gl/GJRHNkYijyvd2SsD6", label: "2024年11月2日 林氏璧您是我的偶像 真希望以後跟您一樣走出內科 有自己的人生..." },
      { type: "link", content: "https://photos.app.goo.gl/LiM1qCfZFpCRnC6z6", label: "2024年11月2日 本來就應該這樣啊 很棒" },
      { type: "link", content: "https://photos.app.goo.gl/1xUeAy51MjyCYrky6", label: "2024年11月2日 哈哈哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/gUeMVW5Bge6ZdQM59", label: "2024年11月2日 我也要去讀書" },
      { type: "link", content: "https://photos.app.goo.gl/QHEBxTtM39h6uBwq9", label: "2024年11月2日 不說我以為在大陸" },
      { type: "link", content: "https://photos.app.goo.gl/QHEBxTtM39h6uBwq9", label: "2024年11月2日 這個包包真的超不實用XDDD" },
      { type: "link", content: "https://photos.app.goo.gl/6kPrCEwsSR2ihLuB8", label: "2024年11月2日 真聰明哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/eyUGxxci88svR4K7A", label: "2024年11月2日 簽到" },
      { type: "link", content: "https://photos.app.goo.gl/fzFovVAT7px4jNp56", label: "2024年11月2日 為什麼隱藏自己帳號了 坦蕩蕩是醫護人員的話幹嘛要隱藏 根本有鬼XDDD" },
      { type: "link", content: "https://photos.app.goo.gl/8irqH9xgNeMDTiB27", label: "2023年11月2日 是的 我在下龍灣遊艇行駛中把空拍機飛上去 場景就完全跟小仙女一樣" },
      { type: "link", content: "https://photos.app.goo.gl/GJWHmMHzyLh4Np4Q6", label: "2023年11月2日 我好可憐 要報告的PAPER一堆免疫細胞跟酵素看不懂 還要找高中生物再建立一次免疫學" },
      { type: "link", content: "https://photos.app.goo.gl/b5hQxAA5c1QqKSBW9", label: "2023年11月2日 \
        北越的某個鄉鎮 低矮的民宅格局像極了20多年前的台灣 走過午後陽光斜射下的影子 經過一戶曬大量龍眼乾的鄰家 但旁邊好多蒼蠅 隔壁就是製作魚簍的老翁家 \
        標配有兩位阿麼跟一位主人老翁 我猜也是越南僅存的一戶製作人家 這個地方只能由當地攝影導遊預約且攜帶入場 印入眼簾是長相超可愛的手工竹編魚簍 一大串綁在一起 兩位慈祥的奶奶跟我們打招呼 \
        早在10年前剛學攝影我就注意到有位國外攝影師拍過 卻在十年後才發現原來在越南 對這個地方實在太有印象 因此第一眼真的像是走進夢裡的場景 \
        我們小心的拍攝 生怕弄壞了這些精緻又特別的魚簍 雖然一切都在20分鐘後被韓國攝影團打亂 他們一來就大呼小叫 各種移動魚簍 指示阿麼跟老翁擺pose \
        這種感覺真的非常討厭 非常不尊重 我想擺拍要有底線在 才能在拍攝時感受當下 所謂的攝影團真的到哪國都一個樣呢 \
        最後老翁跟我們要了台灣的硬幣做收藏 趕緊掏了12塊給他 真的很喜歡這裡 希望他們都能快樂長壽 繼續編織著藝術結晶" },
      { type: "link", content: "https://photos.app.goo.gl/4bNecMfd9wyLMQFGA", label: "2023年11月2日 漂亮的拍照地點 好吃的在地美食 當感受到負面壓力時 就打開GOOGLE MAP看看不斷努力收藏的這些景點 用心想像有天帶一起去玩 就比較能撐下去了" },
      { type: "link", content: "https://photos.app.goo.gl/ccWGVDEQVrXersF48", label: "2022年11月2日 可愛死" },
      { type: "link", content: "https://photos.app.goo.gl/nH3yuT6eCLgLV6Eb9", label: "2021年11月2日 11月上班概況 如果我不是在發會診單 就是在發會診單的路上" },
      { type: "link", content: "https://photos.app.goo.gl/63ZhCkctxh7rgmc58", label: "2021年11月2日 \
        DOCTORKOWJ這句好這個是我們錯了 加10分 這句話我幾乎沒從任何一位首長嘴巴聽過 但FROGGYCHIU的邏輯 直切重點的質詢 直接可以給100分 \
        不打嘴砲 不說廢話 不浪費時間表演作秀 不故意搗亂會議 做錯就直接道歉 才對得起納稅錢" },
      { type: "link", content: "https://photos.app.goo.gl/KU8gLpikGu1bZVbY6", label: "2021年11月2日 放鬆一下" },
      { type: "link", content: "https://photos.app.goo.gl/MCBN1vvAReKDyaR67", label: "2021年11月2日 他家的狗說不定都還比較會開車" },
      { type: "link", content: "https://photos.app.goo.gl/jiGQQnRqTU86im8g8", label: "2020年11月2日 我從來沒看過茶類比星巴克價位更尊爵不凡 不愧是所挑 絕對不失望" },
      { type: "link", content: "https://photos.app.goo.gl/LboVPgtEdFLkkkvQ7", label: "2018年11月2日 好想踩" },
      { type: "link", content: "https://photos.app.goo.gl/fEf5X8FLHqYCWpf9A", label: "2018年11月2日 雖然一週年無法一起過還可能在海上 但是終於收到第一個禮物啦" },
      { type: "link", content: "https://photos.app.goo.gl/DDMWsgxubXAjbu2K7", label: "2018年11月2日 別太崇拜我 幫你破解Luminar給你用" },
      { type: "link", content: "https://photos.app.goo.gl/1HVHTYiQNHtcA7cq6", label: "2018年11月2日 有使用flickr的朋友要注意囉 本人我是已經淘汰他了 拿來當備份的備份而已 未來每年須繳50美元才能使用所有功能 我建議不如買一顆硬碟還比較賺" },
      { type: "link", content: "https://photos.app.goo.gl/SGcC3rjRP2sexHyz9", label: "2018年11月2日 有朋友在問 現在依然可到首頁 點選網址填問卷 填完截圖最後一頁私我 還是可以拿桌布噢" },
      { type: "link", content: "https://photos.app.goo.gl/e5UfZsjwRhXU3uGX8", label: "2017年11月2日 收心準備到急診室上班 相機就在防潮箱住一陣子吧" },
      { type: "link", content: "https://photos.app.goo.gl/q5bP5dMhjH8htDCW6", label: "2017年11月2日 \
        OMG 日本特輯 東北奧入瀨 楓葉 整理了一點經驗跟照片 想去日本奧入瀨拍攝的朋友 歡迎參考唷 \
        在日本自駕算是有經驗 但這次也遇上小車禍 有任何關於日本自駕如何申辦 小心事項 保險差別還有拍照景點 請追蹤ig並且從ig私訊詢問唷 我很樂意分享更多經驗" }
    ],
    "3": [
      { type: "link", content: "https://photos.app.goo.gl/5FLGxW9c1ZNguniQA", label: "2025年11月3日 \
        徵求one note高手解決問題 1000塊以上獎金可匯款 上週開始我電腦MAC M2 one note做完筆記 就無法同步到手機one note app \
        我有檢查one drive上one note網頁版的筆記本 也同時沒有更新到我在電腦上做的筆記 我以為是容量問題 試用了付費版 把容量開到100g 但結果沒用 \
        接著重新下載手機one note app也沒用 不管怎麼刷都無法更新 甚至在我升級one drive容量後 我網頁版的one note 再也打不開了 \
        所以總共兩個問題 電腦one note筆記無法同步到網頁上 因此也無法同步到手機one note 這怎麼解 \
        現在one note網頁的筆記打不開了 到底發生啥事 這是從PGY整理到現在的資料 修得好付2000元也沒關係 修不好換notion但超麻煩 有點崩潰" },
      { type: "link", content: "https://photos.app.goo.gl/PnxgE79gqoCbJEsz5", label: "2025年11月3日 紀錄一下 感謝老師 LCX stent+IVUS" },
      { type: "link", content: "https://photos.app.goo.gl/yDxX4uZcSqJLVuLdA", label: "2025年11月3日 這個AI做超像的欸" },
      { type: "link", content: "https://photos.app.goo.gl/BJDoNsagaaM9xSCJ6", label: "2025年11月3日 給滿滿的情緒價值哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/p7qBwZPWsCiUoPLJ8", label: "2024年11月3日 女生正常會這麼兇嗎XD" },
      { type: "link", content: "https://photos.app.goo.gl/9comwn9yiZyKgRuz8", label: "2024年11月3日 這個要趁早去 感覺會被買完" },
      { type: "link", content: "https://photos.app.goo.gl/73VhHAtLy2DHw4mR7", label: "2024年11月3日 沒有騙人啊 很棒" },
      { type: "link", content: "https://photos.app.goo.gl/hYRLQ6DuP2tNVPfd6", label: "2023年11月3日 真的偶像 希望能跟你一樣 能夠活得像人 有自己的未來真的不容易 恭喜 加油啦" },
      { type: "link", content: "https://photos.app.goo.gl/RWx3KbfxoTUUnWCc7", label: "2023年11月3日 \
        帶來這次線香空拍最喜歡的作品及越南攝影心得分享 攝影篇 這次帶了DJI M3c跟nikon z6ll+大三元鏡頭 Marsace C25TR腳架及Mystery x Carryology no escape \
        首先是空拍 基本上河內市區無法起飛 直到郊區拍傳統藝術的地點才能飛 下龍灣則不一定 我在沿海飯店是完全無法起飛 而Sunworld園區則只能飛30公尺 我實在很好奇為什麼有些影片能飛到比摩天輪高 \
        可能是要到更北邊的海邊吧 另外下龍灣郵輪停靠的Bảo tàng ngọc trai vịnh Hạ Long居然也有限飛30公尺 總之下龍灣若要無限高空拍喀斯特地形 可能只能在英雄島上了 \
        再來是攝影 越南真的超適合街拍+風景 尤其是街拍 俯拾即是美景 我最推薦帶z2470 f2.8甚至優於24200 輕便接近定焦的畫質跟大光圈 我幾乎八成的照片都是靠他 \
        至於z1424f2.8 則是連同有風景需求時才推薦 z70200f2.8是一個重量體積大到足以讓我忘記是用無反拍照 優點是能躲過眼神對視 從較遠的距離捕捉主題 而且散景跟景深真的漂亮 \
        但因為重量 只推薦對街拍真的有愛的攝影師 整體而言 下龍灣+河內這個常見的行程 旅拍CP值最高的組合應是DJI+z6ll+z2470 兼顧輕便跟畫面美感 如果不想錯過任何畫面 就可以跟我一樣全帶 然後重的唉唉叫" },
      { type: "link", content: "https://photos.app.goo.gl/wPTXftF1dNUsk49w9", label: "2023年11月3日 新光腎臟內科的學長 富有教學熱忱 這次被我推坑創立了粉專 分享許多專業的知識 經驗跟技術 超級大推喔 看過他的頻道就知多用心 掛保證的讚" },
      { type: "link", content: "https://photos.app.goo.gl/oBzFu41gMQHSKZBZ9", label: "2023年11月3日 完全看不懂啊 八成報不出來 第一次想問能不能換PAPER" },
      { type: "link", content: "https://photos.app.goo.gl/V3g5wYMiM1XEd8GS7", label: "2022年11月3日 \
        歐華酒店 地中海牛排館 低調的隱藏在老舊的中山區酒店 連招牌都快被路邊的樹叢擋住 但印入眼簾的內裝卻非常用心 用餐環境很老派 \
        我們點了熟成牛排跟鴨胸 價格不俗但餐點非常精緻 開胃菜的干貝很推薦 味覺感受到千變萬化的刺激 \
        熟成牛排點標準的三分熟 但失誤在我只點4oz 實在是份量不夠啊好可惜 鴨胸的炭烤味跟軟嫩度都沒話說 不過我們第一次吃鴨肝 難以言喻的味蕾刺激 \
        最後甜點大推冰淇淋的香草口味 還有香蕉蛋糕 來自屏東的神奇巧克力 切開蛋糕同時把味道都融入其中 又甜又香 總之很適合想在紀念日享受高檔料理的朋友唷" },
      { type: "link", content: "https://photos.app.goo.gl/YdfWmWqzsAAzSGdH7", label: "2022年11月3日 \
        響應DOCTORMEME回應醫生很好賺的限動 昨天是我的值班日 早上0730之前到醫院 工作到1700後接著值班 值班後加護病房事情不斷 空檔的時間我都在趕下個禮拜臨時被要求的文獻報告 \
        半夜呢 當然不是好好的睡覺 凌晨一點 兩點 三點 四點 五點 六點 七點都不斷有需要處理的事情打過來 加總睡眠時間四小時左右 \
        現在呢 當然不是開心的下班 而是忙到0830交班後 繼續上班到晚上1800 這就是台灣內科住院醫生的生活 \
        有人覺得等主治醫生之後比較輕鬆 別肖想了 主治醫生沒有勞基法保障 我常常半夜2300看到主治醫生在非值班日跟家屬病情解釋 結果隔天0630又看到主治醫生出現查房 \
        而週末非上班日呢 當然是要自發性回醫院探視自己的病人 外加大小不斷的研討會跟學術會議 這樣的生活, 很多行業低的薪水 你會願意犧牲自己進來當菩薩嗎 別再以為醫生好賺了 有圖為證" },
      { type: "link", content: "https://photos.app.goo.gl/jp8xD9EHKEBhbmnNA", label: "2021年11月3日 會診單發出新高度了" },
      { type: "link", content: "https://photos.app.goo.gl/YFp71MweRTGVpnH6A", label: "2020年11月3日 今早 在醫院喝了杯有些苦澀的黑咖啡 從此踏上心臟內科醫師之路 真 下鄉醫師 CV 國軍花蓮總醫院" },
      { type: "link", content: "https://photos.app.goo.gl/wWGEQzexUBya1ZE37", label: "2020年11月3日 這裡每天醒來好像住山中旅館醒來一樣" },
      { type: "link", content: "https://photos.app.goo.gl/xf5jitGgoH49um8m6", label: "2020年11月3日 我好想趕快搬來花蓮 我不要在台北" },
      { type: "link", content: "https://photos.app.goo.gl/oeNTNmDpLAXyW62X7", label: "2020年11月3日 來決定我的人生該往哪科走了 花蓮車站" },
      { type: "link", content: "https://photos.app.goo.gl/MMv5Zew84Q5mW8Um7", label: "2018年11月3日 \
        以前讀美術班的時候畫畫比賽都得獎 國小用三年的時間 自己畫了一整櫃的漫畫  只要下課午休就是畫畫 夢想是漫畫家 \
        誰知道國中考上美術班 反而被老師當成數資班壓著讀書 後來不會畫畫了變成現在這樣子" },
      { type: "link", content: "https://photos.app.goo.gl/gXkMdah2YQYYR7iP9", label: "2018年11月3日 掰掰 考試加油" },
      { type: "link", content: "https://photos.app.goo.gl/egH7QbKp3vj94C1d9", label: "2018年11月3日 Raw file原始照片 Ps CC處理 Final" },
      { type: "link", content: "https://photos.app.goo.gl/U9Q4guUoruRoBKhJ6", label: "2017年11月3日 Back to Taichung and Tainan" },
      { type: "link", content: "https://photos.app.goo.gl/addufx6wsa1Mi1YW6", label: "2017年11月3日 不管再晚都會有人跌倒撞頭 縫了幾個病人頭皮了 半夜走進浴室請各位小心啊 三總急診室 愛睏不能睏" }
    ],
    "4": [
      { type: "link", content: "https://photos.app.goo.gl/yNMd7rjaoJMj4ZY5A", label: "2025年11月4日 \
        先問你為這個健保體制付了多少錢 你為醫師及護理師付了多少錢 沒付錢就閉嘴 醫護人員不是服務業 不需要服務你 媽的台灣真的很多鬼島民眾欠教訓 \
        不爽就不要來醫院看 沒有醫院歡迎你 也沒有醫護欠你 需要醫護的是你 媽的搞清楚自己的立場 搞清楚在台灣你已經佔了醫護多少便宜 知足一點吧" },
      { type: "link", content: "https://photos.app.goo.gl/5iAG4vS78hytRRve6", label: "2025年11月4日 嘻嘻 從以前拍照圈我就知道這個人有問題" },
      { type: "link", content: "https://photos.app.goo.gl/VeMw3vrMXH8SVEfw9", label: "2025年11月4日 只有我可以捧場" },
      { type: "link", content: "https://photos.app.goo.gl/jHNer2wwtVYcrYFq9", label: "2025年11月4日 真好看" },
      { type: "link", content: "https://photos.app.goo.gl/vNYJgK4TuXUi9ErC8", label: "2025年11月4日 她怎麼那麼厲害 是不是有一百條聲帶哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/zM7jMZFnamKqEuni6", label: "2024年11月4日 這就是台北人的快樂哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/sHs9hNpmySoycexz5", label: "2023年11月4日 \
        看著某位本該早已是VS的學長 用血淚寫下的文章 幸存者偏差 歷史由勝利者書寫 這句話看得我五體投地 這真切形容現況 在這個體制下 太多太多被體制踐踏的軍醫師 \
        軍醫師的家庭也跟著受罪 檯面上因體制得到幸福的人 太少了 但表面卻只有他們被看到 把實況分享給外界醫師或公費生 都驚嘆我們居然能承受這一切 \
        已經看過太多的軍費學長姐血淚之言 更多的只是沒寫出來 這兩個月也見證連兩位學妹用極端方式結束生命 我差點以為自己是在集中營工作 \
        總之 這個體制下大家都非常努力活著 真的是努力 活著 加油了 為自己 也為同為軍醫的人" },
      { type: "link", content: "https://photos.app.goo.gl/moaFndU11gf4K2PM7", label: "2023年11月4日 小孩噎到 不是哈姆立克法 是哈姆立刻扒皮法" },
      { type: "link", content: "https://photos.app.goo.gl/tJF1X3EwFFBMz45W9", label: "2023年11月4日 CVS大師生日快樂" },
      { type: "link", content: "https://photos.app.goo.gl/mFA6V7ZL6x4YSQex8", label: "2022年11月4日 幸好你沒在三總訓練 不然這些都享受不到 值班值到飽" },
      { type: "link", content: "https://photos.app.goo.gl/YReim3UWH5b7TrpZA", label: "2022年11月4日 唉都看不到 什麼時候能去" },
      { type: "link", content: "https://photos.app.goo.gl/kvEfRXpLEPB4ojms5", label: "2022年11月4日 \
        臉書應該很多社團打nikon canon or sony二手買賣就有 加入至少35萬人以上的 裡面假帳號的不要買 婚禮或工作機不要買 太老舊 相隔兩代以上 機型的不要買 \
        沒有盒單的不要買 初階機型不要買 三大牌以外品牌不要買 換過快門簾的不要買 其他的眉角還很多難以用文字表達 \
        另外3000元買不到相機不要肖想了 除非底片機 所以價格完全不合理 在二手社團問3000元買二手相機 除非正到國色天香 否則絕對被嗆到刪文 \
        買相機原則上就是至少要比手機好用 不然不用浪費錢 比手機好的相機 差別在於夜景 星空 畫質跟連拍 鏡頭+機身預算大約15000 20000初頭 \
        講白一點 買這個價位以下的都形同垃圾 回家佔空間而已XD 對了 越輕越簡的相機就越貴 越笨重的相機就越便宜 這點蠻多人誤會的除非傻瓜相機才有辦法便宜又輕便 " },
      { type: "link", content: "https://photos.app.goo.gl/peSdeSS3GzQ6v3TM6", label: "2022年11月4日 下一張照片應該是他的臉被貓貓貓一拳XD" },
      { type: "link", content: "https://photos.app.goo.gl/edwamuYGcnqAuM6fA", label: "2022年11月4日 食道癌的病人做完PET 請問圖中箭頭的位置是脾臟嗎 食道癌脾臟也會亮嗎" },
      { type: "link", content: "https://photos.app.goo.gl/kvovhh7e8NCZHKEKA", label: "2022年11月4日 忙碌中邊打病歷邊吃" },
      { type: "link", content: "https://photos.app.goo.gl/3zfzMdtouZygV9Aj8", label: "2021年11月4日 \
        看到這個突然回想到上週六幫忙疫苗診 我對所有來打的民眾都叮嚀一句話 胸悶胸痛喘呼吸困難 一定要馬上到急診 不要忍 \
        不管是不是跟疫苗有關 說再多的衛教 不如講最保命的提醒" },
        { type: "link", content: "https://photos.app.goo.gl/ADv2QKfsdRWzyppU9", label: "2020年11月4日 很多人第一次煎蔥油餅 都會不小心把他煎出鍋外 我也不例外 這時候只要把他放回去加溫殺菌即可 認真覺得我還算有點煮菜天份 吧" },
        { type: "link", content: "https://photos.app.goo.gl/u9L2jqoYmBTfgzhC8", label: "2020年11月4日 第一次下廚養活自己 但蠻好吃的哈哈哈" },
        { type: "link", content: "https://photos.app.goo.gl/vweuMRuDkewV2GrW9", label: "2020年11月4日 開箱祝賀" },
        { type: "link", content: "https://photos.app.goo.gl/tnf6zizp9qqpgjRZ6", label: "2020年11月4日 感謝在國防遇到的每一位同學 幫助人生每一個階段度過繁忙的工作" },
        { type: "link", content: "https://photos.app.goo.gl/DC8HyzivARqsD19c9", label: "2020年11月4日 感謝在遇到的每一位同學 幫助人生每一個階段度過繁忙的工作" },
        { type: "link", content: "https://photos.app.goo.gl/8sUzUtcRhwKmm6i7A", label: "2020年11月4日 正威生日快樂 祝福你在內科找到工作的熱忱 走內科實現人生的成就" },
        { type: "link", content: "https://photos.app.goo.gl/t1zum4nB6s6yowiS8", label: "2018年11月4日 這三個一週年&生日手作禮物卡片 不知道讓我在海上花了幾個夜晚" },
        { type: "link", content: "https://photos.app.goo.gl/139SpDDJFcG7VYC2A", label: "2018年11月4日 這個月又要開始海上不知道飄好幾天了 唉我會加油的 每次短聚都給我滿滿能量" }
    ],
    "5": [
      { type: "link", content: "https://photos.app.goo.gl/CENmbF3t9fH87tEK6", label: "2025年11月5日 \
        在台灣醫療環境崩壞 醫師人力越來越缺乏的時代 網路上依然還是有這種惡意造謠 不斷攻擊醫生的帳號 可能他知道自己的文章漏洞百出 因此用假名發文 \
        而且他還自己承認曾經考不上醫學系 看來就是一個得不到就要毀掉他的偏激性格 希望這樣的人越來越少 他不會影響到我們第一線救人的決心 但可能會對民眾傳達錯誤的價值觀" },
      { type: "link", content: "https://photos.app.goo.gl/eWnwovaVAYFawi8N9", label: "2025年11月5日 \
        從10月底困擾到今天的one note無法同步問題好像解決了 感謝谷歌工程師跟最後幫我重新下載app 原來根本問題是 電腦app更新的資料直接離線 \
        所以東西都存檔在電腦而不是雲端one drive 間接導致雲端沒更新 手機也就無法同步 加上我之前用盜版的 所以雲端one note先買了正版的容量後反而被阻斷登入 \
        這裡感謝提醒我買正版的重要性 總之感謝很多朋友的意見 貌似暫時解決 也把近期的筆記更新了" },
      { type: "link", content: "https://photos.app.goo.gl/kHdja5D9LEY23iVc7", label: "2025年11月5日 你不可能祈禱所有人智商都在線 所以這些東西永遠都能騙到錢" },
      { type: "link", content: "https://photos.app.goo.gl/M3mkdV6wiHaQdDiC7", label: "2025年11月5日 看來我有安慰到你那脆弱的自卑心了, 算今天做了一件好事 不過建議還是掛號看精神科比較好唷" },
      { type: "link", content: "https://photos.app.goo.gl/DLDoEcuosHRMi1j3A", label: "2025年11月5日 人不怕無知丟臉這就是最經典的帳號" },
      { type: "link", content: "https://photos.app.goo.gl/BaH51h2CwFKY2rHd9", label: "2025年11月5日 浪浪都知道感恩XD" },
      { type: "link", content: "", label: "2024年11月5日 \
        因為聰明的人讀書不能中斷思考 所以必備物品必須擺出來才能馬上拿取 還有就是收拾會讓自己分心 因為收拾了一點就會想整理更多 時間因此被浪費 \
        因此我很認真的說 真正聰明的人都只收拾該收拾的 但需要的東西不會浪費時間收拾 這樣會導致效率嚴重下降 高效率的完成事情跟產出作品 遠比只有收拾後的美觀重要" },
      { type: "link", content: "https://photos.app.goo.gl/ihQWAhJGLFDT3ihcA", label: "2024年11月5日 對啊 那個大象很像蜘蛛哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/SmTmDp2ivaWQC4Lb7", label: "2024年11月5日 養貓貓必備" },
      { type: "link", content: "https://photos.app.goo.gl/WkJoSgASJEYpcT4e7", label: "2024年11月5日 雖然我沒有什麼FUNCTION 但至少能守護偉大的導管戰士的早晚餐!" },
      { type: "link", content: "https://photos.app.goo.gl/nXXbBU1YU4MaJEMSA", label: "2024年11月5日 能夠幫鄭V搬家過 是我的榮幸 這輩子可以說嘴了" },
      { type: "link", content: "https://photos.app.goo.gl/oUh8V6GRgW3wmm4T9", label: "2024年11月5日 看起來是積怨很久了哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/TbM5NjiwZhMVpb2x5", label: "2024年11月5日 \
        用心讓理解什麼是日照節約時間 期末考題 美國日照節約時間 調整前後之差異 下列敘述何者錯誤 一天一樣是24小時 白天總時長一樣 此人總睡眠時間一樣 此人白天活動時間多一小時 此人晚上活動時間相同" },
      { type: "link", content: "https://photos.app.goo.gl/dXGU7tzkQCsWNNb47", label: "2023年11月5日 \
        流浪的八九月 應該是R3最幸福的兩個月 應該留下文字紀錄 九月松山分院 松山分院是台北繁華市區裡的綠洲 有別於三總如天降大雨般的病人數及雜事 在這裡更多閒逸的氣氛跟和藹的老師們 \
        內科R1開始便有自己的辦公桌 每個人都有電腦開order 在三總去開個會 查房 晚點到醫院就沒電腦用了 每天0800開始 主治醫生多會自己看完病人 也有會帶查房跟教學的 \
        比起總院需侍奉某些老師 這裡更像一個平等的團隊 當然好的老師總院也有 值班累度大約是總院3233病房的1/3 2/3 雖然第一天值班就遇上急放葉克膜 值班隔天的早餐 感受滿滿老師的溫暖 \
        中午準時的PM 能不再懼怕值班的辛苦 除了需自己組裝CVVH 剩下的分胸水腹水 送檢體 做EKG 都不虛忙碌的值班醫師來做 著實感受到外面醫院的正常光景 \
        總的來說 松山分院內科有比三總小科 適合身心發展 值班數合理 有時間好好讀書跟充電 周圍也很多美食 步出醫院門口十分鐘路程 反觀三總步出醫院門口十分鐘才能走出院區 也很感謝學長每日帶交班 彌補孱弱不堪的內科知識 \
        十月急診 急診曾經是內心渴求的科別 但真正身歷其境才知苦 不能只被連假的甜美吸引 我是進入狀況特慢的人 月底才慢慢適應步調 學習迅速整理病人的狀況並打會診電話真不習慣 \
        也常常忘了接電話跟拿order單 快速的步驟 遲疑了幾分鐘 事情就被身旁的急診人做完了 常顯得自己多餘 卻也從他們身上看到迅速而有節奏的處理方式 \
        急診像是每月急性的疼痛 每次12小時班都如中長距離跑步比賽 需要速度跟耐力齊聚 然而痛楚過後的甜美連假 卻能撫慰身心及完成許多夢想 內科像是好不了的慢性疼痛 雖然可以忍耐卻永遠緩解不了 \
        不論上班下班依舊惦記醫院 也沒有什麼連假可言 只能說很感謝急診人的包容 很感謝讓我能處理一些雜魚小事 第一線面對最新鮮的病人 還要記得十多位患者的檢查治療進度並交班 感受到滿滿的衝擊 \
        回歸後的十一月 這個週末終於上完AHA ACLS 聽說是能在美國CPR的 應該有過吧 最後附上跟學長聚餐閒聊 他整理了許多內科教學影片 大推薦追蹤跟訂閱他的頻道囉" },
      { type: "link", content: "https://photos.app.goo.gl/5jRgZSNFoNQan1t56", label: "2023年11月5日 部隊兄弟創業 誠意滿滿 高雄的朋友可以參考" },
      { type: "link", content: "https://photos.app.goo.gl/mWor21nr31Lhou897", label: "2023年11月5日 野原一家差小葵就完美了 下次去買小葵" },
      { type: "link", content: "https://photos.app.goo.gl/Di31xpCsT4StVjvU7", label: "2023年11月5日 第一次GPS飄成這樣" },
      { type: "link", content: "https://photos.app.goo.gl/TFP3kzYmugG4Ybh17", label: "2023年11月5日 查資料突然看到大阪跟京都的廣告 原來台灣有信義日本在弄 看看價格大概台幣1000 2000多萬就能住市區 忽然心動一下 就一下" },
      { type: "link", content: "https://photos.app.goo.gl/mQHtctcWwTjzZajb7", label: "2022年11月5日 \
        我到底這兩個月為什麼一直瘋狂趕報告 這些報告知識很多都非常刁鑽 我這個很需要時間讀基礎內專的人 做這些到底有什麼幫助 \
        花了大把時間不見的真的懂很難的研究 卻犧牲我的生活品質 已經一個月沒有運動 也少很多時間學臨床的CASE" },
      { type: "link", content: "https://photos.app.goo.gl/u5FKBqCuPfRL6c4Y6", label: "2022年11月5日 生日之請她吃大餐第二彈 第二次請吃大餐再慶生一次" },
      { type: "link", content: "https://photos.app.goo.gl/EtU1iYzugRXgFp8P6", label: "2018年11月5日 \
        到底是坐高鐵轉乘快呢 還是直接從台北搭客運快呢 我也很難用隻字片語來形容到這裡的路程 通常都得騎機車從營區出來 或走路 然後搭上往台北的火車 \
        到了台北再走去搭往台中的高鐵 到高鐵之後再搭往埔里總站的客運 到了之後再走去附近租機車 最後慢慢騎到暨南找我女友 \
        也許是感情依存 我不後悔來這裡找妳 就算這樣的路程我已經能回家兩趟 或許 妳畢業以後我們還是會想念" },
      { type: "link", content: "https://photos.app.goo.gl/Mo9REd7PMotjwMPt6", label: "2018年11月5日 這是我的畢生夢想 這輩子工作很大部分為了實現這個夢 真希望跟這幾位醫生一樣" }
    ],
    "6": [
      { type: "link", content: "https://photos.app.goo.gl/72oK23L62VEGuMay5", label: "2025年11月6日 等到等打哈欠了哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/MQnmJ35tsSqRsVyp8", label: "2024年11月6日 抽菸就是該死啊 有啥好討論" },
      { type: "link", content: "https://photos.app.goo.gl/7ooW6PKTCJUAv5s46", label: "2024年11月6日 我也是" },
      { type: "link", content: "https://photos.app.goo.gl/MvvShxTtMDTGmriL9", label: "2024年11月6日 這個學妹真有禮貌 現在還有學弟是直接消失的 月底分數太低才來投訴 只能說新世代的觀念已經不一樣了 以後大家都走人人為己的路線" },
      { type: "link", content: "https://photos.app.goo.gl/MCQQnxieCM3mXQPg6", label: "2024年11月6日 因為不懂日照節約日的概念 因此我趕快出了三題考題幫助她理解 題目看起來很長 其實很簡單都可以快速想出來 也可以用排除法作答" },
      { type: "link", content: "https://photos.app.goo.gl/PbApPfTTpKfTPJjZ9", label: "2024年11月6日 不是 你是小聰明啊" },
      { type: "link", content: "https://photos.app.goo.gl/g8fucs4H4GwE9xki6", label: "2023年11月6日 住院醫師要當得那麼卑微嗎 護理師 NP都是環境下的受害者 醫師不也是嗎" },
      { type: "link", content: "https://photos.app.goo.gl/4oUnVDoh6WjuKQBo8", label: "2023年11月6日 \
        雖然我今天發生了很多不幸的事情 包含影響終身的悲慘大事 但還是要鼓起勇氣 好好努力 即便承受著痛苦 也要好好生活 珍惜身邊的人跟朋友 願一切安好 然後生日快樂" },
      { type: "link", content: "https://photos.app.goo.gl/5xH6FbLP6BEHMEL79", label: "2022年11月6日 有錢人就連車子都不怕撞 反觀我們平民" },
      { type: "link", content: "https://photos.app.goo.gl/heg8rzgrqGKJNTi26", label: "2020年11月6日 有夠淺zz 工作並不是為了功名利祿好嗎 工作是為了溫飽肚子能夠對自己的獨立生活負責 不然想期待誰平白無故養妳 果然學校畢業了但心智還沒畢業" },
      { type: "link", content: "https://photos.app.goo.gl/629H4AuQuperne1k8", label: "2020年11月6日 bradycardia如果小於10下是不是通常要立刻性的處理 那如果介於10 50下 是怎麼評估立刻性處理還是先觀察後續變化 除了血壓之外" },
      { type: "link", content: "https://photos.app.goo.gl/f1djF1HwAXmdKEiK7", label: "2020年11月6日 \
        56男主述胸痛 但沒有喘來急診 Ekg normal Lab data wbc12000 Ck Tnl normal 電腦斷層做起來長這樣 請問肝臟看起來白白的 \
        上半部那裡 可能是肝硬化或什麼原因嗎 目前還沒診斷只是我很疑惑 謝謝@@ 這是正面" },
      { type: "link", content: "https://photos.app.goo.gl/C8Se6q1ofj86BP848", label: "2018年11月6日 看到學長分 感觸非常非常深" }
    ],
    "7": [
      { type: "link", content: "https://photos.app.goo.gl/JuL7qXVXqViPRLXY8", label: "2025年11月7日 生日快樂 今年應該是禮物最早又最多的一年" },
      { type: "link", content: "https://photos.app.goo.gl/pqTefhnJjbVwZQew6", label: "2025年11月7日 幸好我都會幫你回去拿" },
      { type: "link", content: "https://photos.app.goo.gl/YYwgg8wTakM273gdA", label: "2025年11月7日 好久沒有有氧 又慢了不少" },
      { type: "link", content: "https://photos.app.goo.gl/M7wdGvXCjwpvv2cC7", label: "2025年11月7日 趕在今天結束前還是要Po一下 生日快樂 居然一起在台北打拼五年了 北漂的生活辛苦但也慢慢接近尾聲 以後也要繼續一起努力 一起去旅行" },
      { type: "link", content: "https://photos.app.goo.gl/ciPBjzdU9nS6weds5", label: "2024年11月7日 \
        看著許多朋友每年固定的出國慶生 還有各種度假 反觀妳一起陪我在台北辛苦的過每一天 幾乎沒有出國玩甚至出遠門的機會 真的很謝謝妳的陪伴跟包容 \
        今年生日需要值班 沒辦法好好慶祝 希望未來能有正常人的生活品質 繼續踏上全世界的拍照旅程" },
      { type: "link", content: "https://photos.app.goo.gl/dkGzq7qQnLXVUgN38", label: "2024年11月7日 那請他多吸幾口氧氣 怕是很快就吸不到了" },
      { type: "link", content: "https://photos.app.goo.gl/UGHWayS1eF93b5WWA", label: "2024年11月7日 生日快樂 居然在生日DAY值班 希望禮物一號能彌補這個過錯 然後等禮物二號漂回來 希望在台北這個動亂的時期趕快結束 能夠過上有品質沒壓力的生活" },
      { type: "link", content: "https://photos.app.goo.gl/QpND8YbNMcfAgCxH8", label: "2023年11月7日 \
        魚簍阿嬤特輯 魚簍有可愛的阿公跟阿嬤特輯 先分享阿嬤特輯系列 北越某處偏鄉 低矮的民宅格局像20多年前的台灣 \
        走過陽光斜射下的影子 經過曬大量龍眼乾的鄰居 但旁邊好多蒼蠅 隔壁就是製作魚簍的老翁家 標配有兩位阿麼跟一位主人老翁 我猜也是越南僅存的一戶製作人家 \
        這個地方只能由當地攝影導遊預約且攜帶入場 印入眼簾是長相超可愛的手工竹編魚簍 一大串綁在一起 兩位慈祥的阿嬤跟我們打招呼 \
        早在10年前剛學攝影我就注意到有位國外攝影師拍過 十年後才發現原來在越南 對這個地方實在太有印象 因此第一眼真的是走進夢裡的場景 \
        我們小心的拍攝 生怕弄壞了這些精緻又特別的魚簍 雖然一切都在20分鐘後被韓國攝影團打亂 他們一來就大呼小叫 各種移動魚簍 指示阿麼跟老翁擺pose \
        這種感覺真的非常討厭 非常不尊重 我想擺拍要有底線在 才能紀錄體驗真實 所謂的攝影團真的到哪國都一個樣呢 \
        最後老翁跟我們要了台灣的硬幣做收藏 趕緊掏了12塊給他 或許是來自台灣的旅客太少了呢 真的很喜歡這裡 希望他們都能快樂長壽 繼續編織著藝術結晶" },
      { type: "link", content: "https://photos.app.goo.gl/4fGDZfh1Bw4R2SHT7", label: "2023年11月7日 這張空拍跟鬼一樣 真的有夠美 彷彿樹葉要衝破平面了 超想自己去拍 印刷裱框放家裡" },
      { type: "link", content: "https://photos.app.goo.gl/LC9qZEfyo6vLqGWN9", label: "2023年11月7日 今天是吳展旭的生日" },
      { type: "link", content: "https://photos.app.goo.gl/NBDDFp2AXPHyHc3N7", label: "2023年11月7日 學長謝謝 但今天不是我生日 不知哪顯示錯誤QQ" },
      { type: "link", content: "https://photos.app.goo.gl/JyyshhpgdwS4nDKU8", label: "2022年11月7日 \
        一堆宣稱能降血脂的食物 一聽就知道是詐騙廣告 但無良商家拼命宣稱這些食物能降血脂 尤其紅麴 看到好幾次電視廣告了 每次都很想吐槽 \
        這次終於真相大白 只有真正的降血脂藥才能降血脂 不要相信醫師開立以外的騙人商品" },
      { type: "link", content: "https://photos.app.goo.gl/mDHAg27Rgtxx19vj8", label: "2021年11月7日 \
        生日快樂&生活分享No.6 當內科住院醫師的日子 是台灣數一數二高工時 沒有加班費 沒有補假 沒有高薪 也沒有時間拍照修圖 \
        雖忙碌如此 但不能忘記的 是祝今天生日快樂 謝謝妳的包容陪伴 不能有說走就走的旅程 也不能有下班就完全不管工作的放鬆夜晚 \
        真的辛苦了 必須忍耐這些日子 希望以後繼續一起努力 一起拍照 一起享受生活唷" },
      { type: "link", content: "https://photos.app.goo.gl/7EqUREK5VYjtxX6AA", label: "2021年11月7日 今天的乘客是某醫學中心的精神科黃醫師" },
      { type: "link", content: "https://photos.app.goo.gl/KH1rYMyzSJHwS35R9", label: "2021年11月7日 生日快樂 超好吃的巧克力蛋糕 跟上個月才剛出的高級結果手機太舊不能用的手錶 度過今年平安的生日" },
      { type: "link", content: "https://photos.app.goo.gl/Q7zXgixKsSjjxEmu5", label: "2020年11月7日 軍費生更慘" },
      { type: "link", content: "https://photos.app.goo.gl/XhH9zDR5z7SWCmm28", label: "2020年11月7日 生日快樂 金色三麥 台中市政店" },
      { type: "link", content: "https://photos.app.goo.gl/ry8MdPoP5kS2g5Ba7", label: "2020年11月7日 請問如果需要能清楚聽所有心音的聽診器 有推薦哪支比較好的嗎 請問雙管的是哪種 有推薦的牌子嗎 謝謝" },
      { type: "link", content: "https://photos.app.goo.gl/T6RTdQWFbs61kSBM7", label: "2018年11月7日 生日快樂 但今天我只能心靈上支持" },
      { type: "link", content: "https://photos.app.goo.gl/oTiTtVrkzzYWq8T57", label: "2018年11月7日 宜蘭山城因為純樸與乾淨 拜託不要開發不要開發 什麼時候再一起去小旅行" },
      { type: "link", content: "https://photos.app.goo.gl/nnZV9w2a5HwPpwjY6", label: "2018年11月7日 \
        醫療知識關係到生命安全 並不是開玩笑能帶過 請不要散播或相信這種可惡的詐看文章 看到這種言論真的很氣 不管挺不挺同 \
        很難相信有人會相信這篇文章 甚至明知大錯特錯的論調但為了反對而造謠 就算沒有醫療知識也會知道內容非常可笑" },
      { type: "link", content: "https://photos.app.goo.gl/DTJBTyS81fmvULLd8", label: "2018年11月7日 謝謝可愛幫做蠻像我的人 很像醫療粉專的照片 讓我有動力換了頭貼" },
      { type: "link", content: "https://photos.app.goo.gl/BJDBiER3vFSzfzA37", label: "2018年11月7日 \
        台北市政府有展出我的作品 我完全無緣跟自己作品碰面 有好心朋友可以跟我作品合照給我看 我的作品展出在台北市政府站喔 但我無緣親自去看他 \
        我的作品在台北市政府站展出喔 但我根本無法親自看到 漂泊人生啊 唉" },
      { type: "link", content: "https://photos.app.goo.gl/tw7rDt7EB1LYpTeG7", label: "2018年11月7日 \
        第二個生日我被督導轟炸的體無完膚 而妳也在期中考試與報告 但大浪中的燈塔非你莫屬了 每次的放假都是兩次的客運 兩次騎車一次高鐵才能在深山找到妳 \
        但卻非常值得 祝18歲的妳生日大快樂 要好好跟我的大禮物相處喔 但內心還是會增長的 目前30歲" }
    ],
    "8": [
      { type: "link", content: "https://photos.app.goo.gl/CmA7BiArV36xy2ZB9", label: "2025年11月8日 看到這個超氣 鼓勵全台灣的醫生護理師都要硬起來 這種干擾看診的行為就是要教訓跟教育 我自己身為醫生 去掛號看診也完全乖乖排隊 乖乖等 乖乖繳錢 醫療本來就是建立在尊重上" },
      { type: "link", content: "https://photos.app.goo.gl/SkGjD8VxDnc33q6C8", label: "2025年11月8日 這就是現在台灣醫療制度的偽善 應該提倡所有醫生跟護理師可以大力大方的糾正病患跟家屬 而不是各種受到委屈跟投訴都要自己小心 該小心的是這些白癡民眾" },
      { type: "link", content: "https://photos.app.goo.gl/jJp8pAxwc1T7CvB89", label: "2025年11月8日 \
        眉心遭子彈打中 腦袋裡早就被碎片衝擊成一團漿糊了 你跟我說不會馬上死亡 惡性主動脈剝離 主動脈剝離沒有分惡性不惡性 只分裂的位置 如果裂在降主動脈以下不一定會馬上死亡 \
        在急診看過從升主動脈裂到下肢的common iliac artery也暫時活得好好的 不知道原PO是不是真的醫生 有看過病人 出題目但跟錯誤的答案跟解說 誤導大眾" },
      { type: "link", content: "https://photos.app.goo.gl/z3FjNuL1xsiDLAaS7", label: "2025年11月8日 認同 不懂還賣弄 民眾誤以為真 真的臨床醫生一看就知道錯哪" },
      { type: "link", content: "https://photos.app.goo.gl/cS8YLMRrxTM9JQy59", label: "2025年11月8日 所以他題目其實出的很不好 沒有貼近現實狀況" },
      { type: "link", content: "https://photos.app.goo.gl/Pgx9AHc2tmS2nx6S8", label: "2025年11月8日 學長我覺得是上癮的問題 只能靠抽煙來紓解壓力" },
      { type: "link", content: "https://photos.app.goo.gl/hyga7dyZhVWcAZMt7", label: "2025年11月8日 做過去的瞬間大家一起拍手很重要" },
      { type: "link", content: "https://photos.app.goo.gl/oeqCc7YFMjKh4Gh2A", label: "2024年11月8日 這些心靈課程的白癡老師 很適合跟破壞承諾的政治人物大聲" },
      { type: "link", content: "https://photos.app.goo.gl/febJGDKuKHxNMRjr7", label: "2024年11月8日 你為啥都還沒加我無名小站好友" },
      { type: "link", content: "https://photos.app.goo.gl/2Yst5i44bZr4wGEF7", label: "2024年11月8日 不是軍職 都不知道軍職多可悲QQ" },
      { type: "link", content: "https://photos.app.goo.gl/PZ2gYF82piiL25Vi7", label: "2024年11月8日 我哪有那麼誇張~~" },
      { type: "link", content: "https://photos.app.goo.gl/QRFVbVqjcEm11e188", label: "2024年11月8日 \
        鐵砧山碉堡 夕陽 之前看見有人拍低空雲海搭配碉堡 就非常想來 前陣子甚至想拍流星搭配這個地景 可惜沒什麼時間拍照 這次踩點後來介紹一下 \
        開車或騎車前往的話google鐵砧山大草原 建議停車在此 yt上有影片是開越野車上去 但極度不建議 一來路難走而且沒有迴轉空間 更可能會擦撞影響行人 \
        從這裡走上去 慢慢步行約2030分鐘 走快一點更快到 走上去沒什麼遮蔽處但秋天開始很涼爽 搭配夕陽跟開闊的視野非常漂亮 \
        傳統的視角是走到底V型向右轉上去拍 不過我是從左邊草叢拍攝 這是一個很親民的景點 希望遊客能愛護這個少見的碉堡" },
      { type: "link", content: "https://photos.app.goo.gl/xQmPCRzEcu1qc7gc9", label: "2023年11月8日 \
        攝影界的重磅消息 A9III全域快門的釋放 過去相機都是滾動快門為主 也就是拍攝瞬間由上至下感光 所以有時使用閃燈 閃快過可以同步的快門速度時 就會出現上面亮下面暗 \
        或是拍攝動態系列時 同一張照片上下半部感光時間略有差異 而全域快門就是感光瞬間 由整片感光元件一起感光拍攝 不會有畫面上任何一點的時間誤差 \
        對於風景應該還好 但動態跟人像創作這類的 是劃時代發明了" },
      { type: "link", content: "https://photos.app.goo.gl/DPVYsax13yeMJa4f6", label: "2020年11月8日 笑死" },
      { type: "link", content: "https://photos.app.goo.gl/xosS5opQQT4jD1hw5", label: "2020年11月8日 第一次吃到這種食物 大家猜猜這是什麼 是螺菰 是螺肉" },
      { type: "link", content: "https://photos.app.goo.gl/c6AhV3XrdRpoUK1i6", label: "2020年11月8日 唯一支持的國防部高官" },
      { type: "link", content: "https://photos.app.goo.gl/oBPegZxvJGJGZJwx9", label: "2019年11月8日 \
        絕對數醫師賺的錢不只是正當 更是在台灣被剝削之後的賤價 健保已經讓台灣很多重症醫師做了多少沒薪水的功德了 羨慕醫師賺的相對好一點 \
        根本不多 只是生活穩定 有本事來考看看有沒有資格進醫學院 再來試看看能不能撐過五六年以上幾乎沒有假日甚至一口氣上班超過40小時的惡質生活吧" },
      { type: "link", content: "https://photos.app.goo.gl/1ZmNsxJjqnS1DEoD8", label: "2019年11月8日 哇喔喔喔喔喔喔 這是我收過最精緻漂亮的卡片 謝謝用心" },
      { type: "link", content: "https://photos.app.goo.gl/zrkBe4qS6t9UbGGs6", label: "2018年11月8日 醫師也是要進階好嗎 不然 GY住院總主治分假的 時間還花的比護理師久 不用特別提第一句來誤導視聽 陳述你要表達的就好" },
      { type: "link", content: "https://photos.app.goo.gl/3J5rTuuNUVN8h7UB9", label: "2017年11月8日 回到內湖三總 準備今晚的演講 還有一個禮拜多連續急診上班" },
      { type: "link", content: "https://photos.app.goo.gl/AsJJ5kjzacQxw8QKA", label: "2016年11月8日 徵外拍模特兒 清新健康 攝影本是快樂事 車馬費詳談 可長期 文藻外語大學 西三C教室" }
    ],
    "9": [
      { type: "link", content: "https://photos.app.goo.gl/kWf4GbMFb26eT6GdA", label: "2025年11月9日 這他媽超沒品 我支持吊銷這個醫生的執照 如果屬實的話 建議大家去檢舉太可惡" },
      { type: "link", content: "https://photos.app.goo.gl/TgNwFFcyGGmB1Hhj8", label: "2025年11月9日 哈哈哈哈超好笑" },
      { type: "link", content: "https://photos.app.goo.gl/6TzGtHfi7uwpWHiE7", label: "2024年11月9日 這就是天蠍座哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/ZwLLqz5hAAhLe1Np9", label: "2024年11月9日 \
        一定能 但畢竟台灣政府跟醫療官員都是弱智居多 他們那些智障只想當好人邀功 完全不會體恤酒駕受害者跟醫護人員 所以鬼島別想了" },
      { type: "link", content: "https://photos.app.goo.gl/Dw4K6ZrtrgT2bWhj6", label: "2024年11月9日 八萬公里保養 大破錢包 賺都存不了多少錢" },
      { type: "link", content: "https://photos.app.goo.gl/fbXSD2p53A9LQ2sK8", label: "2023年11月9日 \
        無關乎醫學 已親眼見過聽過兩個案例 都是胰臟囊腫之類的 後續病人被發現其實是惡性 反過來告醫師 惡意求償數百萬 \
        台灣的醫療環境並不好 遇到貪心貪錢的家屬或病人 醫師護理師是弱勢族群 但沒有人可以幫我們 那兩起案例 都靠著病歷跟護理紀錄證明醫療團隊已完善告知追蹤義務 \
        才沒有被惡意的家屬敲詐數百萬 見過學長姐夠多辛酸血淚 病歷上一定要記載清楚有告知患者檢查結果及後續風險 \
        無關乎知識 但被告一次 即便無罪 僅存的行醫熱情絕對一點都不剩" },
      { type: "link", content: "https://photos.app.goo.gl/c72VMU8cqytDdjzZ8", label: "2022年11月9日 \
        上次跟去綠島我把腳架摔爆 但謝謝公主大老遠幫我買到MARSACE 1543喔喔喔 雖然我已經很久沒辦法拍照了但還是好感動 今年最棒的禮物了嗚嗚嗚" },
      { type: "link", content: "https://photos.app.goo.gl/hj1MuZusrXZBYuP87", label: "2021年11月9日 \
        連台大醫科醫師都會被騙 全台灣應該沒人敢保證自己不會被騙 所以我決定分享一下 \
        任何網購紀錄都要當成公開資訊 不要以為只有官方知道 任何要輸入匯款帳號的操作 就算是真正的銀行打來也不要做 \
        任何指示你不在銀行現場的轉帳或匯款 絕對不做 以上做到就不可能被詐騙" },
      { type: "link", content: "https://photos.app.goo.gl/DhFwaGh9ieP7wFZu9", label: "2021年11月9日 感覺有點厲害" },
      { type: "link", content: "https://photos.app.goo.gl/ttkyJJorYBQEGPEj7", label: "2020年11月9日 光是眷舍有得申請就屌打某台北醫學中心 唉" },
      { type: "link", content: "https://photos.app.goo.gl/XxvK557dWQgxmXYV9", label: "2019年11月9日 這個月底終於可以放長假了 隊長 虱令部月底抽測戰技 我" },
      { type: "link", content: "https://photos.app.goo.gl/g4tisJn8duNTFqRH6", label: "2019年11月9日 第一次投幣式自助洗車經驗的紀錄 避免下次再手忙腳亂" },
      { type: "link", content: "https://photos.app.goo.gl/CMFZoK8Enq36JShB8", label: "2019年11月9日 推台中西屯油工廠 休旅機油1350 一大罐五公升 還比原廠高級 去保養原廠賣我五罐 小的 650*5=3250 瞬間省1900元還更高級" },
      { type: "link", content: "https://photos.app.goo.gl/1vRsnCJobcDKku3X6", label: "2018年11月9日 \
        為民發聲是很好 但事情能否不要虎頭蛇尾做一半 軍人退場機制被國防部擺了一道 軍醫空官退場就是3000萬 \
        根本就想逼瘋不適應人員 退場機制形同虛設 可否請委員大力監督 別讓國防黑布繼續用惡法好嗎" },
      { type: "link", content: "https://photos.app.goo.gl/rb5sWcuNN1dLN3FB7", label: "2018年11月9日 沒有這個規定 沒有人說過要這樣 BJ4" }
    ],
    "10": [
      { type: "link", content: "https://photos.app.goo.gl/7iE312pRscM57Tm47", label: "2025年11月10日 這已經病入膏肓到嗆你都感覺自己格調降低了 留友看就好 自卑心也能擴張成世界奇觀 讓大家笑笑" },
      { type: "link", content: "https://photos.app.goo.gl/Xe43DKudKbndnDnA7", label: "2025年11月10日 爸媽應該放棄了 畢竟連我們醫生也覺得救不了XD" },
      { type: "link", content: "https://photos.app.goo.gl/EyeZmae7HPsBAe3b8", label: "2025年11月10日 這帳號說不定是真話俠本尊" },
      { type: "link", content: "https://photos.app.goo.gl/qfxzyB1VnLxNczwa8", label: "2025年11月10日 大推 真的羨慕又崇拜 其實這才是我最想做的職業 如果可以重來 我真的想做全職海外攝影師 不論拍景或拍人" },
      { type: "link", content: "https://photos.app.goo.gl/n3BEQQrpHfZb3taq7", label: "2025年11月10日 真可愛" },
      { type: "link", content: "https://photos.app.goo.gl/BtAwqWEsqWcmch6U9", label: "2025年11月10日 這太猛了 很難相信真的去上班" },
      { type: "link", content: "https://photos.app.goo.gl/vwEcQqGm2GiyoJ9GA", label: "2024年11月10日 確實 不過我其實更推崇醫療費全額負擔及必須先付款 這才是保護醫療人員 台灣應該跟進" },
      { type: "link", content: "https://photos.app.goo.gl/RAu53R98KWSQXd5h9", label: "2024年11月10日 婚攝day 超美 室內如 果拍幾張婚紗會很漂亮" },
      { type: "link", content: "https://photos.app.goo.gl/v9ivse6xmcnjk8fs9", label: "2023年11月10日 五年前我才剛到海軍服役 在一級艦上生活真印象深刻應該很少人可以想像 還有每次放假都讓聞到沾滿衣服的船漆味" },
      { type: "link", content: "https://photos.app.goo.gl/g2xvTyCahpCtUnCu9", label: "2023年11月10日 居然有這樣" },
      { type: "link", content: "https://photos.app.goo.gl/aHKsdGxLJx8FoZEB6", label: "2023年11月10日 總覺得我現在老不只五歲了" },
      { type: "link", content: "https://photos.app.goo.gl/StT9WZHqY9NqKKYGA", label: "2022年11月10日 \
        請問症狀第十點 是表現type II mixed cryoglobulinemia還是表現Type I cryoglobulinemia Raynaud's phenomenon 小麻8th是寫Type I" },
      { type: "link", content: "https://photos.app.goo.gl/ZjRWr7mjm2Ff9WVf8", label: "2022年11月10日 這兩個月的報告都好精實 都被要求最高規格 腦細胞已耗盡XDD" },
      { type: "link", content: "https://photos.app.goo.gl/sTtBRPpSudDpkV9L9", label: "2020年11月10日 單身也很好啊 財務跟投資規劃搞起來XD" },
      { type: "link", content: "https://photos.app.goo.gl/3ybd32UXhNoFNLaNA", label: "2018年11月10日 柯市長一定當選" },
      { type: "link", content: "https://photos.app.goo.gl/ibUnW7vfoxCCS8pH8", label: "2016年11月10日 屏東東港東隆宮 返回陽間的感覺真好 可是已經過一半ㄌ" }
    ],
    "11": [
      { type: "link", content: "https://photos.app.goo.gl/G38vktxw8LJgFRLU9", label: "2025年11月11日 有大大知道這是重慶什麼飯店的view嗎 好像在紅崖洞" },
      { type: "link", content: "https://photos.app.goo.gl/xSuY6XeeMeLi82Ns8", label: "2025年11月11日 有些人真的不配健保 更不配活著 台灣政府就是懦弱又無能 只會整天嚷嚷病人權益多重要 重要個屁 醫生護理師的權益才重要 保障醫護第一 再來談病人" },
      { type: "link", content: "https://photos.app.goo.gl/bgW5kRAKBynSXMwQ6", label: "2025年11月11日 我剛回來也差點被吹回醫院" },
      { type: "link", content: "https://photos.app.goo.gl/HjyrL9qyqBpv3wXE7", label: "2025年11月11日 看了我都想灌他幾拳" },
      { type: "link", content: "https://photos.app.goo.gl/9cMhwEjRzT1nkuFcA", label: "2024年11月11日 如果沒有補習班獎學金 4000元是我從出生到國中畢業的壓歲錢總和" },
      { type: "link", content: "https://photos.app.goo.gl/hbBTZrEbitS8SY5X6", label: "2024年11月11日 幹這好好笑XDDD 重點是阿嬤的安全帽是有正常下載完的 應該是機車還沒載完" },
      { type: "link", content: "https://photos.app.goo.gl/ZTfbBJHD4Jn4iihu9", label: "2024年11月11日 不行喔 換衣服一定要叫男生全部滾出去 因為男生一定會偷看" },
      { type: "link", content: "https://photos.app.goo.gl/uppJay7LmbcDWc5Y7", label: "2024年11月11日 每次急診會診也會遇到這種的" },
      { type: "link", content: "https://photos.app.goo.gl/3didyG4KCSbkmTGv9", label: "2024年11月11日 如果當初我夠聰明 應該休學重考醫學系 考不上也沒差因為我一定考得上藥學系 可惜當初沒有貴人告訴我" },
      { type: "link", content: "https://photos.app.goo.gl/H3FbdFvzQpsqdjk28", label: "2024年11月11日 藥師跟工程師 基本上都勝第一線的血汗醫師" },
      { type: "link", content: "https://photos.app.goo.gl/7CouEuY41srj7E6k8", label: "2024年11月11日 \
        恭喜友銓及沛儀 幸福滿滿 祝福你們 這次拍攝完就要暫時收心 把時間留給本業了 回想起十多年 跟奕宏於政大元David一起創作類婚紗 當時對於Fine art風格十分喜愛 也受KedaZ很多作品給了靈感 \
        雖然十多年後仍無法如那些大師有能力創作神級作品 但也稍微有些心得了 很開心這次用不同以往的角度呈現 俯瞰角度果然還有很多能開發 一邊修圖 一邊想著內心更完美的畫面 \
        希望可以是新娘仰躺在新郎懷裡 把白紗的裙擺攤開來成花狀綻放 手握大把紅玫瑰 最後賓客在周圍呈有秩序的圓圈 會帶來更震撼及集中的視覺效果 \
        那顆對於風景及婚紗熱愛的火苗尚未澆熄 可現在不在允許一心多用 但多年以後 還要把握機會創作更多攝影作品" },
      { type: "link", content: "https://photos.app.goo.gl/zfXLuCUPYDofLCoR7", label: "2023年11月11日 \
        生日快樂 不知道一起度過的第幾次生日 每次都讓你找餐廳真是對不住 所以我一定會努力擔任好錢包君的角色 隨著年紀越來越大 生活不再是只有去哪玩 \
        更多是工作順遂跟身體是否健康 無聊但很實際的過每一天 這也是成長的一部分吧 很感謝你的包容陪伴 我會努力拿捏工作跟生活的平衡 盡力保持正面情緒不被負面給壓過 一起存錢到世界各地拍照旅遊囉" },
      { type: "link", content: "https://photos.app.goo.gl/XgNkts8aBHRe3iei7", label: "2023年11月11日 \
        正確的NG位置 沒有繞口 沒有KINKIN 也沒有太深入 千萬不要小看放NG 即便放了很多次也有放不進去的時候 \
        會覺得放NG很容易的人 若不是超強NG大師 通常都是NP 或放鼻胃管很多年的居家護理師之類 就是沒經驗的菜鳥 \
        鼻胃管有許多的狀況會很難放 臨床上最常見的是無法配合的病人 例如病人抗拒鼻胃管 不斷在過程中咳嗽跟用力 另外就是完全沒反應的病人 一點吞嚥能力都沒有 \
        因此我聽過很多招 例如將鼻胃管冰凍增加硬度 手伸進咽喉把NG拉進食道口 用棉花沾水讓病人吸食促進吞嚥動作 甚至聽說有NG guidewire \
        我自己的作法 讓病人坐直 請看護或家屬扶住額頭固定 也請他們拿吸水棉棒給病人吸 病人若配合則可用自費較軟的矽膠NG 若不配合只能試健保較硬的塑膠NG \
        放置時我會盡量頂著鼻腔後壁 配合病人吞嚥慢慢往內推 咳嗽時停手等待 切記急躁的放讓病人更容易嗆咳 會更易失敗 \
        考OSCE時還需測量嘴角到下顎+下顎到胃部長度來估計深 實際上我都抓5560公分深 或3.5 4大格 \
        再來則是重點 如何檢查是否放置正確 最常見做法是反抽胃內容物跟打氣聽診 但患者非常空腹時甚至聽不到聲音 這裡要注意 正規做法是 要照CXR來檢查位置 反抽順聽有聲音 \
        鼻胃管也可能在食道裡繞圈 甚至我遇過怎麼都放不進去 結果居然是因頂到食道支架 鼻胃管可以kinkin 可以繞口 但也可以放進氣管造成吸入性肺炎 放進大腦甚至脊椎 \
        放好NG也要跟家屬衛教 病人自拔機會太高要約束才行 最後分享故事 我曾因聽不到聲音 反抽不到而要求CXR確認 卻被護理師嫌麻煩因而鬧得不愉快 \
        我了解照相 尤其ICU 對於忙碌的護理師的確有負擔 但CXR永遠是有沒有位置正確的鐵證 能聽診就聽診 但萬一無法確認就餵食造成吸入性肺炎 家屬告下去醫師絕對是責任最大的 \
        希望臨床上大家相互體諒 讓患者風險降到最低 也避免後續醫糾的可能 祝大家放NG順利千萬別再放進肺裡" },
      { type: "link", content: "https://photos.app.goo.gl/wRRg1Zz7yUkTLHsn9", label: "2023年11月11日 DK這次去的富士山有個超美的湖配天鵝 有大大知道這是哪個湖嗎 多年前去過但沒找到這個湖" },
      { type: "link", content: "https://photos.app.goo.gl/gzHHUukDQ6MSXiFQ6", label: "2023年11月11日 難得一個月一次的完整週末 不用上班 睡了很久把上班極度疲憊給消除 也花了時間重整PS 買了年費方案 重新安裝所有外掛軟件 終於弄好了 但醫院的報告完全沒做 也沒有讀到書" },
      { type: "link", content: "https://photos.app.goo.gl/S4Qv5dMx9YT1zJ7f7", label: "2022年11月11日 \
        小烏來瀑布 小烏來很多作品都拍特寫 不過我習慣到哪都拍張廣角留紀念 結果發現還不錯 很有叢林與瀑布交雜的原始感覺 \
        這張後製主要先突顯瀑布 作為主題 但較難的是樹叢的立體感 一樣秉持著受光面越亮的原則 一筆一筆刷 但不能搶過身為主角的河川" },
      { type: "link", content: "https://photos.app.goo.gl/rs6bzHLwj3i2LXke8", label: "2022年11月11日 這個讚讚 需要二手腳架私" },
      { type: "link", content: "https://photos.app.goo.gl/NgHP1LBWyk6i7usy6", label: "2020年11月11日 值班遇到一個棘手的問題但好像不緊急 一個很老的病人快expired了 CAPD可以直接在bedside拔嗎 我看那整個連在體內 還是剪掉皮膚表面的管路即可 在線等 拜託學長學姊提供解法QAQ" },
      { type: "link", content: "https://photos.app.goo.gl/ktRzCNpb3eXoK16NA", label: "2020年11月11日 軍費生107年被迫接受臨時簽下不適服退伍 要賠償3161萬以上 是以上喔" },
      { type: "link", content: "https://photos.app.goo.gl/JbEbvHXMBA13rE3u9", label: "2019年11月11日 這次自己買機油花了1300 保養項目只留必要的1305 只多了換雨刷跟空濾 1020+480=1500 所以總共2805+1300=4105 對比去高雄開價9200划算多了 養車還是要做功課的" },
      { type: "link", content: "https://photos.app.goo.gl/5uxQhntJZdxREUah7", label: "2016年11月11日 夠綠了還抽綠菸 沒事兒沒事兒 這跟抽完就要戒了 戒菸門診 抽煙 慎思" }
    ],
    "12": [
      { type: "link", content: "https://photos.app.goo.gl/83G7nroYZ5F2o3Qb9", label: "2025年11月12日 我怎麼錯過這麼漂亮的照片" },
      { type: "link", content: "https://photos.app.goo.gl/gppibYVw2JGexv459", label: "2025年11月12日 屌 真的屌 這個貼文我給100" },
      { type: "link", content: "https://photos.app.goo.gl/TEEQy5boox5uBiUm8", label: "2025年11月12日 還以為是蠟筆小新的哥吉拉的屁屁" },
      { type: "link", content: "https://photos.app.goo.gl/R21PAfT4PZaNtgWJ9", label: "2025年11月12日 笑死 真 拍攝者不救XDDD" },
      { type: "link", content: "https://photos.app.goo.gl/DjGQ2FVqgeSYW6gs5", label: "2024年11月12日 要振作起來 不能被絕望打敗" },
      { type: "link", content: "https://photos.app.goo.gl/HLqEiUZLRQq4pq466", label: "2024年11月12日 哈哈哈應該是把兒子丟下去啦" },
      { type: "link", content: "https://photos.app.goo.gl/ybeVFoUCUxcN9E4E7", label: "2023年11月12日 \
        台北Just Grill Just grill真是令人口服的高質感牛排館 前菜區是自助Bar 有無限自取的煙燻鮭魚 涼拌蛤蜊跟肥美鮮蝦 其他水果 生菜沙拉等等當然一應俱全 新鮮又美味 \
        湯品推薦焗烤洋蔥湯 解膩又香甜的口感很難忘卻 我們點快6000元的雙人牛排餐 加了服務費之後 有菲力莎朗跟肋眼各兩大塊的牛排 牛肉真的品質跟處理方法完全很高的層次 \
        表面帶點酥脆跟烤焦 內在七分熟剛剛好 又嫩又不帶筋 每一口都是置身天堂 最後甜點是吃到飽的准盆子跟香草哈根達斯 滿足到不行 \
        大推週年紀念或約會好處所 價格不菲但尊榮享受 然後建議偷偷準備花會更浪漫" },
      { type: "link", content: "https://photos.app.goo.gl/trrHKZnUnuy2351T6", label: "2023年11月12日 讚讚 牛排超好吃" },
      { type: "link", content: "https://photos.app.goo.gl/zxDSDi4Ym15W5KsU7", label: "2022年11月12日 \
        建模是未來攝影後製的趨勢 技術很有深度 不容易一下子被學習模仿 而且作品能輕易的抓住觀眾 如果工作能不要如此耗盡心力 我真的很想學 \
        再過幾年這個技術越普及 我們現在純拍跟後製的作品也會變成舊時代的產物 就像現在回去看底片或原圖直出的派別一樣" },
      { type: "link", content: "https://photos.app.goo.gl/qwmR1ie1d3XH6BWt9", label: "2022年11月12日 不知道多久沒出國了 好想出國拍風景啊啊" },
      { type: "link", content: "https://photos.app.goo.gl/SbZfBBC5mkGdHRSz5", label: "2021年11月12日 讓動物產生安全感真的很重要捏" },
      { type: "link", content: "https://photos.app.goo.gl/Go8p6zFn3MwXEm338", label: "2020年11月12日 當醫生們挺身抗議 捍衛權益時 謝謝健保署總是拿出最堅強的後盾 把醫生的訴求阻擋在外 視而不見:)" },
      { type: "link", content: "https://photos.app.goo.gl/maBovg96MZ9Scpfc8", label: "2018年11月12日 因為喜歡所以腦衝偷偷訂一本想給她驚喜 結果購買頁面都點完了才發現沒有付款頁面 是貨到付款啊啊啊啊啊 於是女友就乖乖自己付錢收下了 嗯嗯幸好她還願意乖乖收下 好囧我真的只有純心意 送禮不付錢的" },
      { type: "link", content: "https://photos.app.goo.gl/4RT1wXuAEuG39iCR7", label: "2018年11月12日 \
        巨蛋搞四年是遠雄害的好嗎 某些留言是智能不足嗎 請問柯批 醫院可以不要自費打白蛋白 自費打蜂蜜檸檬嗎 \
        你是第一名 蜂蜜檸檬第二 該唱歌了吧 請問您目前胡言亂語的狀況是因為喝蜂蜜檸檬的後遺症嗎 蜂蜜檸檬可以長生不老嗎" }
    ],
    "13": [
      { type: "link", content: "https://photos.app.goo.gl/Mu2NTNqbXzVzy7ZG7", label: "2025年11月13日 哈哈哈根本雙胞胎好可愛" },
      { type: "link", content: "https://photos.app.goo.gl/WtExYA3mdMCzsdxE9", label: "2025年11月13日 這個真的很可愛欸" },
      { type: "link", content: "https://photos.app.goo.gl/RPQWFy8CbujSJxMe8", label: "2025年11月13日 我也嚇到哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/efvdYNdsPGEJmChb8", label: "2025年11月13日 他們跳來跳去好可愛" },
      { type: "link", content: "https://photos.app.goo.gl/DTofbkvUqazRuvJg7", label: "2023年11月13日 有推薦的買日幣帳戶嗎? 同時可以在日本刷卡有回饋的 跪求推薦" },
      { type: "link", content: "https://photos.app.goo.gl/HyYsdutF2DEDqBfXA", label: "2023年11月13日 \
        更新了最新PS 付費版問題一大堆 剛放好在右側欄位的STARTRAIL偶爾會自動消失 重開PS才會在視窗的延伸功能出現 為什麼右側放置好的功能會自己消失?? \
        跑CAMERA RAW到一半當掉重開 明明只是用一個濾鏡而已就當掉 重開之後也沒有復原最後步驟?! 遮色片功能我調半天才弄好但即使用100% 他也沒辦法濃度刷到100% \
        跟之前版本比都會比較淡 沒辦法把下方圖層完全刷出來?! 這週末都在處理各種亂七八糟的狀況 是因為我沒有刪除舊版PS嗎? \
        還是M1 PRO本身比較爛? 我以為付費用新科技可以更方便 換來的是莫名其妙的介面跟時常出問題的功能" },
      { type: "link", content: "https://photos.app.goo.gl/JiUavqd2WeccxGTy6", label: "2023年11月13日 \
         台北FB食尚曼谷bistro&lounge 意外發現卻成為心目中台北最想再回顧的泰式料理 這次六人聚餐 我們點了2500元的套餐加上額外小菜 \
         不論是泰式奶茶 炒青菜 綠咖哩到月亮蝦餅等 份量跟口味上都令人滿意 這裡超推軟殼蟹搭配麵包 第一次吃驚為天人 實在太好吃 光是外層醬料搭配麵包皮 \
         就非常刺激胃口 裡面酥脆完全不帶刺的口感 把帶殼螃蟹提升到另一個層次 總覺得一個人就能吃一整道 為了泰式軟殼螃蟹而再回顧也值得的 \
         店內空間 裝潢等都不錯 附近也有價格合理的停車場跟捷運站 走路只需8分鐘內 超級大推團體聚餐 交通方便又價格合理 實在推薦" },
      { type: "link", content: "https://photos.app.goo.gl/AjdFqqdyzv9UeVe98", label: "2022年11月13日 原本今天一時衝動要去觀音山硬漢嶺 幸好下值班睡太久沒去成 什麼都拍不到XD" },
      { type: "link", content: "https://photos.app.goo.gl/FCXXMsuLMTKQyHkt5", label: "2021年11月13日 \
        存檔小知識&攝影分享 攝影照片檔案的遺失常是心頭痛 感謝專業的限時分享 並讓我紀錄在貼文分享 \
        記憶卡的檔案簡單救援 下載Transcend的RecoveRx軟體來試試 很多人也知道的 如果記憶卡出問題 千萬別急著格式化 也不要繼續拍攝讓檔案被覆寫 以免減低救援成功的機會 \
        讀卡的小動作 當電腦要讀記憶卡時通常需讀卡機 建議先插上讀卡機 再插記憶卡 因為有些讀卡機剛插入電腦會有電力不穩定的狀況 避免這種狀況馬上影響到記憶卡運作 \
        第二點我以前沒有注意過 也沒遇過這種狀況 不過多一分注意 就少一分風險囉 有什麼記憶卡的突發經驗也歡迎分享在留言" },
      { type: "link", content: "https://photos.app.goo.gl/vcYZyfoKBoTadJdA9", label: "2021年11月13日 第一次在新聞留言區看到最實用中肯的建議" },
      { type: "link", content: "https://photos.app.goo.gl/nW32yLVuSvwqS9nr7", label: "2018年11月13日 類固醇治百病就是ㄌ" },
      { type: "link", content: "https://photos.app.goo.gl/HHXZQDrEX3h2Bqws7", label: "2018年11月13日 哈哈哈好想自己去看看" },
      { type: "link", content: "https://photos.app.goo.gl/oRC8qFPu8Z7kw1S49", label: "2017年11月13日 學障生日快樂唷 哈哈學長對不起 選字選太快 是長哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/sTGrtgruxpiRAn1w8", label: "2017年11月13日 大家去睡覺 留我獨守空急診室 三總急診室 睏" }
    ],
    "14": [
      { type: "link", content: "https://photos.app.goo.gl/bjs5qhpJTxbApHGG8", label: "2025年11月14日 學弟真是又帥又厲害" },
      { type: "link", content: "https://photos.app.goo.gl/wAHZCD3rK9Cn9n7B9", label: "2025年11月14日 普通醫生也不可能那樣炫富 頂多是加麵加兩份沒問題" },
      { type: "link", content: "https://photos.app.goo.gl/ySqQyvnsxUYPAe9L6", label: "2025年11月14日 這是霸道大耳狗男友嗎" },
      { type: "link", content: "https://photos.app.goo.gl/Xyz5DSHLuCGYU8cr6", label: "2023年11月14日 \
        就算身體真的生病 符合退伍資格 他們一樣會百般刁難 下從基層行政人員 上到副院長等級 都會為了升官等各自利益 想辦法磨損退伍當事人耐心 \
        想辦法阻擋跟刁難 這就是軍醫局一貫手法 完全就是詐騙集團的典範 望周知 不要再有受害者" },
      { type: "link", content: "https://photos.app.goo.gl/UxvR3psqqFYXFfMN8", label: "2023年11月14日 \
        超感謝大家回覆 目前有整理了三家大家推薦最多的 超過三位朋友 第一個是RICHART \
        第二個是大戶 我本來就有永豐大戶 可能先考慮這家 第三個是玉山 感謝大家回饋建議 彙整一下放限時也給有需要的朋友參考" },
      { type: "link", content: "https://photos.app.goo.gl/7XNmqux56ts5eWoA8", label: "2023年11月14日 \
        超愛河內街拍 各種細節跟畫面都很好構圖 而且不套風格檔都有點綠綠的感覺 想到日本修起來也很自然的會有通透感跟藍色 一個有文化的都市原來都有自己的顏色 台灣缺的就是這個" },
      { type: "link", content: "https://photos.app.goo.gl/ch8Vdz74AhKhti5w5", label: "2023年11月14日 這裡的天空讓我想到差點弄丟去的空拍機 撿回來之後機翼破損不敢飛太遠 只好用手機跟相機隨意紀錄" },
      { type: "link", content: "https://photos.app.goo.gl/Jz8D84U6QuHqeAnR8", label: "2023年11月14日 訂的士氣章還沒到 結果整理房間發現幾年前當兵的臂章 直接貼上去好像也沒違和 一個海軍的 一個陸戰隊的 這兩個單位都真的待過 也是很辛苦 回憶湧上心頭 國軍基層辛苦了" },
      { type: "link", content: "https://photos.app.goo.gl/nYQ6TyepiUeLR2jK8", label: "2023年11月14日 \
        歷經了快三天的時間 終於搞定更新後最新版PS的各種狀況 初步使用上選取這個功能真的方便 之後有空再來學習更多功能 對於照片細節的處理也更快速 \
        另一個心得 買筆電建議捏著直上最好最高規格的版本 能用越久越好 每一次換筆電各種軟體跟設定重弄 超級浪費時間" },
      { type: "link", content: "https://photos.app.goo.gl/dLB8MZMG1WQhC9BNA", label: "2021年11月14日 還有加印的現貨 2022桌曆 價格跟質感都兼顧 真的很便宜 盈餘也會捐跟貓貓狗狗 一起來支持 PS超級感謝之後跟我購買的朋友 你們的支持我們都記得" },
      { type: "link", content: "https://photos.app.goo.gl/KD5zpzjBF39HivvV8", label: "2020年11月14日 也難怪如今醫師律師工程師 三師裡面醫師最低薪" },
      { type: "link", content: "https://photos.app.goo.gl/1fLthXPwTFvLD6FV6", label: "2019年11月14日 高一分享科系請來大學老師 結果直接幫高一上大一的經濟課 能不睡著的果然只有高中生 大學生早就" },
      { type: "link", content: "https://photos.app.goo.gl/1HNxesf9eSoSfjfw8", label: "2019年11月14日 還有可愛國企系大學生" },
      { type: "link", content: "https://photos.app.goo.gl/NEBT4PrRgjbgNzYa9", label: "2019年11月14日 完了完了 昏睡人數增加了 是說大一生涯規劃結果直接 上大學經濟課 真的有傻眼XDDDD" },
      { type: "link", content: "https://photos.app.goo.gl/ESg5MTfbW9bXssXY9", label: "2019年11月14日 治療一下被部隊殘骸的心情 唉" },
      { type: "link", content: "https://photos.app.goo.gl/SeJcQLUpkNEW8Ums7", label: "2018年11月14日 完美詮釋人民公僕的市長 目前只有柯文哲做到 台灣不需要很老實不講錯話的官僚 而是需要願意為台北拼命 智商高但造福到市民的市長" },
      { type: "link", content: "https://photos.app.goo.gl/hA7ghqcscoHfn75M7", label: "2018年11月14日 \
        本人記憶力超差 所以為了避免別人問我吃過啥推薦的我答不出來 而且也懶得詳細回想說明 而且也希望未來再去光臨時忘記吃了哪 \
        所以創立單純紀錄+能快速搜尋美食的專頁 並不是為了經營他而創立 以後吃喝過的放在這裡 如果有興趣在追蹤" },
      { type: "link", content: "https://photos.app.goo.gl/FPmR6VvU63VacsFKA", label: "2017年11月14日 各位 教學Ppt完成囉 靜待我擬定攝影教學簡介跟說明" }
    ],
    "15": [
      { type: "link", content: "https://photos.app.goo.gl/h7nk5whW3GTznNnV8", label: "2025年11月15日 我以為尼克星是在做效果 但看下來他是真的EQ極低 也難怪專長只剩下拳擊XD" },
      { type: "link", content: "https://photos.app.goo.gl/n2JE5rg4PsA7YvCaA", label: "2025年11月15日 好可愛欸" },
      { type: "link", content: "https://photos.app.goo.gl/EXDcCrAC9cFsdSh88", label: "2024年11月15日 請問是因為放完支架沒有按醫囑吃DAPT嗎 Ps很棒的case 謝謝分享" },
      { type: "link", content: "https://photos.app.goo.gl/ZWM4vhozgVcJV5uk8", label: "2024年11月15日 這裡我超想來!!! 哥之後跟你請益交通方式嗚嗚" },
      { type: "link", content: "https://photos.app.goo.gl/suBM4zjwPJCVNBGU8", label: "2024年11月15日 \
        長久以來是GARMIN愛用者 但他的充電線真的榮登所有電子產品第一爛 不知道有沒有朋友也在用GARMIN 充電線都充不了 只能重新買一條嗎? \
        還是現在有新一代的GARMIN系統可以用? 不管怎麼充都充不了電" },
      { type: "link", content: "https://photos.app.goo.gl/ChHwaSQcdv1RD2EH6", label: "2023年11月15日 \
        Baker cyst 患者為60女性 診斷RA with flare up 這次因左膝關節發炎嚴重 組織液分泌累積在左膝後方 小腿肚的位置 形成Baker cyst 造成小腿緊繃的症狀入院 \
        Baker cyst=膕窩囊腫 發生於膝關節後內側由膕窩滑膜囊所長出來的 類似手腕的腱鞘囊腫 這個滑膜囊是與膝關節相通的 當膝關節受傷或發炎時會產生過量的關節液 \
        液體因而就會流入滑膜囊裡頭 使得滑膜囊變大形成囊腫 這位患者抽吸液非常黏稠 只能抽出2cc 後續會診外科醫師處理以改善症狀" },
      { type: "link", content: "https://photos.app.goo.gl/szLdXccF4ZtupaAh7", label: "2023年11月15日 學長 生日快樂" },
      { type: "link", content: "https://photos.app.goo.gl/TpM6E5jpzShMf7HZ9", label: "2022年11月15日 我個人是不買電子股的 台灣50除外 但看到這個還是覺得很好笑 他們真是賺爛 但我寧願看著別人當爆發戶 我只要當穩定戶就好 努力工作累積資產我比較安心 這一年熊年 努力進補金融股!!" },
      { type: "link", content: "https://photos.app.goo.gl/ECWPSi5WuHKKwDHu6", label: "2021年11月15日 感謝購買" },
      { type: "link", content: "https://photos.app.goo.gl/iadJZYtG4V2tPjtB6", label: "2020年11月15日 真的 鞋子越漂亮的科越難選XDD" },
      { type: "link", content: "https://photos.app.goo.gl/se9sugkR3T2oVmbY7", label: "2019年11月15日 海軍聯合婚禮" },
      { type: "link", content: "https://photos.app.goo.gl/Vcx5ju5poawW3KRQA", label: "2018年11月15日 終於 希望這是第一次好好放到完整輪休" },
      { type: "link", content: "https://photos.app.goo.gl/iwgoACHHBfo24dwn9", label: "2017年11月15日 \
        遇到很棘手的case 男65 右胸痛到右臂 右手冰冷酸痛 大約一個禮拜 無搬重物無外傷 病史只有氣喘 CXR CHEST CT EKG都沒問題 目前等抽血data 請問我該懷疑什麼 覺得不是扭傷就是什麼血管堵住" },
      { type: "link", content: "https://photos.app.goo.gl/7CyExPdU9Br4hmBF9", label: "2017年11月15日 攝影後製正式接受預約 實習繁忙 每個月不會接太多 但必定全力教學分享" },
      { type: "link", content: "https://photos.app.goo.gl/WrtyD9AkDB55PPba8", label: "2017年11月15日 \
        囚裡望天 是想飛天俯瞰 還是不甘拘束 攝影後製家教正式開始囉 教學內容 會先了解你目前程度作調整 但基本會有 基礎講解 構圖光線等想法 包含晨昏高反差 銀河 氣象判讀 \
        後製步驟 完整圖層遮色片 延伸 若已經熟悉遮色片 可利用時間多教亮度蒙版 須自己有亮蒙軟體 費用時間 一人兩小時2000 兩人兩小時1800一人 三人兩個半小時1600一人 \
        已繳費確定上課者 時間允許可提前帶拍不多收費 注意事項 報名或任何問題直接私igfb本人 兩個禮拜前 不需太早 因為實習關係我只能在月底排定下個月班表 \
        匯款一半經費當訂金 後約上課時間 北部為主 其他縣市若無法 則介紹其他教學 保證超專業 地點可約自宅 速食店 咖啡廳等有插座與桌子處 超時問問題不多收費用 \
        ppt無法copy給予 也無法錄音錄影 但可當場做筆記紀錄 一對一限男性 以上 十萬分跪謝支持" },
      { type: "link", content: "https://photos.app.goo.gl/BSg95pKUEBRGYymG8", label: "2017年11月15日 \
        今晚病人多到哭 各種奇奇怪怪 有要跟醫師pk打架ㄉ 有摔酒杯手掌動脈噴血 有妹子自割脖子因為跟閨蜜吵架 有恨三總醫生還是來三總急診的破眼皮大叔 還有很多其他的說不完" }
    ],
    "16": [
      { type: "link", content: "https://photos.app.goo.gl/RU5JqWRJhMiQpNeS7", label: "2025年11月16日 \
        很多人都追蹤樂冠廷 我跟他不熟但從他粉絲很少的時候就知道他 不得不說他這照片是完全在騙 標記這個點 後面的樹超高 旁邊都是電線桿 而且是俯角拍攝 我自己知道怎麼後製處理 \
        我會弄掉電線桿 把樹修低 把山拉高甚至出動空拍機拍就能得到跟你一樣的照片 問題是你把慕名而去的粉絲當小丑 普通大眾興致高昂去了結果浪費時間 \
        其他照片跟本人我不評論 但就這種騙粉絲流量的行為實在看不下去 就算我有修圖也是在光線 天空跟小地方做調整 而不是整張圖幾乎都是普通人做不到的事情 \
        內行人騙外行人 唉唉 現場長這樣 是要普通人怎麼修成那樣" },
      { type: "link", content: "https://photos.app.goo.gl/NDodpeyAEGybcukp9", label: "2025年11月16日 好啊這個沒有一堆肌肉就可以" },
      { type: "link", content: "https://photos.app.goo.gl/633BsN6jWHKaW2ui7", label: "2025年11月16日 這是今際之國的比賽場地嗎" },
      { type: "link", content: "https://photos.app.goo.gl/LJ9NSpCtt9BfnK3i9", label: "2025年11月16日 Lexus真的是蠻漂亮的" },
      { type: "link", content: "https://photos.app.goo.gl/KAdaaaXp3RYr8j7G7", label: "2025年11月16日 我快笑死哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/FE2FnwheJwUBF1626", label: "2025年11月16日 改成應徵乾女兒 太扯了" },
      { type: "link", content: "https://photos.app.goo.gl/BfpaRwNrkL4c1tKDA", label: "2025年11月16日 哈哈哈哈超可愛" },
      { type: "link", content: "https://photos.app.goo.gl/Z3ekp6K5WCJnMHSw6", label: "2025年11月16日 大推的貓糧" },
      { type: "link", content: "https://photos.app.goo.gl/7pTbUea8Rt1uw8DL9", label: "2024年11月16日 雖然我平常都幫醫師講話 但這狀況 真的是這位太扯 有點在亂搞病人 VS有責任好好訓練他" },
      { type: "link", content: "https://photos.app.goo.gl/1iEdFVM41SFsYizx6", label: "2023年11月16日 \
        河內市景 與其說河內攤販們是在買賣 反而更像市民生活的展示 林林總總的商品 遍佈在門口 掛在牆上 鋪在地上 但卻帶有秩序感 每個角落 都有他們自成的畫面 \
        如果不努力擺脫工作 出國去看看這世界 就會錯過這些美麗的人間藝術 \
        比起工作 我更在意自己的人生有沒有踏足世界 有沒有一直去旅行 去看看世界的人文跟大自然 如果只剩工作當初又何必出生" },
      { type: "link", content: "https://photos.app.goo.gl/DEoRcf6bxWTJcKdH9", label: "2022年11月16日 \
        200元只限定急診病人 而且病況整理完可能要30分鐘 520分鐘報告主治 再1020分鐘補order 不包含值班再去處理他的狀況 至少要耗一個小時 \
        有執照的醫師時薪200元 也算是台灣奇蹟了 啊忘了值班24小時只有60元 200真的很多" },
      { type: "link", content: "https://photos.app.goo.gl/zdbrz6n1zCRGPvQg9", label: "2022年11月16日 後面全部吸二手菸 肺癌製造人 我的超人" },
      { type: "link", content: "https://photos.app.goo.gl/gsVmLaDeBwvwiUNZ8", label: "2022年11月16日 52102新病人剛報到" },
      { type: "link", content: "https://photos.app.goo.gl/CwbbxrRo4edsHfcE8", label: "2022年11月16日 太帥了吧" },
      { type: "link", content: "https://photos.app.goo.gl/jP2nXf3nfwQX3SEM6", label: "2021年11月16日 BCP8628 精神大樓 黃網線上停車" },
      { type: "link", content: "https://photos.app.goo.gl/mVpcwuPVL1Zx2Ar69", label: "2021年11月16日 不賣蘋果派 不賣薯餅 不賣麥香雞很棒啊 這樣就完全不會想進去消費 麥當勞乾脆關店也沒差 離健康又更進一步了" },
      { type: "link", content: "https://photos.app.goo.gl/Q8v4Ni2s1ssjXmfe9", label: "2018年11月16日 哪個市長能對市政如此了解 沒有 因為藍綠只了解自己會不會發財賺錢 謝謝柯市長" },
      { type: "link", content: "https://photos.app.goo.gl/BnXhxpu7y2Rs9soC9", label: "2018年11月16日 就說鹼性酸性水是騙人的 這些前輩是" },
      { type: "link", content: "https://photos.app.goo.gl/itQ9VpoRQhWVaRMF7", label: "2018年11月16日 任憑弱水三千 我只取一瓢飲 學習國外高級後製 堅持拍出台灣風景更精緻 質感更高的作品 澎湖四天四島嶼攻略見下網址" },
      { type: "link", content: "https://photos.app.goo.gl/KynGYYz9dgrmcPgT7", label: "2018年11月16日 可能不能去" },
      { type: "link", content: "https://photos.app.goo.gl/yraDLUeWvzjHr3pH8", label: "2018年11月16日 薯條狗" },
      { type: "link", content: "https://photos.app.goo.gl/LzGQV6HbWA74eN9y5", label: "2017年11月16日 \
        如果可以我也想以拍照為職遊走天涯 但很可惜 當初的選擇必須走下去 白袍的重量不輕 其實每個人都是這樣 都有他自己的生活 自己的故事 要去完成 這是我家鄉的日出雲海 歡迎一遊純樸的台南" },
      { type: "link", content: "https://photos.app.goo.gl/MZcSQCPV8Bjf573m7", label: "2017年11月16日 答 帶狀皰疹 蛇皮 掀開衣服一看答案出現 因為帶狀皰疹通常前胸先痛 慢慢往肢體痛下去 之後才出現紅疹 也難怪昨天萬分急診沒有抓出來" }
    ],
    "17": [
      { type: "link", content: "https://photos.app.goo.gl/Kc1Wa8RUDDiSSYo2A", label: "2025年11月17日 這真是我買過最正確的公仔之一 比奇堡居民們 比奇堡居民們真是我買過最正確的公仔之一" },
      { type: "link", content: "https://photos.app.goo.gl/XJgkZbMdrg8uM4g9A", label: "2025年11月17日 \
        左邊修成右邊只要一分鐘 我只能說現在修圖功能越來越方便 越來越強大 真的不要想分享地點但是放跟原本差太多的照片 因為這樣會讓相信你的粉絲像小丑一樣白跑一趟" },
      { type: "link", content: "https://photos.app.goo.gl/A5tx6ftukM7wvNci8", label: "2024年11月17日 前天手錶沒電先跑兩公里 今天手錶充電 雖然雨一直下但還是再出門跑 但有將近一公里GARMIN沒記錄到" },
      { type: "link", content: "https://photos.app.goo.gl/pFJEjiJLBtdDygyt6", label: "2024年11月17日 連續試了數百次都充電失敗 今天特別出門買充電線回來 結果都還沒拆新的 舊的馬上恢復正常充電 GARMIN充電線真調皮" },
      { type: "link", content: "https://photos.app.goo.gl/Z2oUnBYDHzgmfk5C7", label: "2024年11月17日 被黃繼正醫師驚訝到 這是我聽過主治醫師英文發音最標準 最流利的之一 真的好厲害" },
      { type: "link", content: "https://photos.app.goo.gl/HE9AjQK9HKQSCakC8", label: "2024年11月17日 下值班沒得休息 趕緊跟學長一起聽演講" },
      { type: "link", content: "https://photos.app.goo.gl/mfpPwyiCiRavaC4H7", label: "2021年11月17日 五月有推薦大家的國泰金 已經如預期站上60元 有跟著買的應該一張都賺7000以上" },
      { type: "link", content: "https://photos.app.goo.gl/VHHyK71vjLGXrTbM9", label: "2021年11月17日 \
        國泰61元了 富邦金明年站穩80 跟開發金有機會站穩20 可以買 如今來看 怎麼會買貴呢 \
        看0050就知道 代表人類生產能力 長期一定走高 大跌就是要重押0050跟大權值金融股 因為無腦買即可 完全不需要花額外時間學習 人生更美好" },
      { type: "link", content: "https://photos.app.goo.gl/G42AVzzrwXTZ65o16", label: "2021年11月17日 \
        目前可以無腦買的金融股價位 富邦80元以下 首推 預估股利一張4-5元 開發20元以下 首推 預估股利1元 元大25元以下 次推 已達目標可獲利了結或等明年股利 一張至少1.5元 \
        國泰60元以下 已達目標可獲利了結或等領明年股利 一張至少3-3.5元 兆豐32元以下 已達目標可獲利了結 明年股利跟今年差不多 中信22元以下 已達目標可獲利了結或等領明年股利 一張至少 1.2-1.3元 \
        玉山 合庫 第一不推 因為發股票股利 若獲利穩定成長就可以開始買 純銀行跟其他金融股我不懂 \
        以上推薦價格意思是明年保守至少會到的價位 提早到可以賣出獲利 沒有到也可以領比往年更多的股利 至於後年以後我無法預估 但如果崩盤我肯定大買" },
      { type: "link", content: "https://photos.app.goo.gl/798G4XV3ShL7z8oc6", label: "2021年11月17日 請問正常放置使用期限是多久 謝謝" },
      { type: "link", content: "https://photos.app.goo.gl/5Qb7vn2SEivu3V4r5", label: "2020年11月17日 \
        沒有病史的20多歲男性被電擊後ohca Rosc後呈現如圖st depression 請問rosc後心電圖呈現st depression是常見的嗎 看到這種情況會懷疑nstemi嗎 \
        後來馬上送導管 果然不意外都沒阻塞所以我才有此疑問 附上當下心電圖 這是做完導管後兩小時的 有需要胸部電腦斷層報告我可附上 \
        掉進含有導電線的水池 他是工人 後來救護車給他cpr然後電了兩次 心跳才回覆 \
        揭曉一下我認為是答案的結果 我認為有兩種可能 一種是一開始掉進含電水池電傷 不過這樣應該體表要有傷口 不過該病人體表都沒電傷痕跡 \
        另一種是急救電擊兩次造成的心臟受傷 這時候我就疑問了 cpr電擊造成心室壁受傷的機率大嗎 跪求心內大神開示 \
        這位病人讓我覺得很有趣 當然希望他趕快康復 再麻煩大家提供想法 因為我還真的沒聽過心臟急救電擊會造成ischemia change" }
    ],
    "18": [
      { type: "link", content: "https://photos.app.goo.gl/foQTfnB86HASsdDb6", label: "2025年11月18日 成為桌上的療癒小物XD" },
      { type: "link", content: "https://photos.app.goo.gl/JAZyjxJUgwKZ7BDP6", label: "2025年11月18日 我也要看這個" },
      { type: "link", content: "https://photos.app.goo.gl/zqoHMxWGdNWehCgR6", label: "2024年11月18日 \
        如果要我具體一點形容 護理師是藥師三倍辛苦 薪水只有1/3 醫師是藥師五倍辛苦 薪水只有2-3倍 甚至有些藥師當老闆薪水完全不輸名醫 \
        整個醫療體系裡面 藥師算是最聰明的選擇之一 取得難度適中 薪水又是中上 發展又多元 有一定無法取代性 CP值真的很高 低端奢華就好 版主不用發文出來討噴" },
      { type: "link", content: "https://photos.app.goo.gl/GLajWHsSQxquvzuSA", label: "2024年11月18日 笑死 這當然是當了醫師才知道好嗎 沒當醫生之前是懂個屁 你才應該覺得自己奇怪" },
      { type: "link", content: "https://photos.app.goo.gl/wxraLAjFzqqqPb6K6", label: "2024年11月18日 可以來考醫學系看看啊 花一整個童年讀書 還可能花幾年重考 再花七年畢業 然後輪值班第一線要去急救 每天碰血痰尿 還會被告被家屬打 薪水可能只有你們兩倍不到XD" },
      { type: "link", content: "https://photos.app.goo.gl/wDXCNCW6CescFGU56", label: "2024年11月18日 不用值班 不用第一線面對病人 不用被告 還是鐵飯碗跟專業執照一個月有7-11萬 嫌什麼?" },
      { type: "link", content: "https://photos.app.goo.gl/9pUHFpxPLBAMK8KN9", label: "2023年11月18日 \
        做報告真的很討厭碰到免疫這塊 因為一堆標記跟基因 根本看不懂 用了好幾個晚上查資料跟整理 沒辦法好好運動 沒辦法好好查臨床不會的問題 \
        也沒辦法讀內專FC 壓力大之餘 還要靠AI幫忙找資料 做個報告健康跟作息虧爛" },
      { type: "link", content: "https://photos.app.goo.gl/UQgPGkwptqpEvFxu5", label: "2023年11月18日 住院醫生平均1-2個月就一定要報告一次 醫院的報告不能開玩笑的 而且又很難 壓力山大" },
      { type: "link", content: "https://photos.app.goo.gl/cmEgNvA27VkmjHTe6", label: "2023年11月18日 去北車旁邊吃鍋 回程路上看到玩具有毒 整個超好買 正版而且超便宜 這隻超大小白才680元 立馬帶走" },
      { type: "link", content: "https://photos.app.goo.gl/udf9fMj4kbMW9hEn9", label: "2023年11月18日 這個就比較貴了帶不走" },
      { type: "link", content: "https://photos.app.goo.gl/spRYFtdnYHRa7THw6", label: "2023年11月18日 買了小白 抽到一隻小葵 還有本來就有小新跟他爸媽 一家團圓囉" },
      { type: "link", content: "https://photos.app.goo.gl/ZuFe6SN1LPA6uqEYA", label: "2023年11月18日 最近被燒到 右邊五隻是廠商送錯 店家全新五隻260元 在7-11轉蛋一隻就120元了" },
      { type: "link", content: "https://photos.app.goo.gl/inryM5bu9DLRU66x7", label: "2021年11月18日 CV的學長都好優秀 各種校外發光發熱" },
      { type: "link", content: "https://photos.app.goo.gl/Wi8kGFNM53SSTYNh8", label: "2021年11月18日 趁國軍點數截止前趕忙亂買一波 國軍戰術手套 皮厚 指節有強化硬墊 發生行車糾紛打架可以好好保護關節XDDD 讚" },
      { type: "link", content: "https://photos.app.goo.gl/wXL3CZmrvnsqToSC7", label: "2020年11月18日 2020 堪稱我人生中最多重大決定跟最累最累的一年" },
      { type: "link", content: "https://photos.app.goo.gl/2taw3D5TM1DTHg1G8", label: "2018年11月18日 有這樣的口才沒有奉獻海軍真是可惜" }
    ],
    "19": [
      { type: "link", content: "https://photos.app.goo.gl/rsMDnXoRoJmJws9c7", label: "2025年11月19日 早上過了一個超長的CTO 但其實過彎後我可能早就督爆病人血管了 模型的血管才經得起這樣督 Gaia1-Gaia2-Gaia3-conquest pro-Gaia3" },
      { type: "link", content: "https://photos.app.goo.gl/BpauaBvGASTzASx48", label: "2024年11月19日 \
        這個問題近幾年內專都會考 問就是看最新版harrison寫的 比較白癡的是 48-72小時開刀那個在選項敘述裡面 好像是出院前開刀 沒記錯的話" },
      { type: "link", content: "https://photos.app.goo.gl/L7LEaqkdVAdXYtW56", label: "2023年11月19日 2023最適合擺放在家的小物 這隻比例超完美 沒有死角 笑死超可愛 適合放在家" },
      { type: "link", content: "https://photos.app.goo.gl/4rhGacpMZztrkwDo6", label: "2023年11月19日 \
        巨人第一集到最後一集都追完了 沒有漏掉 是很好看 但完全沒有大家這種想哭的感覺 自己覺得不夠悲慘 也不夠打動心裡 好看但無感 \
        總覺得航海王某些角色的遭遇更讓我難過 例如佛多朗明哥那個吃奶嘴的部下或大熊的身世 或蠟筆小新有些情節更動人 例如松阪老師跟德郎" },
      { type: "link", content: "https://photos.app.goo.gl/3i26r4bEiVVBGg8o8", label: "2022年11月19日 幫我拍一張結果拍我正在抓癢" },
      { type: "link", content: "https://photos.app.goo.gl/HHvpjTN67TLXKbZVA", label: "2022年11月19日 上次拍照應該100年前了吧" },
      { type: "link", content: "https://photos.app.goo.gl/xk9MDDbAWhHfzpJE6", label: "2022年11月19日 昨天值班 明天也值班 睡眠不足也要動起來維持心肺功能" },
      { type: "link", content: "https://photos.app.goo.gl/NDH4RPBaMrJ4pAco6", label: "2020年11月19日 半路被一個叔叔超車 後面才追回來 平常沒練長距離真的太勉強" },
      { type: "link", content: "https://photos.app.goo.gl/vsDrmm8dzEWcd4RB7", label: "2020年11月19日 壓力很大 上夜班急診前 來個慢速十公里跑步好了" },
      { type: "link", content: "https://photos.app.goo.gl/b4fnTXtBFD1tmGiP9", label: "2020年11月19日 \
        我上網找了很多關於defibrillation後會不會造成心肌損傷的paper 包含比例高低 心肌哪部分容易受損等等 但幾乎沒有資料 \
        有醫師大大做過關於這方面的資料或文獻 可以讓我參考嗎 穴穴TAT" },
      { type: "link", content: "https://photos.app.goo.gl/vuvtXHd9ZQiQdE2o8", label: "2019年11月19日 超級小確幸時間 超級小確幸之二 宵夜" }
    ],
    "20": [
      { type: "link", content: "https://photos.app.goo.gl/yxd5EyX578HnLuGU7", label: "2025年11月20日 11月最後一個小任務 要收心開始讀書了" },
      { type: "link", content: "https://photos.app.goo.gl/ReVjgJqVJEsBDWG26", label: "2025年11月20日 居然不覺得唐突" },
      { type: "link", content: "https://photos.app.goo.gl/psH7CjeHXkEcjS4U9", label: "2025年11月20日 也不一定 說不定是LCX dominant來幫忙" },
      { type: "link", content: "https://photos.app.goo.gl/okgDpKafw47DsGkh6", label: "2024年11月20日 問他有沒有聽過胃食道逆流" },
      { type: "link", content: "https://photos.app.goo.gl/UPWRsA6euQs7tkRLA", label: "2024年11月20日 辛苦了~" },
      { type: "link", content: "https://photos.app.goo.gl/dBsY2cqqG9isXxM26", label: "2023年11月20日 嚇到 AI原來可以這樣對答跟提問 他真的會去查文章回覆 不曉得是拼字亂答還是真的答案 但快要讓我相信" },
      { type: "link", content: "https://photos.app.goo.gl/u2fR3t8StC9h9s2t6", label: "2023年11月20日 我獲得繼續做報告的燃油了" },
      { type: "link", content: "https://photos.app.goo.gl/RAEdVjkr3ebsMjFo9", label: "2023年11月20日 搞了三個禮拜的免疫細胞 這張圖可以簡單代表剛好一半的瓶頸 另一半瓶頸還沒找到示意圖 要去解釋這些圓球的作用跟未來可能的治療 好痛苦" },
      { type: "link", content: "https://photos.app.goo.gl/uCtyvowrQj6nvTZ67", label: "2023年11月20日 今年跨年101煙火 有好友要去特別的拍點拍嗎" },
      { type: "link", content: "https://photos.app.goo.gl/TGjGY3C2oRq99ZB99", label: "2022年11月20日 太詳細了 那請問101大樓是因為他有101公尺高嗎" },
      { type: "link", content: "https://photos.app.goo.gl/pZsqhYTqGPHwTAmk6", label: "2021年11月20日 誠品的裝置藝術好特別" },
      { type: "link", content: "https://photos.app.goo.gl/JraBG9AdmwnSUBrh8", label: "2019年11月20日 真的很想直接賞他巴掌 沒本事幫忙就算了 還在害醫師害病人" },
      { type: "link", content: "https://photos.app.goo.gl/NWtUBZKnrTv1o2wX9", label: "2017年11月20日 \
        井裡望天 是想俯瞰大地 還是不甘拘束 近期開始攝影後製的家教課囉 有興趣的朋友詳細如下 \
        教學內容 會先了解您目前程度作調整 但基本會有 基礎講解 構圖光線等想法 包含晨昏高反差銀河 氣象判讀 後製步驟 完整圖層遮色片 \
        延伸 若已經熟悉遮色片 可利用時間多教亮度蒙版 須自己有亮蒙軟體 費用時間 一人兩小時2000 兩人兩小時1800一人 三人兩個半小時1600一人 \
        已繳費確定上課者 時間允許可提前帶拍不多收費 注意事項 報名或任何問題直接私igfb本人 兩個禮拜前確定時間 匯款一半經費當訂金 後約上課時間 \
        北部為主 其他縣市若無法會介紹其他教學 保證超專業 地點可約自宅 速食店 咖啡廳等有插座與桌子處 超時問問題不多收費用 \
        ppt無法copy給予 也無法錄音錄影 但可當場做筆記紀錄 一對一限男性" }
    ],
    "21": [
      { type: "link", content: "https://photos.app.goo.gl/RTSGutYNaLhgSNio8", label: "2025年11月21日 目前負債1800多萬 還要償還快十年 就只是因為當初高中畢業時不懂事 唉" },
      { type: "link", content: "https://photos.app.goo.gl/16tdJAuJ8Wp4ykrp9", label: "2025年11月21日 那倒是不一定 沒專科的醫生做沒專科醫師能做的事情 有專科的醫生做沒專科的醫生不能做的事情 說真正做事大多都是沒專科的醫生這句話是錯的" },
      { type: "link", content: "https://photos.app.goo.gl/CxHV5w6iUBFpeF137", label: "2025年11月21日 都是放假太短了!!!" },
      { type: "link", content: "https://photos.app.goo.gl/U8GVsS7vfUH52fKD7", label: "2025年11月21日 這樣也被看出來" },
      { type: "link", content: "https://photos.app.goo.gl/ZuduukAKK1bhwQC27", label: "2025年11月21日 好猛的嗆法XD" },
      { type: "link", content: "https://photos.app.goo.gl/qDD7b2CSCZShkoEu8", label: "2025年11月21日 哈哈哈台灣人居然接力幫他紀錄" },
      { type: "link", content: "https://photos.app.goo.gl/qweRNSzbSE2TuPHB6", label: "2025年11月21日 好啊帶你去" },
      { type: "link", content: "https://photos.app.goo.gl/BK2VggHJM84v6a64A", label: "2025年11月21日 我也是Y" },
      { type: "link", content: "https://photos.app.goo.gl/kUn6v2BDix6Q4iDr7", label: "2025年11月21日 為什麼是在滅火器前面跳XD" },
      { type: "link", content: "https://photos.app.goo.gl/Zij7AZSLiSzCDDZCA", label: "2024年11月21日 今天也要走進健身房" },
      { type: "link", content: "https://photos.app.goo.gl/qBo2biwmDao3E2xt6", label: "2023年11月21日 \
        腎病症候群何時該預防血栓 腎病症候群何時該預防性使用抗血栓藥物? 這是個非常冷門的問題 第一次被問時很疑惑 \
        把uptodate資料整理成簡單的重點分享給人生很無趣的內科醫生們 除了內科應該沒人想知道 懶人包 Alb<3要用 然後再分出MN 不是MN的NC跟懷孕的族群 各自有使用建議" },
      { type: "link", content: "https://photos.app.goo.gl/CFEehnRr9VSzAdU47", label: "2023年11月21日 感恩 讚嘆" },
      { type: "link", content: "https://photos.app.goo.gl/XLJjg2d1gSQCiTTX8", label: "2023年11月21日 \
        台北 waku waku burger101店 WakuWaku漢堡主打牛肉系列 特點是肉量充足且口感奇佳 價格就正常 加上飲料大約400-500元/人 \
        最推薦洋蔥圈牛肉堡 洋蔥圈是細的那種 外層酥脆 搭配漢堡咬下去香味就爆開來 漢堡的外層麵包也很鬆 可以輕易的壓縮而不需要挑戰嘴巴的極限 \
        副餐的薯塊超多 稍微失望因為並沒有很脆的外皮 整體而言最推洋蔥圈牛肉堡 用餐建議騎機車 但50公尺內有市場的公共停車場 也可開車過來 " },
      { type: "link", content: "https://photos.app.goo.gl/zJJC7brgpRNVxJhC8", label: "2022年11月21日 懂了懂了 你們都比我遇到的奇怪爬山阿公幽默XDDD" },
      { type: "link", content: "https://photos.app.goo.gl/qgq26ZvJXeHLEpfM7", label: "2021年11月21日 Anti在特殊抗藥菌的小整理 CRE的部分不知道最常用的到底是哪些 只看到POLYMYXIN 還請指教 " },
      { type: "link", content: "https://photos.app.goo.gl/3aFE8yNpQGpRyWeC8", label: "2020年11月21日 大家都說超有家的感覺XD" },
      { type: "link", content: "https://photos.app.goo.gl/3CgLyeJQH1mDndby6", label: "2019年11月21日 已買 33元這樣划算耶" },
      { type: "link", content: "https://photos.app.goo.gl/sy4rSgcpiB7argPD8", label: "2018年11月21日 \
        長官的好意讓我第一次能好好放6天 當然也在船上連待了十天跟疫苗還有校閱奮鬥 跟醫院工作相比或許現在只是很不穩定 但單就見面的次數也比較多 也快一年了慢慢磨合很多小習慣與價值觀 \
        我覺得可以認識自己的方法 才不是什麼旅行 少裝文青 而是遇到一個願意相陪的女友 才知道自己有多少缺點跟不經心 這才是認識自己吧 發現我私版怎麼都是她" },
      { type: "link", content: "", label: "2018年11月21日 一邊讀書 一邊不讓自己對目前的生活想太多" },
      { type: "link", content: "https://photos.app.goo.gl/agjFjVueCfvaM4y48", label: "2017年11月21日 到底 救護車膩 我的智障室友" }
    ],
    "22": [
      { type: "link", content: "https://photos.app.goo.gl/vZ8tGdy39YmNL3fJ7", label: "2025年11月22日 心臟舒張功能異常這幾年真是更新到嫑嫑的 去年看過教科書比較老舊死板的內容 今年再參照ASE NEJM TSOC還有學會幾次的演講 把老師們教的東西都湊在一起再濃縮 也是做的嫑嫑的" },
      { type: "link", content: "https://photos.app.goo.gl/DtvwFVXt2hmfSYdR9", label: "2025年11月22日 這樣一個完美的101機位 政府居然不多加配合富邦發展觀光 讓大家能有沒有玻璃隔閡的景拍 真的真的真的太可惜了 唉" },
      { type: "link", content: "https://photos.app.goo.gl/s8mpSFqi1BwNfZaC7", label: "2025年11月22日 富邦大樓的角度應該是周邊拍攝101最完美的角度 有富邦大樓的員工未來能夠私下提供拍攝位置嗎 花錢也沒問題 想記錄沒有玻璃擋住的超美台北夕陽 這裡絕對是最有潛力的拍點" },
      { type: "link", content: "https://photos.app.goo.gl/eQFhP9uUf6jHG4NYA", label: "2025年11月22日 戒掉手遊 啟一個美好的早晨 太厲害了 補一下超好吃早午餐跟奶茶" },
      { type: "link", content: "https://photos.app.goo.gl/F9Xy7KYzLGcrugr2A", label: "2025年11月22日 公費生還好多了 這是ㄐ" },
      { type: "link", content: "https://photos.app.goo.gl/ZVa27N1rfdLXG6Gv9", label: "2025年11月22日 等還完債我才敢講" },
      { type: "link", content: "https://photos.app.goo.gl/NLGnTTJ28VBET2H6A", label: "2025年11月22日 我也要跟他玩" },
      { type: "link", content: "https://photos.app.goo.gl/dzTPuTS2aXtPu2VFA", label: "2025年11月22日 超級修長有氣質" },
      { type: "link", content: "https://photos.app.goo.gl/uxZWtAKitZX76N6k9", label: "2025年11月22日 慈禧復活了" },
      { type: "link", content: "https://photos.app.goo.gl/xe7JLzLqsGgVHDF99", label: "2024年11月22日 真可愛的小孩 他跟貓貓一定是朋友" },
      { type: "link", content: "https://photos.app.goo.gl/W3g4EcCPAj4Lv2Ry8", label: "2024年11月22日 累壞 今天成功勾中人生第一次的診斷導管 之前三次勾RCA都一直飄走 今天主任很有耐心的帶領 內心感激痛哭" },
      { type: "link", content: "https://photos.app.goo.gl/4hyMscxPWj3F8gTB9", label: "2024年11月22日 怎麼那麼可愛" },
      { type: "link", content: "https://photos.app.goo.gl/QDoe53zDk7f587xU8", label: "2023年11月22日 \
        我是吳展旭 我很喜歡風景攝影 我希望大家都能愛上拍照 並享受當下的自由 作品的成就感 大景哥這次的攝影課程 題材從晨昏 銀河甚至極光分享國際上主流的攝影技巧 非常的難得 \
        一直以來我們致力於現代風景攝影的推廣 如今已有非常多風景攝影師在這塊達到成就與創造風格 因此對風景攝影師而言 這堂課程可以讓你作品突破的關鍵技術" },
      { type: "link", content: "https://photos.app.goo.gl/BYmav11UXufUCsvT7", label: "2022年11月22日 又是久違的跑步 這次退步到被一個看起來練馬拉松的叔叔超車 幸好最後只落後200公尺 我太累了 又從來不暖身的 這樣好像不太好" },
      { type: "link", content: "https://photos.app.goo.gl/ke7rPM2MToVigEmM8", label: "2022年11月22日 \
        我發現自己很少分享相機泡水的緊急處置 網路上很多偏門的方式 但在這裡分享最正規最安全的做法給大家參考 感謝分享 這個案例最後成功拯救相機 \
        非常幸運 真的太棒了 有想看詳細的朋友 這是官方的處理流程 希望大家都別遇到相機泡水" },
      { type: "link", content: "https://photos.app.goo.gl/ivn3qBfTFw7JJDX98", label: "2021年11月22日 台北超忙碌的每一天 總算有空請壽星吃好料" },
      { type: "link", content: "https://photos.app.goo.gl/K2TJW3rF7wqR7G347", label: "2020年11月22日 被投資大師說帥" },
      { type: "link", content: "https://photos.app.goo.gl/vBDADAocZgZwQ9mz9", label: "2018年11月22日 我有兩幅作品在台北市市府大樓一樓中庭展出 非常感謝市政府的分享 可惜今天的記者會無法參加 也錯過跟熊讚見面的機會QQ 11/22-11/27展出期間 可以去看看唷" },
      { type: "link", content: "https://photos.app.goo.gl/9vxD4fdvxL7As5Ar7", label: "2018年11月22日 遙遠ㄟ距離 只剩這個努力下去的動力 希望多存錢了" },
      { type: "link", content: "https://photos.app.goo.gl/cYf3diFJ6qwMKbi98", label: "2017年11月22日 使用luminosity能讓我快速 無痕跡的合成銀河 無天空地面交界的多餘痕跡 想知道如何製作 可以私我 預約我的後製家教課程" }
    ],
    "23": [
      { type: "link", content: "https://photos.app.goo.gl/ToQq4u3DpqaRSwRA7", label: "2025年11月23日 計劃很久的事情突然落空 真的很痛苦 雖然是兩件好事 但衝突在一起必有一個犧牲 唉 已經很久沒有那麼沮喪" },
      { type: "link", content: "https://photos.app.goo.gl/tJEL7x14iVzXMtZr9", label: "2025年11月23日 還是要有多一點這樣漫無目的的亂逛" },
      { type: "link", content: "https://photos.app.goo.gl/E9yucafbv6UbtuU79", label: "2025年11月23日 夕陽下去之前強烈的光線很美" },
      { type: "link", content: "https://photos.app.goo.gl/AKqwFZjyL6zA7iNH6", label: "2025年11月23日 這真是我拍過最可惜的地點 明明是台灣唯一最佳視角的101構圖 有對稱 有高度 正對夕陽 結果咖啡吧設立在剛好擋住101的位置 兩層超厚髒玻璃 然後未來不再開放民眾 真的是把能拿來宣傳台灣的景浪費了" },
      { type: "link", content: "https://photos.app.goo.gl/9aiSFH9QyqU8nXo37", label: "2025年11月23日 好羨慕 拍爆" },
      { type: "link", content: "https://photos.app.goo.gl/n75N65YN5ZZqzRom6", label: "2025年11月23日 哈哈哈他可以上台比賽了" },
      { type: "link", content: "https://photos.app.goo.gl/Hsuh2fHast1148Ld8", label: "2025年11月23日 我們應該多逛一下" },
      { type: "link", content: "https://photos.app.goo.gl/HCJbDm8vekfzM6vRA", label: "2024年11月23日 呵 病人騙醫師的事情更多 病人倒是可以厚顏無恥不用道歉不用被公審" },
      { type: "link", content: "https://photos.app.goo.gl/8DpuSQepabR3EN7GA", label: "2024年11月23日 請問這需要藥物治療嗎 感覺不用" },
      { type: "link", content: "https://photos.app.goo.gl/Pc4LdDBDbgKv8jjj8", label: "2024年11月23日 閃亮亮" },
      { type: "link", content: "https://photos.app.goo.gl/e1C8zvxpzxoQR7RE6", label: "2024年11月23日 路人也太會拍" },
      { type: "link", content: "https://photos.app.goo.gl/aLZv9G3uYdUBYLW17", label: "2023年11月23日 \
        有史以來最難的報告當之無愧 三個禮拜才做到75%左右而已 100多篇REFERRENCE都在講差不多但又不同的東西 幾乎每篇都給我看這三小鬼圖 到底幾個人看得懂這個圖片 根本看不懂啊 \
        PPT做快80頁還沒到盡頭 真覺得報不出來 對於免疫沒研究 又沒做過臨床試驗的我 然後要報這種極度艱深 又要介紹數十種不同免疫研究跟治療方式 痛苦" },
      { type: "link", content: "https://photos.app.goo.gl/yGDaE7aWRQdrNw3c7", label: "2023年11月23日 \
        例如MMP-9這個鬼東西 整個文章只有一個REFERRENCE提到 然後還是得回去翻原文 原文寫的機轉完全就是第一次聽過根本看不懂 然後花了一小時跟AI對答還是一知半解 \
        最後整個文章有好幾個這種全新而且超複雜的知識 真的很浪費時間 真的做過最扯的高難度報告" },
      { type: "link", content: "https://photos.app.goo.gl/Fy5PWw13MBHix8rz9", label: "2023年11月23日 今天繼續看十幾篇長這樣看不懂的鬼圖 沒關係 報告迫在眉睫 先想辦法掰內容 這個圖都直接跳過" },
      { type: "link", content: "https://photos.app.goo.gl/PoFiKKJzuEwDAXdY6", label: "2023年11月23日 自顧自的抱怨卻沒好好解釋到底在忙什麼 就是如圖內容" },
      { type: "link", content: "https://photos.app.goo.gl/A4y8szppSP3q6GZ18", label: "2022年11月23日 其實蠻羨慕的 並不是每家醫院的制度跟風氣 都允許住院主治醫師有精彩自由的人生" },
      { type: "link", content: "https://photos.app.goo.gl/xjhe54A8WQs179S38", label: "2021年11月23日 TBS剔邦饈Teppanyaki 吃的好飽" },
      { type: "link", content: "https://photos.app.goo.gl/Y7gLMZY6jYSUHt8G7", label: "2020年11月23日 收到星巴克後方可執行填寫任務" },
      { type: "link", content: "https://photos.app.goo.gl/izfAVfnfDqS2anvn7", label: "2019年11月23日 夏內爾落羽松民宿 這種程度的漂亮 很難相信在平價的台灣民宿裡 大推" },
      { type: "link", content: "https://photos.app.goo.gl/apPYEj8nchjAqKF5A", label: "2019年11月23日 雲洞山莊 20191123第一次來超熱門攝影景點敷面膜" },
      { type: "link", content: "https://photos.app.goo.gl/dMTXUEhSLNusmJBn7", label: "2018年11月23日 柯市長加油" },
      { type: "link", content: "https://photos.app.goo.gl/gGyLopLZQrJHQSwk8", label: "2018年11月23日 笑死人 拼命找柯批碴 實柯批根本沒性別歧視你們 倒是他的用心他的政績造福整個台北 而你們正是亂源" },
      { type: "link", content: "https://photos.app.goo.gl/jAvqZvbzdt3gA1XJ8", label: "2018年11月23日 \
        某位景仰的公眾人物曾說 並不是給政府可以給的 而是給人民需要的 一直心有戚戚 真正的好 並不是給自己開心能給的 而是別人真正需要的 \
        說的簡單 體悟難 做到更難 圖中的人影 最近他工作壓力很大 我也發現自己常很久不能下班 原來以前隨揪隨拍這麼難 這就是工作的責任吧" },
      { type: "link", content: "https://photos.app.goo.gl/ntEtdCGH9B7fyuLc9", label: "2018年11月23日 Thank you" },
      { type: "link", content: "https://photos.app.goo.gl/ui9AdwAh6Y14igSA8", label: "2018年11月23日 可愛ㄟ綿羊" },
      { type: "link", content: "https://photos.app.goo.gl/wiJd6N3S4JQkrg3v6", label: "2018年11月23日 上拉連結有網址 我有兩幅作品在台北市政府大樓一樓展出 分可以猜猜是哪兩幅 最後希望這週日能親自去看看" },
      { type: "link", content: "https://photos.app.goo.gl/jbCkD6HoxzGd7iRE6", label: "2016年11月23日 來幫學長測試第一台VHIT 暈眩門診 VHIT VIN 眼震測試" }
    ],
    "24": [
      { type: "link", content: "https://photos.app.goo.gl/Tadkp3NEneocyJiR9", label: "2025年11月24日 \
        台北的絕景 致消逝的景點 除了風景攝影 我對於城市的標誌性建築也有偏執， 望能拍遍世界各地的知名地標 哪怕花錢花時間 只要合法我都要去完成 \
        知名地標的建築通常都很高 但並不是很好拍 通常最好但拍攝高度是20樓以上 因為這能使地面露出的範圍 在廣角之下有舒服的擴張感 所以要在這些建築旁邊有剛好距離的20樓高樓 \
        另外也要能夠正對夕陽或日出方位 這是光線的重要性 最後要能夠有簇擁式的構圖 藉由周邊的次高樓群來凸顯指標建築 這是構圖的重要性 \
        光是這幾點就不容易 能夠符合合法的 只有找滿足條件的觀景台或飯店 以日本拍攝東京鐵塔為例 是個很先禁的國家 各種禁止腳架及禁止接近欄杆 根本不可能有完美的觀景台 而飯店也常沒有對外陽台 透過玻璃的畫質絕對大打折扣 \
        再說回這間Ka sky coffee 今天過後再也不對外開放 其咖啡吧甚至設立在剛好擋住101的方向 一個有大片落地窗且符合光線及構圖的完美視角 除了景色被擋住 還有兩片超髒的厚玻璃 完全的角度只能蜷縮在一個小角落拍 \
        如果這個咖啡吧的賣點是這個景色 那真的有點矛盾XD 當然我知道這些飯店或觀景台的設立本就不是為了攝影存在 但攝影的成品是一種藝術的表現 絕美的視角 光線及構圖甚至不是金錢衡量的 有錢也使喚不了彩霞為你燃燒 \
        當一個進步的都市能夠考慮到藝術層面 就應該規劃給民眾能夠創作畫面的機會 這些作畫攝影等等 也能促進觀光跟留下回憶 隨著時間更顯價值 \
        說了這麼多 只是我個人內心很深的遺憾而已 也許只有像我這樣很在意拍攝細節的少數人覺得重要 世界不為誰而運行 我只能靠自己的能力 繼續努力創作出內心預想的作品了哈 \
        As the sun sets the sky glows in radiant hues while Taipei 101 rises gracefully at the citys heart Lights flicker on blending with the twilight where vibrance and serenity meet " },
      { type: "link", content: "https://photos.app.goo.gl/iLbJXoBorSLBMRYj8", label: "2025年11月24日 恭喜畢業 我還在無限留級" },
      { type: "link", content: "https://photos.app.goo.gl/1EmxrCBDJDLHQCvRA", label: "2025年11月24日 想當年入伍訓最後的五百公尺障礙場地 居然成為歷史了 當年是邊爬旁邊TNT真的一直在爆炸 最後前面那個山頭衝刺殺 然後進到洞裡再從右邊小路走出來 已經成為回憶了啊" },
      { type: "link", content: "https://photos.app.goo.gl/NmuUqhZ1EUJLm6B37", label: "2025年11月24日 靠ps cc模擬創作出這個點完美的景色了 完美的畫質 完美的細節 完美的天空" },
      { type: "link", content: "https://photos.app.goo.gl/GqnGgCCdY7xH74MJ6", label: "2025年11月24日 窮爆" },
      { type: "link", content: "https://photos.app.goo.gl/7AXZNPKKWUNnzQuN6", label: "2025年11月24日 哇靠 我也準備去撿錢包了" },
      { type: "link", content: "https://photos.app.goo.gl/vD8c7YK8v2UYJDko8", label: "2025年11月24日 這真的賺爛" },
      { type: "link", content: "https://photos.app.goo.gl/LiAi2Ykuec1oeU8d7", label: "2025年11月24日 弄了一個超可愛影片 佩服AI" },
      { type: "link", content: "https://photos.app.goo.gl/23HemcGVghXEUEWC8", label: "2024年11月24日 生日快樂 昕慧超級優秀" },
      { type: "link", content: "https://photos.app.goo.gl/a6iBQkKpUwdfouE87", label: "2024年11月24日 信義區永遠都在變化" },
      { type: "link", content: "https://photos.app.goo.gl/otMPLDYEASNVKeVM9", label: "2024年11月24日 感覺是打大小孩跟小小孩哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/SVsZ5SUvqfvj4V1u8", label: "2024年11月24日 下次我也要一起去" },
      { type: "link", content: "https://photos.app.goo.gl/e6FaaMnwTW3nDEsZ7", label: "2024年11月24日 好屌的歌 以前都不知道歌詞是這樣" },
      { type: "link", content: "https://photos.app.goo.gl/uz7seXCjb395i5FBA", label: "2024年11月24日 \
        超喜歡這次拍攝的場地 天氣好光線美 恭喜這對新人 認識也很長的時間了 能夠參與甜蜜幸福的婚禮真的很開心 \
        這次在心之芳庭拍攝 感謝台中總是高機率的出現好天氣 看起來是上天也給予滿滿的祝福 心之芳庭的採光也非常漂亮 尤其是送客時的自然光 搭配新人眼光超棒的佈景設計 大自然背景 是我拍過數一數二喜歡的畫面" },
      { type: "link", content: "https://photos.app.goo.gl/6B3GbmW17xTfbiDYA", label: "2024年11月24日 恭喜" },
      { type: "link", content: "https://photos.app.goo.gl/B8ZdNGqgVh83C9Uh6", label: "2024年11月24日 大推主治醫師 可以看影片好好複習一下 學弟妹建議追蹤這粉專 臨床受用無窮" },
      { type: "link", content: "https://photos.app.goo.gl/61Z1XxsNP7oV9C7x9", label: "2023年11月24日 值班繼續虐待AI回答問題 有幾個問題他需要想30秒才有答案" },
      { type: "link", content: "https://photos.app.goo.gl/Bj5fzitQSUDPQxW46", label: "2023年11月24日 \
        讚啦做完了凸 99頁PPT 破紀錄的頁數 每頁我都幾乎只放圖 我保證報到我自己都不知道在公三小 台下也不知道自己聽了三小 當然 我讀完快100篇文章也不知道自己到底看了三小 一個禮拜沒運動 超悶 呵" },
      { type: "link", content: "https://photos.app.goo.gl/FMo79iaMA3yrwGwP7", label: "2023年11月24日 \
        這次旅程選擇了待在下龍灣的遊艇上住宿一晚 發生了許多小意外和插曲 像是空拍機差點墜海 緊急迫降在別人家的郵輪上 前往驚訝洞時 因為吃太飽肚子不舒服又去旁邊吐 休息一陣子 只能說這次的下龍灣行令人又驚又嚇的" },
      { type: "link", content: "https://photos.app.goo.gl/mgDR1MqF8p16djXw8", label: "2022年11月24日 那些標示太快出錯了 這是NRC的維修唷 感謝提醒我的好友們" },
      { type: "link", content: "https://photos.app.goo.gl/yfxQrp4rDG6bJ9XQ9", label: "2022年11月24日 最近大概一個月修不到兩張圖 而且豪無靈感 工作壓力佔據了大腦" },
      { type: "link", content: "https://photos.app.goo.gl/ZEZpBVociEgxUMtL7", label: "2022年11月24日 真吉歪欸XD" },
      { type: "link", content: "https://photos.app.goo.gl/yesh7vrTA4P1RFiQ8", label: "2021年11月24日 後山埤捷運站 奇岩站" },
      { type: "link", content: "https://photos.app.goo.gl/q71HdrDKbx34bB9H9", label: "2020年11月24日 莫忘在內科充滿歡笑的日子啊" },
      { type: "link", content: "https://photos.app.goo.gl/P14wPB1u9ZZadM9S6", label: "2020年11月24日 \
        11/21買的好市多肉 因為吃不完不想浪費所以售出 價格如圖 一號有至少六片厚肉 二號有至少四片小一點的厚肉還有很多細肉 三總或學校均可面交 \
        玻璃盒是全新的非賣品喔 請自備容器或用完當天還我XD 臉書不讓我放照片 我只好用黑白的 要看彩色請私我 等下也會放留言試試orz" },
      { type: "link", content: "https://photos.app.goo.gl/9mPAQfRQ5ZQ3ecFq6", label: "2020年11月24日 陳維鋐你的最愛" },
      { type: "link", content: "https://photos.app.goo.gl/tsLgzpCpbn6Dob3V8", label: "2018年11月24日 \
        很久才能回家一次 默默完成投票沒有廢票 心得是40歲以上的人佔了七成多啊 現場不知道幹嘛就目測隨機數 剩下30上下跟幾個明顯20初的 \
        只能說現在的政策決定20歲人未來的環境 真的應該好好投票" },
      { type: "link", content: "https://photos.app.goo.gl/FAHDjQ7GDnRRw4i67", label: "2018年11月24日 真的不懂柯這麼努力 為何選的這麼辛苦" },
      { type: "link", content: "https://photos.app.goo.gl/nrDvhR7nDQ8kACRX7", label: "2018年11月24日 天佑台北 拜託了" },
      { type: "link", content: "https://photos.app.goo.gl/EGEMJJAaYqSbtDdh6", label: "2018年11月24日 雖然我不是台北戶籍 但拜託天佑台北 這應該是第一個也是最後一個我欣賞的政治家" },
      { type: "link", content: "https://photos.app.goo.gl/VroLg9X4EW3dybH88", label: "2018年11月24日 \
        真的不懂 很多老一輩真的不知道為何藍綠不惜砸千萬上億只為了選市長嗎 選上隨便官商勾結都是幾億在分紅 真的沒有人會為了造福人民自掏腰包花千萬選舉好嗎 \
        沒有暴利利潤政黨怎麼甘願這樣花錢 你辛苦一輩子賺錢甘心讓那些政治人物勾結分紅嗎 而且查不到告不到的 你們這些貪婪老人努力一輩子繳稅 甘願給某政黨貪汙一次賺爽 \
        爽嗎 唉 只要我選上大巨蛋四個月解決 解決個毛 暗示遠雄趕快幫我拉票選上就讓你們賺到飽" },
      { type: "link", content: "https://photos.app.goo.gl/ccGnB1QxSRD3uSp27", label: "2018年11月24日 多那之崇德店 有攝影case需求請找" },
      { type: "link", content: "https://photos.app.goo.gl/wjjhkaQ8eKwvjb5N6", label: "2018年11月24日 在百貨公司專櫃購買 已經忘記原價 但算有牌子的吧 只戴過一次 需要手動打領帶" },
      { type: "link", content: "https://photos.app.goo.gl/U5DXsEhSmXXMrRD3A", label: "2017年11月24日 後來發現越燒越高 全身無力應該是流感 一驗果然B流 開完自費Rapiacta給他回家 只是做個經驗紀錄大家都很強看完笑笑就好" },
      { type: "link", content: "https://photos.app.goo.gl/ajFT5ZTtXJnJywJ19", label: "2017年11月24日 27男沒病史 感冒症狀 四肢無力 想吐 但沒吐三天 Blood routine CXR正常 燒到38.8 感覺是病毒感染的呼吸道症狀 為何肝功能會變高呢" }
    ],
    "25": [
      { type: "link", content: "https://photos.app.goo.gl/qzXzgXtxJawUPT1G8", label: "2025年11月25日 他當下真的嚇傻XD" },
      { type: "link", content: "https://photos.app.goo.gl/srHQ954dJqtcorBX9", label: "2025年11月25日 Diastolic dysfunction大彙整完成 濃縮再濃縮 但所有重點都要放 也要有60頁 一小時應該報得完吧" },
      { type: "link", content: "https://photos.app.goo.gl/W1sTvt2REqCXobzi8", label: "2024年11月25日 吃的跟長肥的都比練的多 有氧也大大退步 身體還開始出現各種無法根治的毛病 真的很希望擁有健康 健康才能讓我有足夠時間環遊世界 去旅行" },
      { type: "link", content: "https://photos.app.goo.gl/ingbWBTSfz2yqf9q9", label: "2024年11月25日 真可愛" },
      { type: "link", content: "https://photos.app.goo.gl/UhKFAg56tzQ73yzG6", label: "2024年11月25日 這隻可以收編欸" },
      { type: "link", content: "https://photos.app.goo.gl/9aJ6MSwemY6dBuyYA", label: "2023年11月25日 好想去拍照" },
      { type: "link", content: "https://photos.app.goo.gl/U1Y3xVXYb9AYMVXw8", label: "2023年11月25日 風雨中慢慢磨慢慢跑" },
      { type: "link", content: "https://photos.app.goo.gl/pgvR354rHHRAhYcz9", label: "2023年11月25日 漂亮到差點捨不穿的跑鞋 但現在超沒時間運動" },
      { type: "link", content: "https://photos.app.goo.gl/bPTQP64jfTEqRo5T9", label: "2023年11月25日 \
        魚簍阿公特輯 阿公是魚簍傳藝的靈魂人物 沒有阿公就少了一半的感覺 因為這位阿公 總是泰然自若的迎接客人 熱情的打招呼絲毫沒有防備 並且出動他的魚簍戰車 \
        滿載的竹編魚簍 遠遠的看彷彿是球型的花 緩慢的移動卻非常引人注目 雖然很多是擺拍 但仍感受到傳統生活的趣味跟樸實簡單的風情 內心不禁想到 幸好安排了這個行程 才能看到如此可愛的地方跟人物" },
      { type: "link", content: "https://photos.app.goo.gl/6siFy3vWYPZCmW4j8", label: "2021年11月25日 決定成立一個精選動態 紀錄特別的天氣 也供大家一起學習預測火燒雲 台北低雲火燒 雲圖看起來 中部以北都大燒 不過時間很短暫" },
      { type: "link", content: "https://photos.app.goo.gl/XkxtjDmf4pUkcddd6", label: "2020年11月25日 有所有人的簽名 厲害 真的厲害" },
      { type: "link", content: "https://photos.app.goo.gl/wUeNxfrse8UsEcqV8", label: "2020年11月25日 超屌的新創公司 支持起來" },
      { type: "link", content: "https://photos.app.goo.gl/WPz8f6KQC5d1k6pAA", label: "2020年11月25日 虧本王二人組 除了蛤蜊跟菜 我真的不知道要拿什麼 大干貝甚至都沒了 明明剛剛還在我眼前 店員卻說今天的份都沒了 我連一顆都沒吃到耶" },
      { type: "link", content: "https://photos.app.goo.gl/kyQJ4bKZTfcczCex6", label: "2020年11月25日 皇家帝國麻辣火鍋吃到飽 三週年紀念開吃啦 這次請帝王麻辣鍋 點多少都算我的盡量點XD" },
      { type: "link", content: "https://photos.app.goo.gl/uSx8JdApE6eJ2bRV9", label: "2020年11月25日 看看這是誰來了" },
      { type: "link", content: "https://photos.app.goo.gl/LYKkKRXTpfUNhJ2s9", label: "2020年11月25日 我用這個早餐解釋AAA" },
      { type: "link", content: "https://photos.app.goo.gl/17mHtwyvMWMqkJtbA", label: "2019年11月25日 苗栗雲洞山莊 兩周年了 謝謝妳的陪伴包容 讓每次的拍照都有意義 更讓拍照之外的所有事有了意義 對唷 好眼力哈哈 不過原本天空不優 我比較在意結果的畫面 真實狀況比較不在意哈XD" },
      { type: "link", content: "https://photos.app.goo.gl/vujdnCN2ZF9HC9Tm9", label: "2018年11月25日 一週年" },
      { type: "link", content: "https://photos.app.goo.gl/FbXzz68BwBD4WZt3A", label: "2016年11月25日 CILF 幹伶娘你們是在嗆三小 找死是不是 沒有很可以 但你惹不起" }
    ],
    "26": [
      { type: "link", content: "https://photos.app.goo.gl/LoU19K1W5rLgsVRM9", label: "2025年11月26日 傻的一批 軍費生什麼都不能選 唯獨護理系才該選 真的傻的一批 你都不知道軍費護跟外面護差多少" },
      { type: "link", content: "https://photos.app.goo.gl/sAqZTDLXBxnvGyRq7", label: "2025年11月26日 所以我才不買這個牌子 而且他方形的太大顆 根本超占空間" },
      { type: "link", content: "https://photos.app.goo.gl/w1zc43oH848dBgwB9", label: "2025年11月26日 哇靠 要買嗎 要的話我買" },
      { type: "link", content: "https://photos.app.goo.gl/TSBX8pWBhTmpzVrQA", label: "2025年11月26日 He is black but hos rice is white They are good friends" },
      { type: "link", content: "https://photos.app.goo.gl/zWH4W7dtqMXEiVKU9", label: "2025年11月26日 ㄏㄠ ㄚ" },
      { type: "link", content: "https://photos.app.goo.gl/FJjDwpS4KpDvjyUy7", label: "2025年11月26日 好啊" },
      { type: "link", content: "https://photos.app.goo.gl/CC9hZ8Pc3wPt4RWs9", label: "2024年11月26日 超可愛 阿啾也說他要拍證件照" },
      { type: "link", content: "https://photos.app.goo.gl/yKg1ZzLo3NVfabbV9", label: "2024年11月26日 從不同視角看這幸福的瞬間 真的很感動" },
      { type: "link", content: "https://photos.app.goo.gl/KvNLsfLm1aZYGgdZ9", label: "2024年11月26日 沒有" },
      { type: "link", content: "https://photos.app.goo.gl/Z6LdigVRaRobFzSTA", label: "2024年11月26日 太可愛了哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/3eQrKtfhGvYfrkjF9", label: "2024年11月26日 好歡樂 以後來裝XDD" },
      { type: "link", content: "https://photos.app.goo.gl/RoRHPD9H1FAGZcwP7", label: "2023年11月26日 分享蛤蜊香菇雞湯做法 冬天暖呼呼 怎麼那麼厲害的啦" },
      { type: "link", content: "https://photos.app.goo.gl/dyiUnKoXg1fr16SGA", label: "2023年11月26日 冬天的豐盛晚餐 做完報告居然有超豐盛晚餐 我只負責當車手跟提款機 其他都搞出來的 實在有夠厲害" },
      { type: "link", content: "https://photos.app.goo.gl/BUqUkj38nNdpU6LFA", label: "2023年11月26日 花了一天把99頁的報告縮減成80頁 第一次做這種全新的主題 幸好老師很耐心的解答 聽到有學妹研究相關主題 實在太厲害了 研究這個光做實驗跟寫文章 就沒生活品質了吧 我還是繼續以林氏璧醫師為目標就好" },
      { type: "link", content: "https://photos.app.goo.gl/H9sUAZqZdQfknXhQ7", label: "2023年11月26日 買露營椅回家放" },
      { type: "link", content: "https://photos.app.goo.gl/ekq4rsY9Hwd4FVsz9", label: "2023年11月26日 準" },
      { type: "link", content: "https://photos.app.goo.gl/bgFvNBDdoNZ3ZHu38", label: "2022年11月26日 這是中國醫藥學系招生文" },
      { type: "link", content: "https://photos.app.goo.gl/WBZpJZC2q994U3KUA", label: "2021年11月26日 \
        丟了感謝,掉了尊重 生活分享 某位文青網紅把南投暨南大學演講的感謝狀直接丟進垃圾桶 不只發在限時 還在道歉文中寫成台中暨大 讓我滿訝異的 \
        丟棄感謝狀的行為 只會出現在努力被辜負 或是被敷衍 若是收報酬的演講 實在想不出有理由做到這樣 所以我很好奇他後續會講什麼理由 \
        走紅或許是機緣運氣 也或許是真本事及累積的努力 但無論如何 都不要把大眾當笨蛋 若不是大眾願意買單 也不會有登上講台傳達價值觀跟作品的機會 \
        對我來說 每位粉絲的追蹤支持 並不是為了讓版面漂亮 而是讓藝術者能肯定自己 付出的作品跟堅持 原來是被大家接受的 \
        所以我一直抱著感恩的心 不論是願意聽我演講 或是看我文章 甚至是路上看到我作品特別跟我分享 這種受到重視的感覺 是我最大的動力 \
        因此粉絲回饋給粉專 粉專回饋給作品 作品再回饋給粉絲的良性循環得已產生 而這個良性循環 是建立在尊重跟感恩裡 \
        身為粉專 並不需討好粉絲 但必須感謝每個粉絲的支持 才能讓自己的信念跟作品能被看見 抱著這樣的想法 也就不會把別人的感謝跟支持 當作理所當然的丟掉了" },
      { type: "link", content: "https://photos.app.goo.gl/hak1nwcGmqQWXH9E7", label: "2021年11月26日 感謝線上演講課程 更新CRE最新最正確的用藥" },
      { type: "link", content: "https://photos.app.goo.gl/F5qndjwUg1KxQ2qK9", label: "2021年11月26日 \
        國泰富邦明年股利創新高 將可能納入0056 0056納入當週股價有機會爆衝 一星期內5-10% 富邦80以下 國泰60以下可買 \
        就算沒爆衝也是大到不能倒的龍頭公司 套牢不怕 先預告在這裡放著 明年驗證 另外若富邦成功合併花旗銀行 百元可期待" },
      { type: "link", content: "https://photos.app.goo.gl/yQw4a1LeRqZVMzzX9", label: "2020年11月26日 不能跟律師要免費諮詢 不能跟老師要免費上課 不跟工程師要免費修電腦 請問為何可以跟醫師要免費建議 免費仔通通吃屎去" },
      { type: "link", content: "https://photos.app.goo.gl/wwRhswRM4n1ENsi87", label: "2018年11月26日 婕涵唯一總統" },
      { type: "link", content: "https://photos.app.goo.gl/tqCwKcykYy5NUpEV6", label: "2018年11月26日 \
        無意間在高雄撞進這個小村子 裏頭大概都是老人 騎著機車或路邊聊天 貓狗也懶懶的躺在地上 瞬間我覺得很幸福很羨慕 老了最重要的不是坐收金山銀山或擁大權 \
        而是簡簡單單 非常自由 健康的住在寧靜的小村 心裡和平 是最大的幸福" },
      { type: "link", content: "https://photos.app.goo.gl/M58S9NuR3LPtTSmdA", label: "2018年11月26日 今天才能說一週年快樂 現在完整的一起一年了 我需要改進的地方很多 還要繼續加油 也謝謝你的督促跟包容" }
    ],
    "27": [
      { type: "link", content: "https://photos.app.goo.gl/nwS124MbuB5rbjkMA", label: "2025年11月27日 \
        因為很多像你這種人都覺得我們是欠你的 醫師欠你的 護理師欠你的 \
        整個醫療體系好像我們辛苦付出血汗是應該的 領底薪是應該的 為了病人失去自己的生活跟健康應該的 講白一點 不是所有人都值得被救 少偽善了" },
      { type: "link", content: "https://photos.app.goo.gl/mhFBwSTYerVtj5JeA", label: "2025年11月27日 神經內科已經很難 但可以建議走心臟內科 這又更難" },
      { type: "link", content: "https://photos.app.goo.gl/8STrTdMJ1ikoWXyKA", label: "2025年11月27日 可以建議她考上國防醫學院但選軍費生" },
      { type: "link", content: "https://photos.app.goo.gl/cyqHWJea4Vi6oWMr6", label: "2025年11月27日 平日沒人真的很適合拍這種ai的感覺" },
      { type: "link", content: "https://photos.app.goo.gl/tDAxUZwMazh7v4zB7", label: "2025年11月27日 你不用討愛 好吧" },
      { type: "link", content: "https://photos.app.goo.gl/5RmTY9VjVMMxMJiZA", label: "2025年11月27日 值班來病房看一下病人 到底是誰這麼有創意" },
      { type: "link", content: "https://photos.app.goo.gl/zW5kseLNJGKnYukB7", label: "2024年11月27日 有夠可笑的看板 人類的量才太多 應該消滅那些對人類社會沒益處而且有害的人吧" },
      { type: "link", content: "https://photos.app.goo.gl/SUawxrDVfYzQr3RYA", label: "2024年11月27日 他真的很聰明 用肉眼看不到的速度前進xdddd" },
      { type: "link", content: "https://photos.app.goo.gl/YQBKGMrnZbYw1paT9", label: "2024年11月27日 犒賞動干給他吃" },
      { type: "link", content: "https://photos.app.goo.gl/ShXfiB2VXxdjq5xUA", label: "2024年11月27日 超級好看" },
      { type: "link", content: "https://photos.app.goo.gl/RG22fMMScF2A7QyGA", label: "2024年11月27日 好想被咬哦" },
      { type: "link", content: "https://photos.app.goo.gl/qFofgeMSnwaRoHsL6", label: "2024年11月27日 想知道後續處置 請問是在perforation的部分架一支新的stent嗎" },
      { type: "link", content: "https://photos.app.goo.gl/qFofgeMSnwaRoHsL6", label: "2024年11月27日 超可愛 直接收養" },
      { type: "link", content: "https://photos.app.goo.gl/Xob84bTr5xHWdwUZ8", label: "2023年11月27日 驚險結束最難的一次展會報告" },
      { type: "link", content: "https://photos.app.goo.gl/mcbKrnTcfGeQ8Xom9", label: "2023年11月27日 傻眼新出現的網紅 直接把真鈔當白紙在撒 到處發錢" },
      { type: "link", content: "https://photos.app.goo.gl/iXEEWyTX8YvZfuAb6", label: "2022年11月27日 難得的放假 每年N度請吃大餐 不過我們兩個好像賠錢貨" },
      { type: "link", content: "https://photos.app.goo.gl/SpzYFj85yv1beoDr8", label: "2020年11月27日 真的是幹話王" },
      { type: "link", content: "https://photos.app.goo.gl/MwnSHAe5Say6EDZV8", label: "2020年11月27日 沒有背叛內科護理站的家綸生日快樂" },
      { type: "link", content: "https://photos.app.goo.gl/s3zp1MRzVnYnb2MG7", label: "2018年11月27日 市長已是我們台灣很多人的精神指標 請繼續帶領台北前進" },
      { type: "link", content: "https://photos.app.goo.gl/FMcpv4So8Hei8hSq9", label: "2018年11月27日 這樣才對" },
      { type: "link", content: "https://photos.app.goo.gl/h96GXsg1FRFLCNiJ7", label: "2017年11月27日 \
        12月份班表已經出來 之前有跟我約攝影家教 或現在想約家教的朋友 歡迎跟我聯絡確定時間唷 抱歉醫院事務繁忙 排班很慢 小弟致上萬分感謝 \
        後製家教時間 為全天可約時間 若想知道詳細規則可私 感謝" },
      { type: "link", content: "https://photos.app.goo.gl/M2oZPreKyHVxt3758", label: "2017年11月27日 Magic book teached me to magic the city" },
      { type: "link", content: "https://photos.app.goo.gl/3czeLLUwZbhvQ5wn9", label: "2017年11月27日 何其幸運才能遇到也喜歡拍照的妳 更幸運的是有妳走過許多風景 因為遇見妳過去的一切都值得 我會努力要求自己 穩紮穩打更成長 謝謝妳" },
      { type: "link", content: "https://photos.app.goo.gl/DLQtSSwrhmLRHAzq5", label: "2017年11月27日 第一次以醫生身份壓救護車 心臟差點沒跳出來 塞車時開120絕對比玩任何賽車遊戲刺激" }
    ],
    "28": [
      { type: "link", content: "https://photos.app.goo.gl/SG2oQvnMEwPVwznJA", label: "2025年11月28日 加入「小7國醫好康團go」" },
      { type: "link", content: "https://photos.app.goo.gl/pXiSPz6tsddbM3Wq8", label: "2025年11月28日 店長好 想請問還會進貨7-11的299元聖誕樹嗎?" },
      { type: "link", content: "https://photos.app.goo.gl/ZwZ5AhfXTgHDgcw36", label: "2025年11月28日 認真說 要不要去啊我覺得可以去欸" },
      { type: "link", content: "https://photos.app.goo.gl/fmA7qudwuUXBQfpD9", label: "2025年11月28日 超想去拍雪" },
      { type: "link", content: "https://photos.app.goo.gl/2ACEaQYnbZzEHd3A9", label: "2025年11月28日 超好看" },
      { type: "link", content: "https://photos.app.goo.gl/ojS6yL2zVGiC4sqJ6", label: "2024年11月28日 一個Clip 120萬 一個人有四個瓣膜 如果心室又要裝輔助器或是無導線節律器又是300萬 所以一個心臟可以價值800萬" },
      { type: "link", content: "https://photos.app.goo.gl/ZTuekMbYePhMxXgGA", label: "2024年11月28日 去尋找 並且踏上這片美景 然後用自己雙眼感受大海 用自己的皮膚感受風 最後用相機紀錄 完成屬於自己的作品 是我這輩子最重要的事情 沒有任何事情 比這件事重要" },
      { type: "link", content: "https://photos.app.goo.gl/nzLs8Z5EBx4Qbani9", label: "2024年11月28日 工作中得到的任何成就 真的遠遠比不上當個環遊世界的風景攝影師" },
      { type: "link", content: "https://photos.app.goo.gl/LZF6jK5M5uMqKQNx5", label: "2024年11月28日 這好可愛 可以買一個哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/L3e163ife1xPkuup8", label: "2024年11月28日 他是要老公還是乾爹" },
      { type: "link", content: "https://photos.app.goo.gl/NMdDXmwhZTqiB6V89", label: "2023年11月28日 \
        看到公館星巴克收掉太驚訝 就連我不是讀台大都來過這裡幾次 從剛到台北讀書 超過十年前 就來過了 \
        那些不務正業 不用正常繳稅的吸血鬼房東 真的是台灣的惡性腫瘤 有時還會很偏激的希望有獨裁政府收掉這些人 \
        我們這些普通人辛苦工作的時候 他們跟他們的孩子孫子 遊山玩水 到處出國 開跑車戴名錶 唉" },
      { type: "link", content: "https://photos.app.goo.gl/T1b4b8yg1pJ9cDud7", label: "2023年11月28日 換新鞋第一跑 但這個路徑是" },
      { type: "link", content: "https://photos.app.goo.gl/fKWmKM3NdcB9C4ra7", label: "2021年11月28日 \
        台北TBS剔邦饈鐵板燒 中高價位的鐵板燒 特色是千變萬化的料理 讓人很驚艷 首兩張是牛排跟羊排 熟度抓的準 沾醬多樣 \
        第三張是甜點冰淇淋 冷熱交融入口即化 第四張是米粒狀義大利麵裹蛋汁 這是我目前吃過第一名的神仙義大利麵 Q度跟口味完美\
        第五張是紐西蘭鹿肉 口感似牛肉但野味多 還好 第六張是無熬小龍蝦 肉質很新鮮 第七張是鮭魚跟鮪魚 新鮮是肯定的 調味很特別 無法形容 算不錯吃 \
        第八到十張都是前菜 調味真的都是外面沒吃過的 整體而言 小輸墨賞 這家吃的是精緻跟別出心裁 外面絕對吃不到的特殊料理 喜歡嚐鮮 厭倦千篇一律的朋友很適合來吃一次" },
      { type: "link", content: "https://photos.app.goo.gl/2L2bquGiWFDjhcBK8", label: "2021年11月28日 今天西部沿海夕陽燒很大 應該 16:30開始就位 16:55-17:10大燒 雲海人怪怪的好像沒預測好" },
      { type: "link", content: "https://photos.app.goo.gl/57LLdHY4E8AoHuUu5", label: "2021年11月28日 這樣是沒有長嗎?" },
      { type: "link", content: "https://photos.app.goo.gl/uRzyFgZoY9fFp5Si6", label: "2020年11月28日 原來這是恐龍 我真的以為是果然翁 謝謝名攝影師大景哥aka恐龍粉讓我知道這隻可愛的恐龍" },
      { type: "link", content: "https://photos.app.goo.gl/88PkoSmFhsVwLKHx8", label: "2020年11月28日 這才是人生" },
      { type: "link", content: "https://photos.app.goo.gl/PzgjTq5yuCxCzhLZ8", label: "2020年11月28日 疲憊的工作後有一個乾淨的廚房可以讓潔癖的做料理真的很舒壓 不過我自己也會在這裡幫忙跟自己學料理XD" },
      { type: "link", content: "https://photos.app.goo.gl/uRQu9QYpgu42W6Hf7", label: "2020年11月28日 會不會太厲害" },
      { type: "link", content: "https://photos.app.goo.gl/8QkZyNZhJdQF85ju5", label: "2019年11月28日 牙齒永遠給我帶來麻煩" },
      { type: "link", content: "https://photos.app.goo.gl/UBzQ27TgrACG8PEG7", label: "2017年11月28日 \
        12月課程報名開始囉 秋葉原の日落火燒 12月風景後製家教開始預約囉 目前以北部為主 可全天預約 了解詳情與報名 私訊我即可 \
        內容有基礎課程 構圖 光線處理或進階遮色片 甚至亮度蒙版的使用 高反差 銀河 城市夜景或者大景合成都不私藏 後製或攝影技巧只會在課程完整回答教學 \
        不會在私訊透露 一對一限男性 教學是名目 我不以此為賺錢目的 當成交朋友的機會囉 任何問題課後皆不吝回答 中南部若我無法 會推薦其他超專業攝影師 絕對滿意 \
        歡迎大家一起研究後製 讓作品邁向更高層次吧" }
    ],
    "29": [
      { type: "link", content: "https://photos.app.goo.gl/gy7fTCJtdq8h6J526", label: "2025年11月29日 \
        這是台北市的絕景畫面 因為富邦大樓的咖啡廳正式不對外開放 為了處理掉骯髒的玻璃造成的畫質減損跟很多的反光 \
        我花了兩小時處理後製 還原出幾乎是沒有隔著玻璃拍攝且出大景的場景 我利用疊圖修飾天空 利用生成式ai補足邊緣的缺漏 \
        利用亮度蒙版劃分出前景跟遠景的光線變化 最後利用朦朧跟遮色片將光線做層次 \
        我沒有辦法100分的修補 但幾乎達成我夢想中的畫面 在拍攝地標性建築的過程 要付出很多的時間跟金錢 \
        有限的生命不太可能有拍完的一天 但我會繼續保持這份動力 更多的台灣攝影作品在這裡" },
      { type: "link", content: "https://photos.app.goo.gl/vu3mHcaT3Dyd3sZEA", label: "2025年11月29日 這玻璃真的太厚了沒辦法QQ" },
      { type: "link", content: "https://photos.app.goo.gl/UWH6qRmZH55Mhx6F9", label: "2025年11月29日 \
        感謝 這些我都知道 事實上狀況是現場絕佳的視野轉角被咖啡吧整個擋住 所以真正能拍的位置只有非常小一個角落 \
        還必須蹲在地上 也有不少遊客要拍 基本上很難再用外套或任何輔助做遮蔽 這樣會影響到客人太多 只能說富邦規劃時主打這個景色卻完全沒有用心在思考" },
      { type: "link", content: "https://photos.app.goo.gl/fptbWpGiuxhj8kYw6", label: "2025年11月29日 今天好多人喔" },
      { type: "link", content: "https://photos.app.goo.gl/g7hLEkr95tuup4fJA", label: "2025年11月29日 已經茁壯的非常棒" },
      { type: "link", content: "https://photos.app.goo.gl/MQgmukLFxMDVEoNY7", label: "2025年11月29日 他怎麼那麼可憐 先帶到旁邊的警察局QQ" },
      { type: "link", content: "https://photos.app.goo.gl/Qbjx1cmBVNBqHPbs7", label: "2025年11月29日 謝謝" },
      { type: "link", content: "https://photos.app.goo.gl/GhdgWPRLayf3ViWh7", label: "2025年11月29日 第一次知道有這個地方哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/hz2fbQWaHvMVssLh8", label: "2024年11月29日 \
        台北入夜前 每次出門拍照 都要先檢整裝備 這次發現有個以前沒分享過的好東西 就是eneloop可充電電池 \
        從剛玩攝影時 我的閃燈就是買eneloop_tw電池 直到現在外出拍照使用的頭等 閃燈等等器材都是 這次剛好趁Costco好市多黑五購物節週 直到12/1 入手一組 \
        好東西就是要分享XD 順帶一提 我有看到感恩節優惠的特價是2199元 之前原價 2999元 這個套組有eneloop pro 3號充電電池8顆及充電器1組 我覺得很划算 我長期有在買XD" },
      { type: "link", content: "https://photos.app.goo.gl/RnKe3PrNAVt8moy36", label: "2024年11月29日 我願意提供襪子幫他保暖" },
      { type: "link", content: "https://photos.app.goo.gl/qb7MEq9FYqpMZ6Q26", label: "2024年11月29日 好扁哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/G63cdoF3hPPqABzB7", label: "2024年11月29日 如果她流落街頭 就收養他 太可愛" },
      { type: "link", content: "https://photos.app.goo.gl/NndJh3hve6iCPx4t8", label: "2023年11月29日 對於民眾可能快速滑過的新聞 我還是想簡單說明一下 不想讓台灣醫護背後的血汗付出被埋沒" },
      { type: "link", content: "https://photos.app.goo.gl/6drNXTyoY2AKtmzM9", label: "2023年11月29日 \
        這個醫學中心評鑑 其實就是這樣 政府是莊家 了一個鬥場鬥蟋蟀 各家院長是參賽者 帶著他的員工 那些蟋蟀 灑進鬥場裡面鬥個你死我活 \
        蟋蟀多數都不願意 但院長說鬥 就是鬥到死 所以評鑑來 我們被迫加班 放著該看的病人不看 熬夜做假資料 把原本該以救人為目的 變成評鑑第一 \
        對的 我說實話很難聽 評鑑的時候病人的痛苦第二 評鑑第一 而逼迫我們的幕後黑手 就是衛福部這個政府機關 \
        你鬥贏了 院長成功拿到醫學中心資格 政府就會給你更多資源 其中一個就是錢 但你以為錢會直接給這些被鬥到半殘的可憐蟋蟀? 即使有 也只有一點點 CP超低 \
        為了錢 為了門面 為了醫院的資源 政府掐著我們脖子逼迫我們每年參加鬥蟋蟀 鬥的是我們的生命跟熱情" },
      { type: "link", content: "https://photos.app.goo.gl/up4Hqne6TqmNTVrQ8", label: "2023年11月29日 \
        而圍觀的觀眾就是民眾 民眾只需要享受政府創造的鬥蟋蟀節目 付一點點門票錢 掛號費 享受這個過程後帶來的好處就好 \
        台灣醫療的便宜跟高效率 還有不是服務業卻要卑躬屈膝 就是因為政府掐著醫師護理師等等的脖子 用完美包裝的威脅所以創立的表像 \
        這個醫學中心晉升跟下降 背後代表的是無數醫護悲慘的生活品質跟不合理的低薪換來的 我沒有危言聳聽 問你還在第一線的醫護朋友就知道 \
        院長會告訴你大家很辛苦嗎 不會的 因為院長敢說醫護很辛苦 代表他沒做好管理跟制度 誰會拿石頭砸自己的腳呢? 每家醫院都是如此 \
        最後希望民眾珍惜 台灣醫療很畸形 很珍貴 請好好愛護身邊的醫護同仁" },
      { type: "link", content: "https://photos.app.goo.gl/w9bzy6YEU1pHuyqD6", label: "2023年11月29日 \
        最後 前面說了很多負面的毒東西 但有什麼建設性能改變這情況的嗎? 答案是 有 \
        只要台灣政府願意砸更多的經費給醫療體系就好了 我們醫療的GDP遠遠輸給歐美 但品質勝過歐美就是因為剝削醫護才做得到 \
        只要台灣政府願意撥更多錢給醫療 就能有更多資源灌注在藥物 器具跟聘請更多醫師專師護理師 維持病人的照護品質 也讓醫護有合理薪水跟生活品質 更讓好藥不退出台灣 \
        那台灣政府願意撥更多錢給醫療嗎? 答案是NO 今年已經很多新聞 都報導政府一致否決醫療需求的經費 這是為什麼呢? \
        第一因為醫療是小眾族群 就算我們被剝削也影響不了選票 第二是醫療沒辦法收回扣 沒辦法官商勾結 沒有暴利可圖 聰明的官員怎麼會白白讓資金流到醫療去呢? \
        最後 只要利用鬥蟋蟀的方式 壓榨醫療人員一樣能給民眾好的就醫服務 何必增加費用呢? 以上幫大家撥開台灣醫療面紗之誠實豆沙包版本" },
      { type: "link", content: "https://photos.app.goo.gl/sN5YRBchNygnKzbaA", label: "2023年11月29日 恭喜" },
      { type: "link", content: "https://photos.app.goo.gl/ZwsywhiyyWXYQW1V9", label: "2021年11月29日 感謝粉絲回覆 果然有燒 可惜低雲太多了 衛星雲圖上暗綠色 燒的不夠漂亮" },
      { type: "link", content: "https://photos.app.goo.gl/bNAS2XDdc2mTyCdA7", label: "2017年11月29日 壓救護車最後一回 結束這個月汀州急診的上班日子" },
      { type: "link", content: "https://photos.app.goo.gl/HWzRkCrUJJzvRAxv6", label: "2017年11月29日 唉我頭頂上白白霧霧的 就是現在大屯大家拍很爽的雪海 上班上好上滿 放假天氣再剛好變爛 人生真是茶几" },
      { type: "link", content: "https://photos.app.goo.gl/8BsA8MHRnAP4VA2DA", label: "2017年11月29日 三軍醫院汀州院區 難得晴天 真的很適合上班呢" },
      { type: "link", content: "https://photos.app.goo.gl/PoMc945NeyNyxfDa9", label: "2017年11月29日 \
        每次遇到有症狀卻又查不出明顯異常 都只能給一些似是而非的診斷 好不踏實 剛剛那位我給 s/p upper airway inf COPD with AE 求指教 三軍醫院汀州院區" },
      { type: "link", content: "https://photos.app.goo.gl/7vxKHua9ii2jo9Wr8", label: "2017年11月29日 \
        76女高血壓 心血管病史目前服用抗肺癌藥 這次咳嗽有痰兩天 胸口辣辣的 抽血WBC正常 腎功能稍高 心臟酵素正常 胸部×光 心電圖正常沒發燒 嗯 會是上呼吸道感染嗎 詢問病史不像胃食道逆流 " }
    ],
    "30": [
      { type: "link", content: "https://photos.app.goo.gl/gA5XLXt2qvVbNBMU8", label: "2025年11月30日 要不是穿著衣服 這種長相我以為是兩隻腳走路的畜生欸" },
      { type: "link", content: "https://photos.app.goo.gl/iE3UjcXAqDHkdAM27", label: "2025年11月30日 \
        網路上看到這支實測影片 都拿共軍跟國軍當前的裝備 共軍的步槍子彈是第一發能打穿國軍抗彈板 \
        國軍的步槍子彈是第一發打不穿共軍抗彈板 除非陶瓷破頂從同一個位置第二發才會穿透 想想真的是很悲哀 不是不抵抗 是根本台灣沒有好好做準備" },
      { type: "link", content: "https://photos.app.goo.gl/7nti52zKL8BHsSPQ9", label: "2025年11月30日 如果可以不用隔著玻璃且天空有火燒雲就是這樣的畫面喔" },
      { type: "link", content: "https://photos.app.goo.gl/jHn7iHrVKxiK2cCB8", label: "2025年11月30日 好羨慕喔 請問你們跨年會在裡面看煙火嗎" },
      { type: "link", content: "https://photos.app.goo.gl/UQD3UAkHoLbKLsQG9", label: "2025年11月30日 謝謝 沒錯 謝謝你" },
      { type: "link", content: "https://photos.app.goo.gl/4CRqZQoF2WyF3cTj9", label: "2025年11月30日 哇 真的好可惜" },
      { type: "link", content: "https://photos.app.goo.gl/XiTqKMEWhvB3FA8z8", label: "2025年11月30日 富邦沒有發展這個101景色咖啡真的好可惜 可以像日本東京鐵塔夜景的那種咖啡廳一樣" },
      { type: "link", content: "https://photos.app.goo.gl/VRfbirCvjonZ3tFCA", label: "2025年11月30日 小小愛因斯坦" },
      { type: "link", content: "https://photos.app.goo.gl/z82uRqLu52tKYyqZA", label: "2025年11月30日 這個入鏡太厲害了" },
      { type: "link", content: "https://photos.app.goo.gl/LQuBA4UGB8B4Tmoc7", label: "2025年11月30日 我小時候都沒這種快樂哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/z7BdbTt4PHrwrUnJ6", label: "2025年11月30日 還有我ㄚ" },
      { type: "link", content: "https://photos.app.goo.gl/1vNtPkzxgpRHKuzL8", label: "2024年11月30日 一大早就開始 永無止境 導管一台接著一台 學長的體力超好" },
      { type: "link", content: "https://photos.app.goo.gl/tMpCkqrmtNArkZJv7", label: "2024年11月30日 腦很好用 但不是每個人都有" },
      { type: "link", content: "https://photos.app.goo.gl/tTwTYqPJnvLyniyTA", label: "2024年11月30日 台北這幾天天氣根本就是日本等級" },
      { type: "link", content: "https://photos.app.goo.gl/xiMKxNE9yVuNHgvh8", label: "2024年11月30日 太厲害了 喜歡健身的朋友可以追蹤起來" },
      { type: "link", content: "https://photos.app.goo.gl/CMk7bK88J3TbGmCr8", label: "2024年11月30日 日光浴貓貓" },
      { type: "link", content: "https://photos.app.goo.gl/MLTBrzAxLhK2M3LF6", label: "2024年11月30日 真的差蠻多" },
      { type: "link", content: "https://photos.app.goo.gl/94KKNvRJUyaXxNP77", label: "2022年11月30日 感謝贊助值班上班超過30小時的我 一杯溫暖的星巴克 下次拍照揪起來" },
      { type: "link", content: "https://photos.app.goo.gl/VweS3ygvv6dF4F5UA", label: "2022年11月30日 請問左右哪邊好看? 純屬民調" },
      { type: "link", content: "https://photos.app.goo.gl/WVfrWyuuf7EQsMYy8", label: "2022年11月30日 很多人說喜歡左邊地景跟右邊天空哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/Tue2PhoPp3aPeCqk8", label: "2018年11月30日 今天看到一篇發文很有感 關於攝影修圖這件事 應該可以說是代表性反思文章 如果你有興趣可以看下頁文章跟我的想法 歡迎討論 來源dcard" },
      { type: "link", content: "https://photos.app.goo.gl/vYeEQb1pgaPkkhxd6", label: "2018年11月30日 \
        討論 因為修圖所以會失去對光影構圖等敏感性嗎 其實 真正會後製的人 更重視現場光影 \
        針對風景 第一點我已經表達過很多次了 後製不只彌補相機的不足 更能傳達內心的思維與作品的氛圍 \
        很多所謂攝影老師或前輩 會認為修圖有兩個問題 第一是畫面失去真實 第二是失去對光影等的敏感度 \
        第二點 我自己研究後製好幾年了 對我來說 現場的光影 想法與構圖真的太重要 我會細膩的觀察光影 無論是交織的影子或不同時間的陽光 在後製都需要不同功夫 \
        再來構圖要考慮裁切或配合光影方向等問題 最後是當下的景色才能給我後製方向的靈感 所以 好的後製 更需要細膩的觀察 你的想法呢" },
      { type: "link", content: "https://photos.app.goo.gl/H2Y9VTJzBjCzxMmT7", label: "2018年11月30日 看什麼主題 風景基本上一定要修圖 美麗的誤會 LR+PS 這被問了上萬次哈哈 只開HDR修會很粗糙 對啊 就像出外除了大景 我也會拍沒有要修的當紀念" },
      { type: "link", content: "https://photos.app.goo.gl/hgewXjxk4QuWvbHy7", label: "2018年11月30日 重點 謝謝學長 找對光線 才有辦法知道修圖方向 不然只是硬加光線 沒錯哈哈 修不修圖是個人取向 但對我來說修圖的理由 是為了完美內心的構思" },
      { type: "link", content: "https://photos.app.goo.gl/pYrWdb76JYd8HeKY6", label: "2018年11月30日 沒錯 謝謝哈哈 總是這麼中肯 是啊哈哈 修修臉 前置後製一樣重要 在風景這個領域 也是沒錯喔 修圖用來補足缺陷也是功能之一" },
      { type: "link", content: "https://photos.app.goo.gl/d24zkSJdSmABhqEF8", label: "2018年11月30日 哈哈 真的修圖是一種興趣喔 這就是對光線的觀察 認同 但有些時候我們只想表達美 而不在意真實 但風景而言 我希望能真實與美感兼顧 修圖要有很大熱忱才會願意砸時間 不要有太大壓力在修圖 沒錯但我只能說這侷限在風景這主題哈哈 像新聞紀實就很不建議後製" },
      { type: "link", content: "https://photos.app.goo.gl/nMgo5eDJwiDatqTy8", label: "2018年11月30日 說的兩個原因都是中肯 有點抽象 大概就是按下快門的瞬間作品成果就已經想好了 哈哈 但這個最真實的樣貌 真實是最真實的嗎 我覺得各一半 沒錯就是這樣" },
      { type: "link", content: "https://photos.app.goo.gl/9TKx5CtLsfKr4NYK6", label: "2018年11月30日 能直接拍就好看的景真的不多哈哈 詮釋到位 沒錯哦 哈哈 但前置沒拍好甚至沒拍到的部分 後製是無法彌補 好的修圖手段 更能精準表達作品 對啊 不需要在意是否直出" },
      { type: "link", content: "https://photos.app.goo.gl/TLd9TGN6cvgNYU2BA", label: "2018年11月30日 對啊 多觀察可以找到很多題材 這邏輯很對 就看是什麼主題了哈哈 100分的觀念 對 後製可以強化光影的變化 這很重要" },
      { type: "link", content: "https://photos.app.goo.gl/bkY1c2CH1fMyYRiQ7", label: "2018年11月30日 PM2.5啊 有時我會覺得想這些很無聊 但內心堅持一件事情的時候 就應該再三確認自己的方向是明確的 只能說風景這個領域重視修圖哈 哈哈這比喻我想過 很有趣 合理性很重要 對 多看神作就會了解" },
      { type: "link", content: "https://photos.app.goo.gl/1AZiBWmR9ZZ1crty9", label: "2018年11月30日 加油小企業家" },
      { type: "link", content: "https://photos.app.goo.gl/8xXKsfiihz4jNnTT7", label: "2017年11月30日 第一天值班" },
      { type: "link", content: "https://photos.app.goo.gl/yAsywEugFXvjtrNN7", label: "2016年11月30日 高雄一個月尾聲到了 在這裡發生了很多事情 知足常在 高雄榮總 尾聲" }
    ]
  },

  "12": {
    "1": [
      { type: "link", content: "https://photos.app.goo.gl/PAMdGW5opZEnbq7e8", label: "2025年12月1日 \
        講的很像醫生的錯一樣 這就是無知的原罪 因為無知 所以把過錯都怪給要幫助你的人 罹患癌症的人 聽到可以開刀都應該當作中樂透一樣 因為這代表有機會根治 \
        一但癌症是開刀也沒用或是不能開刀的 你才要節哀 無知不是錯 但用自己的無知來醜化別人對你的專業跟善舉 這就是一種錯" },
      { type: "link", content: "https://photos.app.goo.gl/RNNPj11ijULNj86Q8", label: "2025年12月1日 管你什麼黨 沒當兵跟不敢當兵就閉嘴好嗎 沒勇氣拿槍桿面對死亡的人都沒資格談愛國 少那邊只剩嘴巴跟鍵盤" },
      { type: "link", content: "https://photos.app.goo.gl/gB4WbgT21XzpB2pm8", label: "2025年12月1日 沒看到價格之前無法抗拒 看到價格之後抗拒到底" },
      { type: "link", content: "https://photos.app.goo.gl/ZbmDT2kvGBXWfxNx5", label: "2025年12月1日 請問這如果開車到底應該導航那個地點呢 QQ" },
      { type: "link", content: "https://photos.app.goo.gl/cjkubbgnUtprBxzv9", label: "2025年12月1日 這有可能詐騙帳號" },
      { type: "link", content: "https://photos.app.goo.gl/EJi5SCbs1ytc9WFQ6", label: "2025年12月1日 太美了吧 好羨慕" },
      { type: "link", content: "https://photos.app.goo.gl/Vc8nzVoLqUY4eEUm9", label: "2025年12月1日 哥太厲害了" },
      { type: "link", content: "https://photos.app.goo.gl/gn9zKEs5xHVQaaoa8", label: "2025年12月1日 開心開心開心 快樂快樂快樂" },
      { type: "link", content: "https://photos.app.goo.gl/kQ6a8KXsqfrXBryu5", label: "2025年12月1日 我們該出門了" },
      { type: "link", content: "https://photos.app.goo.gl/5Ch9BNGTVpwwqCxx6", label: "2024年12月1日 要開始每年的拜拜打卡行程了" },
      { type: "link", content: "https://photos.app.goo.gl/iupgLbxxNQyKpVSb9", label: "2024年12月1日 今天跟一起去買快樂 結果買到晚上連買生活用品的錢都不夠" },
      { type: "link", content: "https://photos.app.goo.gl/u8mYwAcjDC9gycH97", label: "2024年12月1日 雖然用大大的疲累只換來少少的薪水 所以也不奢望留什麼錢給下一代 不如製造多點生活小確幸XDDD 到現在還是搞不知道這松鼠跟兔子的名字" },
      { type: "link", content: "https://photos.app.goo.gl/wTtA11Kx9a49K3vBA", label: "2024年12月1日 \
        玩台服傳說的都是盤子 一樣的造型越南服至少都七折起跳 大多數都是台灣3-5折價格 以次元突破納克為例 \
        越南抽到約花3200台幣 去找越南實況抽獎影片就知平均價格 但台服動輒8000-10000多台幣" },
      { type: "link", content: "https://photos.app.goo.gl/XiP5x9V2dD1hrE4D8", label: "2024年12月1日 不過日服玩不得 一場至少等6-10分鐘 太浪費時間 正確是750台幣 日服3500點卷 我買過" },
      { type: "link", content: "https://photos.app.goo.gl/CmcogkVpJULPiSu8A", label: "2024年12月1日 是沒錯 但我想表達的是 如果跟我一樣是造型控但又窮 建議改玩越服 除了語言不通以外沒啥大問題" },
      { type: "link", content: "https://photos.app.goo.gl/W9GoPvj1cVAYhFYS8", label: "2024年12月1日 \
        用iphone App store國家換成越南 資料亂填就好 搜尋Arena of Valor就有 下載他 整個下載且登入遊戲完成後 回到app store把國家改回台灣 \
        然後在扣款卡片的地方輸入自己的信用卡或金融卡 成功後即可 你進入越服儲值他就會自動換成台幣 跟匯率無關 他就是固定價格" },
      { type: "link", content: "https://photos.app.goo.gl/5iECdhq8W8qV4W6QA", label: "2024年12月1日 可以算一下這些台服要多少錢 而且有些沒有呈現在上面 我只能說這些花台服快一半的錢而已" },
      { type: "link", content: "https://photos.app.goo.gl/f5sCnCBH3dQepP4V8", label: "2024年12月1日 台北這幾天天氣根本就是日本等級 嗚嗚 不要害我現在馬上想去日本" },
      { type: "link", content: "https://photos.app.goo.gl/iajSNui1mkVTXKpk6", label: "2024年12月1日 今天的風好涼" },
      { type: "link", content: "https://photos.app.goo.gl/TSrdinnRv3LJKG6L9", label: "2024年12月1日 帥爛" },
      { type: "link", content: "https://photos.app.goo.gl/BGg9WBJCVPeYZmV49", label: "2024年12月1日 想拍" },
      { type: "link", content: "https://photos.app.goo.gl/iqwjjjwQhwhYJQ7k8", label: "2018年12月1日 媽的宅砲 整天看動漫" },
      { type: "link", content: "https://photos.app.goo.gl/kmHxCiUWaMSKFFyx8", label: "2017年12月1日 \
        Golden Sea Waves Welcome share and follow the beatiful scenery of Taiwan \
        一天po兩次 因為美麗的風景值得大家一看再看 畢生所願 走訪世界各處 讓每個展昏火燒銀河雲海城市建築夜景極光通通被紀錄 \
        謝謝各位支持 12月風景後製家教已經滿額 其實是我沒很多有空時間" },
      { type: "link", content: "https://photos.app.goo.gl/6RHeHRkcP1Ca25EX6", label: "2017年12月1日 鏡頭 機身損壞修理 找我吧 比外面便宜喔" }
    ],
    "2": [
      { type: "link", content: "https://photos.app.goo.gl/basCdwW2nea7GsXn6", label: "2025年12月2日 \
        參加完一日活動 找了當時在海軍當兵時的咖啡廳坐著 回想一下五年前的心情 \
        可怕的是一直到現在 我坐在這個咖啡廳依然在思考當初自己為何會起心動念選擇來花蓮服務 一來就是將近十年的時間 人生有多少十年 當初怎麼不選高雄就好呢 \
        花蓮其實也不錯 就像放大版但人煙更稀少的嘉義或埔里 早上是氣勢磅礴的中央山脈 下午是山上下來的低雲夾帶涼風跟微雨 閒情逸致的感覺充滿一整天 \
        沒有擠得水洩不通的交通 空氣也乾淨很多 但實在不知道在這裡還能做些什麼 有點徬徨呢" },
      { type: "link", content: "https://photos.app.goo.gl/bVgEkiK5umtD2bjd6", label: "2025年12月2日 到花蓮的第一件事就是租機車 騎到醫院後發現偌大的地方幾乎沒什麼人 路上也沒人 不像台北一樣到處塞 到處都是騎機車吵雜聲 醫院停車場也是一堆位置 少了那種到哪都要等 都要搶的感覺" },
      { type: "link", content: "https://photos.app.goo.gl/s7m13riUtdDdhjeH6", label: "2025年12月2日 幾個月前在好市多買到這個 一吃驚為天人 超級好吃 但上週去好市多已經找不到了 有大大知道這在哪裡能買得到嗎" },
      { type: "link", content: "https://photos.app.goo.gl/tV7XmveBDqpG7hqB6", label: "2025年12月2日 真的是很會買這種可愛的小廢物 別在白袍超可愛 又變出一堆可愛的東西" },
      { type: "link", content: "https://photos.app.goo.gl/Gj5Fr1bMdwiQESxB8", label: "2025年12月2日 失控的手" },
      { type: "link", content: "https://photos.app.goo.gl/Zd5ZpAh9rjwc9Gh78", label: "2025年12月2日 這裏要楓葉的時候去 我之前其他季節去完全空景" },
      { type: "link", content: "https://photos.app.goo.gl/QxBhE7dmJQYNMNHi7", label: "2025年12月2日 今年的富士山楓葉好美 我收藏的富士山攝影點至少20個以上 什麼時候可以去直接住一個月自由自在的拍完全部" },
      { type: "link", content: "https://photos.app.goo.gl/gBcYv16KeWx1FD1F6", label: "2025年12月2日 練超好很適合這件褲子欸" },
      { type: "link", content: "https://photos.app.goo.gl/MiGqA4ABWqXjpi8n9", label: "2024年12月2日 我也願意" },
      { type: "link", content: "https://photos.app.goo.gl/JTsKUey4sP94rq626", label: "2024年12月2日 原來這是正確名字XD" },
      { type: "link", content: "https://photos.app.goo.gl/57NqU4TocMKdN1SZA", label: "2024年12月2日 璀璨到永恆如果一組四五個四冠王 甚至對面職業多排 職業都不一定能赢" },
      { type: "link", content: "https://photos.app.goo.gl/334LX8248UDf3WB99", label: "2024年12月2日 哇靠 我服 真的猛" },
      { type: "link", content: "https://photos.app.goo.gl/bxbaxduaLGiJ3H3i6", label: "2024年12月2日 恭喜 真的太強了" },
      { type: "link", content: "https://photos.app.goo.gl/bFidkYat5M5yt2T58", label: "2024年12月2日 好啊涵涵" },
      { type: "link", content: "https://photos.app.goo.gl/7kicqFUnrg2UHu4g8", label: "2022年12月2日 \
        這張圖是黑道幹部跟被關小弟的對話文字檔 原來開槍殺人可以領一輩子退休俸 比我當軍人還簡單欸 \
        我不理解為什麼現在還有人支持民進黨 有興趣進去看看這影片 連黑道跟開槍小弟的對話都清清楚楚 背後完全就是民進黨在挺這些黑道大老 \
        這些都是有證據 不是亂抹黑的 如果連人民的安全都無法保障 談什麼抗中保台 騙鬼 \
        到底還有誰可以忍受這樣的政黨 如果有天是自己遇到黑道誰保護你 這是非常可怕的事情 這是非常齷齪骯髒的事實" },
      { type: "link", content: "https://photos.app.goo.gl/xQAeTjZsuSEoisGv7", label: "2022年12月2日 貓戴這個頭套一秒暴怒 但狗可以戴一個晚上怡然自得哈哈哈 差好多" },
      { type: "link", content: "https://photos.app.goo.gl/DtAaAXYU9kMzbgRo6", label: "2018年12月2日 假裝自己是獅子王的好地方" },
      { type: "link", content: "https://photos.app.goo.gl/owqxfST5y9fTNfig6", label: "2018年12月2日 人生短短幾個秋不海不罷休唉" },
      { type: "link", content: "https://photos.app.goo.gl/TSics8KeKmCK56DM8", label: "2017年12月2日 去拍個街 晶華酒店" },
      { type: "link", content: "https://photos.app.goo.gl/ixrbtLzw8D7YxSs48", label: "2017年12月2日 神社之王八蛋 自拍系列" },
      { type: "link", content: "https://photos.app.goo.gl/joAuSdEotnMxgNuq5", label: "2017年12月2日 原圖 修完 銀河版本 12月後製教學預訂已滿 歡迎預訂一月後製家教&詢問詳情" }
    ],
    "3": [
      { type: "link", content: "https://photos.app.goo.gl/KKArPPh45yp4VmaX8", label: "2025年12月3日 \
        以醫師這種資質跟努力 去二類或牙醫 年收都是500-600萬以上 \
        再退一步說 醫師為醫院跟病人製造的產值每年都破1000萬甚至更高 然後才領300多萬 可悲不可悲" },
      { type: "link", content: "https://photos.app.goo.gl/4maT4bWfvamX8JjM6", label: "2025年12月3日 \
        我一直覺得guideline應該是最嚴謹的 可是從intern到現在就真的很不喜歡MI AMI這個詞 有夠不精確 \
        大部分MI都是STEMI+NSTEMI AMI也是 但又偶爾AMI特指STEMI 然後在這個ACS建議裡面明明都是指STEMI+NSTEMI 但卻分別用MI跟AMI這兩個不同的詞" },
      { type: "link", content: "https://photos.app.goo.gl/Yv4vZSRvepYaMfVW9", label: "2025年12月3日 \
        從當intern開始就對某些醫學名詞感到困惑 其中之一就是ACS MI AMI 直到現在都搞得我好亂啊 \
        在2025 AHA/ACC ACS指引9.2章節的指引裡 就同時出現上述三個詞 這三個詞還必須對照出處才知道指什麼狀況 但這些狀況又跟初始定義不一樣 \
        我盡力理解後歸納的結論 ACS定義上包含UA NSTEMI STEMI 但在某些狀況特指NSTEMI STEMI而已 MI包含NSTEMI STEMI \
        AMI包含NSTEMI STEMI 但某些狀況特指STEMI 有沒有脆上的大神能解釋這些名詞到底是怎麼回事 是能這樣隨心所欲的交互使用的嗎" },
      { type: "link", content: "https://photos.app.goo.gl/9zFmSDXarWQ2W7SU7", label: "2025年12月3日 感謝前輩 只是我很好奇 都沒有心血管大師在國際會議上提出這些用詞很容易混淆嗎 了解 看來我不應該在意這個了哈哈 謝謝您" },
      { type: "link", content: "https://photos.app.goo.gl/r8Em6Yosnz3r3S7G9", label: "2025年12月3日 這個沒問題我知道~ Ok 這部分我也知道 感謝您" },
      { type: "link", content: "https://photos.app.goo.gl/QircvHFxhq9BsXPAA", label: "2025年12月3日 \
        非常感謝您詳盡的補充 不過似乎我沒有得到核心的答案 我的理解是CAD應該是包含CCS跟ACS 這樣比較直觀 \
        回到我的問題 我的疑問是ACS有時在文獻裡面定義沒有包含UA 因為他不是心肌真的壞死 但實際上應該要包含 \
        MI AMI大多數幾乎是相同意思 但文獻上又喜歡同時出現這兩個名詞 這些都沒有一個明確的定義 讓我非常困惑" },
      { type: "link", content: "https://photos.app.goo.gl/tRLoDXMRQMWXNqGv8", label: "2024年12月3日 把特別有內科學習價值的網路資源做個整理 歡迎補充及更正 試著整理出最齊全的內科入科的資源 希望能幫助到大家 若長期沒有更新就不放上 分為六大類" },
      { type: "link", content: "https://photos.app.goo.gl/YqMHSHAfyeGmMAte8", label: "2024年12月3日 發現自己LDL爆表到100 難過了一週 很害怕自己也變成CAD風險 不過也有動力嚴厲要求自己 要好好運動飲食改善 然後也準備接受一點藥物治療 該死的斑塊一點都不能長進我血管" },
      { type: "link", content: "https://photos.app.goo.gl/LePHqcpDRNzKjiMi8", label: "2024年12月3日 我也是" },
      { type: "link", content: "https://photos.app.goo.gl/HZh3Fa4HAPcQU9896", label: "2024年12月3日 好想要這隻貓貓棉被喔" },
      { type: "link", content: "https://photos.app.goo.gl/qWUNXvnKXfNAk5C36", label: "2023年12月3日 好想出門拍照 還接獲噩耗下下禮拜又要報告 真的很煩==" },
      { type: "link", content: "https://photos.app.goo.gl/UH5ksZhZ6RbdDW1c8", label: "2023年12月3日 強迫自己訓練一下街拍 拍一些很台灣的東西" },
      { type: "link", content: "https://photos.app.goo.gl/wuqGnX8RoSqzBigT7", label: "2023年12月3日 \
        終於碰到少數不用做報告不用值班的假日 回覆一下修圖手感 順便嘗試簽名檔製作 \
        2023即將過去 這一年唯一真正的快樂是跟一起出國的這三次 我感覺到自己活著 真正擁有短暫的自我 尤其在勝尾寺 真是如夢一般不真實" },
      { type: "link", content: "https://photos.app.goo.gl/U2jRwAfXfYELt1ci7", label: "2023年12月3日 \
        大阪 勝尾寺 勝尾寺是我跟今天出國碰到最美的地方 沒有人山人海吵雜的喧鬧 時刻傳來的誦佛聲顯得莊嚴而肅 \
        小達摩們四處散佈 這裡就是他們的國度 走到一半忽然飄起小小的雪花 空氣靜止在那一刻 至今仍忘不了的美好 \
        一輩子應該去日本幾次呢? 我覺得除非定居在日本 否則永遠不夠" },
      { type: "link", content: "https://photos.app.goo.gl/h4CM6mwwSekhcWqV6", label: "2023年12月3日 超喜歡這次重修的達摩 終於抓到我要的光影跟立體感 色調也正常很多 終於抓到如何處理達摩們色調跟氛圍的訣竅了" },
      { type: "link", content: "https://photos.app.goo.gl/heoAD4meLq4ejFNL6", label: "2023年12月3日 真的拍到一半日本小孩童跑過去 跑的太好了直接入鏡" },
      { type: "link", content: "https://photos.app.goo.gl/Vi7W3Ao1M4HwnesS8", label: "2021年12月3日 \
        誇張到我覺得必須出來講 我昨天從2200左右就一直在護理站坐著等新病人順便補病歷 23-24左右急診交班給護理師 會有兩床新病人 但規定12-3不能收 所以三點才會上來 \
        我昨天基本上已經累到一整天幾乎沒吃東西 趕到汀州也沒睡覺都在處理還沒接完的化療病人 我弄到兩點 跟一個胖護理師說 等下病人上來如果stable的 腸胃炎那種 可否六點摳我 結果他給我擺臭臉瞪我 我就說好那病人來你直接摳 \
        然後我兩點睡 03:38就摳我病人到了 我看一下一個發燒找原因 一個安養中心轉下來UTI vital sign穩定也不端 所以我六點才去開order \
        這兩位病人自備藥一大堆 我一個一個對 也都有報給王勝輝 檢查藥物我通通都開好07:30才走 病人也有去看去taking hx 病歷也打完整 \
        試問什麼叫做order亂開? 什麼叫用不完? 告狀遲到到底是三小 昨天根本我根本沒告狀 也沒遲到 這句話無中生有 可以當記者了吧 \
        03:38看完data沒有馬上開order的確可議 但說的好像我完全不負責任 我也是人也需要休息 1200-0300不收病人所以延後到0300才把病人收上來 這樣有比較體諒我們住院醫師嗎? 別家醫院有這樣嗎? \
        我已經非常盡量負責的看病人 八九不離十是那個胖護理師去講的 我非常不能理解他一個上班八小時加班兩小時的人 憑什麼說我昨天早上上班到現在還坐在護理站的住院醫師 草草對待病人! 歡迎部長找我約談" },
      { type: "link", content: "https://photos.app.goo.gl/aDNN4k4EkpfJU5FD8", label: "2021年12月3日 這個世界真的很大很漂亮 我常常在想 對工作的奉獻真的要有限度 離開這個世界之前一定要把世界的美都看完" },
      { type: "link", content: "https://photos.app.goo.gl/x2Jw3o17aEWPe8jP7", label: "2021年12月3日 可愛的老主任 拿著大陸醫院印製的相片 這還是我第一次看到 感覺像是醫療劇才會出現的酷東西" },
      { type: "link", content: "https://photos.app.goo.gl/W1Y4MQDYn35u9PN98", label: "2018年12月3日 請問腳受傷去看病有說錯嗎? 偉哉長官" },
      { type: "link", content: "https://photos.app.goo.gl/bqb53YfMLTpzpJUv5", label: "2018年12月3日 在一起195小時 現在的生活困難但很單純 除了當兵就是你了" }
    ],
    "4": [
      { type: "link", content: "https://photos.app.goo.gl/KLcRSozHzzC2vrL87", label: "2025年12月4日 部分網友的留言讓我發現自己的盲點 這禮拜我會整理好資料 查好referrence再分享" },
      { type: "link", content: "https://photos.app.goo.gl/2V5jiSEesWFUBLbX9", label: "2025年12月4日 謝謝 這樣說也很清楚 感謝 我很認同你的說法" },
      { type: "link", content: "https://photos.app.goo.gl/uVsfEcvfFRvShrqw8", label: "2024年12月4日 怎麼刪文了? 不小心露出馬腳了? 還真的是想要黨媒一手抓 學習共產黨的民進黨啊呵呵呵 真是民主 遇到反對的聲音 一律戒嚴 剷除就好了 噁心" },
      { type: "link", content: "https://photos.app.goo.gl/G3vrYmw27wLB3Ms77", label: "2024年12月4日 很厲害 想當初我都在音樂課算數學" },
      { type: "link", content: "https://photos.app.goo.gl/M8pKh67VX3W2vEzr5", label: "2024年12月4日 我視力有問題 除了你之外 不知為啥看其他女生都變成打馬賽克根本看不到 我有去看眼科學長門診但沒藥醫 我應該就是少數那些不看的 是真的" },
      { type: "link", content: "https://photos.app.goo.gl/axm8jhiTouyC1dEo9", label: "2024年12月4日 哈哈哈哈哈 誒不是" },
      { type: "link", content: "https://photos.app.goo.gl/v2tL5fkCrGj9kkHM7", label: "2023年12月4日 感謝帶貨 便宜又帥" },
      { type: "link", content: "https://photos.app.goo.gl/VbL7ajMAcyaMWP8v6", label: "2022年12月4日 我真的不知道為什麼連續三個月 只要有報告就一定會有我的份 趕緊回來加班看資料 能讓我好好的先讀內專嗎 我會考不過捏QQ" },
      { type: "link", content: "https://photos.app.goo.gl/AFFuAxwND2a1JGCX7", label: "2022年12月4日 鄉下俗第一次拍W hotal 感謝相機支援" },
      { type: "link", content: "https://photos.app.goo.gl/sSnusG1muns4N4CB7", label: "2022年12月4日 賓客兼婚攝 全新挑戰" },
      { type: "link", content: "https://photos.app.goo.gl/f5HoykKB7sf9vZ9WA", label: "2022年12月4日 今天開工日 老了背雙機肩膀好痛" },
      { type: "link", content: "https://photos.app.goo.gl/CJ37Edc9eFSxF53m6", label: "2021年12月4日 佛系拍夜景" },
      { type: "link", content: "https://photos.app.goo.gl/t2aJ5utTRGBXvkAY6", label: "2020年12月4日 恭喜啦 沒想到因我而造就一段良綠" },
      { type: "link", content: "https://photos.app.goo.gl/AUvDz5j5JyiedyVx5", label: "2019年12月4日 友城海產碳烤 下部隊的庶民聚餐" },
      { type: "link", content: "https://photos.app.goo.gl/Kb3WbtBwaK3BXrjM8", label: "2018年12月4日 \
        很無奈的一個禮拜 病痛讓我幾乎下不了床走不了路 偏偏這個工作沒辦法請假養病 \
        三天前開始只要醒著就是折磨 接著明天要開船了還是11天 但非得努力撐下去 希望一切趕快好轉 我的精神支柱 zepeto \
        腰酸背痛+胃脹氣+感冒+腦袋秀逗" },
      { type: "link", content: "https://photos.app.goo.gl/YMvijDHT3Ptd9zEX9", label: "2017年12月4日 \
        總是這樣 無法停止的惡夢 從小牙齒就比一般人容易蛀牙 做了幾次根管 每次都是多次的療程 牙套牙根也不便宜 \
        而這兩個月 先是左邊蛀牙脆弱 在日本咬碎臼齒的一塊 預計也是根管治療 再來最近右邊曾經做過根管的牙根 \
        又因為當時牙醫沒抽乾淨 現在細菌感染復發 腫一個芽苞 預計打掉上半整個牙冠 用顯微鏡清理 18000台幣 再做一次牙套 \
        沒完沒了 抱怨也是枉然 就當作是紀錄生命的缺陷吧 實習一年半 在醫院看過各種案例各種生離死別 我曾想人被生下來 其實就是種罪 \
        承受各種痛苦各種疾病跟意外 然後終究面對死亡 不過這樣想是過於悲觀了 希望牙齒別再有狀況 我會轉念並用更堅強的心態面對" },
      { type: "link", content: "https://photos.app.goo.gl/Yoo92MnkiRCiwAmh7", label: "2017年12月4日 唉快樂人生的兩個人 我已經過了想玩電動的年紀 不過也忙到沒時間玩 沒事修圖日文重訓唸書" },
      { type: "link", content: "https://photos.app.goo.gl/z7ywN3sJsUyd6Zpb9", label: "2017年12月4日 寢室怎麼可能多一個不知道誰的杯子 裡面還有水欸 黑人問號加驚嘆號== 室友情" },
      { type: "link", content: "https://photos.app.goo.gl/HRfniSEcNrLyRm7G6", label: "2017年12月4日 \
        我都去3樓病歷室打病歴等摳欸 下次會準時到gi報到 拍謝拍謝 不太知道PPN CPN的order名字也大概一樣嗎 拍謝問很多 PD Diet我也不太懂 也是在his裡面看嗎 謝謝 恩恩懂 謝謝你 我真的很多不知道 以前都是得過且過" }
    ],
    "5": [
      { type: "link", content: "https://photos.app.goo.gl/pFsjoZCzqmaxzMaC7", label: "2025年12月5日 \
        不行 但是說實在的 這些都是從業務角度出發的想法跟臆測 更多的是我看到許多醫師的言行跟舉止是為了自我保護跟避免誤會 \
        畢竟今天哪位醫師得到什麼好處甚至偏袒 不只傷害到病人跟自身信譽 更多的是當大家矛頭指向醫師時 哪個業務要出來承擔負責XD \
        所以看到內文還是覺得有些事情要多看不同面向" },
      { type: "link", content: "https://photos.app.goo.gl/PwmXoZw23rty9WkY6", label: "2025年12月5日 真的是傻子才抽台服造型 笨死了 越南這造型只要1429點卷保底 換台幣大概1000上下吧" },
      { type: "link", content: "https://photos.app.goo.gl/XDHZbo8sXQKYxxZQ9", label: "2025年12月5日 因為開始有系統的幫錄上課影片 發現整理yt影片蠻有趣的 而且用ai生成封面也沒版權問題 畫面也更一致好看" },
      { type: "link", content: "https://photos.app.goo.gl/EVYJFpafa9FvtJXt8", label: "2025年12月5日 我的聽齡真是年輕 讚讚" },
      { type: "link", content: "https://photos.app.goo.gl/M2SNwC9YYqiUAsYHA", label: "2025年12月5日 聖誕樹也太美" },
      { type: "link", content: "https://photos.app.goo.gl/JeTfv1nLv3WfGEvC6", label: "2025年12月5日 最愛這種有彈性的" },
      { type: "link", content: "https://photos.app.goo.gl/maycMwz3SzZUVxAMA", label: "2025年12月5日 \
        那些年容易搞混的名詞 從醫學生時期就沒有搞懂CAD ACS AMI MI等名詞 直到成為了住院醫生才發現不能再馬齒徒長 \
        這次查閱了許多文獻 把這些看似平常但容易混淆的心臟科名詞給整理清楚 結論可以直接看第一張 如果有寫錯的部分也可以直接指正唷" },
      { type: "link", content: "https://photos.app.goo.gl/QsP9DiZHxTWPVcnd8", label: "2025年12月5日 好便宜 好啊" },
      { type: "link", content: "https://photos.app.goo.gl/fQPv5Rimve3ibtfX7", label: "2024年12月5日 比醫師的補貼多太多了 重視護理師是對的 但政府也該更善待第一線的醫師吧" },
      { type: "link", content: "https://photos.app.goo.gl/ETPxYeYPYyvsA3d39", label: "2024年12月5日 那對面另外三隻就補阿來 綺羅 馬洛" },
      { type: "link", content: "https://photos.app.goo.gl/edGfvFy8bJuAUP536", label: "2024年12月5日 跟你教的一樣欸" },
      { type: "link", content: "https://photos.app.goo.gl/ZsCwDb1few9ta5AKA", label: "2024年12月5日 說不定寶寶是看到他背後的人" },
      { type: "link", content: "https://photos.app.goo.gl/SSAGAopWPxqDPBWt8", label: "2022年12月5日 \
        第一代的Mac M1是我第一台蘋果電腦 但買來至今換過多牌轉接線 一直都有接觸不良的問題 反觀window系列的筆電轉接都很順暢 \
        有人也遇到一樣問題嗎? 蘋果電腦有轉接線接觸不良的問題嗎?" },
      { type: "link", content: "https://photos.app.goo.gl/gjqzFctFHVe42jTU8", label: "2021年12月5日 唉 完全不知道這個CASE有什麼值得討論 浪費時間硬要想內容有夠痛苦 花了五六個小時以上 能用來讀書不知該有多好" },
      { type: "link", content: "https://photos.app.goo.gl/CedHnRuH65kSgctr6", label: "2020年12月5日 好久沒在刀房待到天亮 不過經歷急診的日夜輪班 可以適應的啦 外科真的好難 真的覺得幸運我選了小外科心臟內科 而不用選真的外科" },
      { type: "link", content: "https://photos.app.goo.gl/KSRFNZVjCRpUWsBu8", label: "2020年12月5日 狼人殺見證心機 誰在給你試跳啊" },
      { type: "link", content: "https://photos.app.goo.gl/CmAA3Z3LQZGf3tvCA", label: "2020年12月5日 -REGENT TAIPEI晶華酒店 恭喜" },
      { type: "link", content: "https://photos.app.goo.gl/tMPu16qpdzENPcZm7", label: "2019年12月5日 \
        以前就覺得多數慈善機構用錢不單純 現在看到更不會捐給他們 錢都難賺了 大家買不起房子 憑什麼給他們買上億的內湖高級辦公室 \
        說什麼為了上班交通方便 多數人還不是得住離上班一段距離的郊區 事後再來說一堆買高級辦公室的理由 有夠虛偽" },
      { type: "link", content: "https://photos.app.goo.gl/1YtT7GiHdxRbnGM38", label: "2017年12月5日 正中午的城市合成日出火燒 搞到自己快瘋掉 這樣後製會更強嗎 還是腦力會先耗弱 新加坡佛牙寺龍華院 合成這樣會不會很怪 方便的話請告訴我意見跟看法" }
    ],
    "6": [
      { type: "link", content: "https://photos.app.goo.gl/xwCg7urGH5UcizUy8", label: "2025年12月6日 他是聰明的壁虎" },
      { type: "link", content: "https://photos.app.goo.gl/sdvBmHATMfifqasf6", label: "2025年12月6日 今天又練更好了" },
      { type: "link", content: "https://photos.app.goo.gl/hJjpEEyNq1TB82iZ8", label: "2025年12月6日 保持帥哥" },
      { type: "link", content: "https://photos.app.goo.gl/bRynTCshKmTki6969", label: "2025年12月6日 台北信義 動物方城市2" },
      { type: "link", content: "https://photos.app.goo.gl/imhQgATVmNAz2Hf1A", label: "2025年12月6日 對啊 不過偶爾AI還是會誤會文獻的意思XD" },
      { type: "link", content: "https://photos.app.goo.gl/DcGuTFAwMkyFCQrh6", label: "2025年12月6日 真可愛" },
      { type: "link", content: "https://photos.app.goo.gl/QGVGnySx3o5j42TRA", label: "2025年12月6日 不行" },
      { type: "link", content: "https://photos.app.goo.gl/evtQmdFWpByxXnp87", label: "2024年12月6日 \
        這絕對不是單純只有良性腫瘤的問題 你可以用聳動的內文來誤導大眾 但醫護人員都不是白癡 那你這種發文就是邪惡" },
      { type: "link", content: "https://photos.app.goo.gl/CtJNnMYLYhuqGcwN8", label: "2024年12月6日 弟弟說這是我存錢很久才買的雞排 不要再看了XD" },
      { type: "link", content: "https://photos.app.goo.gl/nxi93R6ExgrP1Ke76", label: "2023年12月6日 今年的目標 希望跨年天氣一切安好" },
      { type: "link", content: "https://photos.app.goo.gl/r4r8jBGeSWTHZQKP6", label: "2023年12月6日 昨晚1800簽章之後 到今早還可以簽55筆" },
      { type: "link", content: "https://photos.app.goo.gl/ULDfBiBHmic4Nd1z5", label: "2022年12月6日 \
        九五峰日落 攝影分享No.18 九五峰是台北幾個拍攝101視角中前幾好的 雖然登山步道相對較長 但能拍的點是比較多 \
        福壽石過後的第一個拍點還能跟101合照 與象山六巨石應該是台北兩個最好人配夜景的好地方 \
        這次我上傳兩張照片 亮度不同 相差無幾的亮度讓我傷腦筋很久 ig的照片講求的不是深度 而是第一眼能否留住觀眾的注意力 \
        為了留住注意力或許亮一點的作品會比較好 但曝光較暗的作品又能保留比較多的耐看跟神秘感 大家會比較喜歡哪種亮度呢" },
      { type: "link", content: "https://photos.app.goo.gl/oHrkPNfSeVr86MMs5", label: "2020年12月6日 \
        回醫院工作後 很多老師都說以前常看到我去拍照 現在還有嗎? 我心想當然沒有啊 在台灣做五大科 不都要犧牲奉獻自己的青春嗎QQ \
        身邊有些科技業的朋友 也是為台灣爆肝賣命 才能反映在台灣近年不斷起飛的股市吧 \
        看看自己動不動直接超高30-40小時的連續工時 能好好睡覺跟吃頓飯就很好了 談何興趣跟夢想呢? \
        台灣很多人 都是默默的努力 我們才能在世界上展露一角 其實也是一種幸福吧" },
      { type: "link", content: "https://photos.app.goo.gl/xZj8uo933yV5Pi3Z7", label: "2020年12月6日 黑咖啡粉+奶茶+咖啡酒 意外的好喝 奶茶能完美克服黑咖啡的苦 變成鴛鴦奶茶" },
      { type: "link", content: "https://photos.app.goo.gl/NXcVdonwVbhK3aZP9", label: "2020年12月6日 想要反駁 明明就難喝到爆 超像感冒糖漿 什麼鴛鴦奶茶 根本地獄級" },
      { type: "link", content: "https://photos.app.goo.gl/buovkS3vgRDdhKmLA", label: "2017年12月6日 \
        頭跟整片胸痛 懷疑自己有wheezing cold sweating 四肢無力 現在前往急診中 請問可能何疾病 \
        流感 氣胸 GERD Heart failure pneumonia 小兒外過太爽 xx過長 寢室臨床教學" },
      { type: "link", content: "https://photos.app.goo.gl/XvQWqeWd4z6BwZX39", label: "2017年12月6日 手癢就會蹦出奇怪的照片" },
      { type: "link", content: "https://photos.app.goo.gl/vk2My752TCSsiuy86", label: "2017年12月6日 \
        2017/07/20開始了這個ig帳號 發了第一張照片 認識了很多年輕的攝影師 甚至認識遍佈世界各地不同的攝影風格 \
        現在粉絲來到2400多而已大概是我的風格在台灣比較難被接受 笑 不過很珍惜願意交流 指導與追蹤支持的你們 \
        目前99張 而第100張的答案藏在上一頁限時裡 我會堅持這樣的照片風格 修煉後製技術 並拍好各種主題 提升自己攝影的層次" }
    ],
    "7": [
      { type: "link", content: "https://photos.app.goo.gl/wN132nY1w5Ycop9cA", label: "2025年12月7日 \
        真的很羨慕別的職業說走就走 說訂機票就訂機票的自由 當軍人最北七的之一就是出國上公文還要提前準備 \
        這種不自由一個月多給我三萬也不要zzz 薪水根本沒有高到值得放棄這些自由 小時候真的不懂事 \
        根本沒辦法好好了解自己的愛好跟人生規劃 幾十年的光陰都用來忍耐跟接受 這輩子真的不要讓任何人來幫你決定未來" },
      { type: "link", content: "https://photos.app.goo.gl/nFreXacNcHVhTP1p9", label: "2025年12月7日 一早又被這種可怕的東西轟炸" },
      { type: "link", content: "https://photos.app.goo.gl/PesVY6qvEqnjaSFU8", label: "2025年12月7日 爆可愛" },
      { type: "link", content: "https://photos.app.goo.gl/syFuRtkGJgBVb2Pu7", label: "2024年12月7日 第一名是不是搞錯什麼啊 醫師在台灣薪水大約200-300而已 工程師光年終就比我們年薪多了 醫師還沒幾毛年終的呵呵" },
      { type: "link", content: "https://photos.app.goo.gl/EAP6jZmYtkLiyF2GA", label: "2024年12月7日 超爽 畢竟對面就是一群被共產黨控制的白癡國度 不敢面對真相" },
      { type: "link", content: "https://photos.app.goo.gl/su7umRnsGQuE5vEY8", label: "2024年12月7日 啊我咧" },
      { type: "link", content: "https://photos.app.goo.gl/xMGbkxYpXXswzco48", label: "2024年12月7日 好啊 但快沒錢了 要存錢先" },
      { type: "link", content: "https://photos.app.goo.gl/2N16mkcPAPLvLodS7", label: "2024年12月7日 你有存款跟房子ㄚ" },
      { type: "link", content: "https://photos.app.goo.gl/bpAUSuujWo9WAmJA9", label: "2022年12月7日 賤保鼠 賤是指醫療人員 活該作死 保是指保護民眾荷包 鼠是指健保局官員 專門咬醫護人員布袋 從後面捅刀" },
      { type: "link", content: "https://photos.app.goo.gl/qVJ16ESC4LHDkZgS6", label: "2022年12月7日 BMI增加利器" },
      { type: "link", content: "https://photos.app.goo.gl/Tg77pUnTCAxvo8kFA", label: "2021年12月7日 被大家嫌棄一元金數年 甚至被質疑分佈大陸有問題 連我都不識貨獲利賣出QQ 結果現在開始回歸應有價值 果然唯有股市肥羊才是金融股類的真理" },
      { type: "link", content: "https://photos.app.goo.gl/i3pStyJbBQdVnbHU6", label: "2021年12月7日 現在以新兵的病況優先 長官的屁話放旁邊 等部隊結束你一定會感謝自己做對的決定XD 這件事秉持醫官的專業判斷 事後真的有事才能全身而退" },
      { type: "link", content: "https://photos.app.goo.gl/5pkhauLiTJ9HqiuJ7", label: "2020年12月7日 唉少壯不努力 現在看原文書跟論文速度超慢 都要慢慢確認每個詞彙精準的意思 搞得自己好像剛intern 真的讀書要提早不要跟我一樣沒學問" },
      { type: "link", content: "https://photos.app.goo.gl/jMD4e9hKbEdVgMfZ6", label: "2019年12月7日 這篇敘述性回顧文獻 探討馬拉松當中驟死 結論為 每149,968名參賽者 會出現一名死亡案例 男性發生率為女性的兩倍 大多在比賽最後四分之一時發生" },
      { type: "link", content: "https://photos.app.goo.gl/EVV7CHiqzizqMvey8", label: "2017年12月7日 My dear partner 第100篇貼文 很幸運認識武嶺上最閃亮的聖誕 謝謝妳陪我上山下海的拍照 未來我們要到更多的地方 紀錄更多的風景" }
    ],
    "8": [
      { type: "link", content: "https://photos.app.goo.gl/pb5Y9wYvUTWdHF3R9", label: "2025年12月8日 超可愛" },
      { type: "link", content: "https://photos.app.goo.gl/tj6cCbxpiQUw7yHaA", label: "2024年12月8日 \
        峇里島 人之所以出生在這個世界 並且被賦予豐富的感官與思想 並不是為了要被囚禁在工作 那只有痛苦與遺憾 \
        這個世界有數千萬種顏色 文化 建築 際遇 氣候 思想 用一生的時間去體驗才是被生下來的原因" },
      { type: "link", content: "https://photos.app.goo.gl/AB9JyF453E4DJKBR7", label: "2024年12月8日 週末修圖溫溫手感 越來越想念那些海島國家 什麼時候可以做自由的風景攝影師" },
      { type: "link", content: "https://photos.app.goo.gl/vo9HpZE6zhj74jNGA", label: "2024年12月8日 \
        星空下的樹屋 漆黑的半夜 我剛到超美的海濱小屋 就拖著疲憊的身軀去找到這個點 當下真的伸手不見五指 地景長曝兩分多鐘才些微的明亮 \
        但身處於遼闊大海中小島旁的小島 我們與世隔絕 只剩下海浪聲跟星空 當下便是這輩子最滿足的時刻 天啊真的很想住在國外" },
      { type: "link", content: "https://photos.app.goo.gl/kt7DqGhpXeEkStc97", label: "2024年12月8日 真心推 超好吃 買給毛小孩吧" },
      { type: "link", content: "https://photos.app.goo.gl/4YvntrXuumtkA9Hr5", label: "2024年12月8日 好吃" },
      { type: "link", content: "https://photos.app.goo.gl/C2sa2MzjgLGqhCpN7", label: "2024年12月8日 買過 真的推哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/9TtVVxVPXeVEAe9M8", label: "2024年12月8日 哈哈哈哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/3zwPKgHmCvK9NsGx7", label: "2024年12月8日 我也要買一個海棉寶寶" },
      { type: "link", content: "https://photos.app.goo.gl/AMQYE2R4iH3fSG9f7", label: "2024年12月8日 好危險 妹妹真聰明" },
      { type: "link", content: "https://photos.app.goo.gl/zHAVa3zRxTQjBGUS6", label: "2024年12月8日 他不是一個想得獎的人 他是一個想跳舞的人 respect哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/nXAVSzxVhchAifjm6", label: "2020年12月8日 飄向台中" },
      { type: "link", content: "https://photos.app.goo.gl/goh9FYbVHJ6xVtH36", label: "2017年12月8日 國立暨南國際大學女研究生宿舍 美麗校園之一" },
      { type: "link", content: "https://photos.app.goo.gl/4AaNe5QjchT2LApLA", label: "2017年12月8日 國立暨南國際大學女研究生宿舍 美麗校園之二 黑森林啊啊啊啊啊" }
    ],
    "9": [
      { type: "link", content: "https://photos.app.goo.gl/5jKDunUsdaP8Lp197", label: "2025年12月9日 這跟年薪150萬的醫師完全一樣啊 而且醫師一個月還有6-8天要值班 是連續工作超過30小時的" },
      { type: "link", content: "https://photos.app.goo.gl/Sn5HbA6xRf2dtcu67", label: "2025年12月9日 民進黨的17.7%裡面是不是包含一位想到當兵就憂鬱導致不能當兵的林昶佐" },
      { type: "link", content: "https://photos.app.goo.gl/oWJFxsitby7kGWCN8", label: "2025年12月9日 讚 就是這樣罵死他" },
      { type: "link", content: "https://photos.app.goo.gl/vddZJfm9f9LR1JZP7", label: "2025年12月9日 \
        幾天的潮濕寒冷後 終於迎來一天的乾爽 雖然還是非常冷 但我決定一起去爬個金面山 路上我們聊到 我曾說想在離開台北前 \
        把所有漂亮的101視角都拍過 不過目前的生活被工作填的很滿 沒有值班的晚上跟週末 也常常得犧牲 所以到底有沒有機會拍完呢 \
        我們一起抵達山上 路上還有阿貓阿狗陪爬 純淨的天空被夕彩渲染 而我意外捕捉到飛機飛過101 解鎖了這個畫面 當成手機桌布真的很美 分享給大家" },
      { type: "link", content: "https://photos.app.goo.gl/bWZ4NQvFtj5N6b2r6", label: "2025年12月9日 我覺得他一定是狗狗轉世 可愛又感動" },
      { type: "link", content: "https://photos.app.goo.gl/8Dc4UedarNvfuSag9", label: "2025年12月9日 強" },
      { type: "link", content: "https://photos.app.goo.gl/K1NyNgraWWPh5f3r6", label: "2024年12月9日 今天還沒過一半就22個會診 什麼意思" },
      { type: "link", content: "https://photos.app.goo.gl/cq8yn4tEckeJe7tRA", label: "2024年12月9日 哈哈哈小隻就是可愛" },
      { type: "link", content: "https://photos.app.goo.gl/UeR4BH4aCV6qhEGb7", label: "2024年12月9日 對啊" },
      { type: "link", content: "https://photos.app.goo.gl/UeVRziTdCUs5Txxx5", label: "2024年12月9日 認真說 一定是那隻跳下來的貓貓哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/7fyAzyFEpsnoBLXJ8", label: "2024年12月9日 九個小黑豆在玩" },
      { type: "link", content: "https://photos.app.goo.gl/vaWRvDaLzGzcZRQN9", label: "2024年12月9日 震撼" },
      { type: "link", content: "https://photos.app.goo.gl/ahZNtvVGBFkSU5Vs9", label: "2023年12月9日 這禮拜七天都在工作 每天都加班 今天起大早拍婚證婚禮 明天值班 只有今晚的空檔要好好把握一起吃晚餐" },
      { type: "link", content: "https://photos.app.goo.gl/Gu5MqCc5sCmnjEsv5", label: "2023年12月9日 難得主動 找出很可愛的餐廳 彷彿回到了大阪一樣好懷念 超級懷念 會客室" },
      { type: "link", content: "https://photos.app.goo.gl/YviPD5sr1sUsPC7t6", label: "2023年12月9日 是之前的麻醉部長嗎 表演不用摸也可以打上aline" },
      { type: "link", content: "https://photos.app.goo.gl/PDk5f9YqtGDpocmf8", label: "2023年12月9日 終於見到我的偶像學長 學生時代就是一起接各種攝影活動 跑去國際大師的講習聽課 研究婚禮及婚紗攝影 結果這場居然又一起當工作人員了 重現以前我們擺各種器材的桌面XDDD" },
      { type: "link", content: "https://photos.app.goo.gl/tK5Mo4L48Z1VfC456", label: "2023年12月9日 孫立人將軍官邸 應該是我拍過最喜歡的場地 有別於一般大飯店 這裡是台北鬧區中的幽靜之地" },
      { type: "link", content: "https://photos.app.goo.gl/KFmSKFgrGc4sV6hBA", label: "2023年12月9日 今天的婚禮場地太酷了吧 上工 孫立人將軍官邸" },
      { type: "link", content: "https://photos.app.goo.gl/fp56M4F48cJArZ8x6", label: "2022年12月9日 政府一直在扯台灣醫師的後腿 這就是現在的醫療環境" },
      { type: "link", content: "https://photos.app.goo.gl/2znDfGDdhr2ok31A8", label: "2022年12月9日 圖片中看起來如果沒有火人可以融合成冰火人 會很難打血鬼啊" },
      { type: "link", content: "https://photos.app.goo.gl/VKruHfK2jqKQmZb96", label: "2021年12月9日 高雄市百萬夜景 這裡是南臺灣第一的百萬夜景 日出日落都可以拍 八五大樓聳立在高樓中心 充滿平衡的美感" },
      { type: "link", content: "https://photos.app.goo.gl/5Vgs18uSgtqxAxHW8", label: "2020年12月9日 我不知道對一份大家都直接沿用舊的ppt來報告的一個會 我幹嘛花5-6個小時看原文書跟一堆資料做新的講義 也許只是對以前不認真的一個補償心理而已 " },
      { type: "link", content: "https://photos.app.goo.gl/mnSp6mQ5WiPVeNpn8", label: "2018年12月9日 出海11天又人間蒸發" },
      { type: "link", content: "https://photos.app.goo.gl/9u5rq1fCXULvoBFT6", label: "2017年12月9日 相機什麼的還是收防潮箱吧" }
    ],
    "10": [
      { type: "link", content: "https://photos.app.goo.gl/VrrdbpQcjZcb6EjJ9", label: "2025年12月10日 這樣塔拉會變更強嗎" },
      { type: "link", content: "https://photos.app.goo.gl/wUHDb8pTSraDuWE1A", label: "2025年12月10日 好看 感覺就是一拳超人跟悟空打架 快到看不見的連續相撞" },
      { type: "link", content: "https://photos.app.goo.gl/qzNSyVpxjBiD5fKS8", label: "2025年12月10日 我有看到 他真的600天每天往前一點點 棉被都這麼努力撐住了 我們也要努力" },
      { type: "link", content: "https://photos.app.goo.gl/v3687UuF1RcsMBxG8", label: "2025年12月10日 好好看" },
      { type: "link", content: "https://photos.app.goo.gl/gTy2nXZ6QJAFf44H6", label: "2025年12月10日 阿貓ㄚ" },
      { type: "link", content: "https://photos.app.goo.gl/yUAojWXui73NPATD9", label: "2025年12月10日 對 我爬到山頂" },
      { type: "link", content: "https://photos.app.goo.gl/Evr27w6HqxsZqBjS6", label: "2025年12月10日 感謝老天的好天氣 謝謝" },
      { type: "link", content: "https://photos.app.goo.gl/gCp6aZBYcM6KXq8cA", label: "2024年12月10日 \
        加上富邦國泰 還有圖中的中信元大兆豐凱基 台灣前六大金控我都有買 之前也有推薦過 如果心臟跟我一樣小 平常也跟我一樣懶惰 \
        其實就逢低無腦買這些大金控就好 買完完全不用理別人想法 本多終勝 就是這麼簡單" },
      { type: "link", content: "https://photos.app.goo.gl/MWxK17ceUKsk79EZA", label: "2024年12月10日 \
        有圖為證 早在幾年前就一直在買 投資就是買自己了解也有信心的 而不是見風轉舵 整天在那邊聽別人五四三的意見 \
        然後心神不寧賠錢又影響本業 股票就是要穩 要始終如一 體質夠好 市值夠大沒辦法內線操作 公司負責人清楚明瞭 \
        且要能在大跌時勇敢接刀的標的才是好標的 沒聽過 亂七八糟的 小公司的 我一律當詐騙" },
      { type: "link", content: "https://photos.app.goo.gl/5Gsuo9M2XCeEDQyt5", label: "2024年12月10日 \
        是我的話 我會先跳進對面團裡面再開 一方面等隊友在走近一點 一方面有機會對面以為我失誤砸更多招出來 \
        但風險是怕跳進去第一時間被控開不出大就沒了 但如果跳進去開大 應該可以更卡開對面陣形" },
      { type: "link", content: "https://photos.app.goo.gl/jqnQ7FJwFa5auai86", label: "2024年12月10日 好可愛 發現尾巴怪怪的哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/rQ4uYzmqv6jt7egx7", label: "2024年12月10日 想養" },
      { type: "link", content: "https://photos.app.goo.gl/HiUuPKCysJ4Yg6L26", label: "2024年12月10日 哈哈哈哈好" },
      { type: "link", content: "https://photos.app.goo.gl/zzxGsCaqB9TDuNp76", label: "2024年12月10日 不行 要開始開車了 先從坦克車開始" },
      { type: "link", content: "https://photos.app.goo.gl/faxobCpZjCntiT9W6", label: "2024年12月10日 這些都是疫苗副作用啦" },
      { type: "link", content: "https://photos.app.goo.gl/bhssbCTKfrngS3AS9", label: "2020年12月10日 三總員餐的鮪魚帕尼尼真是世界第一好吃 屌打外面早午餐的帕尼尼 是早起上班厭世的解藥 真的是太厲害XDDDD" },
      { type: "link", content: "https://photos.app.goo.gl/vCwNqNFjSqX6f1hv9", label: "2017年12月10日 Call me later again 101是我的電塔 收聽來自銀河的聲音" }
    ],
    "11": [
      { type: "link", content: "https://photos.app.goo.gl/uSCxoZrfZCsxFKpa6", label: "2025年12月11日 真的齁 但醫院給的假超少 以後再想想辦法" },
      { type: "link", content: "https://photos.app.goo.gl/qsvLqj96ntmDvrAg9", label: "2025年12月11日 怎麼那麼聰明可愛" },
      { type: "link", content: "https://photos.app.goo.gl/onLhF2keorRn9txV9", label: "2025年12月11日 我怎麼沒吃到干貝 有吃到啦" },
      { type: "link", content: "https://photos.app.goo.gl/8djeHERtDydowbmo9", label: "2025年12月11日 今天真ㄉ是好累好累 回家補充熱量" },
      { type: "link", content: "https://photos.app.goo.gl/cwxdc5KicrPGvo7v6", label: "2025年12月11日 Ok 我來安排" },
      { type: "link", content: "https://photos.app.goo.gl/21agE8yBL7j9c2n76", label: "2025年12月11日 二刷起來" },
      { type: "link", content: "https://photos.app.goo.gl/6kUpPQLtSLunYEM1A", label: "2024年12月11日 好啊" },
      { type: "link", content: "https://photos.app.goo.gl/UzX364GtwMTfmxs58", label: "2024年12月11日 可愛小手連擊" },
      { type: "link", content: "https://photos.app.goo.gl/hwJdBXHu5MkxesaG8", label: "2024年12月11日 對欸" },
      { type: "link", content: "https://photos.app.goo.gl/gunrVc7a9ooJxat69", label: "2023年12月11日 Happy Birthday" },
      { type: "link", content: "https://photos.app.goo.gl/aJMLoJzxxbvcBoad9", label: "2023年12月11日 如果CV綸跟CV昕同時都上 我就請客 代表我可以輕鬆了 不然撐不住" }
    ],
    "12": [
      { type: "link", content: "https://photos.app.goo.gl/UfrQpF8mxRRjdJVd8", label: "2025年12月12日 所以我以前才說有些中國人可以直接消失沒關係" },
      { type: "link", content: "https://photos.app.goo.gl/QpYEJNHC7LJ7CAWJ6", label: "2025年12月12日 敦聘貴屬吳展旭醫師為本會「看見腫瘤護理之美」攝影比賽評審 敬請惠允" },
      { type: "link", content: "https://photos.app.goo.gl/GRBEpXvc8eQAwNeL6", label: "2025年12月12日 不行了 真的太好笑了" },
      { type: "link", content: "https://photos.app.goo.gl/N74EYX97b1S5Jc1v9", label: "2024年12月12日 小腦大面積出血的話根本沒辦法做心導管吧 做了就算要放支架也不能放 因為抗凝血跟抗血小板不能使用" },
      { type: "link", content: "https://photos.app.goo.gl/kFtD73MAUTRmvmoc8", label: "2024年12月12日 台灣職籃蠻可悲的 幸好從來不看 這種沒良心的經營方式應該抵制" },
      { type: "link", content: "https://photos.app.goo.gl/XrB8GwntufgZ4oaXA", label: "2024年12月12日 路過 這真的超推" },
      { type: "link", content: "https://photos.app.goo.gl/sYuGRdmZneFap7Sv9", label: "2024年12月12日 可愛" },
      { type: "link", content: "https://photos.app.goo.gl/vXV5ZhzTEBoM6Qqh7", label: "2023年12月12日 我還是很喜歡拍婚攝 雖然修圖眼睛好累 但有別於醫院工作需面對無盡的痛苦跟陰暗 至少婚攝記錄的是歡樂跟幸福 工作都是一樣辛苦的 但能選擇自己喜歡的工作類型 遠比被迫接受不喜歡工作環境更有價值" },
      { type: "link", content: "https://photos.app.goo.gl/x6tLBighig2XoXwJ8", label: "2023年12月12日 感謝紀錄工作身影 學長拍周邊小品類型也太強了吧 食物那些" },
      { type: "link", content: "https://photos.app.goo.gl/LDuxXfM5FQw4PrQEA", label: "2022年12月12日 分享一下優秀同學 最近好忙 上班值班輪迴以外 被各種逼迫報告 還有回覆投稿苛刻問題 之後會再努力經營分享 不是放棄粉專" },
      { type: "link", content: "https://photos.app.goo.gl/biVZtgbdepBAupxs6", label: "2022年12月12日 沒再客氣的 直接嚕過去" },
      { type: "link", content: "https://photos.app.goo.gl/qedG2WrC5bGk3BF98", label: "2021年12月12日 每個週末必須的加班補病歷" },
      { type: "link", content: "https://photos.app.goo.gl/P8qh3sBVp1sx8ijg8", label: "2020年12月12日 10月感染科就是遇到這種case 很典型 本身有糖尿病 不規則就醫但是用自以為的飲食節制來調整 結果有一餐沒一餐 HHS送來醫院 開始補足營養跟正常進食 馬上Refeeding Syndrome" },
      { type: "link", content: "https://photos.app.goo.gl/o6KkkoQKmTjHu5gc9", label: "2020年12月12日 喝咖啡好不好 用最嚴謹的醫學實證 是很好的 尤其過濾過的咖啡更好 沒有照片可以分享 但醫學的有趣知識可以分享" },
      { type: "link", content: "https://photos.app.goo.gl/vfUK8E9mWCkA4zGX9", label: "2019年12月12日 \
        多數的先生都在做自己喜歡的工作嗎 多數的男人明明也是捏著懶趴 頂著痛苦的經濟壓力 活在犧牲健康 看不到小孩老婆跟生活品質的陰影下痛苦的工作不是嗎 \
        電影傳達的理念或許很好 但別忘了實際上被遺忘不只是女人的心酸 男人也是一樣 真正應該檢討的 是這個社會病態的框架 經濟的壓力與傳統的觀念 不分男女都是受害者" },
      { type: "link", content: "https://photos.app.goo.gl/uUbWoPhBr3eYCsN39", label: "2016年12月12日 \
        就當這個月是重新開始 以前總覺得多做多吃虧 總是抱怨為何生活沒極限的慘 總是有藉口原諒自己有著僥倖心態 \
        奇怪的是我痲痹了 其實把醫院的事情care好並不難 甘願一點 認命一些 為時不晚 要積極正向 加油 四草大橋" }
    ],
    "13": [
      { type: "link", content: "https://photos.app.goo.gl/Zox9snPN4nZUs4x27", label: "2025年12月13日 該不會全部花蓮的牛肉麵都吃過一輪吧 好猛" },
      { type: "link", content: "https://photos.app.goo.gl/bgUjFuVARmi3kjmc9", label: "2025年12月13日 我的攝影作品 IG搜尋omg_taiwan" },
      { type: "link", content: "https://photos.app.goo.gl/yrerMt8vqDqxy5YT9", label: "2024年12月13日 真可愛 他吃這個好搭喔哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/xPYNRemparDPCeMG9", label: "2023年12月13日 要被聖強盯上了 學長抱歉 我會修改並注意" },
      { type: "link", content: "https://photos.app.goo.gl/V9fJ71vchyqt9vMG8", label: "2020年12月13日 半夜還可以喝到泰式奶茶" },
      { type: "link", content: "https://photos.app.goo.gl/jKMq6gaqN4A6wSbc7", label: "2020年12月13日 內外科值班住院醫生爆肝的深夜" },
      { type: "link", content: "https://photos.app.goo.gl/1E9RPG9otUJnCiDJ9", label: "2020年12月13日 也只有少數醫院如三總 半夜不鎖床 絕對不讓病人受委屈在急診過夜 一定能即時入住病房 讚" },
      { type: "link", content: "https://photos.app.goo.gl/8J8C2XHwNAt2HQxz8", label: "2019年12月13日 軍費生最該跳" },
      { type: "link", content: "https://photos.app.goo.gl/38eUbFH3fGjJkLv57", label: "2017年12月13日 咳咳咳咳咳咳咳咳咳咳咳" }
    ],
    "14": [
      { type: "link", content: "https://photos.app.goo.gl/pZN7QNUdckj93mf48", label: "2025年12月14日 要吃嗎 我來定" },
      { type: "link", content: "https://photos.app.goo.gl/AZuZ3ChX9yrzHxUU8", label: "2025年12月14日 可是我們家外面有蟑螂蚊子壁虎QQ" },
      { type: "link", content: "https://photos.app.goo.gl/owVUTYTtjJD9CFcw6", label: "2025年12月14日 我也想練健身" },
      { type: "link", content: "https://photos.app.goo.gl/4izZZPrqAQYWypfZA", label: "2025年12月14日 最後忘記帶健保卡真的不行了 太好笑哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/a8tE67dCdMiAmiHp7", label: "2024年12月14日 怎麼那麼霸道哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/uk4NgREHVseqcw527", label: "2024年12月14日 該買了" },
      { type: "link", content: "https://photos.app.goo.gl/r6aXVvxFZfpEnATZ9", label: "2024年12月14日 醫學系可以打上永恆太鬼了吧 第一次看到" },
      { type: "link", content: "https://photos.app.goo.gl/MpxFbsGAUpbJv3zH6", label: "2024年12月14日 鼎學是因為同為PT才追蹤的嗎" },
      { type: "link", content: "https://photos.app.goo.gl/mZVW19Vf3hrD7NW6A", label: "2024年12月14日 對啊" },
      { type: "link", content: "https://photos.app.goo.gl/DUzfqXEynQscNfeW7", label: "2024年12月14日 怎麼那麼漂亮" },
      { type: "link", content: "https://photos.app.goo.gl/pFcUZt9em6TumH8C6", label: "2024年12月14日 應該可以下雪了吧 太冷了不然這裡滿好拍 包含附近的道路" },
      { type: "link", content: "https://photos.app.goo.gl/NgaB9nfxdeTgjer26", label: "2021年12月14日 幾乎全新無畫記 約面交以台北台中為主 寄送則是7-11交貨便 需付運費60元" },
      { type: "link", content: "https://photos.app.goo.gl/c91XdRWSc98pSTn37", label: "2021年12月14日 請問圖中勁戰是什麼顏色 請以主觀回答 結果答案是咖啡色 赤褐色 我輸一杯奶茶了 但赤+褐不就是紫色嗎" },
      { type: "link", content: "https://photos.app.goo.gl/PgEbptuihmMqQaZq7", label: "2021年12月14日 太扯了吧有夠水" },
      { type: "link", content: "https://photos.app.goo.gl/fQuhgs7KBbTiQzRS7", label: "2021年12月14日 跟鬼一樣欸 好想拍" },
      { type: "link", content: "https://photos.app.goo.gl/gfbL6PqJWSst22M58", label: "2018年12月14日 完全不懂丁那麼想當市長幹嘛 又不是真的想替人民服務 聳肩" },
      { type: "link", content: "https://photos.app.goo.gl/CiMNg1Y2D3bzKV4F9", label: "2018年12月14日 我喜歡出海那種無拘無束的感覺" },
      { type: "link", content: "https://photos.app.goo.gl/ejkMsqsqBEA1zGJz6", label: "2018年12月14日 大海也有很多角落值得探索耶 緊來" },
      { type: "link", content: "https://photos.app.goo.gl/LMyU1kiY5YUJpgsQ9", label: "2018年12月14日 說來慚愧 New Post都是三年前修的照片了 櫛次鱗比的大樓裝著每日忙碌的人們 日子悄悄的過去 時間流動意外的快了起來 一年又準備過了" },
      { type: "link", content: "https://photos.app.goo.gl/tbJmFpzGzeijYRKB9", label: "2018年12月14日 喝水中" },
      { type: "link", content: "https://photos.app.goo.gl/Rp4fYyqDbSbf5HvT6", label: "2018年12月14日 開了快11天船 連陸上上的盤子都特別好吃" },
      { type: "link", content: "https://photos.app.goo.gl/3QDJ9yt1z4E6wnf96", label: "2017年12月14日 不會 很高興認識你們哈哈哈哈哈 哈哈 我還是要檢討 下次要準備重點整理給你們帶回去 也要增加相機操作的內容 謝謝你們成為我第一組客人 以後就是朋友 一起享受攝影吧!" },
      { type: "link", content: "https://photos.app.goo.gl/WeDQxLXF3F18p1cU6", label: "2017年12月14日 \
        內微黑特 沒錯就是你想的那樣想看歡迎 不刪文 攝影家教第一堂開工大成功 謝謝你們大老遠來上課 \
        收費部分 我敢保證價格跟內容 絕對是高cp值 畢竟賺錢只是目的的一半 另一半是為了交朋友 但我不會免費教學 這些技術經驗還有自己研發的修圖應用 都是我花數千小時的結晶 \
        再說 我跟朋友請益也是得花錢請客 從來沒有東西是平白無故得到的 我從不當白臉 話說某同學7pupu呢呵呵 雖然我早就封鎖他看不到 \
        為他發文真浪費時間 不過相信有善良大大會截圖給他看 所以只發這一次 也順便給底下留言的看 發文者您就繼續黑 ,您只會欺騙跟抱怨 有時間不如多讀書 \
        不要學校被當到留級還不能考醫師執照 很丟人現眼捏 難道要我說大一時期您觸法被中隊長查封電腦 差點退除學籍嗎 \
        但您記性不好應該早忘了 勸您自愛 面對現實 而我繼續往上爬繼續努力 人的程度高下立判 頂多同情您的無知^^ \
        另外請不要當面說有攝影方面跟我請益 底下留言看不起我專業的話(?) 也許是我誤會了 畢竟在別人嘴砲文在底下留言好像很爽 \
        但如果您的朋友是會發這種秀下限文章的人 您出現在底下留言不覺得丟臉嗎? 看看他在迪卡怎麼黑醫研營就知道水準在哪 \
        我誰也不欠誰也不怕 尊重是相互的 你敬我三分我敬你十分 今後我會繼續做好攝影副業 也會要求自己保持最高品質 若想學攝影歡迎來找我囉 保準滿載而歸 94說你" },
      { type: "link", content: "https://photos.app.goo.gl/vtU6rJqfgozMvYnm6", label: "2017年12月14日 昨天2000上到今晚2000的班 還感冒 下班再接家教課 終於下課囉 洗洗睡到這禮拜六都要上班 期待這禮拜日的家教課程 保證讓各位收穫滿滿" },
      { type: "link", content: "https://photos.app.goo.gl/JVe8XssUK3N5ntmg7", label: "2017年12月14日 第一堂家教開課爹斯!" },
      { type: "link", content: "https://photos.app.goo.gl/WyrN77J8D2DDS8sv7", label: "2017年12月14日 台北難得大燒 衝一發上班== 唉人生ㄚ 還被路過的麻醉科主任說好有情調" }
    ],
    "15": [
      { type: "link", content: "https://photos.app.goo.gl/szyVYeF4kwJtXq5A9", label: "2025年12月15日 今天終於拿到全家商店的積木 沒想到居然要花超過半小時組裝 有點幸運當時訂了兩套" },
      { type: "link", content: "https://photos.app.goo.gl/eekW3T9xU4D1JSt67", label: "2025年12月15日 為什麼保衛國家犧牲自由的軍人要被你操啊 發文素質跟邏輯有夠低下 跟對岸某些小粉紅差沒多少 戰爭打來了誰要保衛你這東西嘻嘻" },
      { type: "link", content: "https://photos.app.goo.gl/qHQbDgj4wXB6Degc9", label: "2025年12月15日 真的是很好的出路 年輕只有一次 不要把時間都賠在醫院而是有更多時間做自己喜歡的事情會更好 CV真的太辛苦了" },
      { type: "link", content: "https://photos.app.goo.gl/NrEhK6GYTabffy548", label: "2025年12月15日 \
        說實在的如果我有心想準備考試 老師認真的教而且有料 跟一樣的優秀老師 我絕對超有精神超專心 因為高效率吸收才是最節省時間 \
        需要黃色笑話來提神 不只代表老師沒料沒法引起有心的學生 更代表只能喚醒那些沒心的學生 而那些學生根本準備也是浪費時間去陪考而已 \
        然後講個黃色笑話3-5分鐘 優秀的學生不如直接趴在桌上睡一下 起來還更有精神zzzz 聽那種笑話根本浪費時間" },
      { type: "link", content: "https://photos.app.goo.gl/xgKQ19vCfar5bzWC8", label: "2025年12月15日 他這個slow motion蠻穩的 我以前也有練 很久沒跳" },
      { type: "link", content: "https://photos.app.goo.gl/anHdqoAyq4Y6KVsj9", label: "2025年12月15日 哇靠好可怕的車禍 看得我眼淚都從嘴角流下來了" },
      { type: "link", content: "https://photos.app.goo.gl/c4iR7yucRfyTkyoN8", label: "2025年12月15日 好猛 這台機器很嗆喔XD" },
      { type: "link", content: "https://photos.app.goo.gl/AogBaKH99tnf9p2JA", label: "2025年12月15日 我餓了" },
      { type: "link", content: "https://photos.app.goo.gl/ctJmEmcPeTS3WGk58", label: "2025年12月15日 好" },
      { type: "link", content: "https://photos.app.goo.gl/xTdpVP1CbTVxHgE3A", label: "2025年12月15日 好 來定" },
      { type: "link", content: "https://photos.app.goo.gl/G96U7J1eXZHhga4c7", label: "2024年12月15日 八角瞭望臺 由上往下看 由下往上看 都是旋轉組成的地方" },
      { type: "link", content: "https://photos.app.goo.gl/JHhUUtNLDfMpKR9dA", label: "2024年12月15日 羨慕 工程師工作高薪又可以幽默 還能放一下午的假 醫師工作高壓薪水低 不能開玩笑還沒年假放zz" },
      { type: "link", content: "https://photos.app.goo.gl/pedDVtFcM5NUs2gq7", label: "2024年12月15日 \
        這次路過頭城 覺得這家大腸麵線不妨可以嘗試 停車方便 可以逛老街 也很好吃 \
        頭城 轉角大腸麵線 位於頭城老街旁不起眼的路邊 但非常好吃的大腸麵線 \
        我個人超愛油條或皮蛋口味 油條超脆 皮蛋也很入味 另外也有綜合口味的 包含油條 皮蛋 赤肉跟大腸四種混合的 \
        如果當一餐可以點大份 吃個味道的小份就夠了 車子也可以停老街附近 非常方便" },
      { type: "link", content: "https://photos.app.goo.gl/gBzs1vv22NBJQxvB7", label: "2024年12月15日 哪會 我會做全部事情" },
      { type: "link", content: "https://photos.app.goo.gl/vdrL8Au8Yaq5DN54A", label: "2024年12月15日 太噁 沒辦法" },
      { type: "link", content: "https://photos.app.goo.gl/uAvWXj8n7VhjMdUg7", label: "2024年12月15日 還可以體驗到立體視線的交流" },
      { type: "link", content: "https://photos.app.goo.gl/RzEKX8hs4dhjgxrM9", label: "2024年12月15日 傲嬌貓貓" },
      { type: "link", content: "https://photos.app.goo.gl/oLDG4b6DzdHiJ5sw8", label: "2024年12月15日 冒煙的石頭溫泉渡假旅館 頭城老街" },
      { type: "link", content: "https://photos.app.goo.gl/g2nfSxhrtAR1KRr77", label: "2023年12月15日 捕獲忠孝復興的半截LV聖誕樹 半折直樹" },
      { type: "link", content: "https://photos.app.goo.gl/rXt6J1FSWUDdVS437", label: "2023年12月15日 來台北超過十年但真的很少去餐酒館" },
      { type: "link", content: "https://photos.app.goo.gl/nAfbCF1tiGSQ5hj2A", label: "2023年12月15日 跟我有沒有在旁邊有啥關係 是本來就不能玩吧" },
      { type: "link", content: "https://photos.app.goo.gl/2uQZNJPhG7oarKTL9", label: "2023年12月15日 ANOTHER ROUND醉好 子曰 朝聞道夕死可矣 早上知道你家的道路 晚上你就可以死了" },
      { type: "link", content: "https://photos.app.goo.gl/bEdnULHFovFHd4XS6", label: "2023年12月15日 整晚只喝一杯SHOT 網路說三口啤酒就會酒駕 想說一杯SHOT完全無感 應該可以騎車回去" },
      { type: "link", content: "https://photos.app.goo.gl/gnq95uhD2Ga9HK8XA", label: "2023年12月15日 還是乖乖坐捷運回去吧" },
      { type: "link", content: "https://photos.app.goo.gl/xQtpFjkkepRYshm47", label: "2022年12月15日 感謝細心整理 我覺得重點只有一個 就是ETF裡面單股的納入或賣出 並不會跟單股股價有關 別以為某股被ETF納入就會大漲 股市無法預測 只有認真賺錢 認真選好公司 才是長久投資" },
      { type: "link", content: "https://photos.app.goo.gl/2Daa2nqF2Pv69Q3v6", label: "2020年12月15日 操 垃圾健保 虧待醫護人員 那些爛官 我就具名的說 你們去死一死吧 台灣這種用點值把醫師薪水打折的混蛋官員 都是伐害台灣醫療的罪人" },
      { type: "link", content: "https://photos.app.goo.gl/CRdy8Qz6ALyDzo1v5", label: "2017年12月15日 Ig大神的照片都是直幅 看來要改變拍攝方式惹" },
      { type: "link", content: "https://photos.app.goo.gl/Jw7C8e7AwEoNjPdx5", label: "2017年12月15日 攝影家教歡迎詢問 雖然累 但這就是價值" },
      { type: "link", content: "https://photos.app.goo.gl/2FHeCbGj1hA636i29", label: "2017年12月15日 好消息 免費亮度蒙版luminsity mask軟體已有載點 未來我也能提供進階曝光處理的後製教學啦 會提供軟體載點 徵一位有興趣者 提供您蒙版載點試玩看看 但麻煩用限時幫我分享ig專頁 私我即可" },
      { type: "link", content: "https://photos.app.goo.gl/iSAK8eGChMFxYdbo9", label: "2017年12月15日 謝謝各位踴躍私訊 原本打算給一個 現在破例多給好幾個 目前截止 希望各位好好研究 若想上PS後製班學習應用 還是歡迎唷" }
    ],
    "16": [
      { type: "link", content: "https://photos.app.goo.gl/k3yR4HSgjf487du59", label: "2025年12月16日 身為一個比常人更需要無拘無束的人 想追求最自由的人生卻反而困在最不自由 約束最多的體制裡 這種痛苦跟掙扎 努力維持創作的動力 應該沒幾個人跟我一樣" },
      { type: "link", content: "https://photos.app.goo.gl/F5aswnxDHfBKfQws8", label: "2025年12月16日 我想推薦本院好幾個技術高超又一直持續進修的心血管老師 但他們病人已經太多了不忍心再讓他們操勞QQ" },
      { type: "link", content: "https://photos.app.goo.gl/GDH5wphYQd24UKM49", label: "2025年12月16日 不是所有病人都值得有個好醫生 這就是健保最作賤醫護跟最偽善的想法 有些病人應該直接撤銷健保卡並且永不得再入院" },
      { type: "link", content: "https://photos.app.goo.gl/cXa7juUoZL5WVcCd8", label: "2025年12月16日 超好吃 但太好吃吃太多沒辦法運動了QQ" },
      { type: "link", content: "https://photos.app.goo.gl/iszGPuSKM9TXVQUn6", label: "2025年12月16日 能 但只能拉一次" },
      { type: "link", content: "https://photos.app.goo.gl/ivyDfJdXP7p4kajZ8", label: "2025年12月16日 爺爺心態年輕 身體也會跟著年輕" },
      { type: "link", content: "https://photos.app.goo.gl/HjW4JtTKuUEpVKq19", label: "2025年12月16日 我猜玉米濃湯" },
      { type: "link", content: "https://photos.app.goo.gl/uctL4Sr79bdVjfLf6", label: "2024年12月16日 94要買金控股 不用傷腦筋進進出出" },
      { type: "link", content: "https://photos.app.goo.gl/M4yaUMjztZx4tjA87", label: "2024年12月16日 會買這些亂七八糟股票的人當然會遇到鬼故事 沒有天份的乖乖買大盤買到底就好 還不會傻到被詐騙" },
      { type: "link", content: "https://photos.app.goo.gl/AjC8FXhWPq6mttxt8", label: "2024年12月16日 重點他是美國律師 不是在鬼島工作整天被壓榨 美國比較尊重個人生活跟休閒 這點台灣跟落後國家一樣 整個社會氛圍就是壓榨到大家都不健康 當然運動也就更難 除非犧牲休閒娛樂來運動" },
      { type: "link", content: "https://photos.app.goo.gl/zCTjhq9CtPk8Xk867", label: "2024年12月16日 直接舉手答有XDDDD" },
      { type: "link", content: "https://photos.app.goo.gl/vRQuaJMPc5GcXZk39", label: "2024年12月16日 會買這些亂七八糟股票的人當然會遇到鬼故事 沒有天份的乖乖買大盤買到底就好 還不會傻到被詐騙" },
      { type: "link", content: "https://photos.app.goo.gl/Zx6ET15efzHGCGrk9", label: "2024年12月16日 他想上微積分但需要同學的麵包先填飽肚子哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/yqrM7zhpbBtwwVyZ7", label: "2024年12月16日 超可愛" },
      { type: "link", content: "https://photos.app.goo.gl/7D6m5xhAQa7TB2vV8", label: "2023年12月16日 2023最傻眼的一件事 象鼻居然斷掉 我真的傻眼" },
      { type: "link", content: "https://photos.app.goo.gl/WLkdvkmSehge7D538", label: "2023年12月16日 \
        我不是一個對演唱會有興趣的人 但跟一起後 她總是讓我生活中添增豐富 林宥嘉這個名字在高中數學補習班聽過 補教名師傅壹吹嘘著他有位當歌手的學生 \
        快20年過去了總算親眼看到他 我對於歌曲沒有很熟 但他說了一席話是今晚的最大收穫 當我們有A跟B兩個選項 選兩者對自己都沒差時該怎麼辦 那就選能對對方好的那個吧 \
        踏入職場社會 常會碰到許多選擇 加上許多的困難跟辛苦常會覺得自己不被體制在乎 成為犧牲者 又何必為他人想 \
        但宥嘉的這句話 反映著內心的善良 或許我都忘了路上默默被多少人幫助 適時的善意或許能成為他人路上的助力 \
        最後表演的結束 他總是一一對夥伴介紹道謝 這就是他口中的溫柔吧 今晚內心波瀾最多的不是歌曲 而是他對於善及溫柔最高的高度" },
      { type: "link", content: "https://photos.app.goo.gl/mQWxGD9CwSCGhkDV9", label: "2018年12月16日 出個海太晃手機被撞壞 換新之後 懇請之前有給我電話號碼的朋友 再私我一次你的電話 萬分感謝" },
      { type: "link", content: "https://photos.app.goo.gl/dcGayanN9RWZVf458", label: "2018年12月16日 買兩個月左右的犀牛盾手機殼 有使用痕跡但無損壞 因換手機故出售 便宜賣 國醫校內面交限12/19禮拜三 中午後皆可" },
      { type: "link", content: "https://photos.app.goo.gl/RYXKi5HwpMi9A8gSA", label: "2018年12月16日 因故換手機原號碼沒變 之前有給我號碼的朋友 麻煩再私訊給我一次 謝謝" },
      { type: "link", content: "https://photos.app.goo.gl/fugqYughQ4vwX9EX6", label: "2018年12月16日 本日歲末年終感謝女友一家人 怒請客一發 開心" },
      { type: "link", content: "https://photos.app.goo.gl/xSkKKq7JvwfjJVtL8", label: "2018年12月16日 喔喔喔太久沒拍照了手控制不住" },
      { type: "link", content: "https://photos.app.goo.gl/XR6YYCrQpes5VXQL8", label: "2017年12月16日 這個g saline要寫進pt list嘛" },
      { type: "link", content: "https://photos.app.goo.gl/Vn8DZJoe1H94UfCc8", label: "2017年12月16日 乾查誰洩漏機密" },
      { type: "link", content: "https://photos.app.goo.gl/HSdeJaPeW5b4AKPb7", label: "2017年12月16日 好 其實我沒有怎樣XD 只是問好玩的X 我不會care你們怎麼講啦畢竟我做事我自己也很清楚XD" },
      { type: "link", content: "https://photos.app.goo.gl/c1MX1nMsYi7WZRbP7", label: "2017年12月16日 不是 我以為他先收CRS 然後開刀 開完轉進GICU 我的錯 我今天一定會打好病歷 不會亂打 每天=.=" },
      { type: "link", content: "https://photos.app.goo.gl/NPpTThC2sJA7kGBR9", label: "2017年12月16日 可是他昨天下刀沒有什麼特別的complain@@" },
      { type: "link", content: "https://photos.app.goo.gl/3MW4NfpwSYCFnoiF9", label: "2017年12月16日 對不起我不會再打混 不好意思還讓你們花時間跟我講這個 我會自己負責做好事情" },
      { type: "link", content: "https://photos.app.goo.gl/N3VooBntLcUV6NpH6", label: "2017年12月16日 到了大學接觸攝影 我才知道 挖掘世界是我這輩子最想完成的夢想 沒有其他的了 挖掘世界才是我這輩子唯一的夢想 沒有其他的了 我不想被束縛" },
      { type: "link", content: "https://photos.app.goo.gl/saNWT5HLKntLthdt9", label: "2017年12月16日 This is me 參加後製教學班揭秘 誰說一定要玩三陵鏡 不過是套路 修風景照學問難多了 New Pic Please check it" },
      { type: "link", content: "https://photos.app.goo.gl/EH1negCAP5fMbCGa9", label: "2017年12月16日 Where I took this pic?" }
    ],
    "17": [
      { type: "link", content: "https://photos.app.goo.gl/a6CXVAoUnrrpmAib9", label: "2025年12月17日 有訓練到咀嚼肌" },
      { type: "link", content: "https://photos.app.goo.gl/rg3AWTs4qijU5zZu9", label: "2025年12月17日 來看貓貓型掃地機器人" },
      { type: "link", content: "https://photos.app.goo.gl/2o2b6ciYQBVBytb58", label: "2025年12月17日 幸好我不會這樣" },
      { type: "link", content: "https://photos.app.goo.gl/9Zq565f6Y1EiLZuH8", label: "2025年12月17日 放心這個我會做 熬過現在這種地獄壓力模式就有時間跟精神了" },
      { type: "link", content: "https://photos.app.goo.gl/esonUZVyA5B1T8wN8", label: "2025年12月17日 怎麼那麼白" },
      { type: "link", content: "https://photos.app.goo.gl/UgkZfQX1B4qiAGaLA", label: "2025年12月17日 你的main角重製" },
      { type: "link", content: "https://photos.app.goo.gl/PagEKJj7SudbZT3f7", label: "2024年12月17日 這種不用跟他廢話== 這種螢幕後面都是可悲噁男 你跟他有回應就相當於讓他爽到 以後不要這樣回覆 直接封鎖就好" },
      { type: "link", content: "https://photos.app.goo.gl/pTjEVzt9GJ2Xvbjb6", label: "2024年12月17日 超可愛小猴" },
      { type: "link", content: "https://photos.app.goo.gl/8rVJDn6hXpC4cLFL7", label: "2024年12月17日 好啊 希望我有更多假 假太少QQ" },
      { type: "link", content: "https://photos.app.goo.gl/hjeszKG6rT9pYfjC7", label: "2024年12月17日 這個一定是gay 而且家裡冷氣好到不行不用修==" },
      { type: "link", content: "https://photos.app.goo.gl/sJfD48S5wmQzK9Dp7", label: "2024年12月17日 他想若無其事的偷喝哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/vhgPpnMRZ36h8Dhv6", label: "2024年12月17日 \
        八角瞭望台 走進八角瞭望台 從建築物的縫隙間 仍可感受到海風的強勁 比起深山 我似乎更喜歡靠海的地方 \
        夏天時 乾淨無人的海灘與椰子樹能夠完全忘記煩惱 冬天時 聽著洶湧的浪濤聲 能夠靜下心沈思及冥想 這裡整修了很久 終於等到了開放" },
      { type: "link", content: "https://photos.app.goo.gl/u5KvUUoekpxv77Pq9", label: "2024年12月17日 超可愛 我看了三次哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/xQKRvzUXU9CbDF6g7", label: "2022年12月17日 \
        台北松山 韓江烤肉 走進市區裡老舊公寓的電梯 三樓映入眼簾的韓江烤肉彷彿一瞬間來到了韓國 非常道地 \
        這是我目前認為CP第一名的韓國烤肉 每人450元不需服務費 各種小菜跟牛豬雞羊肉夾到爽 重點是補肉速度很快 超適合大胃王來吃 \
        喜歡韓式烤肉的朋友真的很推薦冬天來吃一頓 我原本要給滿分三顆星 不過吃很多盤之後肉類的醬油調味就有點膩了 算是唯一的美中不足 不過無傷大雅 推薦" },
      { type: "link", content: "https://photos.app.goo.gl/v58Y3oGf578RTBSp9", label: "2022年12月17日 第一看到手機螢火蟲海" },
      { type: "link", content: "https://photos.app.goo.gl/c86KVRPssnZrNMi16", label: "2019年12月17日 好可怕的技術 未來的未來 癌症能否不再是絕症 但讓人類超越自然對地球真的好嗎" },
      { type: "link", content: "https://photos.app.goo.gl/Aybshcw2TJ2FZdsm9", label: "2018年12月17日 唉這個工作環境 算了 撐著加油" },
      { type: "link", content: "https://photos.app.goo.gl/7a6Q8QQEY57X3zZF9", label: "2017年12月17日 好啦 想學PS後製可以找我啦 追蹤參考作品" }
    ],
    "18": [      
      { type: "link", content: "https://photos.app.goo.gl/FSpEufG31L826Tg57", label: "2025年12月18日 真的 看就知道根本不是貪污 還亂起訴 現在可好了 事實證明沒貪污 但亂七八糟的檢方抱對大腿 當到法務部長囉嘻嘻嘻" },
      { type: "link", content: "https://photos.app.goo.gl/RHvonPMHwSEmE92z9", label: "2025年12月18日 會買這本書的人大概這輩子也會容易被詐騙 早點被消滅早點好" },
      { type: "link", content: "https://photos.app.goo.gl/zqGEb41prLwUfwLq6", label: "2025年12月18日 沒有腦袋的病患 少一個是一個" },
      { type: "link", content: "https://photos.app.goo.gl/TTSASn6EX4xh1yEQ9", label: "2025年12月18日 這我會啊 但實際上拍起來很累 要趕景點 要看天氣 要補失敗的畫面 就沒辦法好好吃東西跟耍廢" },
      { type: "link", content: "https://photos.app.goo.gl/Qd4swbypC45zgLfu6", label: "2025年12月18日 人生不公平啊 有些人髮型就比較好看" },
      { type: "link", content: "https://photos.app.goo.gl/HMoakKVzRuyWce3G9", label: "2025年12月18日 好難 我都不會" },
      { type: "link", content: "https://photos.app.goo.gl/R37g3eyuhGCckRBT8", label: "2025年12月18日 超可愛" },
      { type: "link", content: "https://photos.app.goo.gl/hVe4BSioQsmzd5US7", label: "2025年12月18日 他超棒" },
      { type: "link", content: "https://photos.app.goo.gl/T9RHkUJMgcDRFihK8", label: "2024年12月18日 我也是狠人" },
      { type: "link", content: "https://photos.app.goo.gl/ZzHUQjPtHvoYt8MS6", label: "2024年12月18日 我到了" },
      { type: "link", content: "https://photos.app.goo.gl/ER6niRGStdaN68256", label: "2024年12月18日 但阿嬤的孫子會少100元零用錢" },
      { type: "link", content: "https://photos.app.goo.gl/hPouMWugF14khBdt7", label: "2024年12月18日 我給你前boo" },
      { type: "link", content: "https://photos.app.goo.gl/TLCwNXSnXwgpiXPz5", label: "2023年12月18日 每一次的旅行都令人懷念 真希望一年出國十次" },
      { type: "link", content: "https://photos.app.goo.gl/kV3yBpeDckovgsFk6", label: "2023年12月18日 會參加把象鼻岩黏回去" },
      { type: "link", content: "https://photos.app.goo.gl/rrjdGgtCznoWMLbx5", label: "2023年12月18日 為什麼同樣的東西 蝦皮一整組可以這麼便宜啊 左邊後來從蝦皮買整組六隻 加運費才550元 寄來跟右邊比較後 應該是正版無誤 右邊在忠泰買 一個小愛就要370元" },
      { type: "link", content: "https://photos.app.goo.gl/Q47YW84sEfXQ1EVt9", label: "2023年12月18日 終於重現春日部幼稚園的熱鬧XDDD" },
      { type: "link", content: "https://photos.app.goo.gl/FVowKZDMF1z4kzWG7", label: "2023年12月18日 \
        台北會客室 新大阪 一間由裡到外 從裝潢飾品到符合大阪口味的料理 無一不讓我們彷彿出國 \
        我們點了關東煮 蛤蜊烏龍麵 炸雞 章魚丸子跟薄片和牛 以及一杯熱帶調酒 蛤蜊烏龍麵跟薄片和牛是最愛 紮實的用料跟道地的口感太加分 \
        兩個人消費約1500 不算便宜但值得 不論聚餐 約會或單人 有吧台 都適合 非常推薦唷" },
      { type: "link", content: "https://photos.app.goo.gl/nQiaMcN4dCu9vtCBA", label: "2022年12月18日 五跟六都全天值班 週六唯一的小確幸 不過最爽的是在小巨蛋旁邊居然找到路邊停車位 這在台北假日晚餐時間根本百年一遇XDDD" },
      { type: "link", content: "https://photos.app.goo.gl/B8Hd77zE5m96ren67", label: "2021年12月18日 現實社會就是 明明是惡人 卻能被包裝的很漂亮 還一堆擁護者 最後還能得到原諒 明明是善人 努力工作跟付出 即使因為助人而損失也不吭聲 卻被媒體帶風向成惡人" },
      { type: "link", content: "https://photos.app.goo.gl/iLuoTLboSf2a4FRt8", label: "2018年12月18日 熟悉的路口 真的要無時無刻注意安全 以後要小心TT 還好我都開軍艦 嗚嗚" },
      { type: "link", content: "https://photos.app.goo.gl/ArR4BbVpSzP41VTx5", label: "2018年12月18日 \
        上船快滿四個月了 才知道在醫院值班是多美好 才了解在工作找到意義多重要 所以也常在想 醫科七年蹉跎了很多歲月 \
        沒有好好讀書沒有好好學習 總是輸同學很多 現在慢慢起步也許還來得及 利用這兩年補足過去應該培養的知識 好銜接未來回醫院工作" },
      { type: "link", content: "https://photos.app.goo.gl/4j7jdVKnZQsHGsgSA", label: "2018年12月18日 是我搓圓了日子 下鍋 水滾 然後有湯圓吃了" },
      { type: "link", content: "https://photos.app.goo.gl/vBpHPhHcaU6fHoR86", label: "2017年12月18日 謝謝更正 status post是甚麼意思 是接下來的處置嗎 我已經誤會很久了" },
      { type: "link", content: "https://photos.app.goo.gl/xhLeZi9AGGTkHiga9", label: "2017年12月18日 hustag超過30個以上 一般我會tag60個 會被shawdow ban 請問有人知道這怎麼回事嗎 被ban是別人會看不到我照片嗎 每次tag60個都會被ban嗎 求大神解答 感恩" }
    ],
    "19": [
      { type: "link", content: "https://photos.app.goo.gl/MpDCe1uax3MEWsUw5", label: "2025年12月19日 \
        中山區才剛發生隨機砍人 我走回家路上就目睹一個怪人 躺在地上那個 不知為啥攻擊路人的車子跟副駕駛阿姨 \
        被駕駛 右邊那個 壓在地上報警 無差別怪人的攻擊真的越來越多 身邊隨時準備一把武器很重要" },
      { type: "link", content: "https://photos.app.goo.gl/qzJxZMiuLUzyczgN6", label: "2025年12月19日 \
        看到這樣的新聞非常難過 即便台灣已經是世界最安全之一的國家 我們仍無法防範這樣的悲劇 \
        剛走回家路上也直接目睹一個怪人無差別攻擊路上的車 被駕駛下車壓制報警 看到這樣的事情回家我馬上下訂防身武器了 願平安" },
      { type: "link", content: "https://photos.app.goo.gl/9e3G5LVhvfGPpTJq8", label: "2025年12月19日 願封你為2025最後線抗生樹" },
      { type: "link", content: "https://photos.app.goo.gl/EiZCTtVLKGBJXr5J9", label: "2025年12月19日 有了ㄚ" },
      { type: "link", content: "https://photos.app.goo.gl/Eu5gjinjSAbYXi386", label: "2025年12月19日 未來是體操冠軍XD" },
      { type: "link", content: "https://photos.app.goo.gl/5DLEgczauw84jTE8A", label: "2024年12月19日 這是廢話 大醫院醫師被值班+爆量病人+刁民家屬跟低薪壓榨很久了 誰不會沒溫柔 錢來或生活品質來才有溫柔" },
      { type: "link", content: "https://photos.app.goo.gl/mGrNFgBnrzrJvCXJ7", label: "2024年12月19日 查了兩分鐘找不到答案果斷問AI 結果秒答給我 是人腦已經輸給AI還是我偏笨" },
      { type: "link", content: "https://photos.app.goo.gl/QLgK63StE93cQpqL7", label: "2024年12月19日 好累 好想去診所工作就好" },
      { type: "link", content: "https://photos.app.goo.gl/S18dSAM4YUsmLGhA8", label: "2024年12月19日 可愛" },
      { type: "link", content: "https://photos.app.goo.gl/kyYVtt5bc2sF3nAe7", label: "2024年12月19日 我要買" },
      { type: "link", content: "https://photos.app.goo.gl/nj792Kebr3dKCQiR9", label: "2024年12月19日 會信的人真可憐" },
      { type: "link", content: "https://photos.app.goo.gl/r8bt1UiyH7WSxP2M9", label: "2024年12月19日 太難過了 不過眼淚怎麼從嘴角流出來了呢" },
      { type: "link", content: "https://photos.app.goo.gl/xFidREvm5f7TnGWu6", label: "2024年12月19日 我一開始以為是AI" },
      { type: "link", content: "https://photos.app.goo.gl/FGKFMfJpUVce3ANt6", label: "2023年12月19日 感恩CV 讚嘆CV 能吃好料 又能補充貧瘠的知識" },
      { type: "link", content: "https://photos.app.goo.gl/27Whvi6Y9trAa1SR8", label: "2022年12月19日 簡單的看懂圖中血液動力監測儀 ICU血液動力學基礎 剛到ICU對於血液監測器是非常懵懂 其實基礎的數值可以參考以下資料 資料來源為仁愛內科的網路整理 非常實用" },
      { type: "link", content: "https://photos.app.goo.gl/e44MFQkjDuSwn9bw6", label: "2021年12月19日 一個多月沒有修圖了 下班什麼書跟病人都不想看 直接來疊圖 左邊三張合成右邊這張" },
      { type: "link", content: "https://photos.app.goo.gl/EZRNfftsuHTc26tU9", label: "2020年12月19日 高中畢業十年 還要回來高中上週六補課 嗚嗚嗚嗚 國立南科國際實驗高級中學" },
      { type: "link", content: "https://photos.app.goo.gl/zdFanCPH1eyLKXys7", label: "2020年12月19日 下午上體育課 果然都是南部孩子" },
      { type: "link", content: "https://photos.app.goo.gl/7jXLa8kwmNjSs4eo7", label: "2020年12月19日 以前放學前的風景 然後就回家讀書了" },
      { type: "link", content: "https://photos.app.goo.gl/vy9MSs5wZrygM1V36", label: "2020年12月19日 台南天空好美" },
      { type: "link", content: "https://photos.app.goo.gl/A1D38WJEgxS24ok49", label: "2020年12月19日 太開心了 明天晚上再來整理照片" },
      { type: "link", content: "https://photos.app.goo.gl/gnXNtoGdTYh6GALv7", label: "2018年12月19日 感謝學校的愛戴ㄛ" },
      { type: "link", content: "https://photos.app.goo.gl/KgjgKnXC8eBEoymeA", label: "2018年12月19日 短暫的呼吸 短暫的幸福 能充滿精神的運動真的好幸福" },
      { type: "link", content: "https://photos.app.goo.gl/AjGAn6aisEW8DZhi8", label: "2018年12月19日 \
        上帝的瀑布很適合形容這裡 邊界的小村落反而像水壩邊緣 而雲瀑彷彿洩洪一樣 \
        很久沒有修圖跟拍照了 討生活還是比較要緊 當然也遇到瓶頸 感受不到自己的進步 這時候就適合歇息了:)" },
      { type: "link", content: "https://photos.app.goo.gl/pxPdmeBTB3B69mcf8", label: "2017年12月19日 請問大家覺得我照片有哪些改進點呢 請私 小弟跪求狠狠的 老實的 血淋淋的告訴我麻煩不要稱讚 小弟是誠心發問 大家相互交流給意見" },
      { type: "link", content: "https://photos.app.goo.gl/AyKD4CJW6Rvxg4sJ9", label: "2017年12月19日 Go check my new work Check my new pic" }
    ],
    "20": [
      { type: "link", content: "https://photos.app.goo.gl/sU5EpY8hc98X5TME6", label: "2025年12月20日 \
        從醫學角度看這些悲傷的事故 祈願平安 短短的時間 從澳洲的海灘槍手事件 到台灣的清潔員被酒駕衝撞及昨日的無差別攻擊 都是非常震驚跟難過的事情 \
        醫學角度來說 這類創傷性OHCA整體存活率極低 近期醫學期刊的系統性回顧 整體死亡率約96% 也就是存活約4% 而非創傷OHCA整體存活率通常在10%左右 \
        另外創傷OHCA在30天存活率的機率也較低 這表示這些悲劇上演時 即便以現今的醫療科技也難把患者從死神手上搶回來 \
        還有許多民眾的疑問是 當遇到大出血導致的OHCA 原則上先止血與恢復有效循環容量血液 的優先順序通常高於單純CPR \
        CPR的精神是把握時間在無呼吸心跳的患者 確保他的心臟內血液灌流能抵達全身 但出血到休克的OHCA患者 體內的有效容積已經遠遠不夠 CPR能提供的有效灌流非常有限 \
        除了嚴刑峻法跟對於被害人的保障提升以外 想來沒什麼有效預防這些事情的發生 身在治安較好的台灣 我們已經非常幸福 祈願這樣的事情不再發生 傷者早日康復" },
      { type: "link", content: "https://photos.app.goo.gl/CCQKUoFDFKPEjCaN7", label: "2025年12月20日 \
        我在陸戰隊學過奪刀奪槍術 一句話送民眾 都是演的 就算用演的 套好的招式我們也要每天像傻瓜一樣練習才能完美奪刀槍甚至讓對方重心不穩 \
        所以根本沒有用 就算全盛時期的館長面對一個國中小女生拿刀 館長也不一定能全身而退 遇到只有跑 跑不過就是要有防身武器跟他拼" },
      { type: "link", content: "https://photos.app.goo.gl/HZVXdcmdDU18jgok7", label: "2025年12月20日 先止血加壓 源頭要救 但如果沒辦法止血 應該還是馬上CPR" },
      { type: "link", content: "https://photos.app.goo.gl/KAMvc5L2b8Mmemi86", label: "2025年12月20日 打不贏 就算只拿美工刀也打不贏 所以那些奪刀槍都是沒用的 望周知 要跟歹徒對打至少身上要有一件武器 不要赤手空拳" },
      { type: "link", content: "https://photos.app.goo.gl/EfNDXpg8dfJo3wut6", label: "2025年12月20日 那是不是可以推論沒當志願役的根本就是不愛國 一定心裡想著大陸打過來就不抵抗 幫助共匪殺害台灣人 不只是殺人犯更是賣國賊" },
      { type: "link", content: "https://photos.app.goo.gl/RjEzKijf6s4YAK8V6", label: "2025年12月20日 要跟你一起去才有意義啊" },
      { type: "link", content: "https://photos.app.goo.gl/Xa4mYMHnuzZ7pp4WA", label: "2025年12月20日 噁心" },
      { type: "link", content: "https://photos.app.goo.gl/VyMeP6vfEoexz4oV6", label: "2025年12月20日 這是好現象XD" },
      { type: "link", content: "https://photos.app.goo.gl/4TmTETTXMFeyre9k7", label: "2025年12月20日 怎麼那麼棒" },
      { type: "link", content: "https://photos.app.goo.gl/3NhJP51FtXD4kXZp9", label: "2025年12月20日 推" },
      { type: "link", content: "https://photos.app.goo.gl/yZ3g3DLgAMKCAetz8", label: "2025年12月20日 JiaJiaJiou++酒" },
      { type: "link", content: "https://photos.app.goo.gl/rcrD6y3unk984Bj1A", label: "2024年12月20日 我們也只能買幾十條絲瓜Q" },
      { type: "link", content: "https://photos.app.goo.gl/yH3t3nvkEA5oS46BA", label: "2024年12月20日 這個架開旁邊的人是很厲害的招式哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/V55zjbdKQcSvPfWu9", label: "2024年12月20日 幹超愛 好想拍" },
      { type: "link", content: "https://photos.app.goo.gl/RtpCQhq3zj8Eb4ji9", label: "2023年12月20日 男生也很帥XD" },
      { type: "link", content: "https://photos.app.goo.gl/1DzhH7UEhpagZsZv5", label: "2022年12月20日 下禮拜會不會擠爛" },
      { type: "link", content: "https://photos.app.goo.gl/RCcvkkcNkbtfALqZA", label: "2022年12月20日 我比較怕太晚到無法入園 要早點出發" },
      { type: "link", content: "https://photos.app.goo.gl/Kvpi6wquTkaxdonr8", label: "2020年12月20日 究竟是怎樣的高中生會有這樣的作品ㄋ 我想應該是充滿對社會的失望ㄅ" },
      { type: "link", content: "https://photos.app.goo.gl/k18UkveYT6Jnmmc98", label: "2017年12月20日 \
        抱歉抱歉 我今天一定會跟你說 不在台北需要排假的12/31 12/22 23 24 12/9 10 12/3 12/17盡量 \
        平日想值早班0800-2000 12/15 12/18 想值整天12/16 對不起可能有點小複雜 真心麻煩你了萬分感謝" },
      { type: "link", content: "https://photos.app.goo.gl/MXc6YNquh9dB1CLd9", label: "2017年12月20日 \
        昨天半夜跟今天早上都修改與添加家教教材 50頁ppt 另外已經做好重點整理給您帶回家 \
        因為這四次家教發現大家程度差異很大 誠心希望所有人都滿載而歸 每個月固定不接超過五組 因為有實習與家教品質要顧 期待明年了 感謝支持" }
    ],
    "21": [
      { type: "link", content: "https://photos.app.goo.gl/Ac1PhwnVBArAmD1d8", label: "2025年12月21日 \
        醫師建議不要 除非你確定一畢業就去醫美或是選得到眼皮復 律師考慮但也是血汗 下限比醫師低但上限比醫師高 \
        工程師最推 入學門檻最低 但迎合未來趨勢是最賺錢的 20多歲基本上收入就贏同年齡層的醫師很多了 雖然有被裁員風險 但如果不長進被裁員基本上你選前面兩個科系也好不到哪裡 \
        最後推薦一個 牙醫系 錢多事少風險低 最貴的是去上自費課程 但CP吊打前三個選項 前提是要能考上 他是國內目前分數最高的科系 基本上要樣樣滿分才行" },
      { type: "link", content: "https://photos.app.goo.gl/dfjRChzkkV9YoVho8", label: "2025年12月21日 真假 那有請牙醫開示了 我總覺得被健保吃掉的醫療業才是夕陽QQ" },
      { type: "link", content: "https://photos.app.goo.gl/pt9yjkqaibgfojZQ6", label: "2025年12月21日 同理不死刑也沒辦法阻止攻擊事件 更沒辦法遏止 這種可悲影片根本不想點開 降智用的" },
      { type: "link", content: "https://photos.app.goo.gl/1Wa1VL4k5GzV7ZyQ6", label: "2025年12月21日 那萬一那個人不是殺人犯結果醫師當初沒有救 醫護的專業度就是不分人種職業貴賤做到自己能做的治療而已" },
      { type: "link", content: "https://photos.app.goo.gl/jYNZcKheXr7VFUYZ9", label: "2025年12月21日 超羨慕 夢想的人生就是希望可以窩在電腦房裡修圖聽音樂找靈感創作 周圍擺滿公仔 攝影器材跟照片 然後每年有一半的時間都出國拍照 帶回素材再窩回電腦房修圖創作作品 人生真的很不公平啊" },
      { type: "link", content: "https://photos.app.goo.gl/AVKDkNX6KmLZ1stJA", label: "2025年12月21日 \
        回顧這個新聞真的很感動 台身為治安最好的台灣人 應要在能力範圍內保護台灣的和平 等警察來可能都好幾條無辜人命沒了 \
        舉個例子 我今天下午去宜得利 就先想好萬一有暴徒 我等下可以選擇拿鐵鍋防禦 推一長串的推車撞他 拔起附近的玻璃杯盤砸他 \
        沒有帶武器時 一個人去壓制暴徒是很危險的 可是如果在群眾裡 大家有志一同全部抄起手邊能用的器具一起攻擊暴徒 打到他頭破血流失去行動能力 這才是最美的風景 \
        赤手空拳的就快遠離 負責疏散 大喊跟報警 不能有害人之心但要有防人之心 出外轉換場所都要設想好當下遇到危難 該逃哪還是可以防禦都要想好 \
        法律跟警力都有限制 只有人人都像身體內的白細胞 看到病毒就集合猛攻 而身為檢察官法官應該有良心義務赦免這些人 \
        面對惡徒的暴力 人民應該用更暴力更大的拳頭讓他倒下 才能減少他持續傷害無辜的受害者 台灣的治安才能更好" },
      { type: "link", content: "https://photos.app.goo.gl/aCiPV9aVhMwGqKjr7", label: "2025年12月21日 對 但是他在眾目睽睽跑進誠品時 群眾真的可以從各處拿東西砸他 然後拿長棒物戳他 如果不是他跑到樓頂要跳 他當下也可能在各樓層躲藏殺人 人人預設最壞狀況隨時做好準備遠比一團亂還更好" },
      { type: "link", content: "https://photos.app.goo.gl/ghimYkfcn669JNVK6", label: "2025年12月21日 甜湯圓只加花生才是最好吃的" },
      { type: "link", content: "https://photos.app.goo.gl/Jyz2ztkA3xKeB7sh7", label: "2025年12月21日 不行" },
      { type: "link", content: "https://photos.app.goo.gl/Qk3AVHUAqw9U7T5c6", label: "2025年12月21日 內科醫師來打卡" },
      { type: "link", content: "https://photos.app.goo.gl/QM86yYAqv4pc4tqZ7", label: "2025年12月21日 可是這樣會感情不好" },
      { type: "link", content: "https://photos.app.goo.gl/kRjm7tJcjVxz65zV8", label: "2024年12月21日 呵 難怪某週刊永遠都在替民進黨教訓別人" },
      { type: "link", content: "https://photos.app.goo.gl/C82ajVSkx8cfvMmX6", label: "2024年12月21日 這些北京人都長得像低能兒 難怪會信台灣是中國領土這套" },
      { type: "link", content: "https://photos.app.goo.gl/PDGg1h9DMgx89Ro46", label: "2024年12月21日 這種社會底層猴不直接槍斃台灣不會好" },
      { type: "link", content: "https://photos.app.goo.gl/RTzmEWsShK2FyUEo9", label: "2024年12月21日 看著自己收藏很多的超美攝影景點 卻遲遲沒有足夠的假期可以飛去拍照 跟朋友們聊到這些點時 內心一直充滿空虛跟難過 唉 能還我一個正常的人生嗎" },
      { type: "link", content: "https://photos.app.goo.gl/WfvGWj8udUihtihW8", label: "2024年12月21日 歡迎我們的攝影比賽冠軍 是冠軍才有資格讓我們等到吃飽了才來唷 刺青大叔的料理屋" },
      { type: "link", content: "https://photos.app.goo.gl/7uA17RRYqnV4aPEJA", label: "2024年12月21日 意外在Donki找到當年超愛喝的日本奶茶的女子 回想起來2023根本沒出國 真的好想跟正常工作一樣出國" },
      { type: "link", content: "https://photos.app.goo.gl/5FF36HKauP1UZWbC8", label: "2024年12月21日 好好吃好好喝" },
      { type: "link", content: "https://photos.app.goo.gl/d3Zy5WwFA7tZV6Rx9", label: "2024年12月21日 傻眼欸這個" },
      { type: "link", content: "https://photos.app.goo.gl/SBVDPaXFA4Ci3eRR6", label: "2024年12月21日 不行" },
      { type: "link", content: "https://photos.app.goo.gl/PdWWjiip2w5BBAmy5", label: "2024年12月21日 超漂亮" },
      { type: "link", content: "https://photos.app.goo.gl/1DBMbHrCEgyoVYF67", label: "2024年12月21日 好可愛" },
      { type: "link", content: "https://photos.app.goo.gl/bMHd3AhT42WUrQDR8", label: "2024年12月21日 這是不對的行為" },
      { type: "link", content: "https://photos.app.goo.gl/Y2XrqLznNwDmHpju6", label: "2024年12月21日 對啊" },
      { type: "link", content: "https://photos.app.goo.gl/XHKVaXcGfgrVxGs78", label: "2023年12月21日 \
        今天打了兩小時DL 以失敗告終 病人入針後都會流血 但GUIDEWIRE就是進去到2-3格就卡住 推掉後血還是可以留 真奇怪 我還為此換了第二套新的DL \
        經過提醒 有可能入針太垂直 GUIDEWIRE直接頂到血管壁 真的沒想過會這樣QQ" },
      { type: "link", content: "https://photos.app.goo.gl/f5rG9kYzB1ztiNJR8", label: "2022年12月21日 \
        從每週一跑 變成每月一跑 上週瘋狂上班 中間一度冷顫跟狂咳 我都覺得自己確診了但三次快篩都陰性 只好撐著把班上完 \
        這個月第一次跑步 雖然還有咳嗽好幾度慢下來 但還是跑完9公里 以前都四分速 現在只能用五分速這種比較不喘的速度完成 真的老了退步了" },
      { type: "link", content: "https://photos.app.goo.gl/9upggfVWRv9BC2DSA", label: "2021年12月21日 這個月我抱著輕鬆愉悅的心情來化療病房 原本想像著當個病歷機器人 有閒看點書 但沒想到第一週後 一直不斷出現很trouble的case 一個好不容易出院 另一個就出現critical 拜託真的不想轉病人進icu 全部都好好入院出院好嗎" },
      { type: "link", content: "https://photos.app.goo.gl/AQ1Qh7t1qM38SrfB9", label: "2021年12月21日 這絕對長命百歲XD" },
      { type: "link", content: "https://photos.app.goo.gl/Wouua1aA1rNPS46m7", label: "2020年12月21日 這樣可以做調酒嗎 真4太可愛了 謝謝" },
      { type: "link", content: "https://photos.app.goo.gl/feuX7b3wFrrVqRz66", label: "2020年12月21日 我不確定酒需不需要冰起來" },
      { type: "link", content: "https://photos.app.goo.gl/AbYocubSJDmAhZcR8", label: "2020年12月21日 沒想到會有用到的一天" },
      { type: "link", content: "https://photos.app.goo.gl/wq5DVJi5ZvMEyepHA", label: "2020年12月21日 半夜洗杯子 明天還要早起" },
      { type: "link", content: "https://photos.app.goo.gl/pBLQLSzxFfKwL3xW8", label: "2020年12月21日 又洗好一群杯子ㄌ" },
      { type: "link", content: "https://photos.app.goo.gl/HX8RfRekKfGcKy1S9", label: "2020年12月21日 超可愛聖誕禮物 腳底會發光" },
      { type: "link", content: "https://photos.app.goo.gl/sdFUq8XsNswi9BWf6", label: "2020年12月21日 \
        十年一會 偷偷側拍一張 保留這個難得的時刻 也是我特別喜歡的角度 \
        理由很單純 第一是我不太會寫文字 所以用照片記得當下的夕陽跟大家的歡笑談天 第二是南部的天空很特別 冬天會帶有乾燥卻空寂的感覺 整個就很涼很舒適 \
        第三是側拍呈現最自然的樣子 畫面很像當年畢業時 大家各自成群離校 有各自不同的未來 \
        十年過去了 國高中我很封閉自己 可能因為家庭教育跟自己內向 所以回憶起來除了讀書補習 只剩跑步打球 \
        沒有逛街 沒有約會 沒有電影 沒有唱歌 沒有同學間的八卦跟小秘密 沒有外宿過家裡以外的地方 好像沒有特別值得回憶的事情 除了高伯文全校第一支ihpone被摔爛以外XD \
        十年過來了 雖然很充滿無趣跟尷尬的過去不堪回首 但很開心看到一群28歲的人們 像當年18歲一樣玩在一起 即使有工作 也特別抽空回來XD \
        很感謝特別舉辦的同學 鄭志宇 陳昱翔 林景毅 沈軒宇 也特別感謝老師們 包容我當初自以為聰明 沒有認真上過一堂課 結果上大學了才被同學電得狗吃屎 \
        大開眼界見識真正的資優天才外 還學到做人的道理 是比書中更寶貴的知識 \
        我沒有後悔這個選擇 見證從稻田蓋成大樓 也打破我過去被教育的觀念 原來讀書並不是有錢的唯一途徑 好多同學都有多彩多姿或多金的人生 真是替他們高興 \
        最後希望再回來 幫學校拍更多漂亮的照片 南科實中間圍是沒有高建築也沒有車水馬龍 夕陽的光線能完美的映照在這片土地 雖然邊緣 但是美好^_^" },
      { type: "link", content: "https://photos.app.goo.gl/VXWkPCbwQBxvso8M6", label: "2017年12月21日 \
        S/p tracheostomy沒有預計要做什麼procedure的意思嗎 那就是我用法錯誤 不過問了一下同學 同學是說s/p後面接的是 解決s/p前面所述問題所使用的方法 \
        所以我是要表達用氣切來解決前面病人咳痰能力弱的問題 不過我不確定的是 他有沒有已經做了的意涵 看來好像有 \
        那一段是內文寫的 不是我說的 好 我再去改病歷 以後不會用這種用法" },
      { type: "link", content: "https://photos.app.goo.gl/rAmHBKTv8wecbkKf9", label: "2017年12月21日 他x的這真的是內湖附近最難走 最難找 最噁心的拍攝點 沒有之一 不要一個人來" },
      { type: "link", content: "https://photos.app.goo.gl/9Rccfv5YYf8bSLkG7", label: "2017年12月21日 Hey Check my new pic I use new size of pics now 本日成果 歡迎發摟" }
    ],
    "22": [
      { type: "link", content: "https://photos.app.goo.gl/L1Juvr7msJRkd8Jv5", label: "2025年12月22日 感謝黃國昌委員 不對的事情就是不對 現在的政治就是人治的 根本不完全是依據法律的公平正義 轉發一篇非常清楚的文章" },
      { type: "link", content: "https://photos.app.goo.gl/viAUMfXoCpyFkQFA9", label: "2025年12月22日 ?" },
      { type: "link", content: "https://photos.app.goo.gl/vbwCTwepwCp19EYy5", label: "2025年12月22日 超好喝 ㄔㄠㄌㄜㄏㄜ" },
      { type: "link", content: "https://photos.app.goo.gl/sSrhqNc9bGdLEskg8", label: "2025年12月22日 好der" },
      { type: "link", content: "https://photos.app.goo.gl/h1qccYX1w2FPV6789", label: "2025年12月22日 可以趁這bug刷世界紀錄欸" },
      { type: "link", content: "https://photos.app.goo.gl/YSTE434vPYxKrpxZ6", label: "2025年12月22日 雖然這是學日本的影片但很好笑哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/pHtYRnBzQCbLQyyX9", label: "2025年12月22日 我們房間也是" },
      { type: "link", content: "https://photos.app.goo.gl/qmqNP5H5GuHwe7ZS6", label: "2024年12月22日 有大大知道MAC M1要怎麼把硬碟移除後會一直跳的這個通知刪除取消嗎 試了很多方式都沒辦法 看了真的很煩" },
      { type: "link", content: "https://photos.app.goo.gl/8hySBHGV4QMU1dfk9", label: "2024年12月22日 沒想到冬天也可以拍出這樣的效果" },
      { type: "link", content: "https://photos.app.goo.gl/xkQ9PLdWPQVJEf3B8", label: "2024年12月22日 他已經被嚇到呆掉了" },
      { type: "link", content: "https://photos.app.goo.gl/P8rECZETNPyy9rRaA", label: "2024年12月22日 可惡 我看到桂冠也以為是湯圓" },
      { type: "link", content: "https://photos.app.goo.gl/KHYXcSWJgL2Vyehr7", label: "2023年12月22日 0900-1400 double lumen*2 Cvc*1 Lumbar puncture*1 接急診病人*1 安寧撤管*1 Sheath移除*1 病房交班*1 應該是今年最充實的一天 感謝俊麟學弟 護理師跟NP在旁幫忙 運氣好都一針" },
      { type: "link", content: "https://photos.app.goo.gl/1iaLjaNUHa48QHHE9", label: "2022年12月22日 \
        超級好吃 宜蘭 羅東 冬山金珠蔥油餅 羅東店 羅東最好吃的蔥油餅之一 特點是外皮非常酥脆 內層Q彈 配上甜辣醬 蔥跟蛋 真的是超級罪惡的組合 也讓我越吃越餓 \
        另外紅茶超級好喝 很傳統味 茶味 只是很快就賣光了 未必每次買都有 這家無可挑剔 口感紮實 價格便宜 加蛋加蔥才40元 有來羅東務必買來爽吃一下" },
      { type: "link", content: "https://photos.app.goo.gl/5EuGeZ8BY8cs3Avt5", label: "2022年12月22日 \
        又發現一家三顆星的超好吃燒烤 真心不騙 宜蘭路邊烤肉wildbbq羅東店 這是羅東最好吃的串燒店嗎 不只 他可以說是台灣前三名好吃的串燒店了 \
        實惠的價格 超多種類的燒烤與多樣化的調味 出餐速度也滿快 真的超級好吃 雖然拿了很多支但完全沒意會到自己已經嗑光光 \
        特別的是 我們還有點梅酒 乾拌麵及蛤蜊湯 梅酒很配 乾拌麵45元份量跟嚼勁都一流的 蛤蜊湯配合九層塔 有別於一般的薑絲風味 都非常非常搭配燒烤 \
        這樣不會太甜太燒焦的燒烤 入口難停 也很推薦大家來品嚐" },
      { type: "link", content: "https://photos.app.goo.gl/3oJ6FriChsLtF9vS6", label: "2022年12月22日 之前去賊仔澳一直在找這個角度 網路圖片她站的地方 但每次都失敗 有朋友知道怎麼去嗎 跪謝 南方澳豆腐岬" },
      { type: "link", content: "https://photos.app.goo.gl/ZEDjUy66sBAX1k9VA", label: "2020年12月22日 醫學之母內科真的是大海 做了50頁報告還只是書上幾小段的內容 光消化道出血章節就看不完 被教科書知識淹死" },
      { type: "link", content: "https://photos.app.goo.gl/KKC9Qrge25KDdBnJ9", label: "2020年12月22日 \
        求眾cv高手請益 Ekg old infarction跟new MI應該怎麼分呢 這個病人有COPD 20年前做過心臟導管放支架 之後沒有再心肌梗塞 \
        今晚HR快 80-90變140但之後自己恢復 我做了這張心電圖 沒有更之前的可以比較 想知道 Old infarction在心電圖上是呈現ST depression 對嗎 \
        沒有任何症狀的心跳突然快 基本上我都觀察而已 面對家屬的話 大家都怎麼解釋 虎爛 過去 所以我有問症狀 目前是都沒症狀 先觀察" },
      { type: "link", content: "https://photos.app.goo.gl/juyyZsj9uKK3XoLy6", label: "2018年12月22日 海軍體育服好醜 原來這就是認真的 跟狹小的軍艦醫務室" },
      { type: "link", content: "https://photos.app.goo.gl/xfJH85bShBH9jUHW6", label: "2017年12月22日 再次六天連假來讀書 國立暨南國際大學圖書館NCNULIBRARY" },
      { type: "link", content: "https://photos.app.goo.gl/MNoFWgNVDEcWtipC8", label: "2017年12月22日 來當衣架" },
      { type: "link", content: "https://photos.app.goo.gl/t4Le3cpSR3XphBKF8", label: "2017年12月22日 2.7k Thank you all I will keep on photography" }
    ],
    "23": [
      { type: "link", content: "https://photos.app.goo.gl/eWh6MT4rCsQvn19o8", label: "2025年12月23日 如果今天柯文哲跟支持者說你開刀兩小時開到三小時 讓家屬都願意支持他為止 網路風向又會如何呢><" },
      { type: "link", content: "https://photos.app.goo.gl/iQUJZ19KKySifg5M8", label: "2025年12月23日 王ㄟ登這個完全沒聽過的藝人難怪完全沒聽過 會紅的都比他會臨場發揮XD" },
      { type: "link", content: "https://photos.app.goo.gl/i3xckiWWP6XaofPHA", label: "2025年12月23日 Rotate完就沒有PM這事情 每天睡不到五小時好幾年" },
      { type: "link", content: "https://photos.app.goo.gl/rafzxG636Gv3RixE7", label: "2025年12月23日 沒錯 這種連帶動氣氛都不會的藝人封殺剛好而已" },
      { type: "link", content: "https://photos.app.goo.gl/YBtijp9VvGFoEPaQ6", label: "2025年12月23日 他媽垃圾司法 未成年人犯重罪就算有教化可能 如果都殺人了也不能給他們教化 法律一樣要殺了他們才是公平正義" },
      { type: "link", content: "https://photos.app.goo.gl/LAtW3kGZBG3rJa4s8", label: "2025年12月23日 當然不方便表示意見啊 因為如果憑良心講話就會違背黨意啊" },
      { type: "link", content: "https://photos.app.goo.gl/NiGwekKvvhFWwn217", label: "2025年12月23日 這是真的嗎" },
      { type: "link", content: "https://photos.app.goo.gl/sLaZt6tBZRtd9PLy5", label: "2025年12月23日 該買起來了" },
      { type: "link", content: "https://photos.app.goo.gl/SXguARuEqeba7ZJT9", label: "2025年12月23日 好可愛的互動 果然家裡要有小蟑螂才會增加歡樂" },
      { type: "link", content: "https://photos.app.goo.gl/eaUzQgYJ9o3oPYCX6", label: "2024年12月23日 你的腦子看起來也可能是腫瘤 建議直接切除 以免流出繁殖" },
      { type: "link", content: "https://photos.app.goo.gl/k35GR2btEBnusLah8", label: "2024年12月23日 台灣沒有對你們這些成天造謠 講錯誤醫學資訊的人開罰 真是天大的仁慈" },
      { type: "link", content: "https://photos.app.goo.gl/axHSqRirVt4HmThq9", label: "2024年12月23日 你這種害人的言論還肖想自由哦 呵呵 等著報應吧" },
      { type: "link", content: "https://photos.app.goo.gl/ty6Zfrf8Zf4ytB2v9", label: "2024年12月23日 值班完休息了一下 完成每個禮拜最低限度的有氧 以前都能4分速初頭 現在五分速才覺得舒服" },
      { type: "link", content: "https://photos.app.goo.gl/XtVH3AVKKJJfZBDMA", label: "2024年12月23日 醫師多數也是1-2.5個月而已 醫師比工程師累多了 更不平衡" },
      { type: "link", content: "https://photos.app.goo.gl/E3cXqfqGyzYLuKUv6", label: "2024年12月23日 跟小葵一樣哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/6iyQnCUsgEcGqn4o7", label: "2024年12月23日 他在想自己是不是做錯事" },
      { type: "link", content: "https://photos.app.goo.gl/fYUeDUVzLgZNbMxw7", label: "2024年12月23日 暈什麼暈 那個那麼簡單 而且平常我也會幫你抬槓" },
      { type: "link", content: "https://photos.app.goo.gl/qrViEAcSFtayVfep7", label: "2024年12月23日 冬天的溫暖一角" },
      { type: "link", content: "https://photos.app.goo.gl/Hr5HpQMBCBM1LXbg9", label: "2024年12月23日 我也要這個教練哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/f17QC3tHMwyZEYoV8", label: "2024年12月23日 對啊" },
      { type: "link", content: "https://photos.app.goo.gl/GKkLtSNb6pNmEhen9", label: "2024年12月23日 這是什麼梗 原來如此 囧了 謝謝學長QQ" },
      { type: "link", content: "https://photos.app.goo.gl/5xUpo7DwpLHzSr2q7", label: "2024年12月23日 好可愛的超級小老鼠" },
      { type: "link", content: "https://photos.app.goo.gl/W2ParcXhwNCJSpUQA", label: "2022年12月23日 \
        宜蘭 究醬石頭火鍋 冬天吃到這麼特別的石頭火鍋 平價但不馬虎真的很暖心 很推 \
        隱藏在羅東的非連鎖石頭火鍋 一試成主顧 我們點了梅花豬及培根牛 肉品都是先炒香後才送來 菜料也很豐富 \
        重點是鍋物煮完都有淡淡的碳燒味 非常特別 寬敞乾淨的用餐環境 不收服務費但服務態度十足 價格便宜但給料不馬虎 真的該推" },
      { type: "link", content: "https://photos.app.goo.gl/LyQxkV2CXegGnNE39", label: "2022年12月23日 拍照拍到大雲海 不過只能用看的哈哈 太平山見晴懷古步道" },
      { type: "link", content: "https://photos.app.goo.gl/ARmT16ok33Ynw4386", label: "2022年12月23日 終於發文了 最後一張好看" },
      { type: "link", content: "https://photos.app.goo.gl/AvnYPaixPxFoHjYWA", label: "2020年12月23日 \
        在美國住呼吸照護加護病房醫療費需幾百萬 在台灣住半個月只要70萬 萬一健保不給付 病人出院又賴皮不付錢拖欠 \
        醫院虧損會很大 也會間接從醫護人員的薪水獎金扣除 目前看起來是這樣 如果說錯了請告訴我 這樣的事情我猜每天都在發生 \
        希望推崇看病先付錢制度 醫療不是服務業 生病大多是很可憐很無辜的 但每天賣命賺錢的醫護人員更無辜 我們也是養家餬口很辛苦的生活 聽到太多病人活蹦亂跳後賴皮不付錢的情況了" },
      { type: "link", content: "https://photos.app.goo.gl/gm95W49bTHVEgies5", label: "2020年12月23日 三個禮拜沒跑室外 可惡的台北下雨天 前天買了300元的迪卡儂跑步保暖上衣 今天出門跑 邊跑邊閃水坑 但開箱覺得很實用 便宜好穿保暖" },
      { type: "link", content: "https://photos.app.goo.gl/RWAo88NPmCb9WPzZ6", label: "2019年12月23日 \
        2019年尾 少了衝勁跟自我 多了反省跟責任感 \
        比起學校生活 踏入相對辛苦的基層部隊 一切從頭開始學習 多了很多的拘束與規範 也多了更多的自我要求 \
        首先是領導職的不容易 為了上面長官要求 必須要讓下面的人願意跟你一起付出 \
        另一方面得體的說話 應對都再一次地有所學習 從同學身上 看到他們的成熟與得體 同儕相處如同機器的齒輪 \
        謙卑與大器的心態則是潤滑 要讓自己也能如此成長才是 正因為無法離群索居 正因為求之於人之前得先付出 \
        所以如何處事與溝通 調適壓力格外重要 才能在職場這危險的森林中有一塊棲地 也謝謝女友 不管再怎麼難聽都願意對我講真話 讓我可以即時的改正自己 \
        2020不求一丁點絢麗奪目 只求工作與感情平穩健康 平順低調完成幾個人生決定就好 苗栗鯉魚潭水庫" },
      { type: "link", content: "https://photos.app.goo.gl/gcgzbQP2JmLjuTEH7", label: "2017年12月23日 燈燈燈 我先偷發如果晚點刪除表示我被她殺惹 還好還活著以後繼續發醜照" },
      { type: "link", content: "https://photos.app.goo.gl/fm8QgEF68vWmMV42A", label: "2017年12月23日 年末最開心的一餐 成功被店員馬力歐完敗 黑白切 屋馬" },
      { type: "link", content: "https://photos.app.goo.gl/7mmac56CMhG1Lzar6", label: "2017年12月23日 請問有朋友知道 台中哪裡有像這樣一整面的紅燈籠可以拍嗎 小弟跪謝" },
      { type: "link", content: "https://photos.app.goo.gl/kLQP2PX9wY6phFWb6", label: "2017年12月23日 每次都退燒了我才來拍 柳川藍帶水岸" },
      { type: "link", content: "https://photos.app.goo.gl/Tb52XGU62mTWGqYw9", label: "2017年12月23日 I got fire from the sky 如果說台灣離島的最後一塊淨土 那一定要算蘭嶼一份 由衷希望他的自然與美能被保存 永不犧牲在商業利益之下 無論任何理由" },
      { type: "link", content: "https://photos.app.goo.gl/iyivEdMvJiDJx9Jk8", label: "2016年12月23日 久違的婚攝 這次代表南下拍攝 謝謝夥伴於政的火力支援 也謝謝學長姐邀請拍攝 一個熱血沸騰囉 南下出發" }
    ],
    "24": [
      { type: "link", content: "https://photos.app.goo.gl/2Aqrz5fRGtojWG6T7", label: "2025年12月24日 他忘了每阻一個免死的死刑犯 就多製造一個以上冤死的被害人 廢死真是智障無誤" },
      { type: "link", content: "https://photos.app.goo.gl/8FnEWvxnaFLcFZ266", label: "2025年12月24日 就是因為年初到現在才執行一次 顯然完全不夠啊XD" },
      { type: "link", content: "https://photos.app.goo.gl/T69gYpV8qpUdboM57", label: "2025年12月24日 他把自己佈置成聖誕樹底下的禮物" },
      { type: "link", content: "https://photos.app.goo.gl/e4F6VsNq8FD9rPAx9", label: "2025年12月24日 聖誕節當天不就要帶你去吃了嗎" },
      { type: "link", content: "https://photos.app.goo.gl/iYgniF9wLKaydnmh8", label: "2024年12月24日 根本少之又少 多數醫師月收入15-25之間而已" },
      { type: "link", content: "https://photos.app.goo.gl/eB2Zm3hmsj17YRjo7", label: "2024年12月24日 以醫師這個職業取得的難度跟工作本身救命的貢獻 根本太少了" },
      { type: "link", content: "https://photos.app.goo.gl/tbeVGPd23VgPP77A8", label: "2024年12月24日 好文大推 希望優秀的高中生清醒一點" },
      { type: "link", content: "https://photos.app.goo.gl/WGBtpQjicBAGwNXL7", label: "2024年12月24日 做效果而已還真有人會信 這種事只有chatgpt做得到好嗎" },
      { type: "link", content: "https://photos.app.goo.gl/vS3SLFhmBbNfCRUf7", label: "2024年12月24日 太強 我沒辦法" },
      { type: "link", content: "https://photos.app.goo.gl/82PVtmPWYDBeDhKT8", label: "2024年12月24日 算起來醫療業真的很可悲 唉" },
      { type: "link", content: "https://photos.app.goo.gl/2fs8QpVj5zEVrGzz9", label: "2024年12月24日 我已經拿回宿舍放了" },
      { type: "link", content: "https://photos.app.goo.gl/wsJZRJjzUqYneCpM6", label: "2023年12月24日 美到有扯 帶攝影團到世界各地拍風景真是最幸福的職業" },
      { type: "link", content: "https://photos.app.goo.gl/HufPnzJkFe9LXqrJ6", label: "2023年12月24日 如果已經過了十年 我依舊喜歡這個工作 那代表有機會堅持一輩子吧 婚攝很累 但還不錯" },
      { type: "link", content: "https://photos.app.goo.gl/47HipU85e9rgK1Xm6", label: "2023年12月24日 謝謝老師紀錄哈哈 太難為情了" },
      { type: "link", content: "https://photos.app.goo.gl/VAsQRxy1DzFKr9Xq8", label: "2023年12月24日 今天又是婚攝日 擔任小小助手" },
      { type: "link", content: "https://photos.app.goo.gl/KrKXvF2GkmmKx9h17", label: "2023年12月24日 謝謝TAIPEITRAVELS分享及邀請協同作者" },
      { type: "link", content: "https://photos.app.goo.gl/z1jhijYBbSXTXyeB6", label: "2022年12月24日 \
        宜蘭 正好鮮肉小籠包 五結店 這家我們整整等了40分鐘 幸好旁邊有專屬停車位 可以讓我們安心等 \
        10顆90元相對台北是很便宜的 但比大多小籠包還大一點 皮超薄肉超多 重點有三個 \
        第一 沒肥肉 第二 三星蔥非常香 第三 皮薄但居然不隨便破掉 完美的把肉蔥跟美味的湯汁送入口中 \
        最後 奶茶跟酸辣湯都很讚 如果你是願意等的人 就很推薦來吃看看" },
      { type: "link", content: "https://photos.app.goo.gl/Re7kwUayRQAxHZAn6", label: "2022年12月24日 準備收假 居然有聖誕禮物 掃掉又要回去醫院上班的爛心情了" },
      { type: "link", content: "https://photos.app.goo.gl/wWDJBk8VkWJVQedX6", label: "2021年12月24日 \
        值班的時候一個印尼看護很緊張的跑來叫我 嘴裡一直唸阿公 眼睛 張開 很嚴重 怎麼辦 \
        聽都聽不懂 跟著跑過去看 原來是阿公床頭上面的燈太亮了無法調小啊" },
      { type: "link", content: "https://photos.app.goo.gl/FT5P3qb1xJgfc3368", label: "2019年12月24日 太好了你終於又亮晶晶" },
      { type: "link", content: "https://photos.app.goo.gl/ocengVBZnhB42rDh8", label: "2018年12月24日 好棒啊 能參加這活動羨慕了 等下中午就要出海了 明年有時間可以參加看看" },
      { type: "link", content: "https://photos.app.goo.gl/dB9NB5TKMEUkgfpv8", label: "2018年12月24日 安安醫務士想爽跨年請假又不說 今天我才知道跨年沒人值班 結果催他快一天了還不跟我討論怎麼排假 該怎麼辦 爛" },
      { type: "link", content: "https://photos.app.goo.gl/cFpShojNqEx5fcyc8", label: "2018年12月24日 培養應酬文化" },
      { type: "link", content: "https://photos.app.goo.gl/X1w4gephQnyUaNFk6", label: "2018年12月24日 \
        聖誕快樂 不意外的今年無法一起慶祝聖誕跟平安夜 所以拿去年的照片充數 也因此我們提早交換禮物 卡片就不說了畢竟有人懶得寫 \
        謝謝你的圍巾 謝謝我們能走過一年多然後充滿自信的往下走 在部隊的一切 副長曾說還沒戰爭以前我們都不算軍人 只是來工作的 \
        因為是工作 最重要的是營造好的工作環境 當然感謝老天給我一個充滿好長官的環境 讓我能接受許多好的教誨 改變對工作的態度 培養負責的心態 這是老天爺的聖誕禮物吧 \
        最後希望能撐過辛苦的專題跟報告 一起好好成長 也希望自己未來多點能耐 不被艱困的工作打敗 才是對不公平生活的最大報復 祝大家聖誕快樂" },
      { type: "link", content: "https://photos.app.goo.gl/NajCaFsRtSqwYxSY9", label: "2018年12月24日 Merry Christmas to my dear and all my friends:)" }
    ],
    "25": [
      { type: "link", content: "https://photos.app.goo.gl/bDWpCUxSWinNuP247", label: "2025年12月25日 光是不願意三讀為軍人加薪 就根本足見不是真心愛台灣" },
      { type: "link", content: "https://photos.app.goo.gl/DPDqKTh1qRGYmyhV6", label: "2025年12月25日 說得對極了 不要去當勇者 每個人顧好自己就好 能跑就跑 但準備武器如果危及性命跑不了至少也能自救 謝謝台灣的法律給我們上一課" },
      { type: "link", content: "https://photos.app.goo.gl/PPKiFcLNaXLmSvJb7", label: "2025年12月25日 你可以不要住院啊 誰強迫你住院了" },
      { type: "link", content: "https://photos.app.goo.gl/VqZ3cDkvfQiA6oPy8", label: "2025年12月25日 好熱鬧的鐵板燒開場 充滿聖誕節的鐵板燒" },
      { type: "link", content: "https://photos.app.goo.gl/PRYK5NyG6EgQxFBb9", label: "2025年12月25日 他有他的優點 我也有我的優點他無法做到的~" },
      { type: "link", content: "https://photos.app.goo.gl/KzQkvBUMR7CFLH6D6", label: "2023年12月25日 \
        徵求攝影師有付費 三總腎臟內科徵求113/1/21週日 有基礎攝影能力的學弟妹一名 有自己相機 拍攝JPG檔即可 \
        內容餐會紀錄 一樣會供餐給你 待遇會有數千塊台幣 聯可自行聯絡腎臟內科秘書或私訊我 當天交通可自行前往或聯絡秘書共乘 \
        目前有一名學弟幫忙了 後面還有需求會一一回覆已私訊我的學弟" },
      { type: "link", content: "https://photos.app.goo.gl/nxiBbTS2Hrej5Y4Z6", label: "2023年12月25日 \
        這個月mi2真的好苦 病人進出超快超多 病情各種多樣化 從外科到neu到hem到ria到met到cv到GI爆血到ARDS都可以遇到 \
        procedure每個禮拜都可以複習到cvc double lumen lumbar puncture 困難a line連發 sono找不到a跟皮超腫的 沒有摸到pulse好幾個 也很多個 \
        各種洗腎洗PE 各種意識不清找不到原因 本科病人可以從0800看到凌晨看不完 然後人力不足跟好幾次檢查 分好幾次胸水CSF" },
      { type: "link", content: "https://photos.app.goo.gl/f8suKSkMsQa8NUox5", label: "2023年12月25日 真的很厲害 每天上班值班唯一的小確幸" },
      { type: "link", content: "https://photos.app.goo.gl/AjDoRLtna7XKQJNA8", label: "2022年12月25日 \
        大自然的愛心之眼 大自然的愛心 也太可愛 愛心之眼 聖誕節 也是一個感恩的節日 \
        謝謝陪我走過許多困難的時候 雖然我常自我懷疑 為何身不由己的日子總是多過能喘口氣的日子 但正因為妳的包容 才能承受我內心的負面漩渦 \
        超過五個年頭 說長也不長 但能安於打拼工作的日常 身為全靠彼此努力工作來支撐自己的我們也是不容易 \
        這是我第一個發現的愛心之眼 在森林深處 被愛心型樹枝圍繞著 超級特別 今天我想表達感恩 也祝福各位朋友們 聖誕佳節愉快 平安健康" },
      { type: "link", content: "https://photos.app.goo.gl/fQbBuWuokwvwUGDT6", label: "2022年12月25日 \
        今年的聖誕節 我們自己亂搞一通 當自創料理大廚 我負責當車手 洗碗跟巔峰賽爬分選手 \
        我們買ezmeat的牛鴨羊排 costco的生食級干貝 carrefourtaiwan的紅酒 pxmart的一堆配菜跟調味 85cafe的奶茶 聽pezcrown_taiwan音響的聖誕歌 真是太好玩了" },
      { type: "link", content: "https://photos.app.goo.gl/RATkgTfC7HJtFHEd9", label: "2021年12月25日 開始吃鍋 明天又要值班 這禮拜醒著的時候幾乎在醫院 神來一鍋精緻鴛鴦火鍋" },
      { type: "link", content: "https://photos.app.goo.gl/3rV4BkMoHNtf49Ey6", label: "2021年12月25日 祝大家聖誕節快樂 12月是我目前為止最累的一個月 幾乎清醒的時候都在醫院工作 每天睡四個小時的生活大概四個月了 希望明年能有點時間更新作品" },
      { type: "link", content: "https://photos.app.goo.gl/1fDQ6ikz8DRW14ba7", label: "2020年12月25日 來開一下眼界 有錢人真的很有錢 真的 只是二樓廚房在床旁邊超怪xd" },
      { type: "link", content: "https://photos.app.goo.gl/WcsigQXAJYDrZisv6", label: "2020年12月25日 聖誕節隔天值班 跨年前後各一天都要值班的可憐人就是我啦 第一次水煮蛋 應該照字面意思直接丟進去水煮就好吧" },
      { type: "link", content: "https://photos.app.goo.gl/2ck8ovJNvaLicPkq7", label: "2019年12月25日 聖誕快樂 畢業快樂" },
      { type: "link", content: "https://photos.app.goo.gl/uQgh1w5kp1CSdgPv6", label: "2018年12月25日 聖誕流星雨 預祝大家新年快樂 今年結束以前大概把舊照發光了 但也沒有新照片 真是新作品拍不進來 舊作品一直出去 粉專照片荒QQ" },
      { type: "link", content: "https://photos.app.goo.gl/cdmy3DXUoEXx98k78", label: "2017年12月25日 聖誕快樂 妳是我2017年最大的幸運 不管現在或未來 感謝妳 現在或即將XD 包容我很多 希望未來繼續努力 一起加油" }
    ],
    "26": [      
      { type: "link", content: "https://photos.app.goo.gl/ZR5YwsajJFoHG7FJA", label: "2025年12月26日 芯向祖國沒錯啊 我們雖然都討厭民進黨 但我們祖國都是中華民國啊" },
      { type: "link", content: "https://photos.app.goo.gl/6uWvNGc7ymiZzvud6", label: "2025年12月26日 全力支持 超讚的示範 身為父母親的人在小孩遇害後 司法無法給予正義時都應該這樣做" },
      { type: "link", content: "https://photos.app.goo.gl/DQDZLuprY2GCb73t8", label: "2025年12月26日 我覺得他說歸說 能做到多少很難說 我滿討厭講的很漂亮但實際上做不到的人XDDD" },
      { type: "link", content: "https://photos.app.goo.gl/BoYTVFr2aGZCk1au9", label: "2025年12月26日 30歲經歷風霜跟辛苦 終於下定決定全額貸款拿下Urus SE 的合照" },
      { type: "link", content: "https://photos.app.goo.gl/bijnaLoYGNAdf2qW7", label: "2025年12月26日 雖然很貴但大推這間鐵板燒 表演很用心 料理很用心 和牛真的很好吃" },
      { type: "link", content: "https://photos.app.goo.gl/6NRh5sGMj7mGF8Vj8", label: "2025年12月26日 3萬多台幣終身網路10TB划算嗎 算起來很多方案都是每年 2-3000元 聽起來終身方案10T好像不錯 可以存照片跟醫學檔案什麼的 想問問大家的經驗或有沒有終身方案的推薦 希望是不會倒閉的大公司" },
      { type: "link", content: "https://photos.app.goo.gl/hN2EfNpfW3QqCquc8", label: "2025年12月26日 一個讓人很安心的值班夜" },
      { type: "link", content: "https://photos.app.goo.gl/FHt4aNGKrRfCUg7J9", label: "2025年12月26日 太會拍了" },      
      { type: "link", content: "https://photos.app.goo.gl/4P72sQuRtTkhsuYD7", label: "2025年12月26日 超好吃 好開心" },
      { type: "link", content: "https://photos.app.goo.gl/QHX38qZ5gDwUYaDJ6", label: "2025年12月26日 平常應該留一個貓貓洞口讓他們逃生" },
      { type: "link", content: "https://photos.app.goo.gl/KCUNdiD8Ak8vKogU9", label: "2025年12月26日 哈哈哈超紓壓 我一定跟他一起跳" },
      { type: "link", content: "https://photos.app.goo.gl/SXE9hCqsoARnd255A", label: "2025年12月26日 屁啦跟我比較好 好" },
      { type: "link", content: "https://photos.app.goo.gl/4f9f1xf8mBGR1XMa6", label: "2025年12月26日 贏了" },
      { type: "link", content: "https://photos.app.goo.gl/YcdkDnBppcrCbVuv9", label: "2025年12月26日 真的欸" },
      { type: "link", content: "https://photos.app.goo.gl/rMeiPTDCYDnUCpcJ8", label: "2022年12月26日 這個縫隙太剛好 大自然太神奇" },
      { type: "link", content: "https://photos.app.goo.gl/iVK9MNHbYySJAtir7", label: "2021年12月26日 好猛 一拳超人的樂高 好想要" },
      { type: "link", content: "https://photos.app.goo.gl/hxnAzVe2rq3MRhiQ8", label: "2021年12月26日 TRUE" },
      { type: "link", content: "https://photos.app.goo.gl/pyLw3nvFXooAegUW8", label: "2020年12月26日 真是適合值班的好天氣" },
      { type: "link", content: "https://photos.app.goo.gl/QQBagNeLkRVLJ1Gh8", label: "2020年12月26日 願股息能Cover我的365天" },
      { type: "link", content: "https://photos.app.goo.gl/TVoi5j1DY6WYy5WZ6", label: "2017年12月26日 雖然平常認可他說的道理 但聽完他對柯P的評論 -毫無建設性毫無思考的發言 保證他當台北市長馬上換腦袋 這是我第一次不認同他 但看來不會只有一次 為了選舉 錫錕也開始作秀了zzzz" },
      { type: "link", content: "https://photos.app.goo.gl/11nfTbkZMvcbssMw5", label: "2017年12月26日 不要因為被網友造神 就以為自己得道升天了 講話開始狂妄 繼續下去你會倒是遲早" },
      { type: "link", content: "https://photos.app.goo.gl/RmSSAP2bF5e9tm6PA", label: "2017年12月26日 夜深了 已累 台中太美 可惜拍不完 嘗試新風格新尺寸我又撞牆期了 拍不好修不好請見諒" },
      { type: "link", content: "https://photos.app.goo.gl/EckL4pgBmqUmCcma9", label: "2017年12月26日 謝謝學妹 我現在試試看" }
    ],
    "27": [
      { type: "link", content: "https://photos.app.goo.gl/EEw2eUgUk3Lb5h9w9", label: "2025年12月27日 神奇欸 我也學到了 但他的照片影片應該是ai" },
      { type: "link", content: "https://photos.app.goo.gl/wgzwgx5No5Jyq8YK7", label: "2025年12月27日 難怪右邊的你很像我" },
      { type: "link", content: "https://photos.app.goo.gl/tbYiSVEJeujU1Bjc9", label: "2025年12月27日 健身" },
      { type: "link", content: "https://photos.app.goo.gl/6Bf8fiGTG19AesgG8", label: "2025年12月27日 太巨了哈哈哈 好" },
      { type: "link", content: "https://photos.app.goo.gl/zjfDtaMBeqAJuT2W7", label: "2025年12月27日 好看我也一直看ㄟ" },
      { type: "link", content: "https://photos.app.goo.gl/kFez3Rz6waKkfvFm9", label: "2025年12月27日 真好看" },
      { type: "link", content: "https://photos.app.goo.gl/8doSZTPJWAbrGxQd7", label: "2024年12月27日 你這個框框綠色的 顏色正確了 無罪啦沒事" },
      { type: "link", content: "https://photos.app.goo.gl/CXucqXVEkMKMaX2L8", label: "2024年12月27日 台灣笑死 台灣是犧牲多少醫護來達成這個成就的啊 全世界的醫護都是被壓榨的 但台灣醫護被壓榨程度也可以算第一名了" },
      { type: "link", content: "https://photos.app.goo.gl/16FeUZsfdYeDGwcn9", label: "2024年12月27日 又一個在唬爛的了" },
      { type: "link", content: "https://photos.app.goo.gl/hGzjTQEZf1M1JXU36", label: "2024年12月27日 真的超可愛" },
      { type: "link", content: "https://photos.app.goo.gl/YrRfUqxmG69Xm7it7", label: "2024年12月27日 超噁" },
      { type: "link", content: "https://photos.app.goo.gl/9MY2Lsn3TwfooKT49", label: "2024年12月27日 欸不是 玩都不給玩" },
      { type: "link", content: "https://photos.app.goo.gl/zFnvmc1AVSVsyfTPA", label: "2024年12月27日 好可愛 但我買的聖誕樹 都還沒到" },
      { type: "link", content: "https://photos.app.goo.gl/seDkjygbj72hFHUK7", label: "2024年12月27日 我會一起喝 開心" },
      { type: "link", content: "https://photos.app.goo.gl/VmwvP16LgD97XHN67", label: "2024年12月27日 我也會這樣啊" },
      { type: "link", content: "https://photos.app.goo.gl/uej1w3GZ1J5c56u37", label: "2024年12月27日 怎麼那麼可愛 都知道哪個比較讚 哈哈哈哈" },
      { type: "link", content: "https://photos.app.goo.gl/zn1T5qC4S4x5jryQ7", label: "2024年12月27日 太美了 聖誕快樂" },
      { type: "link", content: "https://photos.app.goo.gl/ejYmddLCUFXZgDUk9", label: "2024年12月27日 哪會" },
      { type: "link", content: "https://photos.app.goo.gl/puE6QpeGbDpDaUpr7", label: "2024年12月27日 可愛的沙啞" },
      { type: "link", content: "https://photos.app.goo.gl/YGpreEQ5UnFyPS8c7", label: "2021年12月27日 能夠用這輩子 親自體驗登山的痛苦 並看到世界風景之美 感受當下的溫度及空氣 遠比賺多少錢更幸福 這也是我賺錢的理由之一" },
      { type: "link", content: "https://photos.app.goo.gl/Fq6yMU2Y32idzjc4A", label: "2021年12月27日 羨慕的年終回顧 好多精彩照片" },
      { type: "link", content: "https://photos.app.goo.gl/8YXT2HENxuwPx7jm6", label: "2021年12月27日 終於可以冬至快樂囉" },
      { type: "link", content: "https://photos.app.goo.gl/558fHkEcwsKokyv46", label: "2018年12月27日 短暫的放風時間 除了手機以外什麼電子產品都沒有 只剩下讀書排解壓力了" },
      { type: "link", content: "https://photos.app.goo.gl/qzmNEHS5bfHDkbq58", label: "2017年12月27日 \
        Urban exploring 腦袋裡有一連串的煙火 接收太多攝影資訊的衝擊 千千萬萬的想法爆發而出 不論是更高層度的後製 或者有別以往的創意想法 \
        靈感從底片到街拍到空拍到rooftop到人像光影魔術到風景銀河極光都滿到溢出 人脈技術靈感都有了 可惜 時間真的不夠 想法空轉卻無法立即付諸行動 \
        我可能需要好幾年來慢慢琢磨 變形需要修正嗎 保留變形 甚至加重變形 會讓城市更加龐大 讓自己在照片裡的定位更微小" },
      { type: "link", content: "https://photos.app.goo.gl/fMUJ65KEedkX26bM9", label: "2017年12月27日 鏡頭手術成功 保險不理賠 這是他壞掉的頸部檢體。" },
      { type: "link", content: "https://photos.app.goo.gl/VMtYNxGYg6g68cs49", label: "2017年12月27日 修理相機店隔壁 煩悶只有暫時拋開熟悉的周遭 才能一個人慢慢消化" },
      { type: "link", content: "https://photos.app.goo.gl/UMDfxA9DEyrf5E8v8", label: "2017年12月27日 金狗毛???!" }
    ],
    "28": [
      { type: "link", content: "https://photos.app.goo.gl/ZdYT9hN6muN7XZCz7", label: "2025年12月28日 以前最害怕理學檢查 如果沒有老師有空好好說明 看書根本看不懂這些機車的心音怎麼來的 有AI之後 能夠好好的說明為何產生心音真的很棒 AI是第四波人類的工業革命" },
      { type: "link", content: "https://photos.app.goo.gl/tvyhkJ2dRenHDzr19", label: "2025年12月28日 完全看不出來蔡醫師的想法有什麼錯欸呵呵" },
      { type: "link", content: "https://photos.app.goo.gl/JFmzPBVJWukTCFWF7", label: "2025年12月28日 \
        從Lexus看台灣風景 這次接到了Lexus公司雜誌的邀約試乘 由我來當駕駛跟攝影真的太有趣了 雖然不能跟一樣拍跑車 \
        但我本身是很喜歡休旅車的人 剛好被分配到RX500h 龐大的車身搭配寬廣的車內空間 原本以為會很笨重 \
        但踩油門下發現啟動速度很快 行駛平穩又輕盈 要不是錢不夠不然真的想換車了 開著他繞去台中很多的景點 \
        還意外解鎖幾個很厲害的貨櫃屋拍點 收穫滿滿 分享幾張我蠻喜歡的照片 也很感謝lexus_taiwan的肯定" },
      { type: "link", content: "https://photos.app.goo.gl/suu7ZRjWJRHSE4XG9", label: "2025年12月28日 已經那麼厲害ㄌ" },
      { type: "link", content: "https://photos.app.goo.gl/pKv3zZ9DZHnwyJ1M8", label: "2025年12月28日 先知...." },
      { type: "link", content: "https://photos.app.goo.gl/8Ghuqy3tHRhf2D5x9", label: "2025年12月28日 你也很厲害" },
      { type: "link", content: "https://photos.app.goo.gl/NnNUt6qPKycY7dtz8", label: "2024年12月28日 保健食品是什麼垃圾東西能跟降血脂藥物比較 別搞笑了 實證唯一吃降血脂藥物 傻子才吃保健食品 當韭菜還傷害健康" },
      { type: "link", content: "https://photos.app.goo.gl/NiGHShMfNNQkoD7n6", label: "2023年12月28日 \
        主旨 病歷獎金系統能否饒過可憐住院醫師 \
        反映意見 內科住院醫師薪水相對外院住院醫師少很多 病歷獎金是少數彌補來源 但好不容易周末可以放兩天假 週六出院的病人 \
        若週日沒有結案就就沒有獎金 我週日沒上班 難道要回醫院補初院結案病歷嗎 \
        請問工程師能不能設定成超過兩日以上的病歷 本科上班日第一天結案能算數啊 你設定成24小時內那我們連假好不容易可以陪家人 \
        卻還要回來醫院趕著24小時結案 搞醫師嗎 想害我家破人亡 婚姻失和嗎 可否人性化 別逼死我" },
      { type: "link", content: "https://photos.app.goo.gl/GiqaqLNiNv3X4FFr6", label: "2023年12月28日 \
        垃圾國軍 憑什麼規定國軍人員出國要旅行社正本公文 憑什麼強迫我們跟團 國防部跟旅行社官商勾結 \
        正事不做 專門搞基層 看了真的很生氣 政府真的很棒 原本就已經夠痛恨這個體制 現在只是更失望 當軍人欠這個國家沒底線是不是啊" },
      { type: "link", content: "https://photos.app.goo.gl/AoZ9BF6QxLGRELuR6", label: "2023年12月28日 \
        除非畢業即失業 沒有任何專長也沒有祖產爸媽養 否則真的努力一點 不要去從軍 \
        從砍年金開始 到賠款3610萬 到強迫退宿 到現在弄到你出國一堆手續還要強迫旅行社正本 \
        國軍會從生活大小事去擊垮你 用盡全力讓你共體時艱 所有的好處都是福利 都是你欠的 沒有進去的千萬別來 \
        弄我出國就是我的底線 我就具名告訴大家 國軍這種調性 薪水也沒很高 也沒在尊重你的 這我忍不了" },
      { type: "link", content: "https://photos.app.goo.gl/6gQVHguPa7QQzdJt6", label: "2023年12月28日 \
        最近被殺害的國中生 是因為他詢問圖中這位非同班的學生為何在教室 結果這位89妹就叫另一位男同學幫他出氣 \
        那位同學因此殺了當事人 原來間接殺了一個人先擔心的是零用錢被斷 實在震驚的價值觀 不說我以為在拍戲" },
      { type: "link", content: "https://photos.app.goo.gl/YXVFDgbtGX3pDUzNA", label: "2022年12月28日 離開國軍的人生是彩色 好羡慕QAQ" },
      { type: "link", content: "https://photos.app.goo.gl/vaHFiArPYmEurwtY9", label: "2021年12月28日 謝謝大家支持我們的桌曆 還可以買唷 在我的首頁連結 我們也捐助一點錢給狗狗貓貓等流浪動物們" },
      { type: "link", content: "https://photos.app.goo.gl/eYEUsUenkuA6o4Yy9", label: "2020年12月28日 \
        放眼全台灣的醫學中心 除了三軍總醫院敢叫內科住院醫師 不準pm 也沒人力cover以外 還有其他醫院敢這樣對待內科住院醫師嗎 \
        沒有要批評 認真想知道在這個day off趨勢的時代 還有哪個醫院能獨有這種爛風氣 謝謝:)" },
      { type: "link", content: "https://photos.app.goo.gl/APE9bSbzFnfA5zHYA", label: "2020年12月28日 這個時間才下班 感覺過一下又明天上班了" },
      { type: "link", content: "https://photos.app.goo.gl/W1HeRtebvygUUz637", label: "2018年12月28日 孝死XDDDDDDD" },
      { type: "link", content: "https://photos.app.goo.gl/ffsanYEdHtZ1aMsZA", label: "2017年12月28日 \
        Blue Hour was coming Taipei 101 攝影的主觀性很強 所以必須把目標定位在國際神人的最高標準 不斷審視自己與別人的作品 \
        正因為目標太過困難 雖然一輩子達不到 卻也一輩子都在精進 滿足於自己 不願意交流 不願意否定自己 那麼藝術只淪為討讚跟取暖 如同讚多與作品水準無關一樣" }
    ],
    "29": [
      { type: "link", content: "https://photos.app.goo.gl/dfPiRnSj5Mkcd6UGA", label: "2025年12月29日 我又不是台獨" },
      { type: "link", content: "https://photos.app.goo.gl/U6AdpecEfykePbxt6", label: "2025年12月29日 \
        台獨是會走上街頭 到處跟別人講我是台獨的怪胎 我不是台獨 是因為我認為台灣本來就獨立不用到處宣傳 也不需要討論 \
        這是完全不同的 如果仔細觀察政治群眾 會有那一小部分的人做很怪的事情 例如硬要把護照換成台灣國害自己被海關滯留 \
        硬要在生活中強調什麼用詞是支語 任何意外都要懷疑第五縱隊 符合這些特徵才叫台獨 \
        正常人都應該是知道自己是台灣人 國籍是中華民國 這種事不需要爭論也不用特別說出來 所以我不是台獨" },
      { type: "link", content: "https://photos.app.goo.gl/QSyfQuchBqGxQpi26", label: "2025年12月29日 四天菲律賓 五天泰國 每年沒有出國六次以上都不能稱為有生活品質" },
      { type: "link", content: "https://photos.app.goo.gl/nNzjfbX35DAtSWse9", label: "2025年12月29日 照片被taiwanyahoonews分享" },
      { type: "link", content: "https://photos.app.goo.gl/QXvSynf1K9LNdZ7d7", label: "2025年12月29日 是說新聞小編分享的這幾個地點 應該是為了發而發 因為這些早就不是私房景點 去年這些點也都要提早幾個小時就開始卡位了 現在要拍完美的101煙火 只能在信義區買一棟視野廣闊高度夠高的大樓了" },
      { type: "link", content: "https://photos.app.goo.gl/GvDN6dZgFFkgX479A", label: "2025年12月29日 他跟我小時候完全一樣都很愛拿槍 該簽下去了" },
      { type: "link", content: "https://photos.app.goo.gl/6NL6VzDn4VLtbtuF9", label: "2025年12月29日 雖然成績很爛 但也只有提供攝影作品的機會才有小獎狀" },
      { type: "link", content: "https://photos.app.goo.gl/Hi6FHWtMozPZo72HA", label: "2025年12月29日 筆記筆記 幫你買" },
      { type: "link", content: "https://photos.app.goo.gl/yVWqUUhsfrGMWkWy7", label: "2025年12月29日 為什麼他們的韓國比較好玩" },
      { type: "link", content: "https://photos.app.goo.gl/3Lc9J67mS1gesNRb7", label: "2025年12月29日 好可愛" },
      { type: "link", content: "https://photos.app.goo.gl/ZR4ThcuKuFcMkLCY7", label: "2025年12月29日 載妳去嚕" },
      { type: "link", content: "https://photos.app.goo.gl/i9U26quy1SLvyxcW9", label: "2024年12月29日 怎麼沒有穿綠色衣服" },
      { type: "link", content: "https://photos.app.goo.gl/fGwzZfiSSbX5Mfxu7", label: "2024年12月29日 背後靈堅持要入鏡" },
      { type: "link", content: "https://photos.app.goo.gl/7nRWNLqtoLxhF4br7", label: "2023年12月29日 反映意見 問題編號112111506跟問題編號112111505何時回覆" },
      { type: "link", content: "https://photos.app.goo.gl/NiHMJuGfrgV73ZHK6", label: "2022年12月29日 痛苦的一晚 完全沒睡" },
      { type: "link", content: "https://photos.app.goo.gl/ayVEn2Tp7n1dNY4Q6", label: "2022年12月29日 應該都不是 感覺是缺氧" },
      { type: "link", content: "https://photos.app.goo.gl/V4rsquFS7vjjD4pv8", label: "2022年12月29日 去年拍的照片 被高雄市政府拿來用了" },
      { type: "link", content: "https://photos.app.goo.gl/BeXNmQXPBPzo24Q57", label: "2021年12月29日 \
        大過年回來台灣的這群XX到底在想什麼 平常在國外吃好住好過的開開心心 每年過年回台灣續用健保資格 \
        繳那個少到不行又完全不會到醫護身上的費用 帶著開心的新冠病毒 讓我們一線醫護必須無薪加班 多了好幾班值班 我們就不是人嗎 \
        醫護人員不能出國 醫師更沒有放假排休的權利 也換不到等價的薪水 只能說需要人力就拼命加值班到我們身上 \
        看著科技業爆肝換來爆多的年終 看著各行各業要求勞工應有的加班費用及休假 再回頭看看我們醫護 真的非常諷刺" },
      { type: "link", content: "https://photos.app.goo.gl/7fACkoacBmdfAH3c7", label: "2020年12月29日 \
        類固醇可以殺血癌 請問機轉是什麼 真的差不到 求內科高手指點 \
        我找到一篇2002指出類固醇利用細胞凋亡機制殺死某些血癌 但我有疑問 為何只會殺死血癌不會殺死正常細胞 為何癌症只有某些血癌有效 \
        樓上好像有道理 所以跟細胞凋亡無關對嗎" },
      { type: "link", content: "https://photos.app.goo.gl/uiK5Yae4vvVjWdYA7", label: "2020年12月29日 遠遠這坨 是整個台北大雲海中 陽明山上可以看到 寒流來之前很容易有這美景 現在在台北的你各位都在雲海中 可惜沒那個拍照命" },
      { type: "link", content: "https://photos.app.goo.gl/qQQQF6yiG3mhUy8VA", label: "2020年12月29日 出現了 是目前世界上最貴最強的馬拉松跑鞋 Nike Alphafly" },
      { type: "link", content: "https://photos.app.goo.gl/GDk8ASVezTSX2RPh9", label: "2020年12月29日 \
        上面是今天 一開始就盡量hold住 龜一點不要衝 沒有掉速平穩跑完 下面是12/23跑 壞習慣 一開始就順著感覺加速 \
        結果中間沒力掉速 結果證明長跑還是穩定配速最快 龜一點不要太衝 七字口訣適用在長距離跑" },
      { type: "link", content: "https://photos.app.goo.gl/k1qPcFqH4TWXYi7n7", label: "2020年12月29日 每次送我東西都一臉氣噗噗 到底 不過真皮識別證真的太猛 還有刻字" },
      { type: "link", content: "https://photos.app.goo.gl/35XyAYYx76Zw7JNNA", label: "2018年12月29日 \
        富士山銀河下的獨白 今年最後一張作品 也希望是最後一張三年前的作品 \
        2018是我重要的一年 出社會踏入職場 對於自己的工作與未來規劃負責 再也不是嘴巴掛著夢想而已 但這並不代表變成了無聊的大人 而是更了解人生的變化與責任的沈重 當然也是為了更遠大的夢想而努力 \
        2018也遇到很多重要的人 甚至是職場上每個人的言行 都讓我反思 變成警惕或榜樣 \
        2018的最後 也要感謝將陪我一起度過 對我來說感情就是小小的犧牲換來彼此的幸福 男人的肩膀就該擔起應該的責任 讓自己有能力照顧別人 說的出口做得到 \
        夢想與虛言是養不活任何人的 只有吃得苦捨得放下自我 才能成就兩個人的世界 \
        2018是充滿荊棘的一年 未來也將更不輕鬆 不要空口說白話 而是扎扎實實的培養自己 與大家共勉 先預祝大家新年快樂 工作順利 身體健康 發大財" }
    ],
    "30": [
      { type: "link", content: "https://photos.app.goo.gl/mJuKEqSpvBmSDHUu8", label: "2025年12月30日 問一下鍾佳濱 他為國服務也是不談薪水的嗎 他真是可悲的人 別人命最賤 就應該去送死" },
      { type: "link", content: "https://photos.app.goo.gl/RpNeVvKHu7tZdUtZ7", label: "2025年12月30日 軍人如果不看錢不然看你嗎 你怎麼不來當軍人 還是你也沒愛國心也是只看錢" },
      { type: "link", content: "https://photos.app.goo.gl/8QanDpTZ3RBLopWB9", label: "2025年12月30日 這就是台灣軍人的悲哀 這種要打仗的國家 志願役沒有一個月十萬起跳真的是國家對不起軍人" },
      { type: "link", content: "https://photos.app.goo.gl/nAbzPwkpDTH5Qcuv6", label: "2025年12月30日 那給在打仗時要付死的志願役加薪呢 還是加一咪咪也是加" },
      { type: "link", content: "https://photos.app.goo.gl/Jr96CS4z3rHAoWT76", label: "2025年12月30日 認真說 媒體跟民眾現在拍完直接在網路曝光國軍部署的都是智障" },
      { type: "link", content: "https://photos.app.goo.gl/dQKgfkkY4u2W7cBF6", label: "2025年12月30日 \
        這幾天很紅的視角 剛好跟全世界介紹 這是台灣 謝謝 \
        這是台灣 這幾天碧山巖的景色紅了 紅到兩岸的人民都看見了 身為攝影師的我們 一看就知道這是我們的國家 台灣的碧山巖景色 新聞連結底下 很多攝影朋友第一時間也指出這是碧山巖的視角 \
        實際上我們也常接觸空拍 那樣的畫質跟視角高度 大機率就不可能是對岸的空拍機飛過來 先不論這幾天的風速 氣溫跟可見度 以這個拍攝高度能看到的構圖 就能知道那畫面是抄來的 \
        現今大疆Mavic 4pro的長焦越來越強大 但那個焦段也根本不可能從近海拍得到 我是沒有特定政治立場的人 我認為現在政府是誰執政就應該檢討誰 但我們都是台灣人民 \
        台灣是唯一的國家 唯一的根 雖然政府做的不好但終究那還是台灣的政權 面對對岸的武力逼迫跟這個造假的畫面 要保持腦袋清楚 最重要的 是支持國軍 鼓勵國軍 \
        執政黨做的再差我們都能再下一次政黨輪替 但被統治了那就再別民主了 我不討厭大陸同胞 但對於想要以武力侵犯別人的政權深覺噁心 \
        如果有這種企圖我們就應當讓他們付出代價 所謂正義使命 用的是虛偽的名稱來掩飾內心邪惡的企圖 減少罪惡感罷了 這很華人心態 我們都懂 台灣挺住 國軍加油" },
      { type: "link", content: "https://photos.app.goo.gl/5uPhW1w1x7PfxeDs8", label: "2025年12月30日 沒錯 大部分我都認同的 很多人都說等功成名就再來享受 根本大錯特錯 等等到了功成名就你也只剩下上車睡覺下車尿尿的年紀" },
      { type: "link", content: "https://photos.app.goo.gl/2j1eVz6Th5mZ9yj66", label: "2025年12月30日 可惜我們沒辦法玩這個 因為我都直接不理這種訊息" },
      { type: "link", content: "https://photos.app.goo.gl/vZhCkS7xJvmgWoc67", label: "2025年12月30日 但我原本就有一點底子 像是煮荷包蛋我本身就會了" },
      { type: "link", content: "https://photos.app.goo.gl/swniGCHGv9VPnx2DA", label: "2025年12月30日 台北的夕陽" },
      { type: "link", content: "https://photos.app.goo.gl/sMKUPrBrJdPeCzxa6", label: "2025年12月30日 這也太可愛" },
      { type: "link", content: "https://photos.app.goo.gl/XsAfMhLH6jCuekhQ7", label: "2025年12月30日 沒錯" },
      { type: "link", content: "https://photos.app.goo.gl/GmQPhBG9WD5vQu7Q7", label: "2024年12月30日 \
        雖然我非常討厭現在衛福部剝削醫師的健保制度 但堅決反對老福法我是一萬%認同 政府實際上並沒有足夠的經費支撐 若該法通過 \
        不只讓醫護原本已經很少的薪水下降 更會排擠原本已經不夠的健保支出 支持該法的政治人物 都是無知且愚蠢的 \
        會害慘未來我們健康的 身為醫療人員 我希望這個惡法不要通過" },
      { type: "link", content: "https://photos.app.goo.gl/DFFTSYxJEgy4SrNd9", label: "2024年12月30日 哈哈哈哈對啊" },
      { type: "link", content: "https://photos.app.goo.gl/THFnUDaVyo1pM3Tm7", label: "2024年12月30日 學長太強了" },
      { type: "link", content: "https://photos.app.goo.gl/tN6rJZjjWpqF477k8", label: "2024年12月30日 以德服人 德是指身上的蛋白質總量" },
      { type: "link", content: "https://photos.app.goo.gl/f9fE8Hy71KaZUwQy7", label: "2024年12月30日 哈哈哈好可愛 摸別人頭才有的吃" },
      { type: "link", content: "https://photos.app.goo.gl/N8WwZYGVEB6BQQNz8", label: "2024年12月30日 這小孩是天才 絕對是天才" },
      { type: "link", content: "https://photos.app.goo.gl/m1vjDu45J854se8U6", label: "2023年12月30日 昨天在台北發現超讚攝影的角度" },
      { type: "link", content: "https://photos.app.goo.gl/hdvdbkR8LwS5g6i5A", label: "2022年12月30日 照片被高雄市政府拿來用了" },
      { type: "link", content: "https://photos.app.goo.gl/eBE2aCKfEY51whXT6", label: "2021年12月30日 京東燒肉專門店 松江 歲末吃大餐任務完成" },
      { type: "link", content: "https://photos.app.goo.gl/KoH5v7CeZwYtmes17", label: "2018年12月30日 \
        我自己的拍攝經驗 覺得能分享給大家 你去外面旅館的時候 浴帽一定要拿 如果小雨的情況 真的非常輕便好用 直接套在相機上就好 \
        拍攝煙火就腳架 快門線 M或B模式 小光圈 查好煙火大小跟拍攝位置 曝一張地景先 拍的時候一定別被撞到" },
      { type: "link", content: "https://photos.app.goo.gl/xfnSdsGdaocdxLNt7", label: "2018年12月30日 謝謝長官的好心 連續上了半個月的班終於能放假啦" },
      { type: "link", content: "https://photos.app.goo.gl/ia9m4pRzFVLtma3y6", label: "2018年12月30日 約東出口碰面但要到西出口找 正常 板橋車站" },
      { type: "link", content: "https://photos.app.goo.gl/Yp4KkodBM5HoZMYBA", label: "2018年12月30日 結果我自己還沒看過 在市政府站的地下道唷" }
    ],
    "31": [
      { type: "link", content: "https://photos.app.goo.gl/aWox2CTQkpxtxbF26", label: "2025年12月31日 多是多多少 美國這種常常在戰爭的志願役一個月薪水多少 台灣都快打起來了加這一點屁喔 你最珍貴 別人就該領低薪然後去送死 也難怪現在志願役都要用騙的才有人要簽" },
      { type: "link", content: "https://photos.app.goo.gl/Tc3uyjTQncXL1yNX6", label: "2025年12月31日 你好可憐 只是說空拍畫面是假的就被說顛倒是非 同情你唷" },
      { type: "link", content: "https://photos.app.goo.gl/CVNEeCCYsGGFu9vs6", label: "2025年12月31日 一起拍照一起開車很有趣 感謝lexus_taiwan公司雜誌邀約 讓我們參與拍攝 2025年劃下完美的句點" },
      { type: "link", content: "https://photos.app.goo.gl/3KeA9XQRGdgrRNYWA", label: "2025年12月31日 如果美國是外部勢力 那代表你認為台灣是屬於中國對吧 如果台灣是國家 那台灣想跟哪個國家親近不是由全體人民投票當選的執政黨的決定嗎 請問你是指哪個" },
      { type: "link", content: "https://photos.app.goo.gl/89agYWfXNgb9LNZr6", label: "2025年12月31日 你知道把你的圖8放進nano banana就可以產生圖7嗎" },
      { type: "link", content: "https://photos.app.goo.gl/58C5qNeLD2Nb7mqj6", label: "2025年12月31日 我選擇放棄跟你溝通 浪費生命 你打那麼多字 我看兩行就想吐了XD" },
      { type: "link", content: "https://photos.app.goo.gl/wVAxVvJQ2aTVCFpf7", label: "2025年12月31日 這阿姨有夠厲害" },
      { type: "link", content: "https://photos.app.goo.gl/xNjs5VLQ3yT4cmDY8", label: "2025年12月31日 雖然這是個有點失望的小島 但因為跟一起所以格外喜歡" },
      { type: "link", content: "https://photos.app.goo.gl/yiE68v4raCRhyUoE9", label: "2025年12月31日 太美了請問這個位置拍攝需要先申請嗎" },
      { type: "link", content: "https://photos.app.goo.gl/Fp7b3MkPB8EeEktQ7", label: "2025年12月31日 以前在這裡拍過但聽說後來警衛會趕人 方便請教有什麼方式登記拍攝嗎" },
      { type: "link", content: "https://photos.app.goo.gl/Hm16R677pWaNwGyT8", label: "2025年12月31日 新年快樂 你這張超美" },
      { type: "link", content: "https://photos.app.goo.gl/vHQ4rZWmHpRXCJpN7", label: "2025年12月31日 謝謝 新年快樂" },
      { type: "link", content: "https://photos.app.goo.gl/v9maaFoh3WzuU4mM8", label: "2025年12月31日 讚的啦 超跑超厲害" },
      { type: "link", content: "https://photos.app.goo.gl/rFH1gA8LQoUonAbJ8", label: "2025年12月31日 破脆爛脆 氣氣氣氣氣" },
      { type: "link", content: "https://photos.app.goo.gl/wtRL1Biq9f1kXexAA", label: "2025年12月31日 靠杯了啦" },
      { type: "link", content: "https://photos.app.goo.gl/DDD5FVpHskmDXowB9", label: "2024年12月31日 \
        我覺得唯一的bug只有男主如果要拯救所有人 在第三場遊戲結束後 當時剩下100人 表明自己有剩下 推估劇中鈔票畫面$約快300億韓元 \
        只要投票X的人 他都無條件資助還款即可 可惜他沒這麼做 現實中如果有個真正覺得這些錢不是他的 而想用這些錢拯救大家的人都應該會嘗試提出這個想法 來拉攏選的那方 \
        嗯嗯 但這是我覺得唯一現實應該發生 但劇中沒有發生的事情" },
      { type: "link", content: "https://photos.app.goo.gl/Wh6q75uJFp9jF29p6", label: "2024年12月31日 哈哈哈哈哈以後都報別人的ig" },
      { type: "link", content: "https://photos.app.goo.gl/a8DHZWDtzH8vWB8e8", label: "2024年12月31日 2025第一天居然就要值班 先提前祝大家新年快樂 晚點拍完煙火只能先趕快回家睡覺了 新年新希望 一樣是早點退伍還我自由的願望" },
      { type: "link", content: "https://photos.app.goo.gl/QZ4TnXFtvKyfe6448", label: "2024年12月31日 德朗火鍋信義店 用火鍋一起迎接2025" },
      { type: "link", content: "https://photos.app.goo.gl/adLTgd12kpn1VC88A", label: "2023年12月31日 \
        今年最好吃的韓國料理 大推 超推的韓式料理 台北Meat Love橡木炭火韓國烤肉 \
        雖然韓式料理經驗值還沒有很多 但這間目前是心中第一名 開胃小菜的部分 芥末黃瓜跟米粉足以用驚為天人來形容 \
        那個米粉嚼勁完全不是台灣米粉比得上 而芥末黃瓜根本小菜界的天菜 實在爆幹好吃 我連吃三盤 要不是為了塞肉 我可以至少吃個十盤吧 \
        蝦餅跟炸雞也是超級無敵 蝦餅是用炸蕃薯條的方式混著蝦米 薄薄一片卻超脆超香 他的蝦餅比泰式蝦餅更令人回味 \
        而炸雞表現也非常出色 完全不會乾澀跟硬柴的口感 愛不釋口啊 最後主餐的牛排跟豬五花 豬五花我個人不愛 中規中矩也沒有不好吃 \
        而烤牛排則亦是極品 下次真的想直接點兩份 整體而言下次會再去 適合約會跟聚餐 上面說的料理我已經迫不及待再去吃了" },
      { type: "link", content: "https://photos.app.goo.gl/4KRuCvXc9B1LziGd8", label: "2023年12月31日 原本有個厲害的煙火計畫被迫取消 但能跟一起度過就是滿足" },
      { type: "link", content: "https://photos.app.goo.gl/soLn5jLLphxwYzNz6", label: "2023年12月31日 跟我等煙火等到太無聊 前面又一堆排公共廁所的人 於是開始亂發 只有一位青蛙回我們 還祝新年快樂" },
      { type: "link", content: "https://photos.app.goo.gl/A9LubyxXUBmERntd9", label: "2022年12月31日 可憐啊 象山遮掉半根了 跟去年一樣囉" },
      { type: "link", content: "https://photos.app.goo.gl/YAR299D3ncvrcB3RA", label: "2022年12月31日 \
        今年最後一張 祝大家新年快樂 2022回顧 生活分享No.25 先祝大家 新年快樂 \
        2022年的最後一張照片 是一起到黑漆漆的不厭亭拍銀河 不過當天角度不對 我把正上方的銀河稍微往下調整了 \
        2020回到醫院後 身份轉為住院醫師 生活型態大大改變 因為畸形體制 我沒有年假 沒有補假 沒有離職權利 沒有值班後應有的休息 \
        拍照的時間當然也幾乎沒有 將心力轉移到醫學上 見識了老病死 也體悟到人類面對疾病的渺小 \
        最大的願望 是希望能早日離開目前的工作環境 對我來說只有賺錢卻沒有品質 無法常出國拍照的人生 等於死亡 \
        期望2023更為堅強 除了努力於工作 也保持對於生活及攝影的熱情 繼續創作攝影 也希望之前一起拍照的朋友們 能再一起拍照 願2023世界更善良 美好 健康" },
      { type: "link", content: "https://photos.app.goo.gl/pfP5CeNmMbMvqkAY9", label: "2021年12月31日 拍煙火前補個體力 太幸福了吧 太豐盛了 厲害" },
      { type: "link", content: "https://photos.app.goo.gl/vy16tYeMxci74Fv86", label: "2021年12月31日 整個看不到101 慘" },
      { type: "link", content: "https://photos.app.goo.gl/1pgnvGyi65T55Mge9", label: "2020年12月31日 去年進浴室吹頭髮 一直吹到今年還沒出來 是發生什麼事情 廁所跨年浴室倒數" },
      { type: "link", content: "https://photos.app.goo.gl/ZZg17RmuAbgHeqH78", label: "2020年12月31日 跨年前吃飽再回家取暖 今天在醫院結束最後一次值班 緊接著1/1明年第一天也是值班 這94醫屍日常 但願明年平安順遂 不求發大財但身體健康 也先預祝大家新年快樂" },
      { type: "link", content: "https://photos.app.goo.gl/R18CGtSgMfZf3KQF9", label: "2020年12月31日 跌跌撞撞度過以為會很好的2020 部隊與醫院的工作轉換 還有與經歷的許多不容易 終於快邁入2021 今年的最後一天在值班後倒數結束 明年的第一天也從值班開始 就不外出跨年了" },
      { type: "link", content: "https://photos.app.goo.gl/xXWsg3bFRG9DbhSD7", label: "2018年12月31日 艱困跨年 停車一小時 吃飯五分鐘" },
      { type: "link", content: "https://photos.app.goo.gl/hJ6kKySMAaiW3d5t5", label: "2018年12月31日 \
        馬辣頂級麻辣鴛鴦火鍋 吃馬辣為晚上跨年儲存體力 年終大請客 慰勞包容我一年多 謝謝你體諒我當海軍的無奈跟常常消失 希望我們新的一年更堅強:) \
        一早就這麼養生 剛要丟衛生紙手滑丟進奶茶裡" },
      { type: "link", content: "https://photos.app.goo.gl/eBTP1EuoGoyksuby6", label: "2018年12月31日 \
        保持相機防水與清潔的簡單省錢方法 近日台北有雨 潮濕的天氣分享我自己保養的方式 我會在飯店領取每一個浴帽 清潔組 上方為浴帽下方清潔包 \
        清理相機有以下優點 清潔組棉棒及簡易衛生棉衛生紙是吸水好幫手 省錢無成本 正式的清潔用品很貴 免費的浴帽可以在毛毛雨的情況下包覆相機 \
        清潔組的棉棒能吸乾縫隙進水 衛生棉則能有強力吸水作用 我會用在電池槽等重要部位 輕便 很好壓縮收藏 使用一次即丟不佔空間 \
        除了清理相撞 在外若需要也可自用 雖然有點寒酸 但實在非常方便而且多功能 零成本又不會浪費 畢竟很多人去飯店也不會用這些附贈品" },
      { type: "link", content: "https://photos.app.goo.gl/GEHmYVYksiBNVZR89", label: "2017年12月31日 但是31有事情 恩恩問一下總醫生31我們都不行怎麼辦 不再台北@@ 家裏有事情 認真@@" },
      { type: "link", content: "https://photos.app.goo.gl/accTGGVcR5ZRA6ic8", label: "2017年12月31日 窩喔喔喔喔喔喔 今年要拍全新煙火構圖 敬請期待" },
      { type: "link", content: "https://photos.app.goo.gl/Z2gUbM37c8Lxnsfh6", label: "2017年12月31日 Hope go up to 2800 before 2018" },
      { type: "link", content: "https://photos.app.goo.gl/9FRS1kupdi18JirR7", label: "2017年12月31日 2017最後一修 電腦ps銀河有個優點跟缺點 優點能製造城市對天空光害感覺 也能保存原圖的色溫 自然很多甚至以假亂真 缺點費工花時間 需足夠後製才能避免奇怪的痕跡 交界處" }
    ]
  }

};
