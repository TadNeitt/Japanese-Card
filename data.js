// ==========================================
// FILE DỮ LIỆU TỪ VỰNG & BẢNG CHỮ CÁI (data.js)
// ==========================================

const HIRAGANA_GROUPS = [
  { id: 'a', name: 'A', selected: true, items: [{ kana: 'あ', romaji: ['a'] }, { kana: 'い', romaji: ['i'] }, { kana: 'う', romaji: ['u'] }, { kana: 'え', romaji: ['e'] }, { kana: 'お', romaji: ['o'] }] },
  { id: 'ka', name: 'Ka', selected: true, items: [{ kana: 'か', romaji: ['ka'] }, { kana: 'き', romaji: ['ki'] }, { kana: 'く', romaji: ['ku'] }, { kana: 'け', romaji: ['ke'] }, { kana: 'こ', romaji: ['ko'] }] },
  { id: 'sa', name: 'Sa', selected: false, items: [{ kana: 'さ', romaji: ['sa'] }, { kana: 'し', romaji: ['shi', 'si'] }, { kana: 'す', romaji: ['su'] }, { kana: 'せ', romaji: ['se'] }, { kana: 'そ', romaji: ['so'] }] },
  { id: 'ta', name: 'Ta', selected: false, items: [{ kana: 'た', romaji: ['ta'] }, { kana: 'ち', romaji: ['chi', 'ti'] }, { kana: 'つ', romaji: ['tsu', 'tu'] }, { kana: 'て', romaji: ['te'] }, { kana: 'と', romaji: ['to'] }] },
  { id: 'na', name: 'Na', selected: false, items: [{ kana: 'な', romaji: ['na'] }, { kana: 'に', romaji: ['ni'] }, { kana: 'ぬ', romaji: ['nu'] }, { kana: 'ね', romaji: ['ne'] }, { kana: 'の', romaji: ['no'] }] },
  { id: 'ha', name: 'Ha', selected: false, items: [{ kana: 'は', romaji: ['ha'] }, { kana: 'ひ', romaji: ['hi'] }, { kana: 'ふ', romaji: ['fu', 'hu'] }, { kana: 'へ', romaji: ['he'] }, { kana: 'ほ', romaji: ['ho'] }] },
  { id: 'ma', name: 'Ma', selected: false, items: [{ kana: 'ま', romaji: ['ma'] }, { kana: 'み', romaji: ['mi'] }, { kana: 'む', romaji: ['mu'] }, { kana: 'め', romaji: ['me'] }, { kana: 'も', romaji: ['mo'] }] },
  { id: 'ya', name: 'Ya', selected: false, items: [{ kana: 'や', romaji: ['ya'] }, { kana: 'ゆ', romaji: ['yu'] }, { kana: 'よ', romaji: ['yo'] }] },
  { id: 'ra', name: 'Ra', selected: false, items: [{ kana: 'ら', romaji: ['ra'] }, { kana: 'り', romaji: ['ri'] }, { kana: 'る', romaji: ['ru'] }, { kana: 'れ', romaji: ['re'] }, { kana: 'ろ', romaji: ['ro'] }] },
  { id: 'wa', name: 'Wa/N', selected: false, items: [{ kana: 'わ', romaji: ['wa'] }, { kana: 'を', romaji: ['wo', 'o'] }, { kana: 'ん', romaji: ['n'] }] },
  { id: 'ga', name: 'Ga', selected: false, items: [{ kana: 'が', romaji: ['ga'] }, { kana: 'ぎ', romaji: ['gi'] }, { kana: 'ぐ', romaji: ['gu'] }, { kana: 'げ', romaji: ['ge'] }, { kana: 'ご', romaji: ['go'] }] },
  { id: 'za', name: 'Za', selected: false, items: [{ kana: 'ざ', romaji: ['za'] }, { kana: 'じ', romaji: ['ji', 'zi'] }, { kana: 'ず', romaji: ['zu'] }, { kana: 'ぜ', romaji: ['ze'] }, { kana: 'ぞ', romaji: ['zo'] }] },
  { id: 'da', name: 'Da', selected: false, items: [{ kana: 'だ', romaji: ['da'] }, { kana: 'ぢ', romaji: ['ji', 'di'] }, { kana: 'づ', romaji: ['zu', 'du'] }, { kana: 'で', romaji: ['de'] }, { kana: 'ど', romaji: ['do'] }] },
  { id: 'ba', name: 'Ba', selected: false, items: [{ kana: 'ば', romaji: ['ba'] }, { kana: 'び', romaji: ['bi'] }, { kana: 'ぶ', romaji: ['bu'] }, { kana: 'べ', romaji: ['be'] }, { kana: 'ぼ', romaji: ['bo'] }] },
  { id: 'pa', name: 'Pa', selected: false, items: [{ kana: 'ぱ', romaji: ['pa'] }, { kana: 'ぴ', romaji: ['pi'] }, { kana: 'ぷ', romaji: ['pu'] }, { kana: 'ぺ', romaji: ['pe'] }, { kana: 'ぽ', romaji: ['po'] }] }
];

const KATAKANA_GROUPS = [
  { id: 'a', name: 'A', selected: true, items: [{ kana: 'ア', romaji: ['a'] }, { kana: 'イ', romaji: ['i'] }, { kana: 'ウ', romaji: ['u'] }, { kana: 'エ', romaji: ['e'] }, { kana: 'オ', romaji: ['o'] }] },
  { id: 'ka', name: 'Ka', selected: true, items: [{ kana: 'カ', romaji: ['ka'] }, { kana: 'キ', romaji: ['ki'] }, { kana: 'ク', romaji: ['ku'] }, { kana: 'ケ', romaji: ['ke'] }, { kana: 'コ', romaji: ['ko'] }] },
  { id: 'sa', name: 'Sa', selected: false, items: [{ kana: 'サ', romaji: ['sa'] }, { kana: 'シ', romaji: ['shi', 'si'] }, { kana: 'ス', romaji: ['su'] }, { kana: 'セ', romaji: ['se'] }, { kana: 'ソ', romaji: ['so'] }] },
  { id: 'ta', name: 'Ta', selected: false, items: [{ kana: 'タ', romaji: ['ta'] }, { kana: 'チ', romaji: ['chi', 'ti'] }, { kana: 'ツ', romaji: ['tsu', 'tu'] }, { kana: 'テ', romaji: ['te'] }, { kana: 'ト', romaji: ['to'] }] },
  { id: 'na', name: 'Na', selected: false, items: [{ kana: 'ナ', romaji: ['na'] }, { kana: 'ニ', romaji: ['ni'] }, { kana: 'ヌ', romaji: ['nu'] }, { kana: 'ネ', romaji: ['ne'] }, { kana: 'ノ', romaji: ['no'] }] },
  { id: 'ha', name: 'Ha', selected: false, items: [{ kana: 'ハ', romaji: ['ha'] }, { kana: 'ヒ', romaji: ['hi'] }, { kana: 'フ', romaji: ['fu', 'hu'] }, { kana: 'ヘ', romaji: ['he'] }, { kana: 'ホ', romaji: ['ho'] }] },
  { id: 'ma', name: 'Ma', selected: false, items: [{ kana: 'マ', romaji: ['ma'] }, { kana: 'ミ', romaji: ['mi'] }, { kana: 'ム', romaji: ['mu'] }, { kana: 'メ', romaji: ['me'] }, { kana: 'モ', romaji: ['mo'] }] },
  { id: 'ya', name: 'Ya', selected: false, items: [{ kana: 'ヤ', romaji: ['ya'] }, { kana: 'ユ', romaji: ['yu'] }, { kana: 'ヨ', romaji: ['yo'] }] },
  { id: 'ra', name: 'Ra', selected: false, items: [{ kana: 'ラ', romaji: ['ra'] }, { kana: 'リ', romaji: ['ri'] }, { kana: 'ル', romaji: ['ru'] }, { kana: 'レ', romaji: ['re'] }, { kana: 'ロ', romaji: ['ro'] }] },
  { id: 'wa', name: 'Wa/N', selected: false, items: [{ kana: 'ワ', romaji: ['wa'] }, { kana: 'ヲ', romaji: ['wo', 'o'] }, { kana: 'ン', romaji: ['n'] }] },
  { id: 'ga', name: 'Ga', selected: false, items: [{ kana: 'ガ', romaji: ['ga'] }, { kana: 'ギ', romaji: ['gi'] }, { kana: 'グ', romaji: ['gu'] }, { kana: 'ゲ', romaji: ['ge'] }, { kana: 'ゴ', romaji: ['go'] }] },
  { id: 'za', name: 'Za', selected: false, items: [{ kana: 'ザ', romaji: ['za'] }, { kana: 'ジ', romaji: ['ji', 'zi'] }, { kana: 'ズ', romaji: ['zu'] }, { kana: 'ゼ', romaji: ['ze'] }, { kana: 'ゾ', romaji: ['zo'] }] },
  { id: 'da', name: 'Da', selected: false, items: [{ kana: 'ダ', romaji: ['da'] }, { kana: 'ヂ', romaji: ['ji', 'di'] }, { kana: 'ヅ', romaji: ['zu', 'du'] }, { kana: 'デ', romaji: ['de'] }, { kana: 'ド', romaji: ['do'] }] },
  { id: 'ba', name: 'Ba', selected: false, items: [{ kana: 'バ', romaji: ['ba'] }, { kana: 'ビ', romaji: ['bi'] }, { kana: 'ブ', romaji: ['bu'] }, { kana: 'ベ', romaji: ['be'] }, { kana: 'ボ', romaji: ['bo'] }] },
  { id: 'pa', name: 'Pa', selected: false, items: [{ kana: 'パ', romaji: ['pa'] }, { kana: 'ピ', romaji: ['pi'] }, { kana: 'プ', romaji: ['pu'] }, { kana: 'ペ', romaji: ['pe'] }, { kana: 'ポ', romaji: ['po'] }] }
];

const CO_TUOI_TOPICS = [
  {
    id: 'tuoi_chao_hoi', name: '1. Chào hỏi & Xin phép cơ bản (9 câu)', selected: true,
    items: [
      { kana: 'おはようございます', romaji: ['ohayougozaimasu'], rubyHtml: 'おはようございます', meaning: 'Chào buổi sáng ( Chào lần gặp đầu tiên trong ngày )' },
      { kana: 'こんにちは', romaji: ['konnichiwa'], rubyHtml: 'こんにちは', meaning: 'Xin chào , chào buổi trưa , chào buổi chiều' },
      { kana: 'ありがとうございます', romaji: ['arigatougozaimasu'], rubyHtml: 'ありがとうございます', meaning: 'Cám ơn !' },
      { kana: 'おねがいします', romaji: ['onegaishimasu'], rubyHtml: 'おねがいします', meaning: 'Làm ơn ...' },
      { kana: 'すみません', romaji: ['sumimasen'], rubyHtml: 'すみません', meaning: 'Xin lỗi!' },
      { kana: 'さようなら', romaji: ['sayounara', 'sayonara'], rubyHtml: 'さようなら', meaning: 'Tạm biệt' },
      { kana: 'またあした', romaji: ['mataashita'], rubyHtml: 'またあした', meaning: 'Hẹn gặp lại ngày mai' },
      { kana: 'すみません、はいってもいいですか', romaji: ['sumimasenhaittemoiidesuka', 'haittemoiidesuka'], rubyHtml: 'すみません、はいってもいいですか', meaning: 'Xin lỗi ! Tôi đi vào có được không ạ ?' },
      { kana: 'すみません、でてもいいですか', romaji: ['sumimasendetemoiidesuka', 'detemoiidesuka'], rubyHtml: 'すみません、でてもいいですか', meaning: 'Xin lỗi ! Tôi đi ra ngoài có được không ạ?' }
    ]
  },
  {
    id: 'tuoi_trao_doi', name: '2. Hỏi đáp & Trao đổi trong lớp (13 câu)', selected: true,
    items: [
      { kana: 'すわってもいいですか', romaji: ['suwattemoiidesuka'], rubyHtml: 'すわってもいいですか', meaning: 'Tôi ngồi xuống được không ạ ?' },
      { kana: 'すみません、もういちどおねがいします', romaji: ['sumimasenmouichidoonegaishimasu', 'mouichidoonegaishimasu'], rubyHtml: 'すみません、もういちどおねがいします', meaning: 'Làm ơn đọc lại 1 lần' },
      { kana: 'せんせい、しつもんがあります', romaji: ['senseishitsumongaarimasu', 'shitsumongaarimasu'], rubyHtml: 'せんせい、しつもんがあります', meaning: 'Thưa sensei ! Em có câu hỏi' },
      { kana: 'わかりました', romaji: ['wakarimashita'], rubyHtml: 'わかりました', meaning: 'Em đã hiểu rồi !' },
      { kana: 'まだわかりません', romaji: ['madawakarimasen'], rubyHtml: 'まだわかりません', meaning: 'Em chưa hiểu !' },
      { kana: 'なんですか', romaji: ['nandesuka'], rubyHtml: 'なんですか', meaning: 'Gì vậy ạ !' },
      { kana: 'どうしてですか', romaji: ['doushitedesuka'], rubyHtml: 'どうしてですか', meaning: 'Tại sao ?' },
      { kana: 'にほんごでなんといいますか', romaji: ['nihongodenantoiimasuka'], rubyHtml: '<ruby>日本語<rt>にほんご</rt></ruby>でなんといいますか', meaning: 'Trong tiếng Nhật thì nói như thế nào ?' },
      { kana: 'どういういみですか', romaji: ['douiuimidesuka'], rubyHtml: 'どういう<ruby>意味<rt>いみ</rt></ruby>ですか', meaning: 'Có ý nghĩa là gì ?' },
      { kana: 'いいですか', romaji: ['iidesuka'], rubyHtml: 'いいですか', meaning: 'Có được không? (có làm sao không?)' },
      { kana: 'そうですか', romaji: ['soudesuka'], rubyHtml: 'そうですか', meaning: 'Vậy à , vậy ạ' },
      { kana: 'そうですね', romaji: ['soudesune'], rubyHtml: 'そうですね', meaning: 'Đúng vậy , đúng như thế đó' },
      { kana: 'おつかれさまでした', romaji: ['otsukaresamadeshita'], rubyHtml: 'おつかれさまでした', meaning: 'Anh/Chị đã vất vả rồi !' }
    ]
  },
  {
    id: 'tuoi_menh_lenh', name: '3. Bắt đầu, Kết thúc & Mệnh lệnh (11 câu)', selected: true,
    items: [
      { kana: 'はじめましょう', romaji: ['hajimemashou'], rubyHtml: 'はじめましょう', meaning: 'Bắt đầu tiết học nào !' },
      { kana: 'おわりましょう', romaji: ['owarimashou'], rubyHtml: 'おわりましょう', meaning: 'Kết thúc tiết học tại đây !' },
      { kana: 'やすみましょう', romaji: ['yasumimashou'], rubyHtml: 'やすみましょう', meaning: 'Cùng nghỉ giải lao' },
      { kana: 'たってください', romaji: ['tattekudasai'], rubyHtml: 'たってください', meaning: 'Hãy đứng lên !' },
      { kana: 'すわってください', romaji: ['suwattekudasai'], rubyHtml: 'すわってください', meaning: 'Hãy ngồi xuống !' },
      { kana: 'きいてください', romaji: ['kiitekudasai'], rubyHtml: 'きいてください', meaning: 'Hãy Nghe !' },
      { kana: 'みてください', romaji: ['mitekudasai'], rubyHtml: 'みてください', meaning: 'Hãy nhìn' },
      { kana: 'ほんをあけてください', romaji: ['honwoaketekudasai', 'honoaketekudasai'], rubyHtml: '<ruby>本<rt>ほん</rt></ruby>をあけてください', meaning: 'Hãy mở sách !' },
      { kana: 'ページをあけてください', romaji: ['pe-jiwoaketekudasai', 'pejiwoaketekudasai'], rubyHtml: 'ページをあけてください', meaning: 'Hãy mở sách trang ...' },
      { kana: 'しつもんがありますか', romaji: ['shitsumongaarimasuka'], rubyHtml: 'しつもんがありますか', meaning: 'Có câu hỏi không?' },
      { kana: 'れんしゅうしましょう', romaji: ['renshuushimashou'], rubyHtml: 'れんしゅうしましょう', meaning: 'Cùng luyện tập nào !' }
    ]
  },
  {
    id: 'tuoi_tu_vung', name: '4. Từ vựng lớp học & Lời khen (12 câu)', selected: true,
    items: [
      { kana: 'れい', romaji: ['rei'], rubyHtml: 'れい', meaning: 'Ví dụ ( Ví dụ như )' },
      { kana: 'かいわ', romaji: ['kaiwa'], rubyHtml: 'かいわ', meaning: 'Hội thoại' },
      { kana: 'ちょうかい', romaji: ['choukai'], rubyHtml: 'ちょうかい', meaning: 'Nghe' },
      { kana: 'どっかい', romaji: ['dokkai'], rubyHtml: 'どっかい', meaning: 'Đọc Hiểu' },
      { kana: 'しゅくだい', romaji: ['shukudai'], rubyHtml: 'しゅくだい', meaning: 'Bài tập về nhà' },
      { kana: 'テスト', romaji: ['tesuto'], rubyHtml: 'テスト', meaning: 'Bài test (bài kiểm tra)' },
      { kana: 'しけん', romaji: ['shiken'], rubyHtml: 'しけん', meaning: 'Kỳ thi' },
      { kana: 'しずかに', romaji: ['shizukani'], rubyHtml: 'しずかに', meaning: 'Hãy im lặng !' },
      { kana: 'すごいですね', romaji: ['sugoidesune'], rubyHtml: 'すごいですね', meaning: 'Giỏi nhỉ , siêu nhỉ' },
      { kana: 'ちがいます', romaji: ['chigaimasu'], rubyHtml: 'ちがいます', meaning: 'Sai rồi !' },
      { kana: 'がんばってください', romaji: ['ganbattekudasai'], rubyHtml: 'がんばってください', meaning: 'Cố gắng lên nhé !' },
      { kana: 'しつれいします', romaji: ['shitsureishimasu'], rubyHtml: 'しつれいします', meaning: 'Xin phép !' }
    ]
  }
];

