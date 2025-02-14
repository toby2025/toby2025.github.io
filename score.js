//選手資料
const selectElement = document.getElementById('options');
const player1=document.getElementById("player1");
const player2=document.getElementById("player2");
selectElement.addEventListener('change', function() {
    const value = selectElement.value;
    player1.innerHTML="";
    player2.innerHTML="";
    console.log(value);
    if(value=="1"){
    player1.innerHTML="遐迭香";
    player2.innerHTML="太狠";
    }
    if(value=="2"){
    player1.innerHTML="巨像";
    player2.innerHTML="美式咖啡";
    }
    if(value=="3"){
    player1.innerHTML="Jfun";
    player2.innerHTML="立日音OvO";
    }
    if(value=="4"){
    player1.innerHTML="祈";
    player2.innerHTML="云";
    }
    if(value=="5"){
    player1.innerHTML="德意的旅行者";
    player2.innerHTML="RywM02";
    }
    if(value=="6"){
    player1.innerHTML="有備而來";
    player2.innerHTML="dodofk";
    }
    if(value=="7"){
    player1.innerHTML="Niechi(小两)";
    player2.innerHTML="しばケット(shibachetto)";
    }
    if(value=="8"){
    player1.innerHTML="Winsok";
    player2.innerHTML="托比";
    }
    if(value=="9"){
    player1.innerHTML="ナツホ";
    player2.innerHTML="鯖";
    }
    if(value=="10"){
    player1.innerHTML="m3";
    player2.innerHTML="草叔叔";
    }
    if(value=="11"){
    player1.innerHTML="希桐(∠·ω )⌒★";
    player2.innerHTML="Shirone";
    }
    if(value=="12"){
    player1.innerHTML="永恆重輔被狩獵分隊";
    player2.innerHTML="趨同x科學小瑪分隊";
    }
    if(value=="13"){
    player1.innerHTML="露海";
    player2.innerHTML="夕寶廚4我";
    }
    if(value=="14"){
    player1.innerHTML="藍教授";
    player2.innerHTML="雪爾森";
    }
    if(value=="15"){
    player1.innerHTML="XiaoZhi曉芝";
    player2.innerHTML="櫻芝羽";
    }
});

const first_money=document.getElementById("first_money");
const finally_money=document.getElementById("finally_money");
const money=document.getElementById("money");
first_money.addEventListener('input', calculateSum);
finally_money.addEventListener('input', calculateSum);
function calculateSum() {
    console.log("計算取錢");
    const value1 = parseFloat(first_money.value) || 0;
    const value2 = parseFloat(finally_money.value) || 0; 
    const sum = value1-value2;
    money.textContent = sum;
}

//紀錄遊戲結算分
let game_score=0;//遊戲結算
let nohole_score=0;//特殊挑戰
let totalScore = 0;//緊急分數
let black_score=0;//黑色足跡分數
let specialLevel_score=0;//特殊關卡分數
let sand_score=0;//黃沙分數
let shop_score=0;//搶劫分數
let temp_result=0;//臨時分數
let bingo_score=0;//特殊藏品分數
let hide_score=0;//隱藏坍縮分數
let hero_score=0;//英雄無名分數
let temp_hide=0;//隱藏分數
let correction_score=0;//緊急補正分數
let result_number=0;//計算比賽分數
let threeFBoss=0;

const correction=document.getElementById("correction");
correction.addEventListener('input',updateTotalScore);

function comtestscore(){
    document.getElementById("lastscore1").textContent=game_score+nohole_score+totalScore+black_score+correction_score+specialLevel_score+sand_score+shop_score+temp_result+temp_hide+bingo_score+hide_score+hero_score+result_number+threeFBoss;
    console.log("正在計算總分",game_score,nohole_score,totalScore,black_score,specialLevel_score,sand_score,shop_score,temp_result,bingo_score,hide_score,hero_score,temp_hide,correction_score,result_number+threeFBoss);
}

