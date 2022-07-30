const theme = window.localStorage.getItem("theme")      /* Aqui vai colocar um item   */
const btn = document.getElementById("imgDark")           /*  essa e a açao   */
/*const refresh = document.getElementById("refresh")*/


if (theme === "dark"){                    /* Vai verificar se o tema e dark */
    document.body.classList.add("dark")
}

btn.addEventListener('click', () => {

    document.body.classList.toggle("dark")
  /*
    if (theme === 'dark'){
        window.localStorage.setItem("theme", "light")
    } else {
        window.localStorage.setItem("theme", "dark")

    } */

})
/*
refresh.addEventListener("click", () => {
    window.location.reload()
})*/