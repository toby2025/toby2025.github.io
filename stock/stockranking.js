async function getPopularStocks() {
  try {
    // 使用 fetch 發送 POST 請求到 API 伺服器
    const response = await fetch('http://122.116.37.103:7777/api/getPopularStockByUserCount', {
      method: 'POST', // 指定使用 POST 方法
      headers: {
        'Content-Type': 'application/json' // 告訴伺服器請求內容是 JSON 格式
      },
      body: JSON.stringify({}) // 雖然不需實際傳資料，但仍要傳送一個空的 JSON 物件
    });

    // 檢查 HTTP 回應狀態碼是否正常（200~299 都是成功）
    if (!response.ok) {
      // 如果不是成功狀態碼，丟出錯誤讓 catch 區塊處理
      throw new Error(`HTTP 錯誤！狀態碼：${response.status}`);
    }

    // 解析伺服器回傳的 JSON 資料
    const result = await response.json();

    // 將資料輸出到主控台，供開發者查看
    console.log('熱門股票資料：', result);
    let stockList=result.data;
    stockList.forEach((stock, index) => {
        const tablebody=document.getElementById("tablebody");//讀取html的表格
        const row = document.createElement('tr');

        // 插入欄位資料，使用 innerHTML 組合每個 <td>
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${stock.stock_code}</td>
        <td>${stock.stock_name}</td>
        <td>${stock.transaction_count}</td>
        `;

        // 將這一列加入到表格中
        tablebody.appendChild(row);
    });

  } catch (error) {
    // 當發生錯誤時（例如網路錯誤、JSON 解析錯誤），輸出錯誤訊息
    console.error('取得熱門股票資料時發生錯誤：', error);
  }
}
getPopularStocks();
