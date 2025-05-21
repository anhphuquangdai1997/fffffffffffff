import { TbMenu4, TbRuler2 } from "react-icons/tb";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const priceOptions = [
    { label: "Tất cả", value: "all" },
    { label: "Dưới 2 triệu", value: "under2" },
    { label: "Từ 2 - 4 triệu", value: "2to4" },

    { label: "Trên 20 triệu", value: "above20" },
];
const categoryOptions = [
    { label: "Tất cả", value: "all" },
    { label: "Điện thoại", value: "phone" },
    { label: "Laptop", value: "laptop" },
    { label: "Ipad", value: "tablet" },
    { label: "Phụ kiện", value: "accessory" },
];

const Filter: React.FC = () => {
    const [showPrice, setShowPrice] = useState<boolean>(true);
    const [selected, setSelected] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [showCategory, setShowCategory] = useState<boolean>(true);

    const handleSelect = (value: string) => {
        setSelected(value);
    };
    const handleSelectCategory = (value: string) => {
        setSelectedCategory(value);
    };
    return (
        <div className="sticky top-[0.25rem] h-fit left-0 px-4 py-3 bg-white rounded shadow-md w-64">
            <p className="flex justify-between font-bold text-lg text-gray-800 items-center gap-2 mb-4">
                <TbMenu4 />
                <span className="flex items-center">Bộ lọc tìm kiếm</span>
            </p>
            <div className="border-b border-gray-200 pb-2 mb-2">
                <div
                    className="flex items-center justify-between cursor-pointer select-none"
                    onClick={() => setShowPrice((prev) => !prev)}
                >
                    <span className="font-semibold text-base">Mức giá</span>
                    {showPrice ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                </div>

            </div>
            {showPrice && (
                <div className="flex flex-col gap-2 pl-1">
                    {priceOptions.map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selected === option.value}
                                onChange={() => handleSelect(option.value)}
                                className="accent-red-500 w-4 h-4"
                            />
                            <span className={selected === option.value ? "font-semibold text-red-600" : "text-gray-500"}>{option.label}</span>
                        </label>
                    ))}
                    <div className="flex pt-4">
                        <div className="relative">
                            <div className="border rounded text-[14px] h-[2rem] px-3 py-1.5 " >
                                <input type="text" placeholder="Từ" className="w-full text-right pr-[33px]" />
                            </div>
                        </div>
                        <span className="flex items-center px-1">~</span>
                        <div className="relative">
                            <div className="border rounded text-[14px] h-[2rem] px-3 py-1.5 " >
                                <input type="text" placeholder="Từ" className="w-full text-right pr-[33px]" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <input className="w-full appearance-none h-2 bg-gray-300 rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gray-600 [&::-webkit-slider-thumb]:rounded-full" type="range" min={0} max={100} />
                    </div>
                    <div className="px-2 pb-1.5 mb:mx-0.5">
                        <span className="text-gray-500 text-sm">
                            <span className="text-red-500">*</span>
                            Bạn có thể nhập khoảng giá phù hợp với bạn
                        </span>
                    </div>
                </div>
            )}

            <div className="border-b border-gray-200 pb-2 mb-2">
                <div
                    className="flex items-center justify-between cursor-pointer select-none"
                    onClick={() => setShowCategory((prev) => !prev)}
                >
                    <span className="font-semibold text-base">Thể loại</span>
                    {showCategory ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                </div>

            </div>
            {
                showCategory && (
                    <div className="grid grid-cols-2 gap-2">
                        {categoryOptions.map((option) => (
                            <div key={option.value}>
                                <p
                                    className={`w-full text-left border ${selectedCategory === option.value ? "border-red-500 bg-gray-100 text-red-500" : ""} font-roboto text-sm cursor-pointer border-gray-200 px-2 py-1.5 hover:bg-gray-100 rounded-md`}
                                    onClick={() => handleSelectCategory(option.value)}>
                                    {option.label}
                                </p>
                            </div>
                        ))}
                    </div>
                )
            }

        </div>
    )
}
export default Filter
