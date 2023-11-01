export const mockProducts = [
  {
    id: 1,
    reference: '11.10.2023',
    nome: 'óculos',
    price: 34.5,
    description: (`'Nossos modelos de óculos são resistentes 
    e modernos de categoria Premium, sempre focando na excelência, 
    segurança, qualidade e o melhor custo benefício para o cliente.'`),
    tecInfo: 'Original, lente policarbonato com proteção contra raios solares UV 400',
    NCM: 0,
    deliveryTime: 'mensal',
    categoryName: 'oculos',
    categoryId: 3,
    sizes: {
      unico: { quantity: 6, stock: 107 },
    },
    openGrid: 0,
    images: [
      { id: 34, url: 'https://images.ray-ban.com/is/image/RayBan/805289304456__STD__shad__al2.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2' },
    ],
  },
  {
    id: 13,
    reference: '12.45.2023',
    nome: 'ocúlos de sol preto',
    price: 50.24,
    description: 'Melhor custo benefício para o cliente.',
    tecInfo: (`'Original, óculos de sol redondos, 
    lente policarbonato com proteção contra raios solares UV 500'`),
    NCM: 0,
    deliveryTime: 'mensal',
    categoryName: 'oculos',
    categoryId: 3,
    sizes: {
      unico: { quantity: 1, stock: 50 },
    },
    openGrid: 0,
    images: [
      { id: 8, url: 'https://images.ray-ban.com/is/image/RayBan/805289348139__002.png?impolicy=RB_Product&amp;width=1024&amp;bgc=%23f2f2f2' },
      { id: 9, url: 'https://images.ray-ban.com/is/image/RayBan/805289348139_0000.png?impolicy=RB_Product_front&width=1024&bgc=%23f2f2f2' },
    ],
  },
  {
    id: 88,
    reference: '08.45.2001',
    nome: 'Casaco infantil',
    price: 199.98,
    description: 'Casaco infantil inverno colorido',
    tecInfo: '',
    NCM: 0,
    deliveryTime: 'mensal',
    categoryName: 'infantil',
    categoryId: 11,
    sizes: {
      P: { quantity: 2, stock: 45 },
      M: { quantity: 2, stock: 45 },
      G: { quantity: 1, stock: 45 },
    },
    openGrid: 0,
    images: [
      { id: 12, url: 'https://paineladm.e-catalogos.net/storage/2110/2110_16074783815dke1jnq4nu3sdv1zwhis9.png' },
      { id: 13, url: 'https://paineladm.e-catalogos.net/storage/2110/2110_1551193941gvuwpvnrbf58yunqblueaf.png' },
      { id: 65, url: 'https://paineladm.e-catalogos.net/storage/2110/2110_1573128558q11nb346kubux9sry0grq.png' },
    ],
  },
  {
    id: 16,
    reference: '16.10.2020',
    nome: 'Conjunto casaco infantil',
    price: 250.3,
    description: 'Conjunto infantil, inverno ROSA, Blusa e chapéu.',
    tecInfo: '',
    NCM: 0,
    deliveryTime: 'pronta entrega',
    categoryName: 'infantil',
    categoryId: 11,
    sizes: {
      P: { quantity: 2, stock: 40 },
      M: { quantity: 3, stock: 40 },
      G: { quantity: 3, stock: 40 },
      GG: { quantity: 2, stock: 35 },
    },
    openGrid: 1,
    images: [
      { id: 89, url: 'https://paineladm.e-catalogos.net/storage/2110/2110_1573128500sm752p2ku7b4y6xep309x4.png' },
    ],
  },
];

// openGrid -> Fala se um produto tem grade aberta ou fechada. Valor 1 significa true, logo, é grade aberta. 0 é false, logo, grade fechada.
// sizes é um objeto que fala a quantidade de cada tamanho de uma referência(produto)
// Caso um produto seja grade fechada, o valor do pack é a soma das quantidades de cada tamanho multiplicado pelo preço
