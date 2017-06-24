function Whistleblower(theWindow, theDocument) {
  theWindow.addEventListener("error", this);
  this.myWindow = theWindow;
  this.myDocument = theDocument;
}

Whistleblower.prototype
.handleEvent = function(e) {
  var errorMessage = document.createElement("p");
  errorMessage.innerHTML = e.toString();
  if(this.myDocument.body){
    this.printError(errorMessage);
  } else {
    var that = this;
    this.myWindow.addEventListener("load", function() {
      that.printError(errorMessage);
    });
  }
};

Whistleblower.prototype
.printError = function(errorMessage) {
  var body = this.myDocument.body;
  body.insertBefore(errorMessage, body.firstChild);
};