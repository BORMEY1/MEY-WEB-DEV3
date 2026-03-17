/**
 * Nexus Ultimate - Premium Interaction Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 0. Data Stream Background Initialization
    const streamContainer = document.getElementById('data-stream');
    if (streamContainer) {
        const columns = Math.floor(window.innerWidth / 30);
        for (let i = 0; i < columns; i++) {
            const col = document.createElement('div');
            col.className = 'data-column';
            col.style.left = (i * 30) + 'px';
            col.style.animationDuration = (Math.random() * 10 + 5) + 's';
            col.style.animationDelay = (Math.random() * 5) + 's';
            
            // Generate random binary data
            let binary = '';
            for (let j = 0; j < 50; j++) {
                binary += Math.round(Math.random());
            }
            col.innerText = binary;
            streamContainer.appendChild(col);
        }
    }

    // 0b. Floating Tech Icons
    const hero = document.querySelector('.hero');
    if (hero) {
        const icons = ['fa-microchip', 'fa-code', 'fa-network-wired', 'fa-shield-halved', 'fa-brain', 'fa-bolt-lightning'];
        for (let i = 0; i < 15; i++) {
            const icon = document.createElement('i');
            icon.className = `fas ${icons[Math.floor(Math.random() * icons.length)]} floating-icon`;
            icon.style.left = Math.random() * 100 + '%';
            icon.style.top = Math.random() * 100 + '%';
            icon.style.fontSize = (Math.random() * 20 + 10) + 'px';
            icon.style.opacity = (Math.random() * 0.1 + 0.05).toString();
            icon.style.animationDuration = (Math.random() * 20 + 20) + 's';
            icon.style.animationDelay = (Math.random() * -20) + 's';
            hero.appendChild(icon);
        }
    }

    // 0c. Neural Network Background Engine
    const canvas = document.getElementById('neural-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = 40;
        
        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 113, 227, 0.5)';
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) particles.push(new Particle());

        function animateNeural() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 113, 227, ${1 - dist / 150})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateNeural);
        }
        animateNeural();
    }

    // 1. Smooth Scroll Progress
    const scrollProgress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / height) * 100;
        if (scrollProgress) scrollProgress.style.width = progress + '%';
    });

    // 1b. Typewriter Effect for Hero
    const heroSpan = document.querySelector('h1 span');
    if (heroSpan) {
        const text = heroSpan.innerText;
        heroSpan.innerText = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                heroSpan.innerText += text.charAt(i);
                i++;
                setTimeout(type, 150);
            }
        }
        setTimeout(type, 1000);
    }

    // 2. Premium Custom Cursor & Trail Engine
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    const trailCount = 8;
    const trails = [];

    if (dot && outline) {
        // Create trail elements
        for (let i = 0; i < trailCount; i++) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            document.body.appendChild(trail);
            trails.push({
                el: trail,
                x: 0,
                y: 0,
                targetX: 0,
                targetY: 0,
                lerp: 0.15 - (i * 0.015) // Staggered following speed
            });
        }
        
        let mouseX = 0, mouseY = 0;
        let dotX = 0, dotY = 0;
        let outlineX = 0, outlineY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            // Dot movement
            dotX += (mouseX - dotX) * 0.2;
            dotY += (mouseY - dotY) * 0.2;
            dot.style.transform = `translate(${dotX}px, ${dotY}px)`;

            // Outline movement
            outlineX += (mouseX - outlineX) * 0.1;
            outlineY += (mouseY - outlineY) * 0.1;
            outline.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px)`;

            // Trail movement
            trails.forEach((trail, index) => {
                trail.x += (mouseX - trail.x) * trail.lerp;
                trail.y += (mouseY - trail.y) * trail.lerp;
                trail.el.style.transform = `translate(${trail.x - 3}px, ${trail.y - 3}px)`;
                trail.el.style.opacity = (1 - index / trailCount) * 0.4;
                trail.el.style.scale = (1 - index / trailCount);
            });

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Cursor Pro States (Enhanced)
        const interactiveElements = document.querySelectorAll('a, button, .showcase-item, .f-card, .magnetic, .skill-item');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                outline.style.width = '90px';
                outline.style.height = '90px';
                outline.style.top = '-25px';
                outline.style.left = '-25px';
                outline.style.background = 'rgba(0, 113, 227, 0.08)';
                outline.style.borderColor = 'rgba(0, 113, 227, 0.6)';
            });
            el.addEventListener('mouseleave', () => {
                outline.style.width = '40px';
                outline.style.height = '40px';
                outline.style.top = '0';
                outline.style.left = '0';
                outline.style.background = 'none';
                outline.style.borderColor = 'var(--primary)';
            });
        });
    }

    // 3. Magnetic Element Effect
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = `translate(0px, 0px)`;
        });
    });

    // 4. 3D Dashboard Tilt (Super Smooth Engine)
    const dashboard = document.querySelector('.dashboard-preview');
    const visualWrapper = document.querySelector('.mid-visual-wrap');
    let targetRotateX = 10;
    let targetRotateY = 0;
    let currentRotateX = 10;
    let currentRotateY = 0;

    if (visualWrapper && dashboard) {
        visualWrapper.addEventListener('mousemove', (e) => {
            const rect = visualWrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            targetRotateX = (centerY - y) / 15;
            targetRotateY = (x - centerX) / 20;
        });

        visualWrapper.addEventListener('mouseleave', () => {
            targetRotateX = 10;
            targetRotateY = 0;
        });

        function smoothTilt() {
            // LERP for buttery smooth movement
            currentRotateX += (targetRotateX - currentRotateX) * 0.05;
            currentRotateY += (targetRotateY - currentRotateY) * 0.05;
            dashboard.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
            requestAnimationFrame(smoothTilt);
        }
        smoothTilt();
    }

    // 5. Parallax Background Blobs
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        document.querySelectorAll('.blob').forEach((blob, index) => {
            const shift = (index + 1) * 40;
            blob.style.transform = `translate(${x * shift}px, ${y * shift}px)`;
        });
    });

    // 6. Navbar Scroll Logic
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (!navbar) return;
        if (window.scrollY > 60) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // 7. Intersection Observer for Reveals
    const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.id === 'features') animateDashboard();
                if (entry.target.id === 'metrics') animateMetrics();
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, #metrics').forEach(el => {
        revealObserver.observe(el);
    });

    // 7b. Metrics Counter Animation
    function animateMetrics() {
        const counters = document.querySelectorAll('.m-value');
        const speed = 200;

        counters.forEach(counter => {
            const animate = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = (count + inc).toFixed(target % 1 === 0 ? 0 : 1);
                    setTimeout(animate, 1);
                } else {
                    counter.innerText = target;
                }
            };
            animate();
        });
    }

    // 8. Dashboard Animation Core
    function animateDashboard() {
        const bars = document.querySelectorAll('.chart-container .bar');
        const codeElement = document.getElementById('live-code');
        const particleContainer = document.querySelector('.db-particles');
        
        if (!bars.length && !codeElement) return;

        const codeSnippets = [
            '<span class="purple">System</span>.init(<span class="cyan">"nexus_v4"</span>);',
            '<span class="green">Neural</span>.sync(<span class="yellow">"ACTIVE"</span>);',
            '<span class="purple">Kernel</span>.load(<span class="cyan">"modules/ai_pathing"</span>);',
            '<span class="green">Buffer</span>.alloc(<span class="yellow">1024</span>);',
            '<span class="purple">Core</span>.status(<span class="cyan">"OPTIMAL"</span>);',
            '<span class="green">Trace</span>.route(<span class="yellow">"node_77"</span>);',
            '<span class="purple">Encrypt</span>.aes(<span class="cyan">"256_GCM"</span>);',
            '<span class="green">Socket</span>.bind(<span class="yellow">port:8080</span>);'
        ];
        let snippetIndex = 0;

        // 8a. Data Particle Generation
        function createParticle() {
            if (!particleContainer) return;
            const p = document.createElement('div');
            p.className = 'particle';
            const size = Math.random() * 3 + 1;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            particleContainer.appendChild(p);

            p.animate([
                { opacity: 0, transform: 'translateY(0) scale(1)' },
                { opacity: 0.5, transform: 'translateY(-20px) scale(1.2)' },
                { opacity: 0, transform: 'translateY(-40px) scale(0)' }
            ], { duration: 2000 + Math.random() * 3000, easing: 'ease-out' });

            setTimeout(() => p.remove(), 5000);
        }
        const particleInterval = setInterval(createParticle, 300);

        // 8b. Randomized Telemetry Loop (Organic)
        const telemetryInterval = setInterval(() => {
            bars.forEach(bar => {
                const currentHeight = parseInt(bar.style.height) || 50;
                const change = Math.floor(Math.random() * 30) - 15;
                let newHeight = currentHeight + change;
                newHeight = Math.max(20, Math.min(95, newHeight));
                bar.style.height = newHeight + '%';
            });
        }, 800);

        // 8c. Cycling Code Snippets
        const snippetInterval = setInterval(() => {
            if (!codeElement) return;
            snippetIndex = (snippetIndex + 1) % codeSnippets.length;
            codeElement.classList.add('cyber-glitch');
            setTimeout(() => {
                codeElement.innerHTML = codeSnippets[snippetIndex];
                setTimeout(() => codeElement.classList.remove('cyber-glitch'), 300);
            }, 150);
        }, 4000);
    }

    // 9. Mobile Menu Overlay
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.mobile-overlay');
    
    if (hamburger && overlay) {
        hamburger.addEventListener('click', () => {
            const isOpen = overlay.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.style.overflow = isOpen ? 'hidden' : '';
            const lines = hamburger.querySelectorAll('div');
            if (isOpen && lines.length >= 2) {
                lines[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
                lines[1].style.transform = 'rotate(-45deg) translate(1px, -1px)';
            } else if (lines.length >= 2) {
                lines[0].style.transform = 'none';
                lines[1].style.transform = 'none';
            }
        });
    }

    // 10. Dynamic Project Loading
    const projectContainer = document.getElementById('project-container');
    if (projectContainer) {
        const projects = [
          {
            "id": "ai-tech",
            "title": "AI Tech Website",
            "description": "Premium AI-driven technology interface featuring real-time neural animations and futuristic glassmorphism components.",
            "path": "projects/ai-tech/index.html",
            "tag": "AI Tech",
            "stack": ["HTML5", "CSS3", "JavaScript", "GSAP"],
            "details": "This flagship project demonstrates a high-performance landing page for AI enterprises. It features a custom cursor engine, staggered reveal animations, and a fully responsive grid system designed for maximum engagement.",
            "steps": ["Architected the visual identity", "Implemented the GSAP-powered animation engine", "Developed the dynamic glassmorphism UI kit", "Optimized for sub-second load times"]
          },
          {
            "id": "3d-maze",
            "title": "3D Maze Escape",
            "description": "Procedurally generated 3D labyrinth with immersive spatial audio and advanced light-mapping technology.",
            "path": "projects/3d-maze/index.html",
            "tag": "Game Dev",
            "stack": ["WebGL", "Three.js", "Spatial Audio"],
            "details": "A technical masterpiece in browser-based gaming. The engine generates a unique maze every session, calculating complex collision physics and real-time shadows to create a truly atmospheric escape experience.",
            "steps": ["Engineered the recursive backtracking maze generator", "Integrated Three.js for hardware-accelerated rendering", "Developed first-person physics controller", "Implemented 3D spatial soundscapes"]
          },
          {
            "id": "fps-shooter",
            "title": "FPS Shooter 360",
            "description": "High-fidelity first-person shooter engine built for the web, featuring ray-casting and volumetric lighting.",
            "path": "projects/fps-shooter/index.html",
            "tag": "WebGL",
            "stack": ["HTML5", "GLSL", "CANNON.js"],
            "details": "Pushing the boundaries of WebGL, this project features a custom-built FPS engine with weapon sway, projectile physics, and dynamic lighting. Designed for high-performance browser environments.",
            "steps": ["Built the 3D ray-casting engine", "Implemented physics with CANNON.js", "Designed retro-futuristic voxel assets", "Optimized draw calls for 60FPS performance"]
          },
          {
            "id": "it-showcase",
            "title": "IT Project Showcase",
            "description": "Advanced multi-dimensional portfolio hub designed to visualize complex engineering project metrics and performance.",
            "path": "projects/it-showcase/index.html",
            "tag": "Showcase",
            "stack": ["React", "D3.js", "Tailwind"],
            "details": "A sophisticated dashboard system that aggregates engineering data and displays it through interactive D3.js visualizations. Features deep-filtering capabilities and real-time state management.",
            "steps": ["Designed the modular grid architecture", "Integrated D3.js for data visualization", "Developed the dynamic filtering engine", "Optimized for high-density data rendering"]
          },
          {
            "id": "nextgen-portal",
            "title": "NextGen IT Portal",
            "description": "Enterprise-grade infrastructure management portal with real-time system monitoring and neural pathing.",
            "path": "projects/nextgen-portal/index.html",
            "tag": "Infrastructure",
            "stack": ["Node.js", "Socket.io", "Chart.js"],
            "details": "A control center for modern IT infrastructure. It provides real-time telemetry, server health monitoring, and automated deployment logs through a secure, encrypted WebSocket connection.",
            "steps": ["Architected the real-time telemetry system", "Developed the WebSocket bridge for live data", "Implemented secure admin authentication", "Built the responsive monitoring dashboard"]
          },
          {
            "id": "payment-store",
            "title": "Payment Store",
            "description": "Ultra-secure e-commerce transaction platform with multi-layered encryption and seamless UX flow.",
            "path": "projects/payment-store/index.html",
            "tag": "E-Commerce",
            "stack": ["Stripe API", "React", "Node.js"],
            "details": "A high-conversion e-commerce template focusing on checkout security and performance. Features Stripe integration, cart persistence, and an adaptive layout for global commerce.",
            "steps": ["Integrated multi-provider payment gateways", "Developed the persistent cart logic", "Implemented end-to-end transaction security", "Optimized the mobile checkout funnel"]
          },
          {
            "id": "reseller",
            "title": "Reseller Platform",
            "description": "Automated B2B commerce ecosystem for digital product scaling and reseller management.",
            "path": "projects/reseller/index.html",
            "tag": "Commerce",
            "stack": ["Capacitor", "Express", "MongoDB"],
            "details": "A platform for managing reseller activities and automated product delivery.",
            "steps": ["Architected the distributed reseller database", "Developed the automated license engine", "Built the Capacitor-powered mobile interface", "Integrated real-time sales analytics"]
          },
          {
            "id": "seller-payment",
            "title": "Seller Payment Site",
            "description": "Financial transparency dashboard for independent sellers with deep-dive transaction analytics.",
            "path": "projects/seller-payment/index.html",
            "tag": "Finance",
            "stack": ["React", "Redux", "Python"],
            "details": "Dedicated to financial clarity, this site allows sellers to track every cent. It features multi-currency support, tax reporting, and instant withdrawal capabilities through a streamlined UI.",
            "steps": ["Developed the transaction reconciliation engine", "Implemented multi-currency conversion APIs", "Built the interactive financial reporting tools", "Optimized data security protocols"]
          },
          {
            "id": "tech-terminal",
            "title": "Tech Terminal",
            "description": "Command-line interface for system automation and neural monitoring, built for the modern developer.",
            "path": "projects/tech-terminal/index.js",
            "tag": "Utility",
            "stack": ["Node.js", "Chalk", "Commander"],
            "details": "A powerful CLI tool that simplifies system diagnostics and automation tasks. It provides a beautiful, color-coded terminal interface for monitoring server health and deployment pipelines.",
            "steps": ["Developed the core CLI framework", "Implemented system health probes", "Added beautiful terminal styling with Chalk", "Built the extensible plugin architecture"]
          },
          {
            "id": "themed-dashboard",
            "title": "Themed Dashboard",
            "description": "Dynamic UI ecosystem with real-time theme switching and modular widget architecture.",
            "path": "projects/themed-dashboard/index.html",
            "tag": "UI/UX",
            "stack": ["CSS Variables", "JS Modules", "HTML5"],
            "details": "A showcase of modern CSS capabilities. This dashboard allows users to customize their entire environment with zero-latency theme switching, utilizing CSS custom properties and persistent storage.",
            "steps": ["Engineered the real-time theme engine", "Developed the modular widget system", "Implemented persistent user preferences", "Optimized layout for varying viewports"]
          },
          {
            "id": "vite-project",
            "title": "Vite 8 Project",
            "description": "Next-generation React framework starter kit optimized for extreme performance and developer velocity.",
            "path": "projects/vite-project/index.html",
            "tag": "React",
            "stack": ["React 19", "Vite 8", "Tailwind 4"],
            "details": "The ultimate starter kit for high-performance React applications. Featuring the latest Vite 8 engine and Tailwind 4, it provides sub-millisecond HMR and highly optimized production builds.",
            "steps": ["Configured the Vite 8 build pipeline", "Integrated Tailwind 4 with JIT engine", "Implemented best-practice React patterns", "Optimized for 100/100 Lighthouse scores"]
          },
          {
            "id": "chat-portfolio",
            "title": "Chat Portfolio",
            "description": "Conversational AI portfolio interface that allows users to interact with my skills through a neural chat engine.",
            "path": "projects/chat-portfolio/index.html",
            "tag": "Portfolio",
            "stack": ["AI Integration", "Socket.io", "CSS3"],
            "details": "Moving beyond static portfolios, this interactive chat app uses AI logic to answer questions about my experience, skills, and projects in real-time. A truly unique recruitment tool.",
            "steps": ["Developed the conversational UI/UX", "Implemented the logic for AI-driven responses", "Built the real-time message handler", "Integrated skill-visualization modules"]
          },
          {
            "id": "profile-card",
            "title": "Profile Card",
            "description": "Ultra-clean profile visualization with premium glassmorphism effects and interactive hover states.",
            "path": "projects/profile-card/index.html",
            "tag": "Design",
            "stack": ["HTML5", "CSS3", "SVG"],
            "details": "A masterclass in modern design. This profile card utilizes advanced backdrop filters, subtle gradients, and interactive SVG elements to create a premium digital business card experience.",
            "steps": ["Crafted the glassmorphism visual design", "Implemented advanced CSS hover interactions", "Optimized for pixel-perfect mobile display", "Integrated smooth entrance animations"]
          },
          {
            "id": "showcase-site",
            "title": "Project Showcase Site",
            "description": "Multi-page engineering portal for visualizing large-scale project ecosystems and technical specifications.",
            "path": "projects/showcase-site/index.html",
            "tag": "Web App",
            "stack": ["Python", "JavaScript", "SEO"],
            "details": "A comprehensive portal for professional engineering teams. Features dynamic project loading, deep-link navigation, and advanced SEO optimization to ensure maximum reach for technical content.",
            "steps": ["Architected the multi-page portal system", "Developed the dynamic project loader", "Implemented SEO and meta-tag management", "Built the responsive project-detail template"]
          }
        ];

        const images = [
            'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1551288049-bbbda536ad89?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200'
        ];

        projects.forEach((project, index) => {
            const projectElement = document.createElement('div');
            projectElement.className = 'showcase-item glass reveal-up magnetic holographic gradient-border';
            projectElement.style.transitionDelay = `${(index % 3) * 0.1}s`;
            
            const imageUrl = images[index % images.length];

            projectElement.innerHTML = `
                <div class="scan-line"></div>
                <img src="${imageUrl}" alt="${project.title}">
                <div class="item-overlay-pro">
                    <span class="p-tag">${project.tag}</span>
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                    <a href="project-detail.html?id=${project.id}" class="btn-view-project holographic">View Project Details</a>
                </div>
            `;
            projectContainer.appendChild(projectElement);
            
            // Observe the newly created element for reveal animations
            revealObserver.observe(projectElement);
            
            // Add magnetic effect to new elements
            projectElement.addEventListener('mousemove', (e) => {
                const rect = projectElement.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                projectElement.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            projectElement.addEventListener('mouseleave', () => {
                projectElement.style.transform = `translate(0px, 0px)`;
            });
        });
    }

    // 11. Smooth Scroll & Auto-Pilot Engine
    let isAutoPilot = false;
    let autoScrollSpeed = 1; // Speed of auto-scroll
    const apToggle = document.getElementById('ap-toggle');
    const apStatus = apToggle?.querySelector('.ap-status');

    if (apToggle) {
        apToggle.addEventListener('click', () => {
            isAutoPilot = !isAutoPilot;
            if (apStatus) apStatus.classList.toggle('active', isAutoPilot);
            if (isAutoPilot) startAutoPilot();
        });
    }

    function startAutoPilot() {
        if (!isAutoPilot) return;
        window.scrollBy({ top: autoScrollSpeed, behavior: 'auto' });
        
        // Stop if reached bottom
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
            isAutoPilot = false;
            if (apStatus) apStatus.classList.remove('active');
            return;
        }
        
        requestAnimationFrame(startAutoPilot);
    }

    // Stop Auto-Pilot on manual scroll/touch
    window.addEventListener('wheel', () => {
        if (isAutoPilot) {
            isAutoPilot = false;
            if (apStatus) apStatus.classList.remove('active');
        }
    }, { passive: true });

    window.addEventListener('touchstart', () => {
        if (isAutoPilot) {
            isAutoPilot = false;
            if (apStatus) apStatus.classList.remove('active');
        }
    }, { passive: true });

    // Smooth Scroll Implementation (Internal Links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
