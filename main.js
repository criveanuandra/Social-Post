/**
 * Post model
 */
class Post {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

class AddPostComponent {
  onAddPost() {
    try {
      const titleElement = document.getElementById("title");
      const descriptionElement = document.getElementById("description");
  
      this.validateForm(titleElement.value, descriptionElement.value);

      const post = new Post(titleElement.value, descriptionElement.value);

      const postDetailsComponent = new PostDetailsComponent();
      postDetailsComponent.onShowPostDetails(post);
    } catch (errorMessage) {
      document.getElementById("error-message").innerHTML = errorMessage;
    }
  }

  validateForm(title, description) {
    try {
      if (!`${title}`.length) {
        throw "Please enter a title for this post.";
      }
      if (!`${description}`.length) {
        throw "Please enter a description for this post.";
      }
    } catch (errorMessage) {
      document.getElementById("error-message").innerHTML = errorMessage;
    }
  }
}

class PostDetailsComponent {
  onShowPostDetails(post) {
    document.getElementById("post-title").innerHTML = post.title;
    document.getElementById("post-description").innerHTML = post.description;
  }
}

const onAddPost = () => {
  const addPostComponent = new AddPostComponent();
  addPostComponent.onAddPost();
}