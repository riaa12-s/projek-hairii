function lihatPassword(){
  const pass = document.getElementById("password");
  const eye = document.getElementById("eye");
  if(pass.type === "password"){
    pass.type = "text";
    eye.innerHTML = "🙈";
  } else {
    pass.type = "password";
    eye.innerHTML = "👁";
  }
}

const akun = {
  admin: "admin",
  kasir: "kasir",
  bendahara: "bendahara",
  manajer: "manajer",
  pemilik: "pemilik"
};

document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  const user = document.getElementById("userid").value.trim().toLowerCase();
  const pass = document.getElementById("password").value;

  if(akun[user] && akun[user] === pass){
    localStorage.setItem("penggunaLogin", user);
    alert("Login Berhasil!\n\nSelamat datang " + user);
    window.location.href = "dashboard.html";
  } else {
    alert("User ID atau Password salah!");
  }
});
