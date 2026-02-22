// 1. 데이터 창고
const database = {
    // [유튜브] Stage 부문
    stage: [
        { title: "0918 FaSHioN", youtubeId: "A7CRAA9Ztkw" },
        { title: "0824 GO!", youtubeId: "2Li7-6iraJE" },
        { title: "0914 FaSHioN", youtubeId: "dLjDFgnKBQ8" },
        { title: "VoiceCam360˚", youtubeId: "MaP3KOq-VmY" }, 
        { title: "0823 GO!", youtubeId: "PNUvvqzTE-M" },
        { title: "0824 GO!", youtubeId: "487T4rqSxD8" },
        { title: "0927 GO!", youtubeId: "RbjnCt7JxhI" }, 
        { title: "0821 What You Want", youtubeId: "6sQfozHZZBM" },
        { title: "0828 What You Want", youtubeId: "gnnnAXnkUOY" },
        { title: "0823 What You Want", youtubeId: "MbSbXhh7nkA" }, 
        { title: "0824 What You Want", youtubeId: "RRmQ-P8Rg6Y" },
        { title: "0911 FaSHioN", youtubeId: "S4CxollWr3o" },
        { title: "0913 FaSHioN", youtubeId: "MJ9aBIyHLow" },
        { title: "0920 FaSHioN", youtubeId: "NkMx_ogkWTc" }, 
        { title: "1231 Deja Vu+FaSHioN ", youtubeId: "4Hyx7TZ2cXg" },
        { title: "1231 Fly", youtubeId: "rQqk4OqDlvk" }
    ],

    // [사진] Dance 부문 (원래 photo였던 것을 dance로 수정함!)
    dance: [
        { title: "", imgSrc: "셀피/1.jpg" },
        { title: "", imgSrc: "셀피/2.jpg" },
       { title: "", imgSrc: "셀피/3.jpg" },
        { title: "", imgSrc: "셀피/4.jpg" },
           { title: "", imgSrc: "셀피/5.jpg" },
        { title: "", imgSrc: "셀피/6.jpg" },
       { title: "", imgSrc: "셀피/7.jpg" },
        { title: "", imgSrc: "셀피/8.jpg" },
            { title: "", imgSrc: "셀피/9.jpg" },
        { title: "", imgSrc: "셀피/10.jpg" },
          { title: "", imgSrc: "셀피/11.jpg" },
        { title: "", imgSrc: "셀피/12.jpg" },
            { title: "", imgSrc: "셀피/13.jpg" },
        { title: "", imgSrc: "셀피/14.jpg" },
          { title: "", imgSrc: "셀피/15.jpg" },
          { title: "", imgSrc: "셀피/16.jpg" },
        { title: "", imgSrc: "셀피/17.jpg" },
            { title: "", imgSrc: "셀피/18.jpg" },
        { title: "", imgSrc: "셀피/19.jpg" },
          { title: "", imgSrc: "셀피/20.jpg" },
          { title: "", imgSrc: "셀피/21.jpg" },
          { title: "", imgSrc: "셀피/22.jpg" },
        { title: "", imgSrc: "셀피/23.jpg" },
            { title: "", imgSrc: "셀피/24.jpg" },
        { title: "", imgSrc: "셀피/25.jpg" },
            { title: "", imgSrc: "셀피/26.jpg" },
          { title: "", imgSrc: "셀피/27.jpg" },
          { title: "", imgSrc: "셀피/28.jpg" },
        { title: "", imgSrc: "셀피/29.jpg" },
            { title: "", imgSrc: "셀피/30.jpg" },
        { title: "", imgSrc: "셀피/31.jpg" },
              { title: "", imgSrc: "셀피/32.jpg" },
        { title: "", imgSrc: "셀피/33.jpg" },
            { title: "", imgSrc: "셀피/34.jpg" },
        { title: "", imgSrc: "셀피/35.jpg" },
              { title: "", imgSrc: "셀피/36.jpg" },
            { title: "", imgSrc: "셀피/37.jpg" },
        { title: "", imgSrc: "셀피/38.jpg" },
                 { title: "", imgSrc: "셀피/39.jpg" },
        { title: "", imgSrc: "셀피/40.jpg" },
                     { title: "", imgSrc: "셀피/41.jpg" },
        { title: "", imgSrc: "셀피/42.jpg" },
            { title: "", imgSrc: "셀피/43.jpg" },
        { title: "", imgSrc: "셀피/44.jpg" },
              { title: "", imgSrc: "셀피/45.jpg" },
            { title: "", imgSrc: "셀피/46.jpg" },
        { title: "", imgSrc: "셀피/47.jpg" },
                 { title: "", imgSrc: "셀피/48.jpg" },
        { title: "", imgSrc: "셀피/49.jpg" },
               { title: "", imgSrc: "셀피/50.jpg" },
            { title: "", imgSrc: "셀피/51.jpg" },
        { title: "", imgSrc: "셀피/52.jpg" },
                 { title: "", imgSrc: "셀피/53.jpg" },
        { title: "", imgSrc: "셀피/54.jpg" },
           { title: "", imgSrc: "셀피/55.jpg" },
               { title: "", imgSrc: "셀피/56.jpg" },
            { title: "", imgSrc: "셀피/57.jpg" },
        { title: "", imgSrc: "셀피/58.jpg" },
                 { title: "", imgSrc: "셀피/59.jpg" },
        { title: "", imgSrc: "셀피/60.jpg" },
              { title: "", imgSrc: "셀피/61.jpg" },
        { title: "", imgSrc: "셀피/62.jpg" },
                 { title: "", imgSrc: "셀피/63.jpg" },
        { title: "", imgSrc: "셀피/64.jpg" },
    ],

    // [사진] Past 부문
    past: [
   { title: "", imgSrc: "과사/001.jpg" },
        { title: "", imgSrc: "과사/002.jpg" },
        { title: "", imgSrc: "과사/003.jpg" },
        { title: "", imgSrc: "과사/004.jpg" },
        { title: "", imgSrc: "과사/005.jpg" },
        { title: "", imgSrc: "과사/006.jpg" },
       { title: "", imgSrc: "과사/007.jpg" },
        { title: "", imgSrc: "과사/008.jpg" },
        { title: "", imgSrc: "과사/009.jpg" },
        { title: "", imgSrc: "과사/010.jpg" },
        { title: "", imgSrc: "과사/011.jpg" },
        { title: "", imgSrc: "과사/012.jpg" },
        { title: "", imgSrc: "과사/013.jpg" },
        { title: "", imgSrc: "과사/014.jpg" },
        { title: "", imgSrc: "과사/015.jpg" },
        { title: "", imgSrc: "과사/016.jpg" },
        { title: "", imgSrc: "과사/017.jpg" },
        { title: "", imgSrc: "과사/018.jpg" },
        { title: "", imgSrc: "과사/019.jpg" },
        { title: "", imgSrc: "과사/020.jpg" },
        { title: "", imgSrc: "과사/021.jpg" },
        { title: "", imgSrc: "과사/022.jpg" },
        { title: "", imgSrc: "과사/023.jpg" },
        { title: "", imgSrc: "과사/024.jpg" },
        { title: "", imgSrc: "과사/025.jpg" },
        { title: "", imgSrc: "과사/026.jpg" },
        { title: "", imgSrc: "과사/027.jpg" },
        { title: "", imgSrc: "과사/028.jpg" },
        { title: "", imgSrc: "과사/029.jpg" },
        { title: "", imgSrc: "과사/030.jpg" },
        { title: "", imgSrc: "과사/031.jpg" },
        { title: "", imgSrc: "과사/032.jpg" },
        { title: "", imgSrc: "과사/033.jpg" },
        { title: "", imgSrc: "과사/034.jpg" },
        { title: "", imgSrc: "과사/035.jpg" },
        { title: "", imgSrc: "과사/036.jpg" },
        { title: "", imgSrc: "과사/037.jpg" },
        { title: "", imgSrc: "과사/038.jpg" },
        { title: "", imgSrc: "과사/039.jpg" },
        { title: "", imgSrc: "과사/040.jpg" },
        { title: "", imgSrc: "과사/041.jpg" },
        { title: "", imgSrc: "과사/042.jpg" },
        { title: "", imgSrc: "과사/043.jpg" },
        { title: "", imgSrc: "과사/044.jpg" },
        { title: "", imgSrc: "과사/045.jpg" },
        { title: "", imgSrc: "과사/046.jpg" },
        { title: "", imgSrc: "과사/047.jpg" },
        { title: "", imgSrc: "과사/048.jpg" },
        { title: "", imgSrc: "과사/049.jpg" },
        { title: "", imgSrc: "과사/050.jpg" },
        { title: "", imgSrc: "과사/051.jpg" },
        { title: "", imgSrc: "과사/052.jpg" },
        { title: "", imgSrc: "과사/053.jpg" },
        { title: "", imgSrc: "과사/054.jpg" },
        { title: "", imgSrc: "과사/055.jpg" },
        { title: "", imgSrc: "과사/056.jpg" },
        { title: "", imgSrc: "과사/057.jpg" },
        { title: "", imgSrc: "과사/058.jpg" },
        { title: "", imgSrc: "과사/059.jpg" },
        { title: "", imgSrc: "과사/060.jpg" },
        { title: "", imgSrc: "과사/061.jpg" },
        { title: "", imgSrc: "과사/062.jpg" },
        { title: "", imgSrc: "과사/063.jpg" },
        { title: "", imgSrc: "과사/064.jpg" },
        { title: "", imgSrc: "과사/065.jpg" },
        { title: "", imgSrc: "과사/066.jpg" },
        { title: "", imgSrc: "과사/067.jpg" },
        { title: "", imgSrc: "과사/068.jpg" },
        { title: "", imgSrc: "과사/069.jpg" },     
        { title: "", imgSrc: "과사/070.jpg" },
        { title: "", imgSrc: "과사/071.jpg" },
        { title: "", imgSrc: "과사/072.jpg" },
        { title: "", imgSrc: "과사/073.jpg" },
        { title: "", imgSrc: "과사/074.jpg" },
        { title: "", imgSrc: "과사/075.jpg" },
        { title: "", imgSrc: "과사/076.jpg" },
        { title: "", imgSrc: "과사/077.jpg" },
        { title: "", imgSrc: "과사/078.jpg" },
        { title: "", imgSrc: "과사/079.jpg" },   
        { title: "", imgSrc: "과사/080.jpg" },
        { title: "", imgSrc: "과사/081.jpg" },
        { title: "", imgSrc: "과사/082.jpg" },
        { title: "", imgSrc: "과사/083.jpg" },
        { title: "", imgSrc: "과사/084.jpg" },
        { title: "", imgSrc: "과사/085.jpg" },
        { title: "", imgSrc: "과사/086.jpg" },
        { title: "", imgSrc: "과사/087.jpg" },
        { title: "", imgSrc: "과사/088.jpg" },
        { title: "", imgSrc: "과사/089.jpg" },       
        { title: "", imgSrc: "과사/090.jpg" },
        { title: "", imgSrc: "과사/091.jpg" },
        { title: "", imgSrc: "과사/092.jpg" },
        { title: "", imgSrc: "과사/093.jpg" },
        { title: "", imgSrc: "과사/094.jpg" },
        { title: "", imgSrc: "과사/095.jpg" },
        { title: "", imgSrc: "과사/096.jpg" },
        { title: "", imgSrc: "과사/097.jpg" },
        { title: "", imgSrc: "과사/098.jpg" },
        { title: "", imgSrc: "과사/099.jpg" }, 
        { title: "", imgSrc: "과사/100.jpg" },
        { title: "", imgSrc: "과사/101.jpg" },
        { title: "", imgSrc: "과사/102.jpg" },
        { title: "", imgSrc: "과사/103.jpg" },
        { title: "", imgSrc: "과사/104.jpg" },
        { title: "", imgSrc: "과사/105.jpg" },
        { title: "", imgSrc: "과사/106.jpg" },
        { title: "", imgSrc: "과사/107.jpg" },
        { title: "", imgSrc: "과사/108.jpg" },
        { title: "", imgSrc: "과사/109.jpg" },     
        { title: "", imgSrc: "과사/110.jpg" },
        { title: "", imgSrc: "과사/111.jpg" },
        { title: "", imgSrc: "과사/112.jpg" },
        { title: "", imgSrc: "과사/113.jpg" },
        { title: "", imgSrc: "과사/114.jpg" },
        { title: "", imgSrc: "과사/115.jpg" },
        { title: "", imgSrc: "과사/116.jpg" },
        { title: "", imgSrc: "과사/117.jpg" },
        { title: "", imgSrc: "과사/118.jpg" },
        { title: "", imgSrc: "과사/119.jpg" },    
        { title: "", imgSrc: "과사/120.jpg" },
        { title: "", imgSrc: "과사/121.jpg" },
        { title: "", imgSrc: "과사/122.jpg" },
        { title: "", imgSrc: "과사/123.jpg" },
        { title: "", imgSrc: "과사/124.jpg" },
        { title: "", imgSrc: "과사/125.jpg" },
        { title: "", imgSrc: "과사/126.jpg" },
        { title: "", imgSrc: "과사/127.jpg" },
        { title: "", imgSrc: "과사/128.jpg" }

    ]
};

