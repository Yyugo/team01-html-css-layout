const form = document.getElementById('comment-form');
const commentsList = document.getElementById('comments-list');

form.addEventListener('submit', mDown)


function mDown(event) {
	event.preventDefault();
	const commentData = getCommentData();
	console.log('commentData', commentData);
	addCommentToList(commentData);
	
}


const getCommentData = (myDown) => ({
	name: document.getElementById('name').value,
	number: document.getElementById('number').value,
	email: document.getElementById('email').value,
	message: document.getElementById('message').value
});

const addCommentToList =(comment) => {
	const liNode = document.createElement('li');
	const textNode = document.createTextNode(`Name: ${comment.name},  Message: ${comment.message}`);
	liNode.appendChild(textNode);
	commentsList.appendChild(liNode);
}


