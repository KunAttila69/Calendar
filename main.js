const calendar = document.getElementsByClassName("calendar")[0]
const d = new Date()
const currentDate = d.getDate()

const LoadCalendar=()=>{
    adventCalendar.map((data,i)=>{
        calendar.innerHTML += `<div class='window ${i+1 == currentDate ? "currentWindow' onClick='OpenWindow()'" : "'"}>${i+1}</div>`
    })
}

const OpenWindow = () =>{
    alert(adventCalendar[currentDate+1])
}