// 2. 게임 설정
const urlParams = new URLSearchParams(window.location.search);
let currentList = [];
let nextRoundList = [];
let currentIndex = 0;

function initGame() {
    console.log("게임 시작 시도...");

    // 1. 주소창에서 ?type=... 값을 가져옴
    const rawType = urlParams.get('type'); 
    
    // 2. 소문자로 통일
    const gameType = rawType ? rawType.toLowerCase() : null;

    console.log("받은 타입:", gameType); 

    // 3. 데이터 가져오기
    const originalList = database[gameType];

    // 4. 에러 처리
    if (!originalList || originalList.length === 0) {
        if (gameType === null) {
            alert("오류: 게임 타입을 알 수 없습니다!\n(메인 화면에서 버튼을 눌러주세요.)");
        } else {
            alert(`오류: '${gameType}' 데이터를 찾을 수 없습니다.\ngame.js 안의 database 이름을 확인하세요.`);
        }
        return;
    }

    document.getElementById('gameTitle').innerText = gameType.toUpperCase();
    
    // 랜덤 섞기
    currentList = originalList.sort(() => Math.random() - 0.5);
    showMatch();
}

function showMatch() {
    // 우승자 결정 시
    if (currentList.length === 1) {
        localStorage.setItem('winner', JSON.stringify(currentList[0]));
        setTimeout(() => { location.href = 'result.html'; }, 300);
        return;
    }

    // UI 업데이트
    let roundText = currentList.length + "강";
    if (currentList.length === 2) roundText = "결승전";
    
    document.getElementById('roundInfo').innerText = `${roundText} (${currentIndex/2 + 1} / ${currentList.length/2})`;
    
    const percent = (currentIndex / currentList.length) * 100;
    document.getElementById('progressFill').style.width = percent + '%';

    // 카드 세팅
    setCard(1, currentList[currentIndex]);
    setCard(2, currentList[currentIndex + 1]);
}

