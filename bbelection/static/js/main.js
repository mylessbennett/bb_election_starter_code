document.addEventListener("DOMContentLoaded", function() {
    const request = axios.get('https://bb-election-api.herokuapp.com/')
    .then(function(response) {
            response.data.candidates.forEach(function(candidate) {
                const listItem = document.createElement('li');
                listItem.innerText = `Candidate: ${candidate.name} \n Votes: ${candidate.votes}`;
                candidatesList = document.querySelector('.candidates');
                candidatesList.appendChild(listItem);
                const voteForm = document.createElement('form');
                voteForm.method = "POST";
                voteForm.action = "https://bb-election-api.herokuapp.com/vote"
                listItem.appendChild(voteForm);
                const submitButton = document.createElement('button');
                submitButton.innerText = 'Submit';
                voteForm.appendChild(submitButton);
                const hiddenInput = document.createElement('input');
                hiddenInput.type = "hidden";
                hiddenInput.name = "name";
                hiddenInput.value = candidate.name;
                voteForm.appendChild(hiddenInput);
        })
        document.addEventListener('submit', event => {
            event.preventDefault();
            axios.post('https://bb-election-api.herokuapp.com/vote/', {
                name : event.target.querySelector('input[type=hidden]').value 
            })
            .then(function(response) {
                console.log(response);
            })
        const refreshBtn = document.getElementById('refresh');
        refreshBtn.addEventListener('click', function() {
            location.reload();
        })
        })
    })
});