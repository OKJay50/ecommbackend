const Product = require ('./Product');
const Category = require ('./Category');
const ProductTag = require ('./ProductTag');
const Tag = require ('./Tag');

Product.belongsTo ( Category , {
    foreignKey: "category_id",
    onDelete: "CASCADE",
})

Product.belongsToMany ( Tag, {
    through:ProductTag ,
    foreignKey: "product_id",
})

Tag.belongsToMany ( Product, {
    through: ProductTag ,
    foreignKey: "tag_id",
})
