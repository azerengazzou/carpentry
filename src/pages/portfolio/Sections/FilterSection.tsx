import { motion } from "framer-motion";
import { Filter } from "lucide-react";

type Category = {
    id: string;
    label: string;
};

interface FilterSectionProps {
    categories: Category[];
    activeFilter: string;
    setActiveFilter: (id: string) => void;
}

const FilterSection = ({ categories, activeFilter, setActiveFilter }: FilterSectionProps) => {
    return (
        <section className="py-12 bg-white border-b border-stone-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 ${activeFilter === category.id
                                    ? "bg-amber-600 text-white shadow-lg"
                                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Filter className="w-4 h-4" />
                            <span>{category.label}</span>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FilterSection;
