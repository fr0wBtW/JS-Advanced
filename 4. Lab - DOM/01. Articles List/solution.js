function createArticle() {
	let title = document.createElement('h3');
	let paragraph = document.createElement('p');
	let article = document.createElement('article');

	const getTitle = document.getElementById('createTitle');
	const getContent = document.getElementById('createContent');
	const section = document.getElementById('articles');

	if (getTitle.value === "" || getContent.value === "") {
		return;
	}
	title.innerHTML = getTitle.value;
	paragraph.innerHTML = getContent.value;

	section.appendChild(article);
	article.appendChild(title);
	article.appendChild(paragraph);

	getTitle.value = '';
	getContent.value = '';
}