document.getElementById("game_score").addEventListener('input',()=>{
    game_score=parseFloat(document.getElementById("game_score").value);
    comtestscore();
})
//結局加分
const checkboxes = document.querySelectorAll('input[name="boss"]');
const result =document.getElementById("result");
result.textContent = 0;
checkboxes.forEach(checkbox=>{
    checkbox.addEventListener('change', updateResult);
});
function updateResult(){
    result_number=0;
    checkboxes.forEach(checkbox =>{
        let value3=parseFloat(checkbox.value);
        if (checkbox.checked){
            result_number+=value3;
        }
        result.textContent=result_number;
        comtestscore();
    })
}

//道中加分
const hard_score =document.getElementById("hard_score");
const block = document.getElementById("block");
hard_score.textContent=0;
// 定義每個關卡的基礎分數
const levelScores = {
    icesea:50,       // 冰海疑影的基礎分數
    true: 30,         // 弄假成真的基礎分數
    craving: 30,      // 飢渴祭壇的基礎分數
    nine: 30,         // 角獸九窟的基礎分數
    close: 30,        // 咫尺天涯的基礎分數
    fracture: 30,     // 思維折斷的基礎分數
    strength: 30,     // 恃強凌弱的基礎分數
    company: 40,      // 公司糾葛的基礎分數
    test: 40,         // 應用測試的基礎分數
    ban: 50,          // 禁區的基礎分數
    afternoon: 60,    // 坍縮體的午後的基礎分數
    big: 40,          // 大遷徙的基礎分數
    defense: 40,      // 以守代攻的基礎分數
    noise: 40,        // 雜音干擾的基礎分數
    ice: 40,          // 冰凝之所的基礎分數
    music: 60,        // 樂理之災的基礎分數
    stranger: 50,     // 生人勿近的基礎分數
    appearance: 50,   // 混亂表象的基礎分數
    enemy: 50,        // 求敵得敵的基礎分數
    dead: 80,         // 亡者行軍的基礎分數
    mount: 50,        // 何處無山海的基礎分數
    instin: 50,       // 本能汙染的基礎分數
    carnival: 90,     // 人造物狂歡節的基礎分數
    frost: 60,        // 霜與沙的基礎分數
    life: 120,         // 生靈的終點的基礎分數
};

// 獲取所有 class 為 "level" 的 input 元素
const levelInputs = document.querySelectorAll('input.level');

// 為每個 input 添加事件監聽器
levelInputs.forEach(input => {
    input.addEventListener('input', () => {
        // 每次輸入值變化時，重新計算總分
        calculateTotalScore();
    });
});

//額外計算黑色足跡
const blackLevelCheckboxes = document.querySelectorAll('input[name="black_level"]');
// 為每個 checkbox 添加事件監聽器
blackLevelCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        const target = event.target; // 觸發事件的元素
        const id = target.id; // 獲取 checkbox 的 id
        const isChecked = target.checked; // 是否被選中
        const value = parseFloat(target.value) || 0; // 獲取 checkbox 的值，若為空則默認為 0

        console.log(`Checkbox ID: ${id}, Checked: ${isChecked}, Value: ${value}`);

        // 根據 checkbox 的狀態執行相應的邏輯
        if (isChecked) {
            console.log(`Checkbox ${id} 被選中，分數增加: ${value}`);
            black_F();
            black_score=black_number*value;
        } else {
            // 如果 checkbox 被取消選中，執行相應的操作
            black_score=0;
            console.log(`Checkbox ${id} 被取消選中，分數減少: ${value}`,);
        }                   
        // 重新計算總分
        calculateTotalScore();
    });
});

