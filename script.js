document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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

    const observer = new IntersectionObserver(function(entries) {
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
            title: 'Idea 1 - Initial Concept',
            description: 'Early exploration of gamification concepts and user engagement strategies',
            images: [
                'images/idea-1/photo_1_2025-07-28_21-32-03.jpg',
                'images/idea-1/photo_2_2025-07-28_21-32-03.jpg',
                'images/idea-1/photo_3_2025-07-28_21-32-03.jpg',
                'images/idea-1/photo_4_2025-07-28_21-32-03.jpg',
                'images/idea-1/photo_5_2025-07-28_21-32-03.jpg'
            ]
        },
        2: {
            title: 'Idea 2 - Alternative Approach',
            description: 'Exploring different gamification mechanics and user interface designs',
            images: [
                'images/idea-2/photo_1_2025-07-28_21-32-40.jpg',
                'images/idea-2/photo_2_2025-07-28_21-32-40.jpg',
                'images/idea-2/photo_3_2025-07-28_21-32-40.jpg',
                'images/idea-2/photo_4_2025-07-28_21-32-40.jpg',
                'images/idea-2/photo_5_2025-07-28_21-32-40.jpg',
                'images/idea-2/photo_6_2025-07-28_21-32-40.jpg',
                'images/idea-2/photo_7_2025-07-28_21-32-40.jpg',
                'images/idea-2/photo_8_2025-07-28_21-32-40.jpg',
                'images/idea-2/photo_9_2025-07-28_21-32-40.jpg'
            ]
        },
        3: {
            title: 'Idea 3 - Refined Concept',
            description: 'Further development of gamification elements with focus on user experience',
            images: [
                'images/idea-3/photo_1_2025-07-28_21-33-05.jpg',
                'images/idea-3/photo_2_2025-07-28_21-33-05.jpg',
                'images/idea-3/photo_3_2025-07-28_21-33-05.jpg',
                'images/idea-3/photo_4_2025-07-28_21-33-05.jpg',
                'images/idea-3/photo_5_2025-07-28_21-33-05.jpg',
                'images/idea-3/photo_6_2025-07-28_21-33-05.jpg'
            ]
        },
        4: {
            title: 'Idea 4 - Selected Solution',
            description: 'Detailed sketches and concepts for our pet avatar gamification system',
            images: [
                'images/idea-4/photo_1_2025-07-28_21-31-35.jpg',
                'images/idea-4/photo_2_2025-07-28_21-31-35.jpg',
                'images/idea-4/photo_3_2025-07-28_21-31-35.jpg',
                'images/idea-4/photo_4_2025-07-28_21-31-35.jpg',
                'images/idea-4/photo_5_2025-07-28_21-31-35.jpg',            ]
        }
    };

    function loadGallery(ideaNumber) {
        const idea = ideaData[ideaNumber];
        if (!idea) return;

        galleryTitle.textContent = idea.title;
        galleryDescription.textContent = idea.description;
        
        galleryImages.innerHTML = '';
        idea.images.forEach((imageSrc, index) => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = `${idea.title} - Sketch ${index + 1}`;
            img.addEventListener('click', function() {
                openImageModal(this.src);
            });
            galleryImages.appendChild(img);
        });
    }

    function openImageModal(imageSrc) {
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
        `;
        
        const modalImg = document.createElement('img');
        modalImg.src = imageSrc;
        modalImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        `;
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        
        modal.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
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
        item.addEventListener('click', function() {
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
        card.addEventListener('click', function() {
            const ideaNumber = this.getAttribute('data-idea');
            
            // Remove active class from all cards
            ideaCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Load the gallery for this idea
            loadGallery(ideaNumber);
        });

        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    const prototypeImages = document.querySelectorAll('.prototype-image img, .hero-image img');
    prototypeImages.forEach(img => {
        img.addEventListener('click', function() {
            openImageModal(this.src);
        });
    });

    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    navbar.style.transition = 'transform 0.3s ease';
});
