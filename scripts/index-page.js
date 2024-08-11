// Script File for Biography Page

// Create object containing default comments

// Import data from WebAPI
import {comments} from './band-site-api.js';
import {fetch} from './band-site-api.js';
import {BandSiteApi} from './band-site-api.js';

let defaultSection = document.querySelector('.comments__default');
// avatarImage.src = "../assets/Images/Mohan-muruge.jpg";

function addComment() {
    let newComment = document.createElement('div');
    newComment.classList.add('comments__default__box');
    defaultSection.appendChild(newComment);

    let avatarImage = document.createElement('img');
    avatarImage.classList.add('comments__default__box__image');
    newComment.appendChild(avatarImage);

    return newComment;
}

function postComment() {
    let newComment = document.createElement('div');
    newComment.classList.add('comments__default__box');
    defaultSection.appendChild(newComment);

    let avatarImage = document.createElement('img');
    avatarImage.src = '../assets/Images/Mohan-muruge.jpg';
    avatarImage.classList.add('comments__default__box__image');
    newComment.appendChild(avatarImage);

    return newComment;
}

function addTextBox(newComment) {
    let commentBox = document.createElement('div');
    commentBox.classList.add('comments__default__box__text');
    newComment.appendChild(commentBox);

    return commentBox
}

for (let i=0; i<comments.length; i++) {

    let newComment = addComment();
    let newTextBox = addTextBox(newComment);

    let titleBox = document.createElement('h1');
    titleBox.classList.add('comments__default__box__text__head');
    newTextBox.appendChild(titleBox);

    let commentName = document.createElement('h2');
    commentName.classList.add('comments__default__box__text__head--name');
    commentName.innerText = comments[i].name;
    titleBox.appendChild(commentName);

    let commentDate = document.createElement('h2');
    commentDate.classList.add('comments__default__box__text__head--date');
    let dates = new Date(comments[i].timestamp);
    let month = ("0" + (dates.getMonth()+1)).slice(-2);
    let date = ("0" + dates.getDate()).slice(-2);
    let year = dates.getFullYear();
    commentDate.innerText = month + "/" + date + "/" + year;
    titleBox.appendChild(commentDate);

    let commentText = document.createElement('span');
    commentText.classList.add('comments__default__box__text__desc');
    commentText.innerText = comments[i].comment;
    newTextBox.appendChild(commentText);
}

const form = document.getElementById('myForm');


form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // create object containing inputed user data
    const commentInput = {
        "name": e.target.name.value,
        "comment": e.target.message.value
    }

    let BandSiteApiPost = new BandSiteApi(await fetch()); // Extract data from WebAPI link
    let postedComment = await BandSiteApiPost.postComments(commentInput); //retrieve complete comment data from axios.post
    const postedCommentData = postedComment.data; //extract data array from axios.post

    const button = document.querySelector('button');
    const input = document.querySelector('input');
    const textArea = document.querySelector('textarea');

    if (postedCommentData.name.length>2) {
        input.classList.remove('comment__error');

        if (postedCommentData.comment.split(" ").length>=2) {
            textArea.classList.remove('comment__error');

            let newComment = postComment();
            newComment.setAttribute("id", postedCommentData.id);
            let newTextBox = addTextBox(newComment);
        
            let titleBox = document.createElement('h1');
            titleBox.classList.add('comments__default__box__text__head');
            newTextBox.appendChild(titleBox);
        
            let commentName = document.createElement('h2');
            commentName.classList.add('comments__default__box__text__head--name');
            commentName.innerText = postedCommentData.name;
            titleBox.appendChild(commentName);
            
            let commentDate = document.createElement('h2');
            commentDate.classList.add('comments__default__box__text__head--date');
            let postedDate = new Date(postedCommentData.timestamp);

            function dates () {
                var str = "";
                var currentDate = new Date();
                str += Math.abs(currentDate.getMinutes()-postedDate.getMinutes()) + " minutes ago";

                commentDate.innerText = str;
                titleBox.appendChild(commentDate);
            }
            setInterval(dates, 1000);

            let commentText = document.createElement('span');
            commentText.classList.add('comments__default__box__text__desc');
            commentText.innerText = postedCommentData.comment;
            newTextBox.appendChild(commentText);

            // Button Section
            let buttonSection = document.createElement('div');
            buttonSection.classList.add('comments__default__box__text__container');
            newTextBox.appendChild(buttonSection);

            // Implement Like Button
            let likeButton = document.createElement('button');
            likeButton.classList.add('comments__default__box__text__container__button');

            let likeButtonImage = document.createElement('img');
            likeButtonImage.classList.add('comments__default__box__text__container__button__image');
            likeButtonImage.src = '../assets/Icons/SVG/icon-like.svg';

            let likeCounter = document.createElement('span');
            likeCounter.classList.add('comments__default__box__text__container__button__counter');
            likeCounter.innerText = postedCommentData.likes;

            likeButton.appendChild(likeButtonImage);
            likeButton.appendChild(likeCounter);
            buttonSection.appendChild(likeButton);

            async function likeButtonHandler(event) {
                event.preventDefault();
                let likedComment = await BandSiteApiPost.likeComments(postedCommentData);
                likeCounter.innerText = likedComment.data.likes;
            }
    
            likeButton.addEventListener("click", likeButtonHandler);

            // Implement Delete Button
            let deleteButton = document.createElement('button');
            deleteButton.classList.add('comments__default__box__text__container__button');

            let deleteButtonImage = document.createElement('img');
            deleteButtonImage.src = '../assets/Icons/SVG/icon-delete.svg';
            deleteButtonImage.classList.add('comments__default__box__text__container__button__image');
            
            let deleteCounter = document.createElement('span');
            deleteCounter.classList.add('comments__default__box__text__container__button__counter');

            deleteButton.appendChild(deleteButtonImage);
            deleteButton.appendChild(deleteCounter);
            buttonSection.appendChild(deleteButton);

            async function deleteButtonHandler(event) {
                event.preventDefault();
                let deleteComment = await BandSiteApiPost.deleteComments(postedCommentData);
                let deleteID = deleteComment.data.id;
                const commentBlock = document.getElementById(deleteID);
                commentBlock.remove();
            }
    
            deleteButton.addEventListener("click", deleteButtonHandler);

        }else if (postedCommentData.comment.split(" ").length<2) {
            alert('Comment must contain more than 1 word');
            textArea.classList.add('comment__error');
            function formHandler(event) {
                event.preventDefault();
                button.removeEventListener("click", formHandler);
            }

            button.addEventListener("click", formHandler);
        }
    }else if (postedCommentData.name.length<=2) {
        alert('Name must contain more than 2 letters');
        input.classList.add('comment__error');
        function formHandler(event) {
            event.preventDefault();
            button.removeEventListener("click", formHandler);
        }

        button.addEventListener("click", formHandler);
    }
})
