function getHeight() {
	var element = document.getElementById("iframe");

	var content = (element.contentWindow || element.contentDocument);
	if (content.document)content = content.document;

	var height = content.body.height;

	console.log(height);
}