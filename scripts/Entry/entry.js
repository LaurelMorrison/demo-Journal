export const Post = (postObject) => {
    return `
      <section class="post">
        <div class="headline">
            <h3 class="postTitle">${postObject.Topic}</h3>
        </div>
        <img class="postImage" src="${postObject.Image}" />
        <p>Date: ${postObject.Date}</p>
        <p class="entry">Entry: ${postObject.Entry}</p>
        <p>Mood: ${postObject.Mood}</p>

      </section>
    `}