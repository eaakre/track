let athletesText = document.getElementById('athletes');
let athletesDismissal = document.getElementById('athletes-dismissal');
let submitButton = document.getElementById('submit-button');



// Get athletes and text from textarea
submitButton.addEventListener('click', getAthletes)

function getAthletes() {
    let list = document.createElement('p');

    let data = []
    let athleteList = [];
    let text = athletesText.value
    let regex = text.split(/\s+/)
    for (let i=0; i<regex.length; i++) {
        data.push(regex[i])
        data.filter(function(str) {
            return /\s/.test(str);
        })
    }

    for (let i=0; i<data.length; i++) {
        if (data[i] === '-') {
            if (data[i-1] !== "Athletic.net") {
                athleteList.push(` ${data[i-2]} ${data[i-1]}`)
            }
        }
    }
    
    
    list.innerHTML = athleteList;
    athletesDismissal.appendChild(list)
}

