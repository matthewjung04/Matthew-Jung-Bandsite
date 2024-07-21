// Script File for Biography Page

// Create object containing default comments

const defaultComments = {
    users: [
        'Victor Pinto',
        'Christina Cabrera',
        'Isaac Tadesse'
    ],
    comments: [
        'This is art. This is inexplicable magic expressed in the purest way, \
        everything that makes up this majestic work deserves reverence. \
        Let us appreciate this for what it is and what it contains.',

        'I feel blessed to have seen them in person. What a show! \
        They were just perfection. If there was one day of my life I could relive, \
        this would be it. What an incredible day.',

        "I can't stop listening. Every time I hear one of their songs - the vocals - \
        it gives me goosebumps. Shivers straight down my spine. \
        What a beautiful expression of creativity. Can't get enough."
    ],
    dates: [
        '11/02/2023',
        '10/28/2023',
        '10/20/2023',
    ]
};

let defaultSection = document.querySelector('.comments--default');
// avatarImage.src = "../assets/Images/Mohan-muruge.jpg";

function addComment() {
    let newComment = document.createElement('div');
    newComment.classList.add('comments--default__box');
    defaultSection.appendChild(newComment);

    let avatarImage = document.createElement('img');
    avatarImage.classList.add('comments--default__box__image');
    newComment.appendChild(avatarImage);

    return newComment;
}

function addTextBox(newComment) {
    let commentBox = document.createElement('div');
    commentBox.classList.add('comments--default__box__text');
    newComment.appendChild(commentBox);

    return commentBox
}


for (i=0; i<defaultComments.users.length; i++) {

    newComment = addComment();
    newTextBox = addTextBox(newComment);

    let titleBox = document.createElement('h1');
    titleBox.classList.add('comments--default__box__text__head');
    newTextBox.appendChild(titleBox);

    let commentName = document.createElement('h2');
    commentName.classList.add('comments--default__box__text__head--name');
    commentName.innerText = defaultComments.users[i];
    titleBox.appendChild(commentName);

    let commentDate = document.createElement('h2');
    commentDate.classList.add('comments--default__box__text__head--date');
    commentDate.innerText = defaultComments.dates[i];
    titleBox.appendChild(commentDate);

    let commentText = document.createElement('span');
    commentText.classList.add('comments--default__box__text__desc');
    commentText.innerText = defaultComments.comments[i];
    newTextBox.appendChild(commentText);
}