//抓取黑色足跡層數
let black_number;
function black_F(){
    black_number=0;
    const blackSelect = document.getElementById('black');

    // 監聽 select 元素的變化
    blackSelect.addEventListener('change', function () {
        // 獲取當前選中的值
        const selectedValue = blackSelect.value;

        // 輸出選中的值
        console.log(`當前選中的值: ${selectedValue}`);
    });

    // 初始化時獲取一次選中的值
    const initialValue = blackSelect.value;
    black_number=5-blackSelect.value;
    console.log(`初始選中的值: ${initialValue}`);
    console.log(black_number);
}
// 計算緊急分的函數
function calculateTotalScore() {
    totalScore=0;
    // 遍歷所有輸入框
    levelInputs.forEach(input => {
        const id = input.id; // 獲取輸入框的 id
        const value = parseFloat(inputs.value) || 0; // 獲取輸入框的值，若為空則默認為 0
        const levelScore = levelScores[id] || 0; // 獲取該關卡的基礎分數

        // 計算該關卡的分數
        if(value>1){
            totalScore +=levelScore+(value-1)*20;
            console.log("新增"+totalScore+"分");
        }
        else{
        totalScore += value * levelScore;
        console.log("新增"+totalScore+"分");
        }
    });

    // 更新總分顯示
    updateTotalScore();
}

// 更新緊急分顯示的函數
function updateTotalScore() {
    console.log("計算緊急總分");
    correction_score=parseFloat(correction.value) || 0;
    console.log("緊急補正分數"+correction_score,"道中緊急分數"+totalScore,"黑色遺跡緊急"+black_score);
    document.getElementById('hard_score').textContent = totalScore+black_score+correction_score;
    comtestscore();
}

// 初始化時計算一次總分
calculateTotalScore();

//臨時加分
const temp=document.getElementById("temp");
const six_star=document.getElementById("six_star");
const five_star=document.getElementById("five_star");
const four_star=document.getElementById("four_star");
temp.textContent=0;
six_star.addEventListener('input', updateOperator);
five_star.addEventListener('input', updateOperator);
four_star.addEventListener('input', updateOperator);
function updateOperator(){
    const value4= parseFloat(six_star.value) || 0;
    const value5= parseFloat(five_star.value) || 0;
    const value6= parseFloat(four_star.value) || 0;
    temp_result=30*value4+20*value5+10*value6;
    console.log(temp_result); 
    temp.textContent=temp_result;
    comtestscore();
}

//隱藏加分
const hide =document.getElementById("special_score");
const duck =document.getElementById("duck");
const dog=document.getElementById("dog");
const bear=document.getElementById("bear");
duck.addEventListener('input',updateTemp);
dog.addEventListener('input',updateTemp);
bear.addEventListener('input',updateTemp);
function updateTemp(){
    const value7=parseFloat(duck.value) || 0;
    const value8=parseFloat(dog.value) || 0;
    const value9=parseFloat(bear.value) || 0;
    temp_hide=20*(value7+value8+value9);
    hide.textContent=temp_hide;
    comtestscore();
}

//抓取黃沙層數
let sand_number;
function sand_F(){
    sand_number=0;
    const sandSelect = document.getElementById('sand_F');

    // 監聽 select 元素的變化
    sandSelect.addEventListener('change', function () {
        // 獲取當前選中的值
        const selectedValue = sandSelect.value;

        // 輸出選中的值
        console.log(`當前選中的值: ${selectedValue}`);
    });

    // 初始化時獲取一次選中的值
    const initialValue = sandSelect.value;
    sand_number=7-blackSelect.value;
}

//計算特殊關卡加分
const specialLevelCheckboxes = document.querySelectorAll('input[name="special"]');
// 為每個 checkbox 添加事件監聽器
specialLevelCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        const target = event.target; // 觸發事件的元素
        const id = target.id; // 獲取 checkbox 的 id
        const isChecked = target.checked; // 是否被選中
        const value = parseFloat(target.value) || 0; // 獲取 checkbox 的值，若為空則默認為 0

        console.log(`Checkbox ID: ${id}, Checked: ${isChecked}, Value: ${value}`);

        // 根據 checkbox 的狀態執行相應的邏輯
        if (isChecked) {
            console.log(`Checkbox ${id} 被選中，分數增加: ${value}`);
            specialLevel_score += value;
            updateSpecialTotalScore();
        } else {
            // 如果 checkbox 被取消選中，執行相應的操作
            console.log(`Checkbox ${id} 被取消選中，分數減少: ${value}`,);
            specialLevel_score-=value;
            updateSpecialTotalScore();

        }              
    });
});
function updateSpecialTotalScore(){
    document.getElementById('special_level').textContent = specialLevel_score+sand_score+shop_score+hero_score;
    comtestscore();
}

