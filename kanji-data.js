// Kanji I, Unit 1-5: đúng thứ tự 60 chữ trong mục lục sách (trang 27-46).
// Mỗi mục: chữ, nghĩa, từ âm On, từ âm Kun. Để null khi không có ví dụ Kun thông dụng.
// Các từ và câu minh họa bổ sung được viết riêng; không nhận là trích nguyên văn sách.
const KANJI_FIRST_FIVE = [
  {id:1,name:'Ngày tháng và thiên nhiên',items:[
    ['日','ngày; mặt trời',['日曜日','にちようび','Chủ nhật'],['日','ひ','mặt trời']],
    ['月','tháng; mặt trăng',['月曜日','げつようび','Thứ Hai'],['月','つき','mặt trăng']],
    ['火','lửa',['火曜日','かようび','Thứ Ba'],['火','ひ','lửa']],
    ['水','nước',['水曜日','すいようび','Thứ Tư'],['水','みず','nước']],
    ['木','cây; gỗ',['木曜日','もくようび','Thứ Năm'],['木','き','cây']],
    ['金','vàng; tiền',['金曜日','きんようび','Thứ Sáu'],['お金','おかね','tiền']],
    ['土','đất',['土曜日','どようび','Thứ Bảy'],['土','つち','đất']],
    ['山','núi',['火山','かざん','núi lửa'],['山','やま','núi']],
    ['川','sông',['河川','かせん','sông ngòi'],['川','かわ','sông']],
    ['田','ruộng',['水田','すいでん','ruộng lúa'],['田んぼ','たんぼ','ruộng']]
  ]},
  {id:2,name:'Con số và tiền yên',items:[
    ['一','một',['一月','いちがつ','tháng Một'],['一つ','ひとつ','một cái']],
    ['二','hai',['二月','にがつ','tháng Hai'],['二つ','ふたつ','hai cái']],
    ['三','ba',['三月','さんがつ','tháng Ba'],['三つ','みっつ','ba cái']],
    ['四','bốn',['四月','しがつ','tháng Tư'],['四つ','よっつ','bốn cái']],
    ['五','năm',['五月','ごがつ','tháng Năm'],['五つ','いつつ','năm cái']],
    ['六','sáu',['六月','ろくがつ','tháng Sáu'],['六つ','むっつ','sáu cái']],
    ['七','bảy',['七月','しちがつ','tháng Bảy'],['七つ','ななつ','bảy cái']],
    ['八','tám',['八月','はちがつ','tháng Tám'],['八つ','やっつ','tám cái']],
    ['九','chín',['九月','くがつ','tháng Chín'],['九つ','ここのつ','chín cái']],
    ['十','mười',['十月','じゅうがつ','tháng Mười'],['十','とお','mười cái']],
    ['百','trăm',['百円','ひゃくえん','100 yên'],null],
    ['千','nghìn',['千円','せんえん','1.000 yên'],null],
    ['万','vạn; mười nghìn',['一万円','いちまんえん','10.000 yên'],null],
    ['円','yên; tròn',['百円','ひゃくえん','100 yên'],null]
  ]},
  {id:3,name:'Con người và nghề nghiệp',items:[
    ['学','học',['学生','がくせい','học sinh'],['学ぶ','まなぶ','học']],
    ['生','sinh; sống',['学生','がくせい','học sinh'],['生まれる','うまれる','được sinh ra']],
    ['先','trước',['先生','せんせい','giáo viên'],['先','さき','phía trước']],
    ['会','hội; gặp',['会社','かいしゃ','công ty'],['会う','あう','gặp']],
    ['社','công ty; đền',['会社','かいしゃ','công ty'],null],
    ['員','nhân viên',['会社員','かいしゃいん','nhân viên công ty'],null],
    ['医','y; bác sĩ',['医者','いしゃ','bác sĩ'],null],
    ['者','người',['医者','いしゃ','bác sĩ'],['者','もの','người']],
    ['本','gốc; sách',['日本','にほん','Nhật Bản'],null],
    ['中','trong; giữa',['中国','ちゅうごく','Trung Quốc'],['中','なか','bên trong']],
    ['国','nước; quốc gia',['中国','ちゅうごく','Trung Quốc'],['国','くに','đất nước']],
    ['人','người',['日本人','にほんじん','người Nhật'],['人','ひと','người']]
  ]},
  {id:4,name:'Thời gian và sinh hoạt',items:[
    ['今','bây giờ',['今週','こんしゅう','tuần này'],['今','いま','bây giờ']],
    ['朝','buổi sáng',['朝食','ちょうしょく','bữa sáng'],['朝','あさ','buổi sáng']],
    ['昼','buổi trưa',['昼食','ちゅうしょく','bữa trưa'],['昼','ひる','buổi trưa']],
    ['晩','buổi tối',['毎晩','まいばん','mỗi tối'],null],
    ['時','giờ; thời gian',['一時','いちじ','một giờ'],['時','とき','lúc; khi']],
    ['分','phút; phần',['五分','ごふん','năm phút'],['分かる','わかる','hiểu']],
    ['半','nửa',['半分','はんぶん','một nửa'],['半ば','なかば','khoảng giữa']],
    ['午','buổi trưa',['午前','ごぜん','buổi sáng'],null],
    ['前','trước',['午前','ごぜん','buổi sáng'],['前','まえ','phía trước']],
    ['後','sau',['午後','ごご','buổi chiều'],['後','あと','sau đó']],
    ['休','nghỉ',['休憩','きゅうけい','giải lao'],['休み','やすみ','ngày nghỉ']],
    ['毎','mỗi',['毎日','まいにち','mỗi ngày'],null],
    ['何','gì; nào',null,['何','なに','cái gì']]
  ]},
  {id:5,name:'Đi lại và trường học',items:[
    ['行','đi',['銀行','ぎんこう','ngân hàng'],['行く','いく','đi']],
    ['来','đến',['来週','らいしゅう','tuần sau'],['来る','くる','đến']],
    ['校','trường học',['学校','がっこう','trường học'],null],
    ['週','tuần',['今週','こんしゅう','tuần này'],null],
    ['去','quá khứ; rời',['去年','きょねん','năm ngoái'],['去る','さる','rời đi']],
    ['年','năm',['来年','らいねん','năm sau'],['年','とし','năm']],
    ['駅','nhà ga',['駅','えき','nhà ga'],null],
    ['電','điện',['電車','でんしゃ','tàu điện'],null],
    ['車','xe',['電車','でんしゃ','tàu điện'],['車','くるま','xe']],
    ['自','tự mình',['自分','じぶん','bản thân'],null],
    ['転','quay; ngã',['自転車','じてんしゃ','xe đạp'],['転ぶ','ころぶ','ngã']]
  ]}
];

// Một câu dễ đọc cho mỗi từ. Câu riêng cho các động từ và từ chỉ thời gian.
const KANJI_SENTENCES = {
  '日:kun':['日が出ます。','ひがでます。','Mặt trời mọc.'],
  '月:kun':['月が見えます。','つきがみえます。','Nhìn thấy trăng.'],
  '火:kun':['火があります。','ひがあります。','Có lửa.'],
  '水:kun':['水をのみます。','みずをのみます。','Tôi uống nước.'],
  '木:kun':['木があります。','きがあります。','Có cây.'],
  '金:kun':['お金があります。','おかねがあります。','Tôi có tiền.'],
  '土:kun':['土があります。','つちがあります。','Có đất.'],
  '山:kun':['山が見えます。','やまがみえます。','Nhìn thấy núi.'],
  '川:kun':['川があります。','かわがあります。','Có sông.'],
  '田:kun':['田んぼがあります。','たんぼがあります。','Có ruộng.'],
  '学:kun':['日本語を学ぶ。','にほんごをまなぶ。','Học tiếng Nhật.'],
  '生:kun':['赤ちゃんが生まれる。','あかちゃんがうまれる。','Em bé chào đời.'],
  '会:kun':['友達に会う。','ともだちにあう。','Gặp bạn.'],
  '分:kun':['日本語が分かる。','にほんごがわかる。','Hiểu tiếng Nhật.'],
  '行:kun':['学校へ行く。','がっこうへいく。','Đi đến trường.'],
  '来:kun':['友達が来る。','ともだちがくる。','Bạn đến.'],
  '去:kun':['ここを去る。','ここをさる。','Rời khỏi đây.'],
  '転:kun':['道で転ぶ。','みちでころぶ。','Ngã trên đường.']
};

function kanjiExampleSentence(char,type,example) {
  const override=KANJI_SENTENCES[`${char}:${type}`];
  if (override) return override;
  const [word,kana,meaning]=example;
  if ('一二三四五六七八九十'.includes(char) && type==='kun')
    return [`${word}あります。`,`${kana}あります。`,`Có ${meaning}.`];
  if (word.endsWith('月') && '一二三四五六七八九十'.includes(char))
    return [`今は${word}です。`,`いまは${kana}です。`,`Bây giờ là ${meaning}.`];
  if (word.endsWith('曜日'))
    return [`きょうは${word}です。`,`きょうは${kana}です。`,`Hôm nay là ${meaning}.`];
  return [`${word}です。`,`${kana}です。`,`${meaning}.`];
}
