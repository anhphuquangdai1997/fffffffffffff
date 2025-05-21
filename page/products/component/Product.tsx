import { useEffect, useState } from 'react'
import productApi from '../../../services/ApiProducts';
import ProductCard from './ProductCard';
import type { Product } from '../../../interface/Products';
import Loader from '../../../components/layout/Loader';
import Pagination from '../../../components/layout/Pagination';
const Product: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPage, setTotalPage] = useState<number>(1)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productApi.products.getAllProducts({page: currentPage});
                const total=Math.ceil(response.data.productsCount/response.data.resultPerPage)
                setProducts(response.data.products);
                setTotalPage(total)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }
        fetchProducts();
    }, [currentPage])

    if(isLoading) return <Loader/>

    return (
        <div className='w-full min-h-[800px] p-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard product={product} key={product._id} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPage={totalPage}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    )
}

export default Product
