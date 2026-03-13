// Chunking Dojo — data pool
// このファイルを直接編集してデータをカスタマイズできます。
// 変更後はブラウザをリロードしてください。
window.CHUNK_DATA = {
  "level_1": {
    "core_sentences": [
      { "ja": "カフェに行った", "en": "I went to a cafe", "tags": ["relax", "outing", "past"] },
      { "ja": "公園を散歩していた", "en": "I was walking in the park", "tags": ["relax", "outdoor", "past"] },
      { "ja": "彼は新しい車を買った", "en": "He bought a new car", "tags": ["lifestyle", "personal", "past"] },
      { "ja": "私たちはランチを食べている", "en": "We are having lunch", "tags": ["food", "social", "pres"] },
      { "ja": "彼女はとても親切だ", "en": "She is very kind", "tags": ["personal", "people", "pres"] },
      { "ja": "母は料理をしている", "en": "My mother is cooking", "tags": ["home", "food", "pres"] },
      { "ja": "映画を観た", "en": "I watched a movie", "tags": ["relax", "home", "past"] },
      { "ja": "友達に会った", "en": "I met my friend", "tags": ["social", "outing", "past"] },
      { "ja": "ジョギングをする", "en": "I go jogging", "tags": ["outdoor", "health", "habitual"] },
      { "ja": "そのレストランはとても混んでいた", "en": "The restaurant was very crowded", "tags": ["food", "outing", "past"] },
      { "ja": "姉は勉強している", "en": "My sister is studying", "tags": ["study", "personal", "pres"] },
      { "ja": "サッカーをした", "en": "We played soccer", "tags": ["outdoor", "social", "past"] },
      { "ja": "コーヒーを飲む", "en": "I usually drink coffee", "tags": ["food", "home", "habitual"] },
      { "ja": "電車が遅れた", "en": "The train was late", "tags": ["outing", "work", "past"] },
      { "ja": "私は本を読むのが好きだ", "en": "I like reading books", "tags": ["hobby", "personal", "habitual"] },
      { "ja": "音楽を聴いている", "en": "I am listening to music", "tags": ["relax", "home", "pres"] }
    ],
    "additions": {
      "preposition": [
        { "ja": "仕事の後に", "en": "after work", "promptType": "Wh-Question", "prompt": "When?", "tags": ["work", "social", "outing", "food"], "semTag": "time" },
        { "ja": "家族と一緒に", "en": "with my family", "promptType": "Wh-Question", "prompt": "Who with?", "tags": ["home", "relax", "food", "lifestyle"], "semTag": "companion" },
        { "ja": "週末に", "en": "over the weekend", "promptType": "Wh-Question", "prompt": "When?", "tags": ["relax", "outing", "hobby"], "semTag": "time" },
        { "ja": "リフレッシュのために", "en": "for some fresh air", "promptType": "Wh-Question", "prompt": "Why?", "tags": ["relax", "outdoor"], "semTag": "purpose" },
        { "ja": "自分の部屋で", "en": "in my room", "promptType": "Wh-Question", "prompt": "Where?", "tags": ["relax", "home", "hobby"], "semTag": "place" },
        { "ja": "楽しみのために", "en": "just for fun", "promptType": "Wh-Question", "prompt": "Why?", "tags": ["universal"], "semTag": "purpose" },
        { "ja": "友達と一緒に", "en": "with my friends", "promptType": "Wh-Question", "prompt": "Who with?", "tags": ["social", "outing", "food", "relax"], "semTag": "companion" },
        { "ja": "朝に", "en": "in the morning", "promptType": "Wh-Question", "prompt": "When?", "tags": ["universal", "morning_time"], "semTag": "time" },
        { "ja": "夕食の後に", "en": "after dinner", "promptType": "Wh-Question", "prompt": "When?", "tags": ["home", "food", "relax"], "semTag": "time" },
        { "ja": "ひとりで", "en": "by myself", "promptType": "VocabDrop", "prompt": "by myself", "tags": ["universal"], "semTag": "companion" },
        { "ja": "初めて", "en": "for the first time", "promptType": "VocabDrop", "prompt": "for the first time", "tags": ["universal", "one_time"], "semTag": "time" },
        { "ja": "公園で", "en": "at the park", "promptType": "Wh-Question", "prompt": "Where?", "tags": ["outdoor", "relax", "social"], "semTag": "place" },
        { "ja": "家の近くで", "en": "near my house", "promptType": "Wh-Question", "prompt": "Where?", "tags": ["home", "relax", "outdoor"], "semTag": "place" }
      ],
      "when_clause": [
        { "ja": "ちょうど時間ができたときに", "en": "when I had some free time", "promptType": "VocabDrop", "prompt": "free time", "tags": ["past"], "semTag": "time" },
        { "ja": "天気がよかったので", "en": "when the weather was nice", "promptType": "Wh-Question", "prompt": "When? (Weather)", "tags": ["outdoor", "outing", "relax", "past"], "semTag": "time" },
        { "ja": "仕事が忙しくないときに", "en": "when I wasn't busy with work", "promptType": "VocabDrop", "prompt": "not busy", "tags": ["work", "relax", "hobby", "past"], "semTag": "time" },
        { "ja": "子供だったころ", "en": "when I was a child", "promptType": "Wh-Question", "prompt": "When? (Childhood)", "tags": ["personal", "lifestyle", "past"], "semTag": "time" },
        { "ja": "家に帰ったとき", "en": "when I got home", "promptType": "Wh-Question", "prompt": "When? (Home)", "tags": ["home", "past"], "semTag": "time" },
        { "ja": "昼休みのときに", "en": "when I was on my lunch break", "promptType": "Wh-Question", "prompt": "When? (Lunch)", "tags": ["work", "food", "past"], "semTag": "time" },
        { "ja": "誰もいないときに", "en": "when nobody was around", "promptType": "VocabDrop", "prompt": "alone time", "tags": ["personal", "past"], "semTag": "time" },
        { "ja": "時間があるときはいつでも", "en": "whenever I have time", "promptType": "VocabDrop", "prompt": "whenever", "tags": ["universal", "recurring"], "semTag": "time" }
      ]
    },
    "patterns": [
      ["preposition", "preposition"],
      ["preposition", "when_clause"],
      ["preposition", "preposition", "when_clause"],
      ["when_clause", "preposition", "preposition"]
    ]
  },

  "level_2": {
    "core_sentences": [
      { "ja": "あなたはもっと野菜を食べるべきだ", "en": "You should eat more vegetables", "tags": ["health", "lifestyle", "pres"] },
      { "ja": "英語を話すことができる", "en": "I can speak English", "tags": ["skill", "work", "pres"] },
      { "ja": "私はそのニュースを見て驚いた", "en": "I was surprised to see the news", "tags": ["personal", "emotions", "past"] },
      { "ja": "彼女は私に素敵なプレゼントをくれた", "en": "She gave me a wonderful present", "tags": ["social", "personal", "past"] },
      { "ja": "プロジェクトを終わらせるつもりだ", "en": "I will finish the project", "tags": ["work", "fut"] },
      { "ja": "弟はいつも自分の部屋を綺麗にしている", "en": "My brother always keeps his room clean", "tags": ["home", "lifestyle", "habitual"] },
      { "ja": "父は私に一生懸命勉強するように言った", "en": "My father told me to study hard", "tags": ["personal", "skill", "past"] },
      { "ja": "会議が始まる予定だ", "en": "The meeting is going to start", "tags": ["work", "fut", "impersonal"] },
      { "ja": "生活スタイルを変えようと決めた", "en": "I decided to change my lifestyle", "tags": ["lifestyle", "personal", "past"] },
      { "ja": "その会社で働いている", "en": "I have been working at that company", "tags": ["work", "personal", "habitual"] },
      { "ja": "旅行の計画を立てるべきだ", "en": "We should plan our trip", "tags": ["outing", "social", "pres"] },
      { "ja": "私はいつも音楽を聴いている", "en": "I always listen to music", "tags": ["hobby", "study", "habitual"] },
      { "ja": "素敵なレストランを見つけた", "en": "I found a great restaurant", "tags": ["food", "outing", "past"] },
      { "ja": "私は日本料理の作り方を学んでいる", "en": "I am learning how to cook Japanese food", "tags": ["food", "skill", "pres"] },
      { "ja": "チームが一緒に問題を解決した", "en": "The team worked together to solve the problem", "tags": ["work", "social", "past"] },
      { "ja": "運動を始めたい", "en": "I want to start exercising", "tags": ["health", "lifestyle", "pres"] }
    ],
    "additions": {
      "preposition": [
        { "ja": "成功のために", "en": "for the sake of success", "promptType": "Wh-Question", "prompt": "Why?", "tags": ["work", "skill", "personal"], "semTag": "purpose" },
        { "ja": "新しいアイデアを持って", "en": "with some fresh ideas", "promptType": "VocabDrop", "prompt": "fresh ideas", "tags": ["work", "hobby"], "semTag": "manner" },
        { "ja": "長い間", "en": "for a long time", "promptType": "Wh-Question", "prompt": "How long?", "tags": ["universal"], "semTag": "duration" },
        { "ja": "ためらわずに", "en": "without any hesitation", "promptType": "VocabDrop", "prompt": "no hesitation", "tags": ["universal"], "semTag": "manner" },
        { "ja": "コツコツとした努力によって", "en": "through hard work and dedication", "promptType": "VocabDrop", "prompt": "hard work", "tags": ["work", "skill"], "semTag": "manner" },
        { "ja": "たくさんの熱意を持って", "en": "with a lot of enthusiasm", "promptType": "VocabDrop", "prompt": "enthusiasm", "tags": ["universal"], "semTag": "manner" },
        { "ja": "正しいステップを踏んで", "en": "by following the right steps", "promptType": "VocabDrop", "prompt": "right steps", "tags": ["work", "skill", "personal"], "semTag": "manner" }
      ],
      "when_clause": [
        { "ja": "チャンスがあるときはいつでも", "en": "whenever I have a chance", "promptType": "VocabDrop", "prompt": "whenever", "tags": ["universal", "recurring"], "semTag": "time" },
        { "ja": "私がオフィスにいたときに", "en": "when I was in the office", "promptType": "Wh-Question", "prompt": "When? (Office)", "tags": ["work", "past"], "semTag": "time" },
        { "ja": "まさか思っていないときに", "en": "when I least expected it", "promptType": "VocabDrop", "prompt": "unexpected", "tags": ["personal", "past"], "semTag": "time" },
        { "ja": "物事が辛くなったときはいつでも", "en": "whenever things get tough", "promptType": "VocabDrop", "prompt": "when tough", "tags": ["universal", "recurring"], "semTag": "time" }
      ],
      "to_infinitive": [
        { "ja": "リラックスするために", "en": "to relax after a long day", "promptType": "Wh-Question", "prompt": "Why?", "tags": ["relax", "home", "universal"], "semTag": "purpose" },
        { "ja": "もっと学ぶために", "en": "to learn more about it", "promptType": "Wh-Question", "prompt": "Why?", "tags": ["skill", "hobby", "work", "universal"], "semTag": "purpose" },
        { "ja": "良い印象を与えるために", "en": "to make a good impression", "promptType": "Wh-Question", "prompt": "Why?", "tags": ["work", "social", "personal"], "semTag": "purpose" },
        { "ja": "スキルを伸ばすために", "en": "to improve my skills", "promptType": "Wh-Question", "prompt": "Why?", "tags": ["skill", "work", "hobby"], "semTag": "purpose" },
        { "ja": "周りの人を助けるために", "en": "to help others around me", "promptType": "Wh-Question", "prompt": "Why?", "tags": ["social", "personal"], "semTag": "purpose" }
      ],
      "comparison": [
        { "ja": "以前よりもずっと効率的に", "en": "much more efficiently than before", "promptType": "VocabDrop", "prompt": "efficiency up", "tags": ["work", "skill"], "semTag": "manner" },
        { "ja": "想像していたよりも簡単に", "en": "more easily than I had imagined", "promptType": "VocabDrop", "prompt": "surprising result", "tags": ["universal"], "semTag": "manner" },
        { "ja": "いつもより少しだけ", "en": "just a little bit more than usual", "promptType": "VocabDrop", "prompt": "little more", "tags": ["universal"], "semTag": "manner" },
        { "ja": "思っていた以上に難しく", "en": "even harder than I expected", "promptType": "VocabDrop", "prompt": "harder than expected", "tags": ["work", "skill", "personal"], "semTag": "manner" },
        { "ja": "これまで以上に自信を持って", "en": "more confidently than ever", "promptType": "VocabDrop", "prompt": "more confident", "tags": ["universal"], "semTag": "manner" },
        { "ja": "前回よりずっとうまく", "en": "much better than last time", "promptType": "VocabDrop", "prompt": "better result", "tags": ["universal"], "semTag": "manner" }
      ],
      "relative_obj": [
        { "ja": "私がずっと探していた", "en": "that I had been looking for", "promptType": "VocabDrop", "prompt": "...that", "tags": ["personal", "lifestyle", "past"] },
        { "ja": "みんなが面白いと言っている", "en": "that everyone says is interesting", "promptType": "VocabDrop", "prompt": "...that", "tags": ["social", "hobby", "pres"] },
        { "ja": "彼が昨日教えてくれた", "en": "that he told me yesterday", "promptType": "VocabDrop", "prompt": "...that", "tags": ["social", "work", "skill", "past"] },
        { "ja": "ずっと試してみたかった", "en": "that I have always wanted to try", "promptType": "VocabDrop", "prompt": "...that", "tags": ["universal", "habitual"] },
        { "ja": "本当に驚かせた", "en": "that really surprised me", "promptType": "VocabDrop", "prompt": "...that", "tags": ["personal", "past"] },
        { "ja": "友達が勧めてくれた", "en": "that my friend recommended", "promptType": "VocabDrop", "prompt": "...that", "tags": ["social", "past"] }
      ]
    },
    "patterns": [
      ["preposition", "to_infinitive", "when_clause"],
      ["relative_obj", "comparison", "when_clause"],
      ["preposition", "relative_obj", "to_infinitive", "when_clause"],
      ["to_infinitive", "comparison", "preposition", "when_clause"]
    ]
  },

  "level_3": {
    "core_sentences": [
      { "ja": "その古い家はリフォームされた", "en": "The old house was renovated", "tags": ["home", "lifestyle", "past", "passive"] },
      { "ja": "私はこれまで一度も海外に行ったことがない", "en": "I have never been abroad before", "tags": ["personal", "outing", "past"] },
      { "ja": "新しいビルが建てられている", "en": "A new building is being built", "tags": ["work", "outing", "pres", "passive"] },
      { "ja": "私はすでにその本を読み終えた", "en": "I have already finished reading the book", "tags": ["hobby", "personal", "past"] },
      { "ja": "私は彼が真実を話していると確信している", "en": "I am convinced that he is telling the truth", "tags": ["people", "personal", "pres"] },
      { "ja": "その映画は世界中で何百万回も観られている", "en": "The movie has been watched millions of times worldwide", "tags": ["hobby", "media", "past", "passive"] },
      { "ja": "もし早く知っていたら、もっと早く始めていただろう", "en": "If I had known sooner, I would have started earlier", "tags": ["personal", "hypo"] },
      { "ja": "その研究は多くの科学者によって引用されている", "en": "The research has been cited by many scientists", "tags": ["study", "work", "past", "passive"] },
      { "ja": "ずっとピアノを弾いている", "en": "I have been playing the piano", "tags": ["hobby", "personal", "habitual"] },
      { "ja": "その決断は最終的に正しかったと証明された", "en": "The decision was proven to be right in the end", "tags": ["work", "personal", "past", "passive"] },
      { "ja": "私は自分の会社を作り上げた", "en": "I built my own company", "tags": ["work", "personal", "past"] },
      { "ja": "私はもっと早くに始めておけばよかった", "en": "I wish I had started earlier", "tags": ["personal", "hypo"] }
    ],
    "additions": {
      "preposition": [
        { "ja": "最新の技術を使って", "en": "with the latest technology", "promptType": "VocabDrop", "prompt": "with technology", "tags": ["work", "hobby", "media"], "semTag": "manner" },
        { "ja": "数年の努力の末に", "en": "after years of hard work", "promptType": "VocabDrop", "prompt": "after years", "tags": ["skill", "work", "personal"], "semTag": "duration" },
        { "ja": "何の経験もなしに", "en": "without any prior experience", "promptType": "VocabDrop", "prompt": "no experience", "tags": ["work", "skill", "personal"], "semTag": "manner" },
        { "ja": "あらゆる困難にもかかわらず", "en": "despite all the challenges", "promptType": "VocabDrop", "prompt": "despite", "tags": ["universal"], "semTag": "condition" },
        { "ja": "数ヶ月にわたって", "en": "over the course of several months", "promptType": "Wh-Question", "prompt": "How long?", "tags": ["work", "personal"], "semTag": "duration" }
      ],
      "to_infinitive": [
        { "ja": "将来のために何か新しいことを始めるために", "en": "to start something new for the future", "promptType": "Wh-Question", "prompt": "Why?", "tags": ["personal", "skill"], "semTag": "purpose" },
        { "ja": "世界に意味ある変化をもたらすために", "en": "to make a meaningful difference in the world", "promptType": "Wh-Question", "prompt": "Why?", "tags": ["personal", "social"], "semTag": "purpose" },
        { "ja": "ずっと夢見てきたことをついに達成するために", "en": "to finally achieve what I have always dreamed of", "promptType": "Wh-Question", "prompt": "Why?", "tags": ["personal", "skill"], "semTag": "purpose" },
        { "ja": "自分の経験を他の人たちと共有するために", "en": "to share my experience with others", "promptType": "Wh-Question", "prompt": "Why?", "tags": ["social", "personal"], "semTag": "purpose" }
      ],
      "comparison": [
        { "ja": "これまでで最も素晴らしい方法で", "en": "in the most wonderful way ever", "promptType": "VocabDrop", "prompt": "best way", "tags": ["universal"], "semTag": "manner" },
        { "ja": "想像していたよりもずっと深く", "en": "far more deeply than I had ever anticipated", "promptType": "VocabDrop", "prompt": "deeper impact", "tags": ["personal", "universal"], "semTag": "manner" },
        { "ja": "以前よりも大きなインパクトを持って", "en": "with even greater impact than before", "promptType": "VocabDrop", "prompt": "greater impact", "tags": ["work", "personal", "universal"], "semTag": "manner" },
        { "ja": "誰もが想像していた以上に意味深く", "en": "more meaningfully than anyone could have imagined", "promptType": "VocabDrop", "prompt": "beyond expectation", "tags": ["universal"], "semTag": "manner" }
      ],
      "relative_obj": [
        { "ja": "私が最も尊敬している", "en": "whom I respect the most", "promptType": "VocabDrop", "prompt": "...who", "tags": ["people", "personal", "universal", "pres"] },
        { "ja": "私の見方を完全に変えた", "en": "that has changed my perspective completely", "promptType": "VocabDrop", "prompt": "...that", "tags": ["personal", "past"] },
        { "ja": "多くの人がずっと待ち望んでいた", "en": "that many people have been waiting for", "promptType": "VocabDrop", "prompt": "...that", "tags": ["social", "work", "past"] },
        { "ja": "毎日私を鼓舞し続けている", "en": "that continues to inspire me every day", "promptType": "VocabDrop", "prompt": "...that", "tags": ["personal", "habitual"] }
      ],
      "comma_which": [
        { "ja": "それは私をとても幸せにした", "en": ", which made me very happy", "promptType": "Wh-Question", "prompt": ", which", "tags": ["universal"], "semTag": "result" },
        { "ja": "それが最終的な解決につながった", "en": ", which led to the final solution", "promptType": "Wh-Question", "prompt": ", which", "tags": ["work", "personal", "universal"], "semTag": "result" },
        { "ja": "それは誰も予想していなかったことだった", "en": ", which was something nobody had expected", "promptType": "VocabDrop", "prompt": ", which", "tags": ["personal", "universal"], "semTag": "result" },
        { "ja": "それが私にたくさんの自信を与えた", "en": ", which gave me a lot of confidence", "promptType": "VocabDrop", "prompt": ", which", "tags": ["personal", "work", "universal"], "semTag": "result" },
        { "ja": "それが私にとってすべてを変えた", "en": ", which changed everything for me", "promptType": "VocabDrop", "prompt": ", which", "tags": ["personal", "universal"], "semTag": "result" },
        { "ja": "それがとても感動的だと思った", "en": ", which I found very moving", "promptType": "Wh-Question", "prompt": ", which I...", "tags": ["universal"], "semTag": "result" },
        { "ja": "彼はすぐにそれに気づいた", "en": ", which he noticed right away", "promptType": "Wh-Question", "prompt": ", which he...", "tags": ["social", "universal"], "semTag": "result" }
      ],
      "participle": [
        { "ja": "未来に期待しながら", "en": "looking forward to the future", "promptType": "VocabDrop", "prompt": "looking...", "tags": ["personal", "people", "pres", "habitual"], "semTag": "emotion" },
        { "ja": "すべてのリスクを考慮して", "en": "considering all the risks", "promptType": "VocabDrop", "prompt": "considering...", "tags": ["work", "personal", "pres"], "semTag": "manner" },
        { "ja": "すべてのことに感謝しながら", "en": "feeling grateful for everything", "promptType": "VocabDrop", "prompt": "feeling...", "tags": ["personal", "pres", "habitual"], "semTag": "emotion" },
        { "ja": "充実感を感じながら", "en": "feeling a great sense of fulfillment", "promptType": "VocabDrop", "prompt": "feeling...", "tags": ["personal", "pres", "past"], "semTag": "emotion" },
        { "ja": "すべてが報われたと感じながら", "en": "feeling that it had all been worth it", "promptType": "VocabDrop", "prompt": "feeling that...", "tags": ["personal", "past"], "semTag": "emotion" },
        { "ja": "ベストを尽くしたことを知りながら", "en": "knowing that I had done my best", "promptType": "VocabDrop", "prompt": "knowing...", "tags": ["personal", "past"], "semTag": "emotion" },
        { "ja": "より良い明日を願いながら", "en": "hoping for a better tomorrow", "promptType": "VocabDrop", "prompt": "hoping...", "tags": ["personal", "pres", "habitual"], "semTag": "emotion" }
      ],

      "when_clause": [
        { "ja": "世界がこれまでにないほど急速に変化しているときに", "en": "when the world is changing faster than ever", "promptType": "Wh-Question", "prompt": "When?", "tags": ["pres"], "semTag": "time" },
        { "ja": "ついに目標に到達したとき", "en": "when I finally reached my goal", "promptType": "Wh-Question", "prompt": "When?", "tags": ["personal", "skill", "past"], "semTag": "time" },
        { "ja": "これまで歩んできた道を振り返るとき", "en": "when I look back on everything I have been through", "promptType": "Wh-Question", "prompt": "When?", "tags": ["personal", "habitual"], "semTag": "time" },
        { "ja": "ついにチャンスが訪れたとき", "en": "when the opportunity finally presented itself", "promptType": "Wh-Question", "prompt": "When?", "tags": ["personal", "work", "past"], "semTag": "time" }
      ]
    },
    "patterns": [
      ["preposition", "to_infinitive", "comma_which"],
      ["participle", "preposition", "when_clause"],
      ["relative_obj", "preposition", "when_clause"],
      ["to_infinitive", "comparison", "participle", "when_clause"]
    ]
  }
};
