//import { TestDevSource } from "../../data-source";
import { Category } from "../../entity/Category";
import { Product } from "../../entity/Products";

export const createProdMutation = async (name: any, description: any, price: any, image: any, quantity: any, onSale: any, categoryId: any, userId: any) => {
    try {
        if (!name || !description || !price || !image || !quantity || !categoryId) {
            return [{
                path: "product",
                message: "Please provide all input"
            }]
        }
        const id = categoryId

        const category = await Category.findOne({
            where: { id }, relations: {
                products: true
            }
        })

        if (!category) {
            return [{
                path: "Category",
                message: "Invalid category id"
            }]
        }

    } catch (error) {
        if (error.code === '22P02') {
            return [{
                path: "category",
                message: "Something bad happened! Please try again"
            }]
        }
    }
    const product = Product.create({
        name,
        description,
        price,
        image,
        quantity,
        onSale,
        category: categoryId,
        user: userId
    })

    await product.save()
    return null;
}
