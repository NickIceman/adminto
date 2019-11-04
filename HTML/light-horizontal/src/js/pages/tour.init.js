
/*
Template Name: Adminto - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
File: Tour init js
*/

$(document).ready(function () {

    // Define the tour!
    var tour = {
        id: "my-intro",
        steps: [
            {
                target: "logo-tour",
                title: "Logo Here",
                content: "You can find here status of user who's currently online.",
                placement: 'bottom',
                yOffset: 15,
                zindex: 999
            },
            {
                target: 'heading-title-tour',
                title: "Heading Text",
                content: "Click on the button and make sidebar navigation small.",
                placement: 'top',
                zindex: 999
            },
            {
                target: 'blockquote-title-tour',
                title: "Blockquotes",
                content: "You can edit you profile info here.",
                placement: 'bottom',
                zindex: 999
            },
            {
                target: 'thankyou-tour',
                title: "Thank you !",
                content: "Here you can change theme skins and other features.",
                placement: 'top',
                zindex: 999
            }
        ],
        showPrevButton: true
    };

    // Start the tour!
    hopscotch.startTour(tour);
});