// 카드 내용 보여주는 함수
function setCard(num, item) {
    const titleEl = document.getElementById(`title${num}`);
    const youtubeEl = document.getElementById(`video${num}`);
    const imgEl = document.getElementById(`img${num}`);
    const localVideoEl = document.getElementById(`localVideo${num}`);

    titleEl.innerText = item.title;

    // 초기화 (다 숨기기)
    youtubeEl.style.display = "none"; youtubeEl.src = "";
    imgEl.style.display = "none";
    localVideoEl.style.display = "none"; localVideoEl.pause(); localVideoEl.src = "";

    // 타입별 보여주기
    if (item.youtubeId) {
        youtubeEl.style.display = "block";
        youtubeEl.src = `https://www.youtube.com/embed/${item.youtubeId}`;
    } else if (item.imgSrc) {
        imgEl.style.display = "block";
        imgEl.src = item.imgSrc;
    } else if (item.videoSrc) {
        localVideoEl.style.display = "block";
        localVideoEl.src = item.videoSrc;
    }
}

// 승자 선택 함수
function selectWinner(winnerIndex) {
    if (winnerIndex === 0) {
        nextRoundList.push(currentList[currentIndex]);
    } else {
        nextRoundList.push(currentList[currentIndex + 1]);
    }
    
    currentIndex += 2;
    
    if (currentIndex >= currentList.length) {
        currentList = nextRoundList;
        nextRoundList = [];
        currentIndex = 0;
    }
    showMatch();
}

// 게임 시작
initGame();