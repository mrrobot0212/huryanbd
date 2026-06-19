// ১৫টি এক্সক্লুসিভ লাক্সারি পারফিউম ডেটাবেস (গ্যালারি ইমেজসহ)
const productsDatabase = [
    { 
        id: 1, 
        name: "Black Velvet Luxury EDP", 
        price: 3200, 
        category: "perfume", 
        notes: "Velvet Rose, Black Currant, Rich Amber, Oud", 
        images: [
            "https://perfumepalace.in/cdn/shop/files/1_74eb73b0-0b61-455b-bbcb-b166ca3ffb2d.png?v=1707221295",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=80"
        ], 
        image: "https://perfumepalace.in/cdn/shop/files/1_74eb73b0-0b61-455b-bbcb-b166ca3ffb2d.png?v=1707221295",
        badge: "Premium Elite", 
        longevity: "10-12 Hours",
        size: "100ml",
        desc: "ব্ল্যাক ভেলভেট তার স্মুথ, ডার্ক এবং রয়্যাল ভেলভেটি রোজ টেক্সচারের জন্য পরিচিত। যেকোনো জমকালো পার্টি বা রাতের অনুষ্ঠানের জন্য এটি এক জাদুকরী ও আকর্ষণীয় সুবাস।" 
    },
    { 
        id: 2, 
        name: "French Avenue Purple 100ml", 
        price: 4200, 
        category: "perfume", 
        notes: "Candied Fruits, Heliotrope, White Musk, Patchouli", 
        images: [
            "https://perfumepalace.in/cdn/shop/files/FrenchAvenuePurpleEDP100ml.png?v=1712836290",
            "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=80"
        ],
        image: "https://perfumepalace.in/cdn/shop/files/FrenchAvenuePurpleEDP100ml.png?v=1712836290",
        badge: "French Touch", 
        longevity: "8-10 Hours",
        size: "100ml",
        desc: "ফ্রেঞ্চ অ্যাভিনিউ পার্পল একটি হাই-ক্লাস ফ্রুটি-ফ্লোরাল মাস্টারপিস। মিষ্টি ক্যান্ডিড ফ্রুটস এবং প্রিমিয়াম হোয়ایت মাস্কের এই মিশ্রণ মনকে নিমেষেই সতেজ ও আনন্দিত করে তোলে।" 
    },
    { 
        id: 3, 
        name: "Blue Snake 100ml (Exclusive)", 
        price: 3500, 
        category: "perfume", 
        notes: "Ocean Breeze, Crisp Mint, Cedarwood, Vetiver", 
        images: [
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500&auto=format&fit=crop&q=80"
        ],
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=80",
        badge: "Hot Drop", 
        longevity: "8-12 Hours",
        size: "100ml",
        desc: "একটি এক্সট্রিমলি ফ্রেশ এবং আল্ট্রা-অ্যাকোয়াটিক পারফিউম। এর ভাইব্রেন্ট ব্লু ওশানিক ব্রিজের সাথে মিন্টের ছোঁয়া আপনাকে দেবে অল-ডে রিফ্রেশিং কনফিডেন্স ও আভিজাত্য।" 
    },
    { 
        id: 4, 
        name: "Brown Snake 100ml Intense", 
        price: 3600, 
        category: "perfume", 
        notes: "Premium Leather, Warm Cinnamon, Spicy Amber, Saffron", 
        images: [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=500&auto=format&fit=crop&q=80"
        ],
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=80",
        badge: "Bold Intense", 
        longevity: "12+ Hours",
        size: "100ml",
        desc: "ব্রাউন স্নেক একটি গাঢ় লেদার এবং ওয়ার姆 স্পাইসি সিগনেচার পারফিউম। যারা স্ট্রং, বোল্ড এবং একটি ম্যাচিউরড মেল স্মেল পছন্দ করেন, এটি তাদের ফার্স্ট চয়েস।" 
    },
    { 
        id: 5, 
        name: "Nightclub Silver High Quality 105ml", 
        price: 2900, 
        category: "perfume", 
        notes: "Fresh Pineapple, Bergamot, Birch Wood, Musk", 
        images: [
            "https://perfumepalace.in/cdn/shop/products/ArmafClubDeNuitIntenseManEDT105ml_7e52a5c0-12bd-4b68-bdf3-cd306c58be8a.png?v=1655118012",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=80"
        ],
        image: "https://perfumepalace.in/cdn/shop/products/ArmafClubDeNuitIntenseManEDT105ml_7e52a5c0-12bd-4b68-bdf3-cd306c58be8a.png?v=1655118012",
        badge: "Club King", 
        longevity: "8-10 Hours",
        size: "105ml",
        desc: "বিশ্ববিখ্যাত ক্রিড অ্যাভেন্টাসের নিখুঁত অল্টারনেティブ। ফ্রেশ আনারস ও বার্চ উডের এই স্মোকি-ফ্রুটি সুবাস আপনাকে যেকোনো আড্ডায় বা ক্লাবে আকর্ষণের কেন্দ্রবিন্দু বানাবে।" 
    },
    { 
        id: 6, 
        name: "Nightclub Black High Quality 105ml", 
        price: 3100, 
        category: "perfume", 
        notes: "Intense Lemon, Black Pepper, Rich Leather, Patchouli", 
        images: [
            "https://perfumepalace.in/cdn/shop/products/ArmafClubDeNuitIntenseManLimitedEditionParfum105ml.png?v=1661339891",
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=500&auto=format&fit=crop&q=80"
        ],
        image: "https://perfumepalace.in/cdn/shop/products/ArmafClubDeNuitIntenseManLimitedEditionParfum105ml.png?v=1661339891",
        badge: "Midnight Special", 
        longevity: "10-12 Hours",
        size: "105ml",
        desc: "নাইটক্লাব ব্ল্যাক একটি রিচ, বোল্ড এবং হাই-প্রজেকশন সমৃদ্ধ লিমিটেড এডিশন পারফিউম। এর ইনটেনসিভ লেমন এবং পেপার নোট দারুণ লং-লাস্টিং পারফরম্যান্স দেয়।" 
    },
    { 
        id: 7, 
        name: "Red Harvey Luxury 100ml", 
        price: 3400, 
        category: "perfume", 
        notes: "Precious Saffron, Egyptian Jasmine, Cedarwood, Ambergris", 
        images: [
            "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=80"
        ],
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&auto=format&fit=crop&q=80",
        badge: "Royal Scent", 
        longevity: "12+ Hours",
        size: "100ml",
        desc: "রেড হার্ভে সায়ফ্রন এবং ইজিপশিয়ান জেสมিনের একটি ইউনিক সুইট ও ওরিয়েন্টাল ব্লেন্ড। এর রয়্যাল ভাইব যেকোনো লাক্সারি লাভারের মন জয় করতে বাধ্য।" 
    },
    { 
        id: 8, 
        name: "Ice Harvey Fresh 100ml", 
        price: 3300, 
        category: "perfume", 
        notes: "Frozen Mint, Zesty Grapefruit, Vetiver, Oakmoss", 
        images: [
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=80"
        ],
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=80",
        badge: "Summer Savior", 
        longevity: "6-8 Hours",
        size: "100ml",
        desc: "আইস হার্ভে প্রচণ্ড গরমের ক্লান্তি দূর করার জন্য বেস্ট চয়েস। এর ক্রিস্পি ফ্রোজেন মিন্ট এবং গ্রেপফ্রুট নোট অত্যন্ত রিফ্রেশিং এবং এনার্জেটিক অনুভূতি দেয়।" 
    },
    { 
        id: 9, 
        name: "Gray No. 9 Signature 100ml", 
        price: 3800, 
        category: "perfume", 
        notes: "Cardamom, Elegant Iris, Sandalwood, Virginia Cedar", 
        images: [
            "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=500&auto=format&fit=crop&q=80"
        ],
        image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&auto=format&fit=crop&q=80",
        badge: "Signature Office", 
        longevity: "8-10 Hours",
        size: "100ml",
        desc: "倾 ৯ একটি ক্লাসি, পাউডারি এবং আইরিস-বেইজড লাক্সারি পারফিউম। এটি office, মিটিং এবং যেকোনো ফর্মাল ইউজের জন্য অত্যন্ত প্রফেশনাল ও মার্জিত।" 
    },
    { 
        id: 10, 
        name: "Black No. 9 Intense 100ml", 
        price: 3900, 
        category: "perfume", 
        notes: "Roasted Coffee, Dark Incense, Black Vanilla, Wood", 
        images: [
            "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&auto=format&fit=crop&q=80"
        ],
        image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=500&auto=format&fit=crop&q=80",
        badge: "Dark Mystery", 
        longevity: "10-12 Hours",
        size: "100ml",
        desc: "ব্ল্যাক নং ৯ একটি ডার্ক, স্মোকি কফি এবং ব্ল্যাক ভ্যানিলার মিস্ট্রিয়াস ব্লেন্ড। রাতের যেকোনো পার্টি বা জমকালো ইভেন্টে আপনাকে ভিড়ের মাঝেও আলাদা করে তুলবে।" 
    },
    { 
        id: 11, 
        name: "Blue No. 9 Fresh 100ml", 
        price: 3700, 
        category: "perfume", 
        notes: "Pure Sea Salt, Calabrian Bergamot, Light Patchouli", 
        images: [
            "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=80"
        ],
        image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500&auto=format&fit=crop&q=80",
        badge: "Ocean Fresh", 
        longevity: "6-8 Hours",
        size: "100ml",
        desc: "ব্লু নং ৯ সামুদ্রিক হাওয়া এবং ফ্রেশ ইতালিয়ান বারগামোটের দারুণ ছোঁয়া এনে দেয়। ক্যাজুয়াল লাইফস্টাইলের জন্য অত্যন্ত চমৎকার একটি ডেইলি সিগনেচার ওয়্যার।" 
    },
    { 
        id: 12, 
        name: "Kamla Wine Red Wooden Box Edition", 
        price: 4800, 
        category: "perfume", 
        notes: "Premium Red Wine Accord, Oakwood, Cinnamon, Sweet Vanilla", 
        images: [
            "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&auto=format&fit=crop&q=80"
        ],
        image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=500&auto=format&fit=crop&q=80",
        badge: "Collector's Luxury", 
        longevity: "12+ Hours",
        size: "100ml",
        desc: "অত্যಂತ এক্সক্লুসিভ কাঠের বক্স প্যাকিংয়ে তৈরি কামলা ওয়াইন রেড। রিচ ওকউড ও ভ্যানিলার এই ফিউশন রাজকীয় আভিজাত্যের এক অনন্য বহিঃপ্রকাশ।" 
    },
    { 
        id: 13, 
        name: "Kamla Black Wooden Box Edition", 
        price: 4900, 
        category: "perfume", 
        notes: "Precious Cambodi Oud, Dark Chocolate, Amber, Sandalwood", 
        images: [
            "https://images.unsplash.com/photo-1615396899839-c99c121888b0?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=500&auto=format&fit=crop&q=80"
        ],
        image: "https://images.unsplash.com/photo-1615396899839-c99c121888b0?w=500&auto=format&fit=crop&q=80",
        badge: "Royal Oud", 
        longevity: "12+ Hours",
        size: "100ml",
        desc: "কামলা ব্ল্যাক কাঠের প্রিমিয়াম বক্স এডিশন। খাঁটি ও দামী কম্বোডি উদ এবং ডার্ক চকোলেটের এক ওরিয়েন্টাল মহাকাব্যিক কম্বিনেশন, যা উচ্চ আভিজাত্যের প্রতীক।" 
    },
    { 
        id: 14, 
        name: "Yara Dark Brown 100ml", 
        price: 2700, 
        category: "perfume", 
        notes: "Cocoa Powder, Creamy Caramel, Warm Sandalwood", 
        images: [
            "https://perfumepalace.in/cdn/shop/files/LattafaYaraTout.png?v=1701937554",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=80"
        ],
        image: "https://perfumepalace.in/cdn/shop/files/LattafaYaraTout.png?v=1701937554",
        badge: "Gourmand Sweet", 
        longevity: "8-10 Hours",
        size: "100ml",
        desc: "ইয়ারা ডার্ক ব্রাউন চকোলেট ও সুইট লাভারদের স্বপ্নের পারফিউম। রিচ কোকো এবং ক্যারামেলের মিষ্টি ও ওয়াম ঘ্রাণ একে অসম্ভব আকর্ষণীয় করে তুলেছে।" 
    },
    { 
        id: 15, 
        name: "Yara Black Intense 100ml", 
        price: 2800, 
        category: "perfume", 
        notes: "Dark Berry, Midnight Orchid, Heavy Musk", 
        images: [
            "https://i.pinimg.com/736x/10/26/da/1026da5961de20ed65c1d500cab56def.jpg",
            "https://i.pinimg.com/736x/a5/74/60/a574604b89e8b986896bced63b0e8054.jpg",
            "https://i.pinimg.com/736x/16/22/5d/16225df19f785fb8688f27ee3780bbae.jpg",
            "https://i.pinimg.com/736x/e7/c1/39/e7c139b5ff2a86ba8cf653406977a74c.jpg"
        ],
        image: "https://i.pinimg.com/736x/c0/a7/3e/c0a73ed5ef0b77d38243b4ddc0da79c8.jpg",
        badge: "Midnight Diva", 
        longevity: "10-12 Hours",
        size: "100ml",
        desc: "ইয়ারা ব্ল্যাক একটি ডিপ এবং বোল্ড ফ্রুটি-মাস্কি সুবাস। এর মিডনাইট মাস্ক এবং ডার্ক বেরি নোটস দীর্ঘ সময় ধরে আপনার চারপাশের বাতাসে উপস্থিতি জানান দেবে।" 
    }
];