const yellowSandCheckbox = document.getElementById('yellow_sand');
const sandFSelect = document.getElementById('sand_F');

// 定義層數對應的分數
const sandFScoreMap = {
    1: 120, // 一層的分數
    2: 100, // 二層的分數
    3: 80, // 三層的分數
    4: 60, // 四層的分數
    5: 40, // 五層的分數
    6: 20  // 六層的分數
};

// 監聽 checkbox 的變化
yellowSandCheckbox.addEventListener('change', () => {
    // 重新計算分數
    calculateYellowSandScore();
});

// 監聽 select 的變化
sandFSelect.addEventListener('change', () => {
    // 如果 checkbox 被選中，重新計算分數
    if (yellowSandCheckbox.checked) {
        calculateYellowSandScore();
    }
});

// 計算黃沙幻境的分數
function calculateYellowSandScore() {
    const selectedLayer = sandFSelect.value; // 獲取選中的層數
    const isChecked = yellowSandCheckbox.checked; // 獲取 checkbox 的狀態

    if (isChecked && selectedLayer !== '0') {
        // 如果 checkbox 被選中且層數不為 0，計算分數
        sand_score = sandFScoreMap[selectedLayer] || 0;
        console.log("黃沙分數"+sand_score);
        updateSpecialTotalScore();
    }else if(selectedLayer!=='0'){
        sand_score=0;
        updateSpecialTotalScore();
    }
}

const natureCheckbox = document.getElementById('nature');
const shopFSelect = document.getElementById('shop_F');

// 定義層數對應的分數
const shopFScoreMap = {
    4: 150, // 四層的分數
    5: 100, // 五層的分數
    6: 20, // 六層的分數
    7: 50, // 七層的分數
};

// 監聽 checkbox 的變化
natureCheckbox.addEventListener('change', () => {
    // 重新計算分數
    calculatenatureScore();
});

// 監聽 select 的變化
shopFSelect.addEventListener('change', () => {
    // 如果 checkbox 被選中，重新計算分數
    if (natureCheckbox.checked) {
        calculatenatureScore();
    }
});

// 計算搶劫商店的分數
function calculatenatureScore() {
    const selectedLayer = shopFSelect.value; // 獲取選中的層數
    const isChecked = natureCheckbox.checked; // 獲取 checkbox 的狀態

    if (isChecked && selectedLayer !== '0') {
        // 如果 checkbox 被選中且層數不為 0，計算分數
        shop_score = shopFScoreMap[selectedLayer] || 0;
        console.log("商店分數"+shop_score);
        updateSpecialTotalScore();
    }else if(selectedLayer!=='0'){
        shop_score=0;
        updateSpecialTotalScore();
    }
}

//計算英雄無名分數
const heroCheckbox = document.getElementById('hero');
const herokillSelect = document.getElementById('kill_hero');

// 監聽 checkbox 的變化
heroCheckbox.addEventListener('change', () => {
    // 重新計算分數
    calculateheroScore();
});

// 監聽 select 的變化
herokillSelect.addEventListener('change', () => {
    // 如果 checkbox 被選中，重新計算分數
    if (heroCheckbox.checked) {
        calculateheroScore();
    }
});

// 計算英雄無名的分數
function calculateheroScore() {
    const num = parseFloat(herokillSelect.value); // 獲取選中的數量
    const isChecked = heroCheckbox.checked; // 獲取 checkbox 的狀態

    if (isChecked) {
        hero_score=(1+num)*20;
        console.log(hard_score);
        updateSpecialTotalScore();
    }else{
        hero_score=0;
        updateSpecialTotalScore();
    }
}

