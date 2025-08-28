// Automotive Product Data Configuration - Based on Bock Space Products with Automotive Themes
const productData = {
  'inertia-nano': {
    // ============= BASIC METADATA =============
    metadata: {
      name: 'Inertia Nano EV',
      subtitle: 'Revolutionary Nano EV Platform',
      description: 'Compact electric vehicle platform designed for urban micro-mobility, autonomous delivery systems, and last-mile transportation with advanced miniaturized automotive systems and zero-emission electric capabilities.',
      icon: 'ri-car-line',
      category: 'Nano EV Systems',
      price: '₹2,50,00,000',
      rating: 4.9,
      availability: 'Available for 2025 deployments'
    },

    // ============= CONTENT SECTIONS FOR PRODUCT PAGE =============
    contentSections: [
      {
        title: 'Electric Nano Vehicle Technology',
        content: 'Our Inertia Nano EV represents breakthrough miniaturization technology applied to electric vehicles, packing advanced automotive systems into micro-mobility form factors. Built for urban environments and delivery applications, this platform delivers exceptional performance with minimal footprint and zero emissions.',
        type: 'content-image',
        image: 'assets/automotive_middle.png'
      },
      {
        title: 'Nano EV Operations',
        content: 'Discover how Inertia Nano EV enables efficient electric vehicle operations through innovative compact design and autonomous navigation. This micro-vehicle platform provides reliable transportation for last-mile delivery, urban shuttles, and personal mobility solutions with electric propulsion.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        title: 'EV System Integration Testing',
        content: 'Watch comprehensive electric vehicle testing and integration processes. This demonstration covers EV system validation, urban safety protocols, electric motor performance, and autonomous operations for micro-mobility applications.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/9bZkp7q19f0'
      },
      {
        title: 'Nano EV Technical Specifications',
        content: 'Comprehensive technical specifications and operational guidelines for Inertia Nano EV. Access detailed documentation covering electric vehicle architecture, battery systems, autonomous navigation, and safety protocols for urban operations.',
        type: 'content-document',
        document: 'assets/documents/inertia-nano-ev-technical-specs.pdf'
      },
      {
        title: 'EV Deployment Guide',
        content: 'Complete electric vehicle deployment documentation including safety regulations, route optimization, battery charging networks, and autonomous operation procedures for urban environments.',
        type: 'content-document',
        document: 'assets/documents/inertia-nano-ev-deployment-guide.pdf'
      },
      {
        title: 'EV Safety & Compliance Standards',
        content: 'Comprehensive safety protocols for electric vehicle operations. Includes urban safety standards, pedestrian protection systems, regulatory compliance, and autonomous vehicle safety frameworks for EV applications.',
        type: 'content-document',
        document: 'assets/documents/inertia-nano-ev-safety-compliance.pdf'
      },
      {
        title: 'Electric Urban Mobility Revolution',
        content: 'Inertia Nano EV is revolutionizing urban transportation through compact, autonomous electric vehicles. Our platform enables efficient last-mile delivery, reduces urban congestion, and provides sustainable mobility solutions while maintaining the highest safety standards.',
        type: 'content-only'
      }
    ],

    // ============= TECHNICAL SPECIFICATIONS =============
    specifications: {
      'Physical Characteristics': {
        'EV Form Factor': '2-4 passenger nano-vehicle (2×2×3 meters)',
        'Weight': '100-300kg depending on configuration',
        'Electric Motor': '5-15kW electric drive system',
        'Battery Capacity': 'Lithium-ion with 80-120km range'
      },
      'Performance': {
        'Top Speed': '25-45km/h urban speed limit',
        'Range': '80-120km per charge on highway',
        'Charging Time': '1-3 hours for full charge',
        'Autonomy Level': 'Level 3-4 autonomous operation'
      },
      'Environmental': {
        'Operating Temperature': '-20°C to +50°C urban conditions',
        'IP Rating': 'IP66 water and dust protection',
        'Emissions': 'Zero local emissions',
        'Noise Level': '<45dB at cruise speed'
      }
    },

    // ============= MEDIA ASSETS =============
    media: {
      hero: {
        type: 'image',
        src: 'assets/automotive_middle.png',
        poster: 'assets/images/inertia-nano-ev-hero.jpg',
        alt: 'Inertia Nano EV Micro-Vehicle Platform'
      },
      gallery: [
        {
          type: 'image',
          src: 'assets/img/nano-ev-compact.jpg',
          alt: 'Compact EV Architecture',
          caption: 'Advanced compact electric vehicle design for urban mobility'
        },
        {
          type: 'image',
          src: 'assets/img/nano-ev-testing.jpg',
          alt: 'EV Testing Process',
          caption: 'Rigorous testing protocols for electric vehicle qualification'
        },
        {
          type: 'image',
          src: 'assets/img/nano-ev-delivery.jpg',
          alt: 'Delivery EV System',
          caption: 'Autonomous delivery electric vehicles and micro-mobility solutions'
        }
      ]
    },

    // ============= FEATURES =============
    features: [
      {
        icon: 'ri-car-line',
        title: 'Electric Vehicle Systems',
        description: 'Advanced electric vehicle technology for maximum mobility in urban environments',
        benefits: ['Electric drive system', 'Silent operation', 'Zero emissions'],
        category: 'Drive System'
      },
      {
        icon: 'ri-battery-charge-line',
        title: 'Smart Battery Management',
        description: 'Intelligent battery management systems for extended operational range',
        benefits: ['Range optimization', '3-year battery life', 'Fast charging capability']
      },
      {
        icon: 'ri-brain-line',
        title: 'Autonomous Navigation',
        description: 'Advanced AI-powered autonomous navigation systems for urban environments',
        benefits: ['Urban route optimization', 'Pedestrian safety', 'Traffic adaptation']
      },
      {
        icon: 'ri-wifi-line',
        title: 'V2X Connectivity',
        description: 'Vehicle-to-infrastructure and vehicle-to-vehicle connectivity for smart cities',
        benefits: ['Real-time traffic updates', 'Infrastructure coordination', 'Smart parking']
      },
      {
        icon: 'ri-shield-check-line',
        title: 'Safety Systems',
        description: 'Multi-layered safety features for electric vehicle operations',
        benefits: ['Pedestrian detection', 'Emergency protocols', 'Passive safety features']
      },
      {
        icon: 'ri-leaf-line',
        title: 'Sustainable Design',
        description: 'Eco-friendly construction with recyclable materials and systems',
        benefits: ['Zero emissions', 'Recyclable components', 'Urban sustainability goals']
      }
    ],

    // ============= APPLICATIONS =============
    applications: [
      {
        title: 'Electric Delivery',
        description: 'Autonomous electric delivery vehicles for last-mile package and food delivery',
        icon: 'ri-truck-line',
        benefits: ['24/7 deliveries', 'Cost reduction', 'Zero-emission transport']
      },
      {
        title: 'Personal Electric Mobility',
        description: 'Compact personal electric vehicles for urban commuting and short trips',
        icon: 'ri-car-line',
        benefits: ['Traffic reduction', 'Parking optimization', 'Convenient transport']
      },
      {
        title: 'Campus EV Transportation',
        description: 'Safe, autonomous electric shuttles for university and corporate campuses',
        icon: 'ri-building-line',
        benefits: ['Student safety', 'Timely transport', 'Weather independence']
      },
      {
        title: 'Medical EV Transport',
        description: 'Specialized electric medical transport vehicles with patient monitoring',
        icon: 'ri-medicine-bottle-line',
        benefits: ['Medical monitoring', 'Patient privacy', 'Emergency response capabilities']
      }
    ],

    // ============= PRICING PACKAGES =============
    packages: [
      {
        name: 'Personal EV Unit',
        price: '₹2,50,00,000',
        duration: 'Including setup and training',
        coverage: 'Single electric vehicle with charging infrastructure',
        features: [
          'Compact electric vehicle',
          'Level 3 charging station',
          'Mobile companion app',
          'EV safety training program',
          '1-year maintenance plan'
        ],
        recommended: false
      },
      {
        name: 'Delivery EV Fleet',
        price: '₹25,00,00,000',
        duration: '12-month fleet operation',
        coverage: '10-20 vehicle electric fleet with operations center',
        features: [
          'Fleet of autonomous EVs',
          'Operations control center',
          'Route optimization software',
          'Dedicated charging network',
          'Fleet management system',
          '24/7 technical EV support'
        ],
        recommended: true
      },
      {
        name: 'EV City Infrastructure',
        price: 'Custom Pricing',
        duration: 'Multi-year deployment',
        coverage: 'Complete electric urban transportation network',
        features: [
          'Large-scale EV fleet',
          'Urban infrastructure integration',
          'Central electric operations center',
          'Smart city EV coordination',
          'Regulatory EV compliance assistance',
          'Dedicated engineering team',
          'Continuous EV service updates'
        ],
        recommended: false
      }
    ]
  },

  'inertia': {
    name: 'Inertia EV',
    subtitle: 'Mid-Range Electric Vehicle Platform',
    description: 'Advanced mid-range electric vehicle system with enhanced communication capabilities, intelligent battery management, and extended driving range for comprehensive automotive applications and long-distance transportation.',
    icon: 'ri-car-line',
    category: 'Electric Vehicle Systems',
    price: 'Starting at ₹25,00,00,000',
    rating: 4.9,
    availability: 'Available for 2025 launches',

    contentSections: [
      {
        title: 'Advanced Electric Vehicle Technology',
        content: 'Our Inertia EV represents cutting-edge electric vehicle technology, incorporating advanced battery systems and intelligent power management. With robust engineering and comprehensive testing protocols, this platform delivers exceptional performance for extended automotive missions.',
        type: 'content-image',
        image: 'assets/automotive_middle.png'
      },
      {
        title: 'Extended Vehicle Operations',
        content: 'Discover how Inertia EV enables extended automotive missions through intelligent battery management and enhanced electric systems. This comprehensive system provides reliable operation with extended range and intelligent vehicle management.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/L_jWHffIx5E'
      },
      {
        title: 'EV System Integration',
        content: 'Watch comprehensive electric vehicle testing procedures and system integration processes for Inertia EV. This detailed video demonstrates our advanced testing protocols, thermal management testing, and performance validation for extended mission reliability.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/2g811Eo7K8U'
      },
      {
        title: 'EV Technical Documentation',
        content: 'Comprehensive technical specifications and operational guidelines for Inertia EV system. Access detailed documentation covering electric architecture, battery management, autonomous integration, and operational procedures.',
        type: 'content-document',
        document: 'assets/documents/inertia-ev-technical-manual.pdf'
      },
      {
        title: 'Extended Mission Planning',
        content: 'Complete mission planning documentation for Inertia EV including range calculations, charging strategies, autonomous operation procedures, and long-term vehicle operational procedures for extended missions.',
        type: 'content-document',
        document: 'assets/documents/inertia-ev-mission-operations.pdf'
      },
      {
        title: 'Vehicle Safety Protocols',
        content: 'Comprehensive safety protocols and regulatory compliance for Inertia EV operations. Includes vehicle safety coordination, collision avoidance procedures, automotive safety standards, and end-of-life disposal planning.',
        type: 'content-document',
        document: 'assets/documents/inertia-ev-safety-protocols.pdf'
      },
      {
        title: 'Electric Vehicle Communication Revolution',
        content: 'Inertia EV is transforming automotive transportation through advanced electric systems and intelligent management. Our platform enables reliable, long-duration missions that provide essential automotive services while advancing EV innovation.',
        type: 'content-only'
      }
    ],

    features: [
      {
        icon: 'ri-radar-line',
        title: 'Advanced Payloads',
        description: 'High-performance sensors and communication equipment',
        benefits: ['Multi-spectral imaging', 'High-resolution cameras', 'Scientific instruments']
      },
      {
        icon: 'ri-rocket-line',
        title: 'Propulsion System',
        description: 'Electric propulsion for orbital maneuvers and station-keeping',
        benefits: ['Orbit maintenance', 'Collision avoidance', 'End-of-life disposal']
      },
      {
        icon: 'ri-time-line',
        title: 'Extended Mission Life',
        description: 'Designed for 8-10 year operational lifetime in automotive applications',
        benefits: ['Long-term services', 'Reduced replacement costs', 'Stable operations']
      }
    ]
  },

  'inertia-mega': {
    name: 'Inertia Mega EV',
    subtitle: 'Heavy-Duty Electric Vehicle Platform',
    description: 'Heavy-duty electric vehicle platform with advanced propulsion systems, autonomous driving, and comprehensive commercial vehicle capabilities for demanding transportation missions beyond standard automotive applications.',
    icon: 'ri-truck-line',
    category: 'Heavy-Duty Electric Vehicles',
    price: 'Starting at ₹200,00,00,000',
    rating: 4.7,
    availability: 'Development phase - 2026 availability',

    contentSections: [
      {
        title: 'Heavy-Duty Electric Vehicle Technology',
        content: 'Our Inertia Mega EV represents heavy-duty electric vehicle engineering, incorporating massive electric systems and autonomous capabilities. With cutting-edge technology and rigorous validation, this platform enables demanding commercial automotive applications.',
        type: 'content-image',
        image: 'assets/automotive_middle.png'
      },
      {
        title: 'Commercial EV Operations',
        content: 'Discover how Inertia Mega EV enables breakthrough commercial vehicle performance through electric propulsion and autonomous management. This system delivers reliable operation for commercial transportation and specialized vehicles.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/B1R3dTdcpSU'
      },
      {
        title: 'Heavy EV Integration',
        content: 'Watch comprehensive heavy electric vehicle testing procedures and system validation. This detailed demonstration covers powertrain testing, autonomous fleet coordination, and heavy vehicle performance validation.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/FzCubvpzf84'
      },
      {
        title: 'Heavy EV Technical Manual',
        content: 'Comprehensive technical specifications for Inertia Mega EV heavy vehicle systems. Access detailed documentation covering electric architecture, heavy-duty autonomous integration, fleet management, and specialized vehicle operations.',
        type: 'content-document',
        document: 'assets/documents/inertia-mega-ev-technical-manual.pdf'
      },
      {
        title: 'Commercial Fleet Implementation',
        content: 'Complete fleet implementation planning including heavy vehicle integration, autonomous coordination, route optimization, and comprehensive commercial operational procedures for transportation.',
        type: 'content-document',
        document: 'assets/documents/inertia-mega-ev-fleet-implementation.pdf'
      },
      {
        title: 'Heavy Vehicle Safety Standards',
        content: 'Comprehensive safety protocols for heavy electric vehicle operations. Includes commercial vehicle safety standards, heavy-equipment regulations, autonomous operations, and industry compliance frameworks.',
        type: 'content-document',
        document: 'assets/documents/inertia-mega-ev-safety-standards.pdf'
      },
      {
        title: 'Commercial Electric Transportation Revolution',
        content: 'Inertia Mega EV is transforming commercial transportation through heavy-duty electric systems and autonomous management. Our platform enables sustainable commercial operations while advancing automotive technology.',
        type: 'content-only'
      }
    ],

    features: [
      {
        icon: 'ri-dataset-2-line',
        title: 'Large Payload Capacity',
        description: 'Support for heavy scientific instruments and equipment',
        benefits: ['Multiple payloads', 'Research platforms', 'Space telescopes']
      },
      {
        icon: 'ri-truck-line',
        title: 'Commercial Vehicle Systems',
        description: 'Specialized systems for commercial and heavy-duty applications',
        benefits: ['Heavy load handling', 'Commercial integration', 'Industrial transport']
      },
      {
        icon: 'ri-shield-star-line',
        title: 'Enhanced Safety Features',
        description: 'Advanced safety systems optimized for heavy vehicle operations',
        benefits: ['Heavy vehicle safety', 'Cargo protection', 'Emergency protocols']
      }
    ]
  },

  'momentum': {
    name: 'Momentum Performance EV',
    subtitle: 'High-Performance Electric Propulsion',
    description: 'Advanced electric propulsion system designed for efficient vehicle operations, optimum performance, and intelligent power management for high-performance automotive applications.',
    icon: 'ri-rocket-line',
    category: 'Electric Performance Systems',
    price: 'Starting at ₹50,00,00,000',
    rating: 4.8,
    availability: 'Available for integration',

    contentSections: [
      {
        title: 'High-Performance Electric Propulsion Technology',
        content: 'Our Momentum Performance EV represents revolutionary electric propulsion technology, featuring high-efficiency motors and intelligent performance management. With precision engineering and extensive validation, this system delivers exceptional automotive performance.',
        type: 'content-image',
        image: 'assets/automotive_middle.png'
      },
      {
        title: 'Performance EV Operations',
        content: 'Discover how Momentum enables efficient automotive performance through advanced electric propulsion and intelligent systems. This comprehensive system provides variable thrust capabilities and efficiency optimization.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/wbSwFU6tY1c'
      },
      {
        title: 'Electric Performance Testing',
        content: 'Watch comprehensive electric propulsion testing procedures and engine validation for Momentum. This detailed demonstration covers electric powertrain efficiency, performance benchmarking, and validation for automotive applications.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/VBlIvghQTlI'
      },
      {
        title: 'Performance EV Technical Manual',
        content: 'Comprehensive technical specifications for Momentum electric propulsion system. Access detailed documentation covering electric motor performance, power management systems, efficiency optimization, and integration procedures.',
        type: 'content-document',
        document: 'assets/documents/momentum-ev-technical-manual.pdf'
      },
      {
        title: 'Vehicle Integration Guide',
        content: 'Complete integration documentation for Momentum propulsion system including vehicle integration procedures, performance optimization techniques, battery management, and operational guidelines.',
        type: 'content-document',
        document: 'assets/documents/momentum-ev-integration-guide.pdf'
      },
      {
        title: 'Performance EV Safety Protocols',
        content: 'Comprehensive safety protocols for high-performance electric vehicle operations. Includes propulsion safety systems, emergency shutdown protocols, electrical safety, and high-speed operation procedures.',
        type: 'content-document',
        document: 'assets/documents/momentum-ev-safety-protocols.pdf'
      },
      {
        title: 'Electric Propulsion Innovation Leadership',
        content: 'Momentum Performance EV is revolutionizing automotive propulsion through advanced electric systems and efficiency innovations. Our electric propulsion system enables cost-effective automotive operations while maximizing performance and sustainability.',
        type: 'content-only'
      }
    ],

    features: [
      {
        icon: 'ri-speed-line',
        title: 'Variable Power Delivery',
        description: 'Adjustable performance levels for optimal power delivery and efficiency',
        benefits: ['Performance optimization', 'Efficiency balance', 'Adaptive acceleration']
      },
      {
        icon: 'ri-rocket-line',
        title: 'Electric Performance Technology',
        description: 'Intelligent electric propulsion with instant torque delivery',
        benefits: ['Instant acceleration', 'Precise power control', 'High efficiency']
      },
      {
        icon: 'ri-repeat-line',
        title: 'Continuous Performance Optimization',
        description: 'AI-powered performance adaptation for various driving conditions',
        benefits: ['Adaptive performance', 'Efficiency optimization', 'Driving condition adaptation']
      }
    ]
  },

  'zeyon-x90': {
    name: 'Zeyon X90 Autonomous',
    subtitle: 'AI-Powered Autonomous Driving System',
    description: 'Revolutionary navigation and guidance system with AI-powered autonomous capabilities for precision vehicle maneuvering, autonomous operations, and formation driving in automotive applications.',
    icon: 'ri-eye-line',
    category: 'Autonomous Driving & Navigation',
    price: 'Starting at ₹15,00,00,000',
    rating: 4.9,
    availability: 'Available for immediate integration',

    contentSections: [
      {
        title: 'AI Autonomous Driving Technology',
        content: 'Our Zeyon X90 Autonomous represents breakthrough AI-powered automotive driving, incorporating machine learning algorithms and autonomous decision-making capabilities. With advanced sensors and real-time processing, this system delivers precision autonomous driving for complex automotive missions.',
        type: 'content-image',
        image: 'assets/automotive_middle.png'
      },
      {
        title: 'Autonomous Vehicle Operations',
        content: 'Discover how Zeyon X90 enables autonomous automotive navigation through advanced AI algorithms and precision guidance. This comprehensive system provides real-time autonomous decision making, hazard avoidance, and automotive autonomous operations.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/RK8xHq6dfAo'
      },
      {
        title: 'AI Autonomous Testing & Validation',
        content: 'Watch comprehensive AI autonomous testing procedures and system validation for Zeyon X90. This detailed demonstration covers AI testing protocols, simulation validation, automotive testing, and autonomous performance verification.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/hFJHtdIGOJM'
      },
      {
        title: 'Autonomous Driving Technical Manual',
        content: 'Comprehensive technical specifications for Zeyon X90 AI autonomous system. Access detailed documentation covering AI algorithms, sensor integration, autonomous decision-making processes, and automotive integration procedures.',
        type: 'content-document',
        document: 'assets/documents/zeyon-x90-autonomous-manual.pdf'
      },
      {
        title: 'Autonomous Mission Planning',
        content: 'Complete autonomous mission planning documentation for Zeyon X90 including AI behavior configuration, mission scenario planning, autonomous decision trees, and operational procedures for autonomous automotive missions.',
        type: 'content-document',
        document: 'assets/documents/zeyon-x90-mission-planning.pdf'
      },
      {
        title: 'AI Safety & Reliability',
        content: 'Comprehensive safety protocols for Zeyon X90 AI autonomous operations. Includes AI failsafe mechanisms, human oversight procedures, autonomous system validation, and safety-critical autonomous operation protocols.',
        type: 'content-document',
        document: 'assets/documents/zeyon-x90-safety-framework.pdf'
      },
      {
        title: 'AI Autonomous Driving Revolution',
        content: 'Zeyon X90 is transforming automotive transportation through artificial intelligence and autonomous systems. Our AI-powered platform enables unprecedented precision in vehicle maneuvering, reducing human workload while increasing automotive mission success rates and operational efficiency.',
        type: 'content-only'
      }
    ],

    features: [
      {
        icon: 'ri-brain-line',
        title: 'AI-Powered Autonomy',
        description: 'Machine learning algorithms for autonomous automotive decision making',
        benefits: ['Autonomous driving', 'Intelligent navigation', 'Situation awareness']
      },
      {
        icon: 'ri-crosshair-line',
        title: 'Precision Maneuvering',
        description: 'High-precision autonomous driving with centimeter-level accuracy',
        benefits: ['Precise vehicle control', 'Hazard avoidance', 'Emergency response']
      },
      {
        icon: 'ri-group-line',
        title: 'Multi-Vehicle Coordination',
        description: 'Coordinated autonomous systems across vehicle fleets',
        benefits: ['Fleet coordination', 'Traffic optimization', 'Automated formation']
      }
    ]
  },

  'launch-vehicle': {
    name: 'Launch Vehicle EV',
    subtitle: 'Electric Vehicle Launch Platform',
    description: 'Next-generation electric vehicle launch platform capable of scaling production operations efficiently with automated systems and intelligent manufacturing for modern automotive facilities.',
    icon: 'ri-rocket-2-fill',
    category: 'EV Launch Systems',
    price: 'Launch Services: ₹75,00,00,000 per facility',
    rating: 4.6,
    availability: 'First launch scheduled for 2026',

    contentSections: [
      {
        title: 'Electric Vehicle Launch Technology',
        content: 'Our Launch Vehicle EV represents next-generation electric vehicle launch technology, featuring intelligent production systems and automated factory integration. With innovative engineering and comprehensive validation, this platform enables scalable and efficient EV production operations.',
        type: 'content-image',
        image: 'assets/automotive_middle.png'
      },
      {
        title: 'Launch Operations & Production',
        content: 'Discover how Launch Vehicle EV enables cost-effective electric vehicle production through reusable technology and precision manufacturing systems. This comprehensive system provides reliable operation with rapid production capabilities.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/u0-pfzKbh2k'
      },
      {
        title: 'Vehicle Launch Validation',
        content: 'Watch comprehensive electric vehicle production testing procedures and system validation. This detailed video demonstrates rigorous production testing protocols, quality assurance systems, and operational validation for automotive manufacturing.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/WxH4CAlhtiQ'
      },
      {
        title: 'Launch Vehicle EV Technical Manual',
        content: 'Comprehensive technical specifications for Launch Vehicle EV production systems. Access detailed documentation covering EV production architecture, automation processes, quality systems, and operational procedures.',
        type: 'content-document',
        document: 'assets/documents/launch-vehicle-ev-technical-manual.pdf'
      },
      {
        title: 'Production Implementation Planning',
        content: 'Complete EV production implementation planning including facility design, manufacturing optimization, process engineering, and operational procedures for automotive manufacturing.',
        type: 'content-document',
        document: 'assets/documents/launch-vehicle-ev-facility-planning.pdf'
      },
      {
        title: 'Manufacturing Safety Standards',
        content: 'Comprehensive safety protocols for electric vehicle manufacturing operations. Includes production safety standards, equipment safety systems, operator safety protocols, and regulatory compliance for manufacturing facilities.',
        type: 'content-document',
        document: 'assets/documents/launch-vehicle-ev-safety-standards.pdf'
      },
      {
        title: 'Electric Vehicle Production Innovation',
        content: 'Launch Vehicle EV is transforming electric vehicle manufacturing through intelligent production systems and automated efficiency. This platform enables scalable EV production while advancing automotive manufacturing innovation.',
        type: 'content-only'
      }
    ],

    features: [
      {
        icon: 'ri-recycle-line',
        title: 'Scalable Production',
        description: 'Adaptable manufacturing capabilities for electric vehicle scaling',
        benefits: ['Volume production', 'Efficient operations', 'Cost reduction']
      },
      {
        icon: 'ri-weight-line',
        title: 'Flexible EV Manufacturing',
        description: 'Adaptable production capabilities for various EV models and volumes',
        benefits: ['Model flexibility', 'Volume scalability', 'Efficient operations']
      },
      {
        icon: 'ri-leaf-line',
        title: 'Sustainable EV Production',
        description: 'Eco-conscious manufacturing practices with reduced environmental impact',
        benefits: ['Energy efficiency', 'Clean production', 'Sustainable operations']
      }
    ]
  }
};

// Export the product data
if (typeof module !== 'undefined' && module.exports) {
  module.exports = productData;
}

