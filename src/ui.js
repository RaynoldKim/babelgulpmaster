
let ui = {
	renderPost(posts){
		let elements = posts.map( (post) => {
			return articleTemplate;
		});

		let target = document.quertSelector(".container");
		target.innerHTML = elements.join(" ");
	}
}

let articleTemplate = `
<article class='post'>
<h2 class='post-title'>
	In hybrid moments, give me a monent
</h2>
</article>`;

export default ui;