//計算藏品bingo分數
const bingoCheckboxes = document.querySelectorAll('input[name="collection"]');
// 為每個 checkbox 添加事件監聽器
bingoCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        const target = event.target; // 觸發事件的元素
        const id = target.id; // 獲取 checkbox 的 id
        const isChecked = target.checked; // 是否被選中
        const value = parseFloat(target.value) || 0; // 獲取 checkbox 的值，若為空則默認為 0

        console.log(`Checkbox ID: ${id}, Checked: ${isChecked}, Value: ${value}`);

        // 根據 checkbox 的狀態執行相應的邏輯
        if (isChecked) {
            console.log(`Checkbox ${id} 被選中，分數增加: ${value}`);
            bingo_score += value;
            updatebingoScore();
        } else {
            // 如果 checkbox 被取消選中，執行相應的操作
            console.log(`Checkbox ${id} 被取消選中，分數減少: ${value}`,);
            bingo_score-=value;
            updatebingoScore();

        }              
    });
});
function updatebingoScore(){
    document.getElementById('bingo').textContent = bingo_score;
    comtestscore();
}

//計算特別挑戰
const holecheckbox = document.getElementById("no_hole");
const special_hole = document.getElementById("special_hole");
holecheckbox.addEventListener('change',()=>{
    const isChecked=holecheckbox.checked;
    const value=parseFloat(holecheckbox.value);
    if(isChecked){
        nohole_score+=value;
        special_hole.textContent=nohole_score;
        comtestscore();
    }else{
        nohole_score=0;
        special_hole.textContent=nohole_score;
        comtestscore();
    }
})

//計算隱藏坍縮分數
const collapseCheckboxes = document.querySelectorAll('input[name="collapse"]');
// 為每個 checkbox 添加事件監聽器
collapseCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        const target = event.target; // 觸發事件的元素
        const id = target.id; // 獲取 checkbox 的 id
        const isChecked = target.checked; // 是否被選中
        const value = parseFloat(target.value) || 0; // 獲取 checkbox 的值，若為空則默認為 0

        console.log(`Checkbox ID: ${id}, Checked: ${isChecked}, Value: ${value}`);

        // 根據 checkbox 的狀態執行相應的邏輯
        if (isChecked) {
            console.log(`Checkbox ${id} 被選中，分數增加: ${value}`);
            hide_score+=value;
            updatecollapseScore();
        } else {
            // 如果 checkbox 被取消選中，執行相應的操作
            console.log(`Checkbox ${id} 被取消選中，分數減少: ${value}`,);
            hide_score-=value;
            updatecollapseScore();

        }              
    });
});
function updatecollapseScore(){
    document.getElementById("hide_collapse").textContent=hide_score;
    comtestscore();
}

//計算異格三層boss三層boss加分
const threeFBossCheckboxes = document.querySelectorAll('input[name="3fboss"]');
// 為每個 checkbox 添加事件監聽器
threeFBossCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        const target = event.target; // 觸發事件的元素
        const id = target.id; // 獲取 checkbox 的 id
        const isChecked = target.checked; // 是否被選中
        const value = parseFloat(target.value) || 0; // 獲取 checkbox 的值，若為空則默認為 0

        console.log(`Checkbox ID: ${id}, Checked: ${isChecked}, Value: ${value}`);

        // 根據 checkbox 的狀態執行相應的邏輯
        if (isChecked) {
            console.log(`Checkbox ${id} 被選中，分數增加: ${value}`);
            threeFBoss += value;
            updatethreeFBossTotalScore();
        } else {
            // 如果 checkbox 被取消選中，執行相應的操作
            console.log(`Checkbox ${id} 被取消選中，分數減少: ${value}`,);
            threeFBoss-=value;
            updatethreeFBossTotalScore();

        }              
    });
});
function updatethreeFBossTotalScore(){
    document.getElementById('3FBoss').textContent = threeFBoss;
    comtestscore();
}
