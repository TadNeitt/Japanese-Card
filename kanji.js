/* Kanji Unit 1-5. Giữ trạng thái và phím tắt độc lập với phần từ vựng/kana. */
(() => {
  'use strict';
  const $=id=>document.getElementById(id);
  const views=['mode-select-view','kanji-select-view','kanji-study-view','kanji-test-view'];
  const STORAGE='kanjiBookFirstFiveProgress_v1';
  const selected=new Set([1]);
  let progress={};
  try { progress=JSON.parse(localStorage.getItem(STORAGE)||'{}')||{}; } catch { progress={}; }
  let studyCards=[],studyIndex=0,studyRevealed=false;
  let current=null,queue=[],roundMistakes=new Map(),roundFailed=new Set();
  let sessionResults=new Map(),firstTryCorrect=new Set(),sessionLessons=new Set();
  let fieldDone={},revealedFields=new Set(),lastFocusedType='on',locked=false,roundNumber=1,sessionSize=0,advanceTimer=null;
  const all=KANJI_FIRST_FIVE.flatMap(lesson=>lesson.items.map(row=>({lesson:lesson.id,char:row[0],meaning:row[1],on:row[2],kun:row[3]})));
  const key=card=>`${card.lesson}:${card.char}`;
  const save=()=>{try{localStorage.setItem(STORAGE,JSON.stringify(progress));}catch{alert('Không lưu được tiến độ Kanji trên trình duyệt.');}};
  const record=card=>progress[key(card)]||{lesson:card.lesson,streak:0,remaining:0};
  function show(name){views.forEach(id=>$(id).style.display=id===name?'block':'none');window.scrollTo(0,0);}
  function selectedCards(){return all.filter(card=>selected.has(card.lesson));}
  function renderLessons(){
    const wrap=$('kanji-lessons');wrap.replaceChildren();
    KANJI_FIRST_FIVE.forEach(lesson=>{
      const tile=document.createElement('div');tile.className=`kanji-lesson${selected.has(lesson.id)?' selected':''}`;
      tile.setAttribute('role','button');tile.tabIndex=0;
      const cards=all.filter(card=>card.lesson===lesson.id);
      const resting=cards.filter(card=>record(card).remaining>0).length;
      const title=document.createElement('b');title.textContent=`Unit ${lesson.id} · ${lesson.name}`;
      const sample=document.createElement('div');sample.className='kanji-sample';sample.textContent=lesson.items.map(row=>row[0]).join(' ');
      const detail=document.createElement('small');detail.textContent=`${cards.length} chữ · ${resting} đang nghỉ`;
      const reset=document.createElement('button');reset.textContent='↺ Reset bài này';
      reset.addEventListener('click',event=>{event.stopPropagation();resetLesson(lesson.id);});
      const toggle=()=>{if(selected.has(lesson.id))selected.delete(lesson.id);else selected.add(lesson.id);renderLessons();};
      tile.addEventListener('click',toggle);
      tile.addEventListener('keydown',event=>{if(event.key===' '||event.key==='Enter'){event.preventDefault();toggle();}});
      tile.append(title,sample,detail,reset);wrap.appendChild(tile);
    });
    const cards=selectedCards();
    const ready=cards.filter(card=>record(card).remaining===0).length;
    $('kanji-selection-info').textContent=`Đã chọn ${selected.size} bài · ${cards.length} chữ · ${ready} chữ sẵn sàng kiểm tra`;
    $('kanji-learn').disabled=$('kanji-start').disabled=!selected.size;
  }
  function resetLesson(id){
    if(!confirm(`Reset tiến độ Kanji Unit ${id}?`))return;
    Object.keys(progress).filter(k=>k.startsWith(`${id}:`)).forEach(k=>delete progress[k]);
    save();renderLessons();
  }
  function readingCard(card,type,example){
    const box=document.createElement('div');box.className='kanji-reading';
    const title=document.createElement('h3');title.textContent=`Âm ${type==='on'?'On':'Kun'}`;
    const word=document.createElement('div');word.className='kanji-word';word.textContent=example[0];
    const sub=document.createElement('div');sub.className='muted';sub.textContent=`${example[1]} · ${example[2]}`;
    const sentence=kanjiExampleSentence(card.char,type,example);
    const line=document.createElement('div');line.className='kanji-sentence';
    line.append(document.createTextNode(sentence[0]));
    sentence.slice(1).forEach(value=>{const span=document.createElement('span');span.textContent=value;line.appendChild(span);});
    box.append(title,word,sub,line);return box;
  }
  function renderStudy(){
    const card=studyCards[studyIndex];
    $('kanji-study-count').textContent=`${studyIndex+1} / ${studyCards.length}`;
    $('kanji-study-char').textContent=card.char;
    $('kanji-study-meaning').textContent=card.meaning;
    const details=$('kanji-study-readings');details.replaceChildren();
    if(card.on)details.appendChild(readingCard(card,'on',card.on));
    if(card.kun)details.appendChild(readingCard(card,'kun',card.kun));
    details.style.gridTemplateColumns=card.on&&card.kun?'':'1fr';
    $('kanji-study-detail').style.display=studyRevealed?'block':'none';
    $('kanji-study-hint').style.display=studyRevealed?'none':'block';
    $('kanji-reveal-study').textContent=studyRevealed?'Ẩn đáp án':'Xem đáp án';
    $('kanji-prev').disabled=studyIndex===0;$('kanji-next').disabled=studyIndex===studyCards.length-1;
  }
  function startStudy(){studyCards=selectedCards();if(!studyCards.length)return;studyIndex=0;studyRevealed=false;show('kanji-study-view');renderStudy();}
  function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  function startTest(){
    const cards=selectedCards();if(!cards.length)return;
    const ready=cards.filter(card=>record(card).remaining===0);
    if(!ready.length){
      if(confirm('Tất cả chữ đang nghỉ. Tính một lượt nghỉ cho các bài đã chọn?')){
        cards.forEach(card=>{const r=progress[key(card)];if(r&&r.remaining>0)r.remaining--;});save();renderLessons();
      }
      return;
    }
    sessionLessons=new Set(selected);sessionResults=new Map();firstTryCorrect=new Set();
    roundMistakes=new Map();roundFailed=new Set();roundNumber=1;sessionSize=ready.length;
    queue=shuffle(ready);$('kanji-result').style.display='none';$('kanji-test-active').style.display='block';
    show('kanji-test-view');nextCard();
  }
  const basic={あ:'a',い:'i',う:'u',え:'e',お:'o',か:'ka',き:'ki',く:'ku',け:'ke',こ:'ko',さ:'sa',し:'shi',す:'su',せ:'se',そ:'so',た:'ta',ち:'chi',つ:'tsu',て:'te',と:'to',な:'na',に:'ni',ぬ:'nu',ね:'ne',の:'no',は:'ha',ひ:'hi',ふ:'fu',へ:'he',ほ:'ho',ま:'ma',み:'mi',む:'mu',め:'me',も:'mo',や:'ya',ゆ:'yu',よ:'yo',ら:'ra',り:'ri',る:'ru',れ:'re',ろ:'ro',わ:'wa',を:'wo',ん:'n',が:'ga',ぎ:'gi',ぐ:'gu',げ:'ge',ご:'go',ざ:'za',じ:'ji',ず:'zu',ぜ:'ze',ぞ:'zo',だ:'da',ぢ:'ji',づ:'zu',で:'de',ど:'do',ば:'ba',び:'bi',ぶ:'bu',べ:'be',ぼ:'bo',ぱ:'pa',ぴ:'pi',ぷ:'pu',ぺ:'pe',ぽ:'po'};
  const combos={しゃ:'sha',しゅ:'shu',しょ:'sho',ちゃ:'cha',ちゅ:'chu',ちょ:'cho',じゃ:'ja',じゅ:'ju',じょ:'jo'};
  function kanaToRomaji(kana){
    let result='';
    for(let i=0;i<kana.length;i++){
      const c=kana[i],pair=kana.slice(i,i+2);
      if(c==='っ'){const next=combos[kana.slice(i+1,i+3)]||basic[kana[i+1]]||'';result+=next[0]||'';continue;}
      if(combos[pair]){result+=combos[pair];i++;continue;}
      if(kana[i+1]&&'ゃゅょ'.includes(kana[i+1])&&basic[c]){result+=basic[c].replace(/i$/,'')+({ゃ:'ya',ゅ:'yu',ょ:'yo'}[kana[i+1]]);i++;continue;}
      result+=basic[c]||c;
    }
    return result;
  }
  function normalize(value){return value.normalize('NFKC').trim().replace(/[\s'’.-]/g,'').toLowerCase().replace(/[\u30a1-\u30f6]/g,c=>String.fromCharCode(c.charCodeAt(0)-0x60));}
  function answerForms(example){const romaji=kanaToRomaji(example[1]);return [example[1],romaji,romaji.replaceAll('you','yo'),romaji.replaceAll('ou','o'),romaji.replaceAll('uu','u')].map(normalize);}
  function renderAnswer(type,example){
    const box=document.createElement('div');box.className='kanji-answer-box';
    const title=document.createElement('h3');title.textContent=`Âm ${type==='on'?'On':'Kun'}`;
    const word=document.createElement('div');word.className='kanji-word';word.textContent=example[0];
    const sub=document.createElement('div');sub.className='muted';sub.textContent=example[2];
    const input=document.createElement('input');input.className='kanji-input';input.id=`kanji-input-${type}`;input.autocomplete='off';input.spellcheck=false;input.placeholder='Romaji / Hiragana / Katakana';
    const status=document.createElement('div');status.className='kanji-field-status';status.id=`kanji-status-${type}`;
    input.addEventListener('input',event=>{input.classList.remove('wrong');if(!event.isComposing)checkInput(type);});
    input.addEventListener('compositionend',()=>checkInput(type));
    input.addEventListener('focus',()=>{lastFocusedType=type;});
    input.addEventListener('keydown',event=>{if(event.key==='Tab'&&current?.on&&current?.kun){event.preventDefault();const other=type==='on'?'kun':'on';$(`kanji-input-${other}`).focus();}});
    box.append(title,word,sub,input,status);return box;
  }
  function nextCard(){
    clearTimeout(advanceTimer);locked=false;revealedFields.clear();fieldDone={on:false,kun:false};
    if(!queue.length){
      if(roundMistakes.size){queue=shuffle([...roundMistakes.values()]);roundMistakes.clear();roundFailed.clear();roundNumber++;}
      else {finishTest();return;}
    }
    current=queue[0];
    $('kanji-test-char').textContent=current.char;$('kanji-test-meaning').textContent=current.meaning;
    $('kanji-test-count').textContent=`Vòng ${roundNumber}`;
    $('kanji-test-stats').textContent=`${queue.length} chữ còn trong vòng · ${firstTryCorrect.size}/${sessionSize} đúng ngay lần đầu`;
    $('kanji-progress-fill').style.width=`${(1-queue.length/sessionSize)*100}%`;
    const grid=$('kanji-answer-grid');grid.replaceChildren();
    if(current.on)grid.appendChild(renderAnswer('on',current.on));
    if(current.kun)grid.appendChild(renderAnswer('kun',current.kun));
    grid.style.gridTemplateColumns=current.on&&current.kun?'':'1fr';
    $('kanji-test-feedback').textContent='Gõ đúng sẽ tự chấm. Tab đổi ô. Enter chỉ hiện đáp án ô đang nhập; Enter lại ở ô đó để qua chữ khác.';
    $('kanji-show-answer').textContent='Hiện đáp án ô này (Enter)';
    lastFocusedType=current.on?'on':'kun';
    $(`kanji-input-${lastFocusedType}`).focus();
  }
  function markFailed(){
    const k=key(current);roundFailed.add(k);roundMistakes.set(k,current);
    if(!sessionResults.has(k)){sessionResults.set(k,{failed:true});progress[k]={lesson:current.lesson,streak:0,remaining:0};save();}
  }
  function checkInput(type){
    if(!current||locked||fieldDone[type])return;
    const example=current[type],input=$(`kanji-input-${type}`),value=normalize(input.value);
    if(!value)return;
    const forms=answerForms(example);
    if(!forms.includes(value)){
      if(value.length>Math.max(...forms.map(x=>x.length))){markFailed();input.classList.add('wrong');$(`kanji-status-${type}`).textContent='Chưa đúng. Nhập lại ô này.';input.select();}
      return;
    }
    fieldDone[type]=true;input.disabled=true;input.classList.add('right');
    $(`kanji-status-${type}`).textContent='Đúng ✓';
    if((!current.on||fieldDone.on)&&(!current.kun||fieldDone.kun))completeCard();
    else {const other=type==='on'?'kun':'on';$(`kanji-input-${other}`).focus();}
  }
  function completeCard(){
    if(locked)return;locked=true;
    const k=key(current);
    if(!sessionResults.has(k)){
      const old=record(current),streak=(Number(old.streak)||0)+1;
      progress[k]={lesson:current.lesson,streak,remaining:streak>=2?3:0};
      sessionResults.set(k,{failed:false});firstTryCorrect.add(k);save();
    }
    queue.shift();$('kanji-test-feedback').textContent='Đúng cả hai phần cần học. Sang chữ tiếp theo…';
    advanceTimer=setTimeout(nextCard,550);
  }
  function activeAnswerType(){
    const focused=document.activeElement?.id?.match(/^kanji-input-(on|kun)$/)?.[1];
    const preferred=focused||lastFocusedType;
    if(current?.[preferred]&&!fieldDone[preferred])return preferred;
    return ['on','kun'].find(type=>current?.[type]&&!fieldDone[type])||preferred;
  }
  function revealAnswer(type=activeAnswerType()){
    if(!current||locked)return;
    if(!current[type]||fieldDone[type])return;
    markFailed();revealedFields.add(type);lastFocusedType=type;
    const example=current[type];
    $(`kanji-status-${type}`).textContent=`Đáp án: ${example[1]} · ${kanaToRomaji(example[1])}`;
    $('kanji-test-feedback').textContent=`Đã hiện âm ${type==='on'?'On':'Kun'}. Ô kia vẫn ẩn; ông vẫn có thể nhập tiếp.`;
    $('kanji-show-answer').textContent='Qua chữ khác (Enter)';
    $(`kanji-input-${type}`).focus();
  }
  function skipCard(){
    if(!current||locked)return;
    markFailed();
    if(queue.length<2){$('kanji-test-feedback').textContent='Chỉ còn chữ này. Hãy nhập đúng để hoàn thành vòng.';const type=['on','kun'].find(t=>current[t]&&!fieldDone[t]);if(type)$(`kanji-input-${type}`).focus();return;}
    queue.push(queue.shift());nextCard();
  }
  function finishTest(){
    current=null;locked=true;
    Object.entries(progress).forEach(([k,r])=>{if(sessionLessons.has(r.lesson)&&r.remaining>0&&!sessionResults.has(k))r.remaining--;});
    save();renderLessons();
    $('kanji-test-active').style.display='none';
    const box=$('kanji-result');box.replaceChildren();box.style.display='block';
    const title=document.createElement('h2');title.textContent='Hoàn thành lượt kiểm tra Kanji 🌸';
    const info=document.createElement('p');info.textContent=`${firstTryCorrect.size}/${sessionSize} chữ đúng ngay lần đầu. Tất cả chữ sai đã được ôn lại đến khi đúng.`;
    const back=document.createElement('button');back.className='kanji-btn primary';back.textContent='Chọn bài / lượt mới';back.addEventListener('click',()=>show('kanji-select-view'));
    box.append(title,info,back);
  }
  $('card-kanji').addEventListener('click',()=>{renderLessons();show('kanji-select-view');});
  $('kanji-home').addEventListener('click',()=>show('mode-select-view'));
  $('kanji-select-all').addEventListener('click',()=>{KANJI_FIRST_FIVE.forEach(lesson=>selected.add(lesson.id));renderLessons();});
  $('kanji-clear').addEventListener('click',()=>{selected.clear();renderLessons();});
  $('kanji-reset-all').addEventListener('click',()=>{if(confirm('Reset tiến độ của cả 5 Unit Kanji?')){progress={};save();renderLessons();}});
  $('kanji-learn').addEventListener('click',startStudy);
  $('kanji-start').addEventListener('click',startTest);
  $('kanji-study-back').addEventListener('click',()=>show('kanji-select-view'));
  $('kanji-test-back').addEventListener('click',()=>{clearTimeout(advanceTimer);current=null;show('kanji-select-view');renderLessons();});
  $('kanji-prev').addEventListener('click',()=>{if(studyIndex>0){studyIndex--;studyRevealed=false;renderStudy();}});
  $('kanji-next').addEventListener('click',()=>{if(studyIndex<studyCards.length-1){studyIndex++;studyRevealed=false;renderStudy();}});
  $('kanji-reveal-study').addEventListener('click',()=>{studyRevealed=!studyRevealed;renderStudy();});
  $('kanji-study-to-test').addEventListener('click',startTest);
  $('kanji-show-answer').addEventListener('click',()=>{const type=activeAnswerType();if(revealedFields.has(type))skipCard();else revealAnswer(type);});
  $('kanji-skip').addEventListener('click',skipCard);
  document.addEventListener('keydown',event=>{
    if($('kanji-test-view').style.display!=='block'||$('kanji-test-active').style.display==='none'||event.key!=='Enter'||event.isComposing)return;
    event.preventDefault();const type=activeAnswerType();if(revealedFields.has(type))skipCard();else revealAnswer(type);
  });
  renderLessons();
})();
