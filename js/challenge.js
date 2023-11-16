document.addEventListener("DOMContentLoaded", (e) => {
  countIncrease()
});

function countIncrease() {
  // setTimeout(countIncrease, 1000)

  counter.textContent++
  timer
}



const timer = setInterval(countIncrease, 1000)
const counter = document.querySelector('#counter')
const minus = document.querySelector(`#minus`)
const plus = document.querySelector(`#plus`)
const like = document.querySelector(`#heart`)
const pause = document.querySelector(`#pause`)
const comments = document.querySelector(`h3`)
const submit = document.querySelector(`#submit`)
const commentForm = document.querySelector(`#comment-input`)


submit.addEventListener(`click`, (e) => {
  e.preventDefault()

  // comments.textContent = "test"
  comments.textContent = commentForm.value


})


plus.addEventListener(`click`, (e) => {
  counter.textContent++
})

minus.addEventListener(`click`, (e) => {
  counter.textContent--
})

//evgent listenree on heart displays number of likes for said number 
like.addEventListener(`click`, (e) => {
  like.textContent = `test`

})


pause.addEventListener(`click`, (e) => {
  clearInterval(timer)
  pause.textContent = "resume"
  plus.disabled = true
  minus.disabled = true
  like.disabled = true

  pause.classList.add("resume")
  const resume = document.querySelector(`.resume`)



  resume.addEventListener(`click`, (e) => {
    resume.textContent = "pause"
    clearInterval(timer)
    counter.textContent = 0
    timer = setInterval(countIncrease, 1000)



    plus.disabled = !true
    like.disabled = !true
    minus.disabled = !true
    pause.classList.remove("resume")





  })
})

// const remove = pause.removeEventListener(`click`, (e) => {
//   clearInterval(timer)
//   pause.textContent = "resume"
//   plus.disabled = true
//   minus.disabled = true
//   like.disabled = true

//   pause.classList.add("resume")
//   pause.classList.add("resume")
//   const resume = document.querySelector(`.resume`)
// })




// function fixPage() {
//   function countIncrease() {
//     // setTimeout(countIncrease, 1000)

//     // counter.textContent++
//     // timer


//     resume.textContent = "pause"
//     plus.disabled = !true
//     like.disabled = !true
//     minus.disabled = !true
//     pause.classList.remove("resume")
//   }
// }

// plus.addEventListener(`click`, () => plus.disabled = true)
// minus.addEventListener(`click `, () => minus.disabled = true)


