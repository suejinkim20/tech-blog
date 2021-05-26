const postId = document.getElementById('delete-btn').value

const editFormHandler = async function(event) {
  event.preventDefault();
  const title = document.querySelector('#edit-post-title').value;
  const body = document.querySelector('#edit-post-body').value;
  
  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  alert('Post successfully edited')
  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  alert('Post successfully deleted')
  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);

document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
