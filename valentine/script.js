// Floating Hearts Animation
function createFloatingHearts() {
    const heartsContainer = document.getElementById('floatingHearts');
    if (!heartsContainer) return;
    
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝', '✨', '⭐'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 13000);
    }, 500);
}

// Initialize floating hearts on all pages
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
});

// Love Letter Page
if (window.location.pathname.includes('love-letter.html')) {
    const passwordScreen = document.getElementById('passwordScreen');
    const passwordInput = document.getElementById('passwordInput');
    const passwordBtn = document.getElementById('passwordBtn');
    const passwordError = document.getElementById('passwordError');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const envelope = document.getElementById('envelope');
    const letterContainer = document.getElementById('letterContainer');
    
    const correctPassword = 'ilovepranjal';
    
    // Handle password submission
    function checkPassword() {
        const enteredPassword = passwordInput.value.toLowerCase().trim();
        
        if (enteredPassword === correctPassword) {
            // Correct password
            passwordScreen.classList.add('hidden');
            envelopeContainer.classList.remove('hidden');
        } else {
            // Wrong password
            passwordError.textContent = 'Oops! Try again... 💔';
            passwordInput.value = '';
            passwordInput.style.borderColor = '#ff4757';
            
            // Shake animation
            passwordInput.style.animation = 'shake 0.5s';
            setTimeout(() => {
                passwordInput.style.animation = '';
                passwordInput.style.borderColor = '#e8d5f2';
            }, 500);
        }
    }
    
    // Click button to submit
    passwordBtn.addEventListener('click', checkPassword);
    
    // Press Enter to submit
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    
    // Clear error when typing
    passwordInput.addEventListener('input', () => {
        passwordError.textContent = '';
    });
    
    envelope.addEventListener('click', () => {
        envelope.classList.add('open');
        
        setTimeout(() => {
            letterContainer.classList.add('show');
            animateLetterLines();
        }, 1000);
    });
    
    function animateLetterLines() {
        const lines = document.querySelectorAll('.letter-line');
        const signature = document.querySelector('.letter-signature');
        const actions = document.querySelector('.letter-actions');
        
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('show');
            }, index * 300);
        });
        
        setTimeout(() => {
            signature.classList.add('show');
        }, lines.length * 300 + 300);
        
        setTimeout(() => {
            if (actions) actions.classList.add('show');
        }, lines.length * 300 + 600);
    }
}

// Gallery/Carousel Page
if (window.location.pathname.includes('gallery.html')) {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    
    let currentIndex = 0;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = Array.from(document.querySelectorAll('.dot'));
    
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });
    
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    
    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            lightbox.classList.add('show');
        });
    });
    
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('show');
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
        }
    });
}

// Timeline Page - Scroll Animation
if (window.location.pathname.includes('timeline.html')) {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function checkScroll() {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight * 0.8) {
                item.classList.add('show');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on load
    
    // Add click-to-zoom functionality for timeline images
    const timelineImages = document.querySelectorAll('.timeline-image img');
    
    // Create lightbox for timeline
    const lightbox = document.createElement('div');
    lightbox.className = 'timeline-lightbox';
    lightbox.innerHTML = `
        <span class="timeline-lightbox-close">&times;</span>
        <img src="" alt="" class="timeline-lightbox-img">
    `;
    document.body.appendChild(lightbox);
    
    const lightboxImg = lightbox.querySelector('.timeline-lightbox-img');
    const lightboxClose = lightbox.querySelector('.timeline-lightbox-close');
    
    timelineImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('show');
        });
    });
    
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('show');
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
        }
    });
}

// Memory Game
if (window.location.pathname.includes('memory-game.html')) {
    const gameBoard = document.getElementById('gameBoard');
    const movesDisplay = document.getElementById('moves');
    const timerDisplay = document.getElementById('timer');
    const pairsFoundDisplay = document.getElementById('pairsFound');
    const restartBtn = document.getElementById('restartBtn');
    const playAgainBtn = document.getElementById('playAgainBtn');
    const victoryModal = document.getElementById('victoryModal');
    const finalMovesDisplay = document.getElementById('finalMoves');
    const finalTimeDisplay = document.getElementById('finalTime');
    
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;
    let timer = 0;
    let timerInterval = null;
    let gameStarted = false;
    
    const cardSymbols = ['💕', '💖', '💗', '💝', '💓', '💘', '❤️', '💞'];
    
    function initGame() {
        // Reset game state
        cards = [];
        flippedCards = [];
        matchedPairs = 0;
        moves = 0;
        timer = 0;
        gameStarted = false;
        
        if (timerInterval) clearInterval(timerInterval);
        
        // Update displays
        movesDisplay.textContent = '0';
        timerDisplay.textContent = '0:00';
        pairsFoundDisplay.textContent = '0';
        
        // Clear board
        gameBoard.innerHTML = '';
        
        // Create card pairs
        const cardPairs = [...cardSymbols, ...cardSymbols];
        const shuffled = cardPairs.sort(() => Math.random() - 0.5);
        
        // Create card elements
        shuffled.forEach((symbol, index) => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.dataset.symbol = symbol;
            card.dataset.index = index;
            
            card.innerHTML = `
                <div class="card-front">❓</div>
                <div class="card-back">${symbol}</div>
            `;
            
            card.addEventListener('click', () => flipCard(card));
            gameBoard.appendChild(card);
            cards.push(card);
        });
    }
    
    function startTimer() {
        if (gameStarted) return;
        gameStarted = true;
        
        timerInterval = setInterval(() => {
            timer++;
            const minutes = Math.floor(timer / 60);
            const seconds = timer % 60;
            timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }
    
    function flipCard(card) {
        if (flippedCards.length >= 2) return;
        if (card.classList.contains('flipped')) return;
        if (card.classList.contains('matched')) return;
        
        startTimer();
        
        card.classList.add('flipped');
        flippedCards.push(card);
        
        if (flippedCards.length === 2) {
            moves++;
            movesDisplay.textContent = moves;
            checkMatch();
        }
    }
    
    function checkMatch() {
        const [card1, card2] = flippedCards;
        const symbol1 = card1.dataset.symbol;
        const symbol2 = card2.dataset.symbol;
        
        if (symbol1 === symbol2) {
            // Match found
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedPairs++;
            pairsFoundDisplay.textContent = matchedPairs;
            flippedCards = [];
            
            if (matchedPairs === 8) {
                setTimeout(showVictory, 500);
            }
        } else {
            // No match
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                flippedCards = [];
            }, 1000);
        }
    }
    
    function showVictory() {
        clearInterval(timerInterval);
        
        finalMovesDisplay.textContent = moves;
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        finalTimeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        victoryModal.classList.add('show');
        createConfetti();
    }
    
    function createConfetti() {
        const confettiContainer = document.getElementById('confetti');
        const colors = ['#ff6b9d', '#ffd6e8', '#e8d5f2', '#d4e8fc', '#fff4d6'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }
    }
    
    function closeVictory() {
        victoryModal.classList.remove('show');
        initGame();
    }
    
    restartBtn.addEventListener('click', () => {
        if (timerInterval) clearInterval(timerInterval);
        initGame();
    });
    
    playAgainBtn.addEventListener('click', closeVictory);
    
    // Initialize game on load
    initGame();
}

