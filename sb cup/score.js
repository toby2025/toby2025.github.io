const first_money = document.getElementById("first_money");
const finally_money = document.getElementById("finally_money");
const money = document.getElementById("money");
first_money.addEventListener('input', calculateSum);
finally_money.addEventListener('input', calculateSum);
function calculateSum() {
    console.log("計算取錢");
    const value1 = parseFloat(first_money.value) || 0;
    const value2 = parseFloat(finally_money.value) || 0;
    const sum = value1 - value2;
    money.textContent = sum;
}

//紀錄遊戲結算分
let game_score = 0;//遊戲結算
let totalScore = 0;//緊急分數
let specialLevel_score = 0;//特殊關卡分數
let temp_result = 0;//臨時分數
let temp_hide = 0;//隱藏分數
let result_number = 0;//計算比賽分數
let threeFBoss = 0;//計算三層boss

function comtestscore() {
    document.getElementById("lastscore1").textContent = game_score + totalScore + specialLevel_score + temp_result + temp_hide + result_number + threeFBoss;
    console.log("正在計算總分", game_score, totalScore, specialLevel_score, temp_result, temp_hide, result_number + threeFBoss);
}

document.getElementById("game_score").addEventListener('input', () => {
    game_score = parseFloat(document.getElementById("game_score").value);
    comtestscore();
})
//結局加分
const checkboxes = document.querySelectorAll('input[name="boss"]');
const result = document.getElementById("result");
result.textContent = 0;
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateResult);
});
function updateResult() {
    result_number = 0;
    checkboxes.forEach(checkbox => {
        let value3 = parseFloat(checkbox.value);
        if (checkbox.checked) {
            console.log("新增" + value3 + "分");
            result_number += value3;
        }
        result.textContent = result_number;
        comtestscore();
    })
}

//道中加分
const hard_score = document.getElementById("hard_score");
const block = document.getElementById("block");
hard_score.textContent = 0;
// 定義每個關卡的基礎分數
const levelScores = {
    Checkerboard: 30,    // 大棋一盤
    Grimoire: 30,        // 潰亂魔點
    ThreeFloorOther: 20, // 三層其他緊急
    Elusive: 50,         // 神出鬼沒
    Chaos: 40,           // 混沌
    FourFloorOther: 30,  // 四層其他緊急
    Army: 70,            // 建制
    FiveFloorOther: 40,  // 五層其他緊急
    Heretics: 50,        // 外道
    Paradise: 50,        // 洞天福地
    SixFloorOther: 80,   // 六層其他緊急
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

// 計算緊急分的函數
function calculateTotalScore() {
    totalScore = 0;
    // 遍歷所有輸入框
    levelInputs.forEach(input => {
        const id = input.id; // 獲取輸入框的 id
        const value = parseFloat(input.value) || 0; // 獲取輸入框的值，若為空則默認為 0
        const levelScore = levelScores[id] || 0; // 獲取該關卡的基礎分數

        // 計算該關卡的分數

        totalScore += value * levelScore;
        console.log("新增" + totalScore + "分");
    });

    // 更新總分顯示
    updateTotalScore();
}

// 更新緊急分顯示的函數
function updateTotalScore() {
    console.log("計算緊急總分");
    document.getElementById('hard_score').textContent = totalScore;
    comtestscore();
}

// 初始化時計算一次總分
calculateTotalScore();

//臨時加分
const temp = document.getElementById("temp");
const six_star = document.getElementById("six_star");
const five_star = document.getElementById("five_star");
temp.textContent = 0;
six_star.addEventListener('input', updateOperator);
five_star.addEventListener('input', updateOperator);
function updateOperator() {
    const value4 = parseFloat(six_star.value) || 0;
    const value5 = parseFloat(five_star.value) || 0;
    temp_result = 30 * value4 + 20 * value5;
    console.log(temp_result);
    temp.textContent = temp_result;
    comtestscore();
}

//隱藏加分
const hide = document.getElementById("special_score");
const duck = document.getElementById("duck");
const dog = document.getElementById("dog");
const bear = document.getElementById("bear");
duck.addEventListener('input', updateTemp);
dog.addEventListener('input', updateTemp);
bear.addEventListener('input', updateTemp);
function updateTemp() {
    const value7 = parseFloat(duck.value) || 0;
    const value8 = parseFloat(dog.value) || 0;
    const value9 = parseFloat(bear.value) || 0;
    temp_hide = 30 * (value7 + value8 + value9);
    hide.textContent = temp_hide;
    comtestscore();
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
            specialLevel_score -= value;
            updateSpecialTotalScore();

        }
    });
});
function updateSpecialTotalScore() {
    document.getElementById('special_level').textContent = specialLevel_score;
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
            threeFBoss -= value;
            updatethreeFBossTotalScore();

        }
    });
});
function updatethreeFBossTotalScore() {
    document.getElementById('3FBoss').textContent = threeFBoss;
    comtestscore();
}