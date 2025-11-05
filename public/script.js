const books = [
    { title: "経済学入門", price: 800, desc: "状態良好、書き込みなし" },
    { title: "プログラミング基礎", price: 1000, desc: "C言語の教科書" },
  ];
  
  const bookList = document.getElementById("bookList");
  const sellForm = document.getElementById("sellForm");
  const sellBtn = document.getElementById("sellBtn");
  const closeSellForm = document.getElementById("closeSellForm");
  const addBookBtn = document.getElementById("addBookBtn");
  
  function renderBooks(filter = "") {
    bookList.innerHTML = "";
    books
      .filter(b => b.title.includes(filter))
      .forEach(b => {
        const div = document.createElement("div");
        div.className = "book";
        div.innerHTML = `
          <h3>${b.title}</h3>
          <p>${b.desc}</p>
          <p><strong>${b.price}円</strong></p>
          <button onclick="alert('購入リクエストを送信しました')">購入</button>
        `;
        bookList.appendChild(div);
      });
  }
  renderBooks();
  
  document.getElementById("searchBtn").addEventListener("click", () => {
    const keyword = document.getElementById("searchBox").value;
    renderBooks(keyword);
  });
  
  sellBtn.addEventListener("click", () => sellForm.classList.remove("hidden"));
  closeSellForm.addEventListener("click", () => sellForm.classList.add("hidden"));
  
  addBookBtn.addEventListener("click", () => {
    const title = document.getElementById("bookTitle").value;
    const price = document.getElementById("bookPrice").value;
    const desc = document.getElementById("bookDesc").value;
    if (title && price) {
      books.push({ title, price, desc });
      renderBooks();
      sellForm.classList.add("hidden");
    } else {
      alert("教科書名と価格を入力してください");
    }
  });
  