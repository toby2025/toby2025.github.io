let testdeta=[
        {
            rank: 1,
            name: "台積電",
            code: "2330",
            people: "46388",
            value: "42120304"
        },
        {
            rank: 2,
            name: "鴻海",
            code: "2317",
            people: "38217",
            value: "30125890"
        },
        {
            rank: 3,
            name: "聯發科",
            code: "2454",
            people: "21870",
            value: "19740123"
        },
        {
            rank: 4,
            name: "中華電信",
            code: "2412",
            people: "28900",
            value: "15023000"
        },
        {
            rank: 5,
            name: "台達電",
            code: "2308",
            people: "17560",
            value: "13456000"
        },
        {
            rank: 6,
            name: "國泰金",
            code: "2882",
            people: "25412",
            value: "12100450"
        },
        {
            rank: 7,
            name: "富邦金",
            code: "2881",
            people: "23110",
            value: "11987020"
        },
        {
            rank: 8,
            name: "大立光",
            code: "3008",
            people: "14230",
            value: "11230300"
        },
        {
            rank: 9,
            name: "統一超",
            code: "2912",
            people: "18900",
            value: "10672000"
        },
        {
            rank: 10,
            name: "長榮",
            code: "2603",
            people: "34500",
            value: "10398000"
        }
]
const tablebody=document.getElementById("tablebody");//讀取html的表格
testdeta.forEach(stock => {
    // 建立一個新的表格列元素
    const row = document.createElement('tr');
  
    // 插入欄位資料，使用 innerHTML 組合每個 <td>
    row.innerHTML = `
      <td>${stock.rank}</td>
      <td>${stock.name}</td>
      <td>${stock.code}</td>
      <td>${parseInt(stock.people).toLocaleString()}</td>
      <td>$${parseInt(stock.value).toLocaleString()}</td>
    `;
  
    // 將這一列加入到表格中
    tablebody.appendChild(row);
  });