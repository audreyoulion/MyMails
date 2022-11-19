/* Interactions with Mail interface */

var mails = document.getElementsByClassName("mail");
var mailcount = document.getElementById("mailcount");
mailcount.textContent = mails.length;

var trashs = document.getElementsByClassName("trash-icon");
for (var i=0; i<trashs.length; i++) {
    trashs[i].addEventListener("click", function(){
        this.parentNode.remove();
        mailcount.textContent--;
    });
};

var mailbox = document.getElementById("container-mails");

document.getElementById("addMail").addEventListener("click", function() {
    var newMail = document.createElement("div");
    newMail.className = "row";
    mailbox.insertBefore(newMail, mailbox.firstChild);

    var avatar = document.createElement("img");
    avatar.src = "/My Mails-Assets/avatar-5.jpg";
    avatar.className = "avatar";
    newMail.appendChild(avatar);

    var mailSummary = document.createElement("div");
    mailSummary.className = "mail";
    newMail.appendChild(mailSummary);

    var sender = document.createElement("h6");
    var me = document.createTextNode("Audrey Oulion");
    sender.appendChild(me);
    sender.className = "mail-text";
    mailSummary.appendChild(sender);

    var content = document.createElement("p");
    content.textContent = document.getElementById("mail-input").value;
    content.className = "mail-text";
    mailSummary.appendChild(content);

    var trash = document.createElement("img");
    trash.src = "/My Mails-Assets/trash.png";
    trash.className = "trash-icon";
    newMail.appendChild(trash);
   
})