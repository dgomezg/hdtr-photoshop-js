var getDocumentDimensions = function(document) {
	return { "height" : document.height,
			 "width" : document.width,
			 "resolution" : document.resolution}
}

var getImageFileDimensions = function(file) {
	var imageDocument = app.open(file);
	var documentDimensions = getDocumentDimensions(imageDocument);
	imageDocument.close();
	return documentDimensions;
}