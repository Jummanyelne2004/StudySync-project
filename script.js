
const menuBtn = document.querySelector('.menu-button');
const hamburgeNav = document.querySelector('.hamburge-nav');

menuBtn.addEventListener("click", () => {
    console.log("clicked")
    hamburgeNav.classList.toggle("show")
})


const themeBtn = document.getElementById('themeBtn');
const navLinks = document.querySelectorAll('.nav_link');

themeBtn.addEventListener("click", () => {
    console.log("clicked")
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        themeBtn.textContent = "light_mode";
        navLinks.forEach(link => {
            link.style.color = "lightgoldenrodyellow";
        });
        qouteElement.classList.add("mode");
    }else{
        themeBtn.textContent = "dark_mode";
        navLinks.forEach(link => {
            link.style.color = "var(--link-color)";
        });
        qouteElement.classList.remove("mode");
    }
})


// const navLinks = document.querySelectorAll('.nav_link');
console.log(navLinks)
navLinks.forEach( link => {
    link.addEventListener("click", () => {
        hamburgeNav.classList.remove("show");
    })
})


const testimonials = [
  {
    name: "Sarah Johnson",
    role: "8th Grade English Teacher",
    review: "StudySync revolutionized my classroom!",
    image: "./assets/testimonial image 1.jpg"
  },

  {
    name: "Mark Davis",
    role: "Parent",
    review: "StudySync transformed our family's learning journey.",
    image: "./assets/testimonial image 2.jpg"
  },

  {
    name: "Dr. James Carter",
    role: "School Administrator",
    review: "A true game-changer for our school district.",
    image: "./assets/testimonial image 3.jpg"
  },

  {
    name: "Dr. James Johnson",
    role: "School Director",
    review: "StudySync revolutionized my classroom! Engaging content and teacher resources make learning enjoyable.",
    image: "./assets/testimonial image 2.jpg"
  }
];

let currentIndex = 0;

const review = document.getElementById("review");
const profileImg = document.getElementById("profileImg");
const name = document.getElementById("name");
const role = document.getElementById("role");

function showTestimonial(index) {
    review.textContent = testimonials[index].review;
    profileImg.src = testimonials[index].image;
    name.textContent = testimonials[index].name;
    role.textContent = testimonials[index].role;
}

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex++;
    if(currentIndex >= testimonials.length){
        currentIndex = 0;
    }
    showTestimonial(currentIndex);
    updateDots();
})

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex--;
    // console.log(currentIndex)
    // console.log(testimonials.length)
    if(currentIndex < 0){
        currentIndex = testimonials.length-1;
    }
    showTestimonial(currentIndex);
    updateDots();
})

function createDots () {
    const dotsContainer = document.querySelector(".dots-container");
    for(let i=0; i<testimonials.length; i++){
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dotsContainer.appendChild(dot);
        dot.addEventListener("click", () => {
            currentIndex = i;
            console.log(currentIndex)
            showTestimonial(currentIndex); 
            updateDots();
        })
    }
    updateDots()
}


function updateDots () {
    const currDot = document.querySelectorAll('.dot');
    currDot.forEach(dot => {
        dot.classList.remove("active");
    })
    currDot[currentIndex].classList.add("active");
}

createDots();
showTestimonial(currentIndex);
updateDots();



const faqQues = document.querySelectorAll('.faq-question');
const faqAns = document.querySelectorAll('.faq-answer');

faqQues.forEach(question => {
    question.addEventListener("click", () => {
        const currAnswer = question.nextElementSibling;
        
        faqAns.forEach(answer => {
            if(answer != currAnswer){
                answer.classList.remove("answer-visible");
            }
        })

        currAnswer.classList.toggle("answer-visible");
    })
})

const qouteElement = document.getElementById("qoute");

async function qoutesAPI () {
   let data = await fetch("https://motivational-spark-api.vercel.app/api/quotes").then(response => response.json());
   console.log(data)
   data.forEach(() => {
    qouteElement.textContent = `"${data[Math.floor(Math.random() * data.length)].quote}"`;
   })
}

qoutesAPI();