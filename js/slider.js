document.addEventListener('DOMContentLoaded', function() {
    // Get slider elements
    const sliderContainer = document.querySelector('.slider-container');
    const prevButton = document.querySelector('.slider-arrow.prev');
    const nextButton = document.querySelector('.slider-arrow.next');
    const cards = document.querySelectorAll('.event-card');
    
    if (!sliderContainer || !prevButton || !nextButton || cards.length === 0) {
        console.error('Slider elements not found');
        return;
    }
    
    // Function to scroll to the next card
    function scrollToNextCard() {
        const firstCard = cards[0];
        const cardStyle = window.getComputedStyle(firstCard);
        const cardWidth = firstCard.offsetWidth;
        // Use computed style for margin, fallback to 0 if not set
        const cardMarginRight = parseInt(cardStyle.marginRight) || 0;
        const cardMarginLeft = parseInt(cardStyle.marginLeft) || 0;
        // Calculate gap from the container's style
        const containerStyle = window.getComputedStyle(sliderContainer);
        const gap = parseInt(containerStyle.gap) || 24; // Default to 24px if gap isn't set/parsed

        
        const scrollAmount = cardWidth + cardMarginLeft + cardMarginRight + gap;

        sliderContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth' 
        });
    }

    
    function scrollToPrevCard() {
        const firstCard = cards[0];
        const cardStyle = window.getComputedStyle(firstCard);
        const cardWidth = firstCard.offsetWidth;
        const cardMarginRight = parseInt(cardStyle.marginRight) || 0;
        const cardMarginLeft = parseInt(cardStyle.marginLeft) || 0;
        const containerStyle = window.getComputedStyle(sliderContainer);
        const gap = parseInt(containerStyle.gap) || 24;

        const scrollAmount = cardWidth + cardMarginLeft + cardMarginRight + gap;

        sliderContainer.scrollBy({
            left: -scrollAmount, 
            behavior: 'smooth' 
        });
    }


    nextButton.addEventListener('click', scrollToNextCard);
    prevButton.addEventListener('click', scrollToPrevCard);
    
    
    function updateArrowVisibility() {
      
        prevButton.style.opacity = sliderContainer.scrollLeft <= 10 ? '0.5' : '1';
        
       
        const maxScrollLeft = sliderContainer.scrollWidth - sliderContainer.clientWidth - 10;
        nextButton.style.opacity = sliderContainer.scrollLeft >= maxScrollLeft ? '0.5' : '1';
    }

    sliderContainer.addEventListener('scroll', updateArrowVisibility);
    
 
    updateArrowVisibility();
    

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            scrollToNextCard();
        } else if (e.key === 'ArrowLeft') {
            scrollToPrevCard();
        }
    });
});