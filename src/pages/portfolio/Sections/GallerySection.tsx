import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
    id: number;
    title: string;
    category: string;
    images: string[];
    description: string;
};

interface GallerySectionProps {
    filteredProjects: Project[];
}

const GallerySection = ({ filteredProjects }: GallerySectionProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

    const nextImage = (projectId: number, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) + 1) % totalImages
        }));
    };

    const prevImage = (projectId: number, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
        }));
    };

    return (
        <div>
            {/* Gallery Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatePresence>
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredProjects.map((project) => {
                                const currentIndex = currentImageIndex[project.id] || 0;
                                const currentImage = project.images[currentIndex];
                                
                                return (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.5 }}
                                        className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                                    >
                                        <div className="aspect-[4/3] overflow-hidden relative">
                                            <img
                                                src={currentImage}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                            
                                            {/* Navigation arrows for multiple images */}
                                            {project.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            prevImage(project.id, project.images.length);
                                                        }}
                                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <ChevronLeft className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            nextImage(project.id, project.images.length);
                                                        }}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <ChevronRight className="w-4 h-4" />
                                                    </button>
                                                </>
                                            )}
                                            
                                            {/* Image indicators */}
                                            {project.images.length > 1 && (
                                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                                                    {project.images.map((_, index) => (
                                                        <div
                                                            key={index}
                                                            className={`w-2 h-2 rounded-full transition-colors ${
                                                                index === currentIndex ? 'bg-white' : 'bg-white/50'
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                            
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300">
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <button
                                                        onClick={() => setSelectedImage(currentImage)}
                                                        className="bg-white text-stone-800 p-3 rounded-full hover:bg-amber-100 transition-colors"
                                                    >
                                                        <ZoomIn className="w-6 h-6" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-stone-800 mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-stone-600 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            src={selectedImage}
                            alt="Agrandir l'image"
                            className="max-w-full max-h-full object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GallerySection;
