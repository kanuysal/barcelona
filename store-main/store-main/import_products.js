const fs = require('fs');
const path = require('path');

// Target Categories and Colors
const TARGET_CATEGORIES = [
    "Gelinlik", "Tesettür Gelinlik", "Nişan Elbisesi", "Kına Elbisesi",
    "After Party", "Abiye", "Diğer"
];

const TARGET_COLORS = [
    "Beyaz", "Siyah", "Kırmızı", "Fuşya", "Bordo", "Bej",
    "Lacivert", "Bakır", "Gümüş", "Altın", "Diğer"
];

function determineDisplayCategory(p) {
    const slugs = p.categories || [p.category];
    if (!slugs || slugs.length === 0) return "Diğer";

    // Mapping slugs to Target Categories
    const slugMap = {
        'gelinlik': 'Gelinlik',
        'tesettur-gelinlik': 'Tesettür Gelinlik',
        'nisanlik': 'Nişan Elbisesi',
        'kina-elbisesi': 'Kına Elbisesi',
        'after-party': 'After Party',
        'abiye': 'Abiye'
    };

    for (const slug of slugs) {
        if (slugMap[slug]) return slugMap[slug];
        if (slug.includes('gelinlik') && slug.includes('tesettur')) return "Tesettür Gelinlik";
        if (slug.includes('gelinlik')) return "Gelinlik";
        if (slug.includes('kina')) return "Kına Elbisesi";
        if (slug.includes('nisan')) return "Nişan Elbisesi";
        if (slug.includes('abiye')) return "Abiye";
    }

    return "Diğer";
}

function determineDisplayColor(p) {
    const rawColor = p.mappedAttributes?.Renk || "Diğer";
    const colorStr = rawColor.toLowerCase();

    const colorMap = {
        'beyaz': 'Beyaz', 'ekru': 'Beyaz',
        'siyah': 'Siyah',
        'kırmızı': 'Kırmızı',
        'fuşya': 'Fuşya',
        'bordo': 'Bordo',
        'bej': 'Bej', 'vizon': 'Bej', 'nude': 'Bej',
        'lacivert': 'Lacivert',
        'bakır': 'Bakır',
        'gümüş': 'Gümüş', 'gri': 'Gümüş',
        'altın': 'Altın', 'gold': 'Altın'
    };

    for (const [key, value] of Object.entries(colorMap)) {
        if (colorStr.includes(key)) return value;
    }

    return "Diğer";
}

function determineModestyStatus(p) {
    if (p.isModest === true) return "Evet";
    const modestyAttr = p.mappedAttributes?.["Tesettür Uyumu"] || "";
    return modestyAttr.toLowerCase().includes('evet') ? "Evet" : "Hayır";
}

function mapProduct(p) {
    // Determine image URL from R2 CDN structure
    const baseUrl = "https://database.minalidya.wedding/images/";
    const uniqueStub = p.uniqueStub || p.slug || p.id;
    const coverFile = p.cover || "cover.avif";
    const imageUrl = `${baseUrl}${uniqueStub}/${coverFile}`;

    // Determine target URL
    const productUrl = `https://minalidya.wedding/single-product.html?id=${uniqueStub}`;

    const category = determineDisplayCategory(p);
    const color = determineDisplayColor(p);
    const modesty = determineModestyStatus(p);

    return {
        id: p.id || uniqueStub,
        title: p.productName || "Mina Lidya Gown",
        price: p.price || null,
        image_url: imageUrl,
        product_url: productUrl,
        brand: category,
        primary_color: color,
        primary_color_hex: "#111111",
        modesty: modesty
    };
}

// 1. Read the products from the "Master" source
const inputPath = path.resolve('D:/minadesign/github/antigravity/SERKAN/minalidya.wedding/assets/json/products.json');
console.log('Reading:', inputPath);
const rawData = fs.readFileSync(inputPath, 'utf8');
const products = JSON.parse(rawData);

console.log(`Found ${products.length} products to process.`);

// 2. Map the products
const mappedProducts = products.map(mapProduct);

// 3. Write the output
const outputPath = path.resolve(__dirname, 'backend/gowns.json');
fs.writeFileSync(outputPath, JSON.stringify(mappedProducts, null, 2));

console.log(`Successfully mapped and saved ${mappedProducts.length} items to ${outputPath}`);
