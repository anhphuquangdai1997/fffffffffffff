import { useParams } from "react-router-dom";
import productApi from "../../../services/ApiProducts";
import { useEffect, useState } from "react";
import { Product } from "../../../interface/Products";
import { BsCart2 } from "react-icons/bs";
import Rating from "../../../components/layout/Rating";
import Breadcrumb from "../../../components/layout/Breadcrumb";

const ProductDetail: React.FC = () => {
    const { id } = useParams();
    const [productId, setProductId] = useState<Product | null>(null)
    const [selectImage, setselectImage] = useState<string>("")
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

    useEffect(() => {
        const fetchProductById = async () => {
            if (!id) return;
            try {
                const response = await productApi.products.getProductById(id)
                setProductId(response.data.product)
                setselectImage(response.data.product.images[0].url)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProductById()
    }, [id])

    useEffect(() => {
        if (!productId) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % productId.images.length;
                setselectImage(productId.images[nextIndex].url);
                return nextIndex;
            });
        }, 3500);

        return () => clearInterval(interval);
    }, [productId]);

    if (!productId) return null;

    return (
        <div className="max-w-6xl mx-auto p-4">
            <Breadcrumb />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* left */}
                <div className="p-2">
                    <img className="w-full h-[450px] cursor-pointer py-2 object-contain bg-white rounded-xl border border-gray-200" src={selectImage} alt="" />
                    <div className="flex mt-4 gap-2">
                        {productId.images.map((image, index) => (
                            <img
                                onClick={() => {
                                    setselectImage(image.url);
                                    setCurrentImageIndex(index);
                                }}
                                key={image._id}
                                className={`w-20 h-20 cursor-pointer object-contain bg-white rounded-xl border ${selectImage === image.url ? "border-red-500" : "border-gray-200"}`}
                                src={image.url}
                                alt={image.url}
                            />
                        ))}
                    </div>
                </div>
                {/* right */}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-tahoma text-gray-800">{productId.name}</h2>
                    <div className="flex gap-2 text-gray-600 text-md font-tahoma mt-2 mb-4 ">
                        <Rating rating={productId.ratings} />
                        <span>2 reviews</span>
                    </div>

                    <span className="text-3xl font-tahoma font-bold text-red-600 mb-6">{productId.price}đ</span>

                    <div className="mt-2 mb-4 border rounded-lg text-xl text-center border-gray-200 pt-4">
                        <p className="text-gray-600 mx-auto rounded-md mt-2 mb-4">Thông Tin Sản Phẩm</p>
                        <div className="text-left text-sm font-tahoma leading-loose text-gray-600 px-4">
                            <p>{productId.description}</p>
                        </div>
                    </div>

                    <div className="flex gap-2 ">
                        <div className="flex-1">
                            <div className=" w-full h-full flex flex-col items-center justify-center bg-red-500 text-white border border-gray-100 rounded-md text-center ">
                                <span className="font-bold text-xs md:text-sm mb-[2px]">MUA NGAY</span>
                                <span className="text-[9px] font-tahoma"> (Nhận tại nhà hoặc tại cửa hàng) </span>
                            </div>
                        </div>
                        <div className="border py-2 px-0.5 border-gray-200 text-red-500 rounded-md text-center flex flex-col items-center ">
                            <BsCart2 />
                            <span className="text-[9px] font-tahoma">thêm vào giỏ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
