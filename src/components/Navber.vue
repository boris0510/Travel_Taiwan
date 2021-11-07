<template>
  <nav class="navbar">
    <div class="container">
      <a href="#" to="/" class="logo">
        <img src="@/assets/img/logo.png" alt="logo" />
        <h1>Travel Taiwan</h1>
      </a>
      <div class="list">
        <ul>
          <li><router-link to="/">首頁</router-link></li>
          <li><router-link to="/attractions">景點導覽</router-link></li>
          <li><router-link to="/activity">觀光活動</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.container {
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
  text-decoration: none;
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
  transition: all .3s;
}
.navbar .list ul a.active {
  font-weight: 700;
  color: #08a6bb;
}
.navbar .list ul a:hover {
  color: #08a6bb;
}
.navbar .list ul li {
  padding-right: 97px;
}
</style>
