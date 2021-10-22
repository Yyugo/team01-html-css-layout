function mDown(event) {
	event.preventDefault();
}


const getCommentData = (myDown) => ({
	name: document.getElementById('name').value,
	number: document.getElementById('number').value,
	email: document.getElementById('email').value,
	message: document.getElementById('message').value
});

const commentData = getCommentData();
console.log('commentData');


