$(document).ready(function () {
    // Initialize variables to keep track of game state
    let flippedCards = [];
    let lockBoard = false;

    // Function to handle card flipping
    const flipCard = (card) => {
        // Check if the board is locked or if there are already two flipped cards
        if (lockBoard || flippedCards.length >= 2 || $(card).hasClass('matched')){
            return;
        }

        // Toggle the visibility of card content
        $(card).find('.box-content, .hidden-content').toggle();

        if (flippedCards.length === 0) {
            // If it's the first card flipped, add it to the flippedCards array
            flippedCards.push(card);
        } else {
            const [firstCard] = flippedCards;

            // Check if the two flipped cards have the same image source
            if ($(firstCard).find('img').attr('src') === $(card).find('img').attr('src')) {
                // Mark the cards as matched
                $(firstCard).addClass('matched');
                $(card).addClass('matched');

                // Clear the flippedCards array
                flippedCards = [];

                // Check if all cards are matched (game won)
                if ($('.matched').length === $(".box").length) {
                    alert('Congratulations! You won!');
                }
            } else {
                // If there is no match, lock the board briefly and flip the cards back
                lockBoard = true;
                setTimeout(() => {
                    $(firstCard).add(card).find('.box-content, .hidden-content').toggle();
                    flippedCards = [];
                    lockBoard = false;
                }, 800); // 1000 milliseconds (1 second) delay
            }
        }
    };

    // Event listener for clicking on a card
    $(".box").click(function () {
        if (!lockBoard && flippedCards.length < 2) {
            flipCard(this);
        }
    });
});
