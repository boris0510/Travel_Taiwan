<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="logo" />
        <h1>Travel Taiwan</h1>
      </div>
      <div class="list">
        <ul>
          <li><a href="#" class="active">首頁</a></li>
          <li><a href="#">景點導覽</a></li>
          <li><a href="#">觀光活動</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.container{
  max-width: 1440px;
}
.navbar {
  height: 80px;
  padding: 0;
}
.navbar .logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar .logo img {
  margin-left: 76px;
}
.navbar .logo h1 {
  padding-left: 20px;
  margin: 0;
  font-style: italic;
  font-weight: 900;
  font-size: 30px;
  color: #08a6bb;
}
.navbar .list ul {
  list-style: none;
  display: flex;
  margin: 0;
}
.navbar .list ul a {
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
  color: #525151;
}
.navbar .list ul a.active{
  font-weight: 700;
  color: #08a6bb;
}
.navbar .list ul a:hover {
  color: #08a6bb;
}
.navbar .list ul li{
  padding-right: 97px;
}
</style>
