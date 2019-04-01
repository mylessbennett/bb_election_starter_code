document.addEventListener("DOMContentLoaded", function() {
    const request = axios.get('https://bb-election-api.herokuapp.com/')
    .then(function(response) {
            response.data.candidates.forEach(function(candidate) {
            const listItem = document.createElement('li')
            listItem.innerText = `Candidate: ${candidate.name} \n Votes: ${candidate.votes}`
            candidatesList = document.querySelector('.candidates')
            candidatesList.appendChild(listItem)
        })
    })
});