'use client';

export function Loader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white dark:bg-black transition-colors duration-300">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-600 dark:border-yellow-300"></div>
        </div>
    );
}