const MINNA_LESSONS_DATA = {
  1: [
    { id: 'b1_xungho', name: 'A. Cách xưng hô', selected: true, items: [
      { kana: 'わたし', romaji: ['watashi'], rubyHtml: '<ruby>私<rt>わたし</rt></ruby>', meaning: 'Tôi' },
      { kana: 'あなた', romaji: ['anata'], rubyHtml: 'あなた', meaning: 'Bạn, anh, chị...' },
      { kana: 'あのひと', romaji: ['anohito'], rubyHtml: 'あの<ruby>人<rt>ひと</rt></ruby>', meaning: 'Người đó, anh kia, chị kia' },
      { kana: 'あのかた', romaji: ['anokata'], rubyHtml: 'あの<ruby>方<rt>かた</rt></ruby>', meaning: 'Vị đó, người đó (lịch sự)' },
      { kana: 'さん', romaji: ['san'], rubyHtml: 'さん' , meaning: 'Anh, chị, ông, bà (hậu tố)' },
      { kana: 'ちゃん', romaji: ['chan'], rubyHtml: 'ちゃん', meaning: 'Bé (hậu tố xưng hô trẻ em)' },
      { kana: 'だれ', romaji: ['dare'], rubyHtml: 'だれ', meaning: 'Ai' },
      { kana: 'どなた', romaji: ['donata'], rubyHtml: 'どなた', meaning: 'Vị nào, ai (lịch sự)' }
    ]},
    { id: 'b1_nghenghiep', name: 'B. Nghề nghiệp cơ bản', selected: true, items: [
      { kana: 'おしごとは?', romaji: ['oshigotowa'], rubyHtml: 'お<ruby>仕事<rt>しごと</rt></ruby>は', meaning: 'Công việc của bạn là gì?' },
      { kana: 'きょうし', romaji: ['kyoushi'], rubyHtml: '<ruby>教師<rt>きょうし</rt></ruby>', meaning: 'Giáo viên' },
      { kana: 'せんせい', romaji: ['sensei'], rubyHtml: '<ruby>先生<rt>せんせい</rt></ruby>', meaning: 'Thầy / Cô giáo' },
      { kana: 'かいしゃいん', romaji: ['kaishain'], rubyHtml: '<ruby>会社員<rt>かいしゃいん</rt></ruby>', meaning: 'Nhân viên công ty' },
      { kana: 'ぎんこういん', romaji: ['ginkoin', 'ginkouin'], rubyHtml: '<ruby>銀行員<rt>ぎんこういん</rt></ruby>', meaning: 'Nhân viên ngân hàng' },
      { kana: 'いしゃ', romaji: ['isha'], rubyHtml: '<ruby>医者<rt>いしゃ</rt></ruby>', meaning: 'Bác sĩ' },
      { kana: 'エンジニア', romaji: ['enjinia'], rubyHtml: 'エンジニア', meaning: 'Kỹ sư' },
      { kana: 'かんごし', romaji: ['kangoshi'], rubyHtml: '<ruby>看護師<rt>かんごし</rt></ruby>', meaning: 'Y tá' },
      { kana: 'かしゅ', romaji: ['kashu'], rubyHtml: '<ruby>歌手<rt>かしゅ</rt></ruby>', meaning: 'Ca sĩ' },
      { kana: 'はいゆう', romaji: ['haiyuu'], rubyHtml: '<ruby>俳優<rt>はいゆう</rt></ruby>', meaning: 'Diễn viên' }
    ]},
    { id: 'b1_diadiem', name: 'C. Địa điểm', selected: true, items: [
      { kana: 'かいしゃ', romaji: ['kaisha'], rubyHtml: '<ruby>会社<rt>かいしゃ</rt></ruby>', meaning: 'Công ty' },
      { kana: 'ぎんこう', romaji: ['ginkou'], rubyHtml: '<ruby>銀行<rt>ぎんこう</rt></ruby>', meaning: 'Ngân hàng' },
      { kana: 'だいがく', romaji: ['daigaku'], rubyHtml: '<ruby>大学<rt>だいがく</rt></ruby>', meaning: 'Đại học' }
    ]},
    { id: 'b1_datnuoc', name: 'D. Đất nước, Người, Ngôn ngữ', selected: true, items: [
      { kana: 'ベトナム', romaji: ['betonamu'], rubyHtml: 'ベトナム', meaning: 'Việt Nam' },
      { kana: 'ベトナムじん', romaji: ['betonamujin'], rubyHtml: 'ベトナム<ruby>人<rt>じん</rt></ruby>', meaning: 'Người Việt' },
      { kana: 'ベトナムご', romaji: ['betonamugo'], rubyHtml: 'ベトナム<ruby>語<rt>ご</rt></ruby>', meaning: 'Tiếng Việt' },
      { kana: 'イギリス', romaji: ['igirisu'], rubyHtml: 'イギリス', meaning: 'Anh' },
      { kana: 'えいご', romaji: ['eigo'], rubyHtml: '<ruby>英語<rt>えいご</rt></ruby>', meaning: 'Tiếng Anh' },
      { kana: 'アメリカ', romaji: ['amerika'], rubyHtml: 'アメリカ', meaning: 'Mĩ' },
      { kana: 'ちゅうごく', romaji: ['chuugoku'], rubyHtml: '<ruby>中国<rt>ちゅうごく</rt></ruby>', meaning: 'Trung Quốc' },
      { kana: 'にほん', romaji: ['nihon'], rubyHtml: '<ruby>日本<rt>にほん</rt></ruby>', meaning: 'Nhật Bản' },
      { kana: 'にほんご', romaji: ['nihongo'], rubyHtml: '<ruby>日本<rt>にほん</rt></ruby><ruby>語<rt>ご</rt></ruby>', meaning: 'Tiếng Nhật' }
    ]}
  ],
  2: [
    { id: 'b2_chithi', name: 'A. Chỉ thị từ chỉ đồ vật', selected: true, items: [
      { kana: 'これ', romaji: ['kore'], rubyHtml: 'これ', meaning: 'Cái này (gần người nói)' },
      { kana: 'この', romaji: ['kono'], rubyHtml: 'この', meaning: '~ này' },
      { kana: 'それ', romaji: ['sore'], rubyHtml: 'それ', meaning: 'Cái đó (gần người nghe)' },
      { kana: 'その', romaji: ['sono'], rubyHtml: 'その', meaning: '~ đó' },
      { kana: 'あれ', romaji: ['are'], rubyHtml: 'あれ', meaning: 'Cái kia (xa cả hai)' },
      { kana: 'あの', romaji: ['ano'], rubyHtml: 'あの', meaning: '~ kia' }
    ]},
    { id: 'b2_dovat', name: 'B. Một số đồ vật', selected: true, items: [
      { kana: 'ほん', romaji: ['hon'], rubyHtml: '<ruby>本<rt>ほん</rt></ruby>', meaning: 'Sách' },
      { kana: 'じしょ', romaji: ['jisho'], rubyHtml: '<ruby>辞書<rt>じしょ</rt></ruby>', meaning: 'Từ điển' },
      { kana: 'ざっし', romaji: ['zasshi'], rubyHtml: '<ruby>雑誌<rt>ざっし</rt></ruby>', meaning: 'Tạp chí' },
      { kana: 'しんぶん', romaji: ['shinbun'], rubyHtml: '<ruby>新聞<rt>しんぶん</rt></ruby>', meaning: 'Tờ báo' },
      { kana: 'ノート', romaji: ['no-to', 'noto'], rubyHtml: 'ノート', meaning: 'Vở' },
      { kana: 'てちょう', romaji: ['techou'], rubyHtml: '<ruby>手帳<rt>てちょう</rt></ruby>', meaning: 'Sổ tay' },
      { kana: 'めいし', romaji: ['meishi'], rubyHtml: '<ruby>名刺<rt>めいし</rt></ruby>', meaning: 'Danh thiếp' },
      { kana: 'カード', romaji: ['ka-do', 'kado'], rubyHtml: 'カード', meaning: 'Thẻ' },
      { kana: 'えんぴつ', romaji: ['enpitsu'], rubyHtml: 'えんぴつ', meaning: 'Bút chì' },
      { kana: 'ボールペン', romaji: ['bo-rupen', 'borupen'], rubyHtml: 'ボールペン', meaning: 'Bút bi' },
      { kana: 'かぎ', romaji: ['kagi'], rubyHtml: 'かぎ', meaning: 'Chìa khóa' },
      { kana: 'とけい', romaji: ['tokei'], rubyHtml: '<ruby>時計<rt>とけい</rt></ruby>', meaning: 'Đồng hồ' },
      { kana: 'かさ', romaji: ['kasa'], rubyHtml: 'かさ', meaning: 'Ô, dù' },
      { kana: 'かばん', romaji: ['kaban'], rubyHtml: 'かばん', meaning: 'Túi xách, cặp' },
      { kana: 'くるま', romaji: ['kuruma'], rubyHtml: '<ruby>車<rt>くるま</rt></ruby>', meaning: 'Ô tô, xe hơi' },
      { kana: 'つくえ', romaji: ['tsukue'], rubyHtml: '<ruby>机<rt>つくえ</rt></ruby>', meaning: 'Bàn' },
      { kana: 'いす', romaji: ['isu'], rubyHtml: 'いす', meaning: 'Ghế' },
      { kana: 'おかね', romaji: ['okane'], rubyHtml: 'お<ruby>金<rt>かね</rt></ruby>', meaning: 'Tiền' }
    ]},
    { id: 'b2_hoithoai', name: 'C & D. Từ vựng & Hội thoại', selected: true, items: [
      { kana: 'おみやげ', romaji: ['omiyage'], rubyHtml: 'お<ruby>土産<rt>みやげ</rt></ruby>', meaning: 'Quà tặng' },
      { kana: 'なに', romaji: ['nani', 'nan'], rubyHtml: '<ruby>何<rt>なに</rt></ruby>', meaning: 'Cái gì' },
      { kana: 'どうぞ', romaji: ['douzo'], rubyHtml: 'どうぞ', meaning: 'Xin mời' },
      { kana: 'これからおせわになります', romaji: ['korekaraosewaninarimasu'], rubyHtml: 'これからお<ruby>世話<rt>せわ</rt></ruby>になります', meaning: 'Từ nay rất mong sự giúp đỡ của anh/chị' }
    ]}
  ],
  3: [
    { id: 'b3_chithi', name: 'A. Chỉ thị từ chỉ nơi chốn', selected: true, items: [
      { kana: 'ここ', romaji: ['koko'], rubyHtml: 'ここ', meaning: 'Chỗ này, đây' },
      { kana: 'こちら', romaji: ['kochira'], rubyHtml: 'こちら', meaning: 'Đằng này (Lịch sự của ここ)' },
      { kana: 'そこ', romaji: ['soko'], rubyHtml: 'そこ', meaning: 'Chỗ đó, đó' },
      { kana: 'そちら', romaji: ['sochira'], rubyHtml: 'そちら', meaning: 'Đằng đó (Lịch sự của そこ)' },
      { kana: 'あそこ', romaji: ['asoko'], rubyHtml: 'あそこ', meaning: 'Chỗ kia, kia' },
      { kana: 'あちら', romaji: ['achira'], rubyHtml: 'あちら', meaning: 'Đằng kia (Lịch sự của あそこ)' },
      { kana: 'どこ', romaji: ['doko'], rubyHtml: 'どこ', meaning: 'Đâu, chỗ nào' },
      { kana: 'どちら', romaji: ['dochira'], rubyHtml: 'どちら', meaning: 'Hướng nào, đâu (Lịch sự)' }
    ]},
    { id: 'b3_noichon', name: 'B. Từ vựng chỉ nơi chốn', selected: true, items: [
      { kana: 'きょうしつ', romaji: ['kyoushitsu'], rubyHtml: '<ruby>教室<rt>きょうしつ</rt></ruby>', meaning: 'Phòng học' },
      { kana: 'しょくどう', romaji: ['shokudou'], rubyHtml: '<ruby>食堂<rt>しょくどう</rt></ruby>', meaning: 'Nhà ăn' },
      { kana: 'じむしょ', romaji: ['jimusho'], rubyHtml: '<ruby>事務所<rt>じむしょ</rt></ruby>', meaning: 'Văn phòng' },
      { kana: 'かいぎしつ', romaji: ['kaigishitsu'], rubyHtml: '<ruby>会議室<rt>かいぎしつ</rt></ruby>', meaning: 'Phòng họp' },
      { kana: 'うけつけ', romaji: ['uketsuke'], rubyHtml: '<ruby>受付<rt>うけつけ</rt></ruby>', meaning: 'Quầy lễ tân' },
      { kana: 'へや', romaji: ['heya'], rubyHtml: '<ruby>部屋<rt>へや</rt></ruby>', meaning: 'Căn phòng' },
      { kana: 'トイレ', romaji: ['toire'], rubyHtml: 'トイレ', meaning: 'Nhà vệ sinh' },
      { kana: 'おてあらい', romaji: ['otearai'], rubyHtml: 'お<ruby>手洗<rt>てあら</rt></ruby>い', meaning: 'Nhà vệ sinh' },
      { kana: 'かいだん', romaji: ['kaidan'], rubyHtml: '<ruby>階段<rt>かいだん</rt></ruby>', meaning: 'Cầu thang' },
      { kana: 'エレベーター', romaji: ['erebe-ta-', 'erebeta'], rubyHtml: 'エレベーター', meaning: 'Thang máy' },
      { kana: 'うち', romaji: ['uchi'], rubyHtml: 'うち', meaning: 'Nhà' }
    ]},
    { id: 'b3_dovat_hoithoai', name: 'C & D. Đồ vật & Hội thoại', selected: true, items: [
      { kana: 'じどうはんばいき', romaji: ['jidouhanbaiki'], rubyHtml: '<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>', meaning: 'Máy bán hàng tự động' },
      { kana: 'でんわ', romaji: ['denwa'], rubyHtml: '<ruby>電話<rt>でんわ</rt></ruby>', meaning: 'Điện thoại' },
      { kana: 'くつ', romaji: ['kutsu'], rubyHtml: 'くつ', meaning: 'Giày' },
      { kana: 'ネクタイ', romaji: ['nekutai'], rubyHtml: 'ネクタイ', meaning: 'Cà vạt' },
      { kana: 'ワイン', romaji: ['wain'], rubyHtml: 'ワイン', meaning: 'Rượu vang' },
      { kana: 'いくらですか', romaji: ['ikuradesuka'], rubyHtml: 'いくらですか', meaning: 'Bao nhiêu tiền ?' },
      { kana: 'いらっしゃいませ', romaji: ['irasshaimase'], rubyHtml: 'いらっしゃいませ', meaning: 'Xin chào quý khách' }
    ]}
  ],
  4: [
    { id: 'b4_dongtu', name: 'A & B. Nơi chốn & Động từ', selected: true, items: [
      { kana: 'おきます', romaji: ['okimasu'], rubyHtml: '<ruby>起<rt>お</rt></ruby>きます', meaning: 'Thức dậy' },
      { kana: 'ねます', romaji: ['nemasu'], rubyHtml: '<ruby>寝<rt>ね</rt></ruby>ます', meaning: 'Ngủ, đi ngủ' },
      { kana: 'はたらきます', romaji: ['hatarakimasu'], rubyHtml: '<ruby>働<rt>はたら</rt></ruby>きます', meaning: 'Làm việc' },
      { kana: 'やすみます', romaji: ['yasumimasu'], rubyHtml: '<ruby>休<rt>やす</rt></ruby>みます', meaning: 'Nghỉ ngơi' },
      { kana: 'べんきょうします', romaji: ['benkyoushimasu'], rubyHtml: '<ruby>勉強<rt>べんきょう</rt></ruby>します', meaning: 'Học tập' },
      { kana: 'おわります', romaji: ['owarimasu'], rubyHtml: '<ruby>終<rt>お</rt></ruby>わります', meaning: 'Kết thúc, xong' },
      { kana: 'ゆうびんきょく', romaji: ['yuubinkyoku'], rubyHtml: '<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>', meaning: 'Bưu điện' },
      { kana: 'としょかん', romaji: ['toshokan'], rubyHtml: '<ruby>図書館<rt>としょかん</rt></ruby>', meaning: 'Thư viện' },
      { kana: 'びじゅつかん', romaji: ['bijutsukan'], rubyHtml: '<ruby>美術館<rt>びじゅつかん</rt></ruby>', meaning: 'Bảo tàng mỹ thuật' }
    ]},
    { id: 'b4_thoigian', name: 'C & D. Thời gian & Thứ ngày', selected: true, items: [
      { kana: 'いま', romaji: ['ima'], rubyHtml: '<ruby>今<rt>いま</rt></ruby>', meaning: 'Bây giờ' },
      { kana: 'なんじ', romaji: ['nanji'], rubyHtml: '<ruby>何時<rt>なんじ</rt></ruby>', meaning: 'Mấy giờ?' },
      { kana: 'ごぜん', romaji: ['gozen'], rubyHtml: '<ruby>午前<rt>ごぜん</rt></ruby>', meaning: 'Sáng (Sáng trước 12h)' },
      { kana: 'ごご', romaji: ['gogo'], rubyHtml: '<ruby>午後<rt>ごご</rt></ruby>', meaning: 'Chiều (Mặt trời lặn)' },
      { kana: 'あさ', romaji: ['asa'], rubyHtml: '<ruby>朝<rt>あさ</rt></ruby>', meaning: 'Buổi sáng' },
      { kana: 'ひる', romaji: ['hiru'], rubyHtml: '<ruby>昼<rt>ひる</rt></ruby>', meaning: 'Buổi trưa' },
      { kana: 'ばん', romaji: ['ban'], rubyHtml: '<ruby>晩<rt>ばん</rt></ruby>', meaning: 'Buổi tối' },
      { kana: 'きのう', romaji: ['kinou'], rubyHtml: 'きのう', meaning: 'Hôm qua' },
      { kana: 'きょう', romaji: ['kyou'], rubyHtml: 'きょう', meaning: 'Hôm nay' },
      { kana: 'あした', romaji: ['ashita'], rubyHtml: 'あした', meaning: 'Ngày mai' },
      { kana: 'げつようび', romaji: ['getsuyoubi'], rubyHtml: '<ruby>月曜日<rt>げつようび</rt></ruby>', meaning: 'Thứ hai' },
      { kana: 'にちようび', romaji: ['nichiyoubi'], rubyHtml: '<ruby>日曜日<rt>にちようび</rt></ruby>', meaning: 'Chủ nhật' }
    ]}
  ],
  5: [
    { id: 'b5_phuongtien', name: 'A, B & C. Di chuyển & Phương tiện', selected: true, items: [
      { kana: 'いきます', romaji: ['ikimasu'], rubyHtml: '<ruby>行<rt>い</rt></ruby>きます', meaning: 'Đi' },
      { kana: 'きます', romaji: ['kimasu'], rubyHtml: '<ruby>来<rt>き</rt></ruby>きます', meaning: 'Đến' },
      { kana: 'かえります', romaji: ['kaerimasu'], rubyHtml: '<ruby>帰<rt>かえ</rt></ruby>ります', meaning: 'Về' },
      { kana: 'えき', romaji: ['eki'], rubyHtml: '<ruby>駅<rt>えき</rt></ruby>', meaning: 'Ga, nhà ga' },
      { kana: 'ひこうき', romaji: ['hikouki'], rubyHtml: '<ruby>飛行機<rt>ひこうき</rt></ruby>', meaning: 'Máy bay' },
      { kana: 'ふね', romaji: ['fune'], rubyHtml: '<ruby>船<rt>ふね</rt></ruby>', meaning: 'Thuyền, tàu thủy' },
      { kana: 'でんしゃ', romaji: ['densha'], rubyHtml: '<ruby>電車<rt>でんしゃ</rt></ruby>', meaning: 'Xe điện' },
      { kana: 'ちかてつ', romaji: ['chikatetsu'], rubyHtml: '<ruby>地下鉄<rt>ちかてつ</rt></ruby>', meaning: 'Tàu điện ngầm' },
      { kana: 'しんかんせん', romaji: ['shinkansen'], rubyHtml: '<ruby>新幹線<rt>しんかんせん</rt></ruby>', meaning: 'Tàu siêu tốc Shinkansen' },
      { kana: 'じてんしゃ', romaji: ['jitensha'], rubyHtml: '<ruby>自転車<rt>じてんしゃ</rt></ruby>', meaning: 'Xe đạp' },
      { kana: 'あるいて', romaji: ['aruite'], rubyHtml: '<ruby>歩<rt>ある</rt></ruby>いて', meaning: 'Đi bộ' }
    ]},
    { id: 'b5_ngay_thang', name: 'E & F. Từ chỉ Ngày & Tháng', selected: true, items: [
      { kana: 'せんしゅう', romaji: ['senshuu'], rubyHtml: '<ruby>先週<rt>せんしゅう</rt></ruby>', meaning: 'Tuần trước' },
      { kana: 'こんしゅう', romaji: ['konshuu'], rubyHtml: '<ruby>今週<rt>こんしゅう</rt></ruby>', meaning: 'Tuần này' },
      { kana: 'らいしゅう', romaji: ['raishuu'], rubyHtml: '<ruby>来週<rt>らいしゅう</rt></ruby>', meaning: 'Tuần sau' },
      { kana: 'ついたち', romaji: ['tsuitachi'], rubyHtml: '<ruby>一日<rt>ついたち</rt></ruby>', meaning: 'Ngày mùng 1' },
      { kana: 'ふつか', romaji: ['futsuka'], rubyHtml: '<ruby>二日<rt>ふつか</rt></ruby>', meaning: 'Ngày mùng 2' },
      { kana: 'みっか', romaji: ['mikka'], rubyHtml: '<ruby>三日<rt>みっか</rt></ruby>', meaning: 'Ngày mùng 3' },
      { kana: 'よっか', romaji: ['yokka'], rubyHtml: '<ruby>四日<rt>よっか</rt></ruby>', meaning: 'Ngày mùng 4' },
      { kana: 'いつか', romaji: ['itsuka'], rubyHtml: '<ruby>五日<rt>いつか</rt></ruby>', meaning: 'Ngày mùng 5' },
      { kana: 'とおか', romaji: ['tooka'], rubyHtml: '<ruby>十日<rt>とおか</rt></ruby>', meaning: 'Ngày mùng 10' },
      { kana: 'はつか', romaji: ['hatsuka'], rubyHtml: '<ruby>二十日<rt>はつか</rt></ruby>', meaning: 'Ngày 20' },
      { kana: 'たんじょうび', romaji: ['tanjoubi'], rubyHtml: '<ruby>誕生日<rt>たんじょうび</rt></ruby>', meaning: 'Sinh nhật' }
    ]}
  ],
  6: [
    { id: 'b6_dongtu', name: 'A. Động từ ăn uống / sinh hoạt', selected: true, items: [
      { kana: 'たべます', romaji: ['tabemasu'], rubyHtml: '<ruby>食<rt>た</rt></ruby>べます', meaning: 'Ăn' },
      { kana: 'みます', romaji: ['mimasu'], rubyHtml: '<ruby>見<rt>み</rt></ruby>ます', meaning: 'Nhìn, xem' },
      { kana: 'ききます', romaji: ['kikimasu'], rubyHtml: '<ruby>聞<rt>き</rt></ruby>きます', meaning: 'Nghe' },
      { kana: 'よみます', romaji: ['yomimasu'], rubyHtml: '<ruby>読<rt>よ</rt></ruby>みます', meaning: 'Đọc' },
      { kana: 'かきます', romaji: ['kakimasu'], rubyHtml: '<ruby>書<rt>か</rt></ruby>きます', meaning: 'Viết' },
      { kana: 'かいます', romaji: ['kaimasu'], rubyHtml: '<ruby>買<rt>か</rt></ruby>います', meaning: 'Mua' },
      { kana: 'しゃしんをとります', romaji: ['shashinwotorimasu', 'shashinotorimasu'], rubyHtml: '<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ります', meaning: 'Chụp ảnh' },
      { kana: 'ともだちにあいます', romaji: ['tomodachiniaimasu'], rubyHtml: '<ruby>友達<rt>ともだち</rt></ruby>に<ruby>会<rt>あ</rt></ruby>います', meaning: 'Gặp bạn bè' }
    ]},
    { id: 'b6_doan', name: 'B & C. Đồ ăn & Đồ vật khác', selected: true, items: [
      { kana: 'ごはん', romaji: ['gohan'], rubyHtml: '<ruby>ご飯<rt>ごはん</rt></ruby>', meaning: 'Cơm / Bữa ăn' },
      { kana: 'あさごはん', romaji: ['asagohan'], rubyHtml: '<ruby>朝ご飯<rt>あさごはん</rt></ruby>', meaning: 'Bữa sáng' },
      { kana: 'ひるごはん', romaji: ['hirugohan'], rubyHtml: '<ruby>昼ご飯<rt>ひるごはん</rt></ruby>', meaning: 'Bữa trưa' },
      { kana: 'ばんごはん', romaji: ['bangohan'], rubyHtml: '<ruby>晩ご飯<rt>ばんごはん</rt></ruby>', meaning: 'Bữa tối' },
      { kana: 'みず', romaji: ['mizu'], rubyHtml: '<ruby>水<rt>みず</rt></ruby>', meaning: 'Nước' },
      { kana: 'おちゃ', romaji: ['ocha'], rubyHtml: 'お<ruby>茶<rt>ちゃ</rt></ruby>', meaning: 'Trà' },
      { kana: 'ビール', romaji: ['bi-ru', 'biru'], rubyHtml: 'ビール', meaning: 'Bia' },
      { kana: 'てがみ', romaji: ['tegami'], rubyHtml: '<ruby>手紙<rt>てがみ</rt></ruby>', meaning: 'Thư' },
      { kana: 'いっしょに', romaji: ['isshoni'], rubyHtml: '<ruby>一緒<rt>いっしょ</rt></ruby>に', meaning: 'Cùng nhau' }
    ]}
  ],
  7: [
    { id: 'b7_dongtu', name: 'A & B. Động từ & Vật dụng', selected: true, items: [
      { kana: 'きります', romaji: ['kirimasu'], rubyHtml: '<ruby>切<rt>き</rt></ruby>ります', meaning: 'Cắt' },
      { kana: 'おくります', romaji: ['okurimasu'], rubyHtml: '<ruby>送<rt>おく</rt></ruby>ります', meaning: 'Gửi' },
      { kana: 'あげます', romaji: ['agemasu'], rubyHtml: 'あげます', meaning: 'Cho, tặng' },
      { kana: 'もらいます', romaji: ['moraimasu'], rubyHtml: 'もらいます', meaning: 'Nhận' },
      { kana: 'かします', romaji: ['kashimasu'], rubyHtml: '<ruby>貸<rt>か</rt></ruby>します', meaning: 'Cho mượn' },
      { kana: 'かります', romaji: ['karimasu'], rubyHtml: '<ruby>借<rt>か</rt></ruby>ります', meaning: 'Mượn' },
      { kana: 'おしえます', romaji: ['oshiemasu'], rubyHtml: '<ruby>教<rt>おし</rt></ruby>えます', meaning: 'Dạy học' },
      { kana: 'ならいます', romaji: ['naraimasu'], rubyHtml: '<ruby>習<rt>なら</rt></ruby>います', meaning: 'Học tập' },
      { kana: 'て', romaji: ['te'], rubyHtml: '<ruby>手<rt>て</rt></ruby>', meaning: 'Tay' },
      { kana: 'はし', romaji: ['hashi'], rubyHtml: 'はし', meaning: 'Đũa' },
      { kana: 'はさみ', romaji: ['hasami'], rubyHtml: 'はさみ', meaning: 'Kéo' },
      { kana: 'プレゼント', romaji: ['purezento'], rubyHtml: 'プレゼント', meaning: 'Quà tặng' },
      { kana: 'おとうさん', romaji: ['otousan'], rubyHtml: 'お<ruby>父<rt>とう</rt></ruby>さん', meaning: 'Bố (người khác)' },
      { kana: 'おかあさん', romaji: ['okaasan'], rubyHtml: 'お<ruby>母<rt>かあ</rt></ruby>さん', meaning: 'Mẹ (người khác)' }
    ]}
  ],
  8: [
    { id: 'b8_na', name: 'A. Tính từ đuôi な', selected: true, items: [
      { kana: 'ハンサム', romaji: ['hansamu'], rubyHtml: 'ハンサム', meaning: 'Đẹp trai' },
      { kana: 'きれい', romaji: ['kirei'], rubyHtml: 'きれい', meaning: 'Đẹp, sạch sẽ' },
      { kana: 'しずか', romaji: ['shizuka'], rubyHtml: '<ruby>静<rt>しず</rt></ruby>か', meaning: 'Yên tĩnh' },
      { kana: 'にぎやか', romaji: ['nigiyaka'], rubyHtml: 'にぎやか', meaning: 'Náo nhiệt' },
      { kana: 'ゆうめい', romaji: ['yuumei'], rubyHtml: '<ruby>有名<rt>ゆうめい</rt></ruby>', meaning: 'Nổi tiếng' },
      { kana: 'しんせつ', romaji: ['shinsetsu'], rubyHtml: '<ruby>親切<rt>しんせつ</rt></ruby>', meaning: 'Thân thiện, tốt bụng' },
      { kana: 'げんき', romaji: ['genki'], rubyHtml: '<ruby>元気<rt>げんき</rt></ruby>', meaning: 'Khỏe mạnh' },
      { kana: 'べんり', romaji: ['benri'], rubyHtml: '<ruby>便利<rt>べんり</rt></ruby>', meaning: 'Tiện lợi' }
    ]},
    { id: 'b8_i', name: 'B & C. Tính từ đuôi い & Danh từ', selected: true, items: [
      { kana: 'おおきい', romaji: ['ookii'], rubyHtml: '<ruby>大<rt>おお</rt></ruby>きい', meaning: 'Lớn, to' },
      { kana: 'ちいさい', romaji: ['chiisai'], rubyHtml: '<ruby>小<rt>ちい</rt></ruby>さい', meaning: 'Nhỏ, bé' },
      { kana: 'あたらしい', romaji: ['atarashii'], rubyHtml: '<ruby>新<rt>あたら</rt></ruby>しい', meaning: 'Mới' },
      { kana: 'ふるい', romaji: ['furui'], rubyHtml: '<ruby>古<rt>ふる</rt></ruby>い', meaning: 'Cũ' },
      { kana: 'いい', romaji: ['ii', 'yoi'], rubyHtml: 'いい', meaning: 'Tốt' },
      { kana: 'わるい', romaji: ['warui'], rubyHtml: '<ruby>悪<rt>わる</rt></ruby>い', meaning: 'Xấu, tồi' },
      { kana: 'あつい', romaji: ['atsui'], rubyHtml: '<ruby>暑<rt>あつ</rt></ruby>い', meaning: 'Nóng (Thời tiết)' },
      { kana: 'さむい', romaji: ['samui'], rubyHtml: '<ruby>寒<rt>さむ</rt></ruby>い', meaning: 'Lạnh (Thời tiết)' },
      { kana: 'むずかしい', romaji: ['muzukashii'], rubyHtml: '<ruby>難<rt>むずか</rt></ruby>しい', meaning: 'Khó' },
      { kana: 'たかい', romaji: ['takai'], rubyHtml: '<ruby>高<rt>たか</rt></ruby>い', meaning: 'Đắt / Cao' },
      { kana: 'やすい', romaji: ['yasui'], rubyHtml: '<ruby>安<rt>やす</rt></ruby>い', meaning: 'Rẻ' },
      { kana: 'おいしい', romaji: ['oishii'], rubyHtml: 'おいしい', meaning: 'Ngon' }
    ]}
  ],
  9: [
    { id: 'b9_sothich', name: 'A, B & C. Sở thích / Khả năng', selected: true, items: [
      { kana: 'わかります', romaji: ['wakarimasu'], rubyHtml: '分かります', meaning: 'Hiểu, nắm được' },
      { kana: 'あります', romaji: ['arimasu'], rubyHtml: 'あります', meaning: 'Có (Sở hữu)' },
      { kana: 'すき', romaji: ['suki'], rubyHtml: '<ruby>好<rt>す</rt></ruby>き', meaning: 'Thích' },
      { kana: 'きらい', romaji: ['kirai'], rubyHtml: '<ruby>嫌<rt>きら</rt></ruby>い', meaning: 'Ghét, không thích' },
      { kana: 'じょうず', romaji: ['jouzu'], rubyHtml: '<ruby>上手<rt>じょうず</rt></ruby>', meaning: 'Giỏi, khéo' },
      { kana: 'へた', romaji: ['heta'], rubyHtml: '<ruby>下手<rt>へた</rt></ruby>', meaning: 'Kém, dở' },
      { kana: 'りょうり', romaji: ['ryouri'], rubyHtml: '<ruby>料理<rt>りょうり</rt></ruby>', meaning: 'Món ăn, nấu ăn' },
      { kana: 'スポーツ', romaji: ['supo-tsu', 'supotsu'], rubyHtml: 'スポーツ', meaning: 'Thể thao' },
      { kana: 'おんがく', romaji: ['ongaku'], rubyHtml: '<ruby>音楽<rt>おんがく</rt></ruby>', meaning: 'Âm nhạc' },
      { kana: 'うた', romaji: ['uta'], rubyHtml: '<ruby>歌<rt>うた</rt></ruby>', meaning: 'Bài hát' },
      { kana: 'じかん', romaji: ['jikan'], rubyHtml: '<ruby>時間<rt>じかん</rt></ruby>', meaning: 'Thời gian' },
      { kana: 'ようじ', romaji: ['youji'], rubyHtml: '<ruby>用事<rt>ようじ</rt></ruby>', meaning: 'Việc bận' }
    ]}
  ],
  10: [
    { id: 'b10_tontai', name: 'A & B. Động từ tồn tại & Đối tượng', selected: true, items: [
      { kana: 'あります', romaji: ['arimasu'], rubyHtml: 'あります', meaning: 'Có (tồn tại vật vô giác)' },
      { kana: 'います', romaji: ['imasu'], rubyHtml: 'います', meaning: 'Có, ở (người, động vật)' },
      { kana: 'おとこのひと', romaji: ['otokonohito'], rubyHtml: '<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>', meaning: 'Người đàn ông' },
      { kana: 'おんなのひと', romaji: ['onnanohito'], rubyHtml: '<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>', meaning: 'Người phụ nữ' },
      { kana: 'いぬ', romaji: ['inu'], rubyHtml: '<ruby>犬<rt>いぬ</rt></ruby>', meaning: 'Con chó' },
      { kana: 'ねこ', romaji: ['neko'], rubyHtml: '<ruby>猫<rt>ねこ</rt></ruby>', meaning: 'Con mèo' },
      { kana: 'き', romaji: ['ki'], rubyHtml: '<ruby>木<rt>き</rt></ruby>', meaning: 'Cây, gỗ' },
      { kana: 'もの', romaji: ['mono'], rubyHtml: 'もの', meaning: 'Đồ vật' },
      { kana: 'れいぞうこ', romaji: ['reizouko'], rubyHtml: '<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>', meaning: 'Tủ lạnh' }
    ]},
    { id: 'b10_vitri', name: 'C. Từ vựng Vị trí nơi chốn', selected: true, items: [
      { kana: 'うえ', romaji: ['ue'], rubyHtml: '<ruby>上<rt>うえ</rt></ruby>', meaning: 'Trên' },
      { kana: 'した', romaji: ['shita'], rubyHtml: '<ruby>下<rt>した</rt></ruby>', meaning: 'Dưới' },
      { kana: 'まえ', romaji: ['mae'], rubyHtml: '<ruby>前<rt>まえ</rt></ruby>', meaning: 'Trước' },
      { kana: 'うしろ', romaji: ['ushiro'], rubyHtml: '<ruby>後ろ<rt>うしろ</rt></ruby>', meaning: 'Sau' },
      { kana: 'みぎ', romaji: ['migi'], rubyHtml: '<ruby>右<rt>みぎ</rt></ruby>', meaning: 'Phải' },
      { kana: 'ひだり', romaji: ['hidari'], rubyHtml: '<ruby>左<rt>ひだり</rt></ruby>', meaning: 'Trái' },
      { kana: 'なか', romaji: ['naka'], rubyHtml: '<ruby>中<rt>なか</rt></ruby>', meaning: 'Trong' },
      { kana: 'そと', romaji: ['soto'], rubyHtml: '<ruby>外<rt>そと</rt></ruby>', meaning: 'Ngoài' },
      { kana: 'となり', romaji: ['tonari'], rubyHtml: '<ruby>隣<rt>となり</rt></ruby>', meaning: 'Bên cạnh, kế bên' },
      { kana: 'ちかく', romaji: ['chikaku'], rubyHtml: '<ruby>近く<rt>ちかく</rt></ruby>', meaning: 'Gần' },
      { kana: 'あいだ', romaji: ['aida'], rubyHtml: '<ruby>間<rt>あいだ</rt></ruby>', meaning: 'Ở giữa' }
    ]}
  ],
  // Thêm toàn bộ Bài 26 -> 50 vào mảng MINNA_LESSONS_DATA hiện tại trong data.js

  26: [
    { id: 'b26_dongtu', name: 'A. Động từ & Trạng thái', selected: true, items: [
      { kana: 'みます', romaji: ['mimasu'], rubyHtml: '<ruby>見<rt>み</rt></ruby>ます / <ruby>診<rt>み</rt></ruby>ます', meaning: 'Xem, khám bệnh' },
      { kana: 'さがします', romaji: ['sagashimasu'], rubyHtml: '<ruby>探<rt>さが</rt></ruby>します / <ruby>捜<rt>さが</rt></ruby>します', meaning: 'Tìm, tìm kiếm' },
      { kana: 'おくれます', romaji: ['okuremasu'], rubyHtml: '<ruby>遅<rt>おく</rt></ruby>れます', meaning: 'Muộn, chậm' },
      { kana: 'やります', romaji: ['yarimasu'], rubyHtml: 'やります', meaning: 'Làm, chơi' },
      { kana: 'さんかします', romaji: ['sankashimasu'], rubyHtml: '<ruby>参加<rt>さんか</rt></ruby>します', meaning: 'Tham gia' },
      { kana: 'もうしこみます', romaji: ['moushikomimasu'], rubyHtml: '<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みます', meaning: 'Đăng ký' },
      { kana: 'つごうがいい', romaji: ['tsugougaii'], rubyHtml: '<ruby>都合<rt>つごう</rt></ruby>がいい', meaning: 'Thuận tiện (thời gian)' },
      { kana: 'つごうがわるい', romaji: ['tsugougawarui'], rubyHtml: '<ruby>都合<rt>つごう</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>い', meaning: 'Bất tiện (thời gian)' },
      { kana: 'きぶんがいい', romaji: ['kibungaii'], rubyHtml: '<ruby>気分<rt>きぶん</rt></ruby>がいい', meaning: 'Thấy dễ chịu, thoải mái' },
      { kana: 'きぶんがわるい', romaji: ['kibungawarui'], rubyHtml: '<ruby>気分<rt>きぶん</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>い', meaning: 'Thấy khó chịu, mệt' },
      { kana: 'かたづきます', romaji: ['katadzukimasu', 'katatsukimasu'], rubyHtml: '<ruby>片付<rt>かたづ</rt></ruby>きます', meaning: 'Được dọn dẹp ngăn nắp' },
      { kana: 'だします', romaji: ['dashimasu'], rubyHtml: '<ruby>出<rt>だ</rt></ruby>します', meaning: 'Đưa ra, đổ (rác)' },
      { kana: 'もえます', romaji: ['moemasu'], rubyHtml: '<ruby>燃<rt>も</rt></ruby>えます', meaning: 'Cháy được (rác)' },
      { kana: 'れんらくします', romaji: ['renrakushimasu'], rubyHtml: '<ruby>連絡<rt>れんらく</rt></ruby>します', meaning: 'Liên lạc' }
    ]},
    { id: 'b26_dovat', name: 'B. Đồ vật & Rác', selected: true, items: [
      { kana: 'ごみ', romaji: ['gomi'], rubyHtml: 'ごみ', meaning: 'Rác' },
      { kana: 'おきば', romaji: ['okiba'], rubyHtml: '<ruby>置<rt>お</rt></ruby>き<ruby>場<rt>ば</rt></ruby>', meaning: 'Nơi để, chỗ để' },
      { kana: 'よこ', romaji: ['yoko'], rubyHtml: '<ruby>横<rt>よこ</rt></ruby>', meaning: 'Bên cạnh, chiều ngang' },
      { kana: 'びん', romaji: ['bin'], rubyHtml: '<ruby>瓶<rt>びん</rt></ruby>', meaning: 'Chai, lọ thủy tinh' },
      { kana: 'かん', romaji: ['kan'], rubyHtml: '<ruby>缶<rt>かん</rt></ruby>', meaning: 'Lon (nước, đồ hộp)' },
      { kana: 'おゆ', romaji: ['oyu'], rubyHtml: 'お<ruby>湯<rt>ゆ</rt></ruby>', meaning: 'Nước nóng' },
      { kana: 'ガス', romaji: ['gasu'], rubyHtml: 'ガス', meaning: 'Ga, khí ga' }
    ]},
    { id: 'b26_vutru', name: 'C. Vũ trụ, Xã hội & Khác', selected: true, items: [
      { kana: 'しんぶんしゃ', romaji: ['shinbunsha'], rubyHtml: '<ruby>新聞社<rt>しんぶんしゃ</rt></ruby>', meaning: 'Tòa soạn báo' },
      { kana: 'じゅうどう', romaji: ['juudou'], rubyHtml: '<ruby>柔道<rt>じゅうどう</rt></ruby>', meaning: 'Võ Judo' },
      { kana: 'うんどうかい', romaji: ['undoukai'], rubyHtml: '<ruby>運動会<rt>うんどうかい</rt></ruby>', meaning: 'Hội thao' },
      { kana: 'ばしょ', romaji: ['basho'], rubyHtml: '<ruby>場所<rt>ばしょ</rt></ruby>', meaning: 'Địa điểm, chỗ' },
      { kana: 'ボランティア', romaji: ['borantia'], rubyHtml: 'ボランティア', meaning: 'Tình nguyện viên' },
      { kana: 'うちゅう', romaji: ['uchuu'], rubyHtml: '<ruby>宇宙<rt>うちゅう</rt></ruby>', meaning: 'Vũ trụ' },
      { kana: 'うちゅうせん', romaji: ['uchuusen'], rubyHtml: '<ruby>宇宙船<rt>うちゅうせん</rt></ruby>', meaning: 'Tàu vũ trụ' },
      { kana: 'うちゅうひこうし', romaji: ['uchuuhikoushi'], rubyHtml: '<ruby>宇宙飛行士<rt>うちゅうひこうし</rt></ruby>', meaning: 'Phi hành gia' },
      { kana: 'こわい', romaji: ['kowai'], rubyHtml: '<ruby>怖<rt>こわ</rt></ruby>い', meaning: 'Sợ, đáng sợ' },
      { kana: 'こどものひ', romaji: ['kodomonohi'], rubyHtml: 'こどもの<ruby>日<rt>ひ</rt></ruby>', meaning: 'Ngày trẻ em' }
    ]},
    { id: 'b26_giaotiep', name: 'D. Giao tiếp & Trạng từ', selected: true, items: [
      { kana: 'こんど', romaji: ['kondo'], rubyHtml: '<ruby>今度<rt>こんど</rt></ruby>', meaning: 'Lần này, lần tới' },
      { kana: 'ずいぶん', romaji: ['zuibun'], rubyHtml: 'ずいぶん', meaning: 'Khá là, tương đối' },
      { kana: 'ちょくせつ', romaji: ['chokusetsu'], rubyHtml: '<ruby>直接<rt>ちょくせつ</rt></ruby>', meaning: 'Trực tiếp' },
      { kana: 'いつでも', romaji: ['itsudemo'], rubyHtml: 'いつでも', meaning: 'Bất kỳ lúc nào' },
      { kana: 'どこでも', romaji: ['dokodemo'], rubyHtml: 'どこでも', meaning: 'Bất kỳ đâu' },
      { kana: 'だれでも', romaji: ['daredemo'], rubyHtml: 'だれでも', meaning: 'Bất kỳ ai' },
      { kana: 'なんでも', romaji: ['nandemo'], rubyHtml: '<ruby>何<rt>なん</rt></ruby>でも', meaning: 'Bất kỳ cái gì' },
      { kana: 'こまったなあ', romaji: ['komattanaa'], rubyHtml: '<ruby>困<rt>こま</rt></ruby>ったなあ', meaning: 'Gay thật nhỉ / Rắc rối quá' }
    ]}
  ],
  27: [
    { id: 'b27_khanang', name: 'A. Động từ khả năng', selected: true, items: [
      { kana: 'かいます', romaji: ['kaimasu'], rubyHtml: '<ruby>飼<rt>か</rt></ruby>います', meaning: 'Nuôi (động vật)' },
      { kana: 'たてます', romaji: ['tatemasu'], rubyHtml: '<ruby>建<rt>た</rt></ruby>てます', meaning: 'Xây dựng' },
      { kana: 'はしります', romaji: ['hashirimasu'], rubyHtml: '<ruby>走<rt>はし</rt></ruby>ります', meaning: 'Chạy (trên đường)' },
      { kana: 'とります', romaji: ['torimasu'], rubyHtml: '<ruby>取<rt>と</rt></ruby>ります', meaning: 'Xin (nghỉ)' },
      { kana: 'みえます', romaji: ['miemasu'], rubyHtml: '<ruby>見<rt>み</rt></ruby>えます', meaning: 'Nhìn thấy' },
      { kana: 'きこえます', romaji: ['kikoemasu'], rubyHtml: '<ruby>聞<rt>き</rt></ruby>こえます', meaning: 'Nghe thấy' },
      { kana: 'できます', romaji: ['dekimasu'], rubyHtml: 'できます', meaning: 'Có thể làm / Hoàn thành' },
      { kana: 'ひらきます', romaji: ['hirakimasu'], rubyHtml: '<ruby>開<rt>ひら</rt></ruby>きます', meaning: 'Mở (lớp học, hội)' },
      { kana: 'とびます', romaji: ['tobimasu'], rubyHtml: '<ruby>飛<rt>と</rt></ruby>びます', meaning: 'Bay' }
    ]},
    { id: 'b27_phongcanh', name: 'B. Phong cảnh & Động vật', selected: true, items: [
      { kana: 'ペット', romaji: ['petto'], rubyHtml: 'ペット', meaning: 'Thú cưng' },
      { kana: 'とり', romaji: ['tori'], rubyHtml: '<ruby>鳥<rt>とり</rt></ruby>', meaning: 'Con chim' },
      { kana: 'こえ', romaji: ['koe'], rubyHtml: '<ruby>声<rt>こえ</rt></ruby>', meaning: 'Tiếng nói, giọng' },
      { kana: 'なみ', romaji: ['nami'], rubyHtml: '<ruby>波<rt>なみ</rt></ruby>', meaning: 'Sóng biển' },
      { kana: 'はなび', romaji: ['hanabi'], rubyHtml: '<ruby>花火<rt>はなび</rt></ruby>', meaning: 'Pháo hoa' },
      { kana: 'けしき', romaji: ['keshiki'], rubyHtml: '<ruby>景色<rt>けしき</rt></ruby>', meaning: 'Phong cảnh' },
      { kana: 'ひるま', romaji: ['hiruma'], rubyHtml: '<ruby>昼間<rt>ひるま</rt></ruby>', meaning: 'Ban ngày' },
      { kana: 'むかし', romaji: ['mukashi'], rubyHtml: '<ruby>昔<rt>むかし</rt></ruby>', meaning: 'Ngày xưa' },
      { kana: 'そら', romaji: ['sora'], rubyHtml: '<ruby>空<rt>そら</rt></ruby>', meaning: 'Bầu trời' }
    ]},
    { id: 'b27_dodung', name: 'C. Đồ dùng & Nhà cửa', selected: true, items: [
      { kana: 'どうぐ', romaji: ['dougu'], rubyHtml: '<ruby>道具<rt>どうぐ</rt></ruby>', meaning: 'Dụng cụ, công cụ' },
      { kana: 'じどうはんばいき', romaji: ['jidouhanbaiki'], rubyHtml: '<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>', meaning: 'Máy bán hàng tự động' },
      { kana: 'つうしんはんばい', romaji: ['tsuushinhanbai'], rubyHtml: '<ruby>通信販売<rt>つうしんはんばい</rt></ruby>', meaning: 'Bán hàng qua mạng/bưu điện' },
      { kana: 'マンション', romaji: ['manshon'], rubyHtml: 'マンション', meaning: 'Chung cư cao cấp' },
      { kana: 'だいどころ', romaji: ['daidokoro'], rubyHtml: '<ruby>台所<rt>だいどころ</rt></ruby>', meaning: 'Nhà bếp' },
      { kana: 'ほんだな', romaji: ['hondana'], rubyHtml: '<ruby>本棚<rt>ほんだな</rt></ruby>', meaning: 'Giá sách' },
      { kana: 'ロボット', romaji: ['robotto'], rubyHtml: 'ロボット', meaning: 'Rô-bốt' }
    ]},
    { id: 'b27_uocmo', name: 'D. Ước mơ & Bổ trợ', selected: true, items: [
      { kana: 'はっきり', romaji: ['hakkiri'], rubyHtml: 'はっきり', meaning: 'Rõ ràng' },
      { kana: 'ほとんど', romaji: ['hotondo'], rubyHtml: 'ほとんど', meaning: 'Hầu như, hầu hết' },
      { kana: 'ゆめ', romaji: ['yume'], rubyHtml: '<ruby>夢<rt>ゆめ</rt></ruby>', meaning: 'Giấc mơ, ước mơ' },
      { kana: 'いつか', romaji: ['itsuka'], rubyHtml: 'いつか', meaning: 'Một ngày nào đó' },
      { kana: 'すばらしい', romaji: ['subarashii'], rubyHtml: 'すばらしい', meaning: 'Tuyệt vời' },
      { kana: 'こどもたち', romaji: ['kodomotachi'], rubyHtml: '<ruby>子<rt>こ</rt></ruby>どもたち', meaning: 'Trẻ em, các con' },
      { kana: 'まんが', romaji: ['manga'], rubyHtml: '<ruby>漫画<rt>まんが</rt></ruby>', meaning: 'Truyện tranh' },
      { kana: 'じぶん', romaji: ['jibun'], rubyHtml: '<ruby>自分<rt>じぶん</rt></ruby>', meaning: 'Bản thân' },
      { kana: 'しょうらい', romaji: ['shourai'], rubyHtml: '<ruby>将来<rt>しょうらい</rt></ruby>', meaning: 'Tương lai' }
    ]}
  ],
  28: [
    { id: 'b28_dongtu', name: 'A. Động từ hành động', selected: true, items: [
      { kana: 'うれます', romaji: ['uremasu'], rubyHtml: '<ruby>売<rt>う</rt></ruby>れます', meaning: 'Bán chạy' },
      { kana: 'おどります', romaji: ['odorimasu'], rubyHtml: '<ruby>踊<rt>おど</rt></ruby>ります', meaning: 'Nhảy, múa' },
      { kana: 'かみます', romaji: ['kamimasu'], rubyHtml: '<ruby>噛<rt>か</rt></ruby>みます', meaning: 'Nhai, cắn' },
      { kana: 'えらびます', romaji: ['erabimasu'], rubyHtml: '<ruby>選<rt>えら</rt></ruby>びます', meaning: 'Chọn, lựa chọn' },
      { kana: 'かよいます', romaji: ['kayoimasu'], rubyHtml: '<ruby>通<rt>かよ</rt></ruby>います', meaning: 'Đi lại thường xuyên (học/làm)' },
      { kana: 'メモします', romaji: ['memoshimasu'], rubyHtml: 'メモします', meaning: 'Ghi chép lại' },
      { kana: 'おしゃべりします', romaji: ['oshaberishimasu'], rubyHtml: 'おしゃべりします', meaning: 'Tám chuyện, nói chuyện phiếm' }
    ]},
    { id: 'b28_tinhtu', name: 'B. Tính từ & Con người', selected: true, items: [
      { kana: 'まじめ', romaji: ['majime'], rubyHtml: 'まじめ', meaning: 'Nghiêm túc, chăm chỉ' },
      { kana: 'ねっしん', romaji: ['nesshin'], rubyHtml: '<ruby>熱心<rt>ねっしん</rt></ruby>', meaning: 'Nhiệt tình' },
      { kana: 'やさしい', romaji: ['yasashii'], rubyHtml: '<ruby>優<rt>やさ</rt></ruby>しい', meaning: 'Hiền lành, tốt bụng' },
      { kana: 'えらい', romaji: ['erai'], rubyHtml: '<ruby>偉<rt>えら</rt></ruby>い', meaning: 'Vĩ đại, giỏi giang' },
      { kana: 'ちょうどいい', romaji: ['choudoii'], rubyHtml: 'ちょうどいい', meaning: 'Vừa vặn, vừa đủ' },
      { kana: 'むすこ', romaji: ['musuko'], rubyHtml: '<ruby>息子<rt>むすこ</rt></ruby>', meaning: 'Con trai (của mình)' },
      { kana: 'むすめ', romaji: ['musume'], rubyHtml: '<ruby>娘<rt>むすめ</rt></ruby>', meaning: 'Con gái (của mình)' },
      { kana: 'かんりにん', romaji: ['kanrinin'], rubyHtml: '<ruby>管理人<rt>かんりにん</rt></ruby>', meaning: 'Người quản lý' }
    ]},
    { id: 'b28_sanpham', name: 'C. Sản phẩm & Truyền thông', selected: true, items: [
      { kana: 'しゅうかん', romaji: ['shuukan'], rubyHtml: '<ruby>習慣<rt>しゅうかん</rt></ruby>', meaning: 'Tập quán, thói quen' },
      { kana: 'けいけん', romaji: ['keiken'], rubyHtml: '<ruby>経験<rt>けいけん</rt></ruby>', meaning: 'Kinh nghiệm' },
      { kana: 'ちから', romaji: ['chikara'], rubyHtml: '<ruby>力<rt>ちから</rt></ruby>', meaning: 'Sức lực, lực' },
      { kana: 'にんきがあります', romaji: ['ninkigaarimasu'], rubyHtml: '<ruby>人気<rt>にんき</rt></ruby>があります', meaning: 'Được yêu thích / Phổ biến' },
      { kana: 'あじ', romaji: ['aji'], rubyHtml: '<ruby>味<rt>あじ</rt></ruby>', meaning: 'Hương vị' },
      { kana: 'ねだん', romaji: ['nedan'], rubyHtml: '<ruby>値段<rt>ねだん</rt></ruby>', meaning: 'Giá cả' },
      { kana: 'きゅうりょう', romaji: ['kyuuryou'], rubyHtml: '<ruby>給料<rt>きゅうりょう</rt></ruby>', meaning: 'Tiền lương' },
      { kana: 'ばんぐみ', romaji: ['bangumi'], rubyHtml: '<ruby>番組<rt>ばんぐみ</rt></ruby>', meaning: 'Chương trình (TV)' },
      { kana: 'しょうせつ', romaji: ['shousetsu'], rubyHtml: '<ruby>小説<rt>しょうせつ</rt></ruby>', meaning: 'Tiểu thuyết' }
    ]},
    { id: 'b28_giaotiep', name: 'D. Giao tiếp & Trạng từ', selected: true, items: [
      { kana: 'しばらく', romaji: ['shibaraku'], rubyHtml: 'しばらく', meaning: 'Một chốc, một lát' },
      { kana: 'たいてい', romaji: ['taitei'], rubyHtml: 'たいてい', meaning: 'Thường thường, hầu như' },
      { kana: 'それに', romaji: ['soreni'], rubyHtml: 'それに', meaning: 'Hơn nữa, thêm vào đó' },
      { kana: 'それで', romaji: ['sorede'], rubyHtml: 'それで', meaning: 'Do đó, vì thế' }
    ]}
  ],
  29: [
    { id: 'b29_tudongtu', name: 'A. Tự động từ (Hỏng / Bẩn)', selected: true, items: [
      { kana: 'あきます', romaji: ['akimasu'], rubyHtml: '<ruby>開<rt>あ</rt></ruby>きます', meaning: 'Mở (cửa tự mở)' },
      { kana: 'しまります', romaji: ['shimarimasu'], rubyHtml: '<ruby>閉<rt>しま</rt></ruby>ります', meaning: 'Đóng (cửa tự đóng)' },
      { kana: 'つきます', romaji: ['tsukimasu'], rubyHtml: '<ruby>付<rt>つ</rt></ruby>きます', meaning: 'Sáng (đèn bật)' },
      { kana: 'きえます', romaji: ['kiemasu'], rubyHtml: '<ruby>消<rt>き</rt></ruby>えます', meaning: 'Tắt (đèn tắt)' },
      { kana: 'こみます', romaji: ['komimasu'], rubyHtml: '<ruby>込<rt>こ</rt></ruby>みます', meaning: 'Đông đúc (đường đông)' },
      { kana: 'すきます', romaji: ['sukimasu'], rubyHtml: '<ruby>空<rt>す</rt></ruby>きます', meaning: 'Vắng vẻ' },
      { kana: 'こわれます', romaji: ['kowaremasu'], rubyHtml: '<ruby>壊<rt>こわ</rt></ruby>れます', meaning: 'Hỏng (ghế hỏng)' },
      { kana: 'われます', romaji: ['waremasu'], rubyHtml: '<ruby>割<rt>わ</rt></ruby>れます', meaning: 'Vỡ (cốc vỡ)' },
      { kana: 'おれます', romaji: ['oremasu'], rubyHtml: '<ruby>折<rt>お</rt></ruby>れます', meaning: 'Gãy (cành cây gãy)' },
      { kana: 'やぶれます', romaji: ['yaburemasu'], rubyHtml: '<ruby>破<rt>やぶ</rt></ruby>れます', meaning: 'Rách (túi rách)' },
      { kana: 'よごれます', romaji: ['yogoremasu'], rubyHtml: '<ruby>汚<rt>よご</rt></ruby>れます', meaning: 'Bị bẩn' },
      { kana: 'はずれます', romaji: ['hazuremasu'], rubyHtml: '<ruby>外<rt>はず</rt></ruby>れます', meaning: 'Tuột, bung (cúc áo)' },
      { kana: 'とまります', romaji: ['tomarimasu'], rubyHtml: '<ruby>止<rt>と</rt></ruby>まります', meaning: 'Dừng lại' },
      { kana: 'おちます', romaji: ['ochimasu'], rubyHtml: '<ruby>落<rt>お</rt></ruby>ちます', meaning: 'Rơi, rớt' }
    ]},
    { id: 'b29_dovat', name: 'B. Đồ vật & Vật dụng', selected: true, items: [
      { kana: 'おさら', romaji: ['osara'], rubyHtml: 'お<ruby>皿<rt>さら</rt></ruby>', meaning: 'Cái đĩa' },
      { kana: 'おちゃわん', romaji: ['ochawan'], rubyHtml: 'おちゃわん', meaning: 'Cái bát, chén' },
      { kana: 'コップ', romaji: ['koppu'], rubyHtml: 'コップ', meaning: 'Cái cốc' },
      { kana: 'ガラス', romaji: ['garasu'], rubyHtml: 'ガラス', meaning: 'Thủy tinh, kính' },
      { kana: 'ふくろ', romaji: ['fukuro'], rubyHtml: '<ruby>袋<rt>ふくろ</rt></ruby>', meaning: 'Túi' },
      { kana: 'さいふ', romaji: ['saifu'], rubyHtml: '<ruby>財布<rt>さいふ</rt></ruby>', meaning: 'Ví tiền' },
      { kana: 'えだ', romaji: ['eda'], rubyHtml: '<ruby>枝<rt>えだ</rt></ruby>', meaning: 'Cành cây' },
      { kana: 'あみだな', romaji: ['amidana'], rubyHtml: '<ruby>網棚<rt>あみだな</rt></ruby>', meaning: 'Giá để hành lý (trên tàu)' }
    ]},
    { id: 'b29_tauxe', name: 'C. Tàu xe & Động đất', selected: true, items: [
      { kana: 'えきいん', romaji: ['ekiin'], rubyHtml: '<ruby>駅員<rt>えきいん</rt></ruby>', meaning: 'Nhân viên nhà ga' },
      { kana: 'このへん', romaji: ['konohen'], rubyHtml: 'この<ruby>辺<rt>へん</rt></ruby>', meaning: 'Vùng này, quanh đây' },
      { kana: 'わすれもの', romaji: ['wasuremono'], rubyHtml: '<ruby>忘れ物<rt>わすれもの</rt></ruby>', meaning: 'Đồ bỏ quên' },
      { kana: 'じしん', romaji: ['jishin'], rubyHtml: '<ruby>地震<rt>じしん</rt></ruby>', meaning: 'Động đất' },
      { kana: 'かべ', romaji: ['kabe'], rubyHtml: '<ruby>壁<rt>かべ</rt></ruby>', meaning: 'Bức tường' },
      { kana: 'たおれます', romaji: ['taoremasu'], rubyHtml: '<ruby>倒<rt>たお</rt></ruby>れます', meaning: 'Đổ, đổ sập' }
    ]},
    { id: 'b29_giaotiep', name: 'D. Giao tiếp & Trạng từ', selected: true, items: [
      { kana: 'まちがえます', romaji: ['machigaemasu'], rubyHtml: '<ruby>間違<rt>まちが</rt></ruby>えます', meaning: 'Nhầm lẫn, sai sót' },
      { kana: 'おさきにどうぞ', romaji: ['osakinidouzo'], rubyHtml: 'お<ruby>先<rt>さき</rt></ruby>にどうぞ', meaning: 'Xin mời đi trước / làm trước' },
      { kana: 'よかった', romaji: ['yokatta'], rubyHtml: 'よかった', meaning: 'May quá!' }
    ]}
  ],
  30: [
    { id: 'b30_thadongtu', name: 'A. Tha động từ (Chuẩn bị / Sắp xếp)', selected: true, items: [
      { kana: 'はります', romaji: ['harimasu'], rubyHtml: '<ruby>貼<rt>は</rt></ruby>ります', meaning: 'Dán, dính' },
      { kana: 'かけます', romaji: ['kakemasu'], rubyHtml: '<ruby>掛<rt>か</rt></ruby>けます', meaning: 'Treo (tranh, lịch)' },
      { kana: 'かざります', romaji: ['kazarimasu'], rubyHtml: '<ruby>飾<rt>かざ</rt></ruby>ります', meaning: 'Trang trí' },
      { kana: 'ならべます', romaji: ['narabemasu'], rubyHtml: '<ruby>並<rt>なら</rt></ruby>べます', meaning: 'Xếp thành hàng' },
      { kana: 'うえます', romaji: ['uemasu'], rubyHtml: '<ruby>植<rt>うえ</rt></ruby>えます', meaning: 'Trồng (cây)' },
      { kana: 'もどします', romaji: ['modoshimasu'], rubyHtml: '<ruby>戻<rt>もど</rt></ruby>します', meaning: 'Đưa về chỗ cũ' },
      { kana: 'かたづけます', romaji: ['katadukemasu'], rubyHtml: '<ruby>片づ<rt>かたづ</rt></ruby>けます', meaning: 'Dọn dẹp' },
      { kana: 'しまいます', romaji: ['shimaimasu'], rubyHtml: 'しまいます', meaning: 'Cất đi' },
      { kana: 'きめます', romaji: ['kimemasu'], rubyHtml: '<ruby>決<rt>き</rt></ruby>めます', meaning: 'Quyết định' },
      { kana: 'よしゅうします', romaji: ['yoshuushimasu'], rubyHtml: '<ruby>予習<rt>よしゅう</rt></ruby>します', meaning: 'Chuẩn bị bài trước' },
      { kana: 'ふくしゅうします', romaji: ['fukushuushimasu'], rubyHtml: '<ruby>復習<rt>ふくしゅう</rt></ruby>します', meaning: 'Ôn tập bài cũ' }
    ]},
    { id: 'b30_dovat', name: 'B. Đồ vật & Vị trí', selected: true, items: [
      { kana: 'カレンダー', romaji: ['karenda-'], rubyHtml: 'カレンダー', meaning: 'Tờ lịch' },
      { kana: 'ポスター', romaji: ['posuta-'], rubyHtml: 'ポスター', meaning: 'Tấm áp phích' },
      { kana: 'ごみばこ', romaji: ['gomibako'], rubyHtml: 'ごみ<ruby>箱<rt>ばこ</rt></ruby>', meaning: 'Thùng rác' },
      { kana: 'にんぎょう', romaji: ['ningyou'], rubyHtml: '<ruby>人形<rt>にんぎょう</rt></ruby>', meaning: 'Búp bê' },
      { kana: 'かびん', romaji: ['kabin'], rubyHtml: '<ruby>花瓶<rt>かびん</rt></ruby>', meaning: 'Lọ hoa' },
      { kana: 'かがみ', romaji: ['kagami'], rubyHtml: '<ruby>鏡<rt>かがみ</rt></ruby>', meaning: 'Cái gương' },
      { kana: 'ひきだし', romaji: ['hikidashi'], rubyHtml: '<ruby>引き出し<rt>ひきだし</rt></ruby>', meaning: 'Năng kéo' },
      { kana: 'げんかん', romaji: ['genkan'], rubyHtml: '<ruby>玄関<rt>げんかん</rt></ruby>', meaning: 'Lối vào nhà' },
      { kana: 'ろうか', romaji: ['rouka'], rubyHtml: '<ruby>廊下<rt>ろうか</rt></ruby>', meaning: 'Hành lang' },
      { kana: 'まんなか', romaji: ['mannaka'], rubyHtml: '<ruby>真ん中<rt>まんなか</rt></ruby>', meaning: 'Chính giữa' },
      { kana: 'すみ', romaji: ['sumi'], rubyHtml: '<ruby>隅<rt>すみ</rt></ruby>', meaning: 'Góc' }
    ]},
    { id: 'b30_lichtrinh', name: 'C. Lịch trình & Giờ học', selected: true, items: [
      { kana: 'じゅぎょう', romaji: ['jugyou'], rubyHtml: '<ruby>授業<rt>じゅぎょう</rt></ruby>', meaning: 'Giờ học, tiết học' },
      { kana: 'こうぎ', romaji: ['kougi'], rubyHtml: '<ruby>講義<rt>こうぎ</rt></ruby>', meaning: 'Bài giảng đại học' },
      { kana: 'よてい', romaji: ['yotei'], rubyHtml: '<ruby>予定<rt>よてい</rt></ruby>', meaning: 'Dự định, kế hoạch' },
      { kana: 'おしらせ', romaji: ['oshirase'], rubyHtml: 'お<ruby>知<rt>し</rt></ruby>らせ', meaning: 'Thông báo' },
      { kana: 'よていひょう', romaji: ['yoteihyou'], rubyHtml: '<ruby>予定表<rt>よていひょう</rt></ruby>', meaning: 'Lịch biểu' }
    ]},
    { id: 'b30_giaotiep', name: 'D. Giao tiếp & Khác', selected: true, items: [
      { kana: 'ごくろうさま', romaji: ['gokurousama'], rubyHtml: 'ご<ruby>苦労<rt>くろう</rt></ruby>さま', meaning: 'Anh/Chị đã vất vả rồi (cấp trên nói với cấp dưới)' },
      { kana: 'まるい', romaji: ['marui'], rubyHtml: '<ruby>丸<rt>まる</rt></ruby>い', meaning: 'Tròn' },
      { kana: 'ちきゅう', romaji: ['chikyuu'], rubyHtml: '<ruby>地球<rt>ちきゅう</rt></ruby>', meaning: 'Trái đất' },
      { kana: 'うれしい', romaji: ['ureshii'], rubyHtml: 'うれしい', meaning: 'Vui mừng' }
    ]}
  ],
  31: [
    { id: 'b31_ydinh', name: 'A. Động từ thể Ý định & Sự kiện', selected: true, items: [
      { kana: 'はじまります', romaji: ['hajimarimasu'], rubyHtml: '<ruby>始<rt>はじ</rt></ruby>まります', meaning: 'Bắt đầu (lễ hội bắt đầu)' },
      { kana: 'つづけます', romaji: ['tsudukemasu'], rubyHtml: '<ruby>続<rt>つづ</rt></ruby>けます', meaning: 'Tiếp tục' },
      { kana: 'みつけます', romaji: ['mitsukemasu'], rubyHtml: '<ruby>見<rt>み</rt></ruby>つけます', meaning: 'Tìm thấy' },
      { kana: 'うけます', romaji: ['ukemasu'], rubyHtml: '<ruby>受<rt>う</rt></ruby>けます', meaning: 'Dự thi' },
      { kana: 'にゅうがくします', romaji: ['nyuugakushimasu'], rubyHtml: '<ruby>入学<rt>にゅうがく</rt></ruby>します', meaning: 'Nhập học' },
      { kana: 'そつぎょうします', romaji: ['sotsugyoushimasu'], rubyHtml: '<ruby>卒業<rt>そつぎょう</rt></ruby>します', meaning: 'Tốt nghiệp' },
      { kana: 'しゅっせきします', romaji: ['shussekishimasu'], rubyHtml: '<ruby>出席<rt>しゅっせき</rt></ruby>します', meaning: 'Tham dự' },
      { kana: 'きゅうけいします', romaji: ['kyuukeishimasu'], rubyHtml: '<ruby>休憩<rt>きゅうけい</rt></ruby>します', meaning: 'Nghỉ giải lao' }
    ]},
    { id: 'b31_coso', name: 'B. Cơ sở & Địa điểm', selected: true, items: [
      { kana: 'ほんしゃ', romaji: ['honsha'], rubyHtml: '<ruby>本社<rt>ほんしゃ</rt></ruby>', meaning: 'Trụ sở chính' },
      { kana: 'してん', romaji: ['shiten'], rubyHtml: '<ruby>支店<rt>してん</rt></ruby>', meaning: 'Chi nhánh' },
      { kana: 'きょうかい', romaji: ['kyoukai'], rubyHtml: '<ruby>教会<rt>きょうかい</rt></ruby>', meaning: 'Nhà thờ' },
      { kana: 'だいがくいん', romaji: ['daigakuin'], rubyHtml: '<ruby>大学院<rt>だいがくいん</rt></ruby>', meaning: 'Cao học' },
      { kana: 'どうぶつえん', romaji: ['doubutsuen'], rubyHtml: '<ruby>動物園<rt>どうぶつえん</rt></ruby>', meaning: 'Sở thú' },
      { kana: 'おんせん', romaji: ['onsen'], rubyHtml: '<ruby>温泉<rt>おんせん</rt></ruby>', meaning: 'Suối nước nóng' },
      { kana: 'えいがかん', romaji: ['eigakan'], rubyHtml: '<ruby>映画館<rt>えいがかん</rt></ruby>', meaning: 'Rạp chiếu phim' }
    ]},
    { id: 'b31_sukien', name: 'C. Sự kiện & Đời sống', selected: true, items: [
      { kana: 'れんきゅう', romaji: ['renkyuu'], rubyHtml: '<ruby>連休<rt>れんきゅう</rt></ruby>', meaning: 'Kỳ nghỉ dài ngày' },
      { kana: 'さくぶん', romaji: ['sakubun'], rubyHtml: '<ruby>作文<rt>さくぶん</rt></ruby>', meaning: 'Bài tập làm văn' },
      { kana: 'てんらんかい', romaji: ['tenrankai'], rubyHtml: '<ruby>展覧会<rt>てんらんかい</rt></ruby>', meaning: 'Triển lãm' },
      { kana: 'けっこんしき', romaji: ['kekkonshiki'], rubyHtml: '<ruby>結婚式<rt>けっこんしき</rt></ruby>', meaning: 'Lễ kết hôn' },
      { kana: 'そうしき', romaji: ['soushiki'], rubyHtml: 'お<ruby>葬式<rt>そうしき</rt></ruby>', meaning: 'Đám tang' }
    ]},
    { id: 'b31_giaotiep', name: 'D. Trạng từ & Giao tiếp', selected: true, items: [
      { kana: 'だれか', romaji: ['dareka'], rubyHtml: 'だれか', meaning: 'Ai đó' },
      { kana: 'ずっと', romaji: ['zutto'], rubyHtml: 'ずっと', meaning: 'Suốt, liền' },
      { kana: 'じゆうに', romaji: ['jiyuuni'], rubyHtml: '<ruby>自由<rt>じゆう</rt></ruby>に', meaning: 'Tự do, tùy ý' },
      { kana: 'せかいじゅう', romaji: ['sekaijuu'], rubyHtml: '<ruby>世界中<rt>せかいじゅう</rt></ruby>', meaning: 'Khắp thế giới' }
    ]}
  ],
  32: [
    { id: 'b32_suckhoe', name: 'A. Động từ Sức khỏe & Sự cố', selected: true, items: [
      { kana: 'うんどうします', romaji: ['undoushimasu'], rubyHtml: '<ruby>運動<rt>うんどう</rt></ruby>します', meaning: 'Vận động, tập thể dục' },
      { kana: 'せいこうします', romaji: ['seikoushimasu'], rubyHtml: '<ruby>成功<rt>せいこう</rt></ruby>します', meaning: 'Thành công' },
      { kana: 'しっぱいします', romaji: ['shippaishimasu'], rubyHtml: '<ruby>失敗<rt>しっぱい</rt></ruby>します', meaning: 'Thất bại' },
      { kana: 'ごうかくします', romaji: ['goukaku-shimasu', 'goukakushimasu'], rubyHtml: '<ruby>合格<rt>ごうかく</rt></ruby>します', meaning: 'Thi đỗ, đạt' },
      { kana: 'やみます', romaji: ['yamimasu'], rubyHtml: '<ruby>止<rt>や</rt></ruby>みます', meaning: 'Tạnh (mưa止む)' },
      { kana: 'はれます', romaji: ['haremasu'], rubyHtml: '<ruby>晴<rt>は</rt></ruby>れます', meaning: 'Nắng, quang mây' },
      { kana: 'くもります', romaji: ['kumorimasu'], rubyHtml: '<ruby>曇<rt>くも</rt></ruby>ります', meaning: 'Nhiều mây, âm u' },
      { kana: 'なおります', romaji: ['naorimasu'], rubyHtml: '<ruby>治<rt>なお</rt></ruby>ります', meaning: 'Khỏi bệnh' }
    ]},
    { id: 'b32_thoitiet', name: 'B. Thời tiết & Thiên văn', selected: true, items: [
      { kana: 'たいよう', romaji: ['taiyou'], rubyHtml: '<ruby>太陽<rt>たいよう</rt></ruby>', meaning: 'Mặt trời' },
      { kana: 'ほし', romaji: ['hoshi'], rubyHtml: '<ruby>星<rt>ほし</rt></ruby>', meaning: 'Ngôi sao' },
      { kana: 'かぜ', romaji: ['kaze'], rubyHtml: '<ruby>風<rt>かぜ</rt></ruby>', meaning: 'Gió' },
      { kana: 'きた', romaji: ['kita'], rubyHtml: '<ruby>北<rt>きた</rt></ruby>', meaning: 'Hướng Bắc' },
      { kana: 'みなみ', romaji: ['minami'], rubyHtml: '<ruby>南<rt>みなみ</rt></ruby>', meaning: 'Hướng Nam' },
      { kana: 'にし', romaji: ['nishi'], rubyHtml: '<ruby>西<rt>にし</rt></ruby>', meaning: 'Hướng Tây' },
      { kana: 'ひがし', romaji: ['higashi'], rubyHtml: '<ruby>東<rt>ひがし</rt></ruby>', meaning: 'Hướng Đông' }
    ]},
    { id: 'b32_benhtat', name: 'C. Bệnh tật & Y tế', selected: true, items: [
      { kana: 'しんぱい', romaji: ['shinpai'], rubyHtml: '<ruby>心配<rt>しんぱい</rt></ruby>', meaning: 'Lo lắng' },
      { kana: 'やけど', romaji: ['yakedo'], rubyHtml: 'やけど', meaning: 'Bị bỏng' },
      { kana: 'けが', romaji: ['kega'], rubyHtml: 'けが', meaning: 'Vết thương' },
      { kana: 'せき', romaji: ['seki'], rubyHtml: 'せき', meaning: 'Cơn ho' },
      { kana: 'インフルエンザ', romaji: ['infuruenza'], rubyHtml: 'インフルエンザ', meaning: 'Cúm mùa' },
      { kana: 'ストレス', romaji: ['sutoresu'], rubyHtml: 'ストレス', meaning: 'Căng thẳng, stress' }
    ]},
    { id: 'b32_boitoan', name: 'D. Bói toán & Khác', selected: true, items: [
      { kana: 'もしかしたら', romaji: ['moshikashitara'], rubyHtml: 'もしかしたら', meaning: 'Có lẽ, biết đâu chừng' },
      { kana: 'オリンピック', romaji: ['orinpikku'], rubyHtml: 'オリンピック', meaning: 'Thế vận hội Olympic' },
      { kana: 'たからくじ', romaji: ['takarakuji'], rubyHtml: '<ruby>宝<rt>たから</rt></ruby>くじ', meaning: 'Vé số' },
      { kana: 'けんこう', romaji: ['kenkou'], rubyHtml: '<ruby>健康<rt>けんこう</rt></ruby>', meaning: 'Sức khỏe' }
    ]}
  ],
  33: [
    { id: 'b33_menhlenh', name: 'A. Động từ Mệnh lệnh & Cấm đoán', selected: true, items: [
      { kana: 'にげます', romaji: ['nigemasu'], rubyHtml: '<ruby>逃<rt>に</rt></ruby>げます', meaning: 'Chạy trốn' },
      { kana: 'さわぎます', romaji: ['sawagimasu'], rubyHtml: '<ruby>騒<rt>さわ</rt></ruby>ぎます', meaning: 'Làm ồn, gây náo động' },
      { kana: 'あきらめます', romaji: ['akiramemasu'], rubyHtml: '<ruby>諦<rt>あきら</rt></ruby>めます', meaning: 'Từ bỏ, từ khước' },
      { kana: 'なげます', romaji: ['nagemasu'], rubyHtml: '<ruby>投<rt>な</rt></ruby>げます', meaning: 'Ném' },
      { kana: 'まもります', romaji: ['mamorimasu'], rubyHtml: '<ruby>守<rt>まも</rt></ruby>ります', meaning: 'Bảo vệ, giữ quy tắc' },
      { kana: 'つたえます', romaji: ['tsutaemasu'], rubyHtml: '<ruby>伝<rt>つた</rt></ruby>えます', meaning: 'Truyền đạt, nhắn lại' },
      { kana: 'ちゅういします', romaji: ['chuuishimasu'], rubyHtml: '<ruby>注意<rt>ちゅうい</rt></ruby>します', meaning: 'Chú ý, nhắc nhở' }
    ]},
    { id: 'b33_bienbao', name: 'B. Biển báo & Quy tắc', selected: true, items: [
      { kana: 'だめ', romaji: ['dame'], rubyHtml: 'だめ', meaning: 'Không được, cấm' },
      { kana: 'きそく', romaji: ['kisoku'], rubyHtml: '<ruby>規則<rt>きそく</rt></ruby>', meaning: 'Quy tắc, nội quy' },
      { kana: 'しようきんし', romaji: ['shiyoukinshi'], rubyHtml: '<ruby>使用禁止<rt>しようきんし</rt></ruby>', meaning: 'Cấm sử dụng' },
      { kana: 'たちいりきんし', romaji: ['tachiirikinshi'], rubyHtml: '<ruby>立入禁止<rt>たちいりきんし</rt></ruby>', meaning: 'Cấm vào' },
      { kana: 'いりぐち', romaji: ['iriguchi'], rubyHtml: '<ruby>入口<rt>いりぐち</rt></ruby>', meaning: 'Lối vào' },
      { kana: 'でぐち', romaji: ['deguchi'], rubyHtml: '<ruby>出口<rt>でぐち</rt></ruby>', meaning: 'Lối ra' },
      { kana: 'ひじょうぐち', romaji: ['hijouguchi'], rubyHtml: '<ruby>非常口<rt>ひじょうぐち</rt></ruby>', meaning: 'Lối thoát hiểm' },
      { kana: 'むりょう', romaji: ['muryou'], rubyHtml: '<ruby>無料<rt>むりょう</rt></ruby>', meaning: 'Miễn phí' },
      { kana: 'えいぎょうちゅう', romaji: ['eigyouchuu'], rubyHtml: '<ruby>営業中<rt>えいぎょうちゅう</rt></ruby>', meaning: 'Đang mở cửa bán' }
    ]},
    { id: 'b33_canhsat', name: 'C. Cảnh sát & Điện báo', selected: true, items: [
      { kana: 'けいさつ', romaji: ['keisatsu'], rubyHtml: '<ruby>警察<rt>けいさつ</rt></ruby>', meaning: 'Cảnh sát' },
      { kana: 'ぱっきん', romaji: ['pakkin'], rubyHtml: '<ruby>罰金<rt>ばっきん</rt></ruby>', meaning: 'Tiền phạt' },
      { kana: 'でんぽう', romaji: ['denpou'], rubyHtml: '<ruby>電報<rt>でんぽう</rt></ruby>', meaning: 'Bức điện báo' },
      { kana: 'るす', romaji: ['rusu'], rubyHtml: '<ruby>留守<rt>るす</rt></ruby>', meaning: 'Vắng nhà' }
    ]},
    { id: 'b33_giaotiep', name: 'D. Trạng từ & Giao tiếp', selected: true, items: [
      { kana: 'ファイト', romaji: ['faito'], rubyHtml: 'ファイト', meaning: 'Cố lên! (Fight)' },
      { kana: 'できるだけ', romaji: ['dekirudake'], rubyHtml: 'できるだけ', meaning: 'Trong khả năng có thể' }
    ]}
  ],
  34: [
    { id: 'b34_thaotac', name: 'A. Động từ Thao tác & Nấu ăn', selected: true, items: [
      { kana: 'みがきます', romaji: ['migakimasu'], rubyHtml: '<ruby>磨<rt>みが</rt></ruby>きます', meaning: 'Mài, đánh (răng)' },
      { kana: 'くみたてます', romaji: ['kumitatemasu'], rubyHtml: '<ruby>組み立てます<rt>くみたてます</rt></ruby>', meaning: 'Lắp ráp' },
      { kana: 'おります', romaji: ['orimasu'], rubyHtml: '<ruby>折<rt>お</rt></ruby>ります', meaning: 'Gấp, bẻ' },
      { kana: 'のせます', romaji: ['nosemasu'], rubyHtml: '<ruby>載<rt>の</rt></ruby>せます', meaning: 'Đặt lên, chất lên' },
      { kana: 'にます', romaji: ['nimasu'], rubyHtml: '<ruby>煮<rt>に</rt></ruby>ます', meaning: 'Ninh, hầm' }
    ]},
    { id: 'b34_dovat', name: 'B. Đồ vật & Màu sắc', selected: true, items: [
      { kana: 'ほそい', romaji: ['hosoi'], rubyHtml: '<ruby>細<rt>ほそ</rt></ruby>い', meaning: 'Gầy, mỏng, mảnh' },
      { kana: 'ふとい', romaji: ['futoi'], rubyHtml: '<ruby>太<rt>ふと</rt></ruby>い', meaning: 'Béo, to, dày' },
      { kana: 'かぐ', romaji: ['kagu'], rubyHtml: '<ruby>家具<rt>かぐ</rt></ruby>', meaning: 'Đồ nội thất' },
      { kana: 'せつめいしょ', romaji: ['setsumeisho'], rubyHtml: '<ruby>説明書<rt>せつめいしょ</rt></ruby>', meaning: 'Tờ hướng dẫn' },
      { kana: 'くろ', romaji: ['kuro'], rubyHtml: '<ruby>黒<rt>くろ</rt></ruby>', meaning: 'Màu đen' },
      { kana: 'しろ', romaji: ['shiro'], rubyHtml: '<ruby>白<rt>しろ</rt></ruby>', meaning: 'Màu trắng' },
      { kana: 'あか', romaji: ['aka'], rubyHtml: '<ruby>赤<rt>あか</rt></ruby>', meaning: 'Màu đỏ' },
      { kana: 'あお', romaji: ['ao'], rubyHtml: '<ruby>青<rt>あお</rt></ruby>', meaning: 'Màu xanh' }
    ]},
    { id: 'b34_monan', name: 'C. Món ăn & Gia vị', selected: true, items: [
      { kana: 'しょうゆ', romaji: ['shouyu'], rubyHtml: 'しょうゆ', meaning: 'Nước tương' },
      { kana: 'ソース', romaji: ['so-su', 'sosu'], rubyHtml: 'ソース', meaning: 'Nước sốt' },
      { kana: 'ざいりょう', romaji: ['zairyou'], rubyHtml: '<ruby>材料<rt>ざいりょう</rt></ruby>', meaning: 'Nguyên liệu' },
      { kana: 'とりにく', romaji: ['toriniku'], rubyHtml: '<ruby>鳥肉<rt>とりにく</rt></ruby>', meaning: 'Thịt gà' },
      { kana: 'たまねぎ', romaji: ['tamanegi'], rubyHtml: 'たまねぎ', meaning: 'Hành tây' },
      { kana: 'なべ', romaji: ['nabe'], rubyHtml: 'なべ', meaning: 'Cái nồi' }
    ]},
    { id: 'b34_donvi', name: 'D. Đơn vị & Trạng từ', selected: true, items: [
      { kana: 'さっき', romaji: ['sakki'], rubyHtml: 'さっき', meaning: 'Lúc nãy' },
      { kana: 'さきに', romaji: ['sakini'], rubyHtml: '<ruby>先<rt>さき</rt></ruby>に', meaning: 'Trước' },
      { kana: 'にがい', romaji: ['nigai'], rubyHtml: '<ruby>苦<rt>に</rt></ruby>がい', meaning: 'Đắng' }
    ]}
  ],
  35: [
    { id: 'b35_dieukien', name: 'A. Động từ Điều kiện & Biến đổi', selected: true, items: [
      { kana: 'さきます', romaji: ['sakimasu'], rubyHtml: '<ruby>咲<rt>さ</rt></ruby>きます', meaning: 'Nở (hoa nở)' },
      { kana: 'かわります', romaji: ['kawarimasu'], rubyHtml: '<ruby>変<rt>か</rt></ruby>わります', meaning: 'Thay đổi' },
      { kana: 'こまります', romaji: ['komarimasu'], rubyHtml: '<ruby>困<rt>こま</rt></ruby>ります', meaning: 'Rắc rối, gặp khó khăn' },
      { kana: 'ひろいます', romaji: ['hiroimasu'], rubyHtml: '<ruby>拾<rt>ひろ</rt></ruby>います', meaning: 'Nhặt được' }
    ]},
    { id: 'b35_dulich', name: 'B. Địa điểm & Du lịch', selected: true, items: [
      { kana: 'らく', romaji: ['raku'], rubyHtml: '<ruby>楽<rt>らく</rt></ruby>', meaning: 'Nhàn hạ, thoải mái' },
      { kana: 'めずらしい', romaji: ['mezurashii'], rubyHtml: '<ruby>珍<rt>めずら</rt></ruby>しい', meaning: 'Hiếm có, lạ' },
      { kana: 'しま', romaji: ['shima'], rubyHtml: '<ruby>島<rt>しま</rt></ruby>', meaning: 'Hòn đảo' },
      { kana: 'みなと', romaji: ['minato'], rubyHtml: '<ruby>港<rt>みなと</rt></ruby>', meaning: 'Bến cảng' },
      { kana: 'きんじょ', romaji: ['kinjo'], rubyHtml: '<ruby>近所<rt>きんじょ</rt></ruby>', meaning: 'Hàng xóm, xung quanh' },
      { kana: 'おくじょう', romaji: ['okujou'], rubyHtml: '<ruby>屋上<rt>おくじょう</rt></ruby>', meaning: 'Sân thượng' },
      { kana: 'かいがい', romaji: ['kaigai'], rubyHtml: '<ruby>海外<rt>かいがい</rt></ruby>', meaning: 'Nước ngoài' }
    ]},
    { id: 'b35_dodung', name: 'C. Đồ dùng & Khác', selected: true, items: [
      { kana: 'きかい', romaji: ['kikai'], rubyHtml: '<ruby>機会<rt>きかい</rt></ruby>', meaning: 'Cơ hội' },
      { kana: 'きょか', romaji: ['kyoka'], rubyHtml: '<ruby>許可<rt>きょか</rt></ruby>', meaning: 'Sự cho phép' },
      { kana: 'ほうほう', romaji: ['houhou'], rubyHtml: '<ruby>方法<rt>ほうほう</rt></ruby>', meaning: 'Phương pháp' },
      { kana: 'せつび', romaji: ['setsubi'], rubyHtml: '<ruby>設備<rt>せつび</rt></ruby>', meaning: 'Trang thiết bị' },
      { kana: 'ことわざ', romaji: ['kotowaza'], rubyHtml: 'ことわざ', meaning: 'Tục ngữ' }
    ]},
    { id: 'b35_giaotiep', name: 'D. Trạng từ & Giao tiếp', selected: true, items: [
      { kana: 'もっと', romaji: ['motto'], rubyHtml: 'もっと', meaning: 'Hơn nữa' },
      { kana: 'はじめに', romaji: ['hajimeni'], rubyHtml: '<ruby>初<rt>はじめ</rt></ruby>めに', meaning: 'Đầu tiên' }
    ]}
  ],
  36: [
    { id: 'b36_thoiquen', name: 'A. Động từ Thói quen & Mục tiêu', selected: true, items: [
      { kana: 'とどきます', romaji: ['todokimasu'], rubyHtml: '<ruby>届<rt>とど</rt></ruby>きます', meaning: 'Gửi đến, chuyển tới' },
      { kana: 'ちょきんします', romaji: ['chokinshimasu'], rubyHtml: '<ruby>貯金<rt>ちょきん</rt></ruby>します', meaning: 'Tiết kiệm tiền' },
      { kana: 'ふとります', romaji: ['futorimasu'], rubyHtml: '<ruby>太<rt>ふと</rt></ruby>ります', meaning: 'Béo lên' },
      { kana: 'やせます', romaji: ['yasemasu'], rubyHtml: '<ruby>痩<rt>や</rt></ruby>せます', meaning: 'Gầy đi' },
      { kana: 'なれます', romaji: ['naremasu'], rubyHtml: '<ruby>慣<rt>な</rt></ruby>れます', meaning: 'Quen với' }
    ]},
    { id: 'b36_dovat', name: 'B. Đồ vật & Cơ sở', selected: true, items: [
      { kana: 'かたい', romaji: ['katai'], rubyHtml: '<ruby>硬<rt>かた</rt></ruby>い', meaning: 'Cứng' },
      { kana: 'やわらかい', romaji: ['yawarakai'], rubyHtml: '<ruby>軟<rt>やわら</rt></ruby>かい', meaning: 'Mềm' },
      { kana: 'こうじょう', romaji: ['koujou'], rubyHtml: '<ruby>工場<rt>こうじょう</rt></ruby>', meaning: 'Nhà máy' },
      { kana: 'あんぜん', romaji: ['anzen'], rubyHtml: '<ruby>安全<rt>あんぜん</rt></ruby>', meaning: 'An toàn' }
    ]},
    { id: 'b36_thoigian', name: 'C. Thời gian & Thể thao', selected: true, items: [
      { kana: 'まいしゅう', romaji: ['maishuu'], rubyHtml: '<ruby>毎週<rt>まいしゅう</rt></ruby>', meaning: 'Hàng tuần' },
      { kana: 'まいつき', romaji: ['maitsuki'], rubyHtml: '<ruby>毎月<rt>まいつき</rt></ruby>', meaning: 'Hàng tháng' },
      { kana: 'まいとし', romaji: ['maitoshi', 'mainen'], rubyHtml: '<ruby>毎年<rt>まいとし</rt></ruby>', meaning: 'Hàng năm' },
      { kana: 'れきし', romaji: ['rekishi'], rubyHtml: '<ruby>歴史<rt>れきし</rt></ruby>', meaning: 'Lịch sử' },
      { kana: 'けんこう', romaji: ['kenkou'], rubyHtml: '<ruby>健康<rt>けんこう</rt></ruby>', meaning: 'Sức khỏe' }
    ]},
    { id: 'b36_giaotiep', name: 'D. Trạng từ & Cụm từ', selected: true, items: [
      { kana: 'やっと', romaji: ['yatto'], rubyHtml: 'やっと', meaning: 'Cuối cùng thì' },
      { kana: 'かなり', romaji: ['kanari'], rubyHtml: 'かなり', meaning: 'Tương đối, khá' },
      { kana: 'かならず', romaji: ['kanarazu'], rubyHtml: '<ruby>必<rt>かなら</rt></ruby>ず', meaning: 'Nhất định' },
      { kana: 'ぜったいに', romaji: ['zettaini'], rubyHtml: '<ruby>絶対<rt>ぜったい</rt></ruby>に', meaning: 'Tuyệt đối' }
    ]}
  ],
  37: [
    { id: 'b37_bidong', name: 'A. Động từ Bị động & Hành động', selected: true, items: [
      { kana: 'ほめます', romaji: ['homemasu'], rubyHtml: '<ruby>褒<rt>ほ</rt></ruby>めます', meaning: 'Khen ngợi' },
      { kana: 'しかります', romaji: ['shikarimasu'], rubyHtml: '<ruby>叱<rt>しか</rt></ruby>ります', meaning: 'Mắng mỏ' },
      { kana: 'さそいます', romaji: ['sasoimasu'], rubyHtml: '<ruby>誘<rt>さそ</rt></ruby>います', meaning: 'Mời, rủ rê' },
      { kana: 'しょうたいします', romaji: ['shoutaishimasu'], rubyHtml: '<ruby>招待<rt>しょうたい</rt></ruby>します', meaning: 'Mời (trân trọng)' },
      { kana: 'たのみます', romaji: ['tanomasu', 'tanomimasu'], rubyHtml: '<ruby>頼<rt>たの</rt></ruby>みます', meaning: 'Nhờ vả' },
      { kana: 'ふみます', romaji: ['fumimasu'], rubyHtml: '<ruby>踏<rt>ふ</rt></ruby>みます', meaning: 'Giẫm, đạp' },
      { kana: 'ゆしゅつします', romaji: ['yushutsushimasu'], rubyHtml: '<ruby>輸出<rt>ゆしゅつ</rt></ruby>します', meaning: 'Xuất khẩu' },
      { kana: 'ゆにゅうします', romaji: ['yunyuushimasu'], rubyHtml: '<ruby>輸入<rt>ゆにゅう</rt></ruby>します', meaning: 'Nhập khẩu' },
      { kana: 'はつめいします', romaji: ['hatsumeishimasu'], rubyHtml: '<ruby>発明<rt>はつめい</rt></ruby>します', meaning: 'Phát minh' },
      { kana: 'はっけんします', romaji: ['hakkenshimasu'], rubyHtml: '<ruby>発見<rt>はっけん</rt></ruby>します', meaning: 'Phát hiện' }
    ]},
    { id: 'b37_toipham', name: 'B. Tội phạm & Nghề nghiệp', selected: true, items: [
      { kana: 'どろぼう', romaji: ['dorobou'], rubyHtml: '<ruby>泥棒<rt>どろぼう</rt></ruby>', meaning: 'Kẻ trộm' },
      { kana: 'けいかん', romaji: ['keikan'], rubyHtml: '<ruby>警官<rt>けいかん</rt></ruby>', meaning: 'Cảnh sát' },
      { kana: 'けんちくか', romaji: ['kenchikuka'], rubyHtml: '<ruby>建築家<rt>けんちくか</rt></ruby>', meaning: 'Kiến trúc sư' },
      { kana: 'かがくしゃ', romaji: ['kagakusha'], rubyHtml: '<ruby>科学者<rt>かがくしゃ</rt></ruby>', meaning: 'Nhà khoa học' }
    ]},
    { id: 'b37_sanvat', name: 'C. Sản vật & Khoa học', selected: true, items: [
      { kana: 'こめ', romaji: ['kome'], rubyHtml: '<ruby>米<rt>こめ</rt></ruby>', meaning: 'Gạo' },
      { kana: 'せきゆ', romaji: ['sekiyu'], rubyHtml: '<ruby>石油<rt>せきゆ</rt></ruby>', meaning: 'Dầu mỏ' },
      { kana: 'げんりょう', romaji: ['genryou'], rubyHtml: '<ruby>原料<rt>げんりょう</rt></ruby>', meaning: 'Nguyên liệu' },
      { kana: 'ぎじゅつ', romaji: ['gijutsu'], rubyHtml: '<ruby>技術<rt>ぎじゅつ</rt></ruby>', meaning: 'Kỹ thuật, công nghệ' }
    ]},
    { id: 'b37_giaotiep', name: 'D. Giao tiếp & Khác', selected: true, items: [
      { kana: 'せかいじゅう', romaji: ['sekaijuu'], rubyHtml: '<ruby>世界中<rt>せかいじゅう</rt></ruby>', meaning: 'Khắp thế giới' },
      { kana: 'いっしょうけんめい', romaji: ['isshoukenmei'], rubyHtml: '<ruby>一生懸命<rt>いっしょうけんめい</rt></ruby>', meaning: 'Cố gắng hết sức' }
    ]}
  ],
  38: [
    { id: 'b38_danh-tu-hoa', name: 'A. Động từ Danh từ hóa', selected: true, items: [
      { kana: 'そだてます', romaji: ['sodatemasu'], rubyHtml: '<ruby>育てます<rt>そだてます</rt></ruby>', meaning: 'Nuôi nấng, trồng trọt' },
      { kana: 'にゅういんします', romaji: ['nyuuinshimasu'], rubyHtml: '<ruby>入院<rt>にゅういん</rt></ruby>します', meaning: 'Nhập viện' },
      { kana: 'たいいんします', romaji: ['taiinshimasu'], rubyHtml: '<ruby>退院<rt>たいいん</rt></ruby>します', meaning: 'Xuất viện' },
      { kana: 'せわをします', romaji: ['sewaoshimasu'], rubyHtml: '<ruby>世話<rt>せわ</rt></ruby>をします', meaning: 'Chăm sóc' },
      { kana: 'けんかします', romaji: ['kenkashimasu'], rubyHtml: 'けんかします', meaning: 'Cãi nhau, đánh nhau' }
    ]},
    { id: 'b38_truonghoc', name: 'B. Trường học & Gia đình', selected: true, items: [
      { kana: 'あかちゃん', romaji: ['akachan'], rubyHtml: '<ruby>赤ちゃん<rt>あかちゃん</rt></ruby>', meaning: 'Em bé sơ sinh' },
      { kana: 'しょうがっこう', romaji: ['shougakkou'], rubyHtml: '<ruby>小学校<rt>しょうがっこう</rt></ruby>', meaning: 'Trường tiểu học' },
      { kana: 'ちゅうがっこう', romaji: ['chuugakkou'], rubyHtml: '<ruby>中学校<rt>ちゅうがっこう</rt></ruby>', meaning: 'Trường THCS' },
      { kana: 'ふたご', romaji: ['futago'], rubyHtml: '<ruby>双子<rt>ふたご</rt></ruby>', meaning: 'Anh chị em sinh đôi' },
      { kana: 'せいかく', romaji: ['seikaku'], rubyHtml: '<ruby>性格<rt>せいかく</rt></ruby>', meaning: 'Tính cách' }
    ]},
    { id: 'b38_diadiem', name: 'C. Địa điểm & Khác', selected: true, items: [
      { kana: 'かいがん', romaji: ['kaigan'], rubyHtml: '<ruby>海岸<rt>かいがん</rt></ruby>', meaning: 'Bờ biển' },
      { kana: 'うそ', romaji: ['uso'], rubyHtml: 'うそ', meaning: 'Lời nói dối' },
      { kana: 'でんげん', romaji: ['dengen'], rubyHtml: '<ruby>電源<rt>でんげん</rt></ruby>', meaning: 'Nguồn điện' }
    ]}
  ],
  39: [
    { id: 'b39_nguyennhan', name: 'A. Động từ Nguyên nhân & Kết quả', selected: true, items: [
      { kana: 'こたえます', romaji: ['kotaemasu'], rubyHtml: '<ruby>答<rt>こた</rt></ruby>えます', meaning: 'Trả lời (câu hỏi)' },
      { kana: 'たおれます', romaji: ['taoremasu'], rubyHtml: '<ruby>倒<rt>たお</rt></ruby>れます', meaning: 'Đổ (nhà đổ)' },
      { kana: 'しにます', romaji: ['shinimasu'], rubyHtml: '<ruby>死<rt>し</rt></ruby>にます', meaning: 'Chết' },
      { kana: 'びっくりします', romaji: ['bikkurishimasu'], rubyHtml: 'びっくりします', meaning: 'Giật mình, kinh ngạc' },
      { kana: 'あんしんします', romaji: ['anshinshimasu'], rubyHtml: '<ruby>安心<rt>あんしん</rt></ruby>します', meaning: 'Yên tâm' },
      { kana: 'ちこくします', romaji: ['chikokushimasu'], rubyHtml: '<ruby>遅刻<rt>ちこく</rt></ruby>します', meaning: 'Đến muộn' },
      { kana: 'りこんします', romaji: ['rikonshimasu'], rubyHtml: '<ruby>離婚<rt>りこん</rt></ruby>します', meaning: 'Ly hôn' }
    ]},
    { id: 'b39_tainhan', name: 'B. Tai nạn & Thiên tai', selected: true, items: [
      { kana: 'じしん', romaji: ['jishin'], rubyHtml: '<ruby>地震<rt>じしん</rt></ruby>', meaning: 'Động đất' },
      { kana: 'たいふう', romaji: ['taifuu'], rubyHtml: '<ruby>台風<rt>たいふう</rt></ruby>', meaning: 'Bão' },
      { kana: 'かじ', romaji: ['kaji'], rubyHtml: '<ruby>火事<rt>かじ</rt></ruby>', meaning: 'Hỏa hoạn, cháy' },
      { kana: 'じこ', romaji: ['jiko'], rubyHtml: '<ruby>事故<rt>じこ</rt></ruby>', meaning: 'Tai nạn' }
    ]},
    { id: 'b39_doisong', name: 'C. Đời sống & Xã hội', selected: true, items: [
      { kana: 'ふくざつ', romaji: ['fukuzatsu'], rubyHtml: '<ruby>複雑<rt>ふくざつ</rt></ruby>', meaning: 'Phức tạp' },
      { kana: 'じゃま', romaji: ['jama'], rubyHtml: '<ruby>邪魔<rt>じゃま</rt></ruby>', meaning: 'Cản trở, cản trở' },
      { kana: 'きたない', romaji: ['kitanai'], rubyHtml: '<ruby>汚<rt>きた</rt></ruby>ない', meaning: 'Bẩn, dơ' },
      { kana: 'はずかしい', romaji: ['hazukashii'], rubyHtml: '<ruby>恥<rt>はず</rt></ruby>かしい', meaning: 'Xấu hổ, e ngại' }
    ]}
  ],
  40: [
    { id: 'b40_doluong', name: 'A. Động từ Đo lường & Xác nhận', selected: true, items: [
      { kana: 'かぞえます', romaji: ['kazoemasu'], rubyHtml: '<ruby>数<rt>かぞ</rt></ruby>えます', meaning: 'Đếm' },
      { kana: 'はかります', romaji: ['hakarimasu'], rubyHtml: '<ruby>測<rt>はか</rt></ruby>ります', meaning: 'Đo, cân' },
      { kana: 'たしかめます', romaji: ['tashikamemasu'], rubyHtml: '<ruby>確かめます<rt>たしかめます</rt></ruby>', meaning: 'Xác nhận' },
      { kana: 'しゅっぱつします', romaji: ['shuppatsushimasu'], rubyHtml: '<ruby>出発<rt>しゅっぱつ</rt></ruby>します', meaning: 'Xuất phát' },
      { kana: 'とうちゃくします', romaji: ['touchakushimasu'], rubyHtml: '<ruby>到着<rt>とうちゃく</rt></ruby>します', meaning: 'Đến nơi' },
      { kana: 'よいます', romaji: ['yoimasu'], rubyHtml: '<ruby>酔<rt>よ</rt></ruby>います', meaning: 'Say (rượu, xe)' }
    ]},
    { id: 'b40_sukien', name: 'B. Sự kiện & Kích thước', selected: true, items: [
      { kana: 'ぼうねんかい', romaji: ['bounenkai'], rubyHtml: '<ruby>忘年会<rt>ぼうねんかい</rt></ruby>', meaning: 'Tiệc tất niên' },
      { kana: 'しんねんかい', romaji: ['shinnenkai'], rubyHtml: '<ruby>新年会<rt>しんねんかい</rt></ruby>', meaning: 'Tiệc tân niên' },
      { kana: 'にじかい', romaji: ['nijikai'], rubyHtml: '<ruby>二次会<rt>にじかい</rt></ruby>', meaning: 'Tăng hai (tiệc)' },
      { kana: 'おもて', romaji: ['omote'], rubyHtml: '<ruby>表<rt>おもて</rt></ruby>', meaning: 'Mặt trước' },
      { kana: 'うら', romaji: ['ura'], rubyHtml: '<ruby>裏<rt>うら</rt></ruby>', meaning: 'Mặt sau' },
      { kana: 'ながさ', romaji: ['nagasa'], rubyHtml: '<ruby>長<rt>なが</rt></ruby>さ', meaning: 'Chiều dài' },
      { kana: 'おもさ', romaji: ['omosa'], rubyHtml: '<ruby>重<rt>おも</rt></ruby>さ', meaning: 'Cân nặng' }
    ]}
  ],
  41: [
    { id: 'b41_chonhan', name: 'A. Động từ Cho - Nhận', selected: true, items: [
      { kana: 'いただきます', romaji: ['itadakimasu'], rubyHtml: '<ruby>頂<rt>いただき</rt></ruby>ます', meaning: 'Nhận (khiêm nhường của もらいます)' },
      { kana: 'くださいます', romaji: ['kudasaimasu'], rubyHtml: 'くださいます', meaning: 'Cho tôi (kính ngữ của くれます)' },
      { kana: 'やります', romaji: ['yarimasu'], rubyHtml: 'やります', meaning: 'Cho (cho động vật, con nhỏ)' },
      { kana: 'よびます', romaji: ['yobimasu'], rubyHtml: '<ruby>呼<rt>よ</rt></ruby>びます', meaning: 'Gọi' },
      { kana: 'とりかえます', romaji: ['torikaemasu'], rubyHtml: '<ruby>取り替えます<rt>とりかえます</rt></ruby>', meaning: 'Đổi, thay thế' },
      { kana: 'たすけます', romaji: ['tasukemasu'], rubyHtml: '<ruby>助<rt>たす</rt></ruby>けます', meaning: 'Giúp đỡ, cứu' }
    ]},
    { id: 'b41_quatang', name: 'B. Quà tặng & Gia đình', selected: true, items: [
      { kana: 'おいわい', romaji: ['oiwai'], rubyHtml: 'お<ruby>祝い<rt>いわい</rt></ruby>', meaning: 'Quà chúc mừng' },
      { kana: 'おとしだま', romaji: ['otoshidama'], rubyHtml: 'お<ruby>年玉<rt>としだま</rt></ruby>', meaning: 'Tiền mừng tuổi' },
      { kana: 'おみまい', romaji: ['omimai'], rubyHtml: 'お<ruby>見舞い<rt>みまい</rt></ruby>', meaning: 'Thăm bệnh' },
      { kana: 'そふ', romaji: ['sofu'], rubyHtml: '<ruby>祖父<rt>そふ</rt></ruby>', meaning: 'Ông (của mình)' },
      { kana: 'そぼ', romaji: ['sobo'], rubyHtml: '<ruby>祖母<rt>そぼ</rt></ruby>', meaning: 'Bà (của mình)' },
      { kana: 'まご', romaji: ['mago'], rubyHtml: '<ruby>孫<rt>まご</rt></ruby>', meaning: 'Cháu' }
    ]}
  ],
  42: [
    { id: 'b42_mucdich', name: 'A. Động từ Mục đích & Sử dụng', selected: true, items: [
      { kana: 'つつみます', romaji: ['tsutsumimasu'], rubyHtml: '<ruby>包<rt>つつ</rt></ruby>みます', meaning: 'Gói, bọc' },
      { kana: 'わかします', romaji: ['wakashimasu'], rubyHtml: '<ruby>沸<rt>わ</rt></ruby>かします', meaning: 'Đun sôi' },
      { kana: 'まぜます', romaji: ['mazemasu'], rubyHtml: '<ruby>混<rt>ま</rt></ruby>ぜます', meaning: 'Trộn, khuấy' },
      { kana: 'けいさんします', romaji: ['keisanshimasu'], rubyHtml: '<ruby>計算<rt>けいさん</rt></ruby>します', meaning: 'Tính toán' }
    ]},
    { id: 'b42_dungcu', name: 'B. Dụng cụ & Đồ hộp', selected: true, items: [
      { kana: 'ミキサー', romaji: ['mikisa-'], rubyHtml: 'ミキサー', meaning: 'Máy xay sinh tố' },
      { kana: 'やかん', romaji: ['yakan'], rubyHtml: 'やかん', meaning: 'Ấm đun nước' },
      { kana: 'せんぬき', romaji: ['sennuki'], rubyHtml: '<ruby>栓抜き<rt>せんぬき</rt></ruby>', meaning: 'Cái mở nút chai' },
      { kana: 'かんきり', romaji: ['kankiri'], rubyHtml: '<ruby>缶切り<rt>かんきり</rt></ruby>', meaning: 'Cái mở đồ hộp' },
      { kana: 'ふろしき', romaji: ['furoshiki'], rubyHtml: 'ふろしき', meaning: 'Khăn gói đồ' }
    ]},
    { id: 'b42_xahoi', name: 'C. Xã hội & Pháp luật', selected: true, items: [
      { kana: 'べんごし', romaji: ['bengoshi'], rubyHtml: '<ruby>弁護士<rt>べんごし</rt></ruby>', meaning: 'Luật sư' },
      { kana: 'きょういく', romaji: ['kyouiku'], rubyHtml: '<ruby>教育<rt>きょういく</rt></ruby>', meaning: 'Giáo dục' },
      { kana: 'ほうりつ', romaji: ['houritsu'], rubyHtml: '<ruby>法律<rt>ほうりつ</rt></ruby>', meaning: 'Pháp luật' },
      { kana: 'へいわ', romaji: ['heiwa'], rubyHtml: '<ruby>平和<rt>へいわ</rt></ruby>', meaning: 'Hòa bình' }
    ]}
  ],
  43: [
    { id: 'b43_biendoi', name: 'A. Động từ Biến đổi Trạng thái', selected: true, items: [
      { kana: 'ふえます', romaji: ['fuemasu'], rubyHtml: '<ruby>増<rt>ふ</rt></ruby>えます', meaning: 'Tăng lên' },
      { kana: 'へります', romaji: ['herimasu'], rubyHtml: '<ruby>減<rt>へ</rt></ruby>ります', meaning: 'Giảm đi' },
      { kana: 'あがります', romaji: ['agarimasu'], rubyHtml: '<ruby>上<rt>あ</rt></ruby>がります', meaning: 'Tăng lên (giá cả)' },
      { kana: 'さがります', romaji: ['sagarimasu'], rubyHtml: '<ruby>下<rt>さ</rt></ruby>がります', meaning: 'Giảm xuống (giá cả)' },
      { kana: 'きれます', romaji: ['kiremasu'], rubyHtml: '<ruby>切<rt>き</rt></ruby>れます', meaning: 'Đứt (dây đứt)' },
      { kana: 'とれます', romaji: ['toremasu'], rubyHtml: '<ruby>取<rt>と</rt></ruby>れます', meaning: 'Bung, tuột (cúc)' }
    ]},
    { id: 'b43_trangthai', name: 'B. Trạng thái & Cảm nhận', selected: true, items: [
      { kana: 'じょうぶ', romaji: ['joubu'], rubyHtml: '<ruby>丈夫<rt>じょうぶ</rt></ruby>', meaning: 'Bền, chắc chắn' },
      { kana: 'へん', romaji: ['hen'], rubyHtml: '<ruby>変<rt>へん</rt></ruby>', meaning: 'Kỳ lạ, kỳ quặc' },
      { kana: 'しあわせ', romaji: ['shiawase'], rubyHtml: '<ruby>幸<rt>しあわ</rt></ruby>せ', meaning: 'Hạnh phúc' },
      { kana: 'うまい', romaji: ['umai'], rubyHtml: 'うまい', meaning: 'Ngon / Giỏi' },
      { kana: 'まずい', romaji: ['mazui'], rubyHtml: 'まずい', meaning: 'Dở, không ngon' }
    ]}
  ],
  44: [
    { id: 'b44_camxuc', name: 'A. Động từ Cảm xúc & Sinh hoạt', selected: true, items: [
      { kana: 'なきます', romaji: ['nakimasu'], rubyHtml: '<ruby>泣<rt>な</rt></ruby>きます', meaning: 'Khóc' },
      { kana: 'わらいます', romaji: ['waraimasu'], rubyHtml: '<ruby>笑<rt>わら</rt></ruby>います', meaning: 'Cười' },
      { kana: 'かわきます', romaji: ['kawakimasu'], rubyHtml: '<ruby>乾<rt>かわ</rt></ruby>きます', meaning: 'Khô (quần áo khô)' },
      { kana: 'ぬれます', romaji: ['nuremasu'], rubyHtml: 'ぬれます', meaning: 'Ướt' },
      { kana: 'すべります', romaji: ['suberimasu'], rubyHtml: '<ruby>滑<rt>すべ</rt></ruby>ります', meaning: 'Trơn trượt' }
    ]},
    { id: 'b44_cattoc', name: 'B. Tiệm cắt tóc & Từ vựng', selected: true, items: [
      { kana: 'あんぜん', romaji: ['anzen'], rubyHtml: '<ruby>安全<rt>あんぜん</rt></ruby>', meaning: 'An toàn' },
      { kana: 'ていねい', romaji: ['teinei'], rubyHtml: '<ruby>丁寧<rt>ていねい</rt></ruby>', meaning: 'Lịch sự, cẩn thận' },
      { kana: 'こい', romaji: ['koi'], rubyHtml: '<ruby>濃<rt>こ</rt></ruby>い', meaning: 'Đậm, đặc' },
      { kana: 'うすい', romaji: ['usui'], rubyHtml: '<ruby>薄<rt>うす</rt></ruby>い', meaning: 'Nhạt, mỏng' },
      { kana: 'どうなさいますか', romaji: ['dounasaimasuka'], rubyHtml: 'どうなさいますか', meaning: 'Anh/chị muốn làm kiểu gì? (Cắt tóc)' }
    ]}
  ],
  45: [
    { id: 'b45_chuanbi', name: 'A. Động từ Chuẩn bị & Sự cố', selected: true, items: [
      { kana: 'あやまります', romaji: ['ayamarimasu'], rubyHtml: '<ruby>謝<rt>あやま</rt></ruby>ります', meaning: 'Xin lỗi' },
      { kana: 'あいます', romaji: ['aimasu'], rubyHtml: '<ruby>遭<rt>あ</rt></ruby>います', meaning: 'Gặp phải (tai nạn)' },
      { kana: 'しんじます', romaji: ['shinjimasu'], rubyHtml: '<ruby>信<rt>しん</rt></ruby>じます', meaning: 'Tin tưởng' },
      { kana: 'よういします', romaji: ['youishimasu'], rubyHtml: '<ruby>用意<rt>ようい</rt></ruby>します', meaning: 'Sửa sửa, chuẩn bị' },
      { kana: 'キャンセルします', romaji: ['kyanserushimasu'], rubyHtml: 'キャンセルします', meaning: 'Hủy bỏ' }
    ]},
    { id: 'b45_giayto', name: 'B. Giấy tờ & Tài chính', selected: true, items: [
      { kana: 'ほしょうしょ', romaji: ['hoshousho'], rubyHtml: '<ruby>保証書<rt>ほしょうしょ</rt></ruby>', meaning: 'Giấy bảo hành' },
      { kana: 'りょうしゅうしょ', romaji: ['ryoushuusho'], rubyHtml: '<ruby>領収書<rt>りょうしゅうしょ</rt></ruby>', meaning: 'Hóa đơn thanh toán' },
      { kana: 'おくりもの', romaji: ['okurimono'], rubyHtml: '<ruby>贈り物<rt>おくりもの</rt></ruby>', meaning: 'Quà biếu' }
    ]}
  ],
  46: [
    { id: 'b46_chuyenphat', name: 'A. Động từ Chuyển phát & Nhập liệu', selected: true, items: [
      { kana: 'やきます', romaji: ['yakimasu'], rubyHtml: '<ruby>焼<rt>や</rt></ruby>きます', meaning: 'Nướng' },
      { kana: 'わたします', romaji: ['watashimasu'], rubyHtml: '<ruby>渡<rt>わた</rt></ruby>します', meaning: 'Trao tận tay' },
      { kana: 'かえってきます', romaji: ['kaettekimasu'], rubyHtml: '<ruby>帰<rt>かえ</rt></ruby>って<ruby>来<rt>き</rt></ruby>ます', meaning: 'Trở về' },
      { kana: 'にゅうりょくします', romaji: ['nyuuryokushimasu'], rubyHtml: '<ruby>入力<rt>にゅうりょく</rt></ruby>します', meaning: 'Nhập dữ liệu' }
    ]},
    { id: 'b46_dichvu', name: 'B. Dịch vụ & Thiết bị', selected: true, items: [
      { kana: 'たくはいびん', romaji: ['takuhaibin'], rubyHtml: '<ruby>宅配便<rt>たくはいびん</rt></ruby>', meaning: 'Dịch vụ giao hàng tận nhà' },
      { kana: 'げんいん', romaji: ['genin'], rubyHtml: '<ruby>原因<rt>げんいん</rt></ruby>', meaning: 'Nguyên nhân' },
      { kana: 'ちゅうしゃ', romaji: ['chuusha'], rubyHtml: '<ruby>注射<rt>ちゅうしゃ</rt></ruby>', meaning: 'Mũi tiêm' }
    ]}
  ],
  47: [
    { id: 'b47_dongtu', name: 'A. Động từ & Cảm nhận', selected: true, items: [
      { kana: 'あつまります', romaji: ['atsumarimasu'], rubyHtml: '<ruby>集<rt>あつ</rt></ruby>まります', meaning: 'Tập hợp, tụ tập' },
      { kana: 'わかれます', romaji: ['wakaremasu'], rubyHtml: '<ruby>別<rt>わか</rt></ruby>れます', meaning: 'Chia tay, chia rẽ' },
      { kana: 'ながいきします', romaji: ['nagaikishimasu'], rubyHtml: '<ruby>長生き<rt>ながいき</rt></ruby>します', meaning: 'Sống thọ' },
      { kana: 'こんやくします', romaji: ['konyakushimasu'], rubyHtml: '<ruby>婚約<rt>こんやく</rt></ruby>します', meaning: 'Đính hôn' }
    ]},
    { id: 'b47_dubao', name: 'B. Dự báo & Khoa học', selected: true, items: [
      { kana: 'てんきよほう', romaji: ['tenkiyohou'], rubyHtml: '<ruby>天気予報<rt>てんきよほう</rt></ruby>', meaning: 'Dự báo thời tiết' },
      { kana: 'じっけん', romaji: ['jikken'], rubyHtml: '<ruby>実験<rt>じっけん</rt></ruby>', meaning: 'Thí nghiệm' },
      { kana: 'じんこう', romaji: ['jinkou'], rubyHtml: '<ruby>人口<rt>じんこう</rt></ruby>', meaning: 'Dân số' }
    ]}
  ],
  48: [
    { id: 'b48_saikhien', name: 'A. Động từ Sai khiến', selected: true, items: [
      { kana: 'おろします', romaji: ['oroshimasu'], rubyHtml: '<ruby>降<rt>お</rt></ruby>ろします', meaning: 'Cho xuống, hạ xuống' },
      { kana: 'とどけます', romaji: ['todokemasu'], rubyHtml: '<ruby>届<rt>とど</rt></ruby>けます', meaning: 'Chuyển tới, mang đến' },
      { kana: 'せわをします', romaji: ['sewaoshimasu'], rubyHtml: '<ruby>世話<rt>せわ</rt></ruby>をします', meaning: 'Chăm sóc' }
    ]},
    { id: 'b48_giaoduc', name: 'B. Giáo dục & Lịch trình', selected: true, items: [
      { kana: 'きびしい', romaji: ['kibishii'], rubyHtml: '<ruby>厳<rt>きび</rt></ruby>しい', meaning: 'Nghiêm khắc' },
      { kana: 'じゅく', romaji: ['juku'], rubyHtml: '<ruby>塾<rt>じゅく</rt></ruby>', meaning: 'Lớp học thêm' },
      { kana: 'せいと', romaji: ['seito'], rubyHtml: '<ruby>生徒<rt>せいと</rt></ruby>', meaning: 'Học sinh' }
    ]}
  ],
  49: [
    { id: 'b49_sonkeigo', name: 'A. Động từ Tôn kính ngữ (Sonkeigo)', selected: true, items: [
      { kana: 'いらっしゃいます', romaji: ['irasshaimasu'], rubyHtml: 'いらっしゃいます', meaning: 'Ở / Đi / Đến (Tôn kính của います/いきます/きます)' },
      { kana: 'めしあがります', romaji: ['meshiagarimasu'], rubyHtml: '<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がります', meaning: 'Ăn / Uống (Tôn kính của たべます/のみます)' },
      { kana: 'おっしゃいます', romaji: ['osshaimasu'], rubyHtml: 'おっしゃいます', meaning: 'Nói (Tôn kính của いいます)' },
      { kana: 'なさいます', romaji: ['nasaimasu'], rubyHtml: 'なさいます', meaning: 'Làm (Tôn kính của します)' },
      { kana: 'ごらんになります', romaji: ['goranninarimasu'], rubyHtml: '<ruby>ご覧<rt>ごらん</rt></ruby>になります', meaning: 'Xem / Nhìn (Tôn kính của みます)' },
      { kana: 'ごぞんじです', romaji: ['gozonjidesu'], rubyHtml: 'ご<ruby>存<rt>ぞん</rt></ruby>じです', meaning: 'Biết (Tôn kính của しっています)' }
    ]},
    { id: 'b49_nghenghiep', name: 'B. Nghề nghiệp & Khách sạn', selected: true, items: [
      { kana: 'あいさつ', romaji: ['aisatsu'], rubyHtml: '<ruby>挨拶<rt>あいさつ</rt></ruby>', meaning: 'Chào hỏi' },
      { kana: 'りょかん', romaji: ['ryokan'], rubyHtml: '<ruby>旅館<rt>りょかん</rt></ruby>', meaning: 'Quán trọ kiểu Nhật' },
      { kana: 'こうし', romaji: ['koushi'], rubyHtml: '<ruby>講師<rt>こうし</rt></ruby>', meaning: 'Giảng viên' },
      { kana: 'さっか', romaji: ['sakka'], rubyHtml: '<ruby>作家<rt>さっか</rt></ruby>', meaning: 'Nhà văn' }
    ]}
  ],
  50: [
    { id: 'b50_kenjougo', name: 'A. Động từ Khiêm nhường ngữ (Kenjougo)', selected: true, items: [
      { kana: 'まいります', romaji: ['mairimasu'], rubyHtml: '<ruby>参<rt>まい</rt></ruby>ります', meaning: 'Đi / Đến (Khiêm nhường của いきます/きます)' },
      { kana: 'おります', romaji: ['orimasu'], rubyHtml: 'おります', meaning: 'Ở / Có (Khiêm nhường của います)' },
      { kana: 'いただきます', romaji: ['itadakimasu'], rubyHtml: '<ruby>頂<rt>いただき</rt></ruby>ます', meaning: 'Ăn / Uống / Nhận' },
      { kana: 'もうします', romaji: ['moushimasu'], rubyHtml: '<ruby>申<rt>もう</rt></ruby>します', meaning: 'Nói / Tên là (Khiêm nhường của いいます)' },
      { kana: 'いたします', romaji: ['itashimasu'], rubyHtml: 'いたします', meaning: 'Làm (Khiêm nhường của します)' },
      { kana: 'はいけんします', romaji: ['haikenshimasu'], rubyHtml: '<ruby>拝見<rt>はいけん</rt></ruby>します', meaning: 'Xem / Nhìn (Khiêm nhường của みます)' },
      { kana: 'ぞんじております', romaji: ['zonjiteorimasu'], rubyHtml: '<ruby>存<rt>ぞん</rt></ruby>じております', meaning: 'Biết (Khiêm nhường của しっています)' },
      { kana: 'うかがいます', romaji: ['ukagaimasu'], rubyHtml: '<ruby>伺<rt>うかが</rt></ruby>います', meaning: 'Hỏi / Đến thăm' }
    ]},
    { id: 'b50_danhtu', name: 'B. Động từ lịch sự & Danh từ', selected: true, items: [
      { kana: 'ございます', romaji: ['gozaimasu'], rubyHtml: 'ございます', meaning: 'Có (Lịch sự của あります)' },
      { kana: 'わたくし', romaji: ['watakushi'], rubyHtml: '<ruby>私<rt>わたくし</rt></ruby>', meaning: 'Tôi (Khiêm nhường của わたし)' },
      { kana: 'おたく', romaji: ['otaku'], rubyHtml: 'お<ruby>宅<rt>たく</rt></ruby>', meaning: 'Nhà của ngài' },
      { kana: 'こうがい', romaji: ['kougai'], rubyHtml: '<ruby>郊外<rt>こうがい</rt></ruby>', meaning: 'Ngoại ô' },
      { kana: 'おれい', romaji: ['orei'], rubyHtml: 'お<ruby>礼<rt>れい</rt></ruby>', meaning: 'Lời cảm ơn, quà cảm ơn' }
    ]}
  ]
};
;