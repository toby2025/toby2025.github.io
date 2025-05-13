// 取得表單並監聽送出事件
document.getElementById('message-form').addEventListener('submit', function (e) {
    e.preventDefault(); // 防止頁面重新載入
  
    const message = document.getElementById('message').value.trim(); // 取得留言內容
    const messageList = document.getElementById('message-list');
  
    // 建立新的留言元素
    const messageItem = document.createElement('div');
    messageItem.className = 'message-item';
    messageItem.innerHTML = `<p>${message}</p>`;
  
    // 將留言加入清單頂端
    messageList.prepend(messageItem);
  
    // 清空輸入欄位
    document.getElementById('message').value = '';
    }
);
  