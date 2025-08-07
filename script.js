document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    function updateActiveNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.idea-card, .challenge-point, .feature, .impact-item, .team-member');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Ideas Gallery Functionality
    const ideaCards = document.querySelectorAll('.idea-card');
    const galleryTitle = document.getElementById('gallery-title');
    const galleryDescription = document.getElementById('gallery-description');
    const galleryImages = document.getElementById('gallery-images');

    const ideaData = {
        1: {
            title: 'Idea 1 - Pokémon-eqsue Game',
            description: 'A Pokémon inspired game idea with AR elements. Critters would spawn throughout the map to spur players to relive their childhood dreams to be a Pokémon trainer while also actively traveling and reducing carbon emissions! The amount of CO2 emissions saved will be recorded in a form of an in game CO2 coin for each recorded active travel the player takes. (click on images to learn more)',
            imagesData: [
                {
                    path: 'images/idea-1/photo_1_2025-07-28_21-32-03.jpg',
                    description: "Home Screen\nShows the map with the player's model(s) on the map based on user's location. Point of interests will be shown on the map and the respective game information (Daily travel streak and CO2 coins) are shown on the top bar whereas the navigational buttons to Pokedex Screen, Gameplay Screen and Quest Screen are located on the button bar."
                },
                {
                    path: 'images/idea-1/photo_2_2025-07-28_21-32-03.jpg',
                    description: "Gameplay Screen\nWhen the user decides to travel via active means, they can press the Start Journey button (bottom center) to record the amount of CO2 saved. Other live game information would also be displayed on the bottom panel. The player could also photograph points of interest by pressing the camera icon at the bottom right corner."
                },
                {
                    path: 'images/idea-1/photo_3_2025-07-28_21-32-03.jpg',
                    description: "Creature Screen\nWhilst on their active journey, a user could encounter a creature which could be collected. The player will have to make their way towards the creature in order to collect it."
                },
                {
                    path: 'images/idea-1/photo_4_2025-07-28_21-32-03.jpg',
                    description: "Collect Screen\nWhen the user is close enough to the creature, they will 'collect' the creature, adding it to the user's account."
                }
            ]
        },
      
    2: {
        title: 'Idea 2 - Competitive Route Finder',
        description: 'A \'Google Maps\' app gamified to fuel the competitive spirits of players by rewarding them with monetary incentives. Players can use this app like Google Maps by choosing routes to use from a pool of user recorded routes or contribute their own recorded routes it! Each active travel journey will allow players to earn CO2 coins which they could later use for redeeming vouchers or gift cards. (click on images to learn more)',
        imagesData: [
        {
            path: 'images/idea-2/photo_1_2025-07-28_21-32-40.jpg',
            description: "Home Screen\nThe home screen shows the user's position on a map with their direction represented by an arrow. The top bar displays the shop icon and player CO2 currency coins whilst on the bottom bar, the \"Travel\" button, \"Record Route\" button and Leaderboard button are displayed."
        },
        {
            path: 'images/idea-2/photo_2_2025-07-28_21-32-40.jpg',
            description: "Travel Screen\nThe user will choose their start point and destination point. A list of available user recorded routes (or closest routes) will be shown on the bottom of the screen. Information of the routes will be displayed. The user will travel towards their destination via active travel whilst following the route."
        },
        {
            path: 'images/idea-2/photo_3_2025-07-28_21-32-40.jpg',
            description: "End Journey Screen\nWhen the user has reached their destination, the total CO2 emission saved is shown on the screen and the player can decide to rate this player recorded route (for now it is just a \"Like\")."
        },
        {
            path: 'images/idea-2/photo_4_2025-07-28_21-32-40.jpg',
            description: "Record Route Screen\nRecords a route that other users could take. The user would define the Start and End points before walking from the former to the latter, hence marking the entire route."
        },
        {
            path: 'images/idea-2/photo_5_2025-07-28_21-32-40.jpg',
            description: "Record Route Screen\nRecords a route that other users could take. The user would define the Start and End points before walking from the former to the latter, hence marking the entire route."
        },
        {
            path: 'images/idea-2/photo_6_2025-07-28_21-32-40.jpg',
            description: "Record Route Save Screen\nWhen the user is satisfied with their route, they can choose to save the route."
        },
        {
            path: 'images/idea-2/photo_7_2025-07-28_21-32-40.jpg',
            description: "Home Screen Notification\nWhen other users use the route recorded by you, you also gain some CO2 points."
        },
        {
            path: 'images/idea-2/photo_8_2025-07-28_21-32-40.jpg',
            description: "Shop Screen\nA shop page is available for users to redeem coupons with CO2 points."
        },
        {
            path: 'images/idea-2/photo_9_2025-07-28_21-32-40.jpg',
            description: "Leaderboard Screen\nA leaderboard could be used to track which routes are the most popular and most liked."
        }
        ]
    },

    3: {
        title: 'Idea 3 - Healthy 365 Clone',
        description: 'Similar to Singapore\'s Healthy 365 application, this idea works with the premise that there can only be this much CO2 coins that could be earned per day. This motivates players to want to get the most out of their days by actively traveling to earn as much as they could in one day. The CO2 coins could then be used for redemption for coupons or vouchers. (click on images to learn more)',
        imagesData: [
        {
            path: 'images/idea-3/photo_1_2025-07-28_21-33-05.jpg',
            description: "Home Screen\nThe home screen consists of the user's profile icon, CO2 emissions saved and other options in the top bar. In the main body, there are three main navigational buttons."
        },
        {
            path: 'images/idea-3/photo_2_2025-07-28_21-33-05.jpg',
            description: "Record Screen\nThe record screen simply shows the user's current location on a map and has a Start button for the user to start recording."
        },
        {
            path: 'images/idea-3/photo_3_2025-07-28_21-33-05.jpg',
            description: "Recording Screen\nThe recording process has started and the respective information will be shown. The user could pause or stop the process when their active journey has ended."
        },
        {
            path: 'images/idea-3/photo_4_2025-07-28_21-33-05.jpg',
            description: "Journey Summary Screen\nAt the end of the recording process, statistics of the journey will be summarised and shown."
        },
        {
            path: 'images/idea-3/photo_5_2025-07-28_21-33-05.jpg',
            description: "Redeem Screen\nAt the redeem page, users could use the amount of CO2 points saved to redeem vouchers."
        },
        {
            path: 'images/idea-3/photo_6_2025-07-28_21-33-05.jpg',
            description: "History Screen\nThe users will have their recorded active travel journeys saved here so that they can refer to it if needed."
        }
        ]
    },

    4: {
        title: 'Idea 4 - Selected Solution',
        description: 'A virtual pet game where players can customise their own pets and form a bond with them, caring and playing with them. However, the pets will require CO2 coins to be well taken care of. Players will need to actively travel to earn these CO2 coins in order to feed or unlock more customisations for their pets! (click on images to learn more)',
        imagesData: [
        {
            path: 'images/idea-4/photo_1_2025-07-28_21-31-35.jpg',
            description: 'Home Screen\nThe top of the screen holds the values for the player\'s daily active travel streak and current CO2 coins. '
        },
        {
            path: 'images/idea-4/photo_2_2025-07-28_21-31-35.jpg',
            description: 'Sketches showing different emotions for the pet avatar.'
        },
        {
            path: 'images/idea-4/photo_3_2025-07-28_21-31-35.jpg',
            description: 'Concepts for how the avatar interacts with the user.'
        },
        {
            path: 'images/idea-4/photo_4_2025-07-28_21-31-35.jpg',
            description: 'A detailed drawing of the avatar in a specific scenario.'
        },
        {
            path: 'images/idea-4/photo_5_2025-07-28_21-31-35.jpg',
            description: 'The final, polished design of the selected pet avatar.'
        }
        ]
    }
    };

    function loadGallery(ideaNumber) {
        const idea = ideaData[ideaNumber];
        if (!idea) return;

        galleryTitle.textContent = idea.title;
        galleryDescription.textContent = idea.description;

        galleryImages.innerHTML = '';
        idea.imagesData.forEach((imageSrc, index) => {
            const img = document.createElement('img');
            img.src = imageSrc.path;
            img.alt = `${idea.title} - Sketch ${index + 1}`;
            img.addEventListener('click', function () {
                openImageModal(this.src, imageSrc.description);
            });
            galleryImages.appendChild(img);
        });
    }

function openImageModal(imageSrc, imageDescription) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
        padding: 10px;
        box-sizing: border-box;
    `;

    // Create a new container for the image and description
    const contentContainer = document.createElement('div');
    contentContainer.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        max-width: 90%;
        max-height: 90%;
        background: rgba(255, 255, 255, 0.1);
        padding: 20px;
        border-radius: 10px;
        box-sizing: border-box;
        position: relative; /* Needed for positioning the close button */
    `;

    const modalImg = document.createElement('img');
    modalImg.src = imageSrc;
    modalImg.style.cssText = `
        max-width: 60%;
        max-height: 100%;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `;

    const description = document.createElement('p');
    description.innerHTML = imageDescription.replace(/\n/g, '<br>');
    description.style.cssText = `
        color: white;
        font-size: 1.2rem;
        font-family: sans-serif;
        text-align: left;
        max-width: 40%;
    `;
    
    // --- Close Button for Desktop ---
    const closeButton = document.createElement('button');
    closeButton.textContent = '×'; // '×' is a common, clean-looking multiplication sign
    closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: 2rem;
        cursor: pointer;
        display: none; /* Hide by default, will show on desktop */
        transition: background 0.3s;
    `;

    closeButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from bubbling up to the modal background
        document.body.removeChild(modal);
    });

    // Append the image, description, and close button to the new container
    contentContainer.appendChild(modalImg);
    contentContainer.appendChild(description);
    contentContainer.appendChild(closeButton);
    
    // Append the new container to the modal
    modal.appendChild(contentContainer);
    document.body.appendChild(modal);

    modal.addEventListener('click', function (event) {
        // Only close the modal when clicking on the background
        if (event.target === modal) {
            document.body.removeChild(modal);
        }
    });

    // --- Mobile Responsiveness Logic with Close Button ---
    const checkMobile = () => {
        // Set a breakpoint for mobile devices
        if (window.innerWidth <= 768) {
            // Stack the image and description vertically on small screens
            contentContainer.style.flexDirection = 'column';
            contentContainer.style.gap = '15px';
            modalImg.style.maxWidth = '100%';
            modalImg.style.maxHeight = '80%';
            description.style.maxWidth = '100%';
            description.style.textAlign = 'center';
            description.style.fontSize = '1rem';
            closeButton.style.display = 'none'; // Hide the close button on mobile
        } else {
            // Revert to the side-by-side layout for larger screens
            contentContainer.style.flexDirection = 'row';
            contentContainer.style.gap = '30px';
            modalImg.style.maxWidth = '60%';
            modalImg.style.maxHeight = '100%';
            description.style.maxWidth = '40%';
            description.style.textAlign = 'left';
            description.style.fontSize = '1.2rem';
            closeButton.style.display = 'block'; // Show the close button on desktop
        }
    };

    // Run the function on load and on every window resize
    window.addEventListener('resize', checkMobile);
    checkMobile(); // Initial check when the modal is opened
}
    
    // Initialize with Idea 4 (selected solution)
    loadGallery(4);

    // Feature Diagram Functionality
    const diagramItems = document.querySelectorAll('.diagram-item');
    const featureTitle = document.getElementById('feature-title');
    const featureDescription = document.getElementById('feature-description');
    const featureBenefits = document.getElementById('feature-benefits');

    const featureData = {
        'route-tracking': {
            title: 'Route Tracking',
            description: 'Users can log their walking and cycling routes through the CommuniMap interface, creating a comprehensive database of active travel patterns across the community.',
            benefits: [
                '📍 GPS-based route logging',
                '🗺️ Interactive map visualization',
                '📊 Journey history tracking'
            ]
        },
        'co2-calculation': {
            title: 'CO₂ Calculation',
            description: 'Advanced algorithms calculate the carbon dioxide savings from choosing active travel over private vehicle transport, providing real-time environmental impact feedback.',
            benefits: [
                '🧮 Accurate CO₂ offset calculations',
                '⚡ Real-time impact tracking',
                '📈 Comparative emissions data'
            ]
        },
        'pet-avatar': {
            title: 'Pet Avatar',
            description: 'Users receive a customizable virtual pet that grows and evolves based on their sustainable travel choices, creating an emotional connection to environmental action.',
            benefits: [
                '🐾 Personalized virtual companion',
                '🎨 Extensive customization options',
                '📈 Growth based on eco-actions'
            ]
        },
        'gamification': {
            title: 'Gamification',
            description: 'Points, achievements, and rewards system that transforms sustainable transport into an engaging game experience, encouraging long-term behavior change.',
            benefits: [
                '🏆 Achievement system',
                '🎯 Daily challenges',
                '🏅 Leaderboards and competitions'
            ]
        },
        'community': {
            title: 'Community',
            description: 'Social features that connect users with their local community, sharing achievements, routes, and environmental impact to foster collective action.',
            benefits: [
                '👥 Social sharing features',
                '🌍 Community challenges',
                '💬 Route recommendations'
            ]
        },
        'progress': {
            title: 'Progress',
            description: 'Comprehensive tracking and visualization of personal environmental impact, pet development, and community contributions over time.',
            benefits: [
                '📊 Detailed analytics dashboard',
                '📅 Historical progress tracking',
                '🎯 Goal setting and monitoring'
            ]
        }
    };

    function loadFeatureDetails(featureKey) {
        const feature = featureData[featureKey];
        if (!feature) return;

        featureTitle.textContent = feature.title;
        featureDescription.textContent = feature.description;

        featureBenefits.innerHTML = '';
        feature.benefits.forEach(benefit => {
            const benefitDiv = document.createElement('div');
            benefitDiv.className = 'benefit-item';
            benefitDiv.textContent = benefit;
            featureBenefits.appendChild(benefitDiv);
        });
    }

    diagramItems.forEach(item => {
        item.addEventListener('click', function () {
            const featureKey = this.getAttribute('data-feature');

            // Remove active class from all items
            diagramItems.forEach(i => i.classList.remove('active'));

            // Add active class to clicked item
            this.classList.add('active');

            // Load feature details
            loadFeatureDetails(featureKey);
        });
    });

    ideaCards.forEach(card => {
        card.addEventListener('click', function () {
            const ideaNumber = this.getAttribute('data-idea');

            // Remove active class from all cards
            ideaCards.forEach(c => c.classList.remove('active'));

            // Add active class to clicked card
            this.classList.add('active');

            // Load the gallery for this idea
            loadGallery(ideaNumber);
        });

        card.addEventListener('mouseenter', function () {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            }
        });

        card.addEventListener('mouseleave', function () {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    const prototypeImages = document.querySelectorAll('.prototype-image img, .hero-image img');
    prototypeImages.forEach(img => {
        img.addEventListener('click', function () {
            openImageModal(this.src);
        });
    });

    // let lastScrollTop = 0;
    // const navbar = document.querySelector('.navbar');
    
    // window.addEventListener('scroll', function() {
    //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
    //     if (scrollTop > lastScrollTop && scrollTop > 100) {
    //         navbar.style.transform = 'translateY(-100%)';
    //     } else {
    //         navbar.style.transform = 'translateY(0)';
    //     }
        
    //     lastScrollTop = scrollTop;
    // });

    // navbar.style.transition = 'transform 0.3s ease';

    const points = document.querySelectorAll('.timeline-point');
    const essays = document.querySelectorAll('.essay');

    points.forEach(point => {
        point.addEventListener('click', () => {
        // Reset active states
        points.forEach(p => p.classList.remove('active'));
        essays.forEach(e => e.classList.remove('active'));

        // Activate selected
        point.classList.add('active');
        const index = point.getAttribute('data-index');
        essays[index].classList.add('active');
        });
    });
});
