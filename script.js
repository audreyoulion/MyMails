/* Interactions with Mail interface */

/* Mail count */

var mails = document.getElementsByClassName("mail");
var mailcount = document.getElementById("mailcount");
mailcount.textContent = mails.length;

var trashs = document.getElementsByClassName("trash-icon");
for (var i = 0; i < trashs.length; i++) {
    trashs[i].addEventListener("click", function () {
        this.parentNode.remove();
        mailcount.textContent--;
    });
};

/* Add mail */

var mailbox = document.getElementById("container-mails");

document.getElementById("addMail").addEventListener("click", function () {
    if (document.getElementById("mail-input").value) {
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
    trash.addEventListener("click", function () {
        this.parentNode.remove();
        mailcount.textContent--;
    });

    mailcount.textContent++;
    document.getElementById("mail-input").value = "";
} else {
   alert("You need to write something before adding a new mail.")
}
})