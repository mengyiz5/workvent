// WorkVent - Anonymous Workplace Forum JavaScript
class WorkVentForum {
    constructor() {
        this.posts = [];
        this.currentFilter = 'all';
        this.currentSort = 'hot';
        this.searchQuery = '';
        this.loadedPosts = 0;
        this.postsPerPage = 10;
        
        this.init();
    }
    
    init() {
        this.generateMockPosts();
        this.initializeEventListeners();
        this.initializeAnimations();
        this.renderPosts();
        this.initializeParticles();
    }
    
    generateMockPosts() {
        const mockPosts = [
            {
                id: 1,
                title: "My boss just spent $50K on a 'motivational speaker' who told us to 'believe in ourselves'",
                content: "I'm not even kidding. This guy charged fifty thousand dollars to stand in our conference room for 2 hours and tell us that 'success is a mindset' and 'winners win because they believe they can.' No practical advice, no actionable strategies, just pure Instagram-quote level nonsense. Meanwhile, we're all working overtime because we're understaffed and the actual tools we need to do our jobs are 'not in the budget.' I'm so done with this place.",
                category: "boss-decisions",
                author: "AnonymousUser847",
                timestamp: Date.now() - 2 * 60 * 60 * 1000,
                votes: 245,
                comments: 23,
                mood: "frustrated"
            },
            {
                id: 2,
                title: "HR told me I need to 'smile more' during performance review",
                content: "I work in data entry. I sit in a cubicle all day processing forms. My numbers are above target, I haven't taken a sick day in 8 months, and I always meet my deadlines. But apparently that's not enough - my manager said HR flagged me for 'not demonstrating sufficient enthusiasm' and I need to 'project more positivity' if I want to be considered for promotion. I'm processing insurance claims, not performing in a Broadway show. This is getting ridiculous.",
                category: "company-culture",
                author: "AnonymousUser293",
                timestamp: Date.now() - 4 * 60 * 60 * 1000,
                votes: 189,
                comments: 31,
                mood: "annoyed"
            },
            {
                id: 3,
                title: "Company announced 'unlimited PTO' but quietly removed all vacation accrual",
                content: "They made this big announcement about switching to 'unlimited PTO' to 'promote work-life balance.' What they didn't mention is that they also eliminated all vacation accrual, meaning we no longer get paid out for unused vacation if we leave. Plus, now there's no formal approval process - it's just 'manager discretion' which basically means no one gets approved for more than a few days at a time. Several people have already quit and gotten nothing for their accrued vacation. It's a scam.",
                category: "policy-fails",
                author: "AnonymousUser156",
                timestamp: Date.now() - 6 * 60 * 60 * 1000,
                votes: 312,
                comments: 45,
                mood: "angry"
            },
            {
                id: 4,
                title: "Coworker keeps taking credit for my work in meetings",
                content: "I have this colleague who literally repeats my ideas in meetings 5 minutes after I say them, and somehow management thinks she's brilliant. Last week I suggested a new workflow process that would save us about 10 hours per week. She said nothing, then brought it up again in the next meeting as if it was her idea. My manager emailed her thanking her for her 'innovative thinking.' I've started documenting everything in emails now, but it's so exhausting having to play these games just to get credit for my own work.",
                category: "coworker-drama",
                author: "AnonymousUser782",
                timestamp: Date.now() - 8 * 60 * 60 * 1000,
                votes: 156,
                comments: 28,
                mood: "frustrated"
            },
            {
                id: 5,
                title: "CEO sent company-wide email about 'tightening our belts' from his private jet",
                content: "The irony is physically painful. Our CEO sent this long email about how 'times are tough' and 'we all need to make sacrifices' and 'the company can't afford raises this year.' The email was sent from his private jet. How do I know? Because the email client showed his location and flight tracking data. He's literally flying to his vacation home in Aspen while telling us we need to 'tighten our belts.' I can't even.",
                category: "boss-decisions",
                author: "AnonymousUser934",
                timestamp: Date.now() - 12 * 60 * 60 * 1000,
                votes: 423,
                comments: 67,
                mood: "amused"
            },
            {
                id: 6,
                title: "Manager scheduled 'mandatory fun' team building during my vacation",
                content: "I had this vacation planned for 6 months. Approved by my manager, tickets booked, hotel reserved. Two weeks before I'm supposed to leave, she announces a 'mandatory team building retreat' scheduled for the exact same dates. When I reminded her I had approved vacation, she said 'this is mandatory, you'll need to reschedule your vacation.' Like I can just reschedule flights and hotels that easily? I'm taking my vacation anyway. If they fire me, at least I'll have a good story for the unemployment office.",
                category: "company-culture",
                author: "AnonymousUser445",
                timestamp: Date.now() - 18 * 60 * 60 * 1000,
                votes: 278,
                comments: 34,
                mood: "frustrated"
            },
            {
                id: 7,
                title: "IT department blocked all social media except LinkedIn (where they spam job postings)",
                content: "So IT decided to 'improve productivity' by blocking all social media sites. Fair enough, I guess. But they left LinkedIn unblocked, and now my manager spends all day on LinkedIn posting job openings and 'thought leadership' articles about how great our company culture is. Meanwhile, I can't check my personal email during lunch break because Gmail is blocked. The hypocrisy is astounding.",
                category: "policy-fails",
                author: "AnonymousUser667",
                timestamp: Date.now() - 24 * 60 * 60 * 1000,
                votes: 198,
                comments: 19,
                mood: "annoyed"
            },
            {
                id: 8,
                title: "Got written up for being 2 minutes late after working 3 hours overtime the night before",
                content: "I stayed late to finish a project that was due the next morning. Didn't leave until 10 PM (normally leave at 5). Came in the next morning at 8:02 instead of 8:00 sharp. My manager wrote me up for 'tardiness' and said 'company policy is clear about start times.' Never mind that I worked 3 hours of unpaid overtime the night before. When I pointed this out, he said 'that's expected of salaried employees.' I'm updating my resume as we speak.",
                category: "boss-decisions",
                author: "AnonymousUser823",
                timestamp: Date.now() - 36 * 60 * 60 * 1000,
                votes: 367,
                comments: 52,
                mood: "angry"
            },
            {
                id: 9,
                title: "Company installed keystroke monitoring software without telling anyone",
                content: "Found out yesterday that IT installed software that tracks every keystroke, mouse movement, and takes screenshots every 30 seconds. They've had it running for 3 months. We only found out because someone from IT accidentally mentioned it in a meeting. No announcement, no policy update, nothing. I'm literally typing this on my phone during my lunch break because I don't trust company computers anymore. Looking for a new job where they treat employees like humans.",
                category: "company-culture",
                author: "AnonymousUser291",
                timestamp: Date.now() - 48 * 60 * 60 * 1000,
                votes: 445,
                comments: 78,
                mood: "concerned"
            },
            {
                id: 10,
                title: "My 'promotion' came with a 20% pay cut and twice the responsibilities",
                content: "My manager called me into his office to offer me a 'promotion' to team lead. More responsibility, managing 8 people, quarterly targets. I asked about the salary increase and he said 'this is about growth and opportunity, not money.' The new position would actually pay 20% LESS because I'd lose overtime eligibility. His exact words: 'you'll make it up in experience and networking opportunities.' How is a pay cut and more work a promotion? I declined and now he's treating me like I insulted his mother.",
                category: "boss-decisions",
                author: "AnonymousUser567",
                timestamp: Date.now() - 72 * 60 * 60 * 1000,
                votes: 289,
                comments: 41,
                mood: "frustrated"
            }
        ];
        
        this.posts = mockPosts;
    }
    
    initializeEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value.toLowerCase();
                this.loadedPosts = 0;
                this.renderPosts();
            });
        }
        
        // Category filters
        document.querySelectorAll('.category-filter').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.category-filter').forEach(b => {
                    b.classList.remove('bg-orange-100', 'text-orange-600');
                });
                e.target.classList.add('bg-orange-100', 'text-orange-600');
                
                this.currentFilter = e.target.dataset.category;
                this.loadedPosts = 0;
                this.renderPosts();
            });
        });
        
        // Sort buttons
        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.sort-btn').forEach(b => {
                    b.classList.remove('active', 'bg-orange-100', 'text-orange-600');
                    b.classList.add('text-gray-600');
                });
                e.target.classList.add('active', 'bg-orange-100', 'text-orange-600');
                e.target.classList.remove('text-gray-600');
                
                this.currentSort = e.target.dataset.sort;
                this.loadedPosts = 0;
                this.renderPosts();
            });
        });
        
        // Load more button
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadedPosts += this.postsPerPage;
                this.renderPosts();
            });
        }
        
        // Browse button
        const browseBtn = document.getElementById('browse-btn');
        if (browseBtn) {
            browseBtn.addEventListener('click', () => {
                document.querySelector('#posts-container').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
        }
        
        // Mobile menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                // Mobile menu toggle logic would go here
                alert('Mobile menu - coming soon!');
            });
        }
    }
    
    initializeAnimations() {
        // Hero text typewriter effect
        const heroText = document.getElementById('hero-text');
        if (heroText) {
            new Typed('#hero-text', {
                strings: [
                    'Vent About Work.',
                    'Share Your Story.',
                    'Find Your People.',
                    'Stay Anonymous.'
                ],
                typeSpeed: 80,
                backSpeed: 50,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
        
        // Animate category badges
        this.animateCategoryBadges();
    }
    
    animateCategoryBadges() {
        const badges = document.querySelectorAll('.category-badge');
        badges.forEach((badge, index) => {
            anime({
                targets: badge,
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 600,
                delay: index * 100,
                easing: 'easeOutElastic(1, .8)'
            });
        });
    }
    
    initializeParticles() {
        // P5.js particle system for background
        new p5((p) => {
            let particles = [];
            
            p.setup = () => {
                const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
                canvas.parent('particles');
                canvas.style('position', 'fixed');
                canvas.style('top', '0');
                canvas.style('left', '0');
                canvas.style('z-index', '1');
                canvas.style('pointer-events', 'none');
                
                // Create particles
                for (let i = 0; i < 50; i++) {
                    particles.push({
                        x: p.random(p.width),
                        y: p.random(p.height),
                        vx: p.random(-0.5, 0.5),
                        vy: p.random(-0.5, 0.5),
                        size: p.random(2, 6),
                        opacity: p.random(0.1, 0.3)
                    });
                }
            };
            
            p.draw = () => {
                p.clear();
                
                particles.forEach(particle => {
                    // Update position
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                    
                    // Wrap around screen
                    if (particle.x < 0) particle.x = p.width;
                    if (particle.x > p.width) particle.x = 0;
                    if (particle.y < 0) particle.y = p.height;
                    if (particle.y > p.height) particle.y = 0;
                    
                    // Draw particle
                    p.fill(246, 173, 85, particle.opacity * 255);
                    p.noStroke();
                    p.ellipse(particle.x, particle.y, particle.size);
                });
            };
            
            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };
        });
    }
    
    getFilteredPosts() {
        let filtered = this.posts;
        
        // Apply category filter
        if (this.currentFilter !== 'all') {
            filtered = filtered.filter(post => post.category === this.currentFilter);
        }
        
        // Apply search filter
        if (this.searchQuery) {
            filtered = filtered.filter(post => 
                post.title.toLowerCase().includes(this.searchQuery) ||
                post.content.toLowerCase().includes(this.searchQuery)
            );
        }
        
        // Apply sorting
        switch (this.currentSort) {
            case 'hot':
                filtered.sort((a, b) => (b.votes + b.comments) - (a.votes + a.comments));
                break;
            case 'new':
                filtered.sort((a, b) => b.timestamp - a.timestamp);
                break;
            case 'top':
                filtered.sort((a, b) => b.votes - a.votes);
                break;
        }
        
        return filtered;
    }
    
    renderPosts() {
        const container = document.getElementById('posts-container');
        if (!container) return;
        
        const filteredPosts = this.getFilteredPosts();
        const postsToShow = filteredPosts.slice(0, this.loadedPosts + this.postsPerPage);
        
        container.innerHTML = postsToShow.map(post => this.createPostHTML(post)).join('');
        
        // Update load more button visibility
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = postsToShow.length >= filteredPosts.length ? 'none' : 'block';
        }
        
        // Initialize post interactions
        this.initializePostInteractions();
        
        // Animate posts in
        anime({
            targets: '.post-card',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
            delay: anime.stagger(100),
            easing: 'easeOutQuart'
        });
    }
    
    createPostHTML(post) {
        const timeAgo = this.getTimeAgo(post.timestamp);
        const moodEmoji = this.getMoodEmoji(post.mood);
        
        return `
            <article class="post-card bg-white rounded-lg shadow-sm p-6 cursor-pointer" data-post-id="${post.id}">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center space-x-3">
                        <span class="category-badge">${this.getCategoryName(post.category)}</span>
                        <span class="text-2xl">${moodEmoji}</span>
                    </div>
                    <div class="flex items-center text-sm text-gray-500">
                        <span class="font-mono anonymous-id">${post.author}</span>
                        <span class="mx-2">•</span>
                        <span>${timeAgo}</span>
                    </div>
                </div>
                
                <h3 class="font-display text-xl font-semibold text-gray-800 mb-3 hover:text-orange-600 transition-colors">
                    ${post.title}
                </h3>
                
                <p class="text-gray-600 mb-4 line-clamp-3">
                    ${post.content.substring(0, 200)}${post.content.length > 200 ? '...' : ''}
                </p>
                
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center space-x-2">
                            <button class="vote-btn upvote text-gray-400 hover:text-orange-400" data-post-id="${post.id}" data-vote="up">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <span class="font-mono text-sm font-medium text-gray-700 vote-count">${post.votes}</span>
                            <button class="vote-btn downvote text-gray-400 hover:text-red-400" data-post-id="${post.id}" data-vote="down">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l5.293-5.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        
                        <div class="flex items-center text-gray-500 text-sm">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                            <span class="font-mono">${post.comments}</span>
                        </div>
                    </div>
                    
                    <button class="read-more-btn text-orange-500 hover:text-orange-600 text-sm font-medium">
                        Read More →
                    </button>
                </div>
            </article>
        `;
    }
    
    initializePostInteractions() {
        // Vote buttons
        document.querySelectorAll('.vote-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const postId = parseInt(e.target.closest('.vote-btn').dataset.postId);
                const voteType = e.target.closest('.vote-btn').dataset.vote;
                this.handleVote(postId, voteType, e.target.closest('.vote-btn'));
            });
        });
        
        // Post click to view thread
        document.querySelectorAll('.post-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.vote-btn') && !e.target.closest('.read-more-btn')) {
                    const postId = parseInt(card.dataset.postId);
                    this.viewThread(postId);
                }
            });
        });
        
        // Read more buttons
        document.querySelectorAll('.read-more-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const postId = parseInt(e.target.closest('.post-card').dataset.postId);
                this.viewThread(postId);
            });
        });
    }
    
    handleVote(postId, voteType, buttonElement) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;
        
        // Remove existing vote classes
        const postCard = buttonElement.closest('.post-card');
        const upvoteBtn = postCard.querySelector('.upvote');
        const downvoteBtn = postCard.querySelector('.downvote');
        const voteCount = postCard.querySelector('.vote-count');
        
        upvoteBtn.classList.remove('upvoted');
        downvoteBtn.classList.remove('downvoted');
        
        // Apply vote
        if (voteType === 'up') {
            post.votes += 1;
            upvoteBtn.classList.add('upvoted');
            
            // Animate upvote
            anime({
                targets: upvoteBtn,
                scale: [1, 1.3, 1],
                duration: 300,
                easing: 'easeOutElastic(1, .8)'
            });
        } else {
            post.votes -= 1;
            downvoteBtn.classList.add('downvoted');
            
            // Animate downvote
            anime({
                targets: downvoteBtn,
                scale: [1, 1.3, 1],
                duration: 300,
                easing: 'easeOutElastic(1, .8)'
            });
        }
        
        // Update vote count display
        voteCount.textContent = post.votes;
        
        // Animate vote count change
        anime({
            targets: voteCount,
            scale: [1, 1.2, 1],
            duration: 300,
            easing: 'easeOutElastic(1, .8)'
        });
    }
    
    viewThread(postId) {
        // Store post ID and navigate to thread page
        localStorage.setItem('currentPostId', postId);
        window.location.href = 'thread.html';
    }
    
    getCategoryName(category) {
        const categoryNames = {
            'boss-decisions': 'Boss Decisions',
            'company-culture': 'Company Culture',
            'policy-fails': 'Policy Fails',
            'coworker-drama': 'Coworker Drama'
        };
        return categoryNames[category] || category;
    }
    
    getMoodEmoji(mood) {
        const moodEmojis = {
            'frustrated': '😤',
            'angry': '😡',
            'annoyed': '🙄',
            'amused': '😂',
            'concerned': '😟',
            'triumphant': '🎉'
        };
        return moodEmojis[mood] || '😐';
    }
    
    getTimeAgo(timestamp) {
        const now = Date.now();
        const diff = now - timestamp;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(hours / 24);
        
        if (days > 0) {
            return `${days}d ago`;
        } else if (hours > 0) {
            return `${hours}h ago`;
        } else {
            const minutes = Math.floor(diff / (1000 * 60));
            return `${minutes}m ago`;
        }
    }
}

// Initialize the forum when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WorkVentForum();
});

// Handle navigation to thread page
function navigateToThread(postId) {
    localStorage.setItem('currentPostId', postId);
    window.location.href = 'thread.